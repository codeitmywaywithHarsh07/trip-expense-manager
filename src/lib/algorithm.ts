// lib/algorithm.ts

export type User = {
  id: string;
  name: string;
  upi?: string;
};

export type Expense = {
  id: string;
  description: string;
  payerId: string;
  amount: number;
  splits: Split[];
  splitType: 'equal' | 'custom' | 'percentage' | 'shares';
  timestamp: number;
};

export type Split = {
  userId: string;
  amountOwed: number;
};

export type Transaction = {
  from: string;
  to: string;
  amount: number;
};

function getNetBalances(expenses: Expense[]): Record<string, number> {
  const balances: Record<string, number> = {};

  expenses.forEach((expense) => {
    balances[expense.payerId] = (balances[expense.payerId] || 0) + expense.amount;

    expense.splits.forEach((split) => {
      balances[split.userId] = (balances[split.userId] || 0) - split.amountOwed;
    });
  });

  return balances;
}

export function calculateSettlements(expenses: Expense[]): Transaction[] {
  const balances = getNetBalances(expenses);
  const transactions: Transaction[] = [];

  let debtors = Object.entries(balances)
    .filter(([_, amount]) => amount < -0.01)
    .map(([id, amount]) => ({ id, amount }));

  let creditors = Object.entries(balances)
    .filter(([_, amount]) => amount > 0.01)
    .map(([id, amount]) => ({ id, amount }));

  debtors.sort((a, b) => a.amount - b.amount);
  creditors.sort((a, b) => b.amount - a.amount);

  let i = 0;
  let j = 0;

  while (i < debtors.length && j < creditors.length) {
    const debtor = debtors[i];
    const creditor = creditors[j];

    const amount = Math.min(Math.abs(debtor.amount), creditor.amount);
    const roundedAmount = Math.round(amount * 100) / 100;

    if (roundedAmount > 0) {
      transactions.push({
        from: debtor.id,
        to: creditor.id,
        amount: roundedAmount,
      });
    }

    debtor.amount += amount;
    creditor.amount -= amount;

    if (Math.abs(debtor.amount) < 0.01) i++;
    if (Math.abs(creditor.amount) < 0.01) j++;
  }

  return transactions;
}

export function generateUPILink(upiId: string, name: string, amount: number): string {
  const encodedName = encodeURIComponent(name);
  const note = encodeURIComponent('Trip expense settlement');
  return `upi://pay?pa=${upiId}&pn=${encodedName}&am=${amount}&cu=INR&tn=${note}`;
}
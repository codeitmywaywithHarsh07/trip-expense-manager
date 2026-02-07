'use client'

import { useState } from 'react'
import { User, Expense, Split } from '../lib/algorithm'
import { Plus, X, Receipt, ChevronDown, Users } from 'lucide-react'

interface ExpenseFlowProps {
  members: User[]
  expenses: Expense[]
  onAddExpense: (expense: Expense) => void
  onRemoveExpense: (id: string) => void
}

type SplitType = 'equal' | 'custom' | 'percentage' | 'shares'

export default function ExpenseFlow({ members, expenses, onAddExpense, onRemoveExpense }: ExpenseFlowProps) {
  const [showForm, setShowForm] = useState(false)
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [payerId, setPayerId] = useState(members[0]?.id || '')
  const [splitType, setSplitType] = useState<SplitType>('equal')
  const [selectedMembers, setSelectedMembers] = useState<string[]>(members.map(m => m.id))
  const [customValues, setCustomValues] = useState<Record<string, string>>({})

  const toggleMember = (memberId: string) => {
    setSelectedMembers(prev =>
      prev.includes(memberId)
        ? prev.filter(id => id !== memberId)
        : [...prev, memberId]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!description.trim() || !amount || !payerId || selectedMembers.length === 0) return

    const totalAmount = parseFloat(amount)
    let splits: Split[] = []

    if (splitType === 'equal') {
      const perPerson = totalAmount / selectedMembers.length
      splits = selectedMembers.map(userId => ({
        userId,
        amountOwed: Math.round(perPerson * 100) / 100,
      }))
    } else if (splitType === 'custom') {
      const total = selectedMembers.reduce((sum, id) => sum + (parseFloat(customValues[id]) || 0), 0)
      if (Math.abs(total - totalAmount) > 0.01) {
        alert(`Amounts must add up to ₹${totalAmount}`)
        return
      }
      splits = selectedMembers.map(userId => ({
        userId,
        amountOwed: parseFloat(customValues[userId]) || 0,
      }))
    } else if (splitType === 'percentage') {
      const totalPct = selectedMembers.reduce((sum, id) => sum + (parseFloat(customValues[id]) || 0), 0)
      if (Math.abs(totalPct - 100) > 0.01) {
        alert('Percentages must add up to 100%')
        return
      }
      splits = selectedMembers.map(userId => ({
        userId,
        amountOwed: Math.round((totalAmount * (parseFloat(customValues[userId]) || 0) / 100) * 100) / 100,
      }))
    } else if (splitType === 'shares') {
      const totalShares = selectedMembers.reduce((sum, id) => sum + (parseFloat(customValues[id]) || 0), 0)
      if (totalShares === 0) {
        alert('Total shares must be greater than 0')
        return
      }
      splits = selectedMembers.map(userId => ({
        userId,
        amountOwed: Math.round((totalAmount * (parseFloat(customValues[userId]) || 0) / totalShares) * 100) / 100,
      }))
    }

    const expense: Expense = {
      id: Date.now().toString(),
      description: description.trim(),
      payerId,
      amount: totalAmount,
      splits,
      splitType,
      timestamp: Date.now(),
    }

    onAddExpense(expense)
    
    // Reset form
    setDescription('')
    setAmount('')
    setCustomValues({})
    setShowForm(false)
  }

  const totalExpenses = expenses.reduce((sum, e) => sum + e.amount, 0)

  return (
    <div className="space-y-4 animate-fade-in">
      {/* Summary card */}
      <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-6 text-white shadow-xl">
        <div className="flex items-center justify-between mb-2">
          <p className="text-purple-100">Total Expenses</p>
          <Receipt className="w-5 h-5 text-purple-200" />
        </div>
        <p className="text-4xl font-bold">₹{totalExpenses.toFixed(2)}</p>
        <p className="text-purple-100 text-sm mt-2">
          {expenses.length} {expenses.length === 1 ? 'expense' : 'expenses'} added
        </p>
      </div>

      {/* Add expense button */}
      {!showForm && (
        <button
          onClick={() => setShowForm(true)}
          className="w-full py-6 bg-white rounded-3xl shadow-lg hover:shadow-xl active:scale-[0.98] transition-all group"
        >
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 gradient-coral rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Plus className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Add Expense</span>
          </div>
        </button>
      )}

      {/* Expense form */}
      {showForm && (
        <div className="bg-white rounded-3xl shadow-xl p-6 space-y-4 animate-scale-in">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-gray-900">New Expense</h3>
            <button
              onClick={() => setShowForm(false)}
              className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What for?
              </label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="e.g., Dinner at Italian Place"
                className="w-full px-4 py-3 bg-gray-50 rounded-xl border-2 border-transparent focus:border-brand-coral focus:bg-white transition-all"
                autoFocus
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">
                    ₹
                  </span>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.00"
                    step="0.01"
                    min="0"
                    className="w-full pl-8 pr-4 py-3 bg-gray-50 rounded-xl border-2 border-transparent focus:border-brand-mint focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Paid by
                </label>
                <div className="relative">
                  <select
                    value={payerId}
                    onChange={(e) => setPayerId(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 rounded-xl border-2 border-transparent focus:border-brand-lavender focus:bg-white transition-all appearance-none"
                  >
                    {members.map(member => (
                      <option key={member.id} value={member.id}>
                        {member.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Split type
              </label>
              <div className="grid grid-cols-2 gap-2">
                {(['equal', 'custom', 'percentage', 'shares'] as SplitType[]).map(type => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setSplitType(type)}
                    className={`px-4 py-2 rounded-xl font-medium transition-all ${
                      splitType === type
                        ? 'bg-brand-coral text-white shadow-md'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Split among
              </label>
              <div className="space-y-2">
                {members.map(member => {
                  const isSelected = selectedMembers.includes(member.id)
                  return (
                    <div
                      key={member.id}
                      className={`p-3 rounded-xl border-2 transition-all ${
                        isSelected
                          ? 'border-brand-mint bg-green-50'
                          : 'border-gray-200 bg-gray-50'
                      }`}
                    >
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => toggleMember(member.id)}
                        />
                        <span className="flex-1 font-medium text-gray-900">
                          {member.name}
                        </span>
                        {isSelected && splitType !== 'equal' && (
                          <input
                            type="number"
                            value={customValues[member.id] || ''}
                            onChange={(e) => setCustomValues({
                              ...customValues,
                              [member.id]: e.target.value
                            })}
                            placeholder={
                              splitType === 'percentage' ? '%' :
                              splitType === 'shares' ? 'shares' : '₹'
                            }
                            step="0.01"
                            min="0"
                            className="w-20 px-2 py-1 text-right bg-white rounded-lg border border-gray-300 focus:border-brand-mint focus:outline-none"
                            onClick={(e) => e.stopPropagation()}
                          />
                        )}
                      </label>
                    </div>
                  )
                })}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 gradient-mint text-white rounded-2xl font-bold text-lg shadow-lg shadow-green-200 active:scale-[0.98] transition-all"
            >
              Add Expense
            </button>
          </form>
        </div>
      )}

      {/* Expenses list */}
      {expenses.length > 0 && (
        <div className="space-y-3">
          {expenses.map((expense, index) => {
            const payer = members.find(m => m.id === expense.payerId)
            return (
              <div
                key={expense.id}
                className="bg-white rounded-2xl p-4 shadow-md animate-slide-down"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <p className="font-bold text-gray-900 text-lg">
                      {expense.description}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Paid by <span className="font-medium text-gray-700">{payer?.name}</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <p className="text-2xl font-bold gradient-coral bg-clip-text text-transparent">
                      ₹{expense.amount.toFixed(2)}
                    </p>
                    <button
                      onClick={() => onRemoveExpense(expense.id)}
                      className="p-1.5 rounded-full hover:bg-red-50 text-gray-400 hover:text-red-500 transition-all"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">
                    Split {expense.splitType} among {expense.splits.length}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* Empty state */}
      {expenses.length === 0 && !showForm && (
        <div className="text-center py-16 px-4">
          <div className="text-6xl mb-4">🧾</div>
          <p className="text-gray-500 text-lg">
            No expenses yet
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Tap the button above to add your first expense
          </p>
        </div>
      )}
    </div>
  )
}
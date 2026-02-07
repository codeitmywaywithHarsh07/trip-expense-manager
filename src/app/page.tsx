'use client'

import { useState } from 'react'
import { User, Expense, calculateSettlements } from '../lib/algorithm'
import MemberFlow from '../components/MemberFlow'
import ExpenseFlow from '../components/ExpenseFlow'
import SettlementView from '../components/SettlementView'
import Header from '../components/Header'
import FloatingButton from '../components/FloatingButton'
import Dashboard from '../components/Dashboard'

type Step = 'members' | 'expenses' | 'settlements'

export default function Home() {
  const [step, setStep] = useState<Step>('members')
  const [members, setMembers] = useState<User[]>([])
  const [expenses, setExpenses] = useState<Expense[]>([])

  const addMember = (member: User) => {
    setMembers([...members, member])
  }

  const removeMember = (id: string) => {
    setMembers(members.filter(m => m.id !== id))
    // Remove expenses paid by this member
    setExpenses(expenses.filter(e => e.payerId !== id))
  }

  const addExpense = (expense: Expense) => {
    setExpenses([...expenses, expense])
  }

  const removeExpense = (id: string) => {
    setExpenses(expenses.filter(e => e.id !== id))
  }

  const settlements = calculateSettlements(expenses)

  const handleNext = () => {
    if (step === 'members' && members.length >= 2) {
      setStep('expenses')
    } else if (step === 'expenses' && expenses.length > 0) {
      setStep('settlements')
    }
  }

  const handleBack = () => {
    if (step === 'settlements') {
      setStep('expenses')
    } else if (step === 'expenses') {
      setStep('members')
    }
  }

  const canProceed = 
    (step === 'members' && members.length >= 2) ||
    (step === 'expenses' && expenses.length > 0)

  return (
    <main className="min-h-screen pb-24">
      {true ? <><Dashboard/></> : 
      <>
      <Header 
        step={step} 
        onBack={step !== 'members' ? handleBack : undefined}
      />

      <div className="px-4 pt-4">
        {step === 'members' && (
          <MemberFlow 
            members={members}
            onAddMember={addMember}
            onRemoveMember={removeMember}
          />
        )}

        {step === 'expenses' && (
          <ExpenseFlow
            members={members}
            expenses={expenses}
            onAddExpense={addExpense}
            onRemoveExpense={removeExpense}
          />
        )}

        {step === 'settlements' && (
          <SettlementView
            members={members}
            settlements={settlements}
          />
        )}
      </div>

      {step !== 'settlements' && (
        <FloatingButton
          onClick={handleNext}
          disabled={!canProceed}
          text={step === 'members' ? 'Add Expenses' : 'Calculate Split'}
        />
      )}
      </>}

    </main>
  )
}
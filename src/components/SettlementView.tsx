'use client'

import { User, Transaction, generateUPILink } from '../lib/algorithm'
import { ArrowRight, Smartphone, PartyPopper } from 'lucide-react'

interface SettlementViewProps {
  members: User[]
  settlements: Transaction[]
}

export default function SettlementView({ members, settlements }: SettlementViewProps) {
  if (settlements.length === 0) {
    return (
      <div className="animate-fade-in">
        <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-3xl p-8 text-center text-white shadow-2xl">
          <div className="text-7xl mb-4">
            <PartyPopper className="w-16 h-16 mx-auto animate-bounce-subtle" />
          </div>
          <h2 className="text-3xl font-bold mb-2">All Settled!</h2>
          <p className="text-green-50 text-lg">
            Everyone is even. No payments needed! 🎉
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4 animate-fade-in">
      {/* Header card */}
      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-6 text-white shadow-xl">
        <h2 className="text-2xl font-bold mb-2">Settlement Summary</h2>
        <p className="text-indigo-100">
          {settlements.length} {settlements.length === 1 ? 'payment' : 'payments'} to settle everything
        </p>
      </div>

      {/* Settlements */}
      <div className="space-y-3">
        {settlements.map((settlement, index) => {
          const from = members.find(m => m.id === settlement.from)
          const to = members.find(m => m.id === settlement.to)
          
          if (!from || !to) return null

          const hasUPI = !!to.upi

          return (
            <div
              key={`${settlement.from}-${settlement.to}`}
              className="bg-white rounded-3xl p-6 shadow-lg animate-scale-in hover:shadow-xl transition-all"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Payment flow */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full gradient-coral flex items-center justify-center text-white text-lg font-bold shadow-md">
                      {from.name[0].toUpperCase()}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg">
                        {from.name}
                      </p>
                      <p className="text-sm text-gray-500">pays</p>
                    </div>
                  </div>
                </div>

                <div className="px-4">
                  <ArrowRight className="w-8 h-8 text-brand-coral" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-end gap-3">
                    <div>
                      <p className="font-bold text-gray-900 text-lg text-right">
                        {to.name}
                      </p>
                      <p className="text-sm text-gray-500 text-right">receives</p>
                    </div>
                    <div className="w-12 h-12 rounded-full gradient-mint flex items-center justify-center text-white text-lg font-bold shadow-md">
                      {to.name[0].toUpperCase()}
                    </div>
                  </div>
                </div>
              </div>

              {/* Amount */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-4 mb-4">
                <p className="text-center text-4xl font-bold text-gray-900">
                  ₹{settlement.amount.toFixed(2)}
                </p>
              </div>

              {/* UPI Payment button */}
              {hasUPI ? (
                <a
                  href={generateUPILink(to.upi!, to.name, settlement.amount)}
                  className="w-full py-4 gradient-mint text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-2 shadow-lg shadow-green-200 active:scale-[0.98] transition-all ripple"
                >
                  <Smartphone className="w-5 h-5" />
                  Pay via UPI
                </a>
              ) : (
                <div className="py-4 bg-gray-100 text-gray-500 rounded-2xl font-medium text-center">
                  <p className="text-sm">
                    {to.name} hasn't added UPI ID
                  </p>
                  <p className="text-xs mt-1">
                    Payment via cash or other methods
                  </p>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Summary */}
      <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4 text-center">
        <p className="text-blue-900 font-medium">
          💡 This is the most efficient way to settle up!
        </p>
        <p className="text-blue-700 text-sm mt-1">
          Our algorithm minimizes the number of transactions needed
        </p>
      </div>
    </div>
  )
}
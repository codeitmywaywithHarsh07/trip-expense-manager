'use client'

import { useState } from 'react'
import { User } from '../lib/algorithm'
import { UserPlus, X, CreditCard } from 'lucide-react'

interface MemberFlowProps {
  members: User[]
  onAddMember: (member: User) => void
  onRemoveMember: (id: string) => void
}

export default function MemberFlow({ members, onAddMember, onRemoveMember }: MemberFlowProps) {
  const [name, setName] = useState('')
  const [upi, setUpi] = useState('')
  const [showUpi, setShowUpi] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim()) return

    const member: User = {
      id: Date.now().toString(),
      name: name.trim(),
      upi: upi.trim() || undefined,
    }

    onAddMember(member)
    setName('')
    setUpi('')
    setShowUpi(false)
  }

  return (
    <div className="space-y-4 animate-fade-in">
      {/* Quick add form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-lg p-6">
        <div className="space-y-4">
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name (e.g., Sarah)"
              className="w-full px-4 py-4 text-lg bg-gray-50 rounded-2xl border-2 border-transparent focus:border-brand-coral focus:bg-white transition-all"
              autoFocus
            />
          </div>

          {showUpi ? (
            <div className="animate-slide-down">
              <input
                type="text"
                value={upi}
                onChange={(e) => setUpi(e.target.value)}
                placeholder="UPI ID (e.g., sarah@paytm)"
                className="w-full px-4 py-4 text-lg bg-gray-50 rounded-2xl border-2 border-transparent focus:border-brand-mint focus:bg-white transition-all"
              />
              <button
                type="button"
                onClick={() => {
                  setShowUpi(false)
                  setUpi('')
                }}
                className="text-sm text-gray-500 mt-2 hover:text-gray-700"
              >
                Remove UPI
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setShowUpi(true)}
              className="flex items-center gap-2 text-brand-mint font-medium hover:gap-3 transition-all"
            >
              <CreditCard className="w-4 h-4" />
              Add UPI ID (optional)
            </button>
          )}

          <button
            type="submit"
            disabled={!name.trim()}
            className="w-full py-4 gradient-coral text-white rounded-2xl font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98] transition-all shadow-lg shadow-red-200"
          >
            <span className="flex items-center justify-center gap-2">
              <UserPlus className="w-5 h-5" />
              Add {name.trim() || 'Member'}
            </span>
          </button>
        </div>
      </form>

      {/* Members list */}
      {members.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between px-2">
            <p className="text-sm font-medium text-gray-600">
              {members.length} {members.length === 1 ? 'person' : 'people'} added
            </p>
          </div>
          
          {members.map((member, index) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl p-4 shadow-md flex items-center gap-4 animate-scale-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-12 h-12 rounded-full gradient-lavender flex items-center justify-center text-white text-xl font-bold shadow-md">
                {member.name[0].toUpperCase()}
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="font-bold text-gray-900 text-lg truncate">
                  {member.name}
                </p>
                {member.upi && (
                  <p className="text-sm text-brand-mint flex items-center gap-1">
                    <CreditCard className="w-3 h-3" />
                    {member.upi}
                  </p>
                )}
              </div>

              <button
                onClick={() => onRemoveMember(member.id)}
                className="p-2 rounded-full hover:bg-red-50 text-gray-400 hover:text-red-500 transition-all active:scale-90"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Empty state */}
      {members.length === 0 && (
        <div className="text-center py-12 px-4">
          <div className="text-6xl mb-4">👋</div>
          <p className="text-gray-500 text-lg">
            Start by adding your travel buddies
          </p>
          <p className="text-gray-400 text-sm mt-2">
            You need at least 2 people to split expenses
          </p>
        </div>
      )}

      {members.length === 1 && (
        <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-4 text-center">
          <p className="text-amber-800 font-medium">
            Add at least one more person to continue
          </p>
        </div>
      )}
    </div>
  )
}
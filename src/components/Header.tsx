'use client'

import { ArrowLeft } from 'lucide-react'

type Step = 'members' | 'expenses' | 'settlements'

interface HeaderProps {
  step: Step
  onBack?: () => void
}

const stepConfig = {
  members: {
    title: 'Who\'s on the trip?',
    emoji: '👥',
    subtitle: 'Add everyone who will share expenses',
  },
  expenses: {
    title: 'Track expenses',
    emoji: '💸',
    subtitle: 'Add bills, meals, and activities',
  },
  settlements: {
    title: 'Settlement time!',
    emoji: '🎯',
    subtitle: 'See who owes whom',
  },
}

export default function Header({ step, onBack }: HeaderProps) {
  const config = stepConfig[step]

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="px-4 py-4">
        <div className="flex items-center gap-3 mb-3">
          {onBack && (
            <button
              onClick={onBack}
              className="p-2 -ml-2 rounded-full hover:bg-gray-100 active:scale-95 transition-all"
            >
              <ArrowLeft className="w-6 h-6 text-gray-700" />
            </button>
          )}
          <div className="text-4xl">{config.emoji}</div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold font-display text-gray-900">
              {config.title}
            </h1>
            <p className="text-sm text-gray-500 mt-0.5">
              {config.subtitle}
            </p>
          </div>
        </div>

        {/* Step indicator */}
        <div className="flex gap-2">
          <div className={`flex-1 h-1 rounded-full transition-all ${
            step === 'members' ? 'bg-brand-coral' : 'bg-gray-200'
          }`} />
          <div className={`flex-1 h-1 rounded-full transition-all ${
            step === 'expenses' ? 'bg-brand-coral' : 'bg-gray-200'
          }`} />
          <div className={`flex-1 h-1 rounded-full transition-all ${
            step === 'settlements' ? 'bg-brand-coral' : 'bg-gray-200'
          }`} />
        </div>
      </div>
    </header>
  )
}
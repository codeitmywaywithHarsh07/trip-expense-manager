'use client'

import { ArrowRight } from 'lucide-react'

interface FloatingButtonProps {
  onClick: () => void
  disabled?: boolean
  text: string
}

export default function FloatingButton({ onClick, disabled, text }: FloatingButtonProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white via-white to-transparent pointer-events-none">
      <button
        onClick={onClick}
        disabled={disabled}
        className={`w-full py-5 rounded-2xl font-bold text-lg shadow-2xl flex items-center justify-center gap-2 pointer-events-auto transition-all ${
          disabled
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'gradient-coral text-white active:scale-[0.98] shadow-red-300'
        }`}
      >
        {text}
        <ArrowRight className="w-6 h-6" />
      </button>
    </div>
  )
}
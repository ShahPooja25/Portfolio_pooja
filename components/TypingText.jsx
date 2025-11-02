"use client"

import { useEffect, useState } from "react"

export default function TypingText({ text, speed = 100, delay = 0, onComplete }) {
  const [displayedText, setDisplayedText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (!text) return

    const timeoutId = setTimeout(() => {
      let currentIndex = 0
      const intervalId = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(intervalId)
          setIsComplete(true)
          onComplete?.()
        }
      }, speed)

      return () => clearInterval(intervalId)
    }, delay)

    return () => clearTimeout(timeoutId)
  }, [text, speed, delay, onComplete])

  return (
    <span>
      {displayedText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </span>
  )
}

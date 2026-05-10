'use client'

import { useEffect, useRef, useState } from 'react'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  animation?: 'fade-up' | 'fade-in' | 'slide-in-right' | 'slide-in-left'
  delay?: number
  duration?: number
}

export function ScrollReveal({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  duration = 1000,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  const baseClasses = 'transition-all ease-out fill-mode-both'
  const durationClass = `duration-[${duration}ms]`
  
  let animationClasses = ''
  switch (animation) {
    case 'fade-up':
      animationClasses = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      break
    case 'fade-in':
      animationClasses = isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      break
    case 'slide-in-right':
      animationClasses = isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
      break
    case 'slide-in-left':
      animationClasses = isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
      break
  }

  return (
    <div
      ref={ref}
      className={`${baseClasses} ${animationClasses} ${className}`}
      style={{ 
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms` 
      }}
    >
      {children}
    </div>
  )
}

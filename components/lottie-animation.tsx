"use client"

import { useEffect, useRef } from "react"
import Lottie, { type LottieRefCurrentProps } from "lottie-react"
import type { LottieOptions } from "lottie-react"

interface LottieAnimationProps extends Partial<LottieOptions> {
  animationData: any
  className?: string
  loop?: boolean
  autoplay?: boolean
  height?: number | string
  width?: number | string
}

export function LottieAnimation({
  animationData,
  className = "",
  loop = true,
  autoplay = true,
  height = "auto",
  width = "auto",
  ...props
}: LottieAnimationProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null)

  useEffect(() => {
    if (lottieRef.current && autoplay) {
      lottieRef.current.play()
    }
  }, [autoplay])

  return (
    <div className={className} style={{ height, width }}>
      <Lottie lottieRef={lottieRef} animationData={animationData} loop={loop} autoplay={autoplay} {...props} />
    </div>
  )
}


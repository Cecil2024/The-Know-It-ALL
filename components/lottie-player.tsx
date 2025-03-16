"use client"

import { Player } from "@lottiefiles/react-lottie-player"

interface LottiePlayerProps {
  src: string
  className?: string
  autoplay?: boolean
  loop?: boolean
  height?: number | string
  width?: number | string
}

export function LottiePlayer({
  src,
  className = "",
  autoplay = true,
  loop = true,
  height = 300,
  width = 300,
}: LottiePlayerProps) {
  return <Player autoplay={autoplay} loop={loop} src={src} style={{ height, width }} className={className} />
}


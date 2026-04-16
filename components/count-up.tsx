"use client"

import { useRef } from "react"
import { motion, useInView, useMotionValue, useTransform } from "framer-motion"

interface CountUpProps {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
}

export function CountUp({ value, suffix = "", prefix = "", duration = 2 }: CountUpProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const motionValue = useMotionValue(0)
  const roundedValue = useTransform(motionValue, (latest) => Math.round(latest))

  motion.useAnimationFrame((latest) => {
    if (isInView) {
      motionValue.set(latest / 1000 * value * (1000 / (duration * 1000)))
    }
  })

  return (
    <motion.span
      ref={ref}
      className="inline-block opacity-100 transition-opacity"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {prefix}
      {isInView ? <motion.span>{roundedValue}</motion.span> : "0"}
      {suffix}
    </motion.span>
  )
}

"use client"
import Card from '@/components/Card'
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div>
     <Image src="/images/banner.png" alt="hero" width={1920} height={1080} className='w-full h-auto' />
    </div>
  )
}

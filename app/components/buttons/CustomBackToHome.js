'use client'
import Link from 'next/link'
import { Icon } from '@iconify/react'

const CustomBackToHome = () => {
  return (
    <Link href={'/'} replace className='flex gap-2 tracking-normal theme-link-tx group'><Icon icon="ph:arrow-left-light" className='mt-1 scale-75 group-hover:scale-110 origin-right transition-all' aria-label='back to home button'/>Back to home</Link>
  )
}

export default CustomBackToHome
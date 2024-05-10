'use client'
import { Icon } from '@iconify/react'
import Link from 'next/link'

const CustomLink = ({label, href, download}) => {

  return (
    href.includes('http') || download ?
    <a href={href} target='_blank' aria-label={label+" button"} className='external-link relative w-max group tracking-wide theme-link-tx group'>
    <span>{label} <Icon icon="ph:arrow-up-right-light" className={`external-icon ${download ? 'hidden' : ''} inline scale-75 group-hover:scale-110 origin-bottom-left transition-all mb-1`}/></span>
    <span className={`${!download ? 'hidden' : ''} absolute -bottom-1 left-0 w-0 h-0.5 theme-link-bg group-hover:w-full`}></span>
    </a>
    :
    <Link href={href} aria-label={label+" button"} className='internal-link relative w-max group tracking-wide theme-link-tx'>
    <span>{label}</span>
    <span className='absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full theme-link-bg'></span>
    </Link>
  )
}

export default CustomLink
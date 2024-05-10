'use client'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggler from './buttons/ThemeToggler'

const CustomNav = () => {
  const pathname = usePathname()

  function viewResume(){
    var anchor=document.createElement('a');
    anchor.setAttribute('href', '/resume-sok-vireak.pdf');
    anchor.setAttribute('target', '_blank')
    document.body.appendChild(anchor);
    anchor.click();
    anchor.parentNode.removeChild(anchor);
  }

  return (
    <nav id='navbar' className={`navbar-container navbar ${pathname==='/' ? 'flex' : 'hidden'} justify-center sticky top-0 left-0 border theme-bg theme-tx border-slate-800/10 dark:border-slate-100/10 z-50 transition-all p-0`}>
      <div className='navbar-wrapper navbar max-w-screen-2xl'>
        <div className="navbar-start">
          <div className="lg:tooltip lg:tooltip-bottom capitalize before:text-xs after:hidden before:text-gray-600 before:dark:text-gray-300 before:dark:bg-slate-700 before:bg-slate-200 before:rounded-sm" data-tip="View Resume">
            <button className="btn btn-ghost focus:ring rounded-sm group" onClick={()=>viewResume()} aria-label='view resume'>
              <div className="indicator">
                <Icon icon="ph:file-pdf-light" className='w-6 h-6 group-hover:scale-125 transition-all'/>
              </div>
            </button>
          </div>
        </div>
        <div className="navbar-center">
          <Link href={'/'} className="btn btn-ghost text-xl focus:ring rounded-sm group" aria-label='go to homepage'>
            <Image
              alt="logo image"
              src={'/logo.png'}
              width={24}
              height={24}
              sizes='100%'
              priority
              className='group-hover:scale-125 transition-all'
            />
          </Link>
        </div>
        <div className="navbar-end">
          <ThemeToggler/>
        </div>
      </div>
    </nav>
  )
}

export default CustomNav
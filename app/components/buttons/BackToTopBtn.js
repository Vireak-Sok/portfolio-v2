'use client'
import { Icon } from '@iconify/react'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

const BackToTopBtn = () => {
  const pathname = usePathname()
  const backToTop = useRef(null)
  useEffect(() => {
    if(document!=undefined || backToTop.current!="" || backToTop.current!== null){
      var myScrollFunc = function() {
        var y = window.scrollY;
        if (y >= 800) {
          backToTop.current.classList.remove("hidden")
        } else {
          backToTop.current.classList.add("hidden")
        }
      }
    }
    
    window.addEventListener("scroll", myScrollFunc);

  }, [pathname])

  return (
    <button id="back-to-top" ref={backToTop} className="hidden btn btn-square focus:ring rounded-sm sticky top-[85vh] left-[90vw] group bg-slate-300 dark:bg-slate-600 hover:dark:bg-slate-700 hover:bg-slate-200 border-0 z-20" aria-label='back to top of the page' onClick={() =>
      window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <div className="indicator">
        <Icon icon="ph:arrow-fat-lines-up-light" className='w-6 h-6 group-hover:scale-110 transition-all theme-link-tx'/>
      </div>
    </button>
  )
}

export default BackToTopBtn
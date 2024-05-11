'use client'
import { Icon } from '@iconify/react'
import React, { useEffect, useRef, useState } from 'react'

const ThemeToggler = () => {
  const themeOptions = useRef(null)
  const [theme, setTheme] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(()=>{
    setTheme(sessionStorage.getItem("theme"))
    if(window!=undefined){
      if(theme==""){
        if(window.matchMedia('(prefers-color-scheme: dark)').matches){
          document.documentElement.classList.add("dark")
        }else{
          document.documentElement.classList.remove("dark")
        }
      }else{
        if(theme=='dark'){
          document.documentElement.classList.add("dark")
        }else{
          document.documentElement.classList.remove("dark")
        }
      }
    }

    // click outside element to close
    const handleOutSideClick = (event) => {
      if (!themeOptions.current?.contains(event.target)) {
        themeOptions.current.classList.toggle("hidden")
        setIsMenuOpen(!isMenuOpen)
      }
    };
    
    if(isMenuOpen){
      window.addEventListener("mousedown", handleOutSideClick);
      return () => {
        window.removeEventListener("mousedown", handleOutSideClick);
      };
    }

  },[isMenuOpen, theme, themeOptions])

  const handleChange = (mode) => {
    sessionStorage.setItem("theme",mode=='dark'?'dark':mode=='light'?'light':'')
    setTheme(mode=='dark'?'dark':mode=='light'?'light':'')
    themeOptions.current.classList.toggle("hidden")
    setIsMenuOpen(!isMenuOpen)
  }

  const openTheme = () => {
    themeOptions.current.classList.toggle("hidden")
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className='flex flex-col gap-2 items-end relative w-16'>
      <div className="lg:tooltip lg:tooltip-bottom capitalize before:text-xs after:hidden before:text-gray-600 before:dark:text-gray-300 before:dark:bg-slate-700 before:bg-slate-200 before:rounded-sm" data-tip="Change Theme">
        <button id='control-btn' className={`${isMenuOpen ? 'btn-disabled' : 'btn-ghost'} btn focus:ring rounded-sm group`} onClick={() => openTheme()} aria-label='change website theme'>
          <Icon icon={theme==="system"? "ph:circle-half-thin" : theme==="dark" ? "ph:moon-stars-thin" : "ph:sun-thin"} className='w-6 h-6 group-hover:scale-125 transition-all theme-tx'/>
        </button>
      </div>

      <div id='themes-options' ref={themeOptions} className='hidden themes-options absolute top-full rounded-sm overflow-hidden mt-4'>
        <button className={`btn btn-neutral rounded-none w-full text-xs h-4 border-0 dark:text-blue-400 text-blue-700 transition-all bg-slate-300 dark:bg-slate-600 hover:dark:bg-slate-700 hover:bg-slate-200 ${theme==='light' ? 'font-semibold' : 'font-light'}`} onClick={() => handleChange('light')} aria-label='change to light theme'>Light</button>
        <button className={`btn btn-neutral rounded-none w-full text-xs h-4 border-0 dark:text-blue-400 text-blue-700 transition-all bg-slate-300 dark:bg-slate-600 hover:dark:bg-slate-700 hover:bg-slate-200 ${theme==='dark' ? 'font-semibold' : 'font-light'}`} onClick={() => handleChange('dark')}  aria-label='change to dark theme'>Dark</button>
        <button className={`btn btn-neutral rounded-none w-full text-xs h-4 border-0 dark:text-blue-400 text-blue-700 transition-all bg-slate-300 dark:bg-slate-600 hover:dark:bg-slate-700 hover:bg-slate-200 ${theme==='system' ? 'font-semibold' : 'font-light'}`} onClick={() => handleChange('system')}  aria-label='change to system based theme'>System</button>
      </div>
    </div>
  )
}

export default ThemeToggler
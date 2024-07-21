'use client'
import React, {useState} from 'react'
import CustomNav from '../components/CustomNav'
import CustomBackToHome from '../components/buttons/CustomBackToHome'
import Password from './Password'
import Pin from './Pin'

const security = () => {
  const [type,setType] = useState("password")

  function switchType(){
    if(type=="password"){
      setType("pin")
    }else{
      setType("password")
    }
  }

  return (
    <main>
      <CustomNav/>
      <section className="password w-full py-8 px-4 sm:p-8 lg:p-16 flex flex-col items-start justify-center gap-4 sm:gap-8 lg:gap-16">
          <CustomBackToHome/>

          <div className='bg-gray-50 mx-auto flex flex-col gap-6 w-full sm:w-fit'>
            <div className='method-header border border-solid dark:border-slate-500/50 border-slate-500/30'>
              <button className={`w-full sm:w-64 h-8 ${type=="password" ? 'theme-link-bg text-white cursor-default' : 'hover:bg-gray-100'}`} onClick={type=="pin" ? ()=>switchType() : ()=>{return false}}>Password</button>
              <button className={`w-full sm:w-64 h-8 ${type=="pin" ? 'theme-link-bg text-white cursor-default' : 'hover:bg-gray-100'}`} onClick={type=="password" ? ()=>switchType() : ()=>{return false}}>PIN</button>
            </div>
            {type=="password" ? <Password/> : <Pin/>}
          </div>
      </section>
    </main>
  )
}

export default security
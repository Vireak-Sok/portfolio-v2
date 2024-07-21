import { Icon } from '@iconify/react'
import React, { useRef, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

const notify = ({isCopied, text}) => {
  isCopied ? (
    toast.success(
      text + ' was copied!', 
      { position: 'top-center'}
    )
    )
  :(
    toast.error(
      text,
      { position: 'top-center'}
    ))
};

const Pin = () => {
  const [length, setLength] = useState(4)
  const [result, setResult] = useState('')
  const idRef = useRef(null)
  const phone1stRef = useRef(null)
  const passportRef = useRef(null)
  const phone2ndRef = useRef(null)
  const nssfRef = useRef(null)
  const specialRef = useRef(null)
  const resultRef = useRef(null)
  const btnRef = useRef(null)

  function getSum(n) {
        let sum = 0;
        while (n > 0 || sum > 9) {
          if(n == 0) { 
            n = sum; 
            sum = 0; 
          } 
          sum = sum + n % 10;
          n = Math.floor(n / 10);
        }
        return sum;
    }

  function performAction(){
    let tempRes = ''
    let tempNum = ''
    if(length==4){
      if(idRef.current.value !== '' && phone1stRef.current.value !== '' && passportRef.current.value !== '' && specialRef.current.value !== ''){
        tempNum = getSum(parseInt(specialRef.current.value))
        tempRes = idRef.current.value.charAt(6) + phone1stRef.current.value.charAt(1) + passportRef.current.value.charAt(6) + tempNum
      }else{
        notify({isCopied : false, text : "All fields are required!"})
      }
    }else{
      if(idRef.current.value !== '' && phone1stRef.current.value !== '' && passportRef.current.value !== '' && phone2ndRef.current.value !== '' && nssfRef.current.value !== '' && specialRef.current.value !== ''){
        tempNum = getSum(parseInt(specialRef.current.value))
        tempRes = idRef.current.value.charAt(6) + phone1stRef.current.value.charAt(1) + passportRef.current.value.charAt(6) + phone2ndRef.current.value.charAt(2) + nssfRef.current.value.charAt(10) + tempNum
      }else{
        notify({isCopied : false, text : "All fields are required!"})
      }
    }
  resultRef.current.value=tempRes
  setResult(tempRes)
  }

  async function copyContent() {
    try {
      await navigator.clipboard.writeText(result);
      notify({isCopied : true, text : result})
    } catch (err) {
      notify({isCopied : false, text : "Cannot copy the text!"})
    }
  }

  return (
    <div className='wrapper flex flex-col gap-4 lg:gap-6 w-full'>
      <div className='security-methods flex flex-col sm:flex-row justify-between items-center'>
        Choose PIN length:
          <div className='radio-group flex gap-6'>
            <div className="form-control" onClick={()=>{phone2ndRef.current.value='', setResult(""), setLength(4)}}>
              <label className="label cursor-pointer">
                <input type="radio" name="radio-10" className="radio checked:bg-red-500" defaultChecked/>
                <span className="ml-2 label-text">4 Digits</span>
              </label>
            </div>
            <div className="form-control" onClick={()=>{specialRef.current.value='', setResult(""), setLength(6)}}>
              <label className="label cursor-pointer">
                <input type="radio" name="radio-10" className="radio checked:bg-blue-500"/>
                <span className="ml-2 label-text">6 Digits</span>
              </label>
            </div>
          </div>
      </div>
      <div className='info-input-group flex flex-col items-center gap-4 w-full'>
        {length == 4 ? 
        <>
          <input id='idNum' ref={idRef} type="text" name="id_input" autoComplete='off' placeholder='ID Number *' className='source-input p-2 w-full rounded-sm border border-slate-500/30 dark:bg-gray-700 bg-gray-50 transition-all'/>
          <input id='phone1st' ref={phone1stRef} type="text" name="1st_phone_input" autoComplete='off' placeholder='1st Phone Number *' className='source-input p-2 w-full rounded-sm border border-slate-500/30 dark:bg-gray-700 bg-gray-50 transition-all'/>
          <input id='passportNum' ref={passportRef} type="text" name="passport_input" autoComplete='off' placeholder='Passport Number *' className='source-input p-2 w-full rounded-sm border border-slate-500/30 dark:bg-gray-700 bg-gray-50 transition-all'/>
          <input id='specialNum' ref={specialRef} type="text" name="special_input" autoComplete='off' placeholder='Special Number 0-99 *' className='source-input p-2 w-full rounded-sm border border-slate-500/30 dark:bg-gray-700 bg-gray-50 transition-all'/>
          <input id='phone2nd' ref={phone2ndRef} type="text" name="2nd_phone_input" autoComplete='off' placeholder='2nd Phone Number *' className='source-input p-2 w-full rounded-sm border border-slate-500/30 dark:bg-gray-700 bg-gray-50 transition-all hidden'/>
        </>:
        <>
          <input id='idNum' ref={idRef} type="text" name="id_input" autoComplete='off' placeholder='ID Number *' className='source-input p-2 w-full rounded-sm border border-slate-500/30 dark:bg-gray-700 bg-gray-50 transition-all'/>
          <input id='phone1st' ref={phone1stRef} type="text" name="1st_phone_input" autoComplete='off' placeholder='1st Phone Number *' className='source-input p-2 w-full rounded-sm border border-slate-500/30 dark:bg-gray-700 bg-gray-50 transition-all'/>
          <input id='passportNum' ref={passportRef} type="text" name="passport_input" autoComplete='off' placeholder='Passport Number *' className='source-input p-2 w-full rounded-sm border border-slate-500/30 dark:bg-gray-700 bg-gray-50 transition-all'/>
          <input id='phone2nd' ref={phone2ndRef} type="text" name="2nd_phone_input" autoComplete='off' placeholder='2nd Phone Number *' className='source-input p-2 w-full rounded-sm border border-slate-500/30 dark:bg-gray-700 bg-gray-50 transition-all'/>
          <input id='nssfNum' ref={nssfRef} type="text" name="nssf_input" autoComplete='off' placeholder='Nssf Number *' className='source-input p-2 w-full rounded-sm border border-slate-500/30 dark:bg-gray-700 bg-gray-50 transition-all'/>
          <input id='specialNum' ref={specialRef} type="text" name="special_input" autoComplete='off' placeholder='Special Number 0-99 *' className='source-input p-2 w-full rounded-sm border border-slate-500/30 dark:bg-gray-700 bg-gray-50 transition-all'/>
        </>}
        Your PIN is
        <div className='w-full flex items-center gap-4'>
          <input id='result' ref={resultRef} type="text" name="result" disabled placeholder='Result' className='result p-2 w-full rounded-sm border border-slate-500/30 dark:bg-gray-700 bg-gray-50 transition-all' />
          <span className={`h-10 w-12 rounded flex justify-center items-center theme-link-bg group hover:cursor-pointer ${result=="" ? 'hidden' : ''}`} onClick={()=>copyContent()}>
            <Icon icon="fluent:copy-select-24-regular" className={`w-6 h-6 text-white z-50 group-hover:scale-75 transition-all`} aria-label='copy to clipboard button'/>
          </span>
        </div>
      </div>
      <input id='submit-btn' type="submit" ref={btnRef} value="Generate" aria-label='perform button' onClick={performAction} className='perform-btn w-full p-2 hover:cursor-pointer relative font-semibold rounded-sm border dark:border-slate-500/50 border-slate-500/30 dark:bg-gray-700/50 bg-gray-50/50 backdrop-blur-md hover:border-blue-700 dark:hover:border-blue-400 text-gray-400 hover:text-blue-700 dark:hover:text-blue-400 hover:tracking-wide transition-all'/>      
      <Toaster />
    </div>
  )
}

export default Pin
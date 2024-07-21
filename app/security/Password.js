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

const Password = () => {
  const [method, setMethod] = useState('encrypt')
  const [result, setResult] = useState('')
  const sourceRef = useRef(null)
  const resultRef = useRef(null)
  const btnRef = useRef(null)

  // Hello
  // 272651086c11153

  function performAction(){
    if(sourceRef.current.value.length <= 5){
      notify({isCopied : false, text : "Password must be greater than or equal to 6 characters"})
      return;
    }else{
      let tempArr = []
      let tempRes = ''
      if(method=='encrypt'){
        tempArr = sourceRef.current.value.split("")
        tempArr.map((item, index)=>{
          if(index%2==0){
            if(item.charCodeAt(0)<100){
              let num = item.charCodeAt(0)+200
              tempRes=tempRes+num
            }else{
              tempRes=tempRes+item.charCodeAt(0)
            }
          }
          else{
            tempRes=tempRes+item.charCodeAt(0).toString(16)
          }
        })
        if(tempArr.length<10){
          tempRes=tempRes+tempArr.length.toString().charCodeAt(0)
        }else{
          let arrLength = tempArr.length.toString().split("")
          let sumLength = parseInt(arrLength[0]) + parseInt(arrLength[1])
          tempRes=tempRes+sumLength.toString().charCodeAt(0).toString(16)
        }
      }else{
        let tempSrc = sourceRef.current.value.slice(0,-2)
        let i = 0
        while(tempSrc.length>0){
          if(i%2==0){
            tempArr.push(tempSrc.slice(0,3))
            tempSrc = tempSrc.substring(3)
            i=i+1
          }else{
            tempArr.push(tempSrc.slice(0,2))
            tempSrc = tempSrc.substring(2)
            i=i+1
          }
        }
        tempArr.map((item, index) =>{
          if(index%2==0){
            if(parseInt(item)>=200){
              tempRes = tempRes + String.fromCharCode(parseInt(item)-200)
            }else{
              
              tempRes = tempRes + String.fromCharCode(parseInt(item))
            }
          }else{
            tempRes = tempRes + String.fromCharCode(parseInt(item, 16))
          }
        })
      }
    resultRef.current.value = tempRes
    setResult(tempRes)
    }
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
        You are going to:
          <div className='radio-group flex gap-6'>
            <div className="form-control" onClick={()=>{setMethod('encrypt'), sourceRef.current.value = '', resultRef.current.value = ''}}>
              <label className="label cursor-pointer">
                <input type="radio" name="radio-10" className="radio checked:bg-red-500" defaultChecked/>
                <span className="ml-2 label-text">Encrypt</span>
              </label>
            </div>
            <div className="form-control" onClick={()=>{setMethod('decrypt'), sourceRef.current.value = '', resultRef.current.value = ''}}>
              <label className="label cursor-pointer">
                <input type="radio" name="radio-10" className="radio checked:bg-blue-500"/>
                <span className="ml-2 label-text">Decrypt</span>
              </label>
            </div>
          </div>
      </div>
      <div className='info-input-group flex flex-col items-center gap-4 lg:gap-6 w-full'>
      <input id='source' ref={sourceRef} type="text" name="source_input" autoComplete='off' placeholder='Source input *' className='source-input p-2 w-full rounded-sm border border-slate-500/30 dark:bg-gray-700 bg-gray-50 transition-all'/>
      To
      <div className='w-full flex items-center gap-4'>
        <input id='result' ref={resultRef} type="text" name="result" disabled placeholder='Result' className='result p-2 w-full rounded-sm border border-slate-500/30 dark:bg-gray-700 bg-gray-50 transition-all' />
        <span className={`h-10 w-12 rounded flex justify-center items-center theme-link-bg group hover:cursor-pointer ${result=="" ? 'hidden' : ''}`} onClick={()=>copyContent()}>
          <Icon icon="fluent:copy-select-24-regular" className={`w-6 h-6 text-white z-50 group-hover:scale-75 transition-all`} aria-label='copy to clipboard button'/>
        </span>
      </div>
      </div>
      <input id='submit-btn' type="submit" ref={btnRef} value="Perform" aria-label='perform button' onClick={performAction} className='perform-btn w-full p-2 hover:cursor-pointer relative font-semibold rounded-sm border dark:border-slate-500/50 border-slate-500/30 dark:bg-gray-700/50 bg-gray-50/50 backdrop-blur-md hover:border-blue-700 dark:hover:border-blue-400 text-gray-400 hover:text-blue-700 dark:hover:text-blue-400 hover:tracking-wide transition-all'/>
      
      <Toaster />
    </div>
  )
}

export default Password
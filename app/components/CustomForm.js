'use client'
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react'
import toast, { Toaster } from 'react-hot-toast';

const notify = ({isSuccess, errorMsg, formRef, btnRef}) => {
  isSuccess ? (
    formRef.current.reset(),
    btnRef.current.value = 'Send Message',
    toast.success(
      'Your email was successfully sent!', 
      { position: 'bottom-center'}
    )
    )
  :(
    btnRef.current.value = 'Send Message',
    toast.error(
      'Email was not sent' + errorMsg,
      { position: 'bottom-center'}
    ))
};

const CustomForm = () => {
  const formRef = useRef(null)
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const msgRef = useRef(null)
  const btnRef = useRef(null)

  const sendEmail = (e) => {

    btnRef.current.value = 'Sending ...'

    e.preventDefault();

    var templateParams = {
      user_name: nameRef.current.value,
      user_email: emailRef.current.value,
      message: msgRef.current.value,
    };

    emailjs
      .send('service_5t1xzgb', 'template_6omk9sy', templateParams, {
        publicKey: 'user_YtOrRZarvFRtutUTzhN7I',
      })
      .then(
        () => {
          notify({isSuccess : true, errorMsg : '', formRef: formRef, btnRef: btnRef})
        },
        (error) => {
          notify({isSuccess : false, errorMsg : error.text, formRef: formRef, btnRef: btnRef});
        },
      );
  };

  return (
    <div className='container-wrapper max-w-2xl w-full sm:mx-auto text-gray-800 dark:text-gray-50 transition-all relative'>
      <form onSubmit={sendEmail} ref={formRef} className='form-wrapper flex flex-col gap-4 lg:gap-6 w-full'>
        <div className='info-input-group flex flex-col sm:flex-row gap-4 lg:gap-6 w-full'>
        <input id='user_name' ref={nameRef} type="text" name="user_name" required placeholder='Full Name *' className='usernname-input p-2 w-full rounded-sm border border-slate-500/30 dark:bg-gray-700 bg-gray-50 transition-all'/>
        <input id='user_email' ref={emailRef} type="email" name="user_email" required placeholder='Email *' className='email-input p-2 w-full rounded-sm border border-slate-500/30 dark:bg-gray-700 bg-gray-50 transition-all' />
        </div>
        <textarea id='message' ref={msgRef} name="message" required placeholder='Write a message *' className='message-input h-32 resize-none p-2 rounded-sm border dark:border-slate-500/50 border-slate-500/30 dark:bg-gray-700 bg-gray-50 transition-all'/>
        <input id='submit-btn' type="submit" ref={btnRef} value="Send Message" aria-label='submit button' className='submit-btn w-full p-2 hover:cursor-pointer relative font-semibold rounded-sm border dark:border-slate-500/50 border-slate-500/30 dark:bg-gray-700/50 bg-gray-50/50 backdrop-blur-md hover:border-blue-700 dark:hover:border-blue-400 text-gray-400 hover:text-blue-700 dark:hover:text-blue-400 hover:tracking-wide transition-all'/>
      </form>
    <div>
      <Toaster />
    </div>
    </div>
  )
}

export default CustomForm
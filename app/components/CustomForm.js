'use client'
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const notify = ({isSuccess, errorMsg}) => {
  isSuccess ? (
    document.getElementById('user_name').value = '',
    document.getElementById('user_email').value = '',
    document.getElementById('message').value = '',
    document.getElementById('submit-btn').value = 'Send',
    toast.success(
      'Your email was successfully sent!', 
      { position: 'bottom-right'}
    ))
  :(
    document.getElementById('submit-btn').value = 'Send',
    toast.error(
      'Email was not sent' + errorMsg,
      { position: 'bottom-right'}
    ))
};

const CustomForm = () => {

  const sendEmail = (e) => {

    document.getElementById('submit-btn').value = 'Sending ...'

    e.preventDefault();

    var templateParams = {
      user_name: document.getElementById('user_name').value,
      user_email: document.getElementById('user_email').value,
      message: document.getElementById('message').value,
    };

    emailjs
      .send('service_5t1xzgb', 'template_6omk9sy', templateParams, {
        publicKey: 'user_YtOrRZarvFRtutUTzhN7I',
      })
      .then(
        () => {
          notify({isSuccess : true, errorMsg : ''})
        },
        (error) => {
          notify({isSuccess : false, errorMsg : error.text});
        },
      );
  };

  return (
    <div className='container-wrapper max-w-2xl w-full sm:mx-auto text-gray-800 dark:text-gray-50 transition-all'>
      <form onSubmit={sendEmail} className='form-wrapper flex flex-col gap-4 lg:gap-6 w-full'>
      <div className='info-input-group flex flex-col sm:flex-row gap-4 lg:gap-6 w-full'>
      <input id='user_name' type="text" name="user_name" required placeholder='Full Name *' className='usernname-input p-2 w-full rounded-sm border border-slate-500/30 dark:bg-gray-700 bg-gray-50 transition-all'/>
      <input id='user_email' type="email" name="user_email" required placeholder='Email *' className='email-input p-2 w-full rounded-sm border border-slate-500/30 dark:bg-gray-700 bg-gray-50 transition-all' />
      </div>
      <textarea id='message' name="message" required placeholder='Write a message *' className='message-input h-32 resize-none p-2 rounded-sm border dark:border-slate-500/50 border-slate-500/30 dark:bg-gray-700 bg-gray-50 transition-all'/>
      <input id='submit-btn' type="submit" value="Send Message" aria-label='submit button' className='submit-btn w-full p-2 hover:cursor-pointer relative font-semibold rounded-sm border dark:border-slate-500/50 border-slate-500/30 dark:bg-gray-700/50 bg-gray-50/50 backdrop-blur-md hover:border-blue-700 dark:hover:border-blue-400 text-gray-400 hover:text-blue-700 dark:hover:text-blue-400 hover:tracking-wide transition-all'/>
    </form>
    <div>
      <Toaster />
    </div>
    </div>
  )
}

export default CustomForm
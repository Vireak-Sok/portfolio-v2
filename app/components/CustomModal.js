'use client'
import CustomForm from './CustomForm'

const CustomModal = () => {
  return (
    <>
      <button className="capitalize theme-link-tx hover:underline underline-offset-8 decoration-2 transition-all" onClick={()=>document.getElementById('my_modal_3').showModal()}>Discuss now
      </button>
      <dialog id="my_modal_3" className="modal sm:modal-middle modal-bottom w-full max-w-md mx-auto">
        <div className="modal-box rounded-sm bg-slate-50 dark:bg-slate-800">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-5">✕</button>
          </form>
          <h2 className="font-semibold mb-4 sm:mb-6">Only you can bring your idea to reality!</h2>
          <CustomForm/>
        </div>
      </dialog>
    </>
  )
}

export default CustomModal
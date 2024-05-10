'use client'
import { Icon } from "@iconify/react"
import ProjectTag from "./ProjectTag"

const ListItem = ({project}) => {
  return (
    <a target='_blank' href={project.url} className='table-item-grid text-xs md:text-base w-full grid grid-cols-3 lg:grid-cols-7 gap-4 py-4 border-b border-b-gray-400/30 md:px-4 group hover:bg-slate-100 dark:hover:bg-slate-700 transition-all'>
      <div className='col-span-2 flex gap-2'>
      <p>{project.name}</p>
      <Icon icon="ph:arrow-up-right-light" className='lg:hidden mt-0.5 md:mt-1 scale-75 group-hover:scale-100 origin-bottom-left transition-all'/>
      </div>
      <p className='lg:col-span-2 truncate'>{project.client}</p>
      <div className='hidden lg:flex w-full lg:col-span-3'><ProjectTag types={project.types}/></div>
    </a>
  )
}

export default ListItem
import { Icon } from '@iconify/react'

const ProjectTag = ({types}) => {
  return (
    <div className='tag-container flex mt-0.5 w-full gap-2 items-start  '>
      <div className='tag-wrapper flex gap-2 grow flex-wrap'>
        {types.map((type,index) =>
          <div key={index} className="badge badge-outline tracking-wider min-w-max text-xs dark:text-blue-400/70 text-blue-700/70 dark:border-blue-400/70 border-blue-700/70">{type}</div>
        )}
      </div>
      <Icon icon="ph:arrow-up-right-light" className='scale-75 group-hover:scale-100 origin-bottom-left transition-all'/>
    </div>
  )
}

export default ProjectTag
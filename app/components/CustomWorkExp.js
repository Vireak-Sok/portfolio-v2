import CustomLink from './buttons/CustomLink'
import { promises as fs } from 'fs'

const CustomWorkExp = async () => {

  const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8');
  const data = JSON.parse(file).experiences;

  return (
    <ul className='experiences-list w-full max-w-3xl flex flex-col gap-4 md:gap-8'>
      {data.map((work, index) => 
        <li key={index} className='experience-item flex flex-col sm:grid grid-cols-7 sm:gap-6 lg:opacity-50 hover:opacity-100 transition-all'>
          <time className='work-duration col-span-2 text-xs uppercase my-1 text-gray-500 dark:text-gray-400'>{work.duration}</time>
          <div className='work-details col-span-5'>
            <h2 className='work-company font-semibold sm:pb-2'>{work.role} @ {work.company_url!="" ? <CustomLink href={work.company_url} label={work.company}/> : work.company}</h2>
            <p className='work-description text-sm'>{work.description}</p>
          </div>
        </li>
      )}
    </ul>
  )
}

export default CustomWorkExp
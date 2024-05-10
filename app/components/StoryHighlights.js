import {promises as fs} from 'fs'
import CustomIcon from './CustomIcon';

const StoryHighlights = async () => {

  const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8');
  const highlights = JSON.parse(file).highlights;

  return (
    <div className="highlights flex flex-col sm:flex-row gap-8 w-full justify-center max-w-3xl mt-8">
      {highlights.map((item,index) => 
        <div key={index} className='flex flex-col gap-4 justify-start items-center grow flex-1'>
          <CustomIcon type={item.type}/>
          <div className='text-center w-full'>
            <p className='text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400'>{item.date}</p>
            <p className='font-bold text-lg'>{item.title}</p>
            <p className='text-sm text-gray-500 dark:text-gray-400'>{item.issuer}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default StoryHighlights
import CustomLink from './buttons/CustomLink'
import CustomIcon from './CustomIcon'
import {promises as fs} from 'fs'

const CustomFooter = async () => {

  const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8');
  const contacts = JSON.parse(file).contacts;

  return (
    <footer className='footer-container w-full flex flex-col md:flex-row gap-4 md:justify-between py-4 px-4 sm:px-8 xl:px-32 items-center border-t border-slate-800/10 dark:border-slate-100/10 text-xs theme-bg theme-tx'>
      &copy; All Right Reserve  &#9900;  Sok Vireak
      <div className='flex gap-2 md:gap-4'>
      {contacts.map((contact,index) => 
        <div key={index} className="lg:tooltip capitalize before:text-xs after:hidden before:rounded-sm before:text-gray-600 before:dark:text-gray-300 before:dark:bg-slate-700 before:bg-slate-200 " data-tip={contact.type}>
          <a href={contact.url} target='_blank' className='social-item group' aria-label={'follow me on '+contact.type}>
            <CustomIcon type={contact.type}/>
          </a>
        </div>
      )}
      </div>
      <CustomLink label={'sokvireak2000@gmail.com'} href={'mailto:sokvireak2000@gmail.com'}/>
    </footer>
  )
}

export default CustomFooter
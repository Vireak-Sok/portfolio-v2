import CustomNav from '../components/CustomNav'
import CustomBackToHome from '../components/buttons/CustomBackToHome'
import ListItem from './ListItem'
import { promises as fs } from 'fs'

const projects = async () => {
  const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8');
  const projects = JSON.parse(file).projects;

  return (
    <main>
      <CustomNav/>
      <section className="all-works w-full py-8 px-4 sm:p-8 lg:p-16 flex flex-col items-start justify-center gap-4 sm:gap-8 lg:gap-16">
        <div>
          <CustomBackToHome/>
          <h3 className='text-lg font-semibold sm:text-4xl mt-2'>All Projects</h3>
        </div>
        <div className='table-conatianer w-full'>
          <div className='table-header-grid w-full grid grid-cols-3 lg:grid-cols-7 gap-4 text-md font-semibold py-4 border-b border-b-slate-500 md:px-4 bg-slate-50 dark:bg-slate-80 sticky top-0 z-10 theme-bg theme-tx transition-all'>
            <p className='col-span-2'>Name</p>
            <p className='lg:col-span-2'>Client</p>
            <p className='hidden lg:flex w-full lg:col-span-3'>Types</p>
          </div>
          {projects.map((project,index) =>
            <ListItem project={project} key={index}/>
          )}
        </div>
      </section>
    </main>
  )
}

export default projects
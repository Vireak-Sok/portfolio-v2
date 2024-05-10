import React from 'react'
import CustomCard from './CustomCard'
import CustomSlider from './CustomSlider'
import {promises as fs} from 'fs';

const ProjectList = async () => {
  
  const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8');
  const latest_project = JSON.parse(file).latest_project;

  return (
    <>
    <div className="works-list w-full max-w-screen-2xl hidden lg:px-16 lg:grid grid-cols-3 gap-8 xl:gap-16">
      {latest_project.map((project,index) => 
        <CustomCard key={index} image={project.img} alt={project.alt} name={project.name} description={project.desc} url={project.url}/>
        )}
    </div>
    <div className="works-slider lg:hidden w-full max-w-lg lg:w-max">
      <CustomSlider projects={latest_project}/>
    </div>
    </>
  )
}

export default ProjectList
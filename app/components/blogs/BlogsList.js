import {promises as fs} from 'fs';
import BlogCard from './BlogCard';
import BlogSlider from './BlogSlider';

const BlogsList = async () => {
  
  const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8');
  const latest_blogs = JSON.parse(file).latest_blogs;

  return (
    <>
    <div className="works-list w-full max-w-screen-2xl hidden lg:px-16 lg:grid grid-cols-3 gap-8 xl:gap-16">
      {latest_blogs.map((blog,index) => 
        <BlogCard key={index} image={blog.img} alt={blog.alt} name={blog.name} description={blog.desc} url={blog.url}/>
        )}
    </div>
    <div className="works-slider lg:hidden w-full max-w-lg lg:w-max">
      <BlogSlider blogs={latest_blogs}/>
    </div>
    </>
  )
}

export default BlogsList
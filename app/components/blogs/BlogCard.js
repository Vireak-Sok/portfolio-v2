import Image from "next/image"
import './blogStyle.css'

const BlogCard = ({image, alt, name, url}) => {
  return (
    <div className='card-container w-full aspect-video  rounded-sm'>
    <figure className="card-image snip1176 w-full h-full rounded-sm">
      <Image
        alt={alt}
        src={image}
        fill
        sizes='100%'
        priority
        className='bg-slate-100 dark:bg-slate-700'
      />
      <figcaption className='rounded-sm'>
        <div className="top"><span><div>hidden</div></span></div>
        <h2>{name}</h2>
        <div className="caption">
          <p>Read Now</p>
        </div>
      </figcaption>
      <a href={url} target='_blank' className='project-link hover:cursor-alias focus:ring-offset-4 focus:ring-2 focus:ring-red-500' aria-label={'read full case study'}></a>
    </figure>
    </div>
  )
}

export default BlogCard
import Image from 'next/image'
import './style.css'

const CustomCard = ({image, alt, name, description, url}) => {
  return (
    <div className='card-container w-full aspect-video  rounded-sm'>
    <figure className="card-image snip1200 w-full h-full rounded-sm">
      <Image
        alt={alt}
        src={image}
        fill
        sizes='100%'
        priority
      />
      <figcaption className='rounded-sm'>
        <p className='image-caption text-xs sm:text-sm'>{description}</p>
        <div className="heading">
          <h2>{name}</h2>
        </div>
      </figcaption>
      <a href={url} target='_blank' className='project-link hover:cursor-alias focus:ring-offset-4 focus:ring-2 focus:ring-red-500' aria-label={'read '+name+' full case study'}></a>
    </figure>
    </div>
  )
}

export default CustomCard
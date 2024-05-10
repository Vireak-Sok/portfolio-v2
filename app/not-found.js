import CustomBackToHome from './components/buttons/CustomBackToHome'
import CustomNav from './components/CustomNav'

const NotFound = () => {
  return (
    <main>
      <CustomNav/>
      <div className="container-wrapper h-dvh w-full flex flex-col justify-center items-center gap-4 sm:gap-6 theme-bg">
        <h1 className="not-found-text uppercase tracking-widest text-xs sm:text-base text-center text-gray-500 dark:text-gray-400">Page Not Found</h1>
        <p className="404-text text-4xl font-bold sm:text-8xl uppercase animate-warp">404</p>
        <p className="description text-xs sm:text-base max-w-sm text-center text-gray-500 dark:text-gray-300">We coundn&apos;t find the page that you are looking for!</p>
        <CustomBackToHome />
      </div>
    </main>
  )
}

export default NotFound
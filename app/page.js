import BackToTopBtn from "./components/buttons/BackToTopBtn";
import CustomFooter from "./components/CustomFooter";
import CustomForm from "./components/CustomForm";
import CustomHeader from "./components/CustomHeader";
import CustomLink from "./components/buttons/CustomLink";
import CustomModal from "./components/CustomModal";
import CustomNav from "./components/CustomNav";
import CustomWorkExp from "./components/CustomWorkExp";
import ProjectList from "./components/project-list/ProjectList";
import StoryHighlights from "./components/StoryHighlights";
import { promises as fs } from 'fs';

export default async function Home() {
  
  const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8');
  const info = JSON.parse(file).info;

  return (
    <>
      <CustomNav/>
      <main className="min-h-dvh">
        <BackToTopBtn/>
        <section id="hero" className="hero-section w-full flex flex-col justify-center items-center p-8 md:p-16 pt-0 relative h-[90dvh] overflow-hidden">
          <div className="title-wrapper flex flex-col justify-center items-center gap-4 sm:gap-6 overflow-hidden">
            <h1 className="position uppercase tracking-widest text-xs sm:text-base text-center text-gray-500 dark:text-gray-400">{info.title}</h1>
            <p className="name text-4xl font-bold sm:text-8xl uppercase before:absolute before:h-1/3 before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-purple-100 before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/6s after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 after:opacity-30 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-30 before:lg:h-[360px] before:-z-10 overflow-clip">{info.name}</p>
            <p className="headline text-xs sm:text-base max-w-xs sm:max-w-md text-center text-gray-500 dark:text-gray-300">{info.headline}</p>
            <CustomModal/>
          </div>
          
          <div className="container-mouse absolute bottom-16">
            <span className="mouse-btn w-6 h-10 border rounded-full flex border-slate-400">
                <span className="mouse-scroll m-auto rounded-full block w-1 h-1 bg-slate-400 animate-scroll"></span>
            </span>
          </div>  
        </section>
        <section className="recent-works-section home-section h-max">
          <CustomHeader header={"Recent Works"} subheader={"See my latest projects!"}/>
          <div className="container-wrapper w-full flex flex-col items-center gap-4 md:gap-8">
            <ProjectList/>
            <CustomLink label={"View All Projects"} href={"/projects"} download={false}/>
          </div>
        </section>
        <section className="about-section home-section">
          <CustomHeader header={"About Me"} subheader={"Get to know my story!"}/>
          <p className="my-story max-w-3xl text-center">{info.story}</p>
          <StoryHighlights/>
        </section>
        <section className="work-experiences-section home-section">
          <CustomHeader header={"Work Experiences"} subheader={"Explore professional history!"}/>
          <div className="experiences-wrapper w-full flex flex-col items-center gap-4 md:gap-8">
            <CustomWorkExp/>
            <CustomLink label={'View Resume'} href={"/resume-sok-vireak.pdf"} download={true}/>
          </div>
        </section>
        <section className="contact-section home-section">
          <CustomHeader header={"Get in touch"} subheader={"Send me a quick message!"}/>
          <CustomForm/>
        </section>
      </main>
      <CustomFooter/>
    </>
  );
}
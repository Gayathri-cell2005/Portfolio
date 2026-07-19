import HeroImg from '../assets/hero.png.png';
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";

export default function Hero() {
    const config = {
        subtitle: 'AI & Data Science Enthusiast',
        social: {
            twitter: 'https://x.com/eminent_lass?t=tZT0b6TrKe8ZeAALkPwPyw&s=09',
            Linkedin: 'https://www.linkedin.com/in/gayathri-k-ba4698299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            github: 'https://github.com/Gayathri-cell2005'

        }
    }
    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
        <div className='md:w-1/2 flex flex-col'>
             <h1 className=' text-white text-6xl font-hero-font'>Hi, <br/> Im <span className='text-black'>Gayathri</span>
                 <p  className='text-2xl'>{config.subtitle}</p>
             </h1>
             <div className='flex py-10'>
                 <a href={config.social.twitter} className='pr-5 hover:text-white'><AiOutlineTwitter size={40}/></a>
                 <a href={config.social.Linkedin} className='pr-5 hover:text-white'><AiOutlineLinkedin size={40}/></a>
                 <a href={config.social.github} className='pr-5 hover:text-white'><AiOutlineGithub size={40}/></a>
             </div>
        </div>
        <img className="md:w-1/3" src={HeroImg} alt="Profile" />
    </section>
}
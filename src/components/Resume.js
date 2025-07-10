import ResumeImg from '../assets/resume.jpg';

export default function Resume () {
    const config = {
        link: 'link not found'
    }
    return <section id='resume' className='flex flex-col md:flex-row bg-secondary px-5 py-18 md:py-0 min-h-screen md:min-h-0'>
        <div className='py-5 md:w-1/2 flex justify-end'>
            <img className='w-[300px]' src={ResumeImg} alt="About" />
        </div>
        <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center text-white'>
            <h1 className='text-4xl text-white border-b-4 border-primary mb-5 w-[140px] font-bold'>Resume</h1>
            <p className='pb-5'>You can view my Resume. click below!</p>
            <p className='flex justify-center'> <a className='btn' href={config.link} >Download</a></p>
        </div>
        </div>
    </section>
}
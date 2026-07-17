import AboutImg from '../assets/About.png.png';

export default function About () {
    const config = {
        line1: 'Hi, I am Gayathri K, an Artificial Intelligence and Data Science graduate passionate about building intelligent, data-driven solutions. I enjoy applying Machine Learning, Data Analytics, and Python to solve real-world business problems and creating user-friendly applications that make an impact.',
        line2: '🎯 Technical Skills : Python, SQL, Machine Learning, Deep Learning, Power BI, Pandas, NumPy, Data Visualization, FastAPI, React, and Excel.',
        line3: '💻 Projects & Development : Experienced in developing AI-powered applications, interactive dashboards, and full-stack solutions using modern technologies with a focus on performance and usability.',
    }
    return <section className='flex flex-col md:flex-row bg-secondary px-5 py-20 min-h-screen' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg} alt="About" />
        </div>
        <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center text-white'>
            <h1 className='text-4xl text-white border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
            <p className='pb-5'>{config.line1}</p> 
            <p className='pb-5'>{config.line2}</p>
            <p className='pb-5'>{config.line3}</p>
        </div>
        </div>
    </section>
}
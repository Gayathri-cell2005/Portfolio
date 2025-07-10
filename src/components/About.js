import AboutImg from '../assets/About.png.png';

export default function About () {
    const config = {
        line1: 'Hi, I am Gayathri K - a passionate and curious engineering student specializing in Artificial Intelligence and Data Science. Currently in my pre-final year at Arunai Engineering College, I have developed a strong foundation in AI, machine learning, and software development.',
        line2: '💼 Proficient in Excel, Power BI, SQL, Canva, Tableau, Google Sheets, and basic Python for data analysis, visualization, reporting, and design.',
        line3: '🛠 Backend Skills: Proficient in Java for backend development and logic building.',
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
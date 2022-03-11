import { Navbar } from "../components/navbar";
import Link from 'next/link'

const stuff = [
    {
        name: 'React.js',
        uses: 'This site, interactive kiosks',
        level: 6
    },
    {
        name: 'Node.js',
        uses: 'Conference Room Tool',
        level: 5
    },
    {
        name: 'jQuery',
        uses: 'Large data-driven websites',
        level: 6
    },
    {
        name: 'Python',
        uses: 'Web scraping, Django APIs',
        level: 6
    },
    {
        name: 'Git',
        uses: null,
        level: 5
    },
    {
        name: 'Vue.js',
        uses: 'SPAs, proof-of-concepts at work',
        level: 4
    },
    {
        name: 'ES6+ JavaScript',
        uses: null,
        level: 6
    },
    {
        name: 'HTML/CSS',
        uses: null,
        level: 7
    },
    {
        name: 'Sass',
        uses: null,
        level: 4
    },
    {
        name: 'tailwindcss',
        uses: 'This site was built using only tailwind',
        level: 2
    },
]

const trails = [
    {
        name: 'Rainbow Falls',
        location: 'Cleveland, SC',
        distance: 4.4
    },
    {
        name: 'Pilot Rock',
        location: 'Brevard, NC',
        distance: 24.1
    }
]

export default function About() {
    return (
        <div className='h-screen flex flex-col'>
            <Navbar active='about' />
            <div className='flex flex-col flex-1 p-6 pb-12 md:px-36 md:justify-center'>
                <div className='header-container mb-3'>
                    <h1 className='text-4xl mb-1 font-black'>about me</h1>
                    <div className='header-underline h-2 w-10 rounded-lg bg-blue-500'></div>
                </div>
                <div className='about-content'>
                    <p className='text-lg'>Hey! I'm a junior software dev from Charleston, SC that loves learning new
                        software and technologies. I started teaching myself web development when I was in 4th grade (around 12 years ago), and have gotten into a ton of different things since then. I've been fortunate enough to work on everything from large-scale installations like St. Louis Aquarium to government websites.</p>
                    <p className='text-lg'>I do a good deal of development outside of work, and you can check out some of what I'm up to on the <Link href='/projects'><span className='text-blue-500 cursor-pointer'>Projects page.</span></Link> When I'm not working on one of my pet projects, I spend a lot of time in the woods hiking, camping, and backpacking.</p>
                </div>
                <div className='about-more md:flex md:flex-col'>
                    <div className='software md:w-1/2'>
                        <div className='header-container mb-3 mt-8 flex flex-col items-start font-bold md:items-start'>
                            <h2 className='text-3xl'>software i use</h2>
                            <div className='header-underline h-1 w-6 rounded-lg bg-blue-500'></div>
                        </div>
                        <ul className='flex flex-col items-end md:flex-wrap md:h-56'>
                            {stuff.map(item => {
                                return (
                                    <li className='flex justify-between w-full items-center flex-row-reverse md:h-10 md:mr-4'>
                                        <div className='bar-bg bg-gray-100 rounded-lg h-3 w-32'>
                                            <div className={`bar-color bg-blue-500 h-3 w-${item.level * 4} rounded-lg`}></div>
                                        </div>
                                        <div className='language wrap md:flex md:items-center'>
                                            <p className='font-medium'>{item.name}</p>
                                            {item.uses && (
                                                <p className='hidden md:block font-light text-gray-500 md:ml-4 flex-1'>{item.uses}</p>
                                            )}
                                        </div>
                                    </li>
                                )
                            }
                            )}
                        </ul>
                    </div>
                    <div className='trails md:w-full'>
                        <div className='header-container mb-3 mt-8 flex flex-col items-start font-bold md:mt-0'>
                            <h2 className='text-3xl'>recent hikes</h2>
                            <div className='header-underline h-1 w-6 rounded-lg bg-blue-500'></div>
                        </div>
                        <ul className='flex flex-col items-end md:w-full md:flex-row md:flex-wrap'>
                            {trails.map(trail => {
                                return (
                                    <li className='flex justify-between w-full items-start flex-col mb-3 md:w-64 md:mr-3 border-2 border-gray-200 rounded-lg p-6'>
                                        <div className='trail-head flex items-center '>
                                            <h3 className='font-medium text-xl mr-1'>{trail.name}</h3>
                                            &middot;
                                            <p className='text-gray-500 ml-1 text-md'>{trail.distance} mi</p>
                                        </div>
                                        <div className='trail-info flex'>
                                            <h4 className='text-gray-500 text-lg'>{trail.location}</h4>
                                        </div>
                                    </li>
                                )
                            }
                            )}
                        </ul>
                    </div>

                </div>

            </div>
        </div>
    )
}
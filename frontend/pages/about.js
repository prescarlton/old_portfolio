import { Navbar } from "../components/navbar";
import { fetchAPI } from "utils/api";
import Header from "@/components/Header";

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

export default function About({ data }) {
    return (
        <div className='h-screen flex flex-col'>
            <Navbar active='about' />
            <div className='flex flex-col flex-1 p-6 pb-12 md:px-28'>
                <Header title={data.attributes.pageTitle} />
                <div className='about-content'>
                    <p className='text-lg'>{data.attributes.bio}</p>
                    <p className='text-lg'>{data.attributes.bio2}</p>
                </div>
                <div className='about-more md:flex md:items-start md:mt-4'>
                    <div className='software md:w-1/2'>
                        <div className='header-container mb-3 mt-8 flex flex-col font-bold md:items-start md:mt-0'>
                            <h2 className='text-3xl font-serif'>{data.attributes.knownLanguagesTitle}</h2>
                            <div className='header-underline h-1 w-6 rounded-lg bg-blue-500'></div>
                        </div>
                        <ul className='flex flex-wrap md:items-start md:flex-wrap md:h-56'>
                            {data.attributes.knownLanguages.map(lang => {
                                return (
                                    <li className='flex w-1/2 items-center md:h-auto' key={lang.id}>
                                        <div className='language wrap md:flex md:flex-col'>
                                            <p className='font-bold'>{lang.title}</p>
                                            {lang.usecase && (
                                                <p className='hidden md:block font-light text-gray-500 flex-1'>{lang.usecase}</p>
                                            )}
                                        </div>
                                    </li>
                                )
                            }
                            )}
                        </ul>
                    </div>
                    <div className='trails md:w-1/2'>
                        <div className='header-container mb-3 mt-8 flex flex-col items-start font-bold md:mt-0'>
                            <h2 className='text-3xl font-serif'>recent hikes</h2>
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

export async function getStaticProps() {
    // unless told otherwise, strapi only returns the top level of data.
    // to get the list of known languages and hikes, we need to give it the 
    // populate: * parameter to tell it to populate ALL data for the request
    const aboutpageRes = await fetchAPI('/about', { populate: '*' });
    return {
        props: {
            data: aboutpageRes.data,
        },
        revalidate: 1
    }
}
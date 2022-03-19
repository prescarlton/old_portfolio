import { Navbar } from "../components/navbar"
import Link from 'next/link'
import { fetchAPI } from "utils/api";
export default function Home({ data }) {
  return (
    <div className="h-screen flex flex-col">
      <Navbar active='home' />
      <div className='hidden lines absolute top-64 md:block'>
        <div className='flex my-2'>
          <div className='line h-5 w-8 bg-gray-100 rounded-r-xl mr-2'></div>
          <div className='line h-5 w-16 bg-gray-100 rounded-xl mr-2'></div>
        </div>
        <div className='flex my-2'>
          <div className='line h-5 w-10 bg-gray-100 rounded-r-xl mr-2'></div>
          <div className='line h-5 w-24 bg-gray-100 rounded-xl mr-2'></div>
        </div>
        <div className='flex my-2'>
          <div className='line h-5 w-6 bg-gray-100 rounded-r-xl mr-2'></div>
          <div className='line h-5 w-24 bg-gray-100 rounded-xl mr-2'></div>
        </div>
      </div>

      <div className='px-6 my-12 md:mt-40 flex flex-col md:px-32 justify-end items-start z-10'>
        <h1 className='text-6xl md:text-8xl mb-4 font-serif'>{data.attributes.pageTitle}</h1>
        <h3 className='text-gray-600 text-2xl md:w-3/5 my-1'>{data.attributes.pageSubtitle}</h3>
        <Link href='/projects'><button className='cursor-pointer bg-blue-500 py-2 px-6 rounded-md text-white hover:bg-blue-600 transition my-1'>PROJECTS</button></Link>
      </div>
      <div className='absolute bottom-32 right-0 flex flex-col items-end'>
        <div className='flex my-2'>
          <div className='line h-7 w-20 bg-gray-100 rounded-xl ml-2'></div>
          <div className='line h-7 w-48 bg-gray-100 rounded-l-xl ml-2'></div>
        </div>
        <div className='flex my-2'>
          <div className='line h-7 w-36 bg-gray-100 rounded-xl ml-2'></div>
          <div className='line h-7 w-10 bg-gray-100 rounded-l-xl ml-2'></div>
        </div>
        <div className='flex my-2'>
          <div className='line h-7 w-48 bg-gray-100 rounded-xl ml-2'></div>
          <div className='line h-7 w-36 bg-gray-100 rounded-l-xl ml-2'></div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const homepageRes = await fetchAPI("/homepage")

  return {
    props: {
      data: homepageRes.data,
    },
    revalidate: 1,
  };
}
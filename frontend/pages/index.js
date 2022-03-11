import { Navbar } from "../components/navbar"
import Link from 'next/link'
import { fetchAPI } from "utils/api";
export default function Home({ data }) {
  return (
    <div className="h-screen flex flex-col">
      <Navbar active='home' />
      <div className='lines absolute top-64'>
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

      <div className='px-6 my-16 md:m-0 flex flex-1 flex-col md:px-36 justify-end items-end md:items-start md:justify-center'>
        <h1 className='text-4xl my-4'>{data.attributes.pageTitle}</h1>
        <h3 className='text-gray-600 md:text-2xl md:w-3/5 text-right md:text-left my-1'>{data.attributes.pageSubtitle}</h3>
        <Link href='/projects'><button className='cursor-pointer bg-blue-500 py-2 px-6 rounded-md text-white hover:bg-blue-600 transition my-1'>PROJECTS</button></Link>
      </div>
      <div className='hidden md:absolute md:bottom-32 md:right-0 md:flex md:flex-col md:items-end'>
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
  // Run API calls in parallel
  const homepageRes = await fetchAPI("/homepage")

  return {
    props: {
      data: homepageRes.data,
    },
    revalidate: 1,
  };
}
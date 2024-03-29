import { Navbar } from "../components/navbar";
import { useState } from "react";
import Link from "next/link";
import { fetchAPI } from "utils/api";

export default function Home({ data }) {
    const [showNav, setShowNav] = useState(false);
    const toggleNav = () => {
        setShowNav(!showNav);
    };
    return (
        <div className="flex flex-col md:h-screen">
            <Navbar
                active="home"
                showFullNav={showNav}
                handleNavToggle={toggleNav}
            />
            <div className="hidden lines absolute top-48 lg:block">
                <div className="flex my-2">
                    <div className="line h-5 w-12 bg-gray-100 rounded-r-xl mr-2"></div>
                    <div className="line h-5 w-16 bg-gray-100 rounded-xl mr-2"></div>
                </div>
                <div className="flex my-2">
                    <div className="line h-5 w-10 bg-gray-100 rounded-r-xl mr-2"></div>
                    <div className="line h-5 w-24 bg-gray-100 rounded-xl mr-2"></div>
                </div>
                <div className="flex my-2">
                    <div className="line h-5 w-6 bg-gray-100 rounded-r-xl mr-2"></div>
                    <div className="line h-5 w-24 bg-gray-100 rounded-xl mr-2"></div>
                </div>
            </div>

            <div className="px-6 my-12 flex flex-col md:px-32 justify-center items-start z-10 md:h-100 flex-grow">
                <h1 className="text-6xl md:text-8xl mb-4 font-serif">
                    {data.attributes.pageTitle}
                </h1>
                <h3 className="text-gray-600 text-2xl md:w-3/5 my-1">
                    {data.attributes.pageSubtitle}
                </h3>
                <Link href="/projects" passHref>
                    <button className="cursor-pointer bg-blue-500 py-2 px-6 rounded-md text-white hover:bg-blue-600 transition my-1">
                        PROJECTS
                    </button>
                </Link>
            </div>
            <div className="absolute bottom-4 lg:bottom-32 right-0 flex flex-col items-end">
                <div className="flex my-2">
                    <div className="line h-7 w-20 bg-gray-100 rounded-xl ml-2"></div>
                    <div className="line h-7 w-48 bg-gray-100 rounded-l-xl ml-2"></div>
                </div>
                <div className="flex my-2">
                    <div className="line h-7 w-36 bg-gray-100 rounded-xl ml-2"></div>
                    <div className="line h-7 w-10 bg-gray-100 rounded-l-xl ml-2"></div>
                </div>
                <div className="flex my-2">
                    <div className="line h-7 w-48 bg-gray-100 rounded-xl ml-2"></div>
                    <div className="line h-7 w-36 bg-gray-100 rounded-l-xl ml-2"></div>
                </div>
            </div>
        </div>
    );
}

export async function getStaticProps() {
    const homepageRes = await fetchAPI("/homepage");

    return {
        props: {
            data: homepageRes.data,
        },
        revalidate: 10,
    };
}

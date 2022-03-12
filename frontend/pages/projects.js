import { Navbar } from "../components/navbar";
import Link from 'next/link'
import ProjectCard from "../components/ProjectCard";
import { ArrowRight } from "react-feather";
import { fetchAPI } from "utils/api";

export default function Projects({ projects }) {

    return (
        <div className='h-screen flex flex-col'>
            <Navbar active='projects' />
            <div className='flex flex-col flex-1 p-6 pb-12 md:px-36'>
                <div className='header-container mb-3'>
                    <h1 className='text-4xl mb-1 font-black'>projects</h1>
                    <div className='header-underline h-2 w-10 rounded-lg bg-blue-500'></div>
                </div>
                <div className='projects-grid flex flex-wrap'>
                    {projects.map(proj => {
                        return (
                            <ProjectCard
                                title={proj.attributes.projectTitle}
                                repoName={proj.attributes.projectSlug}
                            />
                        )
                    })}
                    <Link href='/project-archive' target='_blank' >
                        <div className='card w-48 h-64 flex flex-col items-center justify-center mr-4 cursor-pointer'>
                            <div className="bg-blue-500 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                                <ArrowRight className="text-white" />
                            </div>
                            <div className='header h-100'>
                                <h1 className='text-blue-500 text-center'>Click here to view the archive!</h1>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const projectListRes = await fetchAPI('/projects');
    return {
        props: {
            projects: projectListRes.data
        },
        revalidate: 1
    }
}
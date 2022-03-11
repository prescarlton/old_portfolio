import { Navbar } from "../components/navbar";
import Link from 'next/link'
import ProjectCard from "../components/ProjectCard";
import { ArrowRight } from "react-feather";

let pageContent = {
    title: 'projects (under construction)',
    description: `I've redesigned my site a few times now, and each time this page is the primary reason. 
        I can never settle on a layout that I actually like, but I think what I've landed on 
        this iteration is at least somewhat decent. I'm planning on having a grid of project cards of a few of 
        my current / favorite projects, and an archive of all my public GitHub repos. 
        Still working on the highlighted projects, but click below to see the full archive!`
}

// temp until API is set up
const projects = [
    {
        title: 'JSON Viewer',
        repo_name: 'json-viewer',
    },
    {
        title: 'Lorem Ipsum Generator',
        repo_name: 'lorem',
    }
]

export default function Projects() {

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
                                title={proj.title}
                                repoName={proj.repo_name}
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
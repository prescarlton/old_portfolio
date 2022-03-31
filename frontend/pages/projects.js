import { Navbar } from "../components/navbar";
import Link from 'next/link'
import ProjectCard from "../components/ProjectCard";
import { ArrowRight } from "react-feather";
import { fetchAPI } from "utils/api";
import Header from "@/components/Header";

export default function Projects({ projects }) {

    return (
        <div className='h-screen flex flex-col'>
            <Navbar active='projects' />
            <div className='flex flex-col flex-1 p-6 pb-12 md:px-28'>
                <Header title='projects'/>
                <div className='projects-grid flex flex-wrap'>
                    {projects.map(proj => {
                        return (
                            <ProjectCard
                                key={proj.attributes.slug}
                                title={proj.attributes.projectTitle}
                                repoName={proj.attributes.slug}
                                description={proj.attributes.description}
                                tags={proj.attributes.tags.data}
                                link={proj.attributes.link}
                                repo={proj.attributes.repo}
                            />
                        )
                    })}
                    <Link href='/project-archive' target='_blank' passHref>
                        <div className='card w-full h-48 flex flex-col items-center justify-center mr-4 cursor-pointer'>
                            <div className="bg-blue-500 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                                <ArrowRight className="text-white" />
                            </div>
                            <div className='header h-100'>
                                <h1 className='text-blue-500 text-center'>view the full project archive</h1>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps() {
    // give 'er the populate * to get all children (tag list)
    const projectListRes = await fetchAPI('/projects', {populate: '*'});
    return {
        props: {
            projects: projectListRes.data
        },
        revalidate: 10
    }
}
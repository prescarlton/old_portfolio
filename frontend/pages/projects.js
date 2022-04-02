import Link from 'next/link'
import ProjectCard from "../components/ProjectCard";
import { ArrowRight } from "react-feather";
import { fetchAPI } from "utils/api";
import Layout from "@/components/Layout";

export default function Projects({ projects }) {

    return (
        <Layout pageTitle='projects'>
                <div className='projects-grid flex items-stretch flex-col lg:flex-row lg:flex-wrap '>
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
        </Layout>
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
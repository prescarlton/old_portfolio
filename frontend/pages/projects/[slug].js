import { useRouter } from "next/dist/client/router";
import { fetchAPI } from "utils/api";
import Header from "../../components/Header";
import { Navbar } from "../../components/navbar";

export default function ProjectPage({ proj }) {
    return (
        <div className="h-screen flex flex-col">
            <Navbar active='projects' />
            <div className='flex flex-col flex-1 p-6 pb-12 md:px-36 items-stretch'>
                <Header title={proj.attributes.projectTitle} />
                {proj.attributes.richDescription ?
                    (<p>{proj.attributes.richDescription}</p>) :
                    (<p>{proj.attributes.description}</p>)
                }
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const projectListRes = await fetchAPI('/projects');
    const data = projectListRes.data;

    const paths = data.map(proj => ({
        params: { slug: proj.attributes.projectSlug }
    }));
    // return paths and set fallback so that other routes 404.
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const projectPageRes = await fetchAPI(`/projects?filters[projectSlug]=${params.slug}`);
    // strapi doesn't ACTUALLY support fetching via slugs,
    // so we have to use a filter. this returns an array of items,
    // so just grab the first (there should only be 1 match)
    return {
        props: {
            proj: projectPageRes.data[0]
        },
        revalidate: 1
    }
}
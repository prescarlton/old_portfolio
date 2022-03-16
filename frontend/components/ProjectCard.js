import Link from 'next/link';

const ProjectCard = ({ title, repoName, description, tags }) => {
    return (
        <Link href={`/projects/${repoName}`}>
            <div className='card rounded-lg p-6 flex flex-col justify-between border-2 border-gray-200 w-72 h-64 mr-4 mb-4 cursor-pointer'>
                <h1 className='text-blue-500 font-bold'>{title}</h1>
                <p className='flex-1'>{description}</p>
                <ul className='flex flex-wrap'>
                    {tags.map(item => {
                        return (
                            <li className='rounded-lg border-2 border-gray-200 mr-1 mb-1 px-1 py-1/2'>{item.attributes.tagText}</li>
                        )
                    })}
                </ul>
            </div>
        </Link>
    )
}
export default ProjectCard;
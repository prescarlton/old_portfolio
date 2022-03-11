import Link from 'next/link';

const ProjectCard = ({ title, repoName, archiveLink = false }) => {
    return (
        <Link href={`/projects/${repoName}`}>
            <div className='card rounded-lg p-6 flex items-end border-2 border-gray-200 w-48 h-64 mr-4 mb-4 cursor-pointer'>
                <div className='header'>
                    <h1 className='text-blue-500'>{title}</h1>
                    <h3>{repoName}</h3>
                </div>
            </div>
        </Link>
    )
}
export default ProjectCard;
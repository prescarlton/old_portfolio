import Link from 'next/link';
import { ExternalLink, GitHub } from 'react-feather';

const ProjectCard = ({ title, description, tags, link, repo }) => {
    return (
            <div className='card rounded-lg p-6 flex flex-col justify-between border-2 border-gray-200 w-full md:w-72 h-48 md:h-64 mr-4 mb-4 relative'>
                <h1 className='text-blue-500 font-bold'>{title}</h1>
                <p className='flex-1'>{description}</p>
                <div className='links absolute right-0 top-0 p-inherit flex'>
                {link && <a href={link} target="_blank"><ExternalLink className='text-gray-400 hover:text-blue-500 mb-2 md:mr-2' /></a>}
                {repo && <a href={repo} target="_blank"><GitHub className='text-gray-400 hover:text-blue-500'/></a>}
                </div>
                <ul className='flex flex-wrap'>
                    {tags.map(item => {
                        return (
                            <li className='rounded-lg border-2 border-gray-200 mr-1 mb-1 px-1 py-1/2'>{item.attributes.tagText}</li>
                        )
                    })}
                </ul>
            </div>
    )
}
export default ProjectCard;
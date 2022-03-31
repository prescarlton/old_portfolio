import Link from 'next/link'
import { Navbar } from "@/components/navbar";
import { useRouter } from "next/dist/client/router";

export default function NotFoundPage() {
    const router = useRouter();
    return (
        <div className="h-screen flex flex-col">
            <Navbar active='' />
            <div className='flex flex-col flex-1 p-6 pb-12 md:px-36 items-center'>
                <h1 className="text-[18rem] leading-[18rem] font-mono text-gray-300">404</h1>
                <h1>look man, whatever <strong>{router.asPath}</strong> is, we sure don't got it here. keep on moving.</h1>
                <Link href='/projects' passHref><h2 className='text-blue-500 mt-3 hover:text-blue-600 cursor-pointer'>While I have you here, why not check out some projects?</h2></Link>
            </div>
        </div>
    )
}
import { useRouter } from "next/dist/client/router";
import Header from "../../components/Header";
import { Navbar } from "../../components/navbar";

export default function ProjectPage() {
    const router = useRouter()
    const { id } = router.query
    return (
        <div className="h-screen flex flex-col">
            <Navbar active='projects' />
            <div className='flex flex-col flex-1 p-6 pb-12 md:px-36 items-stretch'>
                <Header title={id} />
            </div>
        </div>
    )
}
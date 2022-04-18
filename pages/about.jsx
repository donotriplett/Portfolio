import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faAnglesLeft } from '@fortawesome/free-solid-svg-icons';

export default function About() {
    return (
        <div className="flex justify-between items-center h-full w-screen font-mono">
            <Link href="/"><a><FontAwesomeIcon className="ml-5" icon={faAnglesLeft} style={{ fontSize: 35 }}></FontAwesomeIcon></a></Link>
            <div className="flex flex-col text-center w-1/2">
                <p>About Me</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae adipisci tenetur reprehenderit, facilis quo sapiente tempore, laudantium est explicabo rem quia nihil, cum tempora itaque odio accusamus laboriosam provident fugit?</p>
            </div>
            <Link href="/portfolio"><a><FontAwesomeIcon className='mr-5' icon={faAnglesRight} style={{ fontSize: 35 }}></FontAwesomeIcon></a></Link>
        </div>
    )
}
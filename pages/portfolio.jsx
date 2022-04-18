import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faAnglesLeft } from '@fortawesome/free-solid-svg-icons';

export default function Portfolio() {
    return (
        <div className="flex justify-between items-center h-full w-screen font-mono">
            <Link href="/about"><a><FontAwesomeIcon className="ml-5" icon={faAnglesLeft} style={{ fontSize: 35 }}></FontAwesomeIcon></a></Link>
            <div className="flex flex-col text-center w-1/2">
                <p>Here is some of my work over the years</p>
            </div>
            <Link href="/contact"><a><FontAwesomeIcon className='mr-5' icon={faAnglesRight} style={{ fontSize: 35 }}></FontAwesomeIcon></a></Link>
        </div>
    )
}
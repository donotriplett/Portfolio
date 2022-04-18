import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import { useForm } from "react-hook-form";

export default function Contact() {

    function handleSubmit() {

    }

    return (
        <div className="flex justify-between items-center h-full w-screen font-mono">
            <Link href="/portfolio"><a><FontAwesomeIcon className="ml-5" icon={faAnglesLeft} style={{ fontSize: 35 }}></FontAwesomeIcon></a></Link>
            <div className="flex flex-col gap-5 text-center w-1/2">
                <p>Filling out this form will send an email directly to me!</p>
                <form className="flex flex-col justify-center items-center border py-10 gap-5" onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input className="border rounded-lg p-2 text-xl w-3/4" placeholder="Name" type="text" name="name" id="name" />
                    <label htmlFor="email">Email:</label>
                    <input className="border rounded-lg p-2 text-xl w-3/4" placeholder="Email" type="email" name="email" id="email" />
                    <label htmlFor="message">Message:</label>
                    <textarea className="border rounded-lg p-2 text-xl max-h-96 w-3/4" placeholder="Message" type="text" message="message" id="message" />
                </form>
            </div>
            <Link href="/"><a><FontAwesomeIcon className='mr-5' icon={faAnglesRight} style={{ fontSize: 35 }}></FontAwesomeIcon></a></Link>
        </div>
    )
}
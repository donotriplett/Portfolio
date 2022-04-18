import Link from "next/link";

export default function Layout({children}) {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex flex-row justify-around w-screen h-10 z-10 font-mono">
                <div className="flex items-center">
                    <Link href="/"><a className="font-bold text-lg">Donovan Triplett</a></Link>
                </div>
                <div className="flex gap-10 text-lg items-center">
                    <Link href="/about"><a className="">About</a></Link>
                    <Link href="/portfolio"><a>Portfolio</a></Link>
                    <Link href="/contact"><a>Contact Me</a></Link>
                </div>
            </div>
            <div className="grow">{children}</div>
        </div>
    )
}
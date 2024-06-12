import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center">
            <ul className={`md:flex ${isOpen ? "block" : "hidden"} mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-8`}>
                <li><Link href="/">home</Link></li>
                <li><Link href="/my-story">my story</Link></li>
                <li><Link href="/projects">projects</Link></li>
                <li><Link href="/research-and-writings">research & writings</Link></li>
                <li><Link href="/offerings">offerings</Link></li>
            </ul>
        </nav>
    );
}

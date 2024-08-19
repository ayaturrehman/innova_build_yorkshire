import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()


    return (
        <>
            <ul className="main-menu__list">
                <li>
                    <Link href="/">Home </Link>
                </li>
                <li>
                    <Link href="about">About</Link>
                </li>
                <li className="dropdown">
                    <Link href="#">Services</Link>
                    <ul>
                        <li><Link href="/services/renovations">Renovations</Link></li>
                        <li><Link href="/services/architectural-design">Architectural Design</Link></li>
                        <li><Link href="/services/plumbing">Plumbing</Link></li>
                        <li><Link href="/services/electrical">Electrical</Link></li>
                        <li><Link href="/services/heating-solutions">Heating Solutions</Link></li>
                        <li><Link href="/services/home-extensions">Home Extensions</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href="contact">Contact</Link>
                </li>
            </ul>
        </>
    )
}

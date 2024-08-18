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
                        <li><Link href="service-details">Renovations</Link></li>
                        <li><Link href="service-details">Architectural Design</Link></li>
                        <li><Link href="service-details">Plumbing</Link></li>
                        <li><Link href="service-details">Electrical</Link></li>
                        <li><Link href="service-details">Pluming</Link></li>
                        <li><Link href="service-details">Heating Solutions</Link></li>
                        <li><Link href="service-details">Home Extensions</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href="contact">Contact</Link>
                </li>
            </ul>
        </>
    )
}

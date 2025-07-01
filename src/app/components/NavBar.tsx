import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"

const NavBar = () => {
    return (
        <nav className="flexBetween max-container padding-container relative z-30 py-5">
            <Link href="/">
                <Image src="/header/logo.png" alt="logo" width={150} height={70} />
            </Link>

            <ul className="hidden h-full gap-12 lg:flex">
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key}
                        className="regular-16 text-black-50 flexCenter cursor-pointer pb-1 transition-all hover-link group relative">
                        {link.label}
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar
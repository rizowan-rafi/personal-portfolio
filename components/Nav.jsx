"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "projects",
        path: "/services",
    },
    {
        name: "resume",
        path: "/resume",
    },
    {
        name: "contact",
        path: "/contact",
    },
    

];

const Nav = () => {
    const pathname = usePathname()
    return <nav className="flex gap-8">
        {
            links.map((link, idx) => {
                return (
                    <Link className={`${link.path===pathname && 'text-accentDefault border-b-2 border-accentDefault'} capitalize font-medium hover:text-accentHover transition-all`} href={link.path} key={idx}>{link.name}</Link>
                )
            })
        }
    </nav>;
};

export default Nav;

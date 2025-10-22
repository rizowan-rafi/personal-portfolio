"use client";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "services",
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

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accentDefault" />
            </SheetTrigger>
            <SheetContent className={"flex flex-col"}>
                <div className="mt-32 mb-4 text-center text-2xl">
                    <Link href={"/"}></Link>
                    <h1 className="text-4xl font-semibold">
                        RMR <span className="text-accentDefault">.</span>
                    </h1>
                </div>
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, idx) => {
                        return (
                            
                                <Link
                                    onClick={SheetClose}
                                    className={` ${
                                        link.path === pathname &&
                                        "border-b-2 border-accentDefault"
                                    } text-xl capitalized hover:text-accentHover transition-all`}
                                    key={idx}
                                    href={link.path}
                                >
                                    {link.name}
                                </Link>
                            
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;

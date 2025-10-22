import Link from "next/link";
import { Button } from "./ui/button";

// component
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header className="py-8 px-4 md:px-6 lg:px-8 xl:px-12 xl:py-12 text-white">
            <div className="container mx-autoh flex justify-between items-center">
                {/* logo */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        RMR <span className="text-accentDefault">.</span>
                    </h1>
                </Link>

                {/* desktop nav  */}
                <div className="hidden xl:flex gap-8 items-center">
                    <Nav></Nav>
                    <Link href={"/contact"}>
                        <Button className={'rounded-full'}>Hire Me</Button>
                    </Link>
                </div>

                {/* mobile nav  */}
                <div className="xl:hidden">
                    <MobileNav></MobileNav>
                </div>
            </div>
        </header>
    );
};

export default Header;

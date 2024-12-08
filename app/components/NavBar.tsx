"use client"
import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenuItem, NavbarMenu } from "@nextui-org/react";
import { usePathname } from 'next/navigation';
import ChangeTheme from './ChangeTheme';

export const AcmeLogo = () => {
    return (
        <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
            <path
                clipRule="evenodd"
                d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    );
};

const NavBar: React.FC = () => {
    const pathname = usePathname();
    console.log(pathname)

    const menuItems = [
        "Home",
        "About",
        "Projects",
        "Contact",
    ];
    return (
        <Navbar isBordered shouldHideOnScroll className='dark:bg-slate-950 dark:text-white lg:text-lg' >
            <NavbarBrand>
                <AcmeLogo />
                <p className="font-bold text-inherit">ACME</p>
            </NavbarBrand>
            <NavbarContent className="lg:hidden" justify='end'>
                <NavbarMenuToggle />
            </NavbarContent>
            <NavbarContent className="hidden lg:flex gap-4" justify="center">
                <NavbarItem isActive={pathname == '/' ? true : false}>
                    <Link color="foreground" href="/">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={pathname == '/about' ? true : false}>
                    <Link color="foreground" href="/about">
                        About
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={pathname == '/projects' ? true : false}>
                    <Link aria-current="page" href="/projects">
                        Projects
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={pathname == '/contact' ? true : false}>
                    <Link color="foreground" href="/contact">
                        Contact
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end" className='hidden lg:flex'>
                <NavbarItem className="hidden">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem className='hidden'>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
                <NavbarItem>
                    <ChangeTheme />
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            color={
                                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            href={item == 'Home' ? '/' : `/${item.toLowerCase()}`}
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar >
    );
}

export default NavBar
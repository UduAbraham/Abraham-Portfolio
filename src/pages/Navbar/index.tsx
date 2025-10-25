import { SiElementary } from "react-icons/si";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";

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

export default function NavBar() {
  return (
    <Navbar position="static" className="bg-[#0f1c23] py-10">
      <NavbarBrand className="gap-2">
        <SiElementary />
        <p className="text-lg sm:text-xl font-bold tracking-tight">Abraham</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4 hidden md:flex gap-8 mx-auto my-10 bg-[#1a2234]/40 p-5 rounded-lg" justify="center" >
        <NavbarItem>
          <Link color="foreground" href="#Home" className="text-white">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#About" className="text-white" >
            About
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link aria-current="page" href="#Project" className="text-white">
            Project
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#TechStack" className="text-white">
            Skills
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#Contact" className="text-white">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        
      </NavbarContent>
    </Navbar>
  );
}

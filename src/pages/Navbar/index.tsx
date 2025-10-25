import { SiElementary } from "react-icons/si";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/react";
import { useState } from "react";

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
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const menuItems = [
    { name: "Home", href: "#Home" },
    { name: "About", href: "#About" },
    { name: "Projects", href: "#Project" },
    { name: "Skills", href: "#TechStack" },
    { name: "Contact", href: "#Contact" },
  ];

  return (
    <Navbar
      position="static"
      onMenuOpenChange={setIsMenuOpen}
      className="bg-[#0f1c23] py-10"
    >
      <NavbarBrand className="gap-2">
        <SiElementary />
        <p className="text-lg sm:text-xl font-bold tracking-tight">Abraham</p>
      </NavbarBrand>

      {/* Desktop Menu */}
      <NavbarContent
        className="hidden md:flex gap-8 mx-auto my-10 bg-[#1a2234]/40 p-5 rounded-lg"
        justify="center"
      >
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link href={item.href} className="text-white "
             onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Mobile Menu Toggle Button */}
      <NavbarContent justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden text-white "
        />
      </NavbarContent>

      {/* Mobile Dropdown Menu */}
      <NavbarMenu className="bg-gray-800">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index} className="">
            <Link href={item.href} className="text-white text-lg ">
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

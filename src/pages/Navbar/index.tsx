import { SiElementary } from "react-icons/si";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@heroui/react";
import { ThemeSwitch } from "../../components/theme-switch";
import MobileNav from "./MobileNav";

export default function NavBar() {
  const menuItems = [
    { name: "Home", href: "#Home" },
    { name: "About", href: "#About" },
    { name: "Projects", href: "#Project" },
    { name: "Skills", href: "#TechStack" },
    { name: "Contact", href: "#Contact" },
  ];

  return (
    <>
      <Navbar
        className="bg-[#0f1c23] dark:bg-white py-4 md:py-6"
      >
        {/* ✅ Left: Logo */}
        <NavbarContent justify="start">
          <NavbarBrand className="gap-2">
            <SiElementary className="text-white dark:text-black text-2xl" />
            <p className="text-lg sm:text-xl font-bold tracking-tight text-white dark:text-black">
              Abraham
            </p>
          </NavbarBrand>
        </NavbarContent>

        {/* ✅ Center: Nav Links */}
        <NavbarContent
          justify="center"
          className="hidden md:flex gap-8 lg:gap-10 px-6"
        >
          {menuItems.map((item, index) => (
            <NavbarItem key={index}>
              <Link
                href={item.href}
                className="text-white dark:text-black text-lg tracking-wide hover:text-primary transition"
              >
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        {/* ✅ Right: Theme Switch */}
        <NavbarContent justify="end">
          <ThemeSwitch />
        </NavbarContent>
      </Navbar>

      {/* ✅ Mobile Navigation System */}
      <MobileNav />
    </>
  );
}

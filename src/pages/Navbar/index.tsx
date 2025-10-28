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
import { ThemeSwitch } from "../../components/theme-switch";

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
      onMenuOpenChange={setIsMenuOpen}
      className="bg-[#0f1c23] dark:bg-white py-6"
    >
      {/* ✅ Left: Logo */}
      <NavbarContent justify="center">
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
        className="hidden flex md:flex gap-10 px-6 mx-auto"
      >
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link
              href={item.href}
              className="text-white dark:text-black text-lg tracking-wide hover:text-primary transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* ✅ Right: Theme Switch + Mobile Toggle */}
      <NavbarContent justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden text-white dark:text-black"
        />
      </NavbarContent>

      {/* ✅ Mobile Menu */}
      <NavbarMenu className="bg-[#1a2234] dark:bg-gray-200">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              href={item.href}
              className="text-white dark:text-black text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

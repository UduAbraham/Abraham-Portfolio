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
import { HiMenuAlt3, HiX } from "react-icons/hi";

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
          className="md:hidden text-white dark:text-black ml-2 w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white/10 dark:hover:bg-black/5 transition-all"
          icon={isMenuOpen ? <HiX size={28} className="text-blue-500" /> : <HiMenuAlt3 size={28} className="text-blue-500" />}
        />
      </NavbarContent>

      {/* ✅ Mobile Menu */}
      <NavbarMenu className="bg-[#1a2234] dark:bg-gray-200 pt-10">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              href={item.href}
              className="text-white dark:text-black text-xl w-full py-2"
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

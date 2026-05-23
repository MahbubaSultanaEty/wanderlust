"use client";

import React from "react";
import { authClient } from "@/lib/auth-client";
import { Avatar, AvatarFallback, AvatarImage } from "@heroui/react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; 
import { useState } from "react";
import { toast } from "react-toastify";

export default function Navbar() {
  const pathname = usePathname(); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  
  const { data: session } = authClient.useSession();
  const user = session?.user;

  
  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("User Logged out successfully");
          window.location.href = "/login";
        },
        onError: () => {
          toast.error("Logout failed. Try again.");
        }
      },
    });
  };

 
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Destinations", href: "/destinations" },
    { name: "My Bookings", href: "/my-bookings" },
    { name: "Add Destination", href: "/add-destination" },
  ];

  
  const getLinkClass = (href) => {
    const isActive = pathname === href;
    return `relative py-2 text-sm font-medium transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:bg-blue-600 before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100 ${
      isActive 
        ? "text-blue-600 before:scale-x-100 font-semibold" 
        : "text-gray-600 hover:text-blue-600"
    }`;
  };

  

  return (
    <nav className="w-full border-b bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Left: Nav Links (Desktop) */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={getLinkClass(link.href)}>
                {link.name}
              </Link>
            ))}
          </div>

          {/* Center: Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/assets/Wanderlast.png"
                width={120}
                height={50}
                alt="logo"
                className="object-contain"
              />
            </Link>
          </div>

          {/* Right: Auth Profile / Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-3">
                <Link href="/profile" className={getLinkClass("/profile") }>
                  Profile
                </Link>
               <Avatar>
                  <Avatar.Image referrerPolicy="no-referrer
                  " src={user?.image} alt={user?.name} />
                  <Avatar.Fallback>{ user?.name.charAt(0)}</Avatar.Fallback>
                </Avatar>
                
                <button
                  onClick={handleLogout}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-medium transition active:scale-95 shadow-sm"
                >
                  Log out
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link href="/login" className="text-gray-600 hover:text-blue-600 text-sm font-medium transition">
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 text-sm font-medium transition shadow-sm active:scale-95"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="flex md:hidden items-center gap-4 w-60">
            {user ? (<div>
              <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleLogout();
                  }}
                  className="w-full bg-blue-500 text-white py-2 rounded-lg text-sm px-2 font-medium shadow-sm hover:bg-blue-600 text-center"
                >
                  Log out
              </button>
              </div> ) : (
              <div className=" w-3xl flex gap-2 pt-2">
                <Link 
                  href="/login" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full border border-cyan-300 py-2 rounded-lg font-medium text-gray-600 hover:bg-cyan-100 text-center"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium shadow-sm hover:bg-blue-700 text-center"
                >
                  Sign Up
                </Link>
              </div>             
            )}
                        {user &&
              <div className="w-full flex  gap-2">
                <Link 
                  href="/profile" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`w-full py-2 rounded-lg text-sm font-medium ${pathname === "/profile" ? "bg-blue-50 text-blue-600" : "text-gray-600"}`}
                >
                  Profile
                </Link> 
                <Avatar>
                  <Avatar.Image src={user?.image} alt={user?.name}/>
                  <Avatar.Fallback>{ user?.name.charAt(0)}</Avatar.Fallback>
                </Avatar>
                
              </div>
            }
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none transition"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-50 border-b border-gray-200 transition-all duration-300">
          <div className="px-4 pt-2  space-y-1 flex flex-col items-center text-center">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`w-full py-1 rounded-lg text-xs font-medium transition ${
                  pathname === link.href 
                    ? "bg-blue-50 text-blue-600 font-bold" 
                    : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <hr className="w-full border-gray-200 my-2" />
            

          </div>
        </div>
      )}
    </nav>
  );
}

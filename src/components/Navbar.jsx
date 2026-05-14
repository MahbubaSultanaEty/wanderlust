import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-6 text-sm font-medium">
            <Link href="/" className="hover:text-blue-600 transition">
              Home
            </Link>

            <Link
              href="/destinations"
              className="hover:text-blue-600 transition"
            >
              Destinations
            </Link>

            <Link href="/bookings" className="hover:text-blue-600 transition">
              My Bookings
            </Link>

            <Link href="/admin" className="hover:text-blue-600 transition">
              Admin
            </Link>
          </div>

          {/* Logo */}
              <Image
                src={"/assets/Wanderlast.png"}
                width={120}
                height={60}
                alt="logo"
              />

          {/* Right */}
          <div className="flex items-center gap-4 text-sm font-medium">
            <Link href="/profile" className="hover:text-blue-600 transition">
              Profile
            </Link>

            <Link href="/login" className="hover:text-blue-600 transition">
              Login
            </Link>

            <Link
              href="/signup"
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden">
          <details className="group">
            {/* Top Row */}
            <summary className="flex items-center justify-between list-none cursor-pointer">
              {/* Logo */}
              <Image
                src={"/assets/Wanderlast.png"}
                width={120}
                height={60}
                alt="logo"
              />

              <div className="flex gap-3 pt-2">
                <Link href="/login" className="border px-4 py-2 rounded-full">
                  Login
                </Link>

                <Link
                  href="/signup"
                  className="bg-blue-600 text-white px-4 py-2 rounded-full"
                >
                  Sign Up
                </Link>
              </div>

              {/* Right */}
              <div className="flex items-center gap-3">
                <Link href="/profile" className="text-sm font-medium">
                  Profile
                </Link>

                <Menu size={26} />
              </div>
            </summary>

            {/* Mobile Menu */}
            <div className="mt-6 flex flex-col items-center gap-5 text-center font-medium">
              <Link href="/">Home</Link>

              <Link href="/destinations">Destinations</Link>

              <Link href="/bookings">My Bookings</Link>

              <Link href="/admin">Admin</Link>
            </div>
          </details>
        </div>
      </div>
    </nav>
  );
}

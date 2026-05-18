import { Merriweather } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";

const meriweather = Merriweather({
  subsets: ["latin"],
});



export const metadata = {
  title: "WanderLust",
  description: "Book Your Favourite Destination ",
};

export default function RootLayout({ children }) {
  return (
    <html
      
      lang="en"
      className={`${meriweather.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
         <ToastContainer />
        {children}
        <Footer/>
      </body>
    </html>
  );
}

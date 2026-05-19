import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";


export default function GoogleButton() {
    const signIn = async() => {
        const data = await authClient.signIn.social({
            provider: "google"        
        },
        )
           if (data) {
                toast.success("signing in ")
            }
    }
  return (
    <button
      onClick={signIn}
      className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-xl border border-gray-200/70 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-all duration-300 hover:border-gray-300 hover:text-gray-900 hover:shadow-md hover:shadow-gray-200/50 active:scale-95"
    >
      {/* Unique Ambient Hover Glow */}
      <span className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-500/5 via-red-500/5 to-yellow-500/5 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100" />

      {/* Modern High-Quality Google SVG Icon */}
      <svg
        className="h-5 w-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          fill="#4285F4"
        />
        <path
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          fill="#34A853"
        />
        <path
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
          fill="#FBBC05"
        />
        <path
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
          fill="#EA4335"
        />
      </svg>

      {/* Button Text */}
      <span className="relative z-10">Continue with Google</span>
    </button>
  );
}
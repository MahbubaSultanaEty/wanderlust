"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import {
  Mail,
  CalendarDays,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function ProfilePage() {
  const { data } = authClient.useSession();

  const user = data?.user;

  return (
    <section className="min-h-screen overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-blue-100 relative py-20 px-5">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-300/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-300/20 blur-[140px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Main Card */}
        <div className="bg-white/70 backdrop-blur-2xl border border-white/50 rounded-[40px] shadow-2xl overflow-hidden">
          
          {/* Cover */}
          <div className="h-56 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-400 relative">
            
            <div className="absolute top-10 right-10 opacity-20">
              <Sparkles size={120} className="text-white" />
            </div>
          </div>

          {/* Profile Content */}
          <div className="px-8 lg:px-14 pb-12 relative">

            {/* Avatar */}
            <div className="-mt-20 relative w-fit">
              
              <div className="w-40 h-40 rounded-full border-[6px] border-white overflow-hidden shadow-2xl bg-white relative">
                
                {user?.image ? (
                  <Image
                    src={user.image}
                    alt={user.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white text-5xl font-bold">
                    {user?.name?.[0]}
                  </div>
                )}
              </div>

              {/* Verified Badge */}
              <div className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-emerald-500 border-4 border-white flex items-center justify-center shadow-lg">
                <ShieldCheck size={18} className="text-white" />
              </div>
            </div>

            {/* User Info */}
            <div className="mt-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">

              <div>
                <p className="uppercase tracking-[4px] text-cyan-500 text-sm font-semibold">
                  Traveler Profile
                </p>

                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mt-3 leading-tight">
                  {user?.name}
                </h1>

                <div className="flex flex-col sm:flex-row sm:items-center gap-5 mt-6">

                  <div className="flex items-center gap-3 text-gray-600">
                    <Mail size={18} className="text-cyan-500" />

                    <span className="text-lg">
                      {user?.email}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-600">
                    <CalendarDays size={18} className="text-cyan-500" />

                    <span className="text-lg">
                      Joined{" "}
                      {new Date(user?.createdAt).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </span>
                  </div>
                </div>
              </div>

              {/* Status Card */}
              <div className="bg-gradient-to-br from-cyan-500 to-blue-500 text-white rounded-[32px] px-8 py-7 shadow-2xl min-w-[280px]">
                
                <p className="uppercase tracking-[3px] text-white/70 text-sm">
                  Membership
                </p>

                <h2 className="text-3xl font-bold mt-3">
                  Active Traveler
                </h2>

                <div className="flex items-center gap-2 mt-5 text-white/80">
                  <MapPin size={18} />

                  <span>
                    Exploring destinations worldwide
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-[30px] p-8 shadow-xl">
            
            <p className="text-sm uppercase tracking-[3px] text-cyan-500 font-semibold">
              Trips
            </p>

            <h2 className="text-5xl font-black text-gray-900 mt-4">
              12
            </h2>

            <p className="text-gray-500 mt-3">
              Adventures completed around the globe.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-[30px] p-8 shadow-xl">
            
            <p className="text-sm uppercase tracking-[3px] text-cyan-500 font-semibold">
              Countries
            </p>

            <h2 className="text-5xl font-black text-gray-900 mt-4">
              08
            </h2>

            <p className="text-gray-500 mt-3">
              Destinations explored with unforgettable memories.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-[30px] p-8 shadow-xl">
            
            <p className="text-sm uppercase tracking-[3px] text-cyan-500 font-semibold">
              Status
            </p>

            <h2 className="text-4xl font-black text-emerald-500 mt-4">
              Premium
            </h2>

            <p className="text-gray-500 mt-3">
              Verified member with active bookings and trips.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
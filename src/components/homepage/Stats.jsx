import { CalendarDays, MapPin, Search, Users, Wallet } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Stats = () => {
    return (
        <div className='container mx-auto'>
            
        {/* Search Box */}
        <Link href="/destination">
          <div className="mt-20">
          <div className="backdrop-blur-xl bg-black border border-black/20 rounded-3xl p-4 md:p-6 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-5 items-center">
              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="bg-cyan-500/20 p-3 rounded-2xl">
                  <MapPin size={22} className="text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Location</h3>
                  <p className="text-sm text-white/70">Address, City or Zip</p>
                </div>
              </div>

              {/* Date */}
              <div className="flex items-start gap-3">
                <div className="bg-cyan-500/20 p-3 rounded-2xl">
                  <CalendarDays size={22} className="text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Date / Duration</h3>
                  <p className="text-sm text-white/70">Anytime / 3 Days</p>
                </div>
              </div>

              {/* Budget */}
              <div className="flex items-start gap-3">
                <div className="bg-cyan-500/20 p-3 rounded-2xl">
                  <Wallet size={22} className="text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Budget</h3>
                  <p className="text-sm text-white/70">$0 - $3000</p>
                </div>
              </div>

              {/* People */}
              <div className="flex items-start gap-3">
                <div className="bg-cyan-500/20 p-3 rounded-2xl">
                  <Users size={22} className="text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">People</h3>
                  <p className="text-sm text-white/70">5 - 10 Persons</p>
                </div>
              </div>

              {/* Search Button */}
              <button className="h-full w-full bg-cyan-500 hover:bg-cyan-400 transition rounded-2xl flex items-center justify-center gap-2 text-white font-semibold py-4 cursor-pointer">
                <Search size={20} />
                Search
              </button>
            </div>
          </div>
        </div>
        </Link>  

        {/* Floating Stats */}
        <div className="mt-14 flex flex-wrap justify-center gap-6">
          <div className="bg-black backdrop-blur-md border border-white/10 px-8 py-5 rounded-2xl text-center">
            <h2 className="text-3xl font-bold text-white">15k+</h2>
            <p className="text-white/70 text-sm mt-1">Happy Travelers</p>
          </div>

          <div className="bg-black backdrop-blur-md border border-white/10 px-8 py-5 rounded-2xl text-center">
            <h2 className="text-3xl font-bold text-white">4.9★</h2>
            <p className="text-white/70 text-sm mt-1">Average Rating</p>
          </div>
        </div>
        </div>
    );
};

export default Stats;
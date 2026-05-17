import DeleteAlert from "@/components/DeleteAlert";
import { EditDestinationForm } from "@/components/EditDestinationModal";

import { CalendarDays, ChartScatter, Clock3, Edit, MapPin, Star, Users } from "lucide-react";
import Image from "next/image";


const DestinationDetailsPage = async({ params }) => {
    const { id } = await params;
    // console.log(id);

    const res = await fetch(`http://localhost:5000/destination/${id}`);
    const destination = await res.json();

    const {
    destinationName,
    country,
    category,
    price,
    duration,
    departureDate,
    imageUrl,
    description,
    } = destination;
    
    const parts= description.split(".")
    return (
        <div> 
            <div className="flex justify-end gap-6 my-4 mx-10">
          <EditDestinationForm destination={destination} />
          <DeleteAlert destination={destination} />
            </div>
              <section className="bg-[#f8fafc] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-5">
        {/* Banner */}
        <div className="relative h-125 rounded-[32px] overflow-hidden">
          <Image
            src={imageUrl}
            alt="Destination"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute bottom-10 left-10 text-white">
            <p className="uppercase tracking-[4px] text-cyan-400 text-sm">
              Featured Destination
            </p>

            <h1 className="text-5xl font-bold mt-3">
              {destinationName}
            </h1>

            <div className="flex items-center gap-2 mt-4 text-white/80">
              <MapPin size={18} />
                                <p>{ country}</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-10 mt-12">
          {/* Left Side */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h2 className="text-3xl font-bold mb-5">
                About This Destination
              </h2>

              <p className="text-gray-600 leading-relaxed">
                {parts[0]}.
              </p>

              <p className="text-gray-600 leading-relaxed mt-4">
                {parts.slice(1).join(".")}
              </p>
            </div>

            {/* Highlights */}
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h2 className="text-3xl font-bold mb-6">
                Tour Highlights
              </h2>

              <div className="grid sm:grid-cols-2 gap-5">
  <div className="border rounded-2xl p-5">
    <h3 className="font-semibold text-lg">
      Scenic Exploration
    </h3>

    <p className="text-gray-500 text-sm mt-2">
      Discover breathtaking landscapes, iconic landmarks, and
      unforgettable natural beauty.
    </p>
  </div>

  <div className="border rounded-2xl p-5">
    <h3 className="font-semibold text-lg">
      Comfortable Accommodation
    </h3>

    <p className="text-gray-500 text-sm mt-2">
      Enjoy relaxing stays with modern facilities and cozy
      surroundings throughout your journey.
    </p>
  </div>

  <div className="border rounded-2xl p-5">
    <h3 className="font-semibold text-lg">
      Guided Experiences
    </h3>

    <p className="text-gray-500 text-sm mt-2">
      Explore destinations with expert guidance and carefully
      planned travel experiences.
    </p>
  </div>

  <div className="border rounded-2xl p-5">
    <h3 className="font-semibold text-lg">
      Cultural Activities
    </h3>

    <p className="text-gray-500 text-sm mt-2">
      Experience local traditions, food, culture, and unique
      activities that make every trip memorable.
    </p>
  </div>
</div>
            </div>

            
           
          </div>

          {/* Booking Card */}
          <div>
            <div className="bg-white rounded-3xl p-8 shadow-sm sticky top-10">
              <div className="flex items-center justify-between">
                <h2 className="text-4xl font-bold">
                 $ {price}
                </h2>

                <div className="flex items-center gap-1 text-yellow-500">
                  <Star size={18} fill="currentColor" />
                  <span className="font-semibold">4.9</span>
                </div>
              </div>

              <p className="text-gray-500 mt-1">
                Per Person
              </p>

              <div className="space-y-5 mt-8">
                <div className="flex items-center gap-4">
                  <Clock3 className="text-cyan-500" />

                  <div>
                    <h3 className="font-semibold">
                      Duration
                    </h3>

                    <p className="text-sm text-gray-500">
                      {duration}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <ChartScatter className="text-cyan-500" />

                  <div>
                    <h3 className="font-semibold">
                      Category
                    </h3>

                    <p className="text-sm text-gray-500">
                      {category}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <CalendarDays className="text-cyan-500" />

                  <div>
                    <h3 className="font-semibold">
                      Available
                    </h3>

                    <p className="text-sm text-gray-500">
                      {departureDate}
                    </p>
                  </div>
                </div>
              </div>

              <button className="w-full mt-10 bg-cyan-500 hover:bg-cyan-400 transition text-white py-4 rounded-2xl font-semibold cursor-pointer">
                Book Now
              </button>

              <button className="w-full mt-4 border border-gray-300 hover:bg-gray-100 transition py-4 rounded-2xl font-semibold cursor-pointer">
                Save Destination
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
};

export default DestinationDetailsPage
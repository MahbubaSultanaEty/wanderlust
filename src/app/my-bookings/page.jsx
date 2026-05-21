import BookingCancelAlert from "@/components/BookingCancelAlert";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

const MyBookingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const { token } = await auth.api.getToken({
    headers: await headers()
  })
   
  const user = session?.user;
  const userId = user?.id;
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${userId}`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  });
  const bookings = await res.json();
  return (
    <section className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50 py-16 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-14">
          <div>
            <p className="uppercase tracking-[4px] text-cyan-500 text-sm font-semibold">
              Travel Dashboard
            </p>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mt-3 leading-tight">
              My Bookings
            </h1>

            <p className="text-gray-600 mt-5 max-w-2xl text-lg leading-relaxed">
              Manage your upcoming trips, revisit completed adventures, and keep
              track of all your travel experiences in one place.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-5 text-center min-w-[110px]">
              <h2 className="text-3xl font-bold text-cyan-600">
                {bookings.length}
              </h2>

              <p className="text-sm text-gray-500 mt-1">Trips</p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-5 text-center min-w-27.5">
              <h2 className="text-3xl font-bold text-emerald-500">
                {bookings.length}
              </h2>

              <p className="text-sm text-gray-500 mt-1">Upcoming</p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-5 text-center min-w-27.5">
              <h2 className="text-3xl font-bold text-orange-500">0</h2>

              <p className="text-sm text-gray-500 mt-1">Completed</p>
            </div>
          </div>
        </div>

        {/* Booking List */}
        <div className="flex flex-col gap-8">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="group bg-white border border-gray-100 rounded-[36px] overflow-hidden shadow-xl shadow-cyan-200 hover:-translate-y-1 transition-all duration-500"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Left Info */}
                <div className="flex-1 p-4 lg:p-6 flex flex-col justify-between">
                  <div>
                    {/* Status */}
                    <span className="inline-flex px-4 py-2 rounded-full text-sm font-semibold bg-emerald-100 text-emerald-600 border border-emerald-200">
                      Confirmed
                    </span>

                    {/* Title */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-2">
                      {booking.destinationName}
                    </h2>

                    <p className="text-base text-gray-500 mt-1">
                      {booking.country}
                    </p>

                    {/* Description Row */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-3">
                      <div className="bg-cyan-50 rounded-2xl p-4">
                        <p className="text-sm text-gray-500">Departure</p>

                        <h3 className="font-semibold text-gray-900 mt-1">
                         {new Date(booking.departureDate).toISOString().slice(0, 10)}
                        </h3>
                      </div>

                      <div className="bg-cyan-50 rounded-2xl p-4">
                        <p className="text-sm text-gray-500">Budget</p>

                        <h3 className="font-semibold text-cyan-600 mt-1">
                          ${booking.price}
                        </h3>
                      </div>

                      <div className="bg-cyan-50 rounded-2xl p-4">
                        <p className="text-sm text-gray-500">Duration</p>

                        <h3 className="font-semibold text-gray-900 mt-1">
                          5 Days
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                          <div className="flex flex-wrap gap-4 mt-3">
                    <Link href={`/destinations/${booking.destinationId}`}>
                        <button className="bg-cyan-500 hover:bg-cyan-400 transition text-white px-4 py-2 rounded-2xl font-semibold cursor-pointer">
                      View Details
                    </button>
                              </Link>               
                    <BookingCancelAlert bookingId={ booking._id} />
                  </div>
                </div>

                {/* Right Image */}
                <div className="relative lg:w-[320px] h-55 lg:h-auto overflow-hidden">
                  <Image
                    src={booking.imageUrl}
                    alt={booking.destinationName}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-linear-to-l from-transparent to-black/10" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyBookingPage;

"use client";
import { authClient } from "@/lib/auth-client";
import { DateField, Label } from "@heroui/react";
import {
  CalendarDays,
  ChartScatter,
  Clock3,
  Edit,
  Star,
  Users,
} from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

const BookingCard = ({ destination }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  // console.log(user);
  const [departureDate, setDepartureDate] = useState(null);

  const {
    destinationName,
    country,
    category,
    price,
    duration,
    imageUrl,
    description,
  } = destination;

  const handleBooking = async () => {
      if (!departureDate) return toast.error("Please select a departure date");
    const bookingData = {
      userId: user?.id,
      userImage: user?.image,
      userName: user?.name,
      destinationId: destination._id,
      destinationName,
      price,
      imageUrl,
      country,
      departureDate: new Date(
        departureDate?.year,
        departureDate?.month - 1,
        departureDate?.day,
      ),
    };

    const {data: tokenData} = await authClient.token()
console.log(tokenData);
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenData?.token}`
      },
      body: JSON.stringify(bookingData),
    });
    const data = await res.json();

    toast.success("You booked successfully");
  };
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm sticky top-10">
      <div className="flex items-center justify-between">
        <h2 className="text-4xl font-bold">$ {price}</h2>

        <div className="flex items-center gap-1 text-yellow-500">
          <Star size={18} fill="currentColor" />
          <span className="font-semibold">4.9</span>
        </div>
      </div>

      <p className="text-gray-500 mt-1">Per Person</p>

      <div className="space-y-5 mt-8">
        <div className="flex items-center gap-4">
          <Clock3 className="text-cyan-500" />

          <div>
            <h3 className="font-semibold">Duration</h3>

            <p className="text-sm text-gray-500">{duration}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <ChartScatter className="text-cyan-500" />

          <div>
            <h3 className="font-semibold">Category</h3>

            <p className="text-sm text-gray-500">{category}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <CalendarDays className="text-cyan-500" />

          <div>
            <DateField className="w-[256px] " value={departureDate} onChange={setDepartureDate} name="date">
              <Label className="font-semibold text-lg">Departure Date</Label>
              <DateField.Group>
                <DateField.Input>
                  {(segment) => <DateField.Segment segment={segment} />}
                </DateField.Input> 
              </DateField.Group>
            </DateField>
          </div>
        </div>
      </div>

      <button
        onClick={handleBooking}
        className="w-full mt-10 bg-cyan-500 hover:bg-cyan-400 transition text-white py-4 rounded-2xl font-semibold cursor-pointer"
      >
        Book Now
      </button>

      <button className="w-full mt-4 border border-gray-300 hover:bg-gray-100 transition py-4 rounded-2xl font-semibold cursor-pointer">
        Save Destination
      </button>
    </div>
  );
};

export default BookingCard;

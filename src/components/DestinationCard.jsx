import { ArrowChevronRight, TargetDart } from "@gravity-ui/icons";
import { CalendarCheck, CalendarFold } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


const DestinationCard = ({ destination }) => {
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

  return (
    <Link href={`/destinations/${destination._id}`}>
    <div className="group bg-white rounded-3xl overflow-hidden border border-cyan-100 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 max-w-sm mx-auto ">
      
      {/* Image */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          fill
          src={imageUrl}
          alt={destinationName}
          className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Category Badge */}
        <span className="absolute top-4 left-4 bg-cyan-500 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-md">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 space-y-2 ">
        
        {/* Title + Country */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 h-12">
           {destinationName}
          </h2>

          <p className="text-cyan-600 font-medium mt-1 flex items-center gap-2">
           <TargetDart/>  {country}
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-1">
          {description}
        </p>

        {/* Info Section */}
              <div className="bg-cyan-200 py-2 rounded-2xl justify-center text-xs font-bold flex items-center gap-2">
               <CalendarCheck size={18}/> {duration}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2">
          
          <div>
            <p className="text-sm text-gray-400">
              Starting From
            </p>

            <h3 className="text-xl font-semibold text-cyan-600">
              ${price}
            </h3>
          </div>

          
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 text-sm rounded-2xl font-semibold transition-all duration-300 shadow-md hover:shadow-cyan-200 flex  items-center gap-2">
            Book Now <ArrowChevronRight className="-rotate-25"/>
          </button>
 
        </div>
      </div>
    </div>
     </Link>
  );
};

export default DestinationCard;
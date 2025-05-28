import clsx from "clsx";
import { Link } from "react-router-dom";

const HotelCard = ({
  id,
  image,
  title,
  location,
  price,
  description,
  className,
}) => (
  <Link
    to={`/hotels/${id}`}
    className={clsx(
      "bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-yellow-400 transition-shadow",
      className,
    )}
  >
    <img src={image} alt={title} className="h-58 w-full object-cover" />

    <div className="p-4">
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-400 mb-2">{location}</p>
      <p className="text-yellow-400 font-bold mb-2">{price} / night</p>
      <p className="text-sm mb-4">{description}</p>

      <div className="text-yellow-300 hover:underline font-medium">
        Details ⭢
      </div>
    </div>
  </Link>
);

export default HotelCard;

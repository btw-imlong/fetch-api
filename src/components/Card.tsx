import { Link } from "react-router";

interface CardProps {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: { rate: number };
  image: string;
}

const Card = ({ id, title, description, price, rating, image }: CardProps) => (
  <Link
    to={`/products/${id}`}
    className="border rounded p-4 shadow hover:shadow-lg"
  >
    <img src={image} alt={title} className="h-48 object-contain w-full mb-4" />
    <h2 className="text-lg font-bold">{title}</h2>
    <p className="text-sm text-gray-600">{description.substring(0, 80)}...</p>
    <p className="mt-2 text-blue-700 font-semibold">${price}</p>
    <p className="text-yellow-500">⭐ {rating.rate}</p>
  </Link>
);

export default Card;

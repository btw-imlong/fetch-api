import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const ProductDetail = () => {
  const { id } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [detail, setDetail] = useState<any>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then(setDetail);
  }, [id]);

  if (!detail) return <p>Loading...</p>;

  return (
    <div>
      <Navbar />
      <div className="p-4">
        <h2 className="text-xl font-bold">{detail.title}</h2>
        <p className="mt-2">{detail.body}</p>
        {/* Static placeholders for price and rating */}
        <p className="mt-2 text-blue-700 font-semibold">Price: $99.99</p>
        <p className="text-yellow-500">⭐ Rating: 4.5</p>
      </div>
    </div>
  );
};

export default ProductDetail;

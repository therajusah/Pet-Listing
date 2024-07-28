import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import axios from "axios";
import Loader from "./Spinner";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const animal = searchParams.get("animal");
        const location = searchParams.get("location");
        const breed = searchParams.get("breed");
        const response = await axios.get(
          `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        );
        setPets(response.data.pets);
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [searchParams]);

  if (loading) return <Loader />;

  return (
    <div className="w-[90%] mx-auto py-10">
      <h1 className="mb-8 text-3xl">Search Results</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {pets.map((pet) => (
          <Link
            to={`/details/${pet.id}`}
            key={pet.id}
            className="w-full p-4 border rounded shadow-lg"
          >
            <img
              src={pet.images[0]}
              alt={pet.name}
              className="object-cover h-40 w-full"
            />
            <h2 className="mt-2 text-xl">{pet.name}</h2>
            <p>{pet.breed}</p>
            <p>
              {pet.city}, {pet.state}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;

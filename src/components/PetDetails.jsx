import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Spinner";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PetDetails = () => {
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchPetDetails = async () => {
      try {
        const response = await axios.get(
          `http://pets-v2.dev-apis.com/pets?id=${id}`
        );
        setPet(response.data.pets[0]);
      } catch (error) {
        console.error("Error fetching pet details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPetDetails();
  }, [id]);

  const settings = {
    dots: true,
    infinite: pet?.images.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: pet?.images.length > 1,
  };

  if (loading) return <Loader />;

  return (
    <div className="w-[80%] mx-auto py-10 flex flex-col md:flex-row justify-center items-center">
      {pet ? (
        <>
          <div className="w-full md:w-1/2">
            <Slider {...settings} className="slider">
              {pet.images.map((image, index) => (
                <div key={index} className="slide">
                  <img
                    src={image}
                    alt={`Pet ${index + 1}`}
                    className="object-contain h-[60vh] w-full"
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="w-full p-5 md:w-1/2">
            <h1 className="mb-4 text-4xl font-bold">{pet.name}</h1>
            <h3 className="mb-4 text-xl text-gray-600">{pet.breed}</h3>
            <h2 className="mb-4 text-2xl text-red-600">
              {pet.city}, {pet.state}
            </h2>
            <p className="mb-6">{pet.description}</p>
            <div className="flex space-x-4">
              <Link
                to="#"
                className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
              >
                Adopt Now
              </Link>
              <button className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600">
                Add to Favorites
              </button>
            </div>
          </div>
        </>
      ) : (
        <div>No pet details found.</div>
      )}
    </div>
  );
};

export default PetDetails;

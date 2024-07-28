import { Link } from "react-router-dom";
import { useContext } from "react";
import { PetContext } from "../utils/Context";
import Spinner from "./Spinner";

const PetList = () => {
  const { pets, loading, error } = useContext(PetContext);

  if (loading) return <Spinner />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className=" w-full h-full flex flex-col items-center">
      <div className="flex flex-wrap justify-center w-full max-w-screen-lg gap-4">
        {pets.map((pet) => (
          <Link
            to={`/details/${pet.id}`}
            key={pet.id}
            className="w-[22%] h-[30vh] p-3 border rounded shadow-lg flex flex-col justify-center items-center transform transition-transform hover:scale-105"
          >
            <div
              className="w-full h-[80%] bg-cover bg-center"
              style={{ backgroundImage: `url(${pet.images[0]})` }}
            ></div>
            <h1 className="mt-2 text-xl text-center hover:text-blue-500">
              {pet.name}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PetList;

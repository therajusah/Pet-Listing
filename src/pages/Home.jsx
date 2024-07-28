import { useState } from "react";
import PetList from "../components/PetList";
import SearchModal from "../components/SearchModal";

const HomePage = () => {
  const [isSearchOpen, setSearchOpen] = useState(false);

  const handleOpenSearch = () => setSearchOpen(true);
  const handleCloseSearch = () => setSearchOpen(false);

  return (
    <div className="relative w-full p-10 pt-[5%] flex flex-col items-center">
      <button
        onClick={handleOpenSearch}
        className="absolute z-50 px-4 py-2 text-white bg-blue-500 rounded top-5 right-5"
      >
        Search
      </button>
      <SearchModal isOpen={isSearchOpen} onClose={handleCloseSearch} />

      <h1 className="mb-5 text-4xl">Welcome to Pet Finder</h1>
      <p className="mb-10 text-lg">
        Find your perfect pet from a wide variety of options.
      </p>

      <div className="w-full mt-10">
        <h2 className="mb-5 text-3xl text-center">Available Pets</h2>
        <PetList />
      </div>
    </div>
  );
};

export default HomePage;

import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { fetchPets } from "../services/api";

export const PetContext = createContext();

const PetProvider = ({ children }) => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPets = async () => {
      try {
        const { data } = await fetchPets();
        setPets(data.pets);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getPets();
  }, []);

  return (
    <PetContext.Provider value={{ pets, loading, error }}>
      {children}
    </PetContext.Provider>
  );
};

PetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PetProvider;

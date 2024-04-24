import axios from "axios";
import { useEffect, useState } from "react";

export default function () {
  const [categorie, setCategorie] = useState([]);

  const getCategory = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:4000/api/category/getAllCategory"
      );
      setCategorie(data?.categories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  return categorie;
}

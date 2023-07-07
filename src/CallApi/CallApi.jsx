import { useState, useEffect } from "react";
import axios from "axios";
const CallApi = () => {
  const [res1, setRes1] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps

  const FetchApi = async () => {
    const response = await axios.get("http://localhost:3000/quote");

    console.log(response.data);
  };

  // Optionally the request above could also be done as

  useEffect(() => {
    FetchApi();
  }, []);
};
export default CallApi;

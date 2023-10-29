import { useState, useEffect } from "react";
import api from "../services/api";
export const useApiGet = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const data = await api.get(url);
        setData(data);
        setError(null);
      } catch (error) {
        setError(error.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  return { data, loading, error };
};

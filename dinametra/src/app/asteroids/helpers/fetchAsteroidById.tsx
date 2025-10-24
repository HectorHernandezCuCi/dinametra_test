import { AsteroidData } from "../types/asteroids";

const fetchAsteroidById = async (
  id: string,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setData: React.Dispatch<React.SetStateAction<AsteroidData | null>>,
  setError: React.Dispatch<React.SetStateAction<string | null>>
) => {
  try {
    setLoading(true);

    const API = process.env.NEXT_PUBLIC_API_URL;
    if (!API) throw new Error("API URL not defined");

    const response = await fetch(`${API}/Asteroids/Lookup/${id}`);
    if (!response.ok) throw new Error("Error fetching asteroid data");

    const result: AsteroidData = await response.json();
    setData(result);
    setError(null);
  } catch (err: unknown) {
    if (err instanceof Error) {
      setError(err.message);
    } else {
      setError("Unknown error occurred");
    }
  } finally {
    setLoading(false);
  }
};

export default fetchAsteroidById;

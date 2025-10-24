import { AsteroidsData } from "../types/asteroids";

const fetchData = async (
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setData: React.Dispatch<React.SetStateAction<AsteroidsData | null>>,
  setError: React.Dispatch<React.SetStateAction<string | null>>
) => {
  try {
    setLoading(true);

    const API = process.env.NEXT_PUBLIC_API_URL;
    if (!API) throw new Error("API URL not defined");

    const response = await fetch(`${API}/Asteroids/Feed`);
    if (!response.ok) throw new Error("Error fetching data");

    const result: AsteroidsData = await response.json();
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

export default fetchData;

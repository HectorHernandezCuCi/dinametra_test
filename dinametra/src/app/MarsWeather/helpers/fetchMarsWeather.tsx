import { MarsWeatherData } from "../types/marsWeatherTypes";

const fetchMarsWeatherData = async (
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setData: React.Dispatch<React.SetStateAction<MarsWeatherData | null>>,
  setError: React.Dispatch<React.SetStateAction<string | null>>
) => {
  try {
    setLoading(true);

    const API = process.env.NEXT_PUBLIC_API_URL;
    if (!API) throw new Error("API URL not defined");

    const response = await fetch(`${API}/Mars/Weather`);
    if (!response.ok) throw new Error("Error fetching data");

    const result: MarsWeatherData = await response.json();
    setData(result);
    setError(null);
  } catch (err: unknown) {
    if (err instanceof Error) {
      setError(err.message);
    } else {
      setError("Unknown error");
    }
  } finally {
    setLoading(false);
  }
};

export default fetchMarsWeatherData;

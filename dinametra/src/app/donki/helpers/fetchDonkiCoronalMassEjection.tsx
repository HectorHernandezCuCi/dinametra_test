import { CoronalMassEjection } from "../types/donki";

const fetchDonkiCoronalMassEjection = async (
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setData: React.Dispatch<React.SetStateAction<CoronalMassEjection[]>>,
    setError: React.Dispatch<React.SetStateAction<string | null>>
) => {
    try {
        setLoading(true);
        const CACHE_KEY = "donkiCMECache";

        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
            const cachedData = JSON.parse(cached) as CoronalMassEjection[];
            setData(cachedData);
        }

        const API = process.env.NEXT_PUBLIC_API_URL;
        const response = await fetch(`${API}/Donki/coronal_mass_ejection`);
        if (!response.ok) throw new Error("Error fetching data");

        const result: CoronalMassEjection[] = await response.json();

        if (JSON.stringify(result) !== cached) {
            setData(result);
            localStorage.setItem(CACHE_KEY, JSON.stringify(result));
        }

        setError(null);
    } catch (err: unknown) {
        if (err instanceof Error) {
            setError(err.message);
        } else {
            setError("An unexpected error occurred");
        }
    } finally {
        setLoading(false);
    }
};

export default fetchDonkiCoronalMassEjection;

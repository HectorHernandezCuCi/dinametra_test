import { NasaImage } from "../types/galleryTypes";
export async function fetchNasaImages(query: string = "mars"): Promise<NasaImage[]> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(`${apiUrl}/nasa/images?q=${encodeURIComponent(query)}`);
    if (!res.ok) throw new Error("Failed to fetch NASA images");
    const data: NasaImage[] = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

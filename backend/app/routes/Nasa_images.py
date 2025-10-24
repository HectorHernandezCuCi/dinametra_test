from fastapi import APIRouter, Query, HTTPException, Path
import httpx

router = APIRouter()

NASA_API_BASE = "https://images-api.nasa.gov"

@router.get("/nasa/images")
async def get_nasa_images(q: str = Query("mars", description="Search query")):
    url = f"{NASA_API_BASE}/search?q={q}&media_type=image"

    async with httpx.AsyncClient() as client:
        try:
            response = await client.get(url)
            response.raise_for_status()
            data = response.json()
            items = data.get("collection", {}).get("items", [])[:10]
            results = []
            for item in items:
                results.append({
                    "nasa_id": item["data"][0]["nasa_id"],
                    "title": item["data"][0]["title"],
                    "description": item["data"][0].get("description"),
                    "href": item["links"][0]["href"] if "links" in item and item["links"] else None
                })
            return results
        except httpx.HTTPError as e:
            raise HTTPException(status_code=500, detail=str(e))

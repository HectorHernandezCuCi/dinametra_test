from fastapi import APIRouter, Query, HTTPException
import os
from datetime import datetime, timedelta
import httpx
from dotenv import load_dotenv

load_dotenv()

router = APIRouter()

@router.get("/Donki/coronal_mass_ejection")
async def get_coronal_mass_ejection(
    start_date: str = Query(default=(datetime.utcnow() - timedelta(days=30)).strftime("%Y-%m-%d")),
    end_date: str = Query(default=datetime.utcnow().strftime("%Y-%m-%d")),
):
    api_key = os.getenv("NASA_API")
    if not api_key:
        raise HTTPException(status_code=500, detail="NASA_API key not found in environment variables")

    url = f"https://api.nasa.gov/DONKI/CME?startDate={start_date}&endDate={end_date}&api_key={api_key}"

    async with httpx.AsyncClient(timeout=30.0) as client:
        response = await client.get(url)
        if response.status_code != 200:
            raise HTTPException(status_code=response.status_code, detail=response.text)
        return response.json()

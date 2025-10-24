from fastapi import APIRouter, Query, HTTPException, Path
import os
import httpx
from dotenv import load_dotenv

load_dotenv()

router = APIRouter()

@router.get("/Mars/Weather")
async def get_mars_weather():
    api_key = os.getenv("NASA_API")
    if not api_key:
        raise HTTPException(status_code=500, detail="NASA_API key not found in environment variables")
    url = f"https://api.nasa.gov/insight_weather/?api_key={api_key}&feedtype=json&ver=1.0"

    async with httpx.AsyncClient() as client:
        response = await client.get(url)
        if response.status_code != 200:
            raise HTTPException(status_code=response.status_code, detail=response.text)
        return response.json()
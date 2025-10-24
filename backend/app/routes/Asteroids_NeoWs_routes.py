from fastapi import APIRouter, Query, HTTPException, Path
import os
from datetime import datetime, timedelta
import httpx
from dotenv import load_dotenv

load_dotenv()

router = APIRouter()

@router.get("/Asteroids/Feed")
async def get_Asteroids_feed(
    start_date: str = Query(default=(datetime.utcnow() - timedelta(days=7)).strftime("%Y-%m-%d")),
    end_date: str = Query(default=datetime.utcnow().strftime("%Y-%m-%d")),
):
    api_key = os.getenv("NASA_API")
    if not api_key:
        raise HTTPException(status_code=500, detail="NASA_API key not found in environment variables")
    url = f"https://api.nasa.gov/neo/rest/v1/feed?start_date={start_date}&end_date={end_date}&api_key={api_key}"
    
    async with httpx.AsyncClient() as client:
        response = await client.get(url)
        if response.status_code != 200:
            raise HTTPException(status_code=response.status_code, detail=response.text)
        return response.json()

@router.get("/Asteroids/Lookup/{id}")
async def get_asteroid_lookup(
    id: int = Path(..., description="Asteroid ID to look up"),
):
    api_key = os.getenv("NASA_API")
    if not api_key:
        raise HTTPException(status_code=500, detail="NASA_API key not found in environment variables")

    url = f"https://api.nasa.gov/neo/rest/v1/neo/{id}?api_key={api_key}"

    async with httpx.AsyncClient() as client:
        response = await client.get(url)
        if response.status_code != 200:
            raise HTTPException(status_code=response.status_code, detail=response.text)
        return response.json()
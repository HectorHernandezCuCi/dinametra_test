from fastapi import FastAPI, Query, Path
from fastapi.middleware.cors import CORSMiddleware
from app.routes import Asteroids_NeoWs_routes, Donki_routes, Mars_weather, Nasa_images
from dotenv import load_dotenv
import os
import requests
# Load environment variables
load_dotenv()
NASA_API_KEY = os.getenv("NASA_API")
BASE_URL = "https://api.nasa.gov/neo/rest/v1"

app = FastAPI(title="Dinametra Backend - NASA NeoWs API")


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



app.include_router(Asteroids_NeoWs_routes.router)
app.include_router(Donki_routes.router)
app.include_router(Mars_weather.router)
app.include_router(Nasa_images.router)

# 🌍 Root route
@app.get("/")
def root():
    return {"message": "Welcome to Dinametra NASA NeoWs API 🚀"}


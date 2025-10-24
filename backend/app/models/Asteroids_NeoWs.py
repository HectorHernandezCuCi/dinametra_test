from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime, timedelta
import os
from dotenv import load_dotenv

load_dotenv()


def default_start_date():
    return (datetime.utcnow() - timedelta(days=7)).strftime("%Y-%m-%d")

def default_end_date():
    return datetime.utcnow().strftime("%Y-%m-%d")

class Asteroids_NeoWs_Feed(BaseModel):
    start_date: Optional[str] = Field(
        default_factory=default_start_date,
        example=default_start_date()
    )
    end_date: Optional[str] = Field(
        default_factory=default_end_date,
        example=default_end_date()
    )
    api_key: str = Field(default=os.getenv("NASA_API"))

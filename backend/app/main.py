from fastapi import FastAPI

from app.database.database import Base, engine

# Import all models
from app.models.vehicle import Vehicle
from app.models.driver import Driver
from app.models.trip import Trip
from app.models.maintenance import Maintenance

# Create all tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="FleetX API",
    description="Smart Fleet Operations Management API",
    version="1.0.0",
)


@app.get("/")
def root():
    return {
        "status": "success",
        "message": "FleetX Backend Running 🚛",
    }
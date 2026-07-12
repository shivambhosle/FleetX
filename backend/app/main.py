from fastapi import FastAPI
from app.routers.vehicle_router import router as vehicle_router
from app.database.database import Base, engine
from app.routers.driver_router import router as driver_router
from app.routers.trip_router import router as trip_router
from app.routers.maintenance_router import router as maintenance_router

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

app.include_router(vehicle_router)
app.include_router(driver_router)
app.include_router(trip_router)
app.include_router(maintenance_router)

@app.get("/")
def root():
    return {
        "status": "success",
        "message": "FleetX Backend Running 🚛",
    }
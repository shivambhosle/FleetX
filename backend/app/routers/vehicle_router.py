from fastapi import APIRouter

router = APIRouter(
    prefix="/vehicles",
    tags=["Vehicles"]
)

@router.get("/")
def get_vehicles():
    return [
        {
            "id": 1,
            "vehicle_number": "MH12AB1234",
            "vehicle_type": "Truck",
            "driver_name": "Rahul Sharma",
            "fuel_level": "78%",
            "status": "Active"
        },
        {
            "id": 2,
            "vehicle_number": "MH14CD5678",
            "vehicle_type": "Van",
            "driver_name": "Amit Singh",
            "fuel_level": "42%",
            "status": "Maintenance"
        }
    ]
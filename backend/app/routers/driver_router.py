from fastapi import APIRouter

router = APIRouter(
    prefix="/drivers",
    tags=["Drivers"]
)

@router.get("/")
def get_drivers():
    return [
        {
            "id":1,
            "name":"Rahul Sharma",
            "phone":"+919876543210",
            "email":"rahul@fleetx.com",
            "assigned_vehicle":"MH12AB1234",
            "status":"Available"
        },
        {
            "id":2,
            "name":"Amit Singh",
            "phone":"+919123456780",
            "email":"amit@fleetx.com",
            "assigned_vehicle":"MH14CD5678",
            "status":"On Trip"
        }
    ]
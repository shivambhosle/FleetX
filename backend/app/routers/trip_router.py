from fastapi import APIRouter

router = APIRouter(
    prefix="/trips",
    tags=["Trips"]
)

@router.get("/")
def get_trips():
    return [
        {
            "id":1,
            "trip_id":"TRP-1001",
            "vehicle":"MH12AB1234",
            "driver":"Rahul Sharma",
            "source":"Mumbai",
            "destination":"Pune",
            "status":"In Transit"
        }
    ]
from fastapi import APIRouter

router = APIRouter(
    prefix="/maintenance",
    tags=["Maintenance"]
)

@router.get("/")
def get_maintenance():
    return [
        {
            "id":1,
            "vehicle":"MH12AB1234",
            "service":"Engine Oil Change",
            "status":"Completed"
        }
    ]
from fastapi import FastAPI

app = FastAPI(
    title="FleetX API",
    description="Smart Fleet Operations Management API",
    version="1.0.0"
)

@app.get("/")
def root():
    return {
        "status": "success",
        "message": "FleetX Backend Running 🚛"
    }
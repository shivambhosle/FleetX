from sqlalchemy import Column, Integer, String

from app.database.database import Base


class Vehicle(Base):
    __tablename__ = "vehicles"

    id = Column(Integer, primary_key=True, index=True)
    vehicle_number = Column(String, unique=True, index=True)
    vehicle_type = Column(String)
    driver_name = Column(String)
    fuel_level = Column(String)
    status = Column(String)
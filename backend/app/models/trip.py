from sqlalchemy import Column, Integer, String

from app.database.database import Base


class Trip(Base):
    __tablename__ = "trips"

    id = Column(Integer, primary_key=True, index=True)
    trip_id = Column(String, unique=True, index=True)
    vehicle_number = Column(String)
    driver_name = Column(String)
    source = Column(String)
    destination = Column(String)
    status = Column(String)
    eta = Column(String)
from sqlalchemy import Column, Integer, String

from app.database.database import Base


class Maintenance(Base):
    __tablename__ = "maintenance"

    id = Column(Integer, primary_key=True, index=True)
    vehicle_number = Column(String, index=True)
    service_type = Column(String)
    service_date = Column(String)
    status = Column(String)
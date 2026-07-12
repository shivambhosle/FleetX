from sqlalchemy import Column, Integer, String

from app.database.database import Base


class Driver(Base):
    __tablename__ = "drivers"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    phone = Column(String)
    email = Column(String, unique=True)
    assigned_vehicle = Column(String)
    status = Column(String)
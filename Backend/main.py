from fastapi import FastAPI

from Database.database import engine, Base
from Routers import auth

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(auth.router)


@app.get("/")
def root():
    return {"message": "FastAPI Auth API"}
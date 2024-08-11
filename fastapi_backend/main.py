from fastapi import FastAPI, File, UploadFile
from pydantic import BaseModel
from typing import List
import numpy as np
import cv2
import io
from tensorflow.keras.models import load_model
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# Load your trained model
model = load_model('my_model.h5')

# Define labels
labels = ['glioma_tumor', 'meningioma_tumor', 'no_tumor', 'pituitary_tumor']

class Prediction(BaseModel):
    prediction: str

@app.post("/predict", response_model=Prediction)
async def predict(file: UploadFile = File(...)):
    # Read the image file into a numpy array
    img_bytes = await file.read()
    img = cv2.imdecode(np.frombuffer(img_bytes, np.uint8), cv2.IMREAD_COLOR)
    
    # Resize the image to match the model's input size
    img = cv2.resize(img, (150, 150))
    
    # Convert image to array and preprocess it
    img_array = np.array(img).astype('float32') / 255  # Normalize if needed
    img_array = img_array.reshape(1, 150, 150, 3)
    
    # Make prediction
    prediction = model.predict(img_array)
    predicted_class = labels[np.argmax(prediction[0])]
    
    return Prediction(prediction=predicted_class)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)


# python -m venv venv
# source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
# uvicorn main:app --reload

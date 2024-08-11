import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [prediction, setPrediction] = useState('');
    
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', selectedFile);
    
        try {
          const response = await axios.post('http://localhost:8000/predict', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          setPrediction(response.data.prediction);
        } catch (error) {
          console.error('Error uploading file:', error);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card p-4 shadow-sm">
                        <h1 className="text-center mb-4">MRI Brain Tumor Prediction</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <input 
                                    type="file" 
                                    className="form-control" 
                                    onChange={handleFileChange} 
                                    accept="image/*" 
                                />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">
                                Predict
                            </button>
                        </form>
                        {prediction && (
                            <div className="alert alert-info mt-4 text-center">
                                <h4>Prediction: {prediction}</h4>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;

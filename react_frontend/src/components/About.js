import React from 'react';

const About = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>About Brain Tumor Classification</h1>
      <h2>Types of Brain Tumors</h2>
      <ul>
        <li><strong>Glioma Tumor:</strong> Gliomas are a type of tumor that occurs in the brain and spinal cord. They originate from glial cells, which are the supportive cells of the brain. Gliomas can be highly aggressive and are classified into different grades, with grade IV glioblastoma being the most severe.</li>
        <li><strong>Meningioma Tumor:</strong> Meningiomas are tumors that arise from the meninges, the membranes that surround the brain and spinal cord. They are typically benign and slow-growing, but in some cases, they can be malignant.</li>
        <li><strong>No Tumor:</strong> This classification indicates that no tumor is present in the MRI scan. It is important to identify scans that do not show any signs of tumors to avoid unnecessary treatments.</li>
        <li><strong>Pituitary Tumor:</strong> Pituitary tumors develop in the pituitary gland, a small gland located at the base of the brain. These tumors can affect hormone production and may lead to various health issues depending on their size and location.</li>
      </ul>
      <h2>Who Can Benefit from This Website?</h2>
      <p>
        This website is designed for medical professionals, researchers, and patients who need to quickly and accurately classify brain tumors using MRI scans. By leveraging the power of machine learning, this tool can assist in early diagnosis and treatment planning, potentially improving patient outcomes.
      </p>
      <h2>Technologies Used</h2>
      <p>
        This website was developed using a combination of cutting-edge technologies:
      </p>
      <ul>
        <li><strong>React.js:</strong> A JavaScript library for building user interfaces, particularly single-page applications. React enables the creation of interactive UIs that are easy to manage and scale.</li>
        <li><strong>FastAPI:</strong> A modern, fast (high-performance), web framework for building APIs with Python 3.7+ based on standard Python type hints. It is used here to handle the backend logic and serve the trained model.</li>
        <li><strong>TensorFlow/Keras:</strong> An open-source machine learning framework used to train the Convolutional Neural Network (CNN) model. The CNN is specifically designed to analyze visual data and is ideal for classifying images such as MRI scans.</li>
        <li><strong>CNN Algorithm:</strong> The core of the classification system is a Convolutional Neural Network, a type of deep learning model that is particularly effective for image analysis. The model has been trained on a dataset of MRI scans labeled with different types of brain tumors.</li>
      </ul>
      <h2>About the Project</h2>
      <p>
        This project was created with the goal of providing a tool that can assist in the detection and classification of brain tumors. By combining the latest advances in machine learning with a user-friendly web interface, it aims to make advanced medical diagnostics more accessible.
      </p>
    </div>
  );
};

export default About;

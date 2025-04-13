# SmartClinic

SmartClinic is a comprehensive healthcare platform aimed at bridging the gap in healthcare delivery by providing a unified solution for diagnostics, research, and patient engagement.

## Problem Statement

In the current healthcare landscape, there exists a significant gap in the provision of a unified platform that seamlessly integrates medical data for diagnostics, research, and patient engagement. This deficiency in available systems leads to challenges in delivering timely and precise diagnoses, ultimately depriving patients of immediate access to critical healthcare insights. Additionally, healthcare professionals and researchers encounter obstacles in accessing diverse medical data necessary for analytical studies and pattern analysis, thereby impeding progress in medical research. Moreover, prevailing healthcare systems often lack interoperability, resulting in the fragmentation of patient data across various providers and institutions. This fragmentation not only disrupts the continuity of care but also restricts the ability of healthcare professionals to make well-informed decisions based on a comprehensive patient history.

## Installation

### Prerequisites
- Node.js and npm installed on your machine
- Python installed on your machine

### Download AI Models
1. Download the AI models from the provided link: [model_links.txt](https://github.com/RudrakshSJoshi/voyager_hackathon/tree/main/AI%20Models/model_links.txt)
2. Paste the downloaded models into the folder in the following directory: [path_to_folder](https://github.com/RudrakshSJoshi/voyager_hackathon/tree/main/server/python/diseasedetection/user%20skin)

### Client Installation
1. Navigate to the client directory: `cd client`
2. Run `npm install` to install dependencies: `npm install`
3. Start the client-side application on port 3000: `npm start`

### Server Installation
1. Navigate to the server directory: `cd server`
2. Run `npm install` to install dependencies: `npm install`
3. Create and activate a virtual environment (optional but recommended):
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   
4. Install required Python packages:
   ```bash
   pip install Flask
   pip install opencv-python
   pip install tensorflow
   pip install pillow
   pip install flask-cors
   
5. Start the Flask server:
    ```bash
   export FLASK_APP=app.py
   flask run --host=0.0.0.0 --port=5000

### Run Python Script
1. Navigate to the directory containing the Python script: `cd path/to/directory`
2. Run the Python script on port 8000: `python app.py`


## Approach

The optimized approach proposed integrates advanced technology and medical expertise to address key challenges in healthcare delivery, aiming for highly accurate predictions, efficient diagnosis, improved database management, enhanced patient engagement, and promotion of medical research and public health initiatives. Here's how the features are realized:

- **Highly Accurate Predictions**: Utilizing AI algorithms trained on diverse medical data to prevent misdiagnosis, ensuring precise disease predictions, and reducing healthcare costs.
- **Efficient Diagnosis for Remote Areas**: Enabling quick, accurate diagnosis via telemedicine in remote regions with limited medical facilities, enhancing patient care in underserved communities.
- **Comprehensive Database Management**: Facilitating research and collaboration among healthcare professionals by providing easy access to diverse medical data through a centralized database.
- **Integration with Healthcare Facilities**: Seamless integration with healthcare facilities to recommend specialized hospitals for detected diseases, optimizing care delivery and outcomes.
- **Enhanced Patient Engagement**: Promoting active patient participation through personalized recommendations, appointment reminders, educational resources, and virtual assistant interactions to address patient negligence towards medical care.
- **Patient History for Accurate Diagnosis**: Securely storing and organizing comprehensive patient records to empower informed decisions based on holistic health status and medical history, enhancing diagnostic accuracy and treatment efficacy.
- **Support for Overburdened Doctors**: Alleviating doctor stress by streamlining tasks, automating processes, and providing decision support tools to enhance diagnostic accuracy and workflow efficiency.
- **Facilitation of Medical Research**: Providing access to a centralized database and discussion forums for medical professionals and students to collaborate on research papers, share models, exchange insights, seek assistance, and engage in discussions, thereby fostering innovation and advancement in the field of healthcare.
- **Promotion of Public Health Initiatives**: Initiating sponsorship events such as blood donation camps, vaccination drives, and health awareness programs through the platform, facilitating community engagement and participation in preventive healthcare measures.

## TechStack

### Main Frameworks
- **Flask** (*Python web framework*)
- **React.js** (*JavaScript library for building user interfaces*)
- **Cloudinary** (*cloud-based image and video management platform*)
- **MongoDB** (*NoSQL database*)

### Python Libraries and Neural Networks
- **TensorFlow** (*open-source machine learning framework*)
- **NumPy** (*numerical computing library*)
- **Pandas** (*data manipulation and analysis library*)
- **VGG16**, **ResNet50**, **InceptionV3** (*pre-trained convolutional neural networks for image classification tasks*)
- **Matplotlib** (*data visualization library*)
- **Scikit-learn** (*machine learning library for various algorithms*)
- **Flask-CORS** (*Flask extension for handling Cross-Origin Resource Sharing*)
- **Flask-RESTful** (*Flask extension for building REST APIs*)

### Additional Components
- **HTML** (*Hypertext Markup Language for structuring web pages*)
- **CSS** (*Cascading Style Sheets for styling web pages*)
- **JavaScript** (*programming language for web development*)
- **Axios** (*HTTP client for making requests from React.js to Flask backend*)
- **JWT** (*JSON Web Tokens for user authentication*)
- **Bcrypt** (*library for password hashing*)

## Workflow (In Order)
1. Parallely creating models and optimising them. Meanwhile, setting up the frontend and database.
2. Connecting the database to the application.
3. Integrate API into the application.
4. Integrate Python to the backend for image classification.
5. Try to introduce chatbot as soon as possible.

*This involves the main workflow*

Rest procedures include:
- Integrating Symptom Checker
- Integrating Health Predictor
- Adding Discussion Forums
- Adding Sections for Research Papers and Models (open to discussion)

## Features

1. **Authorization and Login**: Users can securely log in to the platform and manage their accounts.
2. **Password Updation**: Users can update their passwords for account security.
3. **Profile Management**: Users can manage their profiles, including personal information and preferences.
4. **Virtual Assistant**: An AI-powered assistant facilitates general conversations and provides information on diseases and platform features, enhancing user interaction.
5. **Doctor Directory**: Users can access a list of all doctors, including their specializations and fees.
6. **Notifications Page**: Users receive notifications about appointments, reminders, and other important updates.
7. **Home Page**: The central hub for accessing various features and functionalities of the platform.

### Patient Features

1. **Disease Prediction Models**: Access to image classification models for predicting skin disorders.
2. **Symptom Checker**: Utilizes mapping from symptoms to diseases to predict the probability of certain diseases.
3. **Appointment Booking**: Patients can apply for appointments with healthcare providers.
4. **Health Predictor**: Provides healthy lifestyle alternatives based on individual health data.
5. **Medical History Access**: Patients can access their complete medical history, including diagnosed diseases, prescriptions, and associated doctors.

### Doctor Features

1. **Database Access**: Doctors can securely access patient records and medical data.
2. **Prescription Management**: Doctors can add patient prescriptions to their records.
3. **Diagnostic Models**: Access to prediction models for chest X-rays, brain MRI, and eye OCT for quick diagnosis and verification.
4. **Appointment Management**: Doctors can approve or decline appointment requests from patients.
5. **Discussion Forums**: Platform includes discussion forums for research papers and professional queries, with AI-based suggestion tags and nested comments.

## Purpose

1. **Collect Medically Relevant Data**: Gather medical data from patients anonymously to address scarcity and fragmentation of medical data in India.
2. **Centralize Database for Research**: Provide a centralized database to facilitate medical research and access to disease symptoms for medical students and professionals.
3. **Promote Public Health Initiatives**: Initiate a common platform for sponsorship events such as blood donation camps, vaccination drives, and health awareness programs by medical institutes.
4. **Facilitate Data Analysis**: Enable accurate and generalized data analysis by accessing medically relevant data globally, aiding in pattern analysis and research.
5. **Encourage Medical Research**: Foster research among medical professionals and students through a common discussion forum and incentivize research initiatives.
6. **Support Medical Response**: Aid in diagnosing diseases and suggesting first aid measures to increase survival chances and support healthcare professionals.
7. **Enhance Healthcare Efficiency**: Act as a mediator between doctors and patients, increasing throughput and reducing latency in healthcare delivery.
8. **Pattern Analysis for Organ Failure Prediction**: Utilize the platform for pattern analysis in cases of organ failure by developing prediction models using input features such as signs of recent symptoms. This will enable early detection and intervention, potentially saving lives and improving patient outcomes.



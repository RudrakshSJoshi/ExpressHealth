from tensorflow.keras.models import load_model
from PIL import Image
import numpy as np

# Load the saved model
loaded_model = load_model('C:\\Users\\Rudraksh\\Downloads\\Desktop Files Temp\\Task_2C\\Hackathon\\Best_Files\\New folder\\pneumonia\\Pneumonia_Detection_Attention_Block.h5')

# Define class labels
class_labels = ["NORMAL", "PNEUMONIA"]

# Function to preprocess the input image
def preprocess_image(image_path):
    img = Image.open(image_path)
    img = img.resize((224, 224))
    img = np.array(img)
    
    # Normalize the image
    img = img / 255.0  
    
    # Check if the image is grayscale
    if len(img.shape) == 2:
        # Convert grayscale image to RGB by duplicating channels
        img = np.stack((img,) * 3, axis=-1)
    
    # Add batch dimension
    img = np.expand_dims(img, axis=0)  
    
    return img

# Function to make predictions
def predict_image(model, image_path):
    preprocessed_img = preprocess_image(image_path)
    prediction = model.predict(preprocessed_img)
    return prediction

# Function to get predicted class and probability
def get_predicted_class(prediction):
    predicted_class_index = np.argmax(prediction)
    predicted_class = class_labels[predicted_class_index]
    probability = prediction[0][predicted_class_index]
    return predicted_class, probability

# Example usage
image_path = 'C:\\Users\\Rudraksh\\Downloads\\Desktop Files Temp\\Task_2C\\Hackathon\\Best_Files\\New folder\\pneumonia\\test_images\\normal_male_1.jpg'
prediction = predict_image(loaded_model, image_path)
predicted_class, probability = get_predicted_class(prediction)
print("Predicted Class:", predicted_class)
print("Probability:", probability)

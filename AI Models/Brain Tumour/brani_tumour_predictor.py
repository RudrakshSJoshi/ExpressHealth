import numpy as np
from PIL import Image
import tensorflow as tf

# Define the class labels
class_labels = ['glioma', 'meningioma', 'notumour', 'pituitary']

# Load the model
model = tf.keras.models.load_model('brain_tumour.h5')

# Function to preprocess the image
def preprocess_image(image_path):
    # Open the image file
    img = Image.open(image_path)
    # Resize the image to (150, 150)
    img = img.resize((150, 150))
    # Convert the image to array and normalize
    img_array = np.array(img) / 255.0
    # Add batch dimension
    img_array = np.expand_dims(img_array, axis=0)
    return img_array

# Function to make predictions
def predict_class(image_path):
    # Preprocess the image
    img = preprocess_image(image_path)
    # Make prediction
    predictions = model.predict(img)
    # Get the predicted class label
    predicted_class = class_labels[np.argmax(predictions)]
    # Get the confidence score
    confidence = np.max(predictions)
    return predicted_class, confidence

# Example usage
image_path = 'test_images\\meningioma.jpg'
predicted_class, confidence = predict_class(image_path)
print("Predicted Class:", predicted_class)
print("Confidence:", confidence)

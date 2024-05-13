import cv2
import numpy as np
import tensorflow as tf

# Load the trained model
model = tf.keras.models.load_model('C:\\Users\\Rudraksh\\Downloads\\Desktop Files Temp\\Task_2C\\Hackathon\\Best_Files\\skin_detection (1).h5')

# Define the class labels
class_labels=[
    'cellulitis',
    'impetigo',
    'athlete-foot',
    'nail-fungus',
    'ringworm',
    'cutaneous-larva-migrans',
    'chickenpox',
    'shingles',
]

def preprocess_image(image_path):
    # Load and resize the image
    img = cv2.imread(image_path)
    img = cv2.resize(img, (224, 224))
    # Preprocess the image (you might need to apply additional preprocessing steps here)
    img = img / 255.0  # Normalize pixel values to [0, 1]
    img = np.expand_dims(img, axis=0)  # Add batch dimension
    return img

def predict_class(image_path):
    # Preprocess the image
    img = preprocess_image(image_path)
    # Predict class probabilities
    predictions = model.predict(img)
    # Get the predicted class index
    predicted_class_index = np.argmax(predictions)
    # Get the predicted class label
    predicted_class_label = class_labels[predicted_class_index]
    # Get the confidence score
    confidence_score = predictions[0][predicted_class_index]
    return predicted_class_label, confidence_score

# Example usage:
image_path = 'Hackathon\\Best_Files\\skin_detection\\FU-athlete-foot (1).jpeg'  # Replace 'path_to_your_image.jpg' with the path to your test image
predicted_class, confidence = predict_class(image_path)
print(f'Predicted class: {predicted_class}')
print(f'Confidence score: {confidence:.4f}')

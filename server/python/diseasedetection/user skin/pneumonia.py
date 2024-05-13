from flask import Blueprint, Flask, request, jsonify
import cv2
import numpy as np
import tensorflow as tf
import base64
from PIL import Image
from io import BytesIO
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

predict2_bp = Blueprint('predict2', __name__)

# Load the trained model
model = tf.keras.models.load_model('Pneumonia_Detection_Attention_Block.h5')

# Define the class labels
class_labels = [
    'normal', 'pneumonia'
]

def preprocess_image(encoded_image):
    # Decode Base64 image data to binary
    image_binary = base64.b64decode(encoded_image)
    # Convert binary data to PIL Image
    image = Image.open(BytesIO(image_binary))
    # Remove alpha channel if it exists
    if image.mode == 'RGBA':
        image = image.convert('RGB')
    # Resize the image
    img = image.resize((224, 224))
    # Preprocess the image (you might need to apply additional preprocessing steps here)
    img = np.array(img) / 255.0  # Normalize pixel values to [0, 1]
    if len(img.shape) == 2:
        img = np.stack((img,)*3, axis=-1)  # Convert grayscale to RGB
    img = np.expand_dims(img, axis=0)  # Add batch dimension
    return img



def predict_class(encoded_image):
    # Preprocess the image
    img = preprocess_image(encoded_image)
    # Predict class probabilities
    predictions = model.predict(img)
    # Get the predicted class index
    predicted_class_index = np.argmax(predictions)
    # Get the predicted class label
    predicted_class_label = class_labels[predicted_class_index]
    # Get the confidence score
    confidence_score = predictions[0][predicted_class_index]
    return predicted_class_label, confidence_score

@predict2_bp.route('/predict2', methods=['POST'])
def predict2():
    encoded_image = request.json['image']
    predicted_class, confidence = predict_class(encoded_image)
    return jsonify({'predicted_class': predicted_class, 'confidence': float(confidence)})

if __name__ == '__main__':
    app.run(debug=True)


#=================================================================================================#

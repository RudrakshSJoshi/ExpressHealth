from tensorflow.keras.models import load_model
import tensorflow as tf
import cv2
import numpy as np
print(tf.__version__)

def main():
    # image_path = input("Enter image path: ")
    # model_path = input("Enter model path: ")
    # model = load_model(model_path)
    # Make prediction using the loaded model

    image_path = "C:\\Users\\Rudraksh\\Downloads\\Desktop Files Temp\\Task_2C\\Hackathon\\Best_Files\\New folder\\oct\\test_images\\DME.jpg"
    img = cv2.imread(image_path)
    img = cv2.resize(img, (224, 224))
    img = np.array(img, dtype='float32') / 255.0
    img = np.expand_dims(img, axis=0)

    model_path = "C:\\Users\\Rudraksh\\Downloads\\Desktop Files Temp\\Task_2C\\Hackathon\\Best_Files\\New folder\\oct\\oct_model_Inception.h5"
    model = load_model(model_path)

    with tf.device('/CPU:0'):  # Use CPU to avoid potential GPU memory issues
        y_pred = model.predict(img)

    result = np.argmax(y_pred, axis=1)
    classes = ['CNV', 'DME', 'Drusen', 'Normal']

    if isinstance(result, np.ndarray):
        result1 = result[0]

    # Print the name of the disease based on the index
    print("Model prediction:", classes[result1])


if __name__ == "__main__":
    main()
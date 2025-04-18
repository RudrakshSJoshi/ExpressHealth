from flask import Flask, request, jsonify
from skin import predict1_bp
from pneumonia import predict2_bp
from oct_eye import predict3_bp
from brain_tumour import predict4_bp
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.register_blueprint(predict1_bp)
app.register_blueprint(predict2_bp)
app.register_blueprint(predict3_bp)
app.register_blueprint(predict4_bp)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
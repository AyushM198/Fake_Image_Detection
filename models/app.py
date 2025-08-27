# from flask import Flask, render_template, request
# import os
# from model import DeepFakeDetector
# from flask_cors import CORS
# app = Flask(__name__)
# CORS(app)

# app = Flask(__name__)
# UPLOAD_FOLDER = 'static/uploads/'
# PROCESSED_FOLDER = 'static/processed/'

# # Create folders if they don't exist
# os.makedirs(UPLOAD_FOLDER, exist_ok=True)
# os.makedirs(PROCESSED_FOLDER, exist_ok=True)

# # Load DeepFake Detector Model
# detector = DeepFakeDetector()

# @app.route('/')
# def home():
#     return render_template('index.html')

# @app.route('/upload', methods=['POST'])
# def upload():
#     if 'file' not in request.files:
#         return render_template('index.html', error="No file uploaded!")

#     file = request.files['file']
#     if file.filename == '':
#         return render_template('index.html', error="No selected file!")

#     # Save Image
#     file_path = os.path.join(UPLOAD_FOLDER, file.filename)
#     file.save(file_path)

#     # Predict DeepFake Probability
#     probability = detector.predict(file_path)

#     # Highlight Fake Regions
#     processed_image = detector.highlight_fake_regions(file_path)

#     result_text = "Fake" if probability > 0.5 else "Real"

#     return render_template('result.html', 
#                         image=file.filename, 
#                         processed_image=file.filename, 
#                         probability=probability * 100, 
#                         result=result_text)

# if __name__ == '__main__':
#     app.run(debug=True)



# working code

from flask import Flask, request, jsonify
import os
from model import DeepFakeDetector
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = 'static/uploads/'
PROCESSED_FOLDER = 'static/processed/'

os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(PROCESSED_FOLDER, exist_ok=True)

# Load model
detector = DeepFakeDetector()

@app.route('/upload', methods=['POST'])
def upload():
    if 'file' not in request.files:
        return jsonify({"error": "No file uploaded!"}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "No selected file!"}), 400

    # Save file
    file_path = os.path.join(UPLOAD_FOLDER, file.filename)
    file.save(file_path)

    # Run detection
    probability = detector.predict(file_path)
    processed_image = detector.highlight_fake_regions(file_path)

    result_text = "Real" if probability > 0.5 else "Fake"

    
    return jsonify({
        "result": result_text,
        "probability": round(probability * 100, 2),
        "image": f"/{file_path}",  # e.g., /static/uploads/img.jpg
        "processed_image": f"/{processed_image}"  # e.g., /static/processed/img.jpg
    })

if __name__ == '__main__':
    app.run(debug=True)


# from flask import Flask, request, jsonify
# import os
# from model import DeepFakeDetector
# from flask_cors import CORS

# app = Flask(__name__)
# CORS(app)

# UPLOAD_FOLDER = 'static/uploads/'
# PROCESSED_FOLDER = 'static/processed/'

# # Create folders if not exist
# os.makedirs(UPLOAD_FOLDER, exist_ok=True)
# os.makedirs(PROCESSED_FOLDER, exist_ok=True)

# # Load the model
# detector = DeepFakeDetector()

# @app.route('/upload', methods=['POST'])
# def upload():
#     if 'file' not in request.files:
#         return jsonify({"error": "No file uploaded!"}), 400

#     file = request.files['file']
#     if file.filename == '':
#         return jsonify({"error": "No selected file!"}), 400

#     # Save uploaded file
#     file_path = os.path.join(UPLOAD_FOLDER, file.filename)
#     file.save(file_path)

#     # Run prediction
#     probability = detector.predict(file_path)
#     processed_image = detector.highlight_fake_regions(file_path)
#     result_text = "Fake" if probability > 0.5 else "Real"

#     # ✅ Debugging prints (visible in Flask console)
#     print("Result:", result_text)
#     print("Probability:", round(probability * 100, 2))
#     print("Image path:", f"/{file_path}")
#     print("Processed image path:", f"/{processed_image}")

#     # ✅ Return JSON response to React frontend
#     return jsonify({
#         "result": result_text,
#         "probability": round(probability * 100, 2),
#         "image": f"/{file_path}",
#         "processed_image": f"/{processed_image}"
#     })

# if __name__ == '__main__':
#     app.run(debug=True)

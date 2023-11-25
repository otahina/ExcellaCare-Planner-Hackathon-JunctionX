from flask import Flask, request
from flask_cors import CORS

# Import any other necessary modules
from filer_data import classify_weight
from summarize_prompt import summarize_prompt
from gpt_process import generate_response

# Create the Flask application instance
app = Flask(__name__, static_folder='static')
CORS(app)

# Suppose we get the data from database
PATIENT_INFO = {
    "wight(kg)": 90.0,
    "height(cm)": 180.0
}


@app.route('/api/appointments/find', methods=['POST'])
def find_appointments():
    if request.method == 'POST':
        filtered_data = classify_weight(PATIENT_INFO)
        summary = summarize_prompt(filtered_data)
        gpt_response = generate_response(summary)

    return gpt_response


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8001)

# Python (Flask)
from flask import Flask, render_template, Response, jsonify
import cv2

app = Flask(__name__)
camera = cv2.VideoCapture(0)

@app.route('/')
def index():
    return render_template('index.html')

def gen_frames():
    while True:
        success, frame = camera.read()
        if not success:
            break
        else:
            ret, buffer = cv2.imencode('.jpg', frame)
            frame = buffer.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

@app.route('/video_feed')
def video_feed():
    return Response(gen_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

@app.route('/generate_video')
def generate_video():
    # You can put your video generation logic here
    # For now, let's just return a placeholder URL
    video_url = "/path/to/generated/video.mp4"  # Example path
    return jsonify({"video_url": video_url})

if __name__ == "__main__":
    app.run(debug=True)

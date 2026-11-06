from flask import Flask, jsonify,render_template
app= Flask(__name__)
@app.route("/home")
def home():
    return render_template("home.html");
@app.route("/rooms")
def rooms():
    return jsonify({
        "message": "our hotel rooms",
        "rooms":[
            {
                "id":1,
                "name":"Deluxe Suite",
                "pricing":"Enquiry only",
                "availability":"check availability"
             },
            {
                "id": 2,
                "name": "VIP Suite",
                "pricing":"Enquiry only",
                "availability":"check availability"
             },
            {
                "id":3,
                "name":"Presidential Suite",
                "pricing":"Enquiry only",
                "availability":"check availability"
             },
            {
                "id":4,
                "name":"Sovereign Suite",
                "pricing":"private quotation",
                "availability":"check availability"
              }
            ]
        })
@app.route("/health")
def health():
    return jsonify({
        "status":"running",
        "backend":"Flask"
        })
@app.route("/events")
def events_page():
    return render_template("events.html");
@app.route("/dining")
def dining_page():
    return render_template("dining.html");
@app.route("/Sovereignty")
def sovereignty_page():
    return render_template("sovereignty.html");
@app.route("/reservation")
def reservation():
    return render_template("reservation.html");
if __name__== "__main__":
    app.run(debug=False)

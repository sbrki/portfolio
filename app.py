import flask

app = flask.Flask(__name__, instance_relative_config=True)


@app.route("/")
def index():
	return flask.render_template("index.html")

if __name__ == "__main__":
	app.run(debug=True)


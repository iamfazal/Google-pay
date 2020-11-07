const bodyParser = require("body-parser");
const config = require("./config");
const cors = require("cors");
const express = require("express");
const app = express();
const { host, port } = config.server;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

for (const endPoint of config.endPoints) {
  console.log("chla");

  const { execute, method, url } = endPoint;

  app[method](url, async (request, response) => {
    let json = {};

    try {
      json = {
        data: await execute(request),
      };
    } catch (error) {
      console.log(error.response.data);

      const { status = 500, statusText = "Internal server error " } =
        error.response || {};

      json = {
        code: status,
        error: statusText,
      };
    } finally {
      return response.json(json);
    }
  });
}

process.on("unhandledRejection", (reason, p) => {
  console.log("Unhandled Rejection at: Promise ", p, reason);
});

app.listen(port).on("listening", () => {
  console.log("Server started on http://%s:%d", host, port);
});

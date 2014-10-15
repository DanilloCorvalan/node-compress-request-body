#Compress http request body with node
This project contains two entry-points to example the scenario. `index.js` is a `express` server with `body-parser` that handles gzip body requests by default. `request-data.js` reads a `data.json` file, that you have to provide, and gzip it and send it through the request body to the server in a `POST` request.

In the express server, I'm logging stats of the request such as the size and the time taken to do so. It's possible by using `request-stats` awesome lib.

##Running
You will have to run `node index.js` to start listenning to requests. After that run `node request-data.js` in order to send the compressed data request to node and see the results.

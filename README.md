# express_http_RequestAndResponse_UsingReqBody
This is a simple express app using req.body. The req.body contains key-value pairs of data submitted in the request body. When using req.body, it will live within the router.post() method. The app checks if the data is in the array and if it is not, it will push the new data into the array and send back an updated array containing the new data. 

COMMAND PROMPT

(1) Run the following to navigate to your Desktop: cd Desktop

(2) Create a new folder on desktop: mkdir Express

(3) Navigate to the Express directory: cd Express

(4) Run the following command to install the Express generator globally onto your computer: npm install express-generator -g

(5) Enter the following command to generate the Express starter app. This will set the view to use Handlebars and will name the app express_http_RequestAndResponse_UsingReqBody: express --view=hbs express_http_RequestAndResponse_UsingReqBody 

(6) Once the process is complete, navigate into the express_http_RequestAndResponse_UsingReqBody directory: cd express_http_RequestAndResponse_UsingReqBody  

(7) Now in the express_http_RequestAndResponse_UsingReqBody directory, run the following: npm install

(8) Install Nodemon globally: npm install -g nodemon

(9) Start the server with Nodemon with the following command: nodemon

VS CODE

(10) Open in VS code: 


(11) Navigate to the routes/index.js file and add an array string to check against in Postman:


POSTMAN

(12) In Postman, navigate to localserver:3000 and use the GET route to see changes for both scenarios:


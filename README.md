# express_http_RequestAndResponse_UsingReqBody
This is a express app using req.body. The req.body contains key-value pairs of data submitted in the request body. When using req.body, it will live within the router.post() method. The app checks if the data is in the array and if it is not, it will push the new data into the array and send back an updated array containing the new data. 

COMMAND PROMPT

(1) Run the following to navigate to your Desktop: 

     cd Desktop

(2) Create a new folder on desktop: 

     mkdir Express

(3) Navigate to the Express directory: 

     cd Express

(4) Run the following command to install the Express generator globally onto your computer: 

     npm install express-generator -g

(5) Enter the following command to generate the Express starter app. This will set the view to use Handlebars and will name the app express_http_RequestAndResponse_UsingReqBody: 

     express --view=hbs express_http_RequestAndResponse_UsingReqBody 

(6) Once the process is complete, navigate into the express_http_RequestAndResponse_UsingReqBody directory: 

     cd express_http_RequestAndResponse_UsingReqBody  

(7) Now in the express_http_RequestAndResponse_UsingReqBody directory, run the following: 

     npm install

(8) Install Nodemon globally: 

     npm install -g nodemon

(9) Start the server with Nodemon with the following command: 

     nodemon

VS CODE

(10) Open in VS code: ![open in vs code - index js (_UsingReqBody)](https://user-images.githubusercontent.com/35668707/67613239-24554580-f760-11e9-9f82-ece39b87793f.JPG)


(11) Navigate to the routes/index.js file and update the POST route to use req.body: ![update POST route to use req body - index js (_UsingReqBody)](https://user-images.githubusercontent.com/35668707/67613314-df7dde80-f760-11e9-9a04-c471b70cca2f.JPG)


(12) Navigate to the routes/index.hbs file and add a form method for the POST route:![add form method for POST route - index hbs (_UsingReqBody)](https://user-images.githubusercontent.com/35668707/67613300-afced680-f760-11e9-82be-54d7f07cc097.JPG)



POSTMAN

(13) In Postman, navigate to localserver:3000 and use the GET route to see changes for both scenarios

(14) POSTMAN - JSON

1. Choose POST from the drop-down on the left. 

2. Click on the Body tab underneath the URL input.

3. Click on the option raw.

4. Choose JSON (application/json) from the drop-down next to binary.

5. Within the input box, type a JSON object with a key of 'character' and a value of whatever 'character' you would like.

![add character with JSON in Postman](https://user-images.githubusercontent.com/35668707/67613343-53b88200-f761-11e9-946d-5c67055ee646.JPG)

![added character with JSON in Postman to the array](https://user-images.githubusercontent.com/35668707/67613368-79de2200-f761-11e9-9a22-5baf2210f2d5.JPG)

     
(15) POSTMAN - FORM

1. Filling in the key and value provided to you on x-www-form-urlencoded 

2. If you fill out the key to be 'character' and 

3. The value to be an 'character' 

4. When send is clicked, it will then push that 'character' into the array. 

![add character simulating using the form in Postman](https://user-images.githubusercontent.com/35668707/67613378-a3974900-f761-11e9-8332-0e719e224130.JPG)

![added character simulating using the form in Postman](https://user-images.githubusercontent.com/35668707/67613409-c6296200-f761-11e9-8fe0-38e7df15c44f.JPG)

NODEMON NOTE

Sometimes nodemon crashes in Windows 10 and there is a simple fix:

(1) Open Task manager (press Ctrl+Alt+Delete)

(2) Select the 'Processes tab'

(3) Search for 'Node.js: Server-side JavaScript'

(4) Select it and click on 'End task' button

Now you can run npm start.

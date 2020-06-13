# datingRecommendation
Algorithm to provide dating recommendations

to run the server side API code --------

1) Run "npm install" to install the dependencies
2) Start the api code with "npm run serve"
3) Hit the below api endpoint as a POST request with below request from postman

End point ---  http://localhost:5000/api/recommendation
Request body : ---
{
     "Name":"UserB",
      "Gender":"Male",
      "Age":"27",
      "Interest":"Cricket, Football, Movies"
   
}

Note: to form request for diff user refer the static list of users in api.js file

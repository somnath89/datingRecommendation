const express = require ('express');
const router = express.Router();


router.post('/recommendation', (req, res, next) => {
  
  let dataStored = [
   {
      "Name":"UserA",
      "Gender":"Female",
      "Age":"25",
      "Interest":"Cricket"
   },
   {
      "Name":"UserB",
      "Gender":"Male",
      "Age":"27",
      "Interest":"Cricket, Football, Movies"
   },
   {
      "Name":"UserC",
      "Gender":"Male",
      "Age":"26",
      "Interest":"Movies, Tennis, Football, Cricket"
   },
   {
      "Name":"UserD",
      "Gender":"Female",
      "Age":"24",
      "Interest":"Tennis, Football, Badminton"
   },
   {
      "Name":"UserE",
      "Gender":"Female",
      "Age":"32",
      "Interest":"Cricket, Football, Movies, Badminton"
   }
]

  if(req.body){
     
     var newArray = dataStored.filter(function (el) {
       return el.Gender != req.body.Gender;
     }).reduce(function(prev, obj) {
         return (Math.abs(obj.Age - req.body.Age) < Math.abs(prev.Age - req.body.Age) ? obj : prev);
});

     res.json({
      data: newArray

  })

   }
    
});

module.exports = router;
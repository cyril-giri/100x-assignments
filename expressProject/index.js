const express = require("express");
const app = express();

app.use(express.json());

var users = [{
    name:'John',
    kidneys: [{
        healty: false
    }]
}]

app.get("/", function(req, res){
    const Johnkidney = users[0].kidneys;
    console.log(Johnkidney);
    const noOfKidneys = users[0].kidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i = 0; i< noOfKidneys; i++){
        if(Johnkidney[i].healty){
            numberOfHealthyKidneys += 1;
        }
    }
    let numberOfUnhealthyKidneys = noOfKidneys - numberOfHealthyKidneys;
    res.json({
        noOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    });
    
})

app.post("/", function(req, res){
    const isHealty = req.body.isHealty;
    users[0].kidneys.push({
        healty: isHealty
    })
    res.json({
        msg:"Done!"
    })
})

app.put("/", function(req, res){
    for(let i = 0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healty = true;
    }
    res.json({});
})

app.delete("/", function(req, res){
    let newKidney = [];
    for(let i = 0; i< users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healty){
            newKidney.push({
                healty : true
            })
        }
    }
    users[0].kidneys = newKidney;
    res.json({});
})

app.listen(3000);
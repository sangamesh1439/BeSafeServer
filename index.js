const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

app.use(express.urlencoded())

let locations = {

};

app.put('/location/update', (req, res) => { 
    console.log('req',req.body);
    let {emailId, location }= req.body
    locations[emailId]  = location;
    return res.send(true);
})
app.get('/location/getlocations', (req, res) => res.send(locations));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
// Packages
const express = require('express');
const app = express();
const path = require('path');

//Routes
const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');


app.set("view engine", "ejs");
// Node modules i erişime açtık . Temsilen /libs diye bir mahlas kullandık.
app.use("/libs",express.static(path.join(__dirname,"node_modules")));
app.use("/static",express.static(path.join(__dirname,"public")));

app.use("/admin",adminRoutes);
app.use(userRoutes);


app.listen(3000,function() {
    console.log("Listening on port 3000 ...");
})
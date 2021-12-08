require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    cors({
        credentials: true, 
        origin: "http://localhost:3000",
    }),
);

//configuring the server to accept and update cookies
app.use(cookieParser());

require("./config/mongoose.config");
// adding routes to listen
// require("./routes/user.routes")(app);
// require("./routes/blog.routes")(app);
// Longhand:
// const blogRoutes = require("./routes/blog.routes");
// blogRoutes(app);

app.listen(8000, () => console.log("you are connected at port 8000"));
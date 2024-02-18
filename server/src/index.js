import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import path from "path";
import corsOptions from "./config/cors";
import connectMongoDB from "./config/database";
import credentials from "./middleware/credentials";
import errorHandlerMiddleware from "./middleware/error_handler";
import authenticationMiddleware from "./middleware/authentication"
const app = express();
const PORT = process.env.PORT || 3500;

connectMongoDB();


// Set headers for JavaScript files served from the static directory
app.use('/static', express.static(path.join(__dirname, 'public'), {
    setHeaders: (res, path, stat) => {
      if (path.endsWith('.js')) {
        res.setHeader('Content-Type', 'application/javascript');
      }
    }
  }));



//Allow Credentials
app.use(credentials);

//CORS
app.use(cors(corsOptions));

//application.x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Set application/json response
app.use(express.json({ limit: '10mb' }));


//application/json response
app.use(express.json());

//middleware for cookies
app.use(cookieParser());

app.use(authenticationMiddleware);

//static files
app.use('/static', express.static(path.join(__dirname, 'public')));

//Default error hander
app.use(errorHandlerMiddleware);


const apiPrefix = "/api/v1"

//Routes project

// auth
import authRoute from "./routes/api/auth";
//categories
import categoriesRoute from "./routes/api/categoriesRoute";
//subcategories
import subcategoriesRoute from "./routes/api/subCategoriesRoute";

//project
import projectsRoute from "./routes/api/projectsRoute";

app.use(apiPrefix, authRoute, categoriesRoute, subcategoriesRoute, projectsRoute);



// app.all('*', (req, res) => {
//     res.sendStatus(404);
//     if (req.accepts('json')) {
//         res.json({ 'error': '404 not Found' })
//     } else {
//         res.type('text').send('404 Not Found')
//     }
// })

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})


app.all("*", (req, res) => {
    res.status(404);
    req.accepts("json")
      ? res.json({ error: "404 Not Found" })
      : res.type("text").send("404 Not Found");
  });


mongoose.connection.once("open", () => {
    console.log('DB connected')
    app.listen(PORT, () => { console.log(`Server connect on port http://localhost:${PORT}`) });
})


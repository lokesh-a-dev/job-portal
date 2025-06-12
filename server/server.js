import express from 'express';
import './config/instrument.js'
import cors from 'cors';
import 'dotenv/config';
import connectDb from './config/db.js';
import * as Sentry from "@sentry/node"
import { clerkWebhooks } from './controllers/webhooks.js';

//  initialize the express app
const app   = express();

//  connect to the database
await connectDb();


//  midfdleware
app.use(cors());
app.use(express.json());

//   routes
app.get('/' , ( req , res) => res.send('Welcome to the server! Working'));

app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

app.post("/webhooks" , clerkWebhooks);

const PORT = process.env.PORT || 5000;

Sentry.setupExpressErrorHandler(app);

app.listen( PORT , () => {
    console.log(`Server is running on port ${PORT}`);
    
})

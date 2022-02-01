import express  from "express";
import bodyParser from "body-parser";
import mongoose from 'mongoose';
import cors from 'cors';


const app = express();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
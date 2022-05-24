import express from "express";

const adminRoutes = express.Router();

adminRoutes.get('/',
    (request, response) => response.send('Hello admin')
)

export default adminRoutes;
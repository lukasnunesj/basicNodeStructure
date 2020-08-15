import { Router, request, response } from "express";

const router = Router();

router.get('/hc', (request, response) => {
    return response.status(201).send();
});

export {router}
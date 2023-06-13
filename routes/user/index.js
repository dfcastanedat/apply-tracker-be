import { Router } from "express";

const router = Router();

router.get("/", (_, res) => {
    res.send("<h1>User endpoint</h1>");
});

router.get("/login", (_, res) => {
    res.send("<h1>Login endpoint</h1>");
});

router.get("/register", (_, res) => {
    res.send("<h1>Register endpoint</h1>");
})

export default router
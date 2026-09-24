import express from "express"
import { db } from "../prisma/db.ts"

const app = express()

app.get("/", async(req, res) => {
    const data = await db.orm.public.User.all();
    res.json({
        data
    })
})

app.post("/", async(req, res) => {
    await db.orm.public.User.create({
        username: Math.random().toString(),
        password: Math.random().toString()
    })
    res.json({
        "message": "post endpoint"
    })
})

app.listen(3000);
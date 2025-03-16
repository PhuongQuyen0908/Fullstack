//File dieu huong
import express from "express";

const router = express.Router();

/**
 * 
 * @param {*} app : express app 
 * 
 */
const initWebRoutes = (app) => {
    //Khi dùng một website để định hướng trang thì sẽ có những method
    //khi người dùng truy cập vào url / server phản hồi lại nội dung là "Hello world"
    router.get("/", (req,res) => {
        return res.send("Hello world")
    })

    return app.use("/",router)
}

export default initWebRoutes;

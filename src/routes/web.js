//File dieu huong
import express from "express";
import homeController from "../controller/homeController";

const router = express.Router();

/**
 * 
 * @param {*} app : express app 
 * 
 */


const initWebRoutes = (app) => {
    //Khi dùng một website để định hướng trang thì sẽ có những method
    //khi người dùng truy cập vào url / server phản hồi lại nội dung là "Hello world"

    //Two paramenters: path, handler
    //Handler: hàm xử lý path
    router.get("/",homeController.handleHelloword);
    router.get("/user",homeController.handleUserPage);
    
    return app.use("/",router)
}

export default initWebRoutes;



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
    //Two paramenters: path, handler
    //Handler: hàm xử lý path
    router.get("/",homeController.handleHelloword); //get: client lấy dữ liệu từ server
    router.get("/user",homeController.handleUserPage);
    router.post("/users/create-user",homeController.handleCreateNewUser); //post: client đưa dữ liệu lên server
    //Website bắt đầu bằng gì?
    return app.use("/",router)
}

export default initWebRoutes;



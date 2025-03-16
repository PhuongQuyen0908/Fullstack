import express from "express";

/**
 * 
 * @param {*} app - express app
 */
const configViewEngine = (app) => {
    //Cấu hình ViewEngine. 
    //Cấu hình thư mục tĩnh như Image, CSS file, javascript file 
    app.use(express.static('./src/public'))
    //Hiển thị giao diện bằng ejs ==> Sử dụng ejs để render giao diện
    app.set("view engine", "ejs")
    //Định nghĩa thư mục chứa file Ejs trong scr/views
    app.set("views","./src/views")
}

export default configViewEngine; //export tham chieu

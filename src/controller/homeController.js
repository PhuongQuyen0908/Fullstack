const handleHelloword = (req,res) => {
    return res.render("home.ejs");  
}


const handleUserPage = (req,res) => {
    //get data from 
    return res.render("user.ejs");  
}

//Chú ý chữ s cuối cùng của từ exports
module.exports = {
    handleHelloword,
    handleUserPage,
}
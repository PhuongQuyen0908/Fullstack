const mysql = require("mysql2");

//Create connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'jwt',
    port:3307
});

const handleHelloword = (req,res) => {
    return res.render("home.ejs");  
}


const handleUserPage = (req,res) => {
    //get data from 
    return res.render("user.ejs");  
}

const handleCreateNewUser = (req,res) => {
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;

    
    connection.query(
        'INSERT INTO users (email, password, username) VALUES (?, ?, ?)',
        [email,password,username],
        function(err, results, fields){
            if (err){
                console.log(err);
            }
        }
    );

    // const sql = 'INSERT INTO users (email, password, username) VALUES (?, ?, ?)';
    // const values = [email, password, username];


    // connection.query(sql, values);
    console.log(">>>>>>> Check request: ", req.body);
    return res.send("Create New User");
}

//Chú ý chữ s cuối cùng của từ exports
module.exports = {
    handleHelloword,
    handleUserPage,
    handleCreateNewUser,
}   
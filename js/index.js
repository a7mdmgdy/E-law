// this function get user data and sign in
function getUserData() {
    let userEmail = document.getElementById("exampleInputEmail1").value
    let userPass = document.getElementById("exampleInputPassword1").value
    console.log("emoail" , userEmail) 

    // if (userEmail ="" || userPass == "") {
    //     console.log("please enter your data")
    // }else if(userEmail && userPass){
        localStorage.setItem("email", userEmail)
        console.log("emoail" , userEmail) 
        localStorage.setItem("password", userPass)
        window.location = "categories.html"

    // }
}

function isAuth() {
    if (localStorage.getItem("password")) {
        window.location = "calendar.html"
        return true;
    } else {
        console.log("no auth");

        window.location = "/Login.html"
    }
}
function weeklyPay(amount){
    localStorage.setItem("amount", amount)
}


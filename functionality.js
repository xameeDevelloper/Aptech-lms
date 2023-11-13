var userDetails = [
    {
        username: "admin",
        useremail: "admin@gmail.com",
        userrole: "admin",
        userpassword: "admin"
    },
    {
        username: "agent",
        useremail: "agent@gmail.com",
        userrole: "agent",
        userpassword: "agent"
    },
    {
        username: "customer",
        useremail: "customer@gmail.com",
        userrole: "customer",
        userpassword: "customer"
    }
]

localStorage.setItem("userDetail", JSON.stringify(userDetails));
// User Registration functionality

function User_Register() {

    var userEmail = document.getElementById("userEmail").value;
    var userName = document.getElementById("userName").value;
    var userPassword = document.getElementById("userPassword").value;
    var userImage = document.getElementById("userImage").value;
    var imageAdress = userImage.slice(12);
    var error = document.getElementById("error");
    let emailValidator = "@";
    var EmailPresent = userEmail.includes(emailValidator);
    if (userEmail.length > 5 && EmailPresent == true) {
        if (userName.length > 2) {
            if (userPassword.length > 4) {
                if (userImage.length > 2) {
                    var userDetails_fetch = JSON.parse(localStorage.getItem("userDetail"));

                    var newUser = {
                        useremail: userEmail,
                        username: userName,
                        userpassword: userPassword,
                        userrole: "customer"
                    }

                    var email_Registration_Check = userDetails_fetch.filter(data => data.useremail == userEmail)

                    if (email_Registration_Check.length > 0) {
                        error.innerHTML = "Email already taken ";
                    } else {
                        userDetails_fetch.push(newUser);

                        localStorage.setItem("userDetail", JSON.stringify(userDetails_fetch))

                        alert("Account Registered")
                    }
                } else {

                    error.innerHTML = "User Image  must be Uploaded  "
                }

            } else {

                error.innerHTML = "User password be greater  "
            }

        } else {

            error.innerHTML = "User Name must be greater  "
        }
    } else {

        error.innerHTML = "User Email must be greater and have an @ "
    }

}
// End User Registration functionality



// User Login Functionality

function login() {
    var userEmail = document.getElementById("userEmail").value;
    var userPassword = document.getElementById("userPassword").value;
    var userDataList_fetch = JSON.parse(localStorage.getItem("userDetail"));
    var error = document.getElementById("error");
    let emailValidator = "@";
    var EmailPresent = userEmail.includes(emailValidator);




    if (userEmail.length > 5 && EmailPresent == true) {
        if (userPassword.length > 4) {
            var login_userFetch = userDataList_fetch.filter(data => data.useremail == userEmail && data.userpassword == userPassword)
            if (login_userFetch.length > 0) {
                alert("success")
            } else {
                error.innerHTML = "crediential wrong "
            }
        } else {
            error.innerHTML = "Email  must have @  "
        }
    } else {
        error.innerHTML = "password must be strong  "
    }
}

// User Login Functionality
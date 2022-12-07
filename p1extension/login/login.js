let loginInitial = document.getElementById("login-form").innerHTML
const url = "http://localhost:8090/"

function employeeLogin(form){
    let username = form.username.value
    let password = form.password.value

    fetch(`${url}login`, {
        method: 'POST',
        body: JSON.stringify({
            "employeeUsername": username,
            "employeePassword": password
        })
    })
    .then(response =>{
        console.log(response.status)
            if(response.status === 404){
                throw new Error(response.text().then(body=>console.log(body)))
            }
            console.log(...response.headers)
            document.getElementById("login-form").innerHTML = "<h1 id='welcome'> Welcome to the Employee Website," +username+" </h1><a href= '../employee/employee.html'> Employee"
            console.log(password)
            logoutButton()
            window.localStorage.setItem("token", reponse.headers.get("authorization"))
        }
    })
    .catch(error =>{
        console.error(error)
    })


    document.getElementById("login-form").innerHTML = "<h1 id='welcome'> Welcome to your account" +username
    console.log(password)
    logoutButton()

}

function logoutButton(){
    let button = document.createElement("button")
    let node = document.createTextNode("Logout")

    button.appendChild(node);
    button.setAttribute("onclick", "logout()")
    const welcomeH1 = document.getElementById("welcome")
    welcomeH1.appendChild(button)

}

function logout(){
    document.getElementById("login-form").innerHTML= loginInitial;
}
const url = "http://localhost:8090/"

async function viewEmployees(){

    try{
    const response = await fetch(`${url}employee`,{
        method: "GET",
        headers: {
            authorization: window.localStorage.getItem("token")

        }
    });

    const employees = await response.json();

    console.log(employees);
    let html_code = "<tr>"
    employees.map(element =>{
        for (const key in element){
            html_code += `<td>${element[key]}</td>`
        }
        html_code += "</tr>"
    })

    document.getElementById("employeeTable").innerHTML = html_code
}catch(error){
    console.error(error)    
}    
}
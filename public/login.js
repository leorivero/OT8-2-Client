let buttonLog = document.getElementById("buttonLog");


console.log("hello world!");
let correo = document.getElementById("inputEmail");
let contrasenia = document.getElementById("inputPassword");

buttonLog.addEventListener("click", async () => {
    console.log("correo 1= " + correo.value);
    try{
        console.log("correo try")
        const response = await axios.post("/loginback", {
            email: correo.value,
            password: contrasenia.value
            });
            console.log("correo userEmail=" + userEmail)
            res.json(response);
    } catch(error){
        
    }
    });

function validasiLogin(){
    let email = document.getElementById("email").value.trim()
    let password = document.getElementById("password").value.trim()

    if (email == ""){
        alert("Email is required!")
        return false;
    }

    if(password == ""){
        alert("Password is required!")
        return false;
    }

    alert("Login Successful!")
    return true;

}

function validasiRegister(){
    let nama = document.getElementById("nama").value.trim();
    let email = document.getElementById("email").value.trim();
    let jenisKelamin = "";
    let password = document.getElementById("password").value;
    let confirmpassword = document.getElementById("confirmpassword").value;

    if(nama == ""){
        alert("Name is required!")
        return false;
    }

    if(email == ""){
        alert("Email is required!")
        return false;
    } else if (email.search (/@/) < 0){
        alert("Email must contain @!")
        return false;
    } else if (email.split("@")[0].length === 0){
        alert("There must be a text in front of @")
        return false;
    } else if (email.split("@")[1].length === 0){
        alert("There must be a text behind @")
        return false;
    } else if (!email.split("@")[1].includes(".")){
        alert(". is required after @(Text)")
        return false;
    } else if (email.split("@")[1][0] === '.'){
        alert(". can't be right behind @")
        return false;
    } else if (email.split(".")[1].length === 0){
        alert("There must be a text behind .")
        return false;
    }
    
    if(document.getElementById("Male").checked){
        jenisKelamin = document.getElementById("Male").value;
    } else if (document.getElementById("Female").checked){
        jenisKelamin = document.getElementById("Female").value;
    }

    if(jenisKelamin == ""){
        alert("Gender is required!")
        return false;
    }

    if(password == ""){
        alert("Password is required!")
        return false;
    }

    if(password.length < 8){
        alert("Minimum password length is 8!")
        return false;
    }

    if(password.search (/[A-Z]/) < 0){
        alert("Password must have at least contain 1 upper case letter!")
        return false;
    }

    if(password.search (/[0-9]/) < 0){
        alert("Password must have at least contain 1 number!")
        return false;
    }

    if(confirmpassword == ""){
        alert("Confirm password is required!")
        return false;
    }

    if(confirmpassword != password){
        alert("Those passwords didnt'match")
        return false;
    }

    alert("Thank you for registering!")
    return true;

}

function showB(){
    if(menushamburger.style.display !== 'none'){
        menushamburger.style.display = 'none';
    } else {
        menushamburger.style.display = 'inline-block';
    }
}

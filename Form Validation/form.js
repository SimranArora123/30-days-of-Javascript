
function Validate(){
    if(document.myForm.name.value == ""){
        alert("Please enter your name!");
        document.myForm.name.focus();
        return false;
    }
    var emailId=document.myForm.email.value;
    var atpos=emailId.indexOf("@");
    var dotpos=emailId.lastIndexOf(".");
    if(document.myForm.email.value=="" ||atpos<1 || (dotpos-atpos<2) ){
        alert("Please Enter correct email!!");
        document.myForm.email.focus();
        return false;
    }
    if(document.myForm.phone.value=="" || isNaN(document.myForm.phone.value) || document.myForm.phone.value.length!=10 ){
        alert("Please Enter correct phone No.");
        document.myForm.phone.focus();
        return false;
    }
    return (true);
}

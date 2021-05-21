document.getElementById("createForm")
.addEventListener("submit",function(event){
    event.preventDefault();
    const formObj = document.forms.createForm;

    const formData = new FormData(formObj);

    axios.post(formObj.getAttribute("action"),{
        name:formData.get("name"),
        Email:formData.get("Email"),
        phone:formData.get("phone"),
        UserName:formData.get("UserName")
    })
    .then(function(res){
        const data = res.data;
        alert(` ${data.name} has been added`);
    });

 });

 //only Number for input Func
  function onlyNumberKey(evt) {
         
    // Only ASCII character in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
    
  }

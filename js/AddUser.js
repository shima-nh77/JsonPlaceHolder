document.getElementById("createForm")
.addEventListener("submit",function(event){
    event.preventDefault();
    const formObj = document.forms.createForm;

    const formData = new FormData(formObj);

    // console.log(
    //     formData.get("age")
    // );

    axios.post(formObj.getAttribute("action"),{
        name:formData.get("name"),
        username:formData.get("username"),
        phone:formData.get("phone"),
        address:formData.get("address")
    })
    .then(function(res){
        const data = res.data.data;
        console.log("data",data);
        alert(` ${data.name} added`);
    });

});
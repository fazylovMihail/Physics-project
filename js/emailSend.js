function SendEmail() {
    var params = {
      support: document.getElementById("support").value,
    };
  
    const serviceID = "service_j5dbakp";
    const templateID = "template_rcckypp";
  
    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.querySelector("#support").value = "";
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));
  }
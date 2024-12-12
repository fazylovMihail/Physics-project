function SendEmail() {
    const params = {
      support: document.getElementById("support").value,
    };

    const serviceID = "service_j5dbakp";
    const templateID = "template_rcckypp";
    
    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.querySelector("#support").value = "";
        console.log(res);
        alert('Ваше сообщение отправлено :)');

    })
    .catch(err=>console.log(err));
  }
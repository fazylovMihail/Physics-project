function SendEmail() {
  const params = {
    support: document.getElementById("support").value,
  };

  const serviceID = "service_j5dbakp";
  const templateID = "template_rcckypp";

    emailjs.send(serviceID, templateID, params)
    .then(()=>{
        document.getElementById("support").value = "";
        alert("Ваше сообщение отправлено!")

    })
}
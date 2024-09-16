function SendEmail(){
    let params = {
        support: document.getElementById('support').value
    }
    const serviceId = 'service_j5dbakp'
    const templateId = 'template_rcckypp'

    emailjs
        .send(serviceId,templateId,params)
        .then((res)=>{
            document.getElementById('support').value = ''
            console.log(res)
            alert('Ваше сообщение отправлено')
        })
        .catch((err) => console.log(err))
}
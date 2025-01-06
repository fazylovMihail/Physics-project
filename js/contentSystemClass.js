class Content{
    constructor(
        name,
        formul,
    ){
        this.name = name;
        this.formul = formul;
    }
    DrowTypeBtn(){
        return `<div class="type-btn" onclick="document.querySelector('#content-manager-group').scrollIntoView({ behavior: 'smooth' });">${this.name}</div>`;
    }
    DrowFormulConteiner(){
        return `<div class="content-manager">
                    <div class="formul-package">
                        <div class="formul-name">${this.name}</div>
                        <div class="formul-conteiner">${this.formul}</div>
                    </div>
            </div>`;
    }
    DrowTrainerConteiner(){
        return `<div class="trainer-btn true">${this.formul}</div>`;
    }
}

export {Content}
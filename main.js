// 1° passo - captura o formulário no HTML
const formulario = document.getElementById("formulário")

formulario.addEventListener("submit",function (event) {

    event.preventDefault()

    //CAPTURAR OS VALORE DIGITADOS PELO USUÁRIO

    const nome= document.getElementById("nome").value
    const email= document.getElementById("email").value
    const telefone= document.getElementById("telefone").value
    const cargo= document.getElementById("cargo").value
    const mensagem= document.getElementById("mensagem").value

    if(telefone.trim() ===""){
        alert("Digite seu nome")
        return

    }
    const textoWhatsapp =
    `Olá!Gostaria de entrar na minha conta MIB
    Nome:${nome}
    E-mail:${email}
    Telefone:${telefone}        
    Cargo:${cargo}
    Observações:${mensagem}

    `
    //CODIFIAR A MENSAGEM PARA SER UTILIZADA NA URL
    const mensagemCodificada = encodeURIComponent(textoWhatsapp)

    //NÚMERO DO WHATSAPP
    const numeroWhatsapp = "11972412421"

    //MONTA O LINK WHATSAPP

    const link ="https://wa.me/" + numeroWhatsapp + "?text=" + mensagemCodificada

    window.location.href = link
        
})

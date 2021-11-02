alert ('Exemplo de comando alert');
console.log('Mensgem enviada pelo console');

function Enviar() {

    var email = document.getElementById("emailid");

    if (email.value != "") {
        alert('Obrigado por cadastrar o seu email: ' + email.value + '. Foi encaminhado com sucesso')
    }
}

$(document).ready(function(){

	$("#slide li:eq(0)").addClass("ativo").show()
setInterval(slide,4000)

function slide(){
    if($(".ativo").next().length){  //se houver, irá fazer algo
        $(".ativo").removeClass("ativo").hide().next().addClass("ativo").show()
        }else {  //se não, irá retornar ao estado inicial do slide
            $(".ativo").removeClass("ativo").hide()
		    $("#slide li:eq(0)").addClass("ativo").show()
    }
}
})

// $( document ).ready(function() {

//     // carrosel inicio
//     $("#rotativo img:eq(0)").addClass("banner_ativo").show()

//     setInterval(slide, 3000)

//     function slide(){
//         if( $(".banner_ativo").next().length) {
//             $(".banner_ativo").removeClass("banner_ativo").hide().next().addClass("banner_ativo").show()

//         } else {
//             $(".banner_ativo").removeClass().hide()
//             $("#rotativo img:eq(0)").addClass("banner_ativo").show()
//         }
//     }
// })

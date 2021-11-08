// função slide header 

$(document).ready(function(){

    $("#slide li:eq(0)").addClass("ativo").show()

setInterval(slide, 4000)

function slide(){
    if($(".ativo").next().length){  //se houver, irá fazer algo
        $(".ativo").removeClass("ativo").hide().next().addClass("ativo").show()
    }else { //se não, irá retornar ao estado inicial do slide
        $(".ativo").removeClass("ativo").hide()
        $("#slide li:eq(0)").addClass("ativo").show()
    }
}
})

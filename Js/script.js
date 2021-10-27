$( document ).ready(function() {

    // carrosel inicio
    $("#rotativo img:eq(0)").addClass("banner_ativo").show()

    setInterval(slide, 3000)

    function slide(){
        if( $(".banner_ativo").next().length) {
            $(".banner_ativo").removeClass("banner_ativo").hide().next().addClass("banner_ativo").show()

        } else {
            $(".banner_ativo").removeClass().hide()
            $("#rotativo img:eq(0)").addClass("banner_ativo").show()
        }
    }
})

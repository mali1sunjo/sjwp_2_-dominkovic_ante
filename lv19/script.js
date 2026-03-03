$(document).ready(function(){

    // Zadatak 1 – Sakrij / Prikaži
    $("#sakrij").click(function(){
        $("#tekst").hide();
    });

    $("#prikazi").click(function(){
        $("#tekst").show();
    });

    // Zadatak 2 – Toggle i boja
    $("#toggle").click(function(){
        $("#tekst").toggle();
    });

    $("#boja").click(function(){
        $("#tekst").toggleClass("crveno");
    });

    // Zadatak 3 – Animacije
    $("#fade").click(function(){
        $("#tekst").fadeToggle();
    });

    $("#slide").click(function(){
        $("#tekst").slideToggle();
    });

    // Zadatak 4 – Promjena sadržaja
    $("#promijeniTekst").click(function(){
        let noviTekst = $("#unos").val();
        $("#tekst").text(noviTekst);
    });

    // Mini projekt – Kartica
    $("#kartica").click(function(){
        $(this).css("background","lightblue");
    });

    $("#kartica").hover(
        function(){
            $(this).addClass("velika");
        },
        function(){
            $(this).removeClass("velika");
        }
    );

    $("#sakrijKarticu").click(function(e){
        e.stopPropagation();
        $("#kartica").fadeOut();
    });

});
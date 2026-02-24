$(document).ready(function(){

    $("#sakrij").click(function(){
        $("#tekst").hide();
    });

    $("#prikazi").click(function(){
        $("#tekst").show();
    });


    $("#toggle").click(function(){
        $("#tekst").toggle();
    });

    $("#boja").click(function(){
        $("#tekst").addClass("crveno");
    });


    $("#fade").click(function(){
        $("#tekst").fadeToggle();
    });

    $("#slide").click(function(){
        $("#tekst").slideToggle();
    });


    $("#promijeniTekst").click(function(){
        let noviTekst = $("#unos").val();
        $("#tekst").text(noviTekst);
    });


    
    $("#kartica").click(function(){
        $(this).css("background","lightblue");
    });

  
    $("#kartica").hover(function(){
        $(this).addClass("velika");
    }, function(){
        $(this).removeClass("velika");
    });

  
    $("#sakrijKarticu").click(function(e){
        e.stopPropagation();
        $("#kartica").fadeOut();
    });

});

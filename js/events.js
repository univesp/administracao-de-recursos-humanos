 $(document).ready(function(){
  function Refresh(){

window.location.reload();

}
  
    //$( ".ui-widget-content" ).draggable({ revert: "invalid" });
    $( ".ui-widget-content"  ).draggable({ revert: true, stack: "div" });
    var acertos = 0;

    function parabens(){
    if(acertos==15){
      $(".reiniciar").show();

          }
}
 
 var texto = [];
  $('.ui-widget-content').on('mousedown', function() {
    texto = $(this).text();
    console.log(texto)
  });   

    $( ".ui-widget-headertwo1").droppable({
      drop: function(event, ui) {
        $("#campo8").append(texto);
        $("#campo8").css({"background-color": "#d33338", "color": "white"});
        //ui.draggable.position( { of: $(this), my: 'left center', at: 'left center' } )
        $("#resposta8").hide();
          acertos++;
          parabens();
      }
    })
    $( "#campo8" ).droppable({
      accept: "#resposta8"
    });


    $( ".ui-widget-headertwo2").droppable({
      drop: function(event, ui) {
        $("#campo14").append(texto);
        $("#campo14").css({"background-color": "#d33338", "color": "white"});
        //ui.draggable.position( { of: $(this), my: 'left center', at: 'left center' } )
        $("#resposta9").hide();
          acertos++;
          parabens();
      }
    })
    $( "#campo14" ).droppable({
      accept: "#resposta9"
    });

    $( ".ui-widget-headertwo3").droppable({
      drop: function(event, ui) {
        $("#campo20").append(texto);
        $("#campo20").css({"background-color": "#d33338", "color": "white"});
        //ui.draggable.position( { of: $(this), my: 'left center', at: 'left center' } )
        $("#resposta15").hide();
          acertos++;
          parabens();
      }
    })
    $( "#campo20" ).droppable({
      accept: "#resposta15"
    });

    $( ".ui-widget-headerthree1").droppable({
      drop: function(event, ui) {
        $("#campo9").append(texto);
        $("#campo9").css({"background-color": "#ff9954", "color": "white"});
        //ui.draggable.position( { of: $(this), my: 'left center', at: 'left center' } )
        $("#resposta2").hide();
          acertos++;
          parabens();
      }
    })

    $( "#campo9" ).droppable({
      accept: "#resposta2"
    });

    $( ".ui-widget-headerthree2").droppable({
      drop: function(event, ui) {
        $("#campo15").append(texto);
        $("#campo15").css({"background-color": "#ff9954", "color": "white"});
        //ui.draggable.position( { of: $(this), my: 'left center', at: 'left center' } )
        $("#resposta13").hide();
          acertos++;
          parabens();
      }
    })
    $( "#campo15" ).droppable({
      accept: "#resposta13"
    });

    $( ".ui-widget-headerthree3").droppable({
      drop: function(event, ui) {
        $("#campo21").append(texto);
        $("#campo21").css({"background-color": "#ff9954", "color": "white"});
        //ui.draggable.position( { of: $(this), my: 'left center', at: 'left center' } )
        $("#resposta4").hide();
          acertos++;
          parabens();
      }
    })
    $( "#campo21" ).droppable({
      accept: "#resposta4"
    });

    $( ".ui-widget-headerfour1").droppable({
      drop: function(event, ui) {
        $("#campo10").append(texto);
        $("#campo10").css({"background-color": "#6647ba", "color": "white"});
        //ui.draggable.position( { of: $(this), my: 'left center', at: 'left center' } )
        $("#resposta10").hide();
          acertos++;
          parabens();
      }
    })
    $( "#campo10" ).droppable({
      accept: "#resposta10"
    });

    $( ".ui-widget-headerfour2").droppable({
      drop: function(event, ui) {
        $("#campo16").append(texto);
        $("#campo16").css({"background-color": "#6647ba", "color": "white"});
        //ui.draggable.position( { of: $(this), my: 'left center', at: 'left center' } )
        $("#resposta12").hide();
          acertos++;
          parabens();
      }
    })

    $( "#campo16" ).droppable({
      accept: "#resposta12"
    });

    $( ".ui-widget-headerfour3").droppable({
      drop: function(event, ui) {
        $("#campo22").append(texto);
        $("#campo22").css({"background-color": "#6647ba", "color": "white"});
        //ui.draggable.position( { of: $(this), my: 'left center', at: 'left center' } )
        $("#resposta14").hide();
          acertos++;
          parabens();
      }
    })
    $( "#campo22" ).droppable({
      accept: "#resposta14"
    });
    
    $( ".ui-widget-headerfive1").droppable({
      drop: function(event, ui) {
        $("#campo11").append(texto);
        $("#campo11").css({"background-color": "#009691", "color": "white"});
        //ui.draggable.position( { of: $(this), my: 'left center', at: 'left center' } )
        $("#resposta7").hide();
          acertos++;
          parabens();
      }
    })
    $( "#campo11" ).droppable({
      accept: "#resposta7"
    });

    $( ".ui-widget-headerfive2").droppable({
      drop: function(event, ui) {
        $("#campo17").append(texto);
        $("#campo17").css({"background-color": "#009691", "color": "white"});
        //ui.draggable.position( { of: $(this), my: 'left center', at: 'left center' } )
        $("#resposta11").hide();
          acertos++;
          parabens();
      }
    })
    $( "#campo17" ).droppable({
      accept: "#resposta11"
    });

    $( ".ui-widget-headerfive3").droppable({
      drop: function(event, ui) {
        $("#campo23").append(texto);
        $("#campo23").css({"background-color": "#009691", "color": "white"});
        //ui.draggable.position( { of: $(this), my: 'left center', at: 'left center' } )
        $("#resposta6").hide();
          acertos++;
          parabens();
      }
    })
    
    $( "#campo23" ).droppable({
      accept: "#resposta6"
    });

    $( ".ui-widget-headersix1").droppable({
      drop: function(event, ui) {
        $("#campo12").append(texto);
        $("#campo12").css({"background-color": "#14aadb", "color": "white"});
        //ui.draggable.position( { of: $(this), my: 'left center', at: 'left center' } )
        $("#resposta3").hide();
          acertos++;
          parabens();
      }
    })
     $( "#campo12" ).droppable({
      accept: "#resposta3"
    });

     $( ".ui-widget-headersix2").droppable({
      drop: function(event, ui) {
        $("#campo18").append(texto);
        $("#campo18").css({"background-color": "#14aadb", "color": "white"});
        //ui.draggable.position( { of: $(this), my: 'left center', at: 'left center' } )
        $("#resposta1").hide();
          acertos++;
          parabens();
      }
    })
    $( "#campo18" ).droppable({
      accept: "#resposta1"
    });

    $( ".ui-widget-headersix3").droppable({
      drop: function(event, ui) {
        $("#campo24").append(texto);
        $("#campo24").css({"background-color": "#14aadb", "color": "white"});
        //ui.draggable.position( { of: $(this), my: 'left center', at: 'left center' } )
        $("#resposta5").hide();
          acertos++;
          parabens();
      }
    })
    $( "#campo24" ).droppable({
      accept: "#resposta5"
    });


});

        
        
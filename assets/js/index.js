// Smooth Scroll hacia las distintas secciones de la pagina por medio de los links del navbar

$(document).ready(function(){
    $("a").on('click',function(event){
        if(this.hash !=="") {
            event.preventDefault();
            var hash = this.hash;


            $('html,body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

            
            window.location.hash = hash;
            });
         }
      });
});



// Esta es una alerta que aparece al hacer click en el boton 'enviar' del formulario

$(document).ready(function(){
    $('#enviar').on("click",function(){
        alert("Tú mensaje se envio correctamente");
    });
    });
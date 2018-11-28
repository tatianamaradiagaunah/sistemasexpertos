
$(document).ready(function(){
    $('#btn-registrar').click(function () {
        var id_usario;
        var parametros = `nombre=${$("#nombre1").val()}&apellido=${$("#apellido1").val()}&correo=${$("#correo1").val()}&contraseña=${$("#contra").val()}&rrepita=${$("#repita").val()}`;
        //console.log(parametros);
        if ($("#repita").val()==$("#contra").val() &&  
        $("#nombre1").val()!="" && 
        $("#apellido1").val()!="" &&
        $("#correo1").val()!="" &&
        indice != null  || indice != 0 
        ){
            document.getElementById("contra").style.borderColor='green';
            document.getElementById("repita").style.borderColor='green';
            $.ajax({
                url: "/guardar",
                method: "POST",
                data: parametros,
                dataType: "json",
                success: function (respuesta) {
                    console.log(respuesta);
                    id_usario=respuesta.insertId;
                    var ingreso_usuario=`correo=${$("#correo1").val()}&contraseña=${$("#contra").val()}&id=${id_usario}`;
                    //console.log(ingreso_usuario);
                    $.ajax({
                        url: "/guardarUsua",
                        method: "POST",
                        data: ingreso_usuario,
                        dataType: "json",
                        success: function (respuesta2) {
                            console.log(respuesta2);
                            location.href="/inicio";
                        },
                        error: function (error2) {
                            console.error(error2);
                        }
                    });
                },
                error: function (error) {
                    console.error(error);
                }
            });
        } 
        else if($("#nombre1").val()==""){
            document.getElementById("nombre1").style.borderColor='red';
        }else if($("#apellido1").val()==""){
            document.getElementById("apellido1").style.borderColor='red';
        }else if($("#correo1").val()==""){
            document.getElementById("correo1").style.borderColor='red';
        }else if($("#contra").val()==""){
            document.getElementById("contra").style.borderColor='red';
        }else if($("#repita").val()==""){
            document.getElementById("repita").style.borderColor='red';
        } else if($("#repita").val()!=$("#contra").val()){
            document.getElementById("mostrar").style.display='block';
        }



    });

    // **********************************************************************************

   

    // ***************************************************
   

    //********************************************************************** */

   


});
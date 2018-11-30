$(document).ready(function(){
    $('#btn-registrar').click(function () {
        var id_usario;
        var parametros = `nombre=${$("#regnom").val()}&apellido=${$("#regapell").val()}&email=${$("#regemail").val()}&password=${$("#regpassword").val()}&confpassword=${$("#confpassword").val()}}`;
        //console.log(parametros);
        if ($("#confpassword").val()==$("#regpassword").val() &&  
        $("#regnom").val()!="" && 
        $("#regapell").val()!="" &&
        $("#regemail").val()!="" 
        ){
            document.getElementById("regpassword").style.borderColor='green';
            document.getElementById("confpassword").style.borderColor='green';
            $.ajax({
                url: "/guardar",
                method: "POST",
                data: parametros,
                dataType: "json",
                success: function (respuesta) {
                    //console.log(respuesta);
                    id_usario=respuesta.insertId;
                    var ingreso_usuario=`email=${$("#regemail").val()}&password=${$("#regpassword").val()}&id=${id_usario}`;
                    console.log(ingreso_usuario);
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
        else if($("#regnom").val()==""){
            document.getElementById("regnom").style.borderColor='red';
        }else if($("#regapell").val()==""){
            document.getElementById("regapell").style.borderColor='red';
        }else if($("#regemail").val()==""){
            document.getElementById("regemail").style.borderColor='red';
        }else if($("#regpassword").val()==""){
            document.getElementById("regpassword").style.borderColor='red';
        }else if($("#confpassword").val()==""){
            document.getElementById("confpassword").style.borderColor='red';
        } else if($("#confpassword").val()!=$("#regpassword").val()){
            document.getElementById("mostrar").style.display='block';
        }
    });

    // **********************************************************************************

   


    // ***************************************************
   

    //********************************************************************** */
});
   
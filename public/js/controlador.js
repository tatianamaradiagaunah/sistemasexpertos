
$(document).ready(function(){
    $('#btn-registrar').click(function () {
        var id_usario;
        var parametros = `nombre=${$("#regnom").val()}&apellidos=${$("#regapell").val()}&email=${$("#regemail").val()}&password=${$("#regpassword").val()}&confpassword=${$("#confpassword").val()}&telefono=${$("#regtelefono").val()}&genero=${$("#slgen").val()}`;
        //console.log(parametros);
        var indice = document.getElementById("slgen").selectedIndex;
        if ($("#confpassword").val()==$("#regpassword").val() &&  
        $("#regnom").val()!="" && 
        $("#regapell").val()!="" &&
        $("#regemail").val()!="" &&
        $("#regtelefono").val()!="" &&
        indice != null  || indice != 0 
        ){
            document.getElementById("regpassword").style.borderColor='green';
            document.getElementById("confpassword").style.borderColor='green';
            $.ajax({
                url: "/guardar",
                method: "POST",
                data: parametros,
                dataType: "json",
                success: function (respuesta) {
                    console.log(respuesta);
                    id_usario=respuesta.insertId;
                    var ingreso_usuario=`email=${$("#regemail").val()}&password=${$("#regpassword").val()}&id=${id_usario}`;
                    //console.log(ingreso_usuario);
                    $.ajax({
                        url: "/guardarUsua",
                        method: "POST",
                        data: ingreso_usuario,
                        dataType: "json",
                        success: function (respuesta2) {
                            console.log(respuesta2);
                            location.href="/Regislocalizacion";
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
        }else if($("#regtelefono").val()==""){
            document.getElementById("regtelefono").style.borderColor='red';
        }else if ($("#slgen").val()==""){
            document.getElementById("slgen").style.borderColor='red';
        }



    });

    // **********************************************************************************

    $("#btn-buscar").click(function(){
        var parametros = `buscar=${$("#txt-buscar").val()}`;
        console.log(parametros);
        $.ajax({
            url: "/buscar",
            method: "POST",
            data: parametros,
            dataType: "json",
            success: function(res){
                console.log(res);
                $('#contenedor-empresas').html("");
                $("#txt-buscar").val("");
                res.forEach(element => {
                    $("#contenedor-empresas").append(
                        `<div class="col-lg-4 text-center mb-4 col-lg-4 col-md-4 col-sm-4">
                            <div class="border rounded" style="box-shadow: 2px 2px 5px #999">
                            <div>
                                <img class="img responsive" src="../public/img/${element.cod_empresa}.jpg">
                                <h3>${element.nombre_empresa}</h3>
                                <div class="col-lg-12">
                                <button class="btn btn-primary" type="button" id="${element.cod_empresa}">Rutas</button>
                                <a class="btn" style="background-color:transparent" href="/dashboard/${element.cod_empresa}">Ver descripcion</a>
                                
                                </div>
                            </div><br>
                            <div >
                                <table class="table">
                                    <tbody id="tbl${element.cod_empresa}">
                                        
                                    </tbody>
                                </table>
                                </div>
                            </div>
                        </div>`

                    )
                });

            },
            error: function(error){
                console.error(error);
            }
        });
    });


    // ***************************************************
    $('#contenedor-empresas').click(function(e){
        var id = e.target.id;
        // alert(id); 
        var parametros = `id=${id}`;
        console.log(parametros);
        $.ajax({
            url: "/rutas",
            method: "POST",
            data: parametros, 
            dataType: "json",
            success: function(res){
                console.log(res[1].cod_empresa);
                $("#tbl"+`${res[1].cod_empresa}`).html("");
                res.forEach(element => {
                    $("#tbl"+`${element.cod_empresa}`).append(
                        `<tr>
                            <td>${element.Origen}</td>
                            <td>${element.Destino}</td>
                        </tr>
                        `
                    )
                });

            },
            error: function(error){
                console.log(error);
            }
        });
    });

    //********************************************************************** */

    $("#btn-conf-compra").click(function(){
        var parametros = `empresa=${$("#slc-empresa").val()}&ruta=${$("#slc-rutas").val()}&numtarjeta=${$("#numTarjet").val()}&fecha=${$("#fechaV").val()}&csv=${$("#codigoV").val()}&cod_usuario=${$("#txt-codigoUsuario").val()}`; 
       console.log(parametros);
         $.ajax({
             url: "/comprarboleto",
             method: "POST",
             data: parametros,
             dataType: "json",
             success: function(res){
                 console.log(res);
                $('#modal2').modal('toggle');
                $('#completo').html('Compra realizada con exito');
             },
             error: function(error){
                 console.error(error);
             }
         });
    });


});
            
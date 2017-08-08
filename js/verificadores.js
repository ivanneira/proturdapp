/**
 * Created by Ivan on 07/08/2017.
 */
//la validación es del tipo "validar a menos que haya un falso"
//solo se valida que el campo no esté vacío

var validador = true;


//funcion principal
function verificar(){

    validador = true;

    //controles a validar
    var controles = [
        "#dateCarga",
        "#inpPNombre",
        "#datePNacimiento",
        "#inpPDNI",
        "#inpPDom"
    ];


    for (var i = 0; i < controles.length; i++) {

        if (isEmpty(controles[i])) {
            removeMark(controles[i]);

        } else {
            mark(controles[i]);
            validador = false;
        }

    }

    //valida que se seleccione al menos un radio button
    if($('input:radio[name="optradio"]:checked').length<=0){
        mark($("#tipoDeTurno"));
        validador = false;
    }else{
        removeMark($("#tipoDeTurno"));
    }

    //si es programado debe especificar fecha, sino no
    if(($("#selProgramado").val() == 1)&&($("#selAtendido").val() == 0)){


        if (isEmpty("#dateTurno")) {
            removeMark("#dateTurno");

        } else {
            mark("#dateTurno");
            validador = false;
        }
    }

    return validador;
}
//está vacío?
function isEmpty(selector){

    if($(selector).val() == ""){

        return false;
    }else{

        return true;
    }
}

//agrega clase a campos erróneos
function mark(selector){

    $(selector).addClass("incorrecto");

}

//quita la marca de incorrecto
function removeMark(selector){

    $(selector).removeClass("incorrecto");
}

//reinicia algunos campos para la próxima encuesta
function removeSavedData(){

    //campos a reestablecer
    var camposABorrar = [

        "#inpPNombre",
        "#datePNacimiento",
        "#inpPDNI",
        "#inpPDom",
        "#Edad",
        "#inpPTel",
        "#dateTurno"
    ];

    for(var i = 0 ; i < camposABorrar.length ; i++){

        $(camposABorrar[i]).val("");
    }

    //deselecciona los radio y quita el html asociado
    $('input:radio[name="optradio"]:checked').prop('checked',false);
    $("#contTurno").html("");

}
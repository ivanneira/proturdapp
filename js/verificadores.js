/**
 * Created by Ivan on 07/08/2017.
 */

var validador = true;

var controles = [
    "#dateCarga",
    "#inpPNombre",
    "#datePNacimiento",
    "#inpPDNI",
    "#inpPDom"
];

function verificar() {

    for (var i = 0; i < controles.length; i++) {

        validador = true;

        if (isEmpty(controles[i])) {
            removeMark(controles[i]);

        } else {
            mark(controles[i]);
            validador = false;
        }


    }

    if($('input:radio[name="optradio"]:checked').length<=0){
        mark($("#tipoDeTurno"));
    }else{
        removeMark($("#tipoDeTurno"));
    }


    if(($("#selProgramado").val() == 1)&&($("#selAtendido").val() == 0)){


        if (isEmpty("#dateTurno")) {
            removeMark("#dateTurno");

        } else {
            mark("#dateTurno");
            validador = false;
        }
    }
}

function isEmpty(selector){

    if($(selector).val() == ""){

        return false;
    }else{

        return true;
    }
}

function mark(selector){

    $(selector).addClass("incorrecto");
    console.log("afsdsdaf")
}

function mark(selector){
    $(selector).addClass("incorrecto");
}

function removeMark(selector){

    $(selector).removeClass("incorrecto");
}
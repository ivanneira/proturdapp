/**
 * Created by Ivan on 09/08/2017.
 */
function save(){
    
    var objectResult = {};

//datos del centro de salud

    //timestamp
    var timeStamp = new Date();
    objectResult.TS = timeStamp.getTime();
    //centro de salud que carga
    objectResult.CS = $("#selCS").val();
    //protur que carga
    objectResult.PT = $("#selPT").val();
    //fecha de gestion del turno
    objectResult.DC = $("#dateCarga").data('datepicker').getDate();

//datos del paciente

    //nombre del paciente
    objectResult.PN = $("#inpPNombre").val();
    //sexo del paciente
    objectResult.SP = $("#selPSexo").val();
    //fecha de nacimiento del paciente
    objectResult.NP = $("#datePNacimiento").data('datepicker').getDate();
    //edad del paciente
    objectResult.EP = $("#Edad").val();
    //DNI del paciente
    objectResult.DP = $("#inpPDNI").val();
    //pueblo originario del paciente
    objectResult.PO = $("#selPO").val();
    //obra social del paciente
    objectResult.OS = $("#select2OS").val();
    //teléfono del paciente
    objectResult.TP = $("#inpPTel").val();
    //Departamento del paciente
    objectResult.PD = $("#select2Departamento").val();
    //domicilio del paciente
    objectResult.DO = $("#inpPDom").val();

//datos del origen del turno

    //especialidad que solicita
    objectResult.ET = $("#select2Especialidad").val();
    //tipo de turno
    objectResult.TT = $("input:radio[name ='optradio']:checked").val();
    //medio de la solicitud
    objectResult.MT = $("#select2Medio").val();

    //si es derivado
    if(objectResult.TT == 1){
        objectResult.CT = $("#select2CAPS").val();
    //si es interconsulta
    }else if(objectResult.TT == 2){
        objectResult.EI = $("#select2EspTur").val();
    }

    //para demanda espontánea y paciente en tránsito solamente se solicita el medio

    //atendido o no
    if($("#selAtendido").val() == 0){
        
//estado del turno


        //turno programado si o no
        objectResult.PE = $("#selProgramado").val();

        //en caso de turno programado
        if(objectResult.PE ==1 ){
            objectResult.PC = $("#select2CAPSProg").val();
            objectResult.FP = $("#dateTurno").data('datepicker').getDate();
        }else {
            //en caso de turno no programado
            objectResult.PM = $("#select2Motivo").val();
        }
    }else {
        objectResult.TA = 1;
    }


    db.insert(objectResult, function (err, newDoc) {   // Callback is optional
        // newDoc is the newly inserted document, including its _id
        // newDoc has no key called notToBeSaved since its value was undefined

        if(err) {
            alert(err + "\nPor favor, notifique a informática éste error, tel: 4305619","ERROR");
        }else{

            $("#avisoLabel").text("Completado");



                $("#text").html("<p>Los datos se guardaron correctamente</p>");

            //https://stackoverflow.com/questions/25577491/how-to-automatically-close-bootstrap-3-modal-after-time-period
            // Select the element you want to click and add a click event
                // show the element you want to show
                $("#aviso").modal("show");

                // Set a timeout to hide the element again
                setTimeout(function(){
                    $("#aviso").modal("hide");
                }, 2000);

        }

    });
}
function runCvCalculator() {

    let component_type = null;
    let component_capacitance = null;
    let component_voltage = null;
    let cv_value = null;
    let cv_product = null;

    document.getElementById("techno_limit_input").style.display = "none";
    document.getElementById("cv_output").style.display = "none";
    document.getElementById("cv_redirect").style.display = "none";
    
    document.getElementById("type1").checked = false;
    document.getElementById("type2").checked = false;
    document.getElementById("capacitance_input_cv").value = "";
    document.getElementById("voltage_input_cv").value = "";

    document.getElementById("type1").onclick = function () {
        document.getElementById("type2").checked = false;
        component_type = 1;
    }

    document.getElementById("type2").onclick = function () {
        document.getElementById("type1").checked = false;
        component_type = 2;
    }

    document.getElementById("type1_label").onclick = function () {
        document.getElementById("type2").checked = false;
        component_type = 1;
    }

    document.getElementById("type2_label").onclick = function () {
        document.getElementById("type1").checked = false;
        component_type = 2;
    }

    document.getElementById("capacitance_input_cv").oninput = function (){
        if (this.value == "" || parseFloat(this.value) <= 0){
            this.style.color = "red";
            component_capacitance = null;
        }
        else{
            this.style.color = "black";
            component_capacitance = parseFloat(this.value);
        }
    }

    document.getElementById("voltage_input_cv").oninput = function (){
        if (this.value == "" || parseFloat(this.value) <= 0){
            this.style.color = "red";
            component_voltage = null;
        }
        else{
            this.style.color = "black";
            let pw = -1 * parseInt(document.getElementById("voltage_unit_cv").value);
            component_voltage = parseFloat(this.value) * Math.pow(10, pw);
        }
    }

    document.getElementById("voltage_unit_cv").onchange = function(){
        if (document.getElementById("voltage_input_cv").value == "" || parseFloat(document.getElementById("voltage_input_cv").value) <= 0){
            component_voltage = null;
        }
        else{
            let pw = -1 * parseInt(this.value);
            component_voltage = parseFloat(document.getElementById("voltage_input_cv").value) * Math.pow(10, pw);
        }
    }

    document.getElementById("ok_button_eee").onclick = function(){
        if (component_capacitance!=null && component_type!=null && component_voltage!=null){
            cv_value = component_capacitance * component_voltage;
            if (component_type == 1){
                if (cv_value < 5*Math.pow(10,-8)){
                    cv_product = 'LOW';
                    runCVresult();

                }
                else if (cv_value > 1*Math.pow(10,-6)){
                    runTechnoCV();
                }
                else{
                    cv_product = 'MEDIUM';
                    runCVresult();
                }
            }
            else{
                if (cv_value < 5*Math.pow(10,-6)){
                    cv_product = 'LOW';
                    runCVresult();

                }
                else if (cv_value > 1*Math.pow(10,-4)){
                    runTechnoCV();
                }
                else{
                    cv_product = 'MEDIUM';
                    runCVresult();
                }
            }
        }
        else{
            alert("Some inputs are missing !")
        }
    }

    document.getElementById("techno_yes_cv").onclick = function(){
        cv_product = 'HIGH';
        runCVresult();
    }

    document.getElementById("techno_no_cv").onclick = function(){
        cv_product = 'MEDIUM';
        runCVresult();
    }

    function runTechnoCV(){
        document.getElementById("intermediary_cv_value_output").innerHTML = cv_value.toExponential();
        document.getElementById("techno_limit_input").style.display = "block";
    }

    function runCVresult(){
        document.getElementById("cv_output").style.display = "block";
        document.getElementById("cv_value_output").innerHTML = "<b>" + cv_product + "</b>";
        document.getElementById("cv_redirect").style.display = "block";
    }

}
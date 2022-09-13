// Copyright (C) Matrisk GmbH 2022



function runMFRbuttons() {

    /* Class that defines the entries for lambda1 and lambda2
    
        - name : String that contains the name of the entry
        - value: Float that represents the value entered for the parameter
        - text_entry: Textarea that enables to enter the value
        - message : container of the message for this parameter (displaying success_message and error_message)
        - value_text : container displaying the value of this parameter
        - success_message : String giving message if the value entered is correct
        - error_message : String giving message if the value entered is incorrect
        - info_message : String giving message of help for this parameter
    */
    class NumberEntry {
        constructor(name, value, text_entry, message, value_text, error_message = "", success_message = "", info_message = "") {
            this.name = name;
            this.value = value;
            this.text_entry = text_entry
            this.message = message;
            this.value_text = value_text;
            this.success_message = success_message;
            this.error_message = error_message;
            this.info_message = info_message;

            this.message.innerHTML = this.info_message;
        }

        /* Method that controls the syntax of the entry using regular expressions, and run lambda3 processing */
        check_content() {
            const numberCheck = new RegExp('[0-9]+([\\.][0-9]*)?');
            if (numberCheck.test(this.text_entry.value) && !this.text_entry.value.includes("-") && !this.text_entry.value.includes(",")) {
                this.text_entry.color = "green";
                this.message.innerHTML = this.success_message;
                this.changeValue(true);
            }
            else {
                this.text_entry.color = "red";
                this.message.innerHTML = this.error_message;
                this.changeValue(false);
            }
            this.value_text.innerHTML = this.value;
            process_lambda3();
        }
    }

    /* Class that extends NumberEntry especially for lambda1 entry */
    class Lambda1Entry extends NumberEntry {
        constructor(name, value, text_entry, message, value_text, error_message = "", success_message = "") {
            super(name, value, text_entry, message, value_text, error_message, success_message);
        }

        /* Compute value for lambda 1 entry or default value if the entry is incorrect */
        changeValue(condition) {
            if (condition) {
                this.value = parseFloat(this.text_entry.value);
            }
            else {
                this.value = 1.0;
            }
        }
    }

    /* Class that extends NumberEntry especially for lambda2 entry */
    class Lambda2Entry extends NumberEntry {
        constructor(name, value, text_entry, message, value_text, error_message = "", success_message = "", info_message = "", lambda1) {
            super(name, value, text_entry, message, value_text, error_message, success_message, info_message);
            this.lambda1 = lambda1;
        }

        /* Compute value for lambda 2 entry or default value if the entry is incorrect */
        changeValue(condition) {
            if (condition) {
                this.value = parseFloat(this.text_entry.value) * this.lambda1.value;
            }
            else {
                this.value = this.lambda1.value;
            }
        }
    }
    
    /* Class that groups lambda1 and lambda2 entries */
    class LambdaEntry {
        constructor(lambda1, lambda2) {
            this.lambda1 = lambda1;
            this.lambda2 = lambda2;
        }

        onLambdachanged() {
            this.lambda1.check_content();
            this.lambda2.check_content()
        }
    }


    /* Class that represents one button of the 3 step scale controllers
    
        - hauteur : Float for the height of the button
        - largeur : Float for the width of the button
        - value : Float given if this button is chosen
        - button : HTML button represented
        - name : String that represents the name of the value represented
        - state : Boolean representing the selection of the button
        - color_selected : color of the button if selected
        - color_unselected : color of the button if unselected
        - associated_button1 : ChoiceButton associated in the 3 step controller
        - associated_button2 : ChoiceButton associated in the 3 step controller
        - text_area: container of the value given by the button
    */
    class ChoiceButton {

        constructor(name, value, button, color_selected, color_unselected, description = "", hauteur = 40, largeur = 120) {
            this.hauteur = hauteur;
            this.largeur = largeur;
            this.value = value;
            this.button = button;
            //this.button.style.width = this.largeur.toString() + "px";
            //this.button.style.height = this.hauteur.toString() + "px";
            this.name = name;
            this.state = false;
            this.color_selected = color_selected;
            this.color_unselected = color_unselected
            this.associated_button1 = null;
            this.associated_button2 = null;
            this.text_area = null;
            this.button.title = description;
        }

        /* Set all three buttons associated in a 3 step scale controller */
        static associate_all_buttons(b1, b2, b3) {
            b1.associate_buttons(b2, b3);
            b2.associate_buttons(b1, b3);
            b3.associate_buttons(b1, b2);
        }

        /* Set the same text_area for all three buttons associated in a 3 step scale controller */
        static associate_text_area(b1, b2, b3, ta) {
            b1.text_area = ta;
            b2.text_area = ta;
            b3.text_area = ta;
        }

        /* Set associated_button1 and associated_button2 */
        associate_buttons(b1, b2) {
            this.associated_button1 = b1;
            this.associated_button2 = b2;
        }

        /* Perform an action when a button is clicked */
        clicked() {
            this.go_selected();
            this.button.disabled = true;
            this.associated_button1.go_unselected();
            this.associated_button2.go_unselected();
            process_pi_op()
            process_lambda3()
        }

        /* Change the style of the button if it's unselected */
        go_unselected() {
            this.button.style.boxShadow = "0 5px #666";
            this.button.style.transform = "translateY(4px)";
            this.button.style.border = "none";
            this.state = false;
            this.button.disabled = false;
        }

        /* Change the style of the button if it's selected */
        go_selected() {
            this.button.style.boxShadow = "0 9px #999";
            this.button.style.transform = "translateY(-4px)";
            this.button.style.color = "black";
            this.button.style.border = "4px solid black";
            this.state = true;
            this.button.disabled = true;
            this.text_area.innerText = this.value;
        }

    }

    /* Class that extends Choice button especially for red buttons */
    class RedButton extends ChoiceButton {

        constructor(name, value, button, description) {
            super(name, value, button, "#f3522f", "#d12500", description);
        }
    }

    /* Class that extends Choice button especially for yellow buttons */
    class YellowButton extends ChoiceButton {

        constructor(name, value, button, description) {
            super(name, value, button, "#fad739", "#e1b800", description);
        }
    }

    /* Class that extends Choice button especially for green buttons */
    class GreenButton extends ChoiceButton {

        constructor(name, value, button, description) {
            super(name, value, button, "#85d78a", "#04AA6D", description);
        }
    }

    /** Class that represents the controllers for parameters with only two values (pi_C and pi_T) 
    
        - name : String representing the name of the parameter
        - checkbox : HTML input:checkbox represented
        - value_checked : Float giving the value associated if the checkbox is checked
        - value_unchecked : Float giving the value associated if the checkbox is unchecked
        - text_area : container displaying the value of the parameter
    */
    class OneChoiceCheckbox {
        constructor(name, checkbox, value_checked, value_unchecked, text_area) {
            this.name = name;
            this.checkbox = checkbox;
            this.value_checked = value_checked;
            this.value_unchecked = value_unchecked;
            this.text_area = text_area
        }

        /** Change the style for the parameter on check and run lambda3 computation */
        change_check() {
            if (this.checkbox.checked) {
                this.text_area.textContent = this.value_checked;
                this.text_area.style.color = "#383b3a";
            }
            else {
                this.text_area.style.color = "red";
                this.text_area.textContent = this.value_unchecked;
            }
            process_lambda3();
        }
    }

    /* Define lambda1 entry*/
    let lambda1Entry = new Lambda1Entry("lambda1", 1.0, document.getElementById("lambda1_entry"), document.getElementById("lambda1_message"), document.getElementById("lambda1_value"), "Wrong format, please enter a number (float or integer) with decimal delimiter '.'", "&lambda;" + "1".sub() + " validated");

    /* Define lambda2 entry*/
    let lambda2Entry = new Lambda2Entry("lambda2", 1.0, document.getElementById("lambda2_entry"), document.getElementById("lambda2_message"), document.getElementById("lambda2_value"), "Wrong format, please enter a number (float or integer) with decimal delimiter '.'", "K" + "parameters".sub() + " validated", "Enter a value for " + "K" + "parameters".sub() + " if not 1", lambda1Entry);
1
    /* Group lambda1 entry and lambda2 entry*/
    let lambda12Entry = new LambdaEntry(lambda1Entry, lambda2Entry);

    /* Defines three choice buttons for piQ parameter and set the red option clicked*/
    let redButtonPiQ = new RedButton("LOW", 1.5, document.getElementById("low_piQ_button"), "Space");
    let greenButtonPiQ = new GreenButton("HIGH", 1.0, document.getElementById("high_piQ_button"), "New Space");
    let yellowButtonPiQ = new YellowButton("MEDIUM", 1.25, document.getElementById("medium_piQ_button"), "COTS");
    ChoiceButton.associate_all_buttons(redButtonPiQ, greenButtonPiQ, yellowButtonPiQ);
    ChoiceButton.associate_text_area(redButtonPiQ, greenButtonPiQ, yellowButtonPiQ, document.getElementById("piQ_value"));
    redButtonPiQ.clicked();

    /* Defines three choice buttons for piM parameter and set the red option clicked*/
    let redButtonPiM = new RedButton("LOW", 1.5, document.getElementById("low_piM_button"), "Specialist");
    let greenButtonPiM = new GreenButton("HIGH", 1.0, document.getElementById("high_piM_button"), "Adaptation");
    let yellowButtonPiM = new YellowButton("MEDIUM", 1.25, document.getElementById("medium_piM_button"), "New comer");
    ChoiceButton.associate_all_buttons(redButtonPiM, greenButtonPiM, yellowButtonPiM);
    ChoiceButton.associate_text_area(redButtonPiM, greenButtonPiM, yellowButtonPiM, document.getElementById("piM_value"));
    redButtonPiM.clicked();

    /* Defines three choice buttons for orbit parameter and set the red option clicked*/
    let redButtonOrbit = new RedButton("LOW", 0.3, document.getElementById("low_orbit_button"));
    let greenButtonOrbit = new GreenButton("HIGH", 0.2, document.getElementById("high_orbit_button"));
    let yellowButtonOrbit = new YellowButton("MEDIUM", 0.25, document.getElementById("medium_orbit_button"));
    ChoiceButton.associate_all_buttons(redButtonOrbit, greenButtonOrbit, yellowButtonOrbit);
    ChoiceButton.associate_text_area(redButtonOrbit, greenButtonOrbit, yellowButtonOrbit, document.getElementById("orbit_value"));
    redButtonOrbit.clicked();

    /* Defines three choice buttons for temperature parameter and set the red option clicked*/
    let redButtonTemperature = new RedButton("LOW", 0.3, document.getElementById("low_temperature_button"));
    let greenButtonTemperature = new GreenButton("HIGH", 0.2, document.getElementById("high_temperature_button"));
    let yellowButtonTemperature = new YellowButton("MEDIUM", 0.25, document.getElementById("medium_temperature_button"));
    ChoiceButton.associate_all_buttons(redButtonTemperature, greenButtonTemperature, yellowButtonTemperature);
    ChoiceButton.associate_text_area(redButtonTemperature, greenButtonTemperature, yellowButtonTemperature, document.getElementById("temperature_value"));
    redButtonTemperature.clicked();

    /* Defines three choice buttons for power parameter and set the red option clicked*/
    let redButtonPower = new RedButton("LOW", 0.3, document.getElementById("low_power_button"));
    let greenButtonPower = new GreenButton("HIGH", 0.2, document.getElementById("high_power_button"));
    let yellowButtonPower = new YellowButton("MEDIUM", 0.25, document.getElementById("medium_power_button"));
    ChoiceButton.associate_all_buttons(redButtonPower, greenButtonPower, yellowButtonPower);
    ChoiceButton.associate_text_area(redButtonPower, greenButtonPower, yellowButtonPower, document.getElementById("power_value"));
    redButtonPower.clicked();

    /* Defines three choice buttons for temperature cycling parameter and set the red option clicked*/
    let redButtonTC = new RedButton("LOW", 0.15, document.getElementById("low_tc_button"));
    let greenButtonTC = new GreenButton("HIGH", 0.1, document.getElementById("high_tc_button"));
    let yellowButtonTC = new YellowButton("MEDIUM", 0.13, document.getElementById("medium_tc_button"));
    ChoiceButton.associate_all_buttons(redButtonTC, greenButtonTC, yellowButtonTC);
    ChoiceButton.associate_text_area(redButtonTC, greenButtonTC, yellowButtonTC, document.getElementById("tc_value"));
    redButtonTC.clicked();

    /* Defines three choice buttons for duty cycle parameter and set the red option clicked*/
    let redButtonDC = new RedButton("LOW", 0.3, document.getElementById("low_dc_button"));
    let greenButtonDC = new GreenButton("HIGH", 0.2, document.getElementById("high_dc_button"));
    let yellowButtonDC = new YellowButton("MEDIUM", 0.25, document.getElementById("medium_dc_button"));
    ChoiceButton.associate_all_buttons(redButtonDC, greenButtonDC, yellowButtonDC);
    ChoiceButton.associate_text_area(redButtonDC, greenButtonDC, yellowButtonDC, document.getElementById("dc_value"));
    redButtonDC.clicked();

    /* Defines three choice buttons for others parameter and set the red option clicked*/
    let redButtonOthers = new RedButton("LOW", 0.15, document.getElementById("low_others_button"));
    let greenButtonOthers = new GreenButton("HIGH", 0.1, document.getElementById("high_others_button"));
    let yellowButtonOthers = new YellowButton("MEDIUM", 0.13, document.getElementById("medium_others_button"));
    ChoiceButton.associate_all_buttons(redButtonOthers, greenButtonOthers, yellowButtonOthers);
    ChoiceButton.associate_text_area(redButtonOthers, greenButtonOthers, yellowButtonOthers, document.getElementById("others_value"));
    redButtonOthers.clicked();

    /* Defines checkbox for piT parameter and set the red option clicked*/
    let checkboxPiT = new OneChoiceCheckbox("piT", document.getElementById("piT_checkbox"), 1.0, 1.0, document.getElementById("piT_value"));
    checkboxPiT.change_check();

    /* Defines checkbox for piC parameter and set the red option clicked*/
    let checkboxPiC = new OneChoiceCheckbox("piT", document.getElementById("piC_checkbox"), 1.0, 1.0, document.getElementById("piC_value"));
    checkboxPiC.change_check();

    /** Function that computes the value of the piOP parameter */
    function process_pi_op() {
        var res = parseFloat(document.getElementById("others_value").innerHTML) + parseFloat(document.getElementById("dc_value").innerHTML) + parseFloat(document.getElementById("tc_value").innerHTML) + parseFloat(document.getElementById("power_value").innerHTML) + parseFloat(document.getElementById("temperature_value").innerHTML) + parseFloat(document.getElementById("orbit_value").innerHTML);
        document.getElementById("piOP_value").innerText = res.toFixed(2);
    }

    /** Function that computes the value of lambda2 */
    function process_lambda2() {
        lambda2Entry.changeValue(true, false);
    }

    /** Function that computes the value of lambda3 */
    function process_lambda3() {
        var res = parseFloat(document.getElementById("piOP_value").innerHTML) * parseFloat(document.getElementById("piT_value").innerHTML) * parseFloat(document.getElementById("piC_value").innerHTML) * parseFloat(document.getElementById("piM_value").innerHTML) * parseFloat(document.getElementById("piQ_value").innerHTML) * lambda1Entry.value * lambda2Entry.value;
        document.getElementById("lambda3_value").innerText = res.toFixed(6);
    }

    /** Collection containing the help messages for the different parameters */
    const information = new Map([
        ["lambda_1", "The failure rate is referred to as basic failure rate. It is defined at 60% level of confidence and given by the supplier."],
        ["lambda_2", "The supplier identifies the physical parameters contributing to the reliability and accounting for the item specificities.By default, K<sub>parameters</sub> is set to 1, under the condition that the major contributors are sufficiently close to those defined for the basic failure rate. It is the responsibility of the user (the supplier) to adapt and/or define the K<sub>parameters</sub> as relevant with appropriate technical justification."],
        ["pi_Q", "This is the QUALITY factor. This factor covers the quality level used to design/manufacture the miscellaneous item. It addresses the quality process, as a whole, as defined in the ECSS framework."],
        ["pi_M", "This is the MATURITY factor. This factor addresses the maturity level of the supplier."],
        ["pi_T", "This factor relates to the “technology” supporting the item. “Technology” is considered in a wide sense and is already addressed in the IOR equivalent class from which the basic failure rate is derived. No assumption can really be defined to account for the use of a new technology or a technology slightly different. The supplier justifies with technical arguments the reason why the technology of its product matches the technology accounted in the basic failure rate. If it is not the case, a “non-standard model” is developed by the supplier. e.g. SSPA implements a different technology than TWTA and therefore the reliability model used for TWTA will not be used for SSPA."],
        ["pi_C", "Reliability depends on the complexity of the item. The assessment of the complexity is difficult. The supplier justifies with technical arguments the reason why the complexity of its product is consistent with the complexity accounted in the basic failure rate. If it is not the case a “non-standard model” is developed by the supplier."],
        ["pi_OP", "The factor represents the frame of the significant operating conditions of the item. It is item-dependent and relates to Orbit,Temperature,Power,Thermal Cycling,Duty cycle,Other relevant conditions considered as reliability contributor."],
        ["orbit", "This is the ORBIT value"],
        ["temperature", "This is the temperature value"],
        ["power", "This is the power value"],
        ["thermal_cycling", "This is the thermal cycling value"],
        ["duty_cycle", "This is the duty cycle value"],
        ["others", "This is the others value"],
        ["high_pi_Q", "The technical risk is mitigated / cancelled as necessary. This level refers to the high quality standard used for space (refer to ECSS)."],
        ["medium_pi_Q", "The technical risk is optimized. This level is an intermediate level between High quality level and Low quality level."],
        ["low_pi_Q", "The technical risk is mitigated up to the cost target, otherwise accepted."],
        ["high_pi_M", "The supplier is a specialist providing the space stakeholders with the miscellaneous item"],
        ["medium_pi_M", "The item is a new development for the supplier"],
        ["low_pi_M", "The supplier is a newcomer on the market to develop such a product."],
        ["not_compliant", "The basic failure rate has been derived based on different operating conditions and the parameter is assumed to be a contributor to the reliability with high impact"],
        ["partially_compliant", "The basic failure rate has been derived based on different operating conditions and the parameter is assumed to be a contributor to the reliability with medium impact"],
        ["fully_compliant", "The basic failure rate has been derived for the same operating conditions (w.r.t. this parameter)"],
    ]);

    /** Function that updates help depending on the element hovered */
    function update_help(elt) {
        document.getElementById("messagesTrack").innerHTML = information.get(elt);
        //document.getElementById("help").style.height = document.getElementById("messages").style.height;
        //document.getElementById("customed-table").style.height = document.getElementById("help").style.height;
    }

    /* Change help on hovering the different elements */
    document.getElementById("lambda_1").onmouseenter = function(){
        update_help('lambda_1');
    }

    document.getElementById("lambda_2").onmouseenter = function(){
        update_help('lambda_2');
    }

    document.getElementById("pi_Q").onmouseenter = function(){
        update_help('pi_Q');
    }

    document.getElementById("low_piQ_button").onmouseenter = function(){
        update_help('low_pi_Q');
    }

    document.getElementById("low_piQ_button").onclick = function(){
        redButtonPiQ.clicked();
    }

    document.getElementById("medium_piQ_button").onmouseenter = function(){
        update_help('medium_pi_Q');
    }

    document.getElementById("medium_piQ_button").onclick = function(){
        yellowButtonPiQ.clicked();
    }

    document.getElementById("high_piQ_button").onmouseenter = function(){
        update_help('high_pi_Q');
    }

    document.getElementById("high_piQ_button").onclick = function(){
        greenButtonPiQ.clicked();
    }

    document.getElementById("pi_M").onmouseenter = function(){
        update_help('pi_M');
    }

    document.getElementById("low_piM_button").onmouseenter = function(){
        update_help('low_pi_M');
    }

    document.getElementById("low_piM_button").onclick = function(){
        redButtonPiM.clicked();
    }

    document.getElementById("medium_piM_button").onmouseenter = function(){
        update_help('medium_pi_M');
    }

    document.getElementById("medium_piM_button").onclick = function(){
        yellowButtonPiM.clicked();
    }

    document.getElementById("high_piM_button").onmouseenter = function(){
        update_help('high_pi_M');
    }

    document.getElementById("high_piM_button").onclick = function(){
        greenButtonPiM.clicked();
    }

    document.getElementById("pi_T").onmouseenter = function(){
        update_help('pi_T');
    }

    document.getElementById("pi_C").onmouseenter = function(){
        update_help('pi_C');
    }

    document.getElementById("pi_OP").onmouseenter = function(){
        update_help('pi_OP');
    }

    document.getElementById("orbit").onmouseenter = function(){
        update_help('orbit');
    }

    document.getElementById("low_orbit_button").onmouseenter = function(){
        update_help('not_compliant');
    }

    document.getElementById("low_orbit_button").onclick = function(){
        redButtonOrbit.clicked();
    }

    document.getElementById("medium_orbit_button").onmouseenter = function(){
        update_help('partially_compliant');
    }

    document.getElementById("medium_orbit_button").onclick = function(){
        yellowButtonOrbit.clicked();
    }

    document.getElementById("high_orbit_button").onmouseenter = function(){
        update_help('fully_compliant');
    }

    document.getElementById("high_orbit_button").onclick = function(){
        greenButtonOrbit.clicked();
    }

    document.getElementById("temperature").onmouseenter = function(){
        update_help('temperature');
    }

    document.getElementById("low_temperature_button").onmouseenter = function(){
        update_help('not_compliant');
    }

    document.getElementById("low_temperature_button").onclick = function(){
        redButtonTemperature.clicked();
    }

    document.getElementById("medium_temperature_button").onmouseenter = function(){
        update_help('partially_compliant');
    }

    document.getElementById("medium_temperature_button").onclick = function(){
        yellowButtonTemperature.clicked();
    }

    document.getElementById("high_temperature_button").onmouseenter = function(){
        update_help('fully_compliant');
    }

    document.getElementById("high_temperature_button").onclick = function(){
        greenButtonTemperature.clicked();
    }

    document.getElementById("power").onmouseenter = function(){
        update_help('power');
    }

    document.getElementById("low_power_button").onmouseenter = function(){
        update_help('not_compliant');
    }

    document.getElementById("low_power_button").onclick = function(){
        redButtonPower.clicked();
    }

    document.getElementById("medium_power_button").onmouseenter = function(){
        update_help('partially_compliant');
    }

    document.getElementById("medium_power_button").onclick = function(){
        yellowButtonPower.clicked();
    }

    document.getElementById("high_power_button").onmouseenter = function(){
        update_help('fully_compliant');
    }

    document.getElementById("high_power_button").onclick = function(){
        greenButtonPower.clicked();
    }

    document.getElementById("thermal_cycling").onmouseenter = function(){
        update_help('thermal_cycling');
    }

    document.getElementById("low_tc_button").onmouseenter = function(){
        update_help('not_compliant');
    }

    document.getElementById("low_tc_button").onclick = function(){
        redButtonTC.clicked();
    }

    document.getElementById("medium_tc_button").onmouseenter = function(){
        update_help('partially_compliant');
    }

    document.getElementById("medium_tc_button").onclick = function(){
        yellowButtonTC.clicked();
    }

    document.getElementById("high_tc_button").onmouseenter = function(){
        update_help('fully_compliant');
    }

    document.getElementById("high_tc_button").onclick = function(){
        greenButtonTC.clicked();
    }

    document.getElementById("duty_cycle").onmouseenter = function(){
        update_help('duty_cycle');
    }

    document.getElementById("low_dc_button").onmouseenter = function(){
        update_help('not_compliant');
    }

    document.getElementById("low_dc_button").onclick = function(){
        redButtonDC.clicked();
    }

    document.getElementById("medium_dc_button").onmouseenter = function(){
        update_help('partially_compliant');
    }

    document.getElementById("medium_dc_button").onclick = function(){
        yellowButtonDC.clicked();
    }

    document.getElementById("high_dc_button").onmouseenter = function(){
        update_help('fully_compliant');
    }

    document.getElementById("high_dc_button").onclick = function(){
        greenButtonDC.clicked();
    }

    document.getElementById("others").onmouseenter = function(){
        update_help('others');
    }

    document.getElementById("low_others_button").onmouseenter = function(){
        update_help('not_compliant');
    }

    document.getElementById("low_others_button").onclick = function(){
        redButtonOthers.clicked();
    }

    document.getElementById("medium_others_button").onmouseenter = function(){
        update_help('partially_compliant');
    }

    document.getElementById("medium_others_button").onclick = function(){
        yellowButtonOthers.clicked();
    }

    document.getElementById("high_others_button").onmouseenter = function(){
        update_help('fully_compliant');
    }

    document.getElementById("high_others_button").onclick = function(){
        greenButtonOthers.clicked();
    }

    document.getElementById("lambda1_entry").onchange = function(){
        lambda12Entry.onLambdachanged();
    }

    document.getElementById("lambda2_entry").onchange = function(){
        lambda12Entry.onLambdachanged();
    }

    document.getElementById("piT_checkbox").onclick = function(){
        checkboxPiT.change_check();
    }

    document.getElementById("piC_checkbox").onclick = function(){
        checkboxPiC.change_check();
    }

    
    /* Hide/display the help messages on click on the astronaut picture */
    document.getElementById("astroPicture").onclick = function () {
        if (this.src.includes("speak")) {
            document.getElementById("messages").style.display = "none";
            this.src = "pictures/new_astronaut.svg";
        }
        else {
            document.getElementById("messages").style.display = "block";
            this.src = "pictures/new_astronaut_speaks.svg";
        }
    }

    /* Makes the help band follow the mouse moves */
    document.onmousemove = function (e) {
        if (e.pageY > 140) {
            document.getElementById("helpMFR").style.top = (e.pageY - 140 - 100) + "px";
        }
        if (parseInt(document.getElementById("helpMFR").style.top.substring(-2)) < 0) {
            document.getElementById("helpMFR").style.top = "0px";
        }
    }
    
    /* Makes the help band follow the mouse scroll */
    document.onwheel = function (e) {
        if (e.pageY > 140) {
            document.getElementById("helpMFR").style.top = (e.pageY - 140 - 100) + "px";
        }
        if (parseInt(document.getElementById("helpMFR").style.top.substring(-2)) < 0) {
            document.getElementById("helpMFR").style.top = "0px";
        }
    }


}
class NumberEntry {
    constructor(name, value, text_entry, message, value_text){
        this.name = name;
        this.value = value;
        this.text_entry = text_entry
        this.message = message;
        this.value_text = value_text;
    }

//!this.text_entry.value.includes(",")

    check_content(){
        const numberCheck = new RegExp('[0-9]+([\\.][0-9]*)?');
        //var numberCheck = /([0-9]*[\.])?[0-9]+/;
        //console.log(numberCheck.test(this.text_entry.value) && !this.text_entry.value.includes("-") && !this.text_entry.value.includes(","));
        if (numberCheck.test(this.text_entry.value) && !this.text_entry.value.includes("-") && !this.text_entry.value.includes(",")){
            this.text_entry.color = "green";
            //console.log(parseFloat(this.text_entry.value));
            this.value_text.innerHTML = parseFloat(this.text_entry.value);
            this.message.innerHTML = "&lambda;" + "1".sub() + " validated";
            process_lambda3();
        }
        else{
            this.text_entry.color = "red";
            this.message.innerHTML = "Wrong format, please enter a number (float or integer) with decimal delimiter '.'";
        }
    }
}

class ChoiceButton {

    constructor(name, value, button, color_selected, color_unselected, hauteur = 40, largeur = 200){
        //console.log("creates button");
        this.hauteur = hauteur;
        this.largeur = largeur;
        this.value = value;
        this.button = button;
        this.button.style.width = this.largeur.toString() + "px";
        this.button.style.height = this.hauteur.toString() + "px";
        this.name = name;
        this.state = false;
        this.color_selected = color_selected;
        this.color_unselected = color_unselected
        this.associated_button1 = null;
        this.associated_button2 = null;
        this.text_area = null;
    }

    static associate_all_buttons(b1,b2,b3){
        b1.associate_buttons(b2,b3);
        b2.associate_buttons(b1, b3);
        b3.associate_buttons(b1, b2);
    }

    static associate_text_area(b1,b2,b3, ta){
        b1.text_area = ta;
        b2.text_area = ta;
        b3.text_area = ta;
    }

    associate_buttons(b1,b2){
        //console.log("associates button");
        this.associated_button1 = b1;
        this.associated_button2 = b2;
    }

    clicked(){
        this.go_selected();
        this.button.disabled = true;
        this.associated_button1.go_unselected();
        this.associated_button2.go_unselected();
        process_pi_op()
        process_lambda3()
    }

    go_unselected(){
        //console.log('clicked');
        this.button.style.backgroundColor = this.color_unselected;
        this.button.style.boxShadow= "0 5px #666";
        this.button.style.transform = "translateY(4px)";
        this.button.style.color="white";
        this.button.style.fontWeight= "normal";
        this.button.style.border = "none";
        this.state = false;
        this.button.disabled = false;
    }

    go_selected(){
        //console.log('unclicked');
        this.button.style.backgroundColor = this.color_selected;
        this.button.style.boxShadow= "0 9px #999";
        this.button.style.transform = "translateY(-4px)";
        this.button.style.color="black";
        this.button.style.fontWeight= "bold";
        this.button.style.border = "4px solid black";
        this.state = true;
        this.button.disabled = true;
        this.text_area.innerText = this.value;
    }

}

class RedButton extends ChoiceButton{

    constructor(name, value, button){
        super(name, value, button, "#f3522f", "#d12500");
    }
}

class YellowButton extends ChoiceButton{

    constructor(name, value, button){
        super(name, value, button, "#fad739", "#e1b800");
    }
}

class GreenButton extends ChoiceButton{

    constructor(name, value, button){
        super(name, value, button, "#85d78a", "#04AA6D");
    }
}

class OneChoiceCheckbox{
    constructor(name, checkbox, value_checked, value_unchecked, text_area){
        this.name = name;
        this.checkbox = checkbox;
        this.value_checked = value_checked;
        this.value_unchecked = value_unchecked;
        this.text_area = text_area
    }

    change_check(){
        if (this.checkbox.checked){
            this.text_area.textContent = this.value_checked;
            this.text_area.style.color = "#009879";
        }
        else{
            this.text_area.style.color = "red";
            this.text_area.textContent = this.value_unchecked;
        } 
        process_lambda3();
    }
}

let redButtonPiQ= new RedButton("LOW", 1.0, document.getElementById("low_piQ_button"));
let greenButtonPiQ = new GreenButton("HIGH", 1.25, document.getElementById("high_piQ_button"));
let yellowButtonPiQ = new YellowButton("MEDIUM", 1.5, document.getElementById("medium_piQ_button"));
ChoiceButton.associate_all_buttons(redButtonPiQ, greenButtonPiQ, yellowButtonPiQ);
ChoiceButton.associate_text_area(redButtonPiQ, greenButtonPiQ, yellowButtonPiQ, document.getElementById("piQ_value"));
redButtonPiQ.go_selected();


let redButtonPiM= new RedButton("LOW", 1.0, document.getElementById("low_piM_button"));
let greenButtonPiM = new GreenButton("HIGH", 1.25, document.getElementById("high_piM_button"));
let yellowButtonPiM = new YellowButton("MEDIUM", 1.5, document.getElementById("medium_piM_button"));
ChoiceButton.associate_all_buttons(redButtonPiM, greenButtonPiM, yellowButtonPiM);
ChoiceButton.associate_text_area(redButtonPiM, greenButtonPiM, yellowButtonPiM, document.getElementById("piM_value"));
redButtonPiM.go_selected();

let redButtonOrbit= new RedButton("LOW", 0.2, document.getElementById("low_orbit_button"));
let greenButtonOrbit = new GreenButton("HIGH", 0.25, document.getElementById("high_orbit_button"));
let yellowButtonOrbit = new YellowButton("MEDIUM", 0.3, document.getElementById("medium_orbit_button"));
ChoiceButton.associate_all_buttons(redButtonOrbit, greenButtonOrbit, yellowButtonOrbit);
ChoiceButton.associate_text_area(redButtonOrbit, greenButtonOrbit, yellowButtonOrbit, document.getElementById("orbit_value"));
redButtonOrbit.go_selected();

let redButtonTemperature= new RedButton("LOW", 0.2, document.getElementById("low_temperature_button"));
let greenButtonTemperature = new GreenButton("HIGH", 0.25, document.getElementById("high_temperature_button"));
let yellowButtonTemperature = new YellowButton("MEDIUM", 0.3, document.getElementById("medium_temperature_button"));
ChoiceButton.associate_all_buttons(redButtonTemperature, greenButtonTemperature, yellowButtonTemperature);
ChoiceButton.associate_text_area(redButtonTemperature, greenButtonTemperature, yellowButtonTemperature, document.getElementById("temperature_value"));
redButtonTemperature.go_selected();

let redButtonPower= new RedButton("LOW", 0.2, document.getElementById("low_power_button"));
let greenButtonPower = new GreenButton("HIGH", 0.25, document.getElementById("high_power_button"));
let yellowButtonPower = new YellowButton("MEDIUM", 0.3, document.getElementById("medium_power_button"));
ChoiceButton.associate_all_buttons(redButtonPower, greenButtonPower, yellowButtonPower);
ChoiceButton.associate_text_area(redButtonPower, greenButtonPower, yellowButtonPower, document.getElementById("power_value"));
redButtonPower.go_selected();

let redButtonTC= new RedButton("LOW", 0.1, document.getElementById("low_tc_button"));
let greenButtonTC = new GreenButton("HIGH", 0.13, document.getElementById("high_tc_button"));
let yellowButtonTC = new YellowButton("MEDIUM", 0.15, document.getElementById("medium_tc_button"));
ChoiceButton.associate_all_buttons(redButtonTC, greenButtonTC, yellowButtonTC);
ChoiceButton.associate_text_area(redButtonTC, greenButtonTC, yellowButtonTC, document.getElementById("tc_value"));
redButtonTC.go_selected();

let redButtonDC= new RedButton("LOW", 0.2, document.getElementById("low_dc_button"));
let greenButtonDC = new GreenButton("HIGH", 0.25, document.getElementById("high_dc_button"));
let yellowButtonDC = new YellowButton("MEDIUM", 0.3, document.getElementById("medium_dc_button"));
ChoiceButton.associate_all_buttons(redButtonDC, greenButtonDC, yellowButtonDC);
ChoiceButton.associate_text_area(redButtonDC, greenButtonDC, yellowButtonDC, document.getElementById("dc_value"));
redButtonDC.go_selected();

let redButtonOthers = new RedButton("LOW", 0.1, document.getElementById("low_others_button"));
let greenButtonOthers = new GreenButton("HIGH", 0.13, document.getElementById("high_others_button"));
let yellowButtonOthers = new YellowButton("MEDIUM", 0.15, document.getElementById("medium_others_button"));
ChoiceButton.associate_all_buttons(redButtonOthers, greenButtonOthers, yellowButtonOthers);
ChoiceButton.associate_text_area(redButtonOthers, greenButtonOthers, yellowButtonOthers, document.getElementById("others_value"));
redButtonOthers.go_selected();

let checkboxPiT = new OneChoiceCheckbox("piT", document.getElementById("piT_checkbox"), 1.0, 1.0, document.getElementById("piT_value"));
checkboxPiT.change_check();

let checkboxPiC = new OneChoiceCheckbox("piT", document.getElementById("piC_checkbox"), 1.0, 1.0, document.getElementById("piC_value"));
checkboxPiC.change_check();

let lambda1Entry = new NumberEntry("lambda1", 1.0, document.getElementById("lambda1_entry"), document.getElementById("lambda1_message"), document.getElementById("lambda1_value"));


function process_pi_op(){
    var res = parseFloat(document.getElementById("others_value").innerHTML) + parseFloat(document.getElementById("dc_value").innerHTML) + parseFloat(document.getElementById("tc_value").innerHTML) + parseFloat(document.getElementById("power_value").innerHTML) + parseFloat(document.getElementById("temperature_value").innerHTML) + parseFloat(document.getElementById("orbit_value").innerHTML);
    console.log(res.toFixed(2))
    document.getElementById("piOP_value").innerText = res.toFixed(2);
}

function process_lambda3(){
    var res = parseFloat(document.getElementById("piOP_value").innerHTML) * parseFloat(document.getElementById("piT_value").innerHTML) * parseFloat(document.getElementById("piC_value").innerHTML) * parseFloat(document.getElementById("piM_value").innerHTML) * parseFloat(document.getElementById("piQ_value").innerHTML) * parseFloat(document.getElementById("lambda1_value").innerHTML);
    document.getElementById("lambda3_value").innerText = res.toFixed(6);
}

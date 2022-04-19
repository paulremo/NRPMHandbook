class NumberEntry {
    constructor(name, value, text_entry, message, value_text){
        this.name = name;
        this.value = value;
        this.text_entry = text_entry
        this.message = message;
        this.value_text = value_text;
    }

    check_content(){
        var numberCheck = /[+-]?([0-9]*[.])?[0-9]+/;
        if (this.text_entry.value.match(numberCheck) && !this.text_entry.value.includes(",")){
            this.text_entry.color = "green";
            console.log(parseFloat(this.text_entry.value));
            this.value_text.innerHTML = parseFloat(this.text_entry.value);
            this.message.innerHTML = "&lambda;" + "1".sub() + " validated";
        }
        else{
            this.text_entry.color = "red";
            this.message.innerHTML = "Wrong format, please enter a number (float or integer) with decimal delimiter '.'";
        }
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

class ThreeChoicesSlider {
    constructor(name, slider, colors, descriptions, values, value_area, description_area) {
        this.name = name;
        this.slider = slider;
        this.colors = colors;
        this.descriptions = descriptions;
        this.values = values;
        this.value_area = value_area;
        this.description_area = description_area;
        this.value = 1;
    }

    changed() {
        this.slider.style.background = this.findColor();
        let v = parseInt(this.slider.value);
        if (v < 100) {
            this.value = 1;
            this.description_area.innerHTML = this.descriptions[0];
            this.value_area.innerHTML = this.values[0];
        }
        else if (v < 200) {
            this.value = 2;
            this.description_area.innerHTML = this.descriptions[1];
            this.value_area.innerHTML = this.values[1];
        }
        else {
            this.value = 3;
            this.description_area.innerHTML = this.descriptions[2];
            this.value_area.innerHTML = this.values[2];
        }
    }

    /*Taken from the web*/
    static r2h(rgb) {
        return "#" + ((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2]).toString(16).slice(1);
    }

    /*Taken from the web*/
    static h2r(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? [
            parseInt(result[1], 16),
            parseInt(result[2], 16),
            parseInt(result[3], 16)
        ] : null;
    };

    /*Taken from the web*/
    static interpolateColor(value) {
        if (value > 150) {
            let factor = (value - 150)/150;
            let color1 = [255, 229, 14];
            let color2 = [196, 13, 2];
            var result = color1.slice();
            for (var i = 0; i < 3; i++) {
                result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
            }
            return result;
        }
        else {
            let factor = value/150;
            let color1 = [8, 158, 3];
            let color2 = [255, 229, 14];
            var result = color1.slice();
            for (var i = 0; i < 3; i++) {
                result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
            }
            return result;
        }
    }

    findColor() {
        let color = ThreeChoicesSlider.interpolateColor(parseInt(this.slider.value))
        return (ThreeChoicesSlider.r2h(color))
    }
}

let testSlider = new ThreeChoicesSlider("test", document.getElementById("r"), "", ["LOW", "MEDIUM", "HIGH"], [1.0,1.25,1.5], document.getElementById("test_value"), document.getElementById("test_description"));
testSlider.changed();


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

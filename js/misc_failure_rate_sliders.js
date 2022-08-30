// Copyright (C) Matrisk GmbH 2022

function runMFRslider() {

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

        check_content() {
            const numberCheck = new RegExp('[0-9]+([\\.][0-9]*)?');
            //var numberCheck = /([0-9]*[\.])?[0-9]+/;
            //console.log(numberCheck.test(this.text_entry.value) && !this.text_entry.value.includes("-") && !this.text_entry.value.includes(","));
            if (numberCheck.test(this.text_entry.value) && !this.text_entry.value.includes("-") && !this.text_entry.value.includes(",")) {
                this.text_entry.color = "green";
                //console.log(parseFloat(this.text_entry.value));
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

    class Lambda1Entry extends NumberEntry {
        constructor(name, value, text_entry, message, value_text, error_message = "", success_message = "") {
            super(name, value, text_entry, message, value_text, error_message, success_message);
        }

        changeValue(condition) {
            if (condition) {
                this.value = parseFloat(this.text_entry.value);
            }
            else {
                this.value = 1.0;
            }
        }
    }

    class Lambda2Entry extends NumberEntry {
        constructor(name, value, text_entry, message, value_text, error_message = "", success_message = "", info_message = "", lambda1) {
            super(name, value, text_entry, message, value_text, error_message, success_message, info_message);
            this.lambda1 = lambda1;
        }

        changeValue(condition) {
            console.log(this.lambda1.value);
            if (condition) {
                this.value = parseFloat(this.text_entry.value) * this.lambda1.value;
            }
            else {
                this.value = this.lambda1.value;
            }
        }
    }

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


    class OneChoiceCheckbox {
        constructor(name, checkbox, value_checked, value_unchecked, text_area) {
            this.name = name;
            this.checkbox = checkbox;
            this.value_checked = value_checked;
            this.value_unchecked = value_unchecked;
            this.text_area = text_area
        }

        change_check() {
            if (this.checkbox.checked) {
                this.text_area.textContent = this.value_checked;
                this.text_area.style.color = "#009879";
            }
            else {
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
            process_pi_op();
            process_lambda3();
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
                let factor = (value - 150) / 150;
                let color1 = [255, 229, 14];
                let color2 = [8, 158, 3];
                var result = color1.slice();
                for (var i = 0; i < 3; i++) {
                    result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
                }
                return result;
            }
            else {
                let factor = value / 150;
                let color1 = [196, 13, 2];
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

    let lambda1Entry = new Lambda1Entry("lambda1", 1.0, document.getElementById("lambda1_entry"), document.getElementById("lambda1_message"), document.getElementById("lambda1_value"), "Wrong format, please enter a number (float or integer) with decimal delimiter '.'", "&lambda;" + "1".sub() + " validated");

    let lambda2Entry = new Lambda2Entry("lambda2", 1.0, document.getElementById("lambda2_entry"), document.getElementById("lambda2_message"), document.getElementById("lambda2_value"), "Wrong format, please enter a number (float or integer) with decimal delimiter '.'", "K" + "parameters".sub() + " validated", "Please enter a value for " + "K" + "parameters".sub() + " if necessary", lambda1Entry);

    let lambda12Entry = new LambdaEntry(lambda1Entry, lambda2Entry);

    let piQSlider = new ThreeChoicesSlider("piQslider", document.getElementById("piQ_slider"), "", ["LOW", "MEDIUM", "HIGH"], [1.5, 1.25, 1.0], document.getElementById("piQ_value"), document.getElementById("piQ_description"));
    piQSlider.changed();

    let piMSlider = new ThreeChoicesSlider("piMslider", document.getElementById("piM_slider"), "", ["LOW", "MEDIUM", "HIGH"], [1.5, 1.25, 1.0], document.getElementById("piM_value"), document.getElementById("piM_description"));
    piMSlider.changed();

    let orbitSlider = new ThreeChoicesSlider("orbitslider", document.getElementById("orbit_slider"), "", ["LOW COMPLIANCE", "PARTIAL COMPLIANCE", "FULL COMPLIANCE"], [0.3, 0.25, 0.2], document.getElementById("orbit_value"), document.getElementById("orbit_description"));
    orbitSlider.changed();

    let temperatureSlider = new ThreeChoicesSlider("temperatureslider", document.getElementById("temperature_slider"), "", ["LOW COMPLIANCE", "PARTIAL COMPLIANCE", "FULL COMPLIANCE"], [0.3, 0.25, 0.2], document.getElementById("temperature_value"), document.getElementById("temperature_description"));
    temperatureSlider.changed();

    let powerSlider = new ThreeChoicesSlider("powerslider", document.getElementById("power_slider"), "", ["LOW COMPLIANCE", "PARTIAL COMPLIANCE", "FULL COMPLIANCE"], [0.3, 0.25, 0.2], document.getElementById("power_value"), document.getElementById("power_description"));
    powerSlider.changed();

    let dcSlider = new ThreeChoicesSlider("dcslider", document.getElementById("dc_slider"), "", ["LOW COMPLIANCE", "PARTIAL COMPLIANCE", "FULL COMPLIANCE"], [0.3, 0.25, 0.2], document.getElementById("dc_value"), document.getElementById("dc_description"));
    dcSlider.changed();

    let tcSlider = new ThreeChoicesSlider("tcslider", document.getElementById("tc_slider"), "", ["LOW COMPLIANCE", "PARTIAL COMPLIANCE", "FULL COMPLIANCE"], [0.15, 0.13, 0.1], document.getElementById("tc_value"), document.getElementById("tc_description"));
    tcSlider.changed();

    let othersSlider = new ThreeChoicesSlider("othersslider", document.getElementById("others_slider"), "", ["LOW COMPLIANCE", "PARTIAL COMPLIANCE", "FULL COMPLIANCE"], [0.15, 0.13, 0.1], document.getElementById("others_value"), document.getElementById("others_description"));
    othersSlider.changed();

    let checkboxPiT = new OneChoiceCheckbox("piT", document.getElementById("piT_checkbox"), 1.0, 1.0, document.getElementById("piT_value"));
    checkboxPiT.change_check();

    let checkboxPiC = new OneChoiceCheckbox("piT", document.getElementById("piC_checkbox"), 1.0, 1.0, document.getElementById("piC_value"));
    checkboxPiC.change_check();

    function process_pi_op() {
        var res = parseFloat(document.getElementById("others_value").innerHTML) + parseFloat(document.getElementById("dc_value").innerHTML) + parseFloat(document.getElementById("tc_value").innerHTML) + parseFloat(document.getElementById("power_value").innerHTML) + parseFloat(document.getElementById("temperature_value").innerHTML) + parseFloat(document.getElementById("orbit_value").innerHTML);
        console.log(res.toFixed(2))
        document.getElementById("piOP_value").innerText = res.toFixed(2);
    }

    function process_lambda3() {
        var res = parseFloat(document.getElementById("piOP_value").innerHTML) * parseFloat(document.getElementById("piT_value").innerHTML) * parseFloat(document.getElementById("piC_value").innerHTML) * parseFloat(document.getElementById("piM_value").innerHTML) * parseFloat(document.getElementById("piQ_value").innerHTML) * lambda1Entry.value * lambda2Entry.value;
        document.getElementById("lambda3_value").innerText = res.toFixed(6);
    }

    const information = new Map([
        ["lambda_3", "Hover an element or click it to get information"],
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

    function update_help(elt) {
        document.getElementById("messagesTrack").innerHTML = information.get(elt);
    }

}
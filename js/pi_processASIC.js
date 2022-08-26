function runPiProcessASIC() {

    let answers_ASIC = new Map([
        ["1", false],
        ["2", false],
        ["3", false],
        ["4", false],
        ["5", false],
        ["6", false],
        ["7", false],
        ["8", false],
        ["9", false],
        ["10", false],
        ["11", false]
    ])

    for (var slider_switch of document.getElementsByClassName("switch-check")) {
        slider_switch.onclick = function () {
            answers_ASIC.set(this.id.split("_")[1], true);
            process_asic()
            if (this.checked) {
                document.getElementById(this.id + "_switch").style.backgroundColor = "#098324";
            }
            else {
                document.getElementById(this.id + "_switch").style.backgroundColor = "red";
            }
            document.getElementById(this.id + "_switch").getElementsByClassName("inner-span-switch")[0].className = document.getElementById(this.id + "_switch").getElementsByClassName("inner-span-switch")[0].className.replace(" inner-span-switch-start", "");
                console.log(document.getElementById(this.id + "_switch").getElementsByClassName("inner-span-switch")[0].className)
            if (this.checked) {
                document.getElementById(this.id + "_switch").getElementsByClassName("inner-span-switch")[0].className += " inner-span-switch-on"
            }
            else {
                document.getElementById(this.id + "_switch").getElementsByClassName("inner-span-switch")[0].className = document.getElementById(this.id + "_switch").getElementsByClassName("inner-span-switch")[0].className.replace(" inner-span-switch-on", "");
                console.log(document.getElementById(this.id + "_switch").getElementsByClassName("inner-span-switch")[0].className)
            }
        }
    }

    document.getElementById("copy_button_ASIC").onclick = function () {
        navigator.clipboard.writeText(document.getElementById("final_value_ASIC").innerHTML);
    }

    function process_asic() {
        var asic_grade = 0;
        let all_filled = true;
        for (var slider_switch of document.getElementsByClassName("switch-check")) {
            if (!answers_ASIC.get(slider_switch.id.split("_")[1])) {
                all_filled = false;
            }
            if (slider_switch.checked) {
                if (slider_switch.id.split("_")[1] == "1" || slider_switch.id.split("_")[1] == "2" || slider_switch.id.split("_")[1] == "3" || slider_switch.id.split("_")[1] == "4" || slider_switch.id.split("_")[1] == "10") {
                    asic_grade = asic_grade + 10 / 100;
                }
                else if (slider_switch.id.split("_")[1] == "9" || slider_switch.id.split("_")[1] == "1") {
                    asic_grade = asic_grade + 15 / 100;
                }
                else {
                    asic_grade = asic_grade + 5 / 100;
                }
            }
        }
        if (all_filled) {
            let score = Math.exp(1.39 * (1 - asic_grade));
            document.getElementById("final_value_ASIC").innerHTML = score.toFixed(2);
            document.getElementById("copy_button_ASIC").style.display = "inline";
        }

    }

}
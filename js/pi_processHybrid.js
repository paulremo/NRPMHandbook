// Copyright (C) Matrisk GmbH 2022

function runPiProcessHybrid() {

    let answers_Hybrid = new Map([
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
        ["11", false],
        ["12", false]
    ])

    let answers_points_Hybrid = new Map([
        ["1", 15],
        ["2", 15],
        ["3", 10],
        ["4", 3],
        ["5", 3],
        ["6", 4],
        ["7", 30],
        ["8", 20],
        ["9", 10],
        ["10", 30],
        ["11", 20],
        ["12", 10]
    ])

    let auto_click = false;

    for (var slider_switch of document.getElementsByClassName("switch-check")) {
        slider_switch.onclick = function () {
            answers_Hybrid.set(this.id.split("_")[1], true);
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
            if (this.id.split("_")[1] == "7"){
                if (this.checked && !auto_click){
                    setUnclick(document.getElementById("question_8_entry_Hybrid"));
                    setUnclick(document.getElementById("question_9_entry_Hybrid"));
                }
            }
            else if (this.id.split("_")[1] == "8"){
                if (this.checked && !auto_click){
                    setUnclick(document.getElementById("question_7_entry_Hybrid"));
                    setUnclick(document.getElementById("question_9_entry_Hybrid"));
                }
            }
            else if (this.id.split("_")[1] == "9"){
                if (this.checked && !auto_click){
                    setUnclick(document.getElementById("question_7_entry_Hybrid"));
                    setUnclick(document.getElementById("question_8_entry_Hybrid"));
                }
            }
            auto_click = false;
            process_hybrid();
        }
    }

    function setUnclick(slider){
        auto_click = true;
        if (slider.checked){
            slider.click();
        }
        else if (!answers_Hybrid.get(slider.id.split("_")[1]) && !slider.checked){
            slider.click();
            slider.click();
        }
    }

    document.getElementById("copy_button_Hybrid").onclick = function () {
        navigator.clipboard.writeText(document.getElementById("final_value_Hybrid").innerHTML);
    }

    function process_hybrid() {
        var hybrid_grade = 0;
        let all_filled = true;
        for (var slider_switch of document.getElementsByClassName("switch-check")) {
            if (!answers_Hybrid.get(slider_switch.id.split("_")[1])) {
                all_filled = false;
            }
            if (slider_switch.checked) {
                hybrid_grade = hybrid_grade + answers_points_Hybrid.get(slider_switch.id.split("_")[1]) / 140;
            }
        }
        if (all_filled) {
            let score = Math.exp(1.39 * (1 - hybrid_grade));
            document.getElementById("final_value_Hybrid").innerHTML = score.toFixed(2);
            document.getElementById("copy_button_Hybrid").style.display = "inline";
        }

    }

}
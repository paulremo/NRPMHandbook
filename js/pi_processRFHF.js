function runPiProcessRFHF() {

    let answers = new Map([
        ["1", false],
        ["2", false],
        ["3", false],
        ["4", false],
        ["5", false],
        ["6", false],
        ["7", false],
        ["8", false]
    ])

    for (var slider_switch of document.getElementsByClassName("switch-check")){
        slider_switch.onclick = function() {
            answers.set(this.id.split("_")[1], true);
            process_rfhf()
            if (this.checked){
                document.getElementById(this.id + "_switch").style.backgroundColor = "#098324";
            }
            else{
                document.getElementById(this.id + "_switch").style.backgroundColor = "red";
            }
        }
    }

    document.getElementById("copy_button_RFHF").onclick = function(){
        navigator.clipboard.writeText(document.getElementById("final_value_RFHF").innerHTML);
    }

    function process_rfhf() {
        var rfhf_grade = 0;
        let all_filled = true;
        console.log(answers)
        for (var slider_switch of document.getElementsByClassName("switch-check")){
            if (!answers.get(slider_switch.id.split("_")[1])){
                all_filled = false;
            }
            if (slider_switch.checked){
                if (slider_switch.id.split("_")[1] == "1" || slider_switch.id.split("_")[1] == "7"){
                    rfhf_grade = rfhf_grade + 10/50;
                }
                else{
                    rfhf_grade = rfhf_grade + 5/50;
                }
            }
        }
        if (all_filled){
            let score = Math.exp(1.39 * (1 - rfhf_grade));
            document.getElementById("final_value_RFHF").innerHTML = score.toFixed(2);
            document.getElementById("copy_button_RFHF").style.display = "inline";
        }
        
    }

}
// Copyright (C) Matrisk GmbH 2022

function runMissionprofile() {

    let existing_phase_mp = null;

    var current_category_mp = "1";

    var current_phase = new Map([
        ["phase type", null],
        ["phase name", null],
        ["unit onboard", null],
        ["calendar time", null],
        ["ambient temperature", null],
        ["delta t", null],
        ["cycle duration", null],
        ["number of cycles", null],
        ["max temperature", null],
        ["humidity rate", null],
        ["random vibrations", null],
        ["saline pollution", null],
        ["environment pollution", null],
        ["application pollution", null],
        ["protection level", null]
    ])

    var range_pollution_values = new Map([
        ["saline pollution", new Map([
            [0, "low"],
            [100, "high"]
        ])],
        ["environment pollution", new Map([
            [0, "low"],
            [50, "moderate"],
            [100, "high"]
        ])],
        ["application pollution", new Map([
            [0, "low"],
            [50, "moderate"],
            [100, "high"]
        ])],
        ["protection level", new Map([
            [0, "hermetic"],
            [100, "non hermetic"]
        ])]
    ]);

    var current_answers_mp = new Map();

    var phases_names_mp = new Set();

    var mp_categories_pictures = new Map([
        ["1", new Map([
            ["selected", "pictures/mission_profile/general_information.svg"],
            ["unselected", "pictures/mission_profile/general_information_blank.svg"]
        ])],
        ["2", new Map([
            ["selected", "pictures/mission_profile/time_information.svg"],
            ["unselected", "pictures/mission_profile/time_information_blank.svg"]
        ])],
        ["3", new Map([
            ["selected", "pictures/mission_profile/temperature_information.svg"],
            ["unselected", "pictures/mission_profile/temperature_information_blank.svg"]
        ])],
        ["4", new Map([
            ["selected", "pictures/mission_profile/mechanical_information.svg"],
            ["unselected", "pictures/mission_profile/mechanical_information_blank.svg"]
        ])],
        ["5", new Map([
            ["selected", "pictures/mission_profile/chemical_information.svg"],
            ["unselected", "pictures/mission_profile/chemical_information_blank.svg"]
        ])],
    ])

    var phase_type_images_mp = new Map([
        ["Storage", "pictures/mission_profile/storage.svg"],
        ["Transport", "pictures/mission_profile/transport.svg"],
        ["Launch", "pictures/mission_profile/lauch.svg"],
        ["Reaching orbit", "pictures/mission_profile/reaching_orbit.svg"],
        ["In-orbit", "pictures/mission_profile/orbit.svg"],
        ["Other", "pictures/mission_profile/other.svg"]
    ])

    for (var sldr of document.getElementsByClassName("step-range-mp-2")) {
        sldr.onclick = function () {
            changeSlider2(this);
            free_validation_category_mp();
        }
        document.getElementById(sldr.id + "-box").onmouseenter = function () {
            let nm = this.id.split("-")[0] + " " + this.id.split("-")[1]
            update_recom_mp(nm);
        }
        document.getElementById(sldr.id + "-box").onmouseleave = function () {
            back_recom_mp();
        }
    }

    for (var sldr of document.getElementsByClassName("step-range-mp-3")) {
        sldr.onclick = function () {
            changeSlider3(this);
            free_validation_category_mp();
        }
        document.getElementById(sldr.id + "-box").onmouseenter = function () {
            let nm = this.id.split("-")[0] + " " + this.id.split("-")[1]
            update_recom_mp(nm);
        }
        document.getElementById(sldr.id + "-box").onmouseleave = function () {
            back_recom_mp();
        }
    }

    function changeSlider3(slider) {
        if (slider.value == 0) {
            slider.style.backgroundColor = "green"
        }
        else if (slider.value == 100) {
            slider.style.backgroundColor = "red"
        }
        else {
            slider.style.backgroundColor = "yellow"
        }
        update_slider_mp(slider);
    }

    function changeSlider2(slider) {
        if (slider.value == 0) {
            slider.style.backgroundColor = "green"
        }
        else {
            slider.style.backgroundColor = "red"
        }
        update_slider_mp(slider);
    }

    for (var cat of document.getElementsByClassName("cat-name-mp")) {
        cat.onclick = function () {
            for (card of document.getElementsByClassName("entry-card")) {
                card.style.display = "none";
            }
            for (ct of document.getElementsByClassName("cat-name-mp")) {
                ct.style.backgroundColor = "";
                ct.style.color = "white";
                ct.getElementsByTagName("img")[0].src = mp_categories_pictures.get(ct.id.substring(9)).get("unselected");
            }
            let id = this.id.substring(9);
            this.style.backgroundColor = "#d7e9eb";
            this.style.color = "black";
            this.getElementsByTagName("img")[0].src = mp_categories_pictures.get(id).get("selected");
            document.getElementById("entry-card-" + id).style.display = "block";
            current_category_mp = "entry-card-" + id;
            configure_category_mp();

        }
        cat.onmouseenter = function () {
            this.style.backgroundColor = "#1B7E94";
        }
        cat.onmouseleave = function () {
            if (current_category_mp == "entry-card-" + this.id.substring(9)) {
                this.style.backgroundColor = "#d7e9eb";
                this.style.color = "black";
                this.getElementsByTagName("img")[0].src = mp_categories_pictures.get(current_category_mp.substring(11)).get("selected");
                document.getElementById("entry-card-" + this.id.substring(9)).style.display = "block";
            }
            else {
                this.style.backgroundColor = "";
                this.style.color = "white";
                this.getElementsByTagName("img")[0].src = mp_categories_pictures.get(this.id.substring(9)).get("unselected");
            }
        }
    }

    for (rdo of document.getElementsByClassName("radio-phase-type-box")) {
        rdo.onclick = function () {
            for (rd of document.getElementsByClassName("phase-type-entry-mp")) {
                rd.checked = false;
            }
            this.getElementsByClassName("phase-type-entry-mp")[0].checked = true;
            current_answers_mp.set("phase type", this.getElementsByClassName("phase-type-label")[0].innerHTML);
            free_validation_category_mp();
        }
    }
    document.getElementById("phase-type-choices-box").onmouseenter = function () {
        update_recom_mp("phase type");
    }
    document.getElementById("phase-type-choices-box").onmouseleave = function () {
        back_recom_mp();
    }

    document.getElementById("validate-phase-MP").onclick = function () {
        if (check_all_parameters_filled_mp()) {

            if (existing_phase_mp != null) {
                edit_line_mp(existing_phase_mp);
            }

            else {
                fillInformationTableMP();
            }

            current_phase = new Map([
                ["phase type", null],
                ["phase name", null],
                ["unit onboard", null],
                ["calendar time", null],
                ["ambient temperature", null],
                ["delta t", null],
                ["cycle duration", null],
                ["number of cycles", null],
                ["max temperature", null],
                ["humidity rate", null],
                ["random vibrations", null],
                ["saline pollution", null],
                ["environment pollution", null],
                ["application pollution", null],
                ["protection level", null]
            ])

            reinitialize_interactors();
        }

        else {
            alert("Some values have not been filled.")
        }
    }
    document.getElementById("validate-phase-MP").disabled = true;

    document.getElementById("on-off-entry-mp").onchange = function () {
        if (this.checked) {
            current_answers_mp.set("unit onboard", "on");
            document.getElementById("on-off-switch-mp").style.backgroundColor = "#098324";
        }
        else {
            current_answers_mp.set("unit onboard", "off");
            document.getElementById("on-off-switch-mp").style.backgroundColor = "red";
        }
        free_validation_category_mp();
    }
    document.getElementById("on-off-entry-box").onmouseenter = function () {
        update_recom_mp("unit onboard");
    }
    document.getElementById("on-off-entry-box").onmouseleave = function () {
        back_recom_mp();
    }

    document.getElementById("phase-name-entry").oninput = function () {
        var re = new RegExp('[A-Za-z0-9]+[A-Za-z0-9_ ]*');
        let current_name = this.value;
        if (re.exec(current_name) != current_name && current_name != "") {
            this.style.color = "red";
        }
        else {
            this.style.color = "black";
        }
        free_validation_category_mp();
    }

    document.getElementById("phase-name-entry").onchange = function () {
        var re = new RegExp('[A-Za-z0-9]+[A-Za-z0-9_ ]*');
        let current_name = this.value;
        if (re.exec(current_name) == current_name && !phases_names_mp.has(current_name)) {
            current_answers_mp.set("phase name", current_name);
            phases_names_mp.add(current_name);
            document.getElementById("indication-validity-phase-name-entry").style.display = "none";
        }
        else {
            //alert("This name can't be used, please chose another one")
            //this.style.color = "black";
            document.getElementById("indication-validity-phase-name-entry").style.display = "block";
        }
        free_validation_category_mp();
    }
    document.getElementById("phase-name-entry-box").onmouseenter = function () {
        update_recom_mp("phase name");
    }
    document.getElementById("phase-name-entry-box").onmouseleave = function () {
        back_recom_mp();
    }

    document.getElementById("calendar-time-entry").oninput = function () {
        var re = new RegExp('[0-9]+\.?[0-9]*');
        let current_name = this.value;
        if (re.exec(current_name) == current_name) {
            document.getElementById("indication-validity-" + this.id).style.display = "none";
            current_answers_mp.set("calendar time", current_name);
        }
        else {
            document.getElementById("indication-validity-" + this.id).style.display = "inline";
            current_answers_mp.set("calendar time", null);
        }
        free_validation_category_mp();
    }
    document.getElementById("calendar-time-entry-box").onmouseenter = function () {
        update_recom_mp("calendar time");
    }
    document.getElementById("calendar-time-entry-box").onmouseleave = function () {
        back_recom_mp();
    }

    document.getElementById("cycle-duration-entry").oninput = function () {
        var re = new RegExp('[0-9]+\.?[0-9]*');
        let current_name = this.value;
        if (re.exec(current_name) == current_name) {
            document.getElementById("indication-validity-" + this.id).style.display = "none";
            current_answers_mp.set("cycle duration", current_name);
        }
        else {
            document.getElementById("indication-validity-" + this.id).style.display = "inline";
            current_answers_mp.set("cycle duration", null);
        }
        free_validation_category_mp();
    }
    document.getElementById("cycle-duration-entry-box").onmouseenter = function () {
        update_recom_mp("cycle duration");
    }
    document.getElementById("cycle-duration-entry-box").onmouseleave = function () {
        back_recom_mp();
    }

    document.getElementById("number-cycles-entry").oninput = function () {
        var re = new RegExp('[0-9]+');
        let current_name = this.value;
        if (re.exec(current_name) == current_name) {
            document.getElementById("indication-validity-" + this.id).style.display = "none";
            current_answers_mp.set("number of cycles", current_name);
        }
        else {
            document.getElementById("indication-validity-" + this.id).style.display = "inline";
            current_answers_mp.set("number of cycles", null);
        }
        free_validation_category_mp();
    }
    document.getElementById("number-cycles-entry-box").onmouseenter = function () {
        update_recom_mp("number of cycles");
    }
    document.getElementById("number-cycles-entry-box").onmouseleave = function () {
        back_recom_mp();
    }

    document.getElementById("ambient-temperature-entry").oninput = function () {
        var re = new RegExp('-?[0-9]+\.?[0-9]*');
        let current_name = this.value;
        if (re.exec(current_name) == current_name) {
            if (parseFloat(current_answers_mp.get("max temperature")) != null && parseFloat(current_answers_mp.get("max temperature")) >= parseFloat(this.value)) {
                document.getElementById("indication-validity-" + this.id).style.display = "none";
                current_answers_mp.set("ambient temperature", current_name);
            }
            else if (parseFloat(current_answers_mp.get("max temperature")) != null && parseFloat(current_answers_mp.get("max temperature")) > parseFloat(this.value)) {
                document.getElementById("indication-validity-" + this.id).style.display = "inline";
                current_answers_mp.set("ambient temperature", null);
            }
            else if (parseFloat(this.value) < -55 || parseFloat(this.value) > 125) {
                document.getElementById("indication-validity-" + this.id).style.display = "inline";
                current_answers_mp.set("ambient temperature", null);
            }
            else {
                document.getElementById("indication-validity-" + this.id).style.display = "none";
                current_answers_mp.set("ambient temperature", current_name);
            }
        }
        else {
            document.getElementById("indication-validity-" + this.id).style.display = "inline";
            current_answers_mp.set("ambient temperature", null);
        }
        free_validation_category_mp();
    }
    document.getElementById("ambient-temperature-entry-box").onmouseenter = function () {
        update_recom_mp("ambient temperature");
    }
    document.getElementById("ambient-temperature-entry-box").onmouseleave = function () {
        back_recom_mp();
    }

    document.getElementById("max-temperature-entry").oninput = function () {
        var re = new RegExp('-?[0-9]+\.?[0-9]*');
        let current_name = this.value;
        if (re.exec(current_name) == current_name) {
            if (parseFloat(current_answers_mp.get("ambient temperature")) != null && parseFloat(current_answers_mp.get("ambient temperature")) <= parseFloat(this.value) && parseFloat(this.value) < 180) {
                document.getElementById("indication-validity-" + this.id).style.display = "none";
                current_answers_mp.set("max temperature", current_name);
            }
            else if (parseFloat(current_answers_mp.get("ambient temperature")) != null && parseFloat(current_answers_mp.get("ambient temperature")) > parseFloat(this.value) || parseFloat(this.value) > 180) {
                document.getElementById("indication-validity-" + this.id).style.display = "inline";
                current_answers_mp.set("max temperature", null);
            }
            else if (parseFloat(this.value) > 180) {
                document.getElementById("indication-validity-" + this.id).style.display = "inline";
                current_answers_mp.set("max temperature", null);
            }
            else {
                document.getElementById("indication-validity-" + this.id).style.display = "none";
                current_answers_mp.set("max temperature", current_name);
            }
        }
        else {
            document.getElementById("indication-validity-" + this.id).style.display = "inline";
            current_answers_mp.set("max temperature", null);
        }
        free_validation_category_mp();
    }
    document.getElementById("max-temperature-entry-box").onmouseenter = function () {
        update_recom_mp("max temperature");
    }
    document.getElementById("max-temperature-entry-box").onmouseleave = function () {
        back_recom_mp();
    }

    document.getElementById("random-vibration-entry").oninput = function () {
        var re = new RegExp('[0-9]+\.?[0-9]*');
        let current_name = this.value;
        if (re.exec(current_name) == current_name) {
            document.getElementById("indication-validity-" + this.id).style.display = "none";
            current_answers_mp.set("random vibrations", current_name);
        }
        else {
            document.getElementById("indication-validity-" + this.id).style.display = "inline";
            current_answers_mp.set("random vibrations", null);
        }
        free_validation_category_mp();
    }
    document.getElementById("random-vibration-entry-box").onmouseenter = function () {
        update_recom_mp("random vibrations");
    }
    document.getElementById("random-vibration-entry-box").onmouseleave = function () {
        back_recom_mp();
    }

    document.getElementById("humidity-rate-entry").oninput = function () {
        var re = new RegExp('[0-9]+\.?[0-9]*');
        let current_name = this.value;
        if (re.exec(current_name) == current_name) {
            document.getElementById("indication-validity-" + this.id).style.display = "none";
            current_answers_mp.set("humidity rate", current_name);
        }
        else {
            document.getElementById("indication-validity-" + this.id).style.display = "inline";
            current_answers_mp.set("humidity rate", null);
        }
        free_validation_category_mp();
    }
    document.getElementById("humidity-rate-entry-box").onmouseenter = function () {
        update_recom_mp("humidity rate");
    }
    document.getElementById("humidity-rate-entry-box").onmouseleave = function () {
        back_recom_mp();
    }

    for (dt_entry of document.getElementsByClassName("delta-T-entry-mp")) {
        dt_entry.oninput = function () {
            var re = new RegExp('[0-9]+\.?[0-9]*');
            let current_name = this.value;
            if (re.exec(current_name) == current_name) {
            }
            else {
                current_answers_mp.set("calendar time", null);
            }
            calculate_delta_T_value_mp();
            free_validation_category_mp();
        }

    }
    document.getElementById("delta-t-entries-box").onmouseenter = function () {
        update_recom_mp("delta t");
    }
    document.getElementById("delta-t-entries-box").onmouseleave = function () {
        back_recom_mp();
    }

    document.getElementById("temperature-mode-selection").onchange = function () {
        if (this.checked) {
            document.getElementById("add-delta-t-mp").disabled = false;
        }
        else {
            document.getElementById("add-delta-t-mp").disabled = true;
            let all_dt_entries = new Set();
            for (element of document.getElementsByClassName("delta-T-entry-mp")) {
                all_dt_entries.add(element.id)
            }
            for (dt of all_dt_entries) {
                if (parseInt(dt.substring(14)) > 1) {
                    document.getElementById(dt).remove();
                }

            }
        }
    }
    document.getElementById("temperature-mode-selection").checked = false;

    document.getElementById("add-delta-t-mp").onclick = function () {
        let div = document.createElement("div");
        let entry = document.createElement("input");
        entry.type = "number";
        entry.id = "delta-T-entry-" + (count_delta_t_entries() + 1);
        entry.min = "0";
        entry.step = "0.1";
        entry.className = "delta-T-entry-mp";
        entry.oninput = function () {
            var re = new RegExp('[0-9]+\.?[0-9]*');
            let current_name = this.value;
            if (re.exec(current_name) == current_name) {
            }
            else {
                current_answers_mp.set("calendar time", null);
            }
            calculate_delta_T_value_mp();
            free_validation_category_mp();
        }
        div.appendChild(entry);
        document.getElementById("delta-t-entries-box-mp").appendChild(entry);
    }

    document.getElementById("save-button-mp").onclick = function () {
        saveAnswersMP();
    }

    document.getElementById("export-button-mp").onclick = function () {
        exportAnswersMP();
    }

    document.getElementById("load-answers-mp").onclick = function () {
        loadAnswers();
    }

    for (validation_button of document.getElementsByClassName("validate-mp-cat")) {
        validation_button.onclick = function () {
            validate_category_mp();
            this.disabled = true;
            if (check_all_parameters_filled_mp()) {
                document.getElementById("validate-phase-MP").disabled = false;
            }
            else {
                document.getElementById("validate-phase-MP").disabled = true;
            }
            console.log(current_answers_mp)
        }
    }

    for (info_button of document.getElementsByClassName("info-button-mp")) {
        info_button.onclick = function () {
            document.getElementById("overlay-mp").style.display = 'block';
            document.getElementById("text-mp").innerHTML = infos_mp.get(this.getElementsByClassName("fa")[0].id.split('-')[3]);
        }
    }

    document.getElementById("overlay-close-mp").onclick = function () {
        document.getElementById("overlay-mp").style.display = 'none';
    }

    for (calculate_button of document.getElementsByClassName("calculate-time-information-mp")) {
        calculate_button.onclick = function () {
            if (this.id == "calculate-number-cycles") {
                if (current_answers_mp.get("cycle duration") != null && current_answers_mp.get("calendar time") != null) {
                    let res = parseInt(current_answers_mp.get("calendar time") / current_answers_mp.get("cycle duration"));
                    document.getElementById("number-cycles-entry").value = res;
                    current_answers_mp.set("number of cycles", res);
                }
                else {
                    alert("Some values are missing, can't process this value");
                }
            }
            else if (this.id == "calculate-calendar-time") {
                if (current_answers_mp.get("cycle duration") != null && current_answers_mp.get("number of cycles") != null) {
                    let res = current_answers_mp.get("number of cycles") * current_answers_mp.get("cycle duration");
                    res = res.toFixed(3);
                    document.getElementById("calendar-time-entry").value = res;
                    current_answers_mp.set("calendar time", res);
                }
                else {
                    alert("Some values are missing, can't process this value");
                }
            }
            else {
                if (current_answers_mp.get("calendar time") != null && current_answers_mp.get("number of cycles") != null) {
                    let res = (current_answers_mp.get("calendar time") / current_answers_mp.get("number of cycles"));
                    res = res.toFixed(3);
                    document.getElementById("cycle-duration-entry").value = res;
                    current_answers_mp.set("cycle duration", res);
                }
                else {
                    alert("Some values are missing, can't process this value");
                }
            }
        }
    }

    reinitialize_interactors();

    function convert_picture_to_phase(picture) {
        if (picture.includes("storage")) {
            return "Storage"
        }
        else if (picture.includes("reaching")) {
            return "Reaching orbit"
        }
        else if (picture.includes("other")) {
            return "Other"
        }
        else if (picture.includes("lauch")) {
            return "Launch"
        }
        else if (picture.includes("transport")) {
            return "Transport"
        }
        else {
            return "In-orbit"
        }
    }

    function edit_phase(name_of_phase) {

        existing_phase_mp = name_of_phase;

        let phase_nodes = document.getElementById(name_of_phase).getElementsByTagName("td");

        let text = "You will edit the phase called : " + phase_nodes[1].innerHTML + ". You will lose your current inputs, are you sure you want to edit ?";
        if (confirm(text) == true) {

            current_phase = new Map([
                ["phase type", convert_picture_to_phase(phase_nodes[0].getElementsByTagName("img")[0].src)],
                ["phase name", phase_nodes[1].innerHTML],
                ["unit onboard", phase_nodes[2].innerHTML],
                ["calendar time", phase_nodes[3].innerHTML.replace(" h", "")],
                ["ambient temperature", phase_nodes[4].innerHTML.replace(" °C", "")],
                ["delta t", phase_nodes[5].innerHTML.replace(" °C", "")],
                ["cycle duration", phase_nodes[6].innerHTML.replace(" h", "")],
                ["number of cycles", phase_nodes[7].innerHTML],
                ["max temperature", phase_nodes[8].innerHTML.replace(" °C", "")],
                ["humidity rate", phase_nodes[9].innerHTML.replace(" %", "")],
                ["random vibrations", phase_nodes[10].innerHTML.replace(" Grms", "")],
                ["saline pollution", phase_nodes[11].innerHTML],
                ["environment pollution", phase_nodes[12].innerHTML],
                ["application pollution", phase_nodes[13].innerHTML],
                ["protection level", phase_nodes[14].innerHTML]
            ])
            document.getElementById("cat-name-1").click();

        } else {

        }


    }

    function update_recom_mp(interactor) {
        let new_recom = recoms_mp.get(interactor);
        if (new_recom != "") {
            document.getElementById("mp-recoms-text").innerHTML = new_recom;
        }
    }

    function back_recom_mp() {
        let infos = infos_mp_categories.get(current_category_mp.substring(11));
        document.getElementById("mp-recoms-text").innerHTML = infos;
    }

    function reinitialize_interactors() {
        let all_dt_entries = new Set();
        for (element of document.getElementsByClassName("delta-T-entry-mp")) {
            all_dt_entries.add(element.id)
        }
        for (dt of all_dt_entries) {
            if (parseInt(dt.substring(14)) > 1) {
                document.getElementById(dt).remove();
            }

        }
        for (dt_entry of document.getElementsByClassName("delta-T-entry-mp")) {
            dt_entry.value = "";
        }
        document.getElementById("random-vibration-entry").value = "";
        document.getElementById("humidity-rate-entry").value = "";
        document.getElementById("ambient-temperature-entry").value = "";
        document.getElementById("max-temperature-entry").value = "";
        document.getElementById("number-cycles-entry").value = "";
        document.getElementById("cycle-duration-entry").value = "";
        document.getElementById("calendar-time-entry").value = "";
        document.getElementById("phase-name-entry").value = "";
        document.getElementById("on-off-entry-mp").checked = false;
        document.getElementById("on-off-switch-mp").style.backgroundColor = "#ccc";
        for (rd of document.getElementsByClassName("phase-type-entry-mp")) {
            rd.checked = false;
        }
        for (var sldr of document.getElementsByClassName("step-range-mp-2")) {
            sldr.value = null;
            sldr.style.backgroundColor = "#CCC";
        }

        for (var sldr of document.getElementsByClassName("step-range-mp-3")) {
            sldr.value = null;
            sldr.style.backgroundColor = "#CCC";
        }
    }

    function free_validation_category_mp() {
        document.getElementById("validate-mp-cat-" + current_category_mp.substring(11)).disabled = false;
    }

    function update_slider_mp(slider) {
        let id = slider.id;
        if (id.includes("saline")) {
            current_answers_mp.set("saline pollution", range_pollution_values.get("saline pollution").get(parseInt(slider.value)));
        }
        else if (id.includes("environment")) {
            current_answers_mp.set("environment pollution", range_pollution_values.get("environment pollution").get(parseInt(slider.value)));
        }
        else if (id.includes("application")) {
            current_answers_mp.set("application pollution", range_pollution_values.get("application pollution").get(parseInt(slider.value)));
        }
        else if (id.includes("protection")) {
            current_answers_mp.set("protection level", range_pollution_values.get("protection level").get(parseInt(slider.value)));
        }
    }

    function count_delta_t_entries() {
        return document.getElementsByClassName("delta-T-entry-mp").length;
    }

    function calculate_delta_T_value_mp() {
        let delta_t_value = 0;
        let count = 0;
        var re = new RegExp('[0-9]+\.?[0-9]*');
        for (dt of document.getElementsByClassName("delta-T-entry-mp")) {
            if (re.exec(dt.value) == dt.value) {
                delta_t_value += dt.valueAsNumber;
                count += 1;
            }
        }
        if (count > 0) {
            document.getElementById("delta-t-value-mp").innerHTML = "Value : " + (delta_t_value / count).toFixed(2);
            current_answers_mp.set("delta t", document.getElementById("delta-t-value-mp").innerHTML.substring(8));
        }
        else {
            document.getElementById("delta-t-value-mp").innerHTML = "Value : ";
        }

    }

    function configure_category_mp() {
        current_answers_mp = new Map();
        if (current_category_mp.substring(11) == "1") {
            current_answers_mp.set("phase name", current_phase.get("phase name"));
            if (current_phase.get("phase name") != null) {
                document.getElementById("phase-name-entry").value = current_phase.get("phase name");
            }
            current_answers_mp.set("phase type", current_phase.get("phase type"));
            if (current_phase.get("phase type") != null) {
                document.getElementById("radio-" + current_phase.get("phase type").toLowerCase() + "-mp").checked = true;
            }
            current_answers_mp.set("unit onboard", current_phase.get("unit onboard"));
            if (current_phase.get("unit onboard") != null) {
                if (current_phase.get("unit onboard") == "on") {
                    if (document.getElementById("on-off-entry-mp").checked == true) {
                        document.getElementById("on-off-entry-mp").click();
                        document.getElementById("on-off-entry-mp").click();
                    }
                    else {
                        document.getElementById("on-off-entry-mp").click();
                    }
                }
                else {
                    if (document.getElementById("on-off-entry-mp").checked == true) {
                        document.getElementById("on-off-entry-mp").click();
                    }
                    else {
                        document.getElementById("on-off-entry-mp").click();
                        document.getElementById("on-off-entry-mp").click();
                    }
                }
            }
        }
        else if (current_category_mp.substring(11) == "2") {
            console.log("cldt : " + current_phase.get("calendar time"))
            current_answers_mp.set("calendar time", current_phase.get("calendar time"));
            if (current_phase.get("calendar time") != null) {
                document.getElementById("calendar-time-entry").value = current_phase.get("calendar time");
            }
            current_answers_mp.set("cycle duration", current_phase.get("cycle duration"));
            if (current_phase.get("cycle duration") != null) {
                document.getElementById("cycle-duration-entry").value = current_phase.get("cycle duration");
            }
            current_answers_mp.set("number of cycles", current_phase.get("number of cycles"));
            if (current_phase.get("number of cycles") != null) {
                document.getElementById("number-cycles-entry").value = current_phase.get("number of cycles");
            }
        }
        else if (current_category_mp.substring(11) == "3") {
            current_answers_mp.set("max temperature", current_phase.get("max temperature"));
            if (current_phase.get("max temperature") != null) {
                document.getElementById("max-temperature-entry").value = current_phase.get("max temperature");
            }
            current_answers_mp.set("ambient temperature", current_phase.get("ambient temperature"));
            if (current_phase.get("ambient temperature") != null) {
                document.getElementById("ambient-temperature-entry").value = current_phase.get("ambient temperature");
            }
            current_answers_mp.set("delta t", current_phase.get("delta t"));
            if (current_phase.get("delta t") != null) {
                document.getElementById("delta-T-entry-1").value = current_phase.get("delta t");
            }
            if (document.getElementById("temperature-mode-selection").checked = true) {
                document.getElementById("temperature-mode-selection").click();
            }

        }
        else if (current_category_mp.substring(11) == "4") {
            if (current_phase.get("phase type") == "In-orbit") {
                if (current_phase.get("random vibrations") != null) {
                    current_answers_mp.set("random vibrations", current_phase.get("random vibrations"));
                    document.getElementById("random-vibration-entry").value = current_phase.get("random vibrations");
                }
                else {
                    document.getElementById("random-vibration-entry").value = 0.01;
                    current_answers_mp.set("random vibrations", 0.01);
                }
                if (current_phase.get("humidity rate") != null) {
                    document.getElementById("humidity-rate-entry").value = current_phase.get("humidity rate");
                    current_answers_mp.set("humidity rate", current_phase.get("humidity rate"));
                }
                else {
                    document.getElementById("humidity-rate-entry").value = 0;
                    current_answers_mp.set("humidity rate", 0);
                }
            }
            else if (current_phase.get("phase type") == "Launch") {
                if (current_phase.get("random vibrations") != null) {
                    current_answers_mp.set("random vibrations", current_phase.get("random vibrations"));
                    document.getElementById("random-vibration-entry").value = current_phase.get("random vibrations");
                }
                else {
                    document.getElementById("random-vibration-entry").value = 18;
                    current_answers_mp.set("random vibrations", 18);
                }
            }
            else {
                current_answers_mp.set("random vibrations", current_phase.get("random vibrations"));
                if (current_phase.get("random vibrations") != null) {
                    document.getElementById("random-vibration-entry").value = current_phase.get("random vibrations");
                }
                current_answers_mp.set("humidity rate", current_phase.get("humidity rate"));
                if (current_phase.get("humidity rate") != null) {
                    document.getElementById("humidity-rate-entry").value = current_phase.get("humidity rate");
                }
            }
        }
        else if (current_category_mp.substring(11) == "5") {
            if (current_phase.get("phase type") == "In-orbit") {
                console.log(current_phase)
                if (current_phase.get("saline pollution") != null) {
                    current_answers_mp.set("saline pollution", current_phase.get("saline pollution"));
                    document.getElementById("saline-pollution-entry").value = range_pollution_values.get("saline pollution").keys(current_phase.get("saline pollution"))[0];
                    document.getElementById("saline-pollution-entry").click();
                }
                else {
                    document.getElementById("saline-pollution-entry").value = 0;
                    current_answers_mp.set("saline pollution", "low");
                    document.getElementById("saline-pollution-entry").click();
                }
                if (current_phase.get("environment pollution") != null) {
                    current_answers_mp.set("environment pollution", current_phase.get("environment pollution"));
                    document.getElementById("environment-pollution-entry").value = range_pollution_values.get("environment pollution").keys(current_phase.get("environment pollution"))[0];
                    document.getElementById("environment-pollution-entry").click();
                }
                else {
                    document.getElementById("environment-pollution-entry").value = 0;
                    current_answers_mp.set("environment pollution", "low");
                    document.getElementById("environment-pollution-entry").click();
                }
                if (current_phase.get("application pollution") != null) {
                    current_answers_mp.set("application pollution", current_phase.get("application pollution"));
                    document.getElementById("application-pollution-entry").value = range_pollution_values.get("application pollution").keys(current_phase.get("application pollution"))[0];
                    document.getElementById("application-pollution-entry").click();
                }
                else {
                    document.getElementById("application-pollution-entry").value = 0;
                    current_answers_mp.set("application pollution", "low");
                    document.getElementById("application-pollution-entry").click();
                }
                if (current_phase.get("protection level") != null) {
                    current_answers_mp.set("protection level", current_phase.get("protection level"));
                    document.getElementById("protection-level-entry").value = range_pollution_values.get("protection level").keys(current_phase.get("protection level"))[0];;
                    document.getElementById("protection-level-entry").click();
                }
                else {
                    document.getElementById("protection-level-entry").value = 0;
                    current_answers_mp.set("protection level", "hermetic");
                    document.getElementById("protection-level-entry").click();
                }
            }
            else {
                current_answers_mp.set("saline pollution", current_phase.get("saline pollution"));
                if (current_phase.get("saline pollution") != null) {
                    document.getElementById("saline-pollution-entry").value = range_pollution_values.get("saline pollution").keys(current_phase.get("saline pollution"))[0];
                    document.getElementById("saline-pollution-entry").click();
                }
                current_answers_mp.set("environment pollution", current_phase.get("environment pollution"));
                if (current_phase.get("environment pollution") != null) {
                    document.getElementById("environment-pollution-entry").value = range_pollution_values.get("environment pollution").keys(current_phase.get("environment pollution"))[0];
                    document.getElementById("environment-pollution-entry").click();
                }
                current_answers_mp.set("application pollution", current_phase.get("application pollution"));
                if (current_phase.get("application pollution") != null) {
                    document.getElementById("application-pollution-entry").value = range_pollution_values.get("application pollution").keys(current_phase.get("application pollution"))[0];
                    document.getElementById("application-pollution-entry").click();
                }
                current_answers_mp.set("protection level", current_phase.get("protection level"));
                if (current_phase.get("protection level") != null) {
                    document.getElementById("protection-level-entry").value = range_pollution_values.get("protection level").keys(current_phase.get("protection level"))[0];
                    document.getElementById("protection-level-entry").click();
                }
            }

        }
    }

    function validate_category_mp() {
        if (check_cat_parameters_filled_mp()) {
            for ([ans, value] of current_answers_mp) {
                current_phase.set(ans, value);
            }
        }
        else {
            alert("It seems that some parameters are empty or not correctly filled. Please have a look and try again.")
        }
    }

    function check_cat_parameters_filled_mp() {
        var filled = true;
        for ([ans, value] of current_answers_mp) {
            console.log(value)
            console.log(value == null)
            console.log(value == '')
            if (value == null || value == '' && value != 0) {
                filled = false
            }
        }
        return filled
    }

    function check_all_parameters_filled_mp() {
        var filled = true;
        for ([ans, value] of current_phase) {
            if (value == null || value == '' && value != 0) {
                filled = false
            }
        }
        return filled
    }


    function fillInformationTableMP() {
        let new_line = document.createElement("tr");
        new_line.id = current_phase.get("phase name") + "-tabline-mp";
        new_line.className = "phase-information-line";
        new_line.addEventListener('dblclick', function (e) {
            edit_phase(this.id)
        })

        let new_parameter = document.createElement("td");
        let phase_icone = document.createElement("img");
        phase_icone.className = "sumup-icon-phase-mp";
        phase_icone.src = phase_type_images_mp.get(current_phase.get("phase type").replace(" ", ""));
        new_parameter.appendChild(phase_icone);
        new_line.appendChild(new_parameter);

        new_parameter = document.createElement("td");
        new_parameter.innerHTML = current_phase.get("phase name");
        new_line.appendChild(new_parameter);

        new_parameter = document.createElement("td");
        new_parameter.innerHTML = current_phase.get("unit onboard");
        new_line.appendChild(new_parameter);

        new_parameter = document.createElement("td");
        new_parameter.innerHTML = current_phase.get("calendar time") + " h";
        new_line.appendChild(new_parameter);

        new_parameter = document.createElement("td");
        new_parameter.innerHTML = current_phase.get("ambient temperature") + " &deg;C";
        new_line.appendChild(new_parameter);

        new_parameter = document.createElement("td");
        new_parameter.innerHTML = current_phase.get("delta t") + " &deg;C";
        new_line.appendChild(new_parameter);

        new_parameter = document.createElement("td");
        new_parameter.innerHTML = current_phase.get("cycle duration") + " h";
        new_line.appendChild(new_parameter);

        new_parameter = document.createElement("td");
        new_parameter.innerHTML = current_phase.get("number of cycles");
        new_line.appendChild(new_parameter);

        new_parameter = document.createElement("td");
        new_parameter.innerHTML = current_phase.get("max temperature") + " &deg;C";
        new_line.appendChild(new_parameter);

        new_parameter = document.createElement("td");
        new_parameter.innerHTML = current_phase.get("humidity rate") + " %";
        new_line.appendChild(new_parameter);

        new_parameter = document.createElement("td");
        new_parameter.innerHTML = current_phase.get("random vibrations") + " Grms";
        new_line.appendChild(new_parameter);

        new_parameter = document.createElement("td");
        new_parameter.innerHTML = current_phase.get("saline pollution");
        new_line.appendChild(new_parameter);

        new_parameter = document.createElement("td");
        new_parameter.innerHTML = current_phase.get("environment pollution");
        new_line.appendChild(new_parameter);

        new_parameter = document.createElement("td");
        new_parameter.innerHTML = current_phase.get("application pollution");
        new_line.appendChild(new_parameter);

        new_parameter = document.createElement("td");
        new_parameter.innerHTML = current_phase.get("protection level");
        new_line.appendChild(new_parameter);

        document.getElementById("phases-sum-up-mission-profile").appendChild(new_line);
    }

    function edit_line_mp(name_of_phase) {

        let phase_nodes = document.getElementById(name_of_phase).getElementsByTagName("td");

        phase_nodes[0].getElementsByTagName("img")[0].src = phase_type_images_mp.get(current_phase.get("phase type"));
        phase_nodes[1].innerHTML = current_phase.get("phase name")
        phase_nodes[2].innerHTML = current_phase.get("unit onboard");
        phase_nodes[3].innerHTML = current_phase.get("calendar time") + " h";
        phase_nodes[4].innerHTML = current_phase.get("ambient temperature") + " &deg;C";
        phase_nodes[5].innerHTML = current_phase.get("delta t") + " &deg;C";
        phase_nodes[6].innerHTML = current_phase.get("cycle duration") + " h";
        phase_nodes[7].innerHTML = current_phase.get("number of cycles");
        phase_nodes[8].innerHTML = current_phase.get("max temperature") + " &deg;C";
        phase_nodes[9].innerHTML = current_phase.get("humidity rate") + " %";
        phase_nodes[10].innerHTML = current_phase.get("random vibrations") + " Grms";
        phase_nodes[11].innerHTML = current_phase.get("saline pollution");
        phase_nodes[12].innerHTML = current_phase.get("environment pollution");
        phase_nodes[13].innerHTML = current_phase.get("application pollution");
        phase_nodes[14].innerHTML = current_phase.get("protection level");

        document.getElementById(name_of_phase).id = current_phase.get("phase name") + "-tabline-mp";
        document.getElementById(name_of_phase).addEventListener('dblclick', function (e) {
            edit_phase(this.id)
        })
    }

    function getByKey(map, value) {
        for (var element of map) {
            if (map[element] == value) {
                return map[element];
            }
        }
        return null;
    }



    function download(filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }


    function saveAnswersMP() {

        let data = "phase type,phase name,unit onboard,calendar time,ambient temperature,delta t,cycle duration,number of cycles,max temperature,humidity rate,random vibrations,saline pollution,environment pollution,application pollution,protection level;";

        for (var line of document.getElementsByClassName("phase-information-line")) {

            data = data + "\n";

            let phase_nodes = line.getElementsByTagName("td");

            let phase_type = convert_picture_to_phase(phase_nodes[0].getElementsByTagName("img")[0].src);
            data = data + phase_type + ",";
            data = data + phase_nodes[1].innerHTML + ",";
            data = data + phase_nodes[2].innerHTML + ",";
            data = data + phase_nodes[3].innerHTML.replace(" h", "") + ",";
            data = data + phase_nodes[4].innerHTML.replace(" °C", "") + ",";
            data = data + phase_nodes[5].innerHTML.replace(" °C", "") + ",";
            data = data + phase_nodes[6].innerHTML.replace(" h", "") + ",";
            data = data + phase_nodes[7].innerHTML + ",";
            data = data + phase_nodes[8].innerHTML.replace(" °C", "") + ",";
            data = data + phase_nodes[9].innerHTML.replace(" %", "") + ",";
            data = data + phase_nodes[10].innerHTML.replace(" Grms", "") + ",";
            data = data + phase_nodes[11].innerHTML + ",";
            data = data + phase_nodes[12].innerHTML + ",";
            data = data + phase_nodes[13].innerHTML + ",";
            data = data + phase_nodes[14].innerHTML + ";";
        }

        download("mission_profile_data.csv", data);

    }


    function exportAnswersMP() {

        let data = "";

        for (var line of document.getElementsByClassName("phase-information-line")) {

            data = data + "\n";

            let phase_nodes = line.getElementsByTagName("td");

            data = data + phase_nodes[1].innerHTML + ",";
            data = data + phase_nodes[2].innerHTML.toUpperCase() + ",";
            data = data + phase_nodes[3].innerHTML + ",";
            data = data + ",";
            data = data + phase_nodes[4].innerHTML + ",";
            data = data + ",";
            data = data + phase_nodes[5].innerHTML + ",";
            data = data + phase_nodes[6].innerHTML + ",";
            data = data + phase_nodes[7].innerHTML + ",";
            data = data + phase_nodes[8].innerHTML + ",";
            data = data + ",";
            data = data + phase_nodes[9].innerHTML.replace(" %", "") + ",";
            data = data + ",";
            data = data + phase_nodes[10].innerHTML + ",";
            data = data + ",";
            data = data + phase_nodes[11].innerHTML[0].toUpperCase() + phase_nodes[11].innerHTML.substring(1) + ",";
            data = data + phase_nodes[12].innerHTML[0].toUpperCase() + phase_nodes[12].innerHTML.substring(1) + ",";
            data = data + phase_nodes[13].innerHTML[0].toUpperCase() + phase_nodes[13].innerHTML.substring(1) + ",";
            data = data + phase_nodes[14].innerHTML[0].toUpperCase() + phase_nodes[14].innerHTML.substring(1);
        }

        download("mission_profile_expertool.csv", data);

    }

    function loadAnswers() {
        for (var line of document.getElementsByClassName("phase-information-line")) {
            line.remove();
        }
        let data = document.getElementById("question-load-mp").value;
        let first = true;
        if (data.includes("phase type,phase name,unit onboard,calendar time,ambient temperature,delta t,cycle duration,number of cycles,max temperature,humidity rate,random vibrations,saline pollution,environment pollution,application pollution,protection level;")) {
            for (var dt of data.split(";")) {
                if (!first && dt != "") {
                    let values = dt.split(",");
                    if (values.length == 15) {
                        current_phase = new Map([
                            ["phase type", values[0][0].toUpperCase() + values[0].substring(1)],
                            ["phase name", values[1]],
                            ["unit onboard", values[2]],
                            ["calendar time", values[3]],
                            ["ambient temperature", values[4]],
                            ["delta t", values[5]],
                            ["cycle duration", values[6]],
                            ["number of cycles", values[7]],
                            ["max temperature", values[8]],
                            ["humidity rate", values[9]],
                            ["random vibrations", values[10]],
                            ["saline pollution", values[11]],
                            ["environment pollution", values[12]],
                            ["application pollution", values[13]],
                            ["protection level", values[14]]
                        ])
                        fillInformationTableMP();
                    }
                    else{
                        alert("Data are not regular, please check they are not corrupted.")
                    }
                }
                else {
                    first = false;
                }
            }
            document.getElementById("load-answers-mp").disabled = true;
        }
        else{
            alert("Data are not regular, please check they are not corrupted.")
        }

    }

}

//#26B4D4; #1B7E94; #0D3C47; #0F4754; #092B33
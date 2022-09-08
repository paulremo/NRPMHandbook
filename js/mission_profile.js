// Copyright (C) Matrisk GmbH 2022

function runMissionprofile() {

    /* Define the phase that is being modified */
    let existing_phase_mp = null;

    /* Define the current category */
    var current_category_mp = "1";

    /* True if the general information category has been field for a new phase */
    let first_category_filled = false;

    /* Store the answers for the current phase */
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

    /* Give equivalence between 3 or 2 step sliders and their parameters value */
    let range_pollution_values = new Map([
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

    /* Invert the range_pollution_values */
    let range_pollution_keys = new Map([
        ["saline pollution", new Map([
            ["low", 0],
            ["high", 100]
        ])],
        ["environment pollution", new Map([
            ["low", 0],
            ["moderate", 50],
            ["high", 100]
        ])],
        ["application pollution", new Map([
            ["low", 0],
            ["moderate", 50],
            ["high", 100]
        ])],
        ["protection level", new Map([
            ["hermetic", 0],
            ["non hermetic", 100]
        ])]
    ]);

    /* Store all the answers for the mission profile */
    var current_answers_mp = new Map();

    /* Stores the name of phases to avoid duplicated names */
    var phases_names_mp = new Set();

    /* Collection of pictures for different categories */
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

    /* Collection of pictures for phase types */
    var phase_type_images_mp = new Map([
        ["Storage", "pictures/mission_profile/storage.svg"],
        ["Transport", "pictures/mission_profile/transport.svg"],
        ["Launch", "pictures/mission_profile/lauch.svg"],
        ["Reaching orbit", "pictures/mission_profile/reaching_orbit.svg"],
        ["In-orbit", "pictures/mission_profile/orbit.svg"],
        ["Other", "pictures/mission_profile/other.svg"]
    ])

    /* Initiate 2 steps sliders */
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

    /* Initiate 3 steps sliders */
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

    /* Update style for 3 steps sliders */
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

    /* Update style for 2 steps sliders */
    function changeSlider2(slider) {
        if (slider.value == 0) {
            slider.style.backgroundColor = "green"
        }
        else {
            slider.style.backgroundColor = "red"
        }
        update_slider_mp(slider);
    }

    /* Initiate categories style */
    for (ct of document.getElementsByClassName("cat-name-mp")) {
        if (ct.id != "cat-name-1") {
            ct.style.cursor = "not-allowed";
            ct.style.backgroundColor = "gray";
            ct.style.color = "white";
            ct.getElementsByTagName("img")[0].src = mp_categories_pictures.get(ct.id.substring(9)).get("unselected");
        }
    }

    /* Initiate categories events */
    for (var cat of document.getElementsByClassName("cat-name-mp")) {
        cat.onclick = function () {
            /* If the first category has been field for a new phase */
            if (first_category_filled) {
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
            else {
                /* If you are clicking on the first category for the first step of a new phase definition */
                if (this.id == "cat-name-1") {

                    for (card of document.getElementsByClassName("entry-card")) {
                        card.style.display = "none";
                    }
                    let id = this.id.substring(9);
                    this.style.backgroundColor = "#d7e9eb";
                    this.style.color = "black";
                    this.getElementsByTagName("img")[0].src = mp_categories_pictures.get(id).get("selected");
                    document.getElementById("entry-card-" + id).style.display = "block";
                    current_category_mp = "entry-card-" + id;
                    configure_category_mp();
                }
            }

        }
        cat.onmouseenter = function () {
            if (first_category_filled) {
                this.style.backgroundColor = "#1B7E94";
            }
            else {
                if (this.id == "cat-name-1") {
                    this.style.backgroundColor = "#1B7E94";
                }
            }
        }
        cat.onmouseleave = function () {
            if (first_category_filled) {
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
            else {
                if (this.id == "cat-name-1") {
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

        }
    }

    /* Initiates the radio buttons for phase types */
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

    /* Initiate the validation phase button that enables to add a phase to the table */
    document.getElementById("validate-phase-MP").onclick = function () {
        if (check_all_parameters_filled_mp()) {


            if (existing_phase_mp != null) {
                edit_line_mp(existing_phase_mp);
            }

            else {
                fillInformationTableMP();
            }

            /* Enables edition of the phase once validated */
            document.getElementById("edit-button-" + current_phase.get("phase name") + "-mp").disabled = false;

            /* Reinitiate interface for a new phase */

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



            for (ct of document.getElementsByClassName("cat-name-mp")) {
                if (ct.id != "cat-name-1") {
                    ct.style.cursor = "not-allowed";
                    ct.style.backgroundColor = "gray";
                    ct.style.color = "white";
                    ct.getElementsByTagName("img")[0].src = mp_categories_pictures.get(ct.id.substring(9)).get("unselected");
                }
            }

            existing_phase_mp = null;

            first_category_filled = false;

            document.getElementById("cat-name-1").click();
        }

        else {
            alert("Some values have not been filled.")
        }
    }
    document.getElementById("validate-phase-MP").disabled = true;

    /* Initiate the on off for onboard units */
    document.getElementById("on-off-entry-mp").onchange = function () {
        if (this.checked) {
            current_answers_mp.set("unit onboard", "ON");
            document.getElementById("on-off-switch-mp").style.backgroundColor = "#098324";
        }
        else {
            current_answers_mp.set("unit onboard", "OFF");
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

    /* Initiate the phase name input */
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

    /* Initiates the calendar time input */
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

    /* Initiates the cycle duration input */
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

    /* Initiates the number of cycles input */
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

    /* Initiates the ambient temperature input */
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

    /* Initiates the maximum temperature input */
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

    /* Initiates the random vibrations input */
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

    /* Initiates the humidity rate input */
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

    /* Initiates the delta t input */
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

    /* Initiates the button to calculate the delta t mean */
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

    /* Initiates the button to add delta t input */
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

    /* Initiates the button to save answers */
    document.getElementById("save-button-mp").onclick = function () {
        saveAnswersMP();
    }

    /* Initiates the button to export answers to ExperTool */
    document.getElementById("export-button-mp").onclick = function () {
        exportAnswersMP();
    }

    /* Initiates the button to load answers on the home page */
    document.getElementById("load-answers-mp").onclick = function () {
        loadAnswers();
    }

    /* Initiates the phase validation buttons */
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
        }
    }

    /* Initiates the information buttons */
    for (info_button of document.getElementsByClassName("info-button-mp")) {
        info_button.onclick = function () {
            document.getElementById("overlay-mp").style.display = 'block';
            document.getElementById("text-mp").innerHTML = infos_mp.get(this.getElementsByClassName("fa")[0].id.split('-')[3]);
        }
    }

    /* Initiates the close button for overlay */
    document.getElementById("overlay-close-mp").onclick = function () {
        document.getElementById("overlay-mp").style.display = 'none';
    }

    /* Initiates the buttons to a calculate time information dependinf on the two entered*/
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

    /* Convert the picture source to the equivalent phase type */
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

    /* Enables to modify a validated phase in the table */
    function edit_phase(name_of_phase) {

        if (check_all_phase_filled_mp(name_of_phase)) {
            let phase_nodes = document.getElementById(name_of_phase).getElementsByTagName("td");



            let text = "You will edit the phase called : " + phase_nodes[2].innerHTML + ". You will lose your current inputs, are you sure you want to edit ?";

            if (confirm(text) == true) {

                if (existing_phase_mp != null) {
                    document.getElementById(existing_phase_mp).remove();
                }


                existing_phase_mp = name_of_phase;

                console.log(phase_nodes[9].innerHTML.replace(" °C", ""))

                /* Configure the inpu interface to the data of the phase to modify */

                current_phase = new Map([
                    ["phase type", convert_picture_to_phase(phase_nodes[1].getElementsByTagName("img")[0].src)],
                    ["phase name", phase_nodes[2].innerHTML],
                    ["unit onboard", phase_nodes[3].innerHTML],
                    ["calendar time", phase_nodes[4].innerHTML.replace(" h", "")],
                    ["ambient temperature", phase_nodes[5].innerHTML.replace(" °C", "")],
                    ["delta t", phase_nodes[6].innerHTML.replace(" °C", "")],
                    ["cycle duration", phase_nodes[7].innerHTML.replace(" h", "")],
                    ["number of cycles", phase_nodes[8].innerHTML],
                    ["max temperature", phase_nodes[9].innerHTML.replace(" °C", "")],
                    ["humidity rate", phase_nodes[10].innerHTML.replace(" %", "")],
                    ["random vibrations", phase_nodes[11].innerHTML.replace(" Grms", "")],
                    ["saline pollution", phase_nodes[12].innerHTML],
                    ["environment pollution", phase_nodes[13].innerHTML],
                    ["application pollution", phase_nodes[14].innerHTML],
                    ["protection level", phase_nodes[15].innerHTML]
                ])

                first_category_filled = true;


                /* Free category buttons */
                for (ct of document.getElementsByClassName("cat-name-mp")) {
                    if (ct.id != "cat-name-1") {
                        ct.style.cursor = "pointer";
                        ct.style.backgroundColor = "";
                        ct.style.color = "white";
                        ct.getElementsByTagName("img")[0].src = mp_categories_pictures.get(ct.id.substring(9)).get("unselected");
                    }
                }

                document.getElementById("cat-name-1").click();

                document.getElementById("edit-button-" + current_phase.get("phase name") + "-mp").disabled = true;

            } else {

            }
        }
        else {
            let text = "You can't edit this line as it's not complete.";
            alert(text);
        }




    }

    /* Update recommendations for each parameter */
    function update_recom_mp(interactor) {
        let new_recom = recoms_mp.get(interactor);
        if (new_recom != "") {
            document.getElementById("mp-recoms-text").innerHTML = new_recom;
        }
    }

    /* Set default recom for the current category */
    function back_recom_mp() {
        let infos = infos_mp_categories.get(current_category_mp.substring(11));
        document.getElementById("mp-recoms-text").innerHTML = infos;
    }

    /* Set default configuration to all controllers */
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

    /* Enables validation of phase */
    function free_validation_category_mp() {
        document.getElementById("validate-mp-cat-" + current_category_mp.substring(11)).disabled = false;
    }

    /* Update sliders configuration to the current answer value */
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

    /* Count the number of delta t input controllers used */
    function count_delta_t_entries() {
        return document.getElementsByClassName("delta-T-entry-mp").length;
    }

    /* Calculate the delta t mean */
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

    /* Configure interface for the current category */
    function configure_category_mp() {
        reinitialize_interactors();
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
                if (current_phase.get("unit onboard") == "ON") {
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
                if (current_phase.get("saline pollution") != null) {
                    current_answers_mp.set("saline pollution", current_phase.get("saline pollution"));
                    document.getElementById("saline-pollution-entry").value = range_pollution_keys.get("saline pollution").get(current_phase.get("saline pollution"));
                    document.getElementById("saline-pollution-entry").click();
                }
                else {
                    document.getElementById("saline-pollution-entry").value = 0;
                    current_answers_mp.set("saline pollution", "low");
                    document.getElementById("saline-pollution-entry").click();
                }
                if (current_phase.get("environment pollution") != null) {
                    current_answers_mp.set("environment pollution", current_phase.get("environment pollution"));
                    document.getElementById("environment-pollution-entry").value = range_pollution_keys.get("environment pollution").get(current_phase.get("environment pollution"));
                    document.getElementById("environment-pollution-entry").click();
                }
                else {
                    document.getElementById("environment-pollution-entry").value = 0;
                    current_answers_mp.set("environment pollution", "low");
                    document.getElementById("environment-pollution-entry").click();
                }
                if (current_phase.get("application pollution") != null) {
                    current_answers_mp.set("application pollution", current_phase.get("application pollution"));
                    document.getElementById("application-pollution-entry").value = range_pollution_keys.get("application pollution").get(current_phase.get("application pollution"));
                    document.getElementById("application-pollution-entry").click();
                }
                else {
                    document.getElementById("application-pollution-entry").value = 0;
                    current_answers_mp.set("application pollution", "low");
                    document.getElementById("application-pollution-entry").click();
                }
                if (current_phase.get("protection level") != null) {
                    current_answers_mp.set("protection level", current_phase.get("protection level"));
                    document.getElementById("protection-level-entry").value = range_pollution_keys.get("protection level").get(current_phase.get("protection level"));;
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
                    document.getElementById("saline-pollution-entry").value = range_pollution_keys.get("saline pollution").get(current_phase.get("saline pollution"));
                    document.getElementById("saline-pollution-entry").click();
                }
                current_answers_mp.set("environment pollution", current_phase.get("environment pollution"));
                if (current_phase.get("environment pollution") != null) {
                    document.getElementById("environment-pollution-entry").value = range_pollution_keys.get("environment pollution").get(current_phase.get("environment pollution"));
                    document.getElementById("environment-pollution-entry").click();
                }
                current_answers_mp.set("application pollution", current_phase.get("application pollution"));
                if (current_phase.get("application pollution") != null) {
                    document.getElementById("application-pollution-entry").value = range_pollution_keys.get("application pollution").get(current_phase.get("application pollution"));
                    document.getElementById("application-pollution-entry").click();
                }
                current_answers_mp.set("protection level", current_phase.get("protection level"));
                if (current_phase.get("protection level") != null) {
                    document.getElementById("protection-level-entry").value = range_pollution_keys.get("protection level").get(current_phase.get("protection level"));
                    document.getElementById("protection-level-entry").click();
                }
            }

        }
    }

    /* Store the category input data on category validation */
    function validate_category_mp() {
        if (current_category_mp.substring(11) == "1") {
            if (check_cat_parameters_filled_mp()) {
                for ([ans, value] of current_answers_mp) {
                    current_phase.set(ans, value);
                }
                existing_phase_mp = current_phase.get("phase name") + "-tabline-mp";
                if (first_category_filled) {
                    edit_line_mp(existing_phase_mp);
                    document.getElementById("edit-button-" + current_phase.get("phase name") + "-mp").disabled = true;
                }
                else {
                    fillInformationTableMP();
                    document.getElementById("edit-button-" + current_phase.get("phase name") + "-mp").disabled = true;
                    first_category_filled = true;
                    for (ct of document.getElementsByClassName("cat-name-mp")) {
                        if (ct.id != "cat-name-1") {
                            ct.style.cursor = "pointer";
                            ct.style.backgroundColor = "";
                            ct.style.color = "white";
                            ct.getElementsByTagName("img")[0].src = mp_categories_pictures.get(ct.id.substring(9)).get("unselected");
                        }
                    }
                }

            }
            else {
                alert("It seems that some parameters are empty or not correctly filled. Please have a look and try again.")
            }
        }
        else {
            if (check_cat_parameters_filled_mp()) {
                for ([ans, value] of current_answers_mp) {
                    current_phase.set(ans, value);
                }
                existing_phase_mp = current_phase.get("phase name") + "-tabline-mp";
                edit_line_mp(existing_phase_mp);
            }
            else {
                alert("It seems that some parameters are empty or not correctly filled. Please have a look and try again.")
            }
        }

    }

    /* Check that all the parameters of the category are filled */
    function check_cat_parameters_filled_mp() {
        var filled = true;
        for ([ans, value] of current_answers_mp) {
            if (value == null || value == '' && value != 0) {
                filled = false
            }
        }
        return filled
    }

    /* Check that alle the parameters of the phase are filled */
    function check_all_parameters_filled_mp() {
        var filled = true;
        for ([ans, value] of current_phase) {
            if (value == null || value == '' && value != 0) {
                filled = false
            }
        }
        return filled
    }

    /* Check that all the parameters of a line in the table are filled */
    function check_all_phase_filled_mp(name_of_phase) {
        if (document.getElementById(name_of_phase) == null) {
            return false;
        }
        else {
            let phase_nodes = document.getElementById(name_of_phase).getElementsByTagName("td");
            var filled = true;
            for (var dt of phase_nodes) {
                if (dt.innerHTML == '') {
                    filled = false
                }
            }
            return filled
        }

    }

    /* Fill the table depending on information stored in the interface */
    function fillInformationTableMP() {

        let name = current_phase.get("phase name");

        let new_line = document.createElement("tr");
        new_line.id = current_phase.get("phase name") + "-tabline-mp";
        new_line.className = "phase-information-line";

        let new_parameter = document.createElement("td");
        let edit_button = document.createElement("button");
        edit_button.id = "edit-button-" + current_phase.get("phase name") + "-mp";
        edit_button.innerHTML = "<i class='fa fa-edit'></i></button>";
        edit_button.onclick = function () {
            edit_phase(name + "-tabline-mp");
        }
        new_parameter.appendChild(edit_button);
        new_line.appendChild(new_parameter);

        new_parameter = document.createElement("td");
        let phase_icone = document.createElement("img");
        phase_icone.className = "sumup-icon-phase-mp";
        phase_icone.src = phase_type_images_mp.get(current_phase.get("phase type"));
        new_parameter.appendChild(phase_icone);
        new_line.appendChild(new_parameter);


        new_parameter = document.createElement("td");
        if (current_phase.get("phase name") != null) {
            new_parameter.innerHTML = current_phase.get("phase name");
        }
        else {
            new_parameter.innerHTML = "";
        }
        new_line.appendChild(new_parameter);

        new_parameter = document.createElement("td");
        if (current_phase.get("unit onboard") != null) {
            new_parameter.innerHTML = current_phase.get("unit onboard").toUpperCase();
        }
        else {
            new_parameter.innerHTML = "";
        }
        new_line.appendChild(new_parameter);

        new_parameter = document.createElement("td");
        if (current_phase.get("calendar time") != null) {
            new_parameter.innerHTML = current_phase.get("calendar time");
        }
        else {
            new_parameter.innerHTML = "";
        }
        new_line.appendChild(new_parameter);

        new_parameter = document.createElement("td");
        if (current_phase.get("ambient temperature") != null) {
            new_parameter.innerHTML = current_phase.get("ambient temperature");
        }
        else {
            new_parameter.innerHTML = "";
        }
        new_line.appendChild(new_parameter);

        new_parameter = document.createElement("td");
        if (current_phase.get("delta t") != null) {
            new_parameter.innerHTML = current_phase.get("delta t");
        }
        else {
            new_parameter.innerHTML = "";
        }
        new_line.appendChild(new_parameter);

        new_parameter = document.createElement("td");
        if (current_phase.get("cycle duration") != null) {
            new_parameter.innerHTML = current_phase.get("cycle duration");
        }
        else {
            new_parameter.innerHTML = "";
        }
        new_line.appendChild(new_parameter);

        new_parameter = document.createElement("td");
        if (current_phase.get("number of cycles") != null) {
            new_parameter.innerHTML = current_phase.get("number of cycles");
        }
        else {
            new_parameter.innerHTML = "";
        }
        new_line.appendChild(new_parameter);

        new_parameter = document.createElement("td");
        if (current_phase.get("max temperature") != null) {
            new_parameter.innerHTML = current_phase.get("max temperature");
        }
        else {
            new_parameter.innerHTML = "";
        }
        new_line.appendChild(new_parameter);

        new_parameter = document.createElement("td");
        if (current_phase.get("humidity rate") != null) {
            new_parameter.innerHTML = current_phase.get("humidity rate");
        }
        else {
            new_parameter.innerHTML = "";
        }
        new_line.appendChild(new_parameter);

        new_parameter = document.createElement("td");
        if (current_phase.get("random vibrations") != null) {
            new_parameter.innerHTML = current_phase.get("random vibrations");
        }
        else {
            new_parameter.innerHTML = "";
        }
        new_line.appendChild(new_parameter);

        new_parameter = document.createElement("td");
        if (current_phase.get("saline pollution") != null) {
            new_parameter.innerHTML = current_phase.get("saline pollution");
        }
        else {
            new_parameter.innerHTML = "";
        }
        new_line.appendChild(new_parameter);

        new_parameter = document.createElement("td");
        if (current_phase.get("environment pollution") != null) {
            new_parameter.innerHTML = current_phase.get("environment pollution");
        }
        else {
            new_parameter.innerHTML = "";
        }
        new_line.appendChild(new_parameter);

        new_parameter = document.createElement("td");
        if (current_phase.get("application pollution") != null) {
            new_parameter.innerHTML = current_phase.get("application pollution");
        }
        else {
            new_parameter.innerHTML = "";
        }
        new_line.appendChild(new_parameter);

        new_parameter = document.createElement("td");
        if (current_phase.get("protection level") != null) {
            new_parameter.innerHTML = current_phase.get("protection level");
        }
        else {
            new_parameter.innerHTML = "";
        }
        new_line.appendChild(new_parameter);

        document.getElementById("phases-sum-up-mission-profile").appendChild(new_line);
    }

    /* Edit the line of the table dedicated to the current phase */
    function edit_line_mp(name_of_phase) {


        let phase_nodes = document.getElementById(name_of_phase).getElementsByTagName("td");

        if (current_phase.get("phase type") != null) {
            phase_nodes[1].getElementsByTagName("img")[0].src = phase_type_images_mp.get(current_phase.get("phase type"));
        }
        else {
            phase_nodes[1].innerHTML = "";
        }
        if (current_phase.get("phase name") != null) {
            phase_nodes[2].innerHTML = current_phase.get("phase name");
            document.getElementById(name_of_phase).id = current_phase.get("phase name") + "-tabline-mp";
        }
        else {
            phase_nodes[2].innerHTML = "";
        }
        if (current_phase.get("unit onboard") != null) {
            phase_nodes[3].innerHTML = current_phase.get("unit onboard").toUpperCase();
        }
        else {
            phase_nodes[3].innerHTML = "";
        }
        if (current_phase.get("calendar time") != null) {
            phase_nodes[4].innerHTML = current_phase.get("calendar time");
        }
        else {
            phase_nodes[4].innerHTML = "";
        }
        if (current_phase.get("ambient temperature") != null) {
            phase_nodes[5].innerHTML = current_phase.get("ambient temperature");
        }
        else {
            phase_nodes[5].innerHTML = "";
        }
        if (current_phase.get("delta t") != null) {
            phase_nodes[6].innerHTML = current_phase.get("delta t");
        }
        else {
            phase_nodes[6].innerHTML = "";
        }
        if (current_phase.get("cycle duration") != null) {
            phase_nodes[7].innerHTML = current_phase.get("cycle duration");
        }
        else {
            phase_nodes[7].innerHTML = "";
        }
        if (current_phase.get("number of cycles") != null) {
            phase_nodes[8].innerHTML = current_phase.get("number of cycles");
        }
        else {
            phase_nodes[8].innerHTML = "";
        }
        if (current_phase.get("max temperature") != null) {
            phase_nodes[9].innerHTML = current_phase.get("max temperature");
        }
        else {
            phase_nodes[9].innerHTML = "";
        }
        if (current_phase.get("humidity rate") != null) {
            phase_nodes[10].innerHTML = current_phase.get("humidity rate");
        }
        else {
            phase_nodes[10].innerHTML = "";
        }
        if (current_phase.get("random vibrations") != null) {
            phase_nodes[11].innerHTML = current_phase.get("random vibrations");
        }
        else {
            phase_nodes[11].innerHTML = "";
        }
        if (current_phase.get("saline pollution") != null) {
            phase_nodes[12].innerHTML = current_phase.get("saline pollution");
        }
        else {
            phase_nodes[12].innerHTML = "";
        }
        if (current_phase.get("environment pollution") != null) {
            phase_nodes[13].innerHTML = current_phase.get("environment pollution");
        }
        else {
            phase_nodes[13].innerHTML = "";
        }
        if (current_phase.get("application pollution") != null) {
            phase_nodes[14].innerHTML = current_phase.get("application pollution");
        }
        else {
            phase_nodes[14].innerHTML = "";
        }
        if (current_phase.get("protection level") != null) {
            phase_nodes[15].innerHTML = current_phase.get("protection level");
        }
        else {
            phase_nodes[15].innerHTML = "";
        }

        let name = current_phase.get("phase name");

        document.getElementById(name_of_phase).id = name + "-tabline-mp";
    }

    /* Enables to download a file containing the text desired */
    function download(filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }

    /* Save current answers in a text file to be reused when the user comes back to the interface */
    function saveAnswersMP() {

        let data = "phase type,phase name,unit onboard,calendar time,ambient temperature,delta t,cycle duration,number of cycles,max temperature,humidity rate,random vibrations,saline pollution,environment pollution,application pollution,protection level;";

        for (var line of document.getElementsByClassName("phase-information-line")) {

            data = data + "\n";

            let phase_nodes = line.getElementsByTagName("td");

            if (phase_nodes[1].innerHTML != "") {
                let phase_type = convert_picture_to_phase(phase_nodes[1].getElementsByTagName("img")[0].src);
                data = data + phase_type + ",";
            }
            else {
                data = data + ",";
            }
            if (phase_nodes[2].innerHTML != "") {
                data = data + phase_nodes[2].innerHTML + ",";
            }
            else {
                data = data + ",";
            }
            if (phase_nodes[3].innerHTML != "") {
                data = data + phase_nodes[3].innerHTML + ",";
            }
            else {
                data = data + ",";
            }
            if (phase_nodes[4].innerHTML != "") {
                data = data + phase_nodes[4].innerHTML.replace(" h", "") + ",";
            }
            else {
                data = data + ",";
            }
            if (phase_nodes[5].innerHTML != "") {
                data = data + phase_nodes[5].innerHTML.replace(" °C", "") + ",";
            }
            else {
                data = data + ",";
            }
            if (phase_nodes[6].innerHTML != "") {
                data = data + phase_nodes[6].innerHTML.replace(" °C", "") + ",";
            }
            else {
                data = data + ",";
            }
            if (phase_nodes[7].innerHTML != "") {
                data = data + phase_nodes[7].innerHTML.replace(" h", "") + ",";
            }
            else {
                data = data + ",";
            }
            if (phase_nodes[8].innerHTML != "") {
                data = data + phase_nodes[8].innerHTML + ",";
            }
            else {
                data = data + ",";
            }
            if (phase_nodes[9].innerHTML != "") {
                data = data + phase_nodes[9].innerHTML.replace(" °C", "") + ",";
            }
            else {
                data = data + ",";
            }
            if (phase_nodes[10].innerHTML != "") {
                data = data + phase_nodes[10].innerHTML.replace(" %", "") + ",";
            }
            else {
                data = data + ",";
            }
            if (phase_nodes[11].innerHTML != "") {
                data = data + phase_nodes[11].innerHTML.replace(" Grms", "") + ",";
            }
            else {
                data = data + ",";
            }
            if (phase_nodes[12].innerHTML != "") {
                data = data + phase_nodes[12].innerHTML + ",";
            }
            else {
                data = data + ",";
            }
            if (phase_nodes[13].innerHTML != "") {
                data = data + phase_nodes[13].innerHTML + ",";
            }
            else {
                data = data + ",";
            }
            if (phase_nodes[14].innerHTML != "") {
                data = data + phase_nodes[14].innerHTML + ",";
            }
            else {
                data = data + ",";
            }
            if (phase_nodes[15].innerHTML != "") {
                data = data + phase_nodes[15].innerHTML + ";";
            }
            else {
                data = data + ",";
            }
        }
        download("mission_profile_data.csv", data);
    }

    /* Save current answers in a csv file to be reused in the ExperTool interface */
    function exportAnswersMP() {

        let data = "";

        for (var line of document.getElementsByClassName("phase-information-line")) {

            data = data + "\n";

            let phase_nodes = line.getElementsByTagName("td");

            if (phase_nodes[2].innerHTML != "") {
                data = data + phase_nodes[2].innerHTML + ",";
            }
            else {
                data = data + ",";
            }
            if (phase_nodes[3].innerHTML != "") {
                data = data + phase_nodes[3].innerHTML.toUpperCase() + ",";
            }
            else {
                data = data + ",";
            }
            if (phase_nodes[4].innerHTML != "") {
                data = data + phase_nodes[4].innerHTML + ",";
            }
            else {
                data = data + ",";
            }
            data = data + ",";
            if (phase_nodes[5].innerHTML != "") {
                data = data + phase_nodes[5].innerHTML.replace(" &deg;", "°") + ",";
            }
            else {
                data = data + ",";
            }
            data = data + ",";
            if (phase_nodes[6].innerHTML != "") {
                data = data + phase_nodes[6].innerHTML.replace(" &deg;", "°") + ",";
            }
            else {
                data = data + ",";
            }
            if (phase_nodes[7].innerHTML != "") {
                data = data + phase_nodes[7].innerHTML + ",";
            }
            else {
                data = data + ",";
            }
            if (phase_nodes[8].innerHTML != "") {
                data = data + phase_nodes[8].innerHTML + ",";
            }
            else {
                data = data + ",";
            }
            if (phase_nodes[9].innerHTML != "") {
                data = data + phase_nodes[9].innerHTML.replace(" &deg;", "°") + ",";
            }
            else {
                data = data + ",";
            }
            data = data + ",";
            if (phase_nodes[10].innerHTML != "") {
                data = data + phase_nodes[10].innerHTML.replace(" %", "") + ",";
            }
            else {
                data = data + ",";
            }
            data = data + ",";
            if (phase_nodes[11].innerHTML != "") {
                data = data + phase_nodes[11].innerHTML + ",";
            }
            else {
                data = data + ",";
            }
            data = data + ",";
            if (phase_nodes[12].innerHTML != "") {
                data = data + phase_nodes[12].innerHTML[0].toUpperCase() + phase_nodes[12].innerHTML.substring(1) + ",";
            }
            else {
                data = data + ",";
            }
            if (phase_nodes[13].innerHTML != "") {
                data = data + phase_nodes[13].innerHTML[0].toUpperCase() + phase_nodes[13].innerHTML.substring(1) + ",";
            }
            else {
                data = data + ",";
            }
            if (phase_nodes[14].innerHTML != "") {
                data = data + phase_nodes[14].innerHTML[0].toUpperCase() + phase_nodes[14].innerHTML.substring(1) + ",";
            }
            else {
                data = data + ",";
            }
            if (phase_nodes[15].innerHTML != "") {
                data = data + phase_nodes[15].innerHTML[0].toUpperCase() + phase_nodes[15].innerHTML.substring(1);
            }
            else {
                data = data + ",";
            }
        }

        download("mission_profile_expertool.csv", data);

    }

    /* Enables to load the answers saved in the text file at the beginning of the interface */
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
                        current_phase = new Map();
                        if (values[0] != "") {
                            current_phase.set("phase type", values[0].substring(1));
                        }
                        else {
                            current_phase.set("phase type", null);
                        }
                        if (values[1] != "") {
                            current_phase.set("phase name", values[1]);
                        }
                        else {
                            current_phase.set("phase name", null);
                        }
                        if (values[2] != "") {
                            current_phase.set("unit onboard", values[2]);
                        }
                        else {
                            current_phase.set("unit onboard", null);
                        }
                        if (values[3] != "") {
                            current_phase.set("calendar time", values[3]);
                        }
                        else {
                            current_phase.set("calendar time", null);
                        }
                        if (values[4] != "") {
                            current_phase.set("ambient temperature", values[4]);
                        }
                        else {
                            current_phase.set("ambient temperature", null);
                        }
                        if (values[5] != "") {
                            current_phase.set("delta t", values[5]);
                        }
                        else {
                            current_phase.set("delta t", null);
                        }
                        if (values[6] != "") {
                            current_phase.set("cycle duration", values[6]);
                        }
                        else {
                            current_phase.set("cycle duration", null);
                        }
                        if (values[7] != "") {
                            current_phase.set("number of cycles", values[7]);
                        }
                        else {
                            current_phase.set("number of cycles", null);
                        }
                        if (values[8] != "") {
                            current_phase.set("max temperature", values[8]);
                        }
                        else {
                            current_phase.set("max temperature", null);
                        }
                        if (values[9] != "") {
                            current_phase.set("humidity rate", values[9]);
                        }
                        else {
                            current_phase.set("humidity rate", null);
                        }
                        if (values[10] != "") {
                            current_phase.set("random vibrations", values[10]);
                        }
                        else {
                            current_phase.set("random vibrations", null);
                        }
                        if (values[11] != "") {
                            current_phase.set("saline pollution", values[11]);
                        }
                        else {
                            current_phase.set("saline pollution", null);
                        }
                        if (values[12] != "") {
                            current_phase.set("environment pollution", values[12]);
                        }
                        else {
                            current_phase.set("environment pollution", null);
                        }
                        if (values[13] != "") {
                            current_phase.set("application pollution", values[13]);
                        }
                        else {
                            current_phase.set("application pollution", null);
                        }
                        if (values[14] != "") {
                            current_phase.set("protection level", values[14]);
                        }
                        else {
                            current_phase.set("protection level", null);
                        }
                        fillInformationTableMP();

                    }
                    else {
                        alert("Data are not regular, please check they are not corrupted.")
                    }
                }
                else {
                    first = false;
                }
            }
            document.getElementById("load-answers-mp").disabled = true;
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



            for (ct of document.getElementsByClassName("cat-name-mp")) {
                if (ct.id != "cat-name-1") {
                    ct.style.cursor = "not-allowed";
                    ct.style.backgroundColor = "gray";
                    ct.style.color = "white";
                    ct.getElementsByTagName("img")[0].src = mp_categories_pictures.get(ct.id.substring(9)).get("unselected");
                }
            }

            existing_phase_mp = null;

            first_category_filled = false;

            document.getElementById("cat-name-1").click();
        }
        else {
            alert("Data are not regular, please check they are not corrupted.")
        }

    }

}

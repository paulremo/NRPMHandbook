function runCapacitorFamilyGuide() {

    /* Defines the current flow of the interface */
    let answering_speed = 1500;


    /* Configure the slow flow button */
    document.getElementById("slow_capacitor_guide").onclick = function() {
        this.disabled = true;
        this.className = "selected_speed_capacitor";
        document.getElementById("medium_capacitor_guide").disabled = false;
        document.getElementById("medium_capacitor_guide").className = "";
        document.getElementById("fast_capacitor_guide").disabled = false;
        document.getElementById("fast_capacitor_guide").className = "";

        answering_speed = 2500;
    }

    /* Configure the medium flow button */
    document.getElementById("medium_capacitor_guide").onclick = function() {
        this.disabled = true;
        this.className = "selected_speed_capacitor";
        document.getElementById("slow_capacitor_guide").disabled = false;
        document.getElementById("slow_capacitor_guide").className = "";
        document.getElementById("fast_capacitor_guide").disabled = false;
        document.getElementById("fast_capacitor_guide").className = "";

        answering_speed = answering_speed;
    }

    /* Configure the fast flow button */
    document.getElementById("fast_capacitor_guide").onclick = function() {
        this.disabled = true;
        this.className = "selected_speed_capacitor";
        document.getElementById("medium_capacitor_guide").disabled = false;
        document.getElementById("medium_capacitor_guide").className = "";
        document.getElementById("slow_capacitor_guide").disabled = false;
        document.getElementById("slow_capacitor_guide").className = "";

        answering_speed = 500;
    }

    /* Set the medium button as default */
    document.getElementById("medium_capacitor_guide").click();

    /* Defines the conversation container */
    let conv_container = document.getElementById("messages_track_capacitor");

    let buttons = new Map();

    /* Defines all the data concerning the current component */

    let component_group = null;
    let component_name = "";
    let component_type = null;
    let component_CV = null;
    let component_CV_type = null;
    let component_polymer_terminations = false;

    let component_case = null;
    let component_sealing = null;
    let component_packaging = null;

    let component_humidity = null;
    let component_pi_film_grade = 0;
    let component_pi_film;

    /* Defines data for capacitor types */
    let ceramic_categories = new Map([
        [1, new Map([
            [false, new Map([
                ["LOW", "ECCC_01"],
                ["MEDIUM", "ECCC_02"],
                ["HIGH", "ECCC_03"]
            ])]
        ])],
        [2, new Map([
            [false, new Map([
                ["LOW", "ECCC_04"],
                ["MEDIUM", "ECCC_05"],
                ["HIGH", "ECCC_06"]
            ])],
            [true, new Map([
                ["LOW", "ECCC_07"],
                ["MEDIUM", "ECCC_08"],
                ["HIGH", "ECCC_08"]
            ])],
        ])],
    ])

    /* Display message containing only text */
    function displayTextMessage(text) {
        let div = document.createElement("div");
        div.setAttribute("class", "other-message");
        let par = document.createElement("p");
        par.style.color = "white";
        par.innerHTML = text;
        div.appendChild(par);
        conv_container.appendChild(div);
        document.getElementById("astroPicture_capacitor").setAttribute("src", "../../_static/images/new_astronaut_speaks.svg");
    }


    /* Run initial step of the guide to explain how it will work */
    function runB0() {

        displayTextMessage("Welcome to the capacitor family guide !");

        setTimeout(() => {
            displayTextMessage("Here you'll be able to determine the reference of your capacitor component.");

            setTimeout(() => {
                displayTextMessage("Let me guide you through the different steps and you should be able to find the answer !");

                document.getElementById("astroPicture_capacitor").setAttribute("src", "../../_static/images/new_astronaut_speaks.svg");

                setTimeout(() => {
                    let buttonOK = document.createElement("button");
                    buttonOK.innerHTML = "OK";
                    buttonOK.className = "button-next";
                    buttonOK.setAttribute("id", "nextbutton");
                    buttonOK.onclick = function () {
                        this.disabled = true;
                        runB1();
                    }

                    let div = document.createElement("div");
                    div.setAttribute("class", "my-message");
                    div.appendChild(buttonOK);
                    conv_container.appendChild(div);
                    document.getElementById("astroPicture_capacitor").setAttribute("src", "../../_static/images/new_astronaut_happy.svg");
                }, answering_speed);

            }, answering_speed);

        }, answering_speed);
    }

    /* Step that asks the name of the component */
    function runB1() {

        displayTextMessage("Awesome ! So can you give me the name of your component ?");

        document.getElementById("astroPicture_capacitor").setAttribute("src", "../../_static/images/new_astronaut_speaks.svg");

        setTimeout(() => {
            let div = document.createElement("div");
            div.setAttribute("class", "my-message");
            let inputComponent = document.createElement("div");
            let ipt = document.createElement("input");
            ipt.setAttribute("type", "text");
            ipt.setAttribute("id", "inputComponent");
            let sbt = document.createElement("button");
            sbt.innerHTML = "ok";
            inputComponent.appendChild(ipt);
            inputComponent.appendChild(sbt);
            div.appendChild(inputComponent);
            conv_container.appendChild(div);
            document.getElementById("astroPicture_capacitor").setAttribute("src", "../../_static/images/new_astronaut.svg");
            sbt.onclick = function () {
                this.disabled = true;
                document.getElementById('inputComponent').disabled = true;
                runB2a();
            }

        }, answering_speed);
    }

    /* Step from step 1 that check if the capacitor group determined from the name suits to user's expactations */
    function runB2a() {
        component_name = document.getElementById('inputComponent').value.toUpperCase();
        document.getElementById("astroPicture_capacitor").setAttribute("src", "../../_static/images/new_astronaut_speaks.svg");
        let family = null;
        if (document.getElementById('inputComponent').value.toUpperCase().includes("CERAMIC")) {
            family = "ceramic";
        }
        else if (document.getElementById('inputComponent').value.toUpperCase().includes("TANTALUM")) {
            family = "tantalum";
        }
        else if (document.getElementById('inputComponent').value.toUpperCase().includes("PLASTIC") || document.getElementById('inputComponent').value.toUpperCase().includes("METALLIZED")) {
            family = "plastic metallized";
        }
        else if (document.getElementById('inputComponent').value.toUpperCase().includes("GLASS")) {
            family = "glass";
        }
        else if (document.getElementById('inputComponent').value.toUpperCase().includes("MICA")) {
            family = "mica";
        }
        else if (document.getElementById('inputComponent').value.toUpperCase().includes("ALUMINIUM") || document.getElementById('inputComponent').value.toUpperCase().includes(" ALU") || document.getElementById('inputComponent').value.toUpperCase().includes("-ALU")) {
            family = "aluminium";
        }
        else if (document.getElementById('inputComponent').value.toUpperCase().includes("TRANSISTOR")) {
            family = "semiconductor";
        }
        else {
            family = null
        }

        if (family != null) {
            displayTextMessage("It seems to be a <b>" + family + "</b> capacitor component. Do you agree with that ?");
            setTimeout(() => {
                let yesB2a = document.createElement("button");
                yesB2a.innerHTML = "Yes I do";

                let noB2a = document.createElement("button");
                noB2a.innerHTML = "No, I don't think so";

                yesB2a.onclick = function () {
                    this.disabled = true;
                    noB2a.disabled = true;
                    if (family == "ceramic") {
                        runB3ceramic();
                    }
                    else if (family == "tantalum") {
                        runB3tantalum();
                    }
                    else if (family == "plastic metallized"){
                        runB3plastic();
                    }
                    else if (family == "glass"){
                        runB3glass();
                    }
                    else if (family == "mica"){
                        runB3mica();
                    }
                    else if (family == "aluminium"){
                        runB3alu();
                    }
                    else if (family == "semiconductor"){
                        runB3semiconductor();
                    }
                }

                noB2a.onclick = function () {
                    this.disabled = true;
                    yesB2a.disabled = true;
                    runB2b();
                }

                let div = document.createElement("div");
                div.setAttribute("class", "my-message");
                div.appendChild(yesB2a);
                div.appendChild(noB2a);
                conv_container.appendChild(div);
                document.getElementById("astroPicture_capacitor").setAttribute("src", "../../_static/images/new_astronaut.svg");
            }, answering_speed);
        }
        else {
            displayTextMessage("I did not find the family of your component.");
            setTimeout(() => {
                runB2b();
            }, answering_speed);
        }

    }


    /* Step from step 1 that displays all capacitors groups if not determined from name */
    function runB2b() {
        displayTextMessage("Is your component from one of these groups ?");

        setTimeout(() => {
            let ceramic_button = document.createElement("button");
            ceramic_button.innerHTML = "Ceramic";
            ceramic_button.className = "choice-button";
            ceramic_button.title = "Ceramic capacitor in FIDES";
            ceramic_button.setAttribute("id", "nextbutton");

            let tantalum_button = document.createElement("button");
            tantalum_button.innerHTML = "Tantalum";
            tantalum_button.className = "choice-button";
            tantalum_button.title = "Tantalum capacitor (solid or gel electrolyte) in FIDES";
            tantalum_button.setAttribute("id", "nextbutton");

            let plastic_button = document.createElement("button");
            plastic_button.innerHTML = "Plastic Metallized";
            plastic_button.className = "choice-button";
            plastic_button.title = "Plastic film capacitor in FIDES";

            let glass_button = document.createElement("button");
            glass_button.innerHTML = "Glass";
            glass_button.className = "choice-button";
            glass_button.title = "Glass capacitor";

            let mica_button = document.createElement("button");
            mica_button.innerHTML = "Mica";
            mica_button.className = "choice-button";
            mica_button.title = "Mica capacitor";

            let alu_button = document.createElement("button");
            alu_button.innerHTML = "Aluminium";
            alu_button.className = "choice-button";
            alu_button.title = "Aluminium capacitor in FIDES";

            let semi_button = document.createElement("button");
            semi_button.innerHTML = "Semiconductor";
            semi_button.className = "choice-button";
            semi_button.title = "Low power transistors, Silicon MOS < 5W";

            let other_button = document.createElement("button");
            other_button.innerHTML = "I can't find a match.";
            other_button.className = "button-next";

            ceramic_button.onclick = function () {
                this.disabled = true;
                tantalum_button.disabled = true;
                plastic_button.disabled = true;
                glass_button.disabled = true;
                mica_button.disabled = true;
                alu_button.disabled = true;
                semi_button.disabled = true;
                other_button.disabled = true;

                runB3ceramic();
            }

            tantalum_button.onclick = function () {
                this.disabled = true;
                ceramic_button.disabled = true;
                plastic_button.disabled = true;
                glass_button.disabled = true;
                mica_button.disabled = true;
                alu_button.disabled = true;
                semi_button.disabled = true;
                other_button.disabled = true;

                runB3tantalum();

            }

            plastic_button.onclick = function () {
                this.disabled = true;
                tantalum_button.disabled = true;
                ceramic_button.disabled = true;
                glass_button.disabled = true;
                mica_button.disabled = true;
                alu_button.disabled = true;
                semi_button.disabled = true;
                other_button.disabled = true;

                runB3plastic();

            }

            glass_button.onclick = function () {
                this.disabled = true;
                tantalum_button.disabled = true;
                ceramic_button.disabled = true;
                plastic_button.disabled = true;
                mica_button.disabled = true;
                alu_button.disabled = true;
                semi_button.disabled = true;
                other_button.disabled = true;

                runB3glass();

            }

            mica_button.onclick = function () {
                this.disabled = true;
                tantalum_button.disabled = true;
                ceramic_button.disabled = true;
                glass_button.disabled = true;
                plastic_button.disabled = true;
                alu_button.disabled = true;
                semi_button.disabled = true;
                other_button.disabled = true;

                runB3mica();

            }

            alu_button.onclick = function () {
                this.disabled = true;
                tantalum_button.disabled = true;
                ceramic_button.disabled = true;
                glass_button.disabled = true;
                mica_button.disabled = true;
                plastic_button.disabled = true;
                semi_button.disabled = true;
                other_button.disabled = true;

                runB3alu();

            }

            semi_button.onclick = function () {
                this.disabled = true;
                tantalum_button.disabled = true;
                ceramic_button.disabled = true;
                glass_button.disabled = true;
                mica_button.disabled = true;
                alu_button.disabled = true;
                plastic_button.disabled = true;
                other_button.disabled = true;

                runB3semiconductor();

            }

            other_button.onclick = function () {
                this.disabled = true;
                tantalum_button.disabled = true;
                plastic_button.disabled = true;
                ceramic_button.disabled = true;
                glass_button.disabled = true;
                mica_button.disabled = true;
                alu_button.disabled = true;
                semi_button.disabled = true;

                displayTextMessage("I can't help you with this component. Please have a look at the <a style='color:white;' href='https://nrpmhandbook.reliability.space/en/latest/eee/handbook/reliability_prediction/random_failure/reliability_model_EEE_families.html?highlight=semiconductor#capacitors-family-01'>Capacitor family page</a>");
            }

            let div = document.createElement("div");
            div.setAttribute("class", "my-message");
            div.appendChild(ceramic_button);
            div.appendChild(tantalum_button);
            div.appendChild(plastic_button);
            div.appendChild(glass_button);
            div.appendChild(mica_button);
            div.appendChild(alu_button);
            div.appendChild(semi_button);
            div.appendChild(other_button);
            conv_container.appendChild(div);
            document.getElementById("astroPicture_capacitor").setAttribute("src", "../../_static/images/new_astronaut.svg");

        }, answering_speed);

    }

    /* Ceramic functions */

    /* First step for ceramic capacitors : determines the type */
    function runB3ceramic() {
        component_group = "CERAMIC";
        displayTextMessage("Is your component Type I or II ?");

        setTimeout(() => {

            let typeI_button = document.createElement("button");
            typeI_button.innerHTML = "Type I";
            typeI_button.className = "choice-button";
            typeI_button.title = "Type 1";

            let typeII_button = document.createElement("button");
            typeII_button.innerHTML = "Type II";
            typeII_button.className = "choice-button";
            typeII_button.title = "Type 2";

            let fail_button = document.createElement("button");
            fail_button.innerHTML = "I'm not sure";
            fail_button.className = "button-fail";
            fail_button.title = "I am not sure";

            typeI_button.onclick = function () {
                typeII_button.disabled = true;
                fail_button.disabled = true;
                this.disabled = true;
                component_type = 1;
                runB4CV();
            }

            typeII_button.onclick = function () {
                typeI_button.disabled = true;
                fail_button.disabled = true;
                this.disabled = true;
                component_type = 2;
                runB4CV();
            }

            fail_button.onclick = function () {
                /* If not sure, try to determine from the name */
                typeI_button.disabled = true;
                typeII_button.disabled = true;
                this.disabled = true;
                displayTextMessage("I can help you find your component's type.");

                setTimeout(() => {

                    if (component_name.includes('-I ') || component_name.includes('_I ')) {
                        component_type = 1;
                        displayTextMessage("Your component's name includes the clue 'I' and then seems to be Type I");
                        setTimeout(() => {
                            runB4CV();
                        }, answering_speed);

                    }
                    else if (component_name.includes('-II ') || component_name.includes('_II ')) {
                        component_type = 2;
                        displayTextMessage("Your component's name includes the clue 'II' and then seems to be Type II");
                        setTimeout(() => {
                            runB4CV();
                        }, answering_speed);

                    }
                    else {
                        /* If no information from name, tries to determine with some questions */
                        displayTextMessage("Your component's name does not include any clue as 'I' or 'II'.");
                        setTimeout(() => {
                            displayTextMessage("Is the temperature coefficient defined for your component ?");

                            setTimeout(() => {
                                let yes_button = document.createElement("button");
                                yes_button.innerHTML = "Yes";
                                yes_button.className = "choice-button";
                                yes_button.title = "Yes";

                                let no_button = document.createElement("button");
                                no_button.innerHTML = "No";
                                no_button.className = "choice-button";
                                no_button.title = "No";

                                let fail_button2 = document.createElement("button");
                                fail_button2.innerHTML = "I'm not sure";
                                fail_button2.className = "button-fail";
                                fail_button2.title = "I am not sure";

                                yes_button.onclick = function () {
                                    fail_button2.disabled = true;
                                    no_button.disabled = true;
                                    this.disabled = true;
                                    component_type = 1;
                                    displayTextMessage("Then your component is Type I !");
                                    setTimeout(() => {
                                        runB4CV();
                                    }, answering_speed);
                                }

                                no_button.onclick = function () {
                                    fail_button2.disabled = true;
                                    yes_button.disabled = true;
                                    this.disabled = true;
                                    component_type = 2;
                                    displayTextMessage("Then your component is Type II !");
                                    setTimeout(() => {
                                        runB4_ceramic();
                                    }, answering_speed);


                                }

                                fail_button2.onclick = function () {
                                    no_button.disabled = true;
                                    yes_button.disabled = true;
                                    this.disabled = true;

                                    displayTextMessage("Has your component polymeric terminations ?");

                                    component_group = "CERAMIC";
                                    setTimeout(() => {
                                        let yes_button2 = document.createElement("button");
                                        yes_button2.innerHTML = "Yes";
                                        yes_button2.className = "choice-button";
                                        yes_button2.title = "Yes";

                                        let no_button2 = document.createElement("button");
                                        no_button2.innerHTML = "No";
                                        no_button2.className = "choice-button";
                                        no_button2.title = "No";

                                        let fail_button3 = document.createElement("button");
                                        fail_button3.innerHTML = "I'm not sure";
                                        fail_button3.className = "button-fail";
                                        fail_button3.title = "I am not sure";

                                        yes_button2.onclick = function () {
                                            fail_button3.disabled = true;
                                            no_button2.disabled = true;
                                            this.disabled = true;
                                            component_type = 2;
                                            component_polymer_terminations = true;
                                            displayTextMessage("Then your component is Type II !");
                                            setTimeout(() => {
                                                runB4CV();
                                            }, answering_speed);
                                        }

                                        no_button2.onclick = function () {
                                            fail_button3.disabled = true;
                                            yes_button2.disabled = true;
                                            this.disabled = true;
                                            component_type = 1;
                                            displayTextMessage("Then your component is Type I !");
                                            setTimeout(() => {
                                                runB4CV();
                                            }, answering_speed);
                                        }

                                        fail_button3.onclick = function () {
                                            no_button2.disabled = true;
                                            yes_button2.disabled = true;
                                            this.disabled = true;
                                            displayTextMessage("I can't help you then, please have a look at your component's data sheet to tell me it's type.");
                                            let typeI_button2 = document.createElement("button");
                                            typeI_button2.innerHTML = "Type I";
                                            typeI_button2.className = "choice-button";
                                            typeI_button2.title = "Type 1";

                                            let typeII_button2 = document.createElement("button");
                                            typeII_button2.innerHTML = "Type II";
                                            typeII_button2.className = "choice-button";
                                            typeII_button2.title = "Type 2";

                                            typeI_button2.onclick = function () {
                                                typeII_button2.disabled = true;
                                                this.disabled = true;
                                                component_type = 1;
                                                runB4_ceramic();
                                            }

                                            typeII_button2.onclick = function () {
                                                typeI_button2.disabled = true;
                                                this.disabled = true;
                                                component_type = 2;
                                                runB4_ceramic();
                                            }

                                            let div = document.createElement("div");
                                            div.setAttribute("class", "my-message");
                                            div.appendChild(typeI_button2);
                                            div.appendChild(typeII_button2);
                                            conv_container.appendChild(div);
                                            document.getElementById("astroPicture_capacitor").setAttribute("src", "../../_static/images/new_astronaut.svg");

                                        }


                                        let div = document.createElement("div");
                                        div.setAttribute("class", "my-message");
                                        div.appendChild(yes_button2);
                                        div.appendChild(no_button2);
                                        div.appendChild(fail_button3);
                                        conv_container.appendChild(div);
                                        document.getElementById("astroPicture_capacitor").setAttribute("src", "../../_static/images/new_astronaut.svg");
                                    }, answering_speed);


                                }
                                let div = document.createElement("div");
                                div.setAttribute("class", "my-message");
                                div.appendChild(yes_button);
                                div.appendChild(no_button);
                                div.appendChild(fail_button2);
                                conv_container.appendChild(div);
                                document.getElementById("astroPicture_capacitor").setAttribute("src", "../../_static/images/new_astronaut.svg");
                            }, answering_speed);


                        }, answering_speed);
                    }


                }, answering_speed);

            }


            let div = document.createElement("div");
            div.setAttribute("class", "my-message");
            div.appendChild(typeI_button);
            div.appendChild(typeII_button);
            div.appendChild(fail_button);
            conv_container.appendChild(div);
            document.getElementById("astroPicture_capacitor").setAttribute("src", "../../_static/images/new_astronaut.svg");
        }, answering_speed);





    }

    /* Termination questions for ceramic capacitors */
    function runB4_ceramic() {
        if (component_type == 2) {
            displayTextMessage("Has your component polymeric terminations ?");
            setTimeout(() => {
                let yes_button = document.createElement("button");
                yes_button.innerHTML = "Yes";
                yes_button.className = "choice-button";
                yes_button.title = "Yes";

                let no_button = document.createElement("button");
                no_button.innerHTML = "No";
                no_button.className = "choice-button";
                no_button.title = "No";

                yes_button.onclick = function () {
                    no_button.disabled = true;
                    this.disabled = true;
                    component_polymer_terminations = true;
                    runB4CV();
                }

                no_button.onclick = function () {
                    yes_button.disabled = true;
                    this.disabled = true;
                    runB4CV();
                }

                let div = document.createElement("div");
                div.setAttribute("class", "my-message");
                div.appendChild(yes_button);
                div.appendChild(no_button);
                conv_container.appendChild(div);
                document.getElementById("astroPicture_capacitor").setAttribute("src", "../../_static/images/new_astronaut.svg");
            }, answering_speed);
        }
        else {
            runB4CV();
        }

    }

    /* CV calculation for ceramic components */
    function runB4CV() {
        displayTextMessage("Now that we know your component's type, let's calculate its CV to determine its category.");
        setTimeout(() => {
            displayTextMessage("Please fill the fields below to know your CV and its meaning !");
            setTimeout(() => {


                let capa_input = document.createElement("input");
                capa_input.type = "number";
                capa_input.name = "capa_input";
                let capa_label = document.createElement("label");
                capa_label.for = "capa_input";
                capa_label.innerHTML = "Capacitance <br>"

                let capa_unit = document.createElement("select");
                let capa_option1 = document.createElement("option");
                capa_option1.innerHTML = "F";
                capa_option1.value = Math.pow(10, 0);
                let capa_option2 = document.createElement("option");
                capa_option2.innerHTML = "&mu;F";
                capa_option2.value = Math.pow(10, -6);
                let capa_option3 = document.createElement("option");
                capa_option3.innerHTML = "nF";
                capa_option3.value = Math.pow(10, -9);
                let capa_option4 = document.createElement("option");
                capa_option4.innerHTML = "pF";
                capa_option4.value = Math.pow(10, -12);
                capa_unit.appendChild(capa_option1);
                capa_unit.appendChild(capa_option2);
                capa_unit.appendChild(capa_option3);
                capa_unit.appendChild(capa_option4);
                capa_unit.name = "capa_unit";
                let unit_label = document.createElement("label");
                unit_label.for = "capa_input";
                unit_label.innerHTML = "<br>Capacitance unit <br>"

                let voltage_input = document.createElement("input");
                voltage_input.type = "number";
                voltage_input.name = "voltage_input";
                let voltage_label = document.createElement("label");
                voltage_label.for = "voltage_input";
                voltage_label.innerHTML = "<br>Voltage <br>";


                let buttonOK = document.createElement("button");
                buttonOK.innerHTML = "OK";
                buttonOK.className = "button-next";
                buttonOK.onclick = function () {
                    capa_input.disabled = true;
                    capa_unit.disabled = true;
                    voltage_input.disabled = true;
                    this.disabled = true;
                    component_CV = parseFloat(capa_input.value) * capa_unit.value * parseFloat(voltage_input.value)
                    runB5ceramic();
                }

                let div = document.createElement("div");
                div.setAttribute("class", "my-message");
                div.appendChild(capa_label);
                div.appendChild(capa_input);
                div.appendChild(unit_label);
                div.appendChild(capa_unit);
                div.appendChild(voltage_label);
                div.appendChild(voltage_input);
                div.appendChild(buttonOK);
                conv_container.appendChild(div);
                document.getElementById("astroPicture_capacitor").setAttribute("src", "../../_static/images/new_astronaut.svg");
            }, answering_speed);
        }, answering_speed);

    }

    /* Determine the CV level for the ceramic component */
    function runB5ceramic() {
        displayTextMessage("The CV of your component equals to " + component_CV + " VF.");
        setTimeout(() => {
            if (component_type == 1) {
                if (component_CV < 5 * Math.pow(10, -8)) {
                    component_CV_type = 'LOW';
                    runB6ceramic();
                }
                else if (component_CV > 1 * Math.pow(10, -6)) {
                    displayTextMessage("Is this value in the technological limit ?");

                    setTimeout(() => {
                        let yes_button = document.createElement("button");
                        yes_button.innerHTML = "Yes";
                        yes_button.className = "choice-button";
                        yes_button.title = "yes";

                        let no_button = document.createElement("button");
                        no_button.innerHTML = "No";
                        no_button.className = "choice-button";
                        no_button.title = "no";

                        yes_button.onclick = function () {
                            no_button.disabled = true;
                            this.disabled = true;
                            component_CV_type = 'HIGH';
                            runB6ceramic();
                        }

                        no_button.onclick = function () {
                            yes_button.disabled = true;
                            this.disabled = true;
                            component_CV_type = 'MEDIUM';
                            runB6ceramic();
                        }

                        let div = document.createElement("div");
                        div.setAttribute("class", "my-message");
                        div.appendChild(yes_button);
                        div.appendChild(no_button);
                        conv_container.appendChild(div);
                        document.getElementById("astroPicture_capacitor").setAttribute("src", "../../_static/images/new_astronaut.svg");
                    }, answering_speed);

                }
                else {
                    component_CV_type = 'MEDIUM';
                    runB6ceramic();
                }
            }
            else if (component_type == 2) {
                if (component_CV < 5 * Math.pow(10, -6)) {
                    component_CV_type = 'LOW';
                }
                else if (component_CV > 1 * Math.pow(10, -4)) {
                    displayTextMessage("Is this value in the technological limit ?");

                    setTimeout(() => {
                        let yes_button = document.createElement("button");
                        yes_button.innerHTML = "Yes";
                        yes_button.className = "choice-button";
                        yes_button.title = "yes";

                        let no_button = document.createElement("button");
                        no_button.innerHTML = "No";
                        no_button.className = "choice-button";
                        no_button.title = "no";

                        yes_button.onclick = function () {
                            no_button.disabled = true;
                            this.disabled = true;
                            component_CV_type = 'HIGH';
                            runB6ceramic();
                        }

                        no_button.onclick = function () {
                            yes_button.disabled = true;
                            this.disabled = true;
                            component_CV_type = 'MEDIUM';
                            runB6ceramic();
                        }

                        let div = document.createElement("div");
                        div.setAttribute("class", "my-message");
                        div.appendChild(yes_button);
                        div.appendChild(no_button);
                        conv_container.appendChild(div);
                        document.getElementById("astroPicture_capacitor").setAttribute("src", "../../_static/images/new_astronaut.svg");
                    }, answering_speed);


                }
                else {
                    component_CV_type = 'MEDIUM';
                    runB6ceramic();
                }
            }


        }, answering_speed);


    }

    /* Gives the FIDES reference and the dedicated page from the handbook */
    function runB6ceramic() {
        displayTextMessage("Your component has a " + component_CV_type + " CV !");
        setTimeout(() => {
            let termination_value = ""
            if (!component_polymer_terminations) {
                termination_value = "no ";
            }
            console.log(component_type, component_polymer_terminations, component_CV_type)
            displayTextMessage("As it is a component of type " + component_type + " with " + termination_value + "polymer terminations and a " + component_CV_type + " CV, your component belongs to the category <b>" + ceramic_categories.get(component_type).get(component_polymer_terminations).get(component_CV_type) + "</b>.");
            setTimeout(() => {
                displayTextMessage("You can have a look at the <a style='color: white' href='https://nrpmhandbook.reliability.space/en/latest/eee/handbook/reliability_prediction/random_failure/reliability_model_EEE_families.html#eee-table4-20'>parameter table</a> to get more information.");

                setTimeout(() => {
                    if (component_type == 1) {
                        displayTextMessage("Your component may be an HFRF component. Then replace the 'ECCC' by 'HFHC' in the category name to get the right one.");
                        document.getElementById("astroPicture_capacitor").setAttribute("src", "../../_static/images/new_astronaut_idea.svg");
                    }
                }, answering_speed);

            }, answering_speed);

        }, answering_speed);
    }


    /* Tantalum capacitor */

    /* For tantalum components, determine wet/dry property */
    function runB3tantalum() {
        component_group = "TANTALUM";
        displayTextMessage("Is your component wet or dry ?");
        setTimeout(() => {
            let wet_button = document.createElement("button");
            wet_button.innerHTML = "Wet";
            wet_button.className = "choice-button";
            wet_button.title = "wet";

            let dry_button = document.createElement("button");
            dry_button.innerHTML = "Dry";
            dry_button.className = "choice-button";
            dry_button.title = "dry";

            let fail_button = document.createElement("button");
            fail_button.innerHTML = "I'm not sure";
            fail_button.className = "button-fail";
            fail_button.title = "not sure";


            wet_button.onclick = function () {
                fail_button.disabled = true;
                dry_button.disabled = true;
                this.disabled = true;
                runB4tantalum_wet();
            }

            dry_button.onclick = function () {
                fail_button.disabled = true;
                wet_button.disabled = true;
                this.disabled = true;
                runB4tantalum_dry();
            }

            fail_button.onclick = function () {
                wet_button.disabled = true;
                dry_button.disabled = true;
                this.disabled = true;

                /* If no clue, try with other properties */

                displayTextMessage("Is your component sealed by glass beads or elastomer ?");

                setTimeout(() => {
                    let yes_button = document.createElement("button");
                    yes_button.innerHTML = "Wet";
                    yes_button.className = "choice-button";
                    yes_button.title = "wet";

                    let no_button = document.createElement("button");
                    no_button.innerHTML = "Dry";
                    no_button.className = "choice-button";
                    no_button.title = "dry";

                    let fail_button2 = document.createElement("button");
                    fail_button2.innerHTML = "I'm not sure";
                    fail_button2.className = "button-fail";
                    fail_button2.title = "not sure";


                    yes_button.onclick = function () {
                        fail_button2.disabled = true;
                        no_button.disabled = true;
                        this.disabled = true;
                        runB4tantalum_wet();
                    }

                    no_button.onclick = function () {
                        fail_button2.disabled = true;
                        yes_button.disabled = true;
                        this.disabled = true;
                        runB4tantalum_dry();
                    }

                    fail_button2.onclick = function () {
                        yes_button.disabled = true;
                        no_button.disabled = true;
                        this.disabled = true;

                        displayTextMessage("I can't help you determine your component, please have a look at your component datasheet and go on this guide !");

                        setTimeout(() => {
                            runB3tantalum();
                        }, answering_speed);
                    }


                    let div = document.createElement("div");
                    div.setAttribute("class", "my-message");
                    div.appendChild(wet_button);
                    div.appendChild(dry_button);
                    div.appendChild(fail_button2);
                    conv_container.appendChild(div);
                    document.getElementById("astroPicture_capacitor").setAttribute("src", "../../_static/images/new_astronaut.svg");
                }, answering_speed);

            }



            let div = document.createElement("div");
            div.setAttribute("class", "my-message");
            div.appendChild(wet_button);
            div.appendChild(dry_button);
            div.appendChild(fail_button);
            conv_container.appendChild(div);
            document.getElementById("astroPicture_capacitor").setAttribute("src", "../../_static/images/new_astronaut.svg");
        }, answering_speed);
    }

    /* If wet, determine case type */
    function runB4tantalum_wet() {
        displayTextMessage("Is your component contained in a silver case or a beads tantalum case ?");

        setTimeout(() => {
            let silver_button = document.createElement("button");
            silver_button.innerHTML = "Silver case";
            silver_button.className = "choice-button";
            silver_button.title = "silver case";

            let beads_button = document.createElement("button");
            beads_button.innerHTML = "Beads tantalum case";
            beads_button.className = "choice-button";
            beads_button.title = "beads tantalum case";

            silver_button.onclick = function () {
                no_button.disabled = true;
                this.disabled = true;
                runB4tantalum_wet();
            }

            no_button.onclick = function () {
                silver_button.disabled = true;
                this.disabled = true;
                runB4tantalum_dry();
            }

            let div = document.createElement("div");
            div.setAttribute("class", "my-message");
            div.appendChild(wet_button);
            div.appendChild(dry_button);
            conv_container.appendChild(div);
            document.getElementById("astroPicture_capacitor").setAttribute("src", "../../_static/images/new_astronaut.svg");
        }, answering_speed);

    }

    function runB4tantalum_wet() {
        displayTextMessage("Is your component contained in a silver case or a beads tantalum case ?");

        setTimeout(() => {
            let silver_button = document.createElement("button");
            silver_button.innerHTML = "Silver case";
            silver_button.className = "choice-button";
            silver_button.title = "silver case";

            let beads_button = document.createElement("button");
            beads_button.innerHTML = "Beads tantalum case";
            beads_button.className = "choice-button";
            beads_button.title = "beads tantalum case";

            silver_button.onclick = function () {
                beads_button.disabled = true;
                this.disabled = true;
                component_case = "SILVER";
                runB5tantalum_wet();
            }

            beads_button.onclick = function () {
                silver_button.disabled = true;
                this.disabled = true;
                component_case = "BEADS TANTALUM";
                runB5tantalum_wet();
            }

            let div = document.createElement("div");
            div.setAttribute("class", "my-message");
            div.appendChild(silver_button);
            div.appendChild(beads_button);
            conv_container.appendChild(div);
            document.getElementById("astroPicture_capacitor").setAttribute("src", "../../_static/images/new_astronaut.svg");
        }, answering_speed);

    }

    /* From beads, determine the FIDES model for tantalum wet components */
    function runB5tantalum_wet() {
        if (component_case == "SILVER") {
            displayTextMessage("Is your component sealed by elastomer or glass beads ?");

            setTimeout(() => {
                let elastomer_button = document.createElement("button");
                elastomer_button.innerHTML = "Elastomer";
                elastomer_button.className = "choice-button";
                elastomer_button.title = "elastomer";

                let beads_button = document.createElement("button");
                beads_button.innerHTML = "Glass beads";
                beads_button.className = "choice-button";
                beads_button.title = "glass beads";

                elastomer_button.onclick = function () {
                    beads_button.disabled = true;
                    this.disabled = true;
                    displayTextMessage("Your component is a wet tantalum capacitor silver case sealed by elastomer and belongs to category <b>ECTC_01</b>");
                }

                beads_button.onclick = function () {
                    elastomer_button.disabled = true;
                    this.disabled = true;
                    displayTextMessage("Your component is a wet tantalum capacitor silver case sealed by glass beads and belongs to category <b>ECTC_02</b>");
                }

                let div = document.createElement("div");
                div.setAttribute("class", "my-message");
                div.appendChild(elastomer_button);
                div.appendChild(beads_button);
                conv_container.appendChild(div);
                document.getElementById("astroPicture_capacitor").setAttribute("src", "../../_static/images/new_astronaut.svg");
            }, answering_speed);
        }

        else {
            displayTextMessage("Your component is a wet tantalum capacitor beads tantalum case sealed by glass beads and belongs to category <b>ECTC_03</b>");
        }
    }

    /* Determine case type for dry tantalum components and gives the associated FIDES model */
    function runB4tantalum_dry() {
        displayTextMessage("Which packaging fits to your component ?");

        setTimeout(() => {
            let drop_button = document.createElement("button");
            drop_button.innerHTML = "Silver case";
            drop_button.className = "choice-button";
            drop_button.title = "silver case";

            let smd_button = document.createElement("button");
            smd_button.innerHTML = "Beads tantalum case";
            smd_button.className = "choice-button";
            smd_button.title = "beads tantalum case";

            let axial_button = document.createElement("button");
            axial_button.innerHTML = "Beads tantalum case";
            axial_button.className = "choice-button";
            axial_button.title = "beads tantalum case";

            drop_button.onclick = function () {
                smd_button.disabled = true;
                axial_button.disabled = true;
                this.disabled = true;
                displayTextMessage("Your component is a dry tantalum capacitor drop packaging and belongs to category <b>ECTC_04</b>");
            }

            smd_button.onclick = function () {
                axial_button.disabled = true;
                drop_button.disabled = true;
                this.disabled = true;
                displayTextMessage("Your component is a dry tantalum capacitor SMD packaging and belongs to category <b>ECTC_05</b>");
            }

            axial_button.onclick = function () {
                drop_button.disabled = true;
                smd_button.disabled = true;
                this.disabled = true;
                displayTextMessage("Your component is a dry tantalum axial metal packaging and belongs to category <b>ECTC_06</b>");
            }

            let div = document.createElement("div");
            div.setAttribute("class", "my-message");
            div.appendChild(drop_button);
            div.appendChild(smd_button);
            div.appendChild(axial_button);
            conv_container.appendChild(div);
            document.getElementById("astroPicture_capacitor").setAttribute("src", "../../_static/images/new_astronaut.svg");
        }, answering_speed);

    }

    /* Plastic Metallized Capacitor */

    /* Determines the kind of film for plastic metallized capacitors */
    function runB3plastic() {
        component_group = "PLASTIC METALLIZED";
        displayTextMessage("Which kind of film does you component contain ?");

        setTimeout(() => {
            let pp_button = document.createElement("button");
            pp_button.innerHTML = "Polypropylene (PP)";
            pp_button.className = "choice-button";
            pp_button.title = "Polypropylene";

            let pet_button = document.createElement("button");
            pet_button.innerHTML = "Polyethylene terephtalate (PET)";
            pet_button.className = "choice-button";
            pet_button.title = "Polyethylene terephtalate";

            let pen_button = document.createElement("button");
            pen_button.innerHTML = "Polyethylene naphtalate (PEN)";
            pen_button.className = "choice-button";
            pen_button.title = "Polyethylene naphtalate";

            let pps_button = document.createElement("button");
            pps_button.innerHTML = "Polyphenylene sulfide (PPS)";
            pps_button.className = "choice-button";
            pps_button.title = "Polyphenylene sulfide";

            let ptfe_button = document.createElement("button");
            ptfe_button.innerHTML = "Teflon (PTFE)";
            ptfe_button.className = "choice-button";
            ptfe_button.title = "Teflon";

            pp_button.onclick = function () {
                pet_button.disabled = true;
                pen_button.disabled = true;
                pps_button.disabled = true;
                ptfe_button.disabled = true;
                this.disabled = true;
                displayTextMessage("Your component is a polypropylene film capacitor (PP) and belongs to category <b>ECFC_01</b>");
                setTimeout(() => {
                    runB4plastic();
                }, answering_speed);
            }

            pet_button.onclick = function () {
                pp_button.disabled = true;
                pen_button.disabled = true;
                pps_button.disabled = true;
                ptfe_button.disabled = true;
                this.disabled = true;
                displayTextMessage("Your component is a polyethylene terephtalate film capacitor (PET) and belongs to category <b>ECFC_02</b>");
                setTimeout(() => {
                    runB4plastic();
                }, answering_speed);
            }

            pen_button.onclick = function () {
                pet_button.disabled = true;
                pp_button.disabled = true;
                pps_button.disabled = true;
                ptfe_button.disabled = true;
                this.disabled = true;
                displayTextMessage("Your component is a polyethylene naphtalate film capacitor (PEN) and belongs to category <b>ECFC_03</b>");
                setTimeout(() => {
                    runB4plastic();
                }, answering_speed);
            }


            pps_button.onclick = function () {
                pet_button.disabled = true;
                pen_button.disabled = true;
                pp_button.disabled = true;
                ptfe_button.disabled = true;
                this.disabled = true;
                displayTextMessage("Your component is a polyphenylene sulfide film capacitor (PPS) and belongs to category <b>ECFC_04</b>");
                setTimeout(() => {
                    runB4plastic();
                }, answering_speed);
            }

            ptfe_button.onclick = function () {
                pet_button.disabled = true;
                pen_button.disabled = true;
                pps_button.disabled = true;
                pp_button.disabled = true;
                this.disabled = true;
                displayTextMessage("Your component is a teflon film capacitor (PTFE) and belongs to category <b>ECFC_06</b>");
                setTimeout(() => {
                    runB4plastic();
                }, answering_speed);
            }


            let div = document.createElement("div");
            div.setAttribute("class", "my-message");
            div.appendChild(pp_button);
            div.appendChild(pet_button);
            div.appendChild(pen_button);
            div.appendChild(pps_button);
            div.appendChild(ptfe_button);
            conv_container.appendChild(div);
            document.getElementById("astroPicture_capacitor").setAttribute("src", "../../_static/images/new_astronaut.svg");
        }, answering_speed);

    }

    /* Propose to determine the Pi Film factor */
    function runB4plastic() {
        displayTextMessage("I can help you compute the &Pi;<sub>Film</sub> factor. Are you interested ?");
        setTimeout(() => {
            let yes_button = document.createElement("button");
            yes_button.innerHTML = "Yes, let's go !";
            yes_button.setAttribute("id", "nextbutton");

            let no_button = document.createElement("button");
            no_button.innerHTML = "No, thank you";
            no_button.setAttribute("id", "nextbutton");

            yes_button.onclick = function () {
                this.disabled = true;
                no_button.disabled = true;
                displayTextMessage("Ok, then is your component used in alternative or direct voltage ?");
                setTimeout(() => {
                    let ac_button = document.createElement("button");
                    ac_button.innerHTML = "AC voltage";
                    ac_button.title = "AC";

                    let dc_button = document.createElement("button");
                    dc_button.innerHTML = "DC voltage";
                    dc_button.title = "DC";

                    ac_button.onclick = function () {
                        this.disabled = true;
                        dc_button.disabled = true;
                        runB5plastic();
                    }

                    dc_button.onclick = function () {
                        this.disabled = true;
                        ac_button.disabled = true;
                        runB5plastic();
                    }

                    let div = document.createElement("div");
                    div.setAttribute("class", "my-message");
                    div.appendChild(ac_button);
                    div.appendChild(dc_button);
                    conv_container.appendChild(div);
                    document.getElementById("astroPicture_capacitor").setAttribute("src", "../../_static/images/new_astronaut.svg");
                }, answering_speed);
            }

            no_button.onclick = function () {
                this.disabled = true;
                yes_button.disabled = true;
                displayTextMessage("Ok, then good luck for your study !");
            }

            let div = document.createElement("div");
            div.setAttribute("class", "my-message");
            div.appendChild(yes_button);
            div.appendChild(no_button);
            conv_container.appendChild(div);
            document.getElementById("astroPicture_capacitor").setAttribute("src", "../../_static/images/new_astronaut.svg");
        }, answering_speed);

    }

    /* Ask humidity information for Pi Film */
    function runB5plastic() {
        displayTextMessage("Can you give me an approximation of your component's environnement humidity rate ?");

        setTimeout(() => {
            let humidity_slider = document.createElement("input");
            humidity_slider.type = "range";
            humidity_slider.min = 0;
            humidity_slider.max = 100;
            humidity_slider.step = 5;

            let humidity_value = document.createElement("a");

            let validate_button = document.createElement("button");
            validate_button.innerHTML = "OK";
            validate_button.style.display = "none";
            validate_button.onclick = function () {
                component_humidity = humidity_slider.value;
                displayTextMessage("Has your component been choser specically for this environment ?");
                setTimeout(() => {
                    let yes_button = document.createElement("button");
                    yes_button.innerHTML = "Yes";

                    let no_button = document.createElement("button");
                    no_button.innerHTML = "No";

                    yes_button.onclick = function () {
                        this.disabled = true;
                        no_button.disabled = true;
                        if (component_humidity < 70) {
                            component_pi_film_grade += 0;
                        }
                        else if (component_humidity > 90) {
                            component_pi_film_grade += 15;
                        }
                        else {
                            component_pi_film_grade += 0;
                        }
                        runB6plastic();
                    }

                    no_button.onclick = function () {
                        this.disabled = true;
                        yes_button.disabled = true;
                        if (component_humidity < 70) {
                            component_pi_film_grade += 0;
                        }
                        else if (component_humidity > 90) {
                            component_pi_film_grade += 30;
                        }
                        else {
                            component_pi_film_grade += 15;
                        }
                        runB6plastic();
                    }

                    let div = document.createElement("div");
                    div.setAttribute("class", "my-message");
                    div.appendChild(yes_button);
                    div.appendChild(no_button);
                    conv_container.appendChild(div);
                    document.getElementById("astroPicture_capacitor").setAttribute("src", "../../_static/images/new_astronaut.svg");
                }, answering_speed);

            }

            humidity_slider.onchange = function () {
                validate_button.style.display = "block";
            }

            humidity_slider.oninput = function () {
                humidity_value.innerHTML = this.value;
            }

            let div = document.createElement("div");
            div.setAttribute("class", "my-message");
            div.appendChild(humidity_slider);
            div.appendChild(humidity_value);
            div.appendChild(validate_button);
            conv_container.appendChild(div);
            document.getElementById("astroPicture_capacitor").setAttribute("src", "../html/pictures/new_astronaut_happy.svg");
        }, answering_speed);

    }

    /* Ask if component is specifically developped for its current application for Pi film */
    function runB6plastic() {
        displayTextMessage("Has your component been  specically developped for current application ?");
        setTimeout(() => {
            let yes_button = document.createElement("button");
            yes_button.innerHTML = "Yes";

            let no_button = document.createElement("button");
            no_button.innerHTML = "No";

            yes_button.onclick = function () {
                this.disabled = true;
                no_button.disabled = true;
                component_pi_film_grade += 0;
                component_pi_film = Math.exp(1.39 * component_pi_film_grade/100);
                displayTextMessage("Your component's &Pi;<sub>Film</sub> factor equals to " + component_pi_film.toFixed(2));
            }

            no_button.onclick = function () {
                this.disabled = true;
                yes_button.disabled = true;
                displayTextMessage("Has your component been validated by the manufacturer ?");
                setTimeout(() => {
                    let yes_button2 = document.createElement("button");
                    yes_button2.innerHTML = "Yes";

                    let no_button2 = document.createElement("button");
                    no_button2.innerHTML = "No";

                    yes_button2.onclick = function () {
                        this.disabled = true;
                        no_button2.disabled = true;
                        component_pi_film_grade += 10;
                        component_pi_film = Math.exp(1.39 * component_pi_film_grade/100);
                        displayTextMessage("Your component's &Pi;<sub>Film</sub> factor equals to " + component_pi_film.toFixed(2));
                    }

                    no_button2.onclick = function () {
                        this.disabled = true;
                        yes_button2.disabled = true;
                        component_pi_film_grade += 20;
                        component_pi_film = Math.exp(1.39 * component_pi_film_grade/100);
                        displayTextMessage("Your component's &Pi;<sub>Film</sub> factor equals to " + component_pi_film.toFixed(2));
                    }

                    let div = document.createElement("div");
                    div.setAttribute("class", "my-message");
                    div.appendChild(yes_button2);
                    div.appendChild(no_button2);
                    conv_container.appendChild(div);
                    document.getElementById("astroPicture_capacitor").setAttribute("src", "../../_static/images/new_astronaut.svg");
                }, answering_speed);
            }

            let div = document.createElement("div");
            div.setAttribute("class", "my-message");
            div.appendChild(yes_button);
            div.appendChild(no_button);
            conv_container.appendChild(div);
            document.getElementById("astroPicture_capacitor").setAttribute("src", "../../_static/images/new_astronaut.svg");
        }, answering_speed);
    }

    /* Step that gives information for glass components */
    function runB3glass(){
        displayTextMessage("It seems that this type of capacitor is no longer used in space application.");
        setTimeout(() => {
            displayTextMessage("For more information, you can have a look at the <a style='color: white' href='https://nrpmhandbook.reliability.space/en/latest/eee/handbook/reliability_prediction/random_failure/reliability_model_EEE_families.html#capacitors-family-01'>handbook</a> !");
        }, answering_speed);
    }

    /* Step that gives information for mica components */
    function runB3mica(){
        displayTextMessage("It seems that this type of capacitor is no longer used in space application.");
        setTimeout(() => {
            displayTextMessage("For more information, you can have a look at the <a style='color: white' href='https://nrpmhandbook.reliability.space/en/latest/eee/handbook/reliability_prediction/random_failure/reliability_model_EEE_families.html#capacitors-family-01'>handbook</a> !");
        }, answering_speed);
    }

    /* Step that gives information for alu components */
    function runB3alu(){
        displayTextMessage("If your component is aluminium liquid electrolyte capacitor or aluminium solid electrolyte capacitor, then it belongs to category <b>ECAC_01</b>.");
        setTimeout(() => {
            displayTextMessage("Otherwise it may belongs to category <b>ECAC_02</b>, but its no longer user in space application");
            setTimeout(() => {
                displayTextMessage("For more information, please have a look at FIDES 2021 p154 !");
            }, answering_speed);
        }, answering_speed);
    }

    /* Step that gives information for semiconductor components */
    function runB3semiconductor(){
        displayTextMessage("This kind of component belongs to category <b>ECDS_19</b> of semiconductors.");
        setTimeout(() => {
            displayTextMessage("You can have a look at the <a style='color:white;' href='https://nrpmhandbook.reliability.space/en/latest/eee/handbook/reliability_prediction/random_failure/reliability_model_EEE_families.html?highlight=semiconductor#transistors-family-12'>dedicated page</a> for more information.");
        }, answering_speed);
    }

    /* Initiate interface */
    runB0();
    //component_type = 1
    //runB4CV();
}

/*"../../_static/images/new_astronaut_speaks.svg"*/
/*"../../_static/images/new_astronaut.svg"*/

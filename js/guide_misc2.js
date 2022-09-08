// Copyright (C) Matrisk GmbH 2022

function runMiscellaneousGuide() {

    /** Associated the HTML conversation container */
    let conv_container = document.getElementById("messagesTrack");

    /* Collection of buttons diplayed */
    let buttons = new Map();

    /* Set of component names */
    dataComponent = new Set([
        "TWTA, Single MPM",
        "TWTA, Double MPM",
        "BATTERY CELL GEO",
        "BATTERY CELL LEO",
        "SOLAR ARRAY CELL Si",
        "SOLAR ARRAY CELL GaAs",
        "SADM (Solar Array drive Mechanism) GEO",
        "SADM (Solar Array drive Mechanism) LEO",
        "THRUSTER",
        "TANK TUBING",
        "RW (Reaction Wheel) GEO",
        "RW (Reaction Wheel) LEO",
        "DEPLOYMENT DEVICE Antenna, boom",
        "DEPLOYMENT DEVICE Solar Array",
        "RF PASSIVE",
        "CONNECTORS",
        "HET (Hall Effect Thruster)",
        "VALVE LV (Latching Valve)",
        "VALVE FCV (MONO STABLE) Flow Control Valve",
        "VALVE PYRO VALVE",
        "PT (Pressure Transducer)",
        "FILTER",
        "HEAT PIPES",
        "THERMO SWITCH",
        "HEATER",
        "Pyro Actuator",
        "Non Explosive Actuator",
        "OPTICS",
        "OPTRONICS",
    ]);

    /* Collection of models associated to components names*/
    dataComponentType = new Map([
        ["TWTA, Single MPM", "standard"],
        ["TWTA, Double MPM", "standard"],
        ["BATTERY CELL GEO", "standard"],
        ["BATTERY CELL LEO", "standard"],
        ["SOLAR ARRAY CELL Si", "standard"],
        ["SOLAR ARRAY CELL GaAs", "standard"],
        ["SADM (Solar Array drive Mechanism) GEO", "standard"],
        ["SADM (Solar Array drive Mechanism) LEO", "standard"],
        ["THRUSTER", "standard"],
        ["TANK TUBING", "standard"],
        ["RW (Reaction Wheel) GEO", "standard"],
        ["RW (Reaction Wheel) LEO", "standard"],
        ["DEPLOYMENT DEVICE Antenna, boom", "standard"],
        ["DEPLOYMENT DEVICE Solar Array", "standard"],
        ["RF PASSIVE", "non-standard"],
        ["CONNECTORS", "non-standard"],
        ["HET (Hall Effect Thruster)", "non-standard"],
        ["VALVE LV (Latching Valve)", "non-standard"],
        ["VALVE FCV (MONO STABLE) Flow Control Valve", "non-standard"],
        ["VALVE PYRO VALVE", "non-standard"],
        ["PT (Pressure Transducer)", "non-standard"],
        ["FILTER", "non-standard"],
        ["HEAT PIPES", "non-standard"],
        ["THERMO SWITCH", "non-standard"],
        ["HEATER", "non-standard"],
        ["Pyro Actuator", "non-standard"],
        ["Non Explosive Actuator", "non-standard"],
        ["OPTICS", "non-standard"],
        ["OPTRONICS", "non-standard"],
    ])

    /* Lambda 1 value for statndard components*/
    standardComponentFR = new Map([
        ["TWTA, Single MPM", 200],
        ["TWTA, Double MPM", 400],
        ["BATTERY CELL GEO", 5],
        ["BATTERY CELL LEO", 1],
        ["SOLAR ARRAY CELL Si", 0.15],
        ["SOLAR ARRAY CELL GaAs", 0.15],
        ["SADM (Solar Array drive Mechanism) GEO", 210],
        ["SADM (Solar Array drive Mechanism) LEO", 213],
        ["THRUSTER", 82],
        ["TANK TUBING", 3.27],
        ["RW (Reaction Wheel) GEO", 250],
        ["RW (Reaction Wheel) LEO", 140],
        ["DEPLOYMENT DEVICE Antenna, boom", 0.2],
        ["DEPLOYMENT DEVICE Solar Array", 0.3],
    ]);

    /* Components categories */
    dataCategories = new Set([
        "Radio Frequency",
        "Power",
        "Propulsion",
        "Attitude and Orbit Control System",
        "Thermal",
        "Pyrotechnics",
        "Deployment",
        "Other"
    ]);

    /* Components associated to categories */
    dataModelsByCategories = new Map([
        ["Radio Frequency", new Set(
            ["TWTA, Single MPM",
                "TWTA, Double MPM",
                "RF PASSIVE",]
        )],
        ["Power", new Set(
            ["CONNECTORS",
                "BATTERY CELL GEO",
                "BATTERY CELL LEO",
                "SOLAR ARRAY CELL Si",
                "SOLAR ARRAY CELL GaAs",
                "SADM (Solar Array drive Mechanism) GEO",
                "SADM (Solar Array drive Mechanism) LEO",]
        )],
        ["Propulsion", new Set(
            ["THRUSTER",
                "TANK TUBING",
                "HET (Hall Effect Thruster)",
                "VALVE LV (Latching Valve)",
                "VALVE FCV (MONO STABLE) Flow Control Valve",
                "VALVE PYRO VALVE",
                "PT (Pressure Transducer)",
                "FILTER",]
        )],
        ["Attitude and Orbit Control System", new Set(
            ["RW (Reaction Wheel) GEO",
                "RW (Reaction Wheel) LEO",
                "DEPLOYMENT DEVICE Antenna, boom",
                "DEPLOYMENT DEVICE Solar Array",]
        )],
        ["Thermal", new Set(
            ["HEAT PIPES",
                "THERMO SWITCH",
                "HEATER",]
        )],
        ["Pyrotechnics", new Set(
            ["Pyro Actuator",]
        )],
        ["Deployment", new Set(
            ["Non Explosive Actuator",]
        )],
        ["Other", new Set(
            ["OPTICS",
                "OPTRONICS",]
        )]
    ])

    /* Find an element in a dataset depending on the entry elt, or return null if not found */
    function getResult(elt, data) {
        let res = new Set();
        let words = elt.split(" ");
        for (var item of data) {
            words.forEach(element => {
                if (item.toLowerCase().includes(element.toLowerCase()) && !res.has(item)) {
                    res.add(item);
                }
            });

        }
        if (res.size == 0) {
            return null
        }
        else {
            return (res);
        }

    }

    /* First step of the conversation that enables to start the guide */
    function runB0() {
        let div = document.createElement("div");
        div.setAttribute("class", "other-message");
        let par = document.createElement("p");
        par.style.color = "white";
        par.innerHTML = "Welcome to the failure rate calculation guide for the miscellaneous items !";
        div.appendChild(par);
        conv_container.appendChild(div);

        setTimeout(() => {
            let div = document.createElement("div");
            div.setAttribute("class", "other-message");
            let par = document.createElement("p");
            par.style.color = "white";
            par.innerHTML = "Before starting anything, to collect/define all technical information about the miscellaneous item in order to select the category of miscellaneous item which will be used";
            div.appendChild(par);
            conv_container.appendChild(div);
            document.getElementById("astroPicture").setAttribute("src", "../../_static/images/new_astronaut_speaks.svg");

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
                document.getElementById("astroPicture").setAttribute("src", "../../_static/images/new_astronaut.svg");

            }, 1500);

        }, 1500);
    }

    /* Second step of the conversation that enables to enter the name of the user's component */
    function runB1() {
        let div = document.createElement("div");
        div.setAttribute("class", "other-message");
        let par = document.createElement("p");
        par.style.color = "white";
        par.innerHTML = "Awesome ! So can you give me the name of your component ?";
        div.appendChild(par);
        conv_container.appendChild(div);
        document.getElementById("astroPicture").setAttribute("src", "../../_static/images/new_astronaut_speaks.svg");

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
            document.getElementById("astroPicture").setAttribute("src", "../../_static/images/new_astronaut.svg");
            sbt.onclick = function () {
                this.disabled = true;
                document.getElementById('inputComponent').disabled = true;
                runB2();
            }

        }, 1500);
    }

    /* Third step of the conversation that enables the users to select a component name among the results of the research in the components names dataset */
    function runB2() {
        console.log("b2");
        let data = getResult(document.getElementById('inputComponent').value, dataComponent);

        let div = document.createElement("div");
        div.setAttribute("class", "other-message");


        if (data != null) {

            for (var item of data) {
                let b = document.createElement("button");
                b.innerHTML = item;
                b.setAttribute("id", item)
                if (this.classNm != null) {
                    b.className = "choice-button " + this.classNm;
                }
                div.appendChild(b);
                buttons.set(item, b);
            }

            for (var [key, btn] of buttons) {
                btn.onclick = function () {
                    runB3(this.id);
                }
            }

            let fail = document.createElement("button");
            fail.innerHTML = "I can't find matching component";
            fail.setAttribute("onclick", "fail")
            fail.className = "button-fail";
            fail.onclick = function () {
                this.disabled = true;
                runB4();
            }

            div.appendChild(fail);
            conv_container.appendChild(div);
            document.getElementById("astroPicture").setAttribute("src", "../../_static/images/new_astronaut_speaks.svg");
        }

        else {
            let par = document.createElement("p");
            par.style.color = "white";
            par.innerHTML = "Maybe we use another name... To which subsystem does your component belong ?";
            div.appendChild(par);
            conv_container.appendChild(div);
            document.getElementById("astroPicture").setAttribute("src", "../../_static/images/new_astronaut_speaks.svg");
            setTimeout(() => { runB5() }, 1500);
        }

    }

    /* Fourth step of the conversation that gives the vale of lambda1 if standard component and/or display linked pages */
    function runB3(key) {
        for (var [k, b] of buttons) {
            document.getElementById(k).disabled = true;
        }
        Array.from(document.getElementsByClassName('button-fail')).map(e => e.disabled = true);
        document.getElementById(key).style.backgroundColor = '#0D3C47';

        let dtType = dataComponentType.get(key);

        if (dtType == "standard") {
            let div = document.createElement("div");
            div.setAttribute("class", "other-message");
            let par = document.createElement("p");
            par.style.color = "white";
            par.innerHTML = "This component is standard";
            div.appendChild(par);
            conv_container.appendChild(div);
            document.getElementById("astroPicture").setAttribute("src", "../../_static/images/new_astronaut_speaks.svg");
            setTimeout(() => {
                let value = standardComponentFR.get(key);
                let div = document.createElement("div");
                div.setAttribute("class", "other-message");
                let par = document.createElement("p");
                par.style.color = "white";
                par.innerHTML = "The value of &lambda;&#8323; is " + value + ".";
                div.appendChild(par);
                conv_container.appendChild(div);
                setTimeout(() => {
                    let div = document.createElement("div");
                    div.setAttribute("class", "other-message");
                    let par = document.createElement("p");
                    par.style.color = "white";
                    par.innerHTML = "Don't forget to note this value";
                    div.appendChild(par);
                    conv_container.appendChild(div);
                    document.getElementById("astroPicture").setAttribute("src", "../../_static/images/new_astronaut_speaks.svg");
                    setTimeout(() => {
                        let div = document.createElement("div");
                        div.setAttribute("class", "other-message");
                        let par = document.createElement("p");
                        par.style.color = "white";
                        par.innerHTML = "<u>You can go on the handbook page</u>";
                        par.setAttribute("onclick", "window.location.href = 'https://nrpmhandbook.reliability.space/en/latest/miscellaneous/handbook/reliability_prediction/process_reliability_modelling.html#standard-model-for-generic-miscellaneous-items';");
                        par.style.cursor = "pointer";
                        par.style.color = "white";
                        div.appendChild(par);
                        conv_container.appendChild(div);
                        document.getElementById("astroPicture").setAttribute("src", "../../_static/images/new_astronaut_speaks.svg");
                    }, 1500);
                }, 1500);
            }
                , 1500
            )
        }
        else {
            let div = document.createElement("div");
            div.setAttribute("class", "other-message");
            let par = document.createElement("p");
            par.style.color = "white";
            par.innerHTML = "This component is non-standard";
            div.appendChild(par);
            conv_container.appendChild(div);
            document.getElementById("astroPicture").setAttribute("src", "../../_static/images/new_astronaut_speaks.svg");
            setTimeout(() => {
                let div = document.createElement("div");
                div.setAttribute("class", "other-message");
                let par = document.createElement("p");
                par.style.color = "white";
                par.innerHTML = "<u>You can go on the handbook page</u>";
                par.setAttribute("onclick", "window.location.href = 'https://nrpmhandbook.reliability.space/en/latest/miscellaneous/handbook/reliability_prediction/process_reliability_modelling.html#non-standard-model-for-specific-miscellaneous-items';");
                par.style.cursor = "pointer";
                par.style.color = "white";
                div.appendChild(par);
                conv_container.appendChild(div);
                document.getElementById("astroPicture").setAttribute("src", "../../_static/images/new_astronaut_speaks.svg");
                setTimeout(() => {
                    let div = document.createElement("div");
                    div.setAttribute("class", "other-message");
                    let par = document.createElement("p");
                    par.style.color = "white";
                    par.innerHTML = "<u>Or you can go to this page to calculate the failure rate</u>";
                    par.setAttribute("onclick", "window.location.href = 'https://nrpmhandbook.reliability.space/en/latest/miscellaneous/models/failure_rate_processing.html';");
                    par.style.cursor = "pointer";
                    par.style.color = "white";
                    div.appendChild(par);
                    conv_container.appendChild(div);
                    document.getElementById("astroPicture").setAttribute("src", "../../_static/images/new_astronaut_speaks.svg");
                }, 1500);
            }, 1500);
        }
    }

    /* Fourth step if the user did not find mathing component in the list provided by the search in runB2()*/
    function runB4() {
        for (var [k, b] of buttons) {
            document.getElementById(k).disabled = true;
        }
        let div = document.createElement("div");
        div.setAttribute("class", "other-message");
        let par = document.createElement("p");
        par.style.color = "white";
        par.innerHTML = "Maybe we use another name... To which subsystem does your component belong ?";
        div.appendChild(par);
        conv_container.appendChild(div);
        document.getElementById("astroPicture").setAttribute("src", "../../_static/images/new_astronaut_speaks.svg");
        setTimeout(() => { runB5() }, 1500);
    }

    /* Fifth step if the user did not find mathing component displaying components categories*/
    function runB5() {
        let data = dataCategories;

        let div = document.createElement("div");
        div.setAttribute("class", "other-message");

        for (var item of data) {
            let b = document.createElement("button");
            b.innerHTML = item;
            b.setAttribute("id", item)
            if (this.classNm != null) {
                b.className = "choice-button " + this.classNm;
            }
            div.appendChild(b);
            buttons.set(item, b);
        }

        for (var [key, btn] of buttons) {
            btn.onclick = function () {
                runB6(this.id);
            }
        }

        conv_container.appendChild(div);
        document.getElementById("astroPicture").setAttribute("src", "../../_static/images/new_astronaut_speaks.svg");

    }

    /* Sixth step displaying the components names related to the chosen category*/
    function runB6(choice) {

        let data = dataModelsByCategories.get(choice);

        let div = document.createElement("div");
        div.setAttribute("class", "other-message");

        for (var item of data) {
            let b = document.createElement("button");
            b.innerHTML = item;
            b.setAttribute("id", item)
            if (this.classNm != null) {
                b.className = "choice-button " + this.classNm;
            }
            div.appendChild(b);
            buttons.set(item, b);
        }

        for (var [key, btn] of buttons) {
            btn.onclick = function () {
                runB3(this.id);
            }
        }

        let fail = document.createElement("button");
        fail.innerHTML = "I can't find matching component";
        fail.setAttribute("onclick", "fail")
        fail.className = "button-fail";
        fail.onclick = function () {
            this.disabled = true;
            runB7();
        }

        div.appendChild(fail);

        conv_container.appendChild(div);
        document.getElementById("astroPicture").setAttribute("src", "../../_static/images/new_astronaut_speaks.svg");

    }

    /* Last step if the user did not find matching components from the mist provided in runB6() leading to tips for holistic components*/
    function runB7() {
        let div = document.createElement("div");
        div.setAttribute("class", "other-message");
        let par = document.createElement("p");
        par.style.color = "white";
        par.innerHTML = "It must be a holistic component";
        div.appendChild(par);
        conv_container.appendChild(div);
        document.getElementById("astroPicture").setAttribute("src", "../../_static/images/new_astronaut_speaks.svg");
        setTimeout(() => {
            let div = document.createElement("div");
            div.setAttribute("class", "other-message");
            let par = document.createElement("p");
            par.style.color = "white";
            par.innerHTML = "There's no standard methodology.";
            div.appendChild(par);
            conv_container.appendChild(div);
            document.getElementById("astroPicture").setAttribute("src", "../../_static/images/new_astronaut_speaks.svg");
            setTimeout(() => {
                let div = document.createElement("div");
                div.setAttribute("class", "other-message");
                let par = document.createElement("p");
                par.style.color = "white";
                par.innerHTML = "<u>You can go on the handbook page to find more information</u>";
                par.setAttribute("onclick", "window.location.href = 'https://nrpmhandbook.reliability.space/en/latest/miscellaneous/handbook/reliability_prediction/reliability_models.html#holistic-model';");
                par.style.cursor = "pointer";
                par.style.color = "white";
                div.appendChild(par);
                conv_container.appendChild(div);
                document.getElementById("astroPicture").setAttribute("src", "../../_static/images/new_astronaut_speaks.svg");
            }, 1500);
        }, 1500);
    }

    runB0();
}

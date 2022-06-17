const InteractType = Object.freeze({
    Button: 1,
    Input: 2,
    Choice: 3
});

class Conversation {
    constructor(container, branches,) {
        this.container = container;
        this.branches = branches;

        this.current_branch = this.branches.get("b0");
        this.current_branch.init(this);

        this.picture = document.getElementById("astroPicture");
        //this.picture.setAttribute("src", "../html/pictures/astronaut1.png")
    }

    next(id) {
        let elt = document.getElementById(id);
        let cls = elt.className;
        if (cls.includes("button-next")) {
            this.current_branch.nextStep()
        }
        else if (id == "inputComponent") {
            let cdn = elt.value;
            let res = this.current_branch.messages.get(this.current_branch.step).getResult(cdn);
            if (res != null) {
                this.current_branch.nextStep(true, res);
            }
            else {
                this.current_branch.nextStep(false);
            }
        }
        else if (cls.includes("categories")) {
            let res = dataModelsByCategories.get(id);
            this.current_branch.nextStep(true, res);
        }

        else if (cls.includes("itemComponents")) {
            this.current_branch.nextStep(true, id);
        }
        else if (cls.includes("button-fail")) {
            this.current_branch.nextStep(false);
        }
        else if (this.current_branch.messages.get(this.current_branch.step) instanceof ConfigurableMessage) {
            if (this.current_branch.messages.get(this.current_branch.step).configure_next) {
                this.current_branch.nextStep(this.current_branch.messages.get(this.branches.step).final_data, id);
            }

        }
        else {
            this.current_branch.nextStep(true, id);
        }
    }

    switchBranch(b, arg) {
        this.current_branch = this.branches.get(b);
        this.current_branch.init(this, arg);
    }
}

class Branch {
    constructor(messages, successors, exitType = null) {
        this.messages = messages;
        this.successors = successors;
        this.exitType = exitType;
        this.step = 0;
        this.data = null;
        this.conversation = null;
    }

    init(conversation, arg = null) {
        this.conversation = conversation
        this.data = arg;
        let msg = this.messages.get(this.step);
        if (msg instanceof EmptyMessage) {
            //console.log("empty")
        }
        else {

            let tr = this.conversation.container.insertRow();
            let td = tr.insertCell(0);
            if (msg.configurable) {
                msg.configure(this.data)
            }
            td.appendChild(msg.htmlRep);
            if (msg instanceof ConfigurableMessage) {
                msg.configure(this.data)
                if (msg.configure_next) {
                    this.conversation.switchBranch(this.successors.get(msg.final_data), arg);
                }
            }
        }

        setTimeout(() => { this.nextStep() }, 1500);
    }

    nextStep(new_branch_id = null, arg = null) {
        this.step += 1;
        if (this.step >= this.messages.size) {
            if (this.successors.get(new_branch_id) != undefined) {
                this.conversation.switchBranch(this.successors.get(new_branch_id), arg);
            }
            else {
                //console.log("end of conversation");
            }
        }
        else {
            let next_msg = this.messages.get(this.step);

            if (next_msg instanceof EmptyMessage) {

            }
            else {
                let tr = this.conversation.container.insertRow();
                let td = tr.insertCell(0);
                if (next_msg instanceof DataMessage) {
                    next_msg.configure(this.data);
                }
                if (next_msg instanceof ConfigurableMessage) {
                    next_msg.configure(arg);
                }
                if (next_msg instanceof ExitMessage) {
                    next_msg.configure(arg);
                    setTimeout(() => { this.nextStep() }, 2500);
                }
                td.appendChild(next_msg.htmlRep);
            }

            if (!next_msg.interactive) {
                setTimeout(() => { this.nextStep() },
                    2500);
            }

        }


    }
}

class Message {
    constructor(extra_intercator, text, sender, configurable, interactive, interactor = null, type = null) {
        this.text = text;
        this.sender = sender;
        this.type = type;
        this.configurable = configurable;
        this.interactive = interactive;
        this.interactor = interactor;
        this.extra_intercator = extra_intercator;

        this.htmlRep = null;

        this.init();

    }

    init(table) {
        let div = document.createElement("div");
        div.setAttribute("class", this.sender);

        if (this.interactive && this.interactor != null) {
            div.appendChild(this.interactor);
        }
        else if (this.interactive && this.interactor == null) {
            this.interactor = document.createElement("div");
            div.appendChild(this.interactor);
        }
        else {
            let par = document.createElement("p");
            //par.innerHTML = this.text;
            div.appendChild(par);
            writeMessage(par, this.text);
        }

        this.htmlRep = div;
    }


}

class EmptyMessage extends Message {
    constructor(extra_intercator, data, sender) {
        super(extra_intercator, "", sender, false, true);
        this.data = data;
    }
}

class SearchMessage extends Message {
    constructor(extra_intercator, data, text, sender, configurable, interactive, interactor = null, type = null) {
        super(extra_intercator, text, sender, configurable, interactive, interactor, type);
        this.data = data;
    }

    getResult(dt) {
        let res = new Set();
        let words = dt.split(" ");
        for (var item of this.data) {
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
}

class DataMessage extends Message {
    constructor(failname, extra_intercator, text, sender, classNm = null, data = null, interactor = null, type = null) {
        super(extra_intercator, text, sender, true, true, interactor, type);
        this.data = data;
        this.classNm = classNm;
        this.buttons = new Map();
        this.failname = failname;
    }

    configure(data) {
        if (data == null) {
            data = this.data;
        }
        for (var item of data) {
            let b = document.createElement("button");
            b.innerHTML = item;
            b.setAttribute("id", item)
            if (this.classNm != null) {
                b.className = "choice-button " + this.classNm;
            }
            else {
                b.className = "choice-button";
            }
            this.interactor.appendChild(b);
            this.buttons.set(item, b);
        }
        for (var [key, btn] of this.buttons) {
            /*var alldisable = ""
            for (var [k, b] of this.buttons) {
                alldisable = alldisable + " document.getElementById('" + k + "').disabled = true;"
            }
            alldisable = alldisable + " Array.from(document.getElementsByClassName('button-fail')).map(e => e.disabled  =true);" + " this.style.backgroundColor = 'rgb(67, 91, 167)'";*/
            btn.onclick = function() {
                setButtons(this.buttons);
                for (var [k, b] of buttons) {
                    document.getElementById('" + k + "').disabled = true;
                }
                Array.from(document.getElementsByClassName('button-fail')).map(e => e.disabled  =true);
                this.style.backgroundColor = 'rgb(67, 91, 167)'
                conv.next('" + key + "');
            }
        }
        let fail = document.createElement("button");
        fail.innerHTML = "I can't find matching component";
        fail.setAttribute("onclick", "fail")
        fail.className = "button-fail";
        fail.setAttribute("id", globalThis.failname);
        fail.setAttribute("onclick", "conv.next('" + this.id + "')");
        this.interactor.appendChild(fail);

        for (var [key, btn] of this.buttons) {
            var alldisable = "this.disabled = true;"
            for (var [k, b] of this.buttons) {
                alldisable = alldisable + " document.getElementById('" + k + "').disabled = true;"
            }
        }
        fail.setAttribute("onclick", "conv.next('" + this.id + "');" + alldisable + " this.style.backgroundColor = 'rgb(67, 91, 167)'")
    }
}

class ConfigurableMessage extends Message {
    constructor(configure_next, extra_intercator, text, sender, dataset) {
        super(extra_intercator, text, sender, true, false);
        this.dataset = dataset;
        this.configure_next = configure_next;
        this.final_data;
    }

    configure(data) {
        let dt = this.dataset.get(data);
        this.final_data = dt;
        this.text = this.text + " " + dt;

        let div = document.createElement("div");
        div.setAttribute("class", this.sender);
        let par = document.createElement("p");

        //par.innerHTML = this.text;
        div.appendChild(par);
        writeMessage(par, this.text);
        this.htmlRep = div;
    }

}

class ExitMessage extends Message {
    constructor(extra_intercator, text, sender, destination) {
        super(extra_intercator, text, sender, true, true);
        this.destination = destination;
    }
    configure(data) {
        let div = document.createElement("div");
        div.setAttribute("class", this.sender);
        let par = document.createElement("button");
        //par.innerHTML = this.text;
        par.setAttribute("onclick", "window.location.href = '" + this.destination + "';");
        par.className = this.sender;
        div.style.borderColor = "#383b3a";
        div.appendChild(par);
        writeMessage(par, this.text);
        this.htmlRep = div;
    }
}

function writeMessage(message, txt) {
    var i = 0;
    setInterval(function () { message.innerHTML += txt.charAt(i); i++; }, 20);
}

window.onload = function () {

    /*let conversationdiv = document.createElement("div");
    conversationdiv.setAttribute("id", "conversation");

    let mainTable = document.createElement("table");
    let trTable = document.createElement("tr");

    let astronautDiv = document.createElement("td");
    astronautDiv.setAttribute("id", "astronautDiv");

    let astronaut_div = document.createElement("div");
    astronaut_div.setAttribute("id", "astronaut");

    let astroPicture = document.createElement("img");
    astroPicture.setAttribute("id", "astroPicture");

    astronaut_div.appendChild(astroPicture);
    astronautDiv.appendChild(astronaut_div);
    trTable.appendChild(astronautDiv);*/

    let conv;

    function clickButtonOk(button){
        button.disabled = true;
        console.log('ici');
        console.log(conv);
        console.log('ici');
        conv.next('nextbutton')
    }

    function clickButtonInput(button){
        button.disabled = true;
        document.getElementById('inputComponent').disabled = true;
        conv.next('inputComponent')
    }

    let buttons;

    function setButtons(btn){
        buttons = btn;
    }

    function clickButtonData(button){
        button.disabled = true;
        document.getElementById('inputComponent').disabled = true;
        conv.next('inputComponent')
    }

    let buttonOK = document.createElement("button");
    buttonOK.innerHTML = "OK";
    buttonOK.className = "button-next";
    buttonOK.setAttribute("id", "nextbutton");
    buttonOK.onclick = function () {clickButtonOk(this)};

    let inputComponent = document.createElement("div");
    let ipt = document.createElement("input");
    ipt.setAttribute("type", "text");
    ipt.setAttribute("id", "inputComponent");
    let sbt = document.createElement("button");
    sbt.onclick = function () {clickButtonInput(this)};
    sbt.innerHTML = "ok";
    inputComponent.appendChild(ipt);
    inputComponent.appendChild(sbt);


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
    ])

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

    let m1 = new Message(null, "Welcome to the failure rate calculation guide for the miscellaneous items !", "other-message", false, false);
    let m2 = new Message(null, "Before starting anything, to collect/define all technical information about the miscellaneous item in order to select the category of miscellaneous item which will be used", "other-message", false, false);
    let m3 = new Message(null, "Is it OK ?", "other-message", false, false);
    let m4 = new Message(null, null, "my-message", false, true, buttonOK);
    let m4_1 = new Message(null, "ok", "my-message", false, false);
    let m5 = new Message(null, "Awesome ! So can you give me the name of your component ?", "other-message", false, false);
    let m6 = new SearchMessage(null, dataComponent, "Enter the name of the component", "my-message", false, true, inputComponent, InteractType.Input)

    let m7 = new Message(null, "I found matching components, chose the right one below", "other-message", false, false);

    let m8 = new DataMessage("componentfail", null, "bb", "other-message");

    let m9 = new ConfigurableMessage(true, null, "This component is", "other-message", dataComponentType
    );

    let m10 = new ExitMessage(null, "You can go on the handbook page", "other-message", "https://nrpmhandbook.reliability.space/en/latest/miscellaneous/models/reliability_guide.html#back_from_misc_failure_rate_processing_balise");
    let m11 = new ExitMessage(null, "Or you can go to this page to calculate the failure rate", "other-message", "failure_rate_processing.html");

    let m12 = new Message(null, "Maybe we use another name... To which subsystem does your component belong ?", "other-message", false, false);
    let m13 = new DataMessage("categoriesfail", null, "...", "other-message", "categories", dataCategories);

    let m14 = new Message(null, "Is this one of these components ?", "other-message", false, false);
    let m15 = new DataMessage("categoriesfail2", null, "", "other-message", "itemComponents");

    let m16 = new ConfigurableMessage(true, null, "This component is", "other-message", dataComponentType
    );

    let m17 = new ExitMessage(null, "You can go on the handbook page", "other-message", "https://nrpmhandbook.reliability.space/en/latest/miscellaneous/models/reliability_guide.html#back_from_misc_failure_rate_processing_balise");
    let m18 = new ExitMessage(null, "Or you can go to this page to calculate the failure rate", "other-message", "failure_rate_processing.html");

    let m19 = new Message(null, "It must be a holistic component", "other-message", false, false);
    let m20 = new Message(null, "There's no standard methodology. ", "other-message", false, false);
    let m21 = new ExitMessage(null, "You can go to the forum and get help from other users", "other-message", "https://nrpmhandbook.reliability.space/en/latest/miscellaneous/models/reliability_guide.html#back_from_misc_failure_rate_processing_balise");

    let m22 = new ConfigurableMessage(false, null, "The value of &lambda;&#8321; is ", "other-message", standardComponentFR);
    let m23 = new Message(null, "Don't forget to note this value", "other-message", false, false);

    let mb0 = new Map([[0, m1], [1, m2], [2, m3], [3, m4], [4, m5], [5, m6]]);
    let mb1 = new Map([[0, m7], [1, m8]]);
    let mb2 = new Map([[0, m12], [1, m13]]);
    let mb3 = new Map([[0, m9]]);
    let mb4 = new Map([[0, m14], [1, m15]])
    let mb5 = new Map([[0, m16]]);
    let mb6 = new Map([[0, m19], [1, m20], [2, m21]]);
    let mb7 = new Map([[0, m10], [1, m11]]);
    let mb8 = new Map([[0, m22], [1, m23], [2, m17], [3, m18]]);


    let b8 = new Branch(mb8, new Map());
    let b7 = new Branch(mb7, new Map());
    let b6 = new Branch(mb6, new Map());
    let b5 = new Branch(mb5, new Map([["standard", "b8"], ["non-standard", "b7"], [false, "b6"]]));
    let b4 = new Branch(mb4, new Map([[true, "b3"], [false, "b2"]]));
    let b3 = new Branch(mb3, new Map([["standard", "b8"], ["non-standard", "b7"], [false, "b6"]]))
    let b1 = new Branch(mb1, new Map([[true, "b3"], [false, "b2"]]));
    let b2 = new Branch(mb2, new Map([[true, "b4"], [false, "b6"]]));
    let b0 = new Branch(mb0, new Map([[true, "b1"], [false, "b2"]]));

    let b = new Map([["b0", b0], ["b1", b1], ["b2", b2], ["b3", b3], ["b4", b4], ["b5", b5], ["b6", b6], ["b7", b7], ["b8", b8]]);
    
    conv = new Conversation(document.getElementById("messagesTrack"), b);

    console.log("conv");
    console.log(conv);

};


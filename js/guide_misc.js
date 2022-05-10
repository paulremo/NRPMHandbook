const InteractType = Object.freeze({
    Button: 1,
    Input: 2,
    Choice: 3
});

class Conversation {
    constructor(container, branches) {
        this.container = container;
        this.branches = branches;

        this.current_branch = this.branches.get("b0");
        this.current_branch.init(this);
    }

    next(id) {
        //console.log("next");
        //console.log(id);
        let elt = document.getElementById(id);
        let cls = elt.className;
        if (cls == "button-next") {
            this.current_branch.nextStep()
        }
        else if (id == "inputComponent") {
            let cdn = elt.value;
            let res = this.current_branch.messages.get(this.current_branch.step).getResult(cdn);
            if (res != null) {
                //console.log("text : " + cdn);
                this.current_branch.nextStep(true, res);
            }
            else {
                //console.log("nothing");
                this.current_branch.nextStep(false);
            }
        }
        else {
            console.log("else");
            this.current_branch.nextStep(true, id);
        }
    }

    switchBranch(b, arg) {
        //console.log(b);
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
        let tr = this.conversation.container.insertRow();
        let td = tr.insertCell(0);
        if (msg.configurable){
            msg.configure(this.data)
        }
        td.appendChild(msg.htmlRep);
        setTimeout(() => { this.nextStep() }, 2000);
    }

    nextStep(new_branch_id = null, arg = null) {
        console.log("next step " + arg);
        this.step += 1;
        if (this.step >= this.messages.size) {
            console.log("end of branch : " + arg);
            if (this.successors.get(new_branch_id) != undefined){
                this.conversation.switchBranch(this.successors.get(new_branch_id), arg);
            }
            else{
                console.log("end of conversation");
            }
        }
        else {
            console.log("stay on branch : " + arg);
            let next_msg = this.messages.get(this.step);
            let tr = this.conversation.container.insertRow();
            let td = tr.insertCell(0);
            if (next_msg instanceof DataMessage) {
                next_msg.configure(this.data);
            }
            if (next_msg instanceof ConfigurableMessage) {
                console.log("configurable message");
                next_msg.configure(arg);
            }
            if (next_msg instanceof ExitMessage) {
                console.log("Exit Message");
                next_msg.configure(arg);
                setTimeout(() => { this.nextStep() }, 2000);
            }
            td.appendChild(next_msg.htmlRep);
            if (!next_msg.interactive) {
                setTimeout(() => { this.nextStep() }, 2000);
            }

        }


    }
}

class Message {
    constructor(text, sender, configurable, interactive, interactor = null, type = null) {
        this.text = text;
        this.sender = sender;
        this.type = type;
        this.configurable = configurable;
        this.interactive = interactive;
        this.interactor = interactor;

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
            par.innerHTML = this.text;
            div.appendChild(par);
        }

        this.htmlRep = div;

    }


}

class SearchMessage extends Message {
    constructor(data, text, sender, configurable, interactive, interactor = null, type = null) {
        super(text, sender, configurable, interactive, interactor, type);
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
    constructor(text, sender, interactor = null, type = null) {
        super(text, sender, true, true, interactor, type);
    }

    configure(data) {
        for (var item of data) {
            let b = document.createElement("button");
            b.innerHTML = item;
            b.setAttribute("id", item)
            b.setAttribute("onclick", "conv.next('" + item + "')")
            this.interactor.appendChild(b);
        }
    }
}

class ConfigurableMessage extends Message {
    constructor(text, sender, dataset) {
        super(text, sender, true, false);
        this.dataset = dataset;
    }

    configure(data) {
        console.log("data : " + data)
        let dt = this.dataset.get(data);
        this.text = this.text + " " + dt;

        let div = document.createElement("div");
        div.setAttribute("class", this.sender);
        let par = document.createElement("p");
        par.innerHTML = this.text;
        div.appendChild(par);
        this.htmlRep = div;
    }

}

class ExitMessage extends Message{
    constructor(text, sender, destination) {
        super(text,sender,true,true);
        this.destination = destination;
    }
    configure(data){
        let div = document.createElement("div");
        div.setAttribute("class", this.sender);
        let par = document.createElement("button");
        par.innerHTML = this.text;
        par.setAttribute("onclick", "window.location.href = '" + this.destination + "';");
        par.className =  this.sender;
        div.style.borderColor = "#383b3a";
        div.appendChild(par);
        this.htmlRep = div;
    }
}


let conv;

let buttonOK = document.createElement("button");
buttonOK.innerHTML = "OK";
buttonOK.setAttribute("class", "button-next");
buttonOK.setAttribute("id", "nextbutton");
buttonOK.setAttribute("onclick", "conv.next('nextbutton')");

let inputComponent = document.createElement("div");
let ipt = document.createElement("input");
ipt.setAttribute("type", "text");
ipt.setAttribute("id", "inputComponent");
let sbt = document.createElement("button");
sbt.setAttribute("onclick", "conv.next('inputComponent')");
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

let m1 = new Message("Welcome to the failure rate calculation guide for the miscellaneous items !", "other-message", false, false);
let m2 = new Message("Before starting anything, to collect/define all technical information about the miscellaneous item in order to select the category of miscellaneous item which will be used", "other-message", false, false);
let m3 = new Message("Is it OK ?", "other-message", false, false);
let m4 = new Message("aa", "my-message", false, true, buttonOK, InteractType.Button);
let m5 = new Message("Awesome ! So can you give me the name of your component ?", "other-message", false, false);
let m6 = new SearchMessage(dataComponent, "Enter the name of the component", "my-message", false, true, inputComponent, InteractType.Input)

let m7 = new Message("I found matching components, chose the right one below", "other-message", false, false);

let m8 = new DataMessage("bb", "other-message");

let m9 = new ConfigurableMessage("This component is", "other-message", dataComponentType
);

let m10 = new ExitMessage("You can go on the handbook page", "other-message", "http://127.0.0.1:5500/02_NRPMHandbook/_build/html/miscellaneous/handbook/reliability_prediction/process_reliability_modelling.html#back_from_misc_failure_rate_processing_balise");
let m11 = new ExitMessage("Or you can go to this page to calculate the failure rate", "other-message", "http://127.0.0.1:5500/02_NRPMHandbook/_build/html/miscellaneous/models/failure_rate_processing.html");


let mb0 = new Map([[0, m1], [1, m2], [2, m3], [3, m4], [4, m5], [5, m6]]);
//console.log(mb0);
let mb1 = new Map([[0, m7], [1, m8]]);
let mb2 = new Map([[0, new Message("b2", "other-message", false, false)]]);
let mb3 = new Map([[0, m9],[1, m10],[2, m11]]);

let b3 = new Branch(mb3, new Map())
let b1 = new Branch(mb1, new Map([[true, "b3"]]));
let b2 = new Branch(mb2, new Map());
let b0 = new Branch(mb0, new Map([[true, "b1"], [false, "b2"]]));

let b = new Map([["b0", b0], ["b1", b1], ["b2", b2], ["b3", b3]]);
conv = new Conversation(document.getElementById("messagesTrack"), b);
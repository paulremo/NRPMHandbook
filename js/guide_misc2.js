window.onload = function () {
    let conv_container = document.getElementById("messagesTrack");

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

function runB0() {
    let div = document.createElement("div");
    div.setAttribute("class", "other-message");
    let par = document.createElement("p");
    par.innerHTML = "Welcome to the failure rate calculation guide for the miscellaneous items !";
    div.appendChild(par);
    conv_container.appendChild(div);

    setTimeout(() => {
        let div = document.createElement("div");
        div.setAttribute("class", "other-message");
        let par = document.createElement("p");
        par.innerHTML = "Before starting anything, to collect/define all technical information about the miscellaneous item in order to select the category of miscellaneous item which will be used";
        div.appendChild(par);
        conv_container.appendChild(div);

        setTimeout(() => {
            let buttonOK = document.createElement("button");
            buttonOK.innerHTML = "OK";
            buttonOK.className = "button-next";
            buttonOK.setAttribute("id", "nextbutton");
            buttonOK.setAttribute("onclick", "this.disabled = true; runB1()");

            let div = document.createElement("div");
            div.setAttribute("class", "my-message");
            div.appendChild(buttonOK);
            conv_container.appendChild(div);

        }, 1500);

    }, 1500);
}

function runB1() {
    let div = document.createElement("div");
    div.setAttribute("class", "other-message");
    let par = document.createElement("p");
    par.innerHTML = "Awesome ! So can you give me the name of your component ?";
    div.appendChild(par);
    conv_container.appendChild(div);

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
        sbt.setAttribute("onclick", "this.disabled = true; document.getElementById('inputComponent').disabled = true; runB2();");

    }, 1500);
}

function runB2() {
    console.log("b2");
    let data = getResult(document.getElementById('inputComponent').value, dataComponent);

    let div = document.createElement("div");
    div.setAttribute("class", "other-message");

    let buttons = new Map();

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
        /*var alldisable = ""
        for (var [k, b] of buttons) {
            alldisable = alldisable + " document.getElementById('" + k + "').disabled = true;"
        }
        alldisable = alldisable + " console.log(document.getElementsByClassName('button-fail')); Array.from(document.getElementsByClassName('button-fail')).map(e => e.disabled  =true);" + " this.style.backgroundColor = 'rgb(67, 91, 167)'";*/
        btn.setAttribute("onclick", "runB3('"+key + "');")
    }

    let fail = document.createElement("button");
    fail.innerHTML = "I can't find matching component";
    fail.setAttribute("onclick", "fail")
    fail.className = "button-fail";
    fail.setAttribute("onclick", "runB4()");

    /*for (var [key, btn] of this.buttons) {
        var alldisable = "this.disabled = true;"
        for (var [k, b] of this.buttons) {
            alldisable = alldisable + " document.getElementById('" + k + "').disabled = true;"
        }
    }
    fail.setAttribute("onclick", "conv.next('" + this.id + "');" + alldisable)*/

    div.appendChild(fail);

    conv_container.appendChild(div);
}

runB0();
}

class FormulaButton{
    constructor(id, extra_space, name, button){
        this.name = name;
        this.id = id;
        this.extra_space = extra_space;
        this.button = button;
    }
}

class MapButton extends FormulaButton{
    constructor(id, extra_space, name, button,value, controller){
        super(id, extra_space, name, button);
        this.controller = null;
        this.value = value;
        this.displayed = true;
        this.controller = controller;
    }

    expend(){
        if (this.displayed){
            console.log("no display");
            this.extra_space.style.display="none";
            this.displayed = false;
        }
        else{
            this.extra_space.style.display="initial";
            this.displayed = true;
            console.log("display");
        }
    }

    clickedButton(b_id){
        let btn = b_id.split('_')[1];
        if (btn == "1"){
            this.button.style.background = "red";
        }
        else if (btn == "2"){
            this.button.style.background = "gold";
        }
        else{
            this.button.style.background = "green";
        }
        this.button.innerHTML = "changed";
        this.expend();
    }
}

class ThreeChoicesController{
    constructor(b1,b2,b3){
        this.b1 = b1;
        this.b2 = b2;
        this.b3 = b3;
    }

    /*createButtons(){
        let b1 = document.createElement('button');
        b1.innerHTML = "LOW";
        b1.className = "tc-button";
        b1.id = "tcc_1_" + this.id;
        let b2 = document.createElement('button');
        b2.innerHTML = "MEDIUM";
        b2.className = "tc-button";
        b2.id = "tcc_2_" + this.id;
        let b3 = document.createElement('button');
        b3.innerHTML = "HIGH";
        b3.className = "tc-button";
        b2.id = "tcc_2_" + this.id;
        this.html_representation.appendChild(b1);
        this.html_representation.appendChild(b2);
        this.html_representation.appendChild(b3);
    }*/
}

let tcc = new ThreeChoicesController(document.getElementById("tcc_1_3"), document.getElementById("tcc_2_3"), document.getElementById("tcc_3_3"));
let mb = new MapButton(3, document.getElementById("extra_3"), "PiQ", document.getElementById("piQ"), 4, tcc);
mb.expend();

let tcc2 = new ThreeChoicesController(document.getElementById("tcc_1_6"), document.getElementById("tcc_2_6"), document.getElementById("tcc_3_6"));
let mb2 = new MapButton(6, document.getElementById("extra_6"), "PiM", document.getElementById("piM"), 4, tcc2);
mb2.expend();



class FormulaButton {
    constructor(id, name) {
        this.name = name;
        this.id = id;
    }
}

class ThreeChoiceButton extends FormulaButton {
    constructor(id, name, values, choices) {
        super(id, name);
        this.values = values;
        this.choices = choices;
        this.displayed = false;
        this.current_choice = null;
    }

}

class BinaryChoiceButton extends FormulaButton {
    constructor(id, name, values, choices) {
        super(id, name);
        this.values = values;
        this.choices = choices;
        this.selected = false;
        this.current_choice = null;
    }

}

class MapButton extends FormulaButton {
    constructor(id, name, value, subConfiguration) {
        super(id, name);
        this.subConfiguration = subConfiguration;
        this.value = value;
        this.displayed = false;
    }

}

class CentralButton extends FormulaButton {
    constructor(id, name, value) {
        super(id, name);
        this.value = value;
    }

}


class SFConfiguration {
    constructor(nodes, centralNode) {
        this.nodes = nodes;
        this.centralNode = centralNode;
    }
}

class SquidFormula {
    constructor(nb_nodes, node_configurations, main_configuration) {
        this.nb_nodes = nb_nodes;
        this.node_configurations = node_configurations;
        this.main_configuration = main_configuration;
        this.current_configuration = this.main_configuration;

        this.setConfiguration();
    }

    searchNode(id) {
        //console.log(this.current_configuration.nodes)
        return this.current_configuration.nodes.get(id);
    }

    clickNode(node) {
        let triggeredId = node.id;
        //console.log(triggeredId)
        let triggeredNode = this.searchNode(triggeredId);
        if (triggeredNode instanceof ThreeChoiceButton) {
            console.log(triggeredNode.displayed);
            if (triggeredNode.displayed) {
                document.getElementById("tcc_1_" + triggeredId).style.visibility = "hidden";
                document.getElementById("tcc_2_" + triggeredId).style.visibility = "hidden";
                document.getElementById("tcc_3_" + triggeredId).style.visibility = "hidden";
                triggeredNode.displayed = false;
            }
            else {
                document.getElementById("tcc_1_" + triggeredId).style.visibility = "visible";
                document.getElementById("tcc_2_" + triggeredId).style.visibility = "visible";
                document.getElementById("tcc_3_" + triggeredId).style.visibility = "visible";
                triggeredNode.displayed = true;
            }
        }
        else if (triggeredNode instanceof BinaryChoiceButton) {
            if (triggeredNode.selected){
                console.log("true");
                node.style.background = "red";
                node.innerHTML = this.searchNode(triggeredId).name + " : " + this.searchNode(triggeredId).choices.get(false);
                node.title = this.searchNode(triggeredId).values.get(false);
                this.searchNode(triggeredId).selected = false;
                this.searchNode(triggeredId).current_choice = false;
            }
            else{
                console.log("false");
                node.style.background = "green";
                node.innerHTML = this.searchNode(triggeredId).name + " : " + this.searchNode(triggeredId).choices.get(true);
                node.title = this.searchNode(triggeredId).values.get(true);
                this.searchNode(triggeredId).selected = true;
                this.searchNode(triggeredId).current_choice = true;
            }
        }
        else{
            console.log("other");
            this.current_configuration = triggeredNode.subConfiguration;
            this.setConfiguration();
        }
    }

    clickedButton(btn) {
        let btnID = btn.id.split('_')[1];
        let nodeID = btn.id.split('_')[2];
        if (btnID == "1") {
            document.getElementById(nodeID).style.background = "red";
        }
        else if (btnID == "2") {
            document.getElementById(nodeID).style.background = "gold";
        }
        else {
            document.getElementById(nodeID).style.background = "green";
        }
        this.searchNode(nodeID).current_choice = btnID;
        this.updateTitle(nodeID, btnID);
        this.clickNode(document.getElementById(nodeID));
    }

    updateTitle(nodeID, btnID) {
        document.getElementById(nodeID).innerHTML = this.searchNode(nodeID).name + " : " + this.searchNode(nodeID).choices.get(btnID);
        document.getElementById(nodeID).title = this.searchNode(nodeID).values.get(btnID);
    }

    initNode(nodeID) {
        
        if (this.searchNode(nodeID) instanceof ThreeChoiceButton) {
            document.getElementById("tcc_1_" + nodeID).innerHTML = this.searchNode(nodeID).choices.get("1");
            document.getElementById("tcc_2_" + nodeID).innerHTML = this.searchNode(nodeID).choices.get("2");
            document.getElementById("tcc_3_" + nodeID).innerHTML = this.searchNode(nodeID).choices.get("3");

            if (this.searchNode(nodeID).current_choice != null){
                if (this.searchNode(nodeID).current_choice == "1") {
                    document.getElementById(nodeID).style.background = "red";
                }
                else if (this.searchNode(nodeID).current_choice == "2") {
                    document.getElementById(nodeID).style.background = "gold";
                }
                else {
                    document.getElementById(nodeID).style.background = "green";
                }
                document.getElementById(nodeID).innerHTML = this.searchNode(nodeID).name + " : " + this.searchNode(nodeID).choices.get(this.searchNode(nodeID).current_choice);
            }
            else{
                document.getElementById(nodeID).style.background = "grey";
                document.getElementById(nodeID).innerHTML = this.searchNode(nodeID).name
            }
            
        }
        else if (this.searchNode(nodeID) instanceof BinaryChoiceButton){
            if (this.searchNode(nodeID).current_choice != null){
                document.getElementById(nodeID).innerHTML = this.searchNode(nodeID).name + " : " + this.searchNode(nodeID).choices.get(this.searchNode(nodeID).current_choice);
                if (this.searchNode(nodeID).current_choice){
                    document.getElementById(nodeID).style.background = "green";
                }
                else{
                    document.getElementById(nodeID).style.background = "red";
                }
            }
            else{
                document.getElementById(nodeID).style.background = "grey";
                document.getElementById(nodeID).innerHTML = this.searchNode(nodeID).name
            }
        }
        else{
            document.getElementById(nodeID).innerHTML = this.searchNode(nodeID).name;
            document.getElementById(nodeID).style.background = "#47064a";
        }
        document.getElementById("tcc_1_" + nodeID).style.visibility = "hidden";
        document.getElementById("tcc_2_" + nodeID).style.visibility = "hidden";
        document.getElementById("tcc_3_" + nodeID).style.visibility = "hidden";
    }

    setConfiguration(){
        for (var [key, node] of this.current_configuration.nodes) {
            //console.log(key);
            this.initNode(key);
        }
    }

    backToMain(){
        this.current_configuration = this.main_configuration;
        this.setConfiguration();
    }
}

let v1 = new Map();
v1.set("1", 1.3);
v1.set("2", 1.25);
v1.set("3", 1.0);

let c1 = new Map();
c1.set("1", "LOW");
c1.set("2", "MEDIUM");
c1.set("3", "HIGH");

let v2 = new Map();
v2.set("1", 0.3);
v2.set("2", 0.25);
v2.set("3", 0.2);

let c2 = new Map();
c2.set("1", "LOW");
c2.set("2", "PARTIAL");
c2.set("3", "FULL");

let v3 = new Map();
v3.set("1", 0.15);
v3.set("2", 0.13);
v3.set("3", 0.1);

let centralNode = new CentralButton("0", "CENTER", 1);
let centralNode2 = new CentralButton("0", "SUBCENTER", 1);

var binValue = new Map();
binValue.set(true, 1.0);
binValue.set(false, 1.1);

var binChoices = new Map();
binChoices.set(true, "Allowable");
binChoices.set(false, "Not Allowable");

n1_2 = new ThreeChoiceButton("1", "name1b", v1, c2);
n2_2 = new ThreeChoiceButton("2", "name2b", v2, c2);
n3_2 = new ThreeChoiceButton("3", "name3b", v2, c2);
n4_2 = new ThreeChoiceButton("4", "name4b", v3, c2);
n5_2 = new ThreeChoiceButton("5", "name5b", v2, c2);
n6_2 = new ThreeChoiceButton("6", "name6b", v3, c2);

var dic2 = new Map();
dic2.set("1", n1_2);
dic2.set("2", n2_2);
dic2.set("3", n3_2);
dic2.set("4", n4_2);
dic2.set("5", n5_2);
dic2.set("6", n6_2);
conf2 = new SFConfiguration(dic2, centralNode2);

n1_1 = new MapButton("1", "MAP", 0, conf2);
n2_1 = new ThreeChoiceButton("2", "name2", v1, c1);
n3_1 = new ThreeChoiceButton("3", "name3", v1, c1);
n4_1 = new ThreeChoiceButton("4", "name4", v1, c1);
n5_1 = new BinaryChoiceButton("5", "name5", binValue, binChoices);
n6_1 = new BinaryChoiceButton("6", "name6", binValue, binChoices);

var dic1 = new Map();
dic1.set("1", n1_1);
dic1.set("2", n2_1);
dic1.set("3", n3_1);
dic1.set("4", n4_1);
dic1.set("5", n5_1);
dic1.set("6", n6_1);
conf1 = new SFConfiguration(dic1, centralNode)



sf = new SquidFormula(6, null, conf1);


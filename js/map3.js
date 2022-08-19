

function runMap3() {

    const information = new Map([
        ["lambda_3", "Hover an element or click it to get information"],
        ["lambda_1", "The failure rate is referred to as basic failure rate. It is defined at 60% level of confidence and given by the supplier."],
        ["lambda_2", "The supplier identifies the physical parameters contributing to the reliability and accounting for the item specificities.By default, K<sub>parameters</sub> is set to 1, under the condition that the major contributors are sufficiently close to those defined for the basic failure rate. It is the responsibility of the user (the supplier) to adapt and/or define the K<sub>parameters</sub> as relevant with appropriate technical justification."],
        ["pi_Q", "This is the QUALITY factor. This factor covers the quality level used to design/manufacture the miscellaneous item. It addresses the quality process, as a whole, as defined in the ECSS framework."],
        ["pi_M", "This is the MATURITY factor. This factor addresses the maturity level of the supplier."],
        ["pi_T", "This factor relates to the “technology” supporting the item. “Technology” is considered in a wide sense and is already addressed in the IOR equivalent class from which the basic failure rate is derived. No assumption can really be defined to account for the use of a new technology or a technology slightly different. The supplier justifies with technical arguments the reason why the technology of its product matches the technology accounted in the basic failure rate. If it is not the case, a “non-standard model” is developed by the supplier. e.g. SSPA implements a different technology than TWTA and therefore the reliability model used for TWTA will not be used for SSPA."],
        ["pi_C", "Reliability depends on the complexity of the item. The assessment of the complexity is difficult. The supplier justifies with technical arguments the reason why the complexity of its product is consistent with the complexity accounted in the basic failure rate. If it is not the case a “non-standard model” is developed by the supplier."],
        ["pi_OP", "The factor represents the frame of the significant operating conditions of the item. It is item-dependent and relates to Orbit,Temperature,Power,Thermal Cycling,Duty cycle,Other relevant conditions considered as reliability contributor."],
        ["orbit", "This is the ORBIT value"],
        ["temperature", "This is the temperature value"],
        ["power", "This is the power value"],
        ["thermal_cycling", "This is the thermal cycling value"],
        ["duty_cycle", "This is the duty cycle value"],
        ["others", "This is the others value"],
        ["high_pi_Q", "The technical risk is mitigated / cancelled as necessary. This level refers to the high quality standard used for space (refer to ECSS)."],
        ["medium_pi_Q", "The technical risk is optimized. This level is an intermediate level between High quality level and Low quality level."],
        ["low_pi_Q", "The technical risk is mitigated up to the cost target, otherwise accepted."],
        ["high_pi_M", "The supplier is a specialist providing the space stakeholders with the miscellaneous item"],
        ["medium_pi_M", "The item is a new development for the supplier"],
        ["low_pi_M", "The supplier is a newcomer on the market to develop such a product."],
        ["not_compliant", "The basic failure rate has been derived based on different operating conditions and the parameter is assumed to be a contributor to the reliability with high impact"],
        ["partially_compliant", "The basic failure rate has been derived based on different operating conditions and the parameter is assumed to be a contributor to the reliability with medium impact"],
        ["fully_compliant", "The basic failure rate has been derived for the same operating conditions (w.r.t. this parameter)"],
    ]);

    class FormulaEntry {
        constructor(information, id, name, corrector) {
            this.id = id;
            this.information = information;
            this.name = name;
            this.value = null;
            this.corrector = corrector;
        }

    }

    class FormulaButton {
        constructor(information, id, name) {
            this.information = information;
            this.name = name;
            this.id = id;
        }
    }

    class ThreeChoiceButton extends FormulaButton {
        constructor(information, id, name, values, choices, info_data) {
            super(information, id, name);
            this.values = values;
            this.choices = choices;
            this.displayed = false;
            this.current_choice = null;
            this.value = null;
            this.info_data = info_data;
        }

    }

    class BinaryChoiceButton extends FormulaButton {
        constructor(information, id, name, values, choices) {
            super(information, id, name);
            this.values = values;
            this.choices = choices;
            this.selected = false;
            this.current_choice = null;
            this.value = null;
        }

    }

    class MapButton extends FormulaButton {
        constructor(information, id, name, value, subConfiguration) {
            super(information, id, name);
            this.subConfiguration = subConfiguration;
            this.value = value;
            this.displayed = false;
        }

    }

    class CentralButton extends FormulaButton {
        constructor(information, id, name, value) {
            super(information, id, name);
            this.value = value;
        }
    }


    class SFConfiguration {
        constructor(nodes, centralNode, calculationType) {
            this.nodes = nodes;
            this.centralNode = centralNode;
            this.calculationType = calculationType;
        }
    }

    class SquidFormula {
        constructor(nb_nodes, node_configurations, main_configuration, entry) {
            this.nb_nodes = nb_nodes;
            this.node_configurations = node_configurations;
            this.main_configuration = main_configuration;
            this.current_configuration = this.main_configuration;
            this.entry = entry;
            this.selectedEntry = null;
            this.setConfiguration();
        }

        searchNode(id) {
            //console.log(this.current_configuration.nodes)
            return this.current_configuration.nodes.get(id);
        }

        moved(node) {
            let triggeredId = node.id;
            //console.log(triggeredId)
            let triggeredNode = this.searchNode(triggeredId);
            update_help(triggeredNode.information);
        }

        clickNode(node) {
            let triggeredId = node.id;
            //console.log(triggeredId)
            let triggeredNode = this.searchNode(triggeredId);
            if (triggeredNode instanceof ThreeChoiceButton) {
                this.entry.style.visibility = "hidden";
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
                this.entry.style.visibility = "hidden";
                this.entry.value = "";
                if (triggeredNode.selected) {
                    console.log("true");
                    node.style.background = "red";
                    node.innerHTML = this.searchNode(triggeredId).name + " : " + this.searchNode(triggeredId).choices.get(false);
                    node.title = this.searchNode(triggeredId).values.get(false);
                    triggeredNode.value = this.searchNode(triggeredId).values.get(false);
                    this.searchNode(triggeredId).selected = false;
                    this.searchNode(triggeredId).current_choice = false;
                }
                else {
                    console.log("false");
                    node.style.background = "green";
                    node.innerHTML = this.searchNode(triggeredId).name + " : " + this.searchNode(triggeredId).choices.get(true);
                    node.title = this.searchNode(triggeredId).values.get(true);
                    triggeredNode.value = this.searchNode(triggeredId).values.get(true);
                    this.searchNode(triggeredId).selected = true;
                    this.searchNode(triggeredId).current_choice = true;
                }
            }
            else if (triggeredNode instanceof FormulaEntry) {
                this.entry.style.visibility = "visible";
                //document.getElementById("entry_k_parameter").style.visibility = "hidden";
                this.selectedEntry = triggeredNode;
            }
            else if (triggeredNode instanceof MapButton) {
                this.entry.style.visibility = "hidden";
                this.entry.value = "";
                console.log("other");
                this.current_configuration = triggeredNode.subConfiguration;
                this.setConfiguration();
            }
            else {
                var v = this.current_configuration.centralNode.value;
                this.entry.style.visibility = "hidden";
                this.entry.value = "";
                navigator.clipboard.writeText(v);
                alert("Copied the text: " + v);
            }
            this.processCentralValue()
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
            this.searchNode(nodeID).value = this.searchNode(nodeID).values.get(btnID);
            this.updateTitle(nodeID, btnID);
            this.clickNode(document.getElementById(nodeID));
        }

        updateTitle(nodeID, btnID) {
            document.getElementById(nodeID).innerHTML = this.searchNode(nodeID).name + " : " + this.searchNode(nodeID).choices.get(btnID);
            document.getElementById(nodeID).title = this.searchNode(nodeID).values.get(btnID);
        }

        initNode(nodeID) {

            if (this.searchNode(nodeID) instanceof ThreeChoiceButton) {
                //console.log(information.get(this.searchNode(nodeID).info_data.get(1)))
                document.getElementById("tcc_1_" + nodeID).innerHTML = this.searchNode(nodeID).choices.get("1");
                document.getElementById("tcc_1_" + nodeID).setAttribute("onmouseenter", "update_help('" + this.searchNode(nodeID).info_data.get(1) + "')");
                document.getElementById("tcc_2_" + nodeID).innerHTML = this.searchNode(nodeID).choices.get("2");
                document.getElementById("tcc_2_" + nodeID).setAttribute("onmouseenter", "update_help('" + this.searchNode(nodeID).info_data.get(2) + "')");
                document.getElementById("tcc_3_" + nodeID).innerHTML = this.searchNode(nodeID).choices.get("3");
                document.getElementById("tcc_3_" + nodeID).setAttribute("onmouseenter", "update_help('" + this.searchNode(nodeID).info_data.get(3) + "')");

                if (this.searchNode(nodeID).current_choice != null) {
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
                else {
                    document.getElementById(nodeID).style.background = "gray";
                    document.getElementById(nodeID).innerHTML = this.searchNode(nodeID).name
                }

            }
            else if (this.searchNode(nodeID) instanceof BinaryChoiceButton) {
                if (this.searchNode(nodeID).current_choice != null) {
                    document.getElementById(nodeID).innerHTML = this.searchNode(nodeID).name + " : " + this.searchNode(nodeID).choices.get(this.searchNode(nodeID).current_choice);
                    if (this.searchNode(nodeID).current_choice) {
                        document.getElementById(nodeID).style.background = "green";
                    }
                    else {
                        document.getElementById(nodeID).style.background = "red";
                    }
                }
                else {
                    document.getElementById(nodeID).style.background = "gray";
                    document.getElementById(nodeID).innerHTML = this.searchNode(nodeID).name
                }
            }
            else if (this.searchNode(nodeID) instanceof FormulaEntry) {
                if (this.searchNode(nodeID).value != null) {
                    document.getElementById(nodeID).style.background = "green";
                    document.getElementById(nodeID).innerHTML = this.searchNode(nodeID).name + " : " + this.searchNode(nodeID).value;
                }
                else {
                    document.getElementById(nodeID).style.background = "gray";
                    document.getElementById(nodeID).innerHTML = this.searchNode(nodeID).name;
                }
            }
            else if (this.searchNode(nodeID) instanceof MapButton) {
                if (this.searchNode(nodeID).subConfiguration.centralNode.value != null) {
                    document.getElementById(nodeID).innerHTML = this.searchNode(nodeID).name + " : " + this.searchNode(nodeID).subConfiguration.centralNode.value;
                }
                else {
                    document.getElementById(nodeID).innerHTML = this.searchNode(nodeID).name;
                }
                document.getElementById(nodeID).style.background = "#47064a";
            }
            else {
                this.entry.style.visibility = "hidden";
                this.entry.value = "";
            }
            document.getElementById("tcc_1_" + nodeID).style.visibility = "hidden";
            document.getElementById("tcc_2_" + nodeID).style.visibility = "hidden";
            document.getElementById("tcc_3_" + nodeID).style.visibility = "hidden";
        }

        setConfiguration() {
            this.entry.style.visibility = "hidden";
            this.entry.value = "";
            document.getElementById("0").innerHTML = this.current_configuration.centralNode.name + " : " + this.current_configuration.centralNode.value;
            for (var [key, node] of this.current_configuration.nodes) {
                //console.log(key);
                if (key != "0") {
                    this.initNode(key);
                }

            }
        }

        backToMain() {
            this.current_configuration = this.main_configuration;
            this.setConfiguration();
        }

        entryChanged(elt) {
            if (elt.id == "entry_lambda_1") {
                let txt = elt.value;
                if (this.selectedEntry.corrector.test(txt) && !txt.includes("-") && !txt.includes(",")) {
                    document.getElementById(this.selectedEntry.id).innerHTML = this.selectedEntry.name + " : " + txt;
                    document.getElementById(this.selectedEntry.id).style.background = "green";
                    this.selectedEntry.value = parseFloat(txt);
                    //document.getElementById("entry_k_parameter").style.visibility = "visible";
                }
                else {
                    document.getElementById(this.selectedEntry.id).innerHTML = this.selectedEntry.name + " ! " + txt;
                    document.getElementById(this.selectedEntry.id).style.background = "black";
                    this.selectedEntry.value = null;
                }
            }
            else if (elt.id == "entry_k_parameter") {
                let txt = elt.value;
                if (this.selectedEntry.corrector.test(txt) && !txt.includes("-") && !txt.includes(",")) {
                    document.getElementById(this.selectedEntry.id).style.background = "green";
                    this.selectedEntry.value = parseFloat(document.getElementById("entry_lambda_1").value) * parseFloat(txt);
                    document.getElementById(this.selectedEntry.id).innerHTML = this.selectedEntry.name + " : " + this.selectedEntry.value;
                }
                else {
                    document.getElementById(this.selectedEntry.id).innerHTML = this.selectedEntry.name + " ! " + txt;
                    document.getElementById(this.selectedEntry.id).style.background = "black";
                    this.selectedEntry.value = null;
                }
                this.processCentralValue();
            }


        }

        processCentralValue() {
            console.log(this);
            var finalvalue;
            if (this.current_configuration.calculationType == "prod") {
                finalvalue = 1;
            }
            else {
                finalvalue = 0;
            }
            for (var [key, node] of this.current_configuration.nodes) {
                //console.log(key);
                //console.log("id : " + node.id)
                //console.log(this.current_configuration.nodes)
                if (key != "0") {
                    //console.log("node value : " + this.searchNode(node.id).value);
                    if (this.searchNode(node.id).value != null) {
                        if (this.current_configuration.calculationType == "prod") {
                            finalvalue = finalvalue * this.searchNode(node.id).value;
                        }
                        else {
                            finalvalue = finalvalue + this.searchNode(node.id).value;
                        }
                    }
                }

            }
            this.current_configuration.centralNode.value = finalvalue;
            document.getElementById(this.current_configuration.centralNode.id).innerHTML = this.current_configuration.centralNode.name + " : " + finalvalue.toFixed(5);
        }
    }

    let info_pi_Q = new Map([[1, "low_pi_Q"], [2, "medium_pi_Q"], [3, "high_pi_Q"]]);
    let info_pi_M = new Map([[1, "low_pi_M"], [2, "medium_pi_M"], [3, "high_pi_M"]]);
    let info_pi_op = new Map([[1, "not_compliant"], [2, "partially_compliant"], [3, "fully_compliant"]]);

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

    let centralNode = new CentralButton("lambda_3", "0", "&lambda;<sub>3</sub>", 1);
    let centralNode2 = new CentralButton("pi_OP", "0", "&pi;<sub>OP</sub>", 0);

    var binValue = new Map();
    binValue.set(true, 1.0);
    binValue.set(false, 1.1);

    var binChoices = new Map();
    binChoices.set(true, "Allowable");
    binChoices.set(false, "Not Allowable");

    n1_2 = new ThreeChoiceButton("orbit", "1", "Orbit", v1, c2, info_pi_op);
    n2_2 = new ThreeChoiceButton("temperature", "2", "Temperature", v2, c2, info_pi_op);
    n3_2 = new ThreeChoiceButton("power", "3", "Power", v2, c2, info_pi_op);
    n4_2 = new ThreeChoiceButton("thermal_cycling", "4", "Thermal Cycling", v3, c2, info_pi_op);
    n5_2 = new ThreeChoiceButton("duty_cycle", "5", "Duty cycle", v2, c2, info_pi_op);
    n6_2 = new ThreeChoiceButton("others", "6", "Others", v3, c2, info_pi_op);

    var dic2 = new Map();
    dic2.set("1", n1_2);
    dic2.set("2", n2_2);
    dic2.set("3", n3_2);
    dic2.set("4", n4_2);
    dic2.set("5", n5_2);
    dic2.set("6", n6_2);
    dic2.set("0", centralNode2);
    conf2 = new SFConfiguration(dic2, centralNode2, "sum");

    n1_1 = new MapButton("pi_OP", "1", "&pi;<sub>OP</sub>", null, conf2);
    n2_1 = new ThreeChoiceButton("pi_M", "2", "&pi;<sub>M</sub>", v1, c1, info_pi_M);
    n3_1 = new ThreeChoiceButton("pi_Q", "3", "&pi;<sub>Q</sub>", v1, c1, info_pi_Q);
    n4_1 = new BinaryChoiceButton("pi_T", "4", "&pi;<sub>T</sub>", binValue, binChoices);
    n5_1 = new BinaryChoiceButton("pi_C", "5", "&pi;<sub>C</sub>", binValue, binChoices);
    n6_1 = new FormulaEntry("lambda_2", "6", "&lambda;<sub>2</sub>", new RegExp('^[0-9]+\\.?[0-9]*$'));

    var dic1 = new Map();
    dic1.set("1", n1_1);
    dic1.set("2", n2_1);
    dic1.set("3", n3_1);
    dic1.set("4", n4_1);
    dic1.set("5", n5_1);
    dic1.set("6", n6_1);
    dic1.set("0", centralNode);
    conf1 = new SFConfiguration(dic1, centralNode, "prod");



    sf = new SquidFormula(6, null, conf1, document.getElementById("entry-div"));

    console.log(sf.entry)
    function update_help(elt) {
        document.getElementById("messagesTrack").innerHTML = information.get(elt);
    }

}
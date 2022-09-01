function runEEEGuide() {

    let eee_families_informations = new Map([

        ["Capacitors", new Map([
            ["Ceramic", new Map([
                ["Ceramic Capacitor Type I - Low CV", "ECCC_01"],
                ["Ceramic Capacitor Type I - Medium CV", "ECCC_02"],
                ["Ceramic Capacitor Type I - High CV", "ECCC_03"],
                ["Ceramic Capacitor Type II - Low CV", "ECCC_04"],
                ["Ceramic Capacitor Type II - Medium CV", "ECCC_05"],
                ["Ceramic Capacitor Type II - High CV", "ECCC_06"],
                ["Ceramic Capacitor Type II Polymer terminations - Low CV", "ECCC_07"],
                ["Ceramic Capacitor Type II Polymer terminations - High/Medium CV", "ECCC_08"]
            ])],
            ["Tantalum solid", new Map([
                ["Wet tantalum capacitor silver case sealed by elastomer ", "ECTC_01"],
                ["Wet tantalum capacitor silver case sealed by glass beads", "ECTC_02"],
                ["Wet tantalum capacitor beads tantalum case sealed by glass beads", "ECTC_03"],
                ["Dry tantalum capacitor drop packaging", "ECTC_04"],
                ["Dry tantalum capacitor SMD packaging", "ECTC_05"],
                ["Dry tantalum axial metal packaging", "ECTC_06"]
            ])],
            ["Plastic metallized", new Map([
                ["Polypropylene film capacitor (PP)", "ECFC_01"],
                ["Polyethylene terephtalate film capacitor (PET)", "ECFC_02"],
                ["Polyethylene naphtalate film capacitor (PEN)", "ECFC_03"],
                ["Polyphenylene sulfide film capacitor (PPS)", "ECFC_04"],
                ["Teflon film capacitor (PTFE)", "ECFC_05"]
            ])],
            ["Glass", "No longer used in space applications"],
            ["Mica", "No longer used in space applications"],
            ["Aluminium", new Map([
                ["Aluminium liquid electrolyte capacitor", "ECAC_01"],
                ["Aluminium solid electrolyte capacitor", "ECAC_02"]
            ])],
            ["Semiconductors", new Map([
                ["Low power transistors, Silicon MOS lower than 5W", "ECDS_19"]
            ])]
        ])],
        ["Connectors", new Map([
            ["Circular", new Map([
                ["Circular and rectangular connectors", "ECCO_01"]
            ])],
            ["Rectangular", new Map([
                ["Circular and rectangular connectors", "ECCO_01"]
            ])],
            ["PCB", new Map([
                ["Connectors for printed circuits (and similar)", "ECCO_03"]
            ])],
            ["RF coaxial", new Map([
                ["Coaxial connector", "ECCO_02"]
            ])],
            ["Glass fibre", "No longer used in space applications"],
            ["Microminiature", new Map([
                ["Circular and rectangular connectors", "Not modelled directly in FIDES so the recommendation is to use the proposed model"]
            ])],
            ["RF filter", "No longer used in space applications"],
            ["Rack and panel", "No longer used in space applications"]
        ])],
        ["Piezo electric", new Map([
            ["Crystal resonator", new Map([
                ["Quartz resonator (through HCxx type case)", "ECPZ_01"],
                ["Quartz resonator (surface mounted)", "ECPZ_02"],
                ["Quartz oscillator (through XO type case)", "ECPZ_03"],
                ["Quartz oscillator (surface mounted XO, MCSO type case)", "ECPZ_04"]
            ])],
        ])],
        ["Diodes", new Map([
            ["Switching", new Map([
                ["Signal diodes up to 1A (PIN, Schottky, signal, varactor)", "ECDS_10"]
            ])],
            ["Rectifier", new Map([
                ["Rectifying diodes 1A to 3A", "ECDS_11"],
                ["Rectifying diodes > 3A", "ECDS_15"]
            ])],
            ["Voltage regulator", new Map([
                ["Zener regulation diodes up to 1.5W", "ECDS_12"],
                ["Zener regulation diodes more than 1,5W", "ECDS_16"]
            ])],
            ["Voltage reference / Zener", new Map([
                ["Zener regulation diodes up to 1,5W", "ECDS_12"],
                ["Zener regulation diodes more than 1.5W", "ECDS_16"]
            ])],
            ["RF microwave Schottky (Si)", new Map([
                ["PIN, Schottky, Tunnel, varactor diodes (RF HF)", "HFDI_01"]
            ])],
            ["Pin", new Map([
                ["PIN, Schottky, Tunnel, varactor diodes (RF HF)", "HFDI_01"]
            ])],
            ["Hot carrier", new Map([
                ["Signal diodes up to 1A (PIN, Schottky, signal, varactor)", "ECDS_10"],
                ["PIN, Schottky, Tunnel, varactor diodes (RF HF)", "HFDI_01"]
            ])],
            ["Transient suppression", new Map([
                ["Protection diodes up to 3kW (in peak 10ms/100ms) (TVS)", "ECDS_13"],
                ["Protection diodes more than 3kW (in peak 10ms/100ms) (TVS)", "ECDS_17"]
            ])],
            ["High voltage rectifier", new Map([
                ["Rather use Rectifying diodes superior to 3A", "ECDS_15"]
            ])],
            ["Microwave varactor (GaAs)", new Map([
                ["Rather use PIN, Schottky, Tunnel, varactor diodes (RF HF)", "HFDI_01"]
            ])],
            ["Step recovery", "Not usually used in space applications, no more present in the EPPL and not modelled by FIDES 2009"],
            ["RF / microwave varactor ", new Map([
                ["PIN, Schottky, Tunnel, varactor diodes (RF HF)", "HFDI_01"]
            ])],
            ["Current regulator", "Not usually used in space applications, no more present in the EPPL and not modelled by FIDES 2009"],
            ["Microwave Schottky (GaAs)", new Map([
                ["Rather use PIN, Schottky, Tunnel, varactor diodes (RF HF)", "HFDI_01"]
            ])],
            ["RF / microwave pin", new Map([
                ["PIN, Schottky, Tunnel, varactor diodes (RF HF)", "HFDI_01"]
            ])],
            ["Microwave gunn ", "Not usually used in space applications, no more present in the EPPL"]
        ])],
        ["Filters", new Map([
            ["Feedthrough", new Map([
                ["Fixed passive components for microwaves: Attenuator, load (50 Ohm), filter, power divider (combiner, splitter)", "HFOT_01"],
                ["Variable passive components for microwaves: Variable attenuator, tuneable filter", "HFOT_02"],
                ["Passive components with ferrites for microwaves, circulator, isolator, phase shifter", "HFOT_03"]
            ])],
            ["Surface Acoustic Wave", new Map([
                ["Fixed passive components for microwaves: Attenuator, load (50 Ohm), filter, power divider (combiner, splitter)", "HFOT_01"]
            ])]
        ])],
        ["Fuses", new Map([
            ["Fuse", new Map([
                ["Fuse", "ECFU"]
            ])]
        ])],
        ["Inductors", new Map([
            ["RF coils", new Map([
                ["Low current wirewound inductor", "ECIN_01"],
                ["High current (or power) wirewound inductor", "ECIN_02"],
                ["HF RF inductors", "HFHI"]
            ])],
            ["Cores", new Map([
                ["Rather use Multi-layer inductor", "ECIN_03"]
            ])],
            ["Chip", new Map([
                ["Low current wirewound inductor", "ECIN_01"],
                ["High current (or power) wirewound inductor", "ECIN_02"],
                ["Multi-layer inductor", "ECIN_03"]
            ])],
            ["Ferrite switch", new Map([
                ["Low current wirewound inductor", "ECIN_01"]
            ])]
        ])],
        ["Integrated Circuits", new Map([
            ["Microprocessor / Microcontroller / Peripheral", new Map([
                ["Microprocessor, Microcontroller, DSP", "ECIC_59"]
            ])],
            ["Memory SRAM", new Map([
                ["SRAM", "ECIC_61"]
            ])],
            ["Memory DRAM/SDRAM", new Map([
                ["Raher use DRAM", "ECIC_62"]
            ])],
            ["Memory PROM", "Not used in space applications & no more present in the EPPL"],
            ["Memory EPROM", new Map([
                ["Rather use Flash, EEPROM, EPROM", "ECIC_60"]
            ])],
            ["Memory EEPROM", new Map([
                ["Rather use Flash, EEPROM, EPROM", "ECIC_60"]
            ])],
            ["Programmable Logic", new Map([
                ["Rather use FPGA, CPLD, FPGA Antifuse, PAL", "ECIC_58"]
            ])],
            ["ASIC Technologies Digital", new Map([
                ["MOS Silicon, Digital ASIC, simple function", "ECAS_01"],
                ["MOS Silicon, Digital ASIC, complex function", "ECAS_02"],
                ["Silicon Bipolar, BICMOS Digital ASIC", "ECAS_04"]
            ])],
            ["ASIC Technologies Linear", new Map([
                ["Silicon bipolar, BICMOS, Mixed, analogue ASIC", "ECAS_05"]
            ])],
            ["ASIC Technologies Mixed Analog / Digital", new Map([
                ["MOS silicon, Analogue, mixed ASIC", "ECAS_03"],
                ["Silicon bipolar, BICMOS, Mixed, analogue ASIC", "ECAS_05"]
            ])],
            ["Linear Operational Amplifier", new Map([
                ["Analogue and hybrid circuit (MOS, bipolar, BiCMOS)", "ECIS_58"]
            ])],
            ["Linear Sample And Hold Amplifier", new Map([
                ["Rather use Analogue and hybrid circuit (MOS, bipolar, BiCMOS)", "ECIS_58"]
            ])],
            ["Linear Voltage Reference / Regulator", new Map([
                ["Analogue and hybrid circuit (MOS, bipolar, BiCMOS)", "ECIS_58"]
            ])],
            ["Linear Voltage Comparator", new Map([
                ["Analogue and hybrid circuit (MOS, bipolar, BiCMOS)", "ECIS_58"]
            ])],
            ["Linear Switching Regulator", new Map([
                ["Analogue and hybrid circuit (MOS, bipolar, BiCMOS)", "ECIS_58"]
            ])],
            ["Linear Line Driver", new Map([
                ["Analogue and hybrid circuit (MOS, bipolar, BiCMOS)", "ECIS_58"]
            ])],
            ["Linear Line Receiver", new Map([
                ["Analogue and hybrid circuit (MOS, bipolar, BiCMOS)", "ECIS_58"]
            ])],
            ["Linear Timer", new Map([
                ["Rather use Analogue and hybrid circuit (MOS, bipolar, BiCMOS)", "ECIS_58"]
            ])],
            ["Linear Multiplier", new Map([
                ["Rather use Analogue and hybrid circuit (MOS, bipolar, BiCMOS)", "ECIS_58"]
            ])],
            ["Linear Switches", new Map([
                ["Rather use Analogue and hybrid circuit (MOS, bipolar, BiCMOS)", "ECIS_58"]
            ])],
            ["Linear Multiplexers / Demultiplexer", new Map([
                ["Analogue and hybrid circuit (MOS, bipolar, BiCMOS)", "ECIS_58"]
            ])],
            ["Linear Analog To Digital Converter", new Map([
                ["Analogue and hybrid circuit (MOS, bipolar, BiCMOS)", "ECIS_58"]
            ])],
            ["Linear Digital To Analog Converter", new Map([
                ["Analogue and hybrid circuit (MOS, bipolar, BiCMOS)", "ECIS_58"]
            ])],
            ["Linear Other Functions", new Map([
                ["Analogue and hybrid circuit (MOS, bipolar, BiCMOS)", "ECIS_58"]
            ])],
            ["Logic Families", new Map([
                ["Analogue and hybrid circuit (MOS, bipolar, BiCMOS)", "ECIS_58"]
            ])],
            ["Microwave Monolithic Integrated Circuits (MMIC)", new Map([
                ["Si RF and HF (MOS) analogue circuit (power amplifier)", "HFSI-02"],
                ["Si, SiGe Analogue and mixed circuit (MOS, Bipolar, BiCMOS, MOSFET, PHEMT, HBT) including RF and HF", "HFSI_03"],
                ["Si, SiGe RF and HF digital circuit (MOS, bipolar BiCMOS)", "HFSI_04"],
                ["GaAs, RF and HF analogue circuit (power amplifier)", "HFAS_01"],
                ["GaAs Analogue and mixed circuit (MOS, Bipolar, BiCMOS, MOSFET, PHEMT, HBT) including RF and HF", "HFAS_03"],
                ["GaN integrated circuit", "TBD 2021"]
            ])]
        ])],
        ["Relays", new Map([
            ["Mono-stable relay (non latching)", new Map([
                ["Mono-stable relay", "ECPL"]
            ])],
            ["Bi-stable relay (latching)", new Map([
                ["Rather use Mono-stable relay", "ECPL"]
            ])]
        ])],
        ["Resistors", new Map([
            ["Metal Oxide", new Map([
                ["Rather use High stability bulk metal foil accuracy resistor", "ECRE_08"],
                ["Rather use Power film resistor", "ECRE_02"],
                ["Rather use Minimelf high stability (RS) common (RC) low power film resistor", "ECRE_01"]
            ])],
            ["Wirewound Precision (including Surface Mount)", new Map([
                ["Rather use Power wirewound resistor", "ECRE_04"]
            ])],
            ["Wirewound Chassis Mounted", new Map([
                ["Rather use Power wirewound resistor", "ECRE_04"]
            ])],
            ["Variables (trimmer)", "As trimmers are not allowed for space applications according to ECSS-Q-60, no model is provided for this group"],
            ["Composition", "No more present in the EPPL"],
            ["Shunt", new Map([
                ["Power wirewound resistor", "ECRE_04"],
                ["High stability bulk metal foil accuracy resistor", "ECRE_08"]
            ])],
            ["Metal Film", new Map([
                ["High stability bulk metal foil accuracy resistor", "ECRE_08"],
                ["Power film resistor", "ECRE_02"],
                ["Minimelf high stability (RS) common (RC) low power film resistor", "ECRE_01"]
            ])],
            ["Chip (all)", new Map([
                ["Resistive chip", "ECRE_06"]
            ])],
            ["Network (all)", new Map([
                ["SMD resistive network", "ECRE_07"]
            ])],
            ["Heaters, Flexible", "Heaters and flexibles are not modelled in any standard"]
        ])],
        ["Thermistors", new Map([
            ["Temperature compensating", new Map([
                ["Minimelf high stability (RS) common (RC) low power film resistor", "ECRE_01"],
                ["Low power wirewound accuracy resistor", "ECRE_03"],
                ["High stability bulk metal foil accuracy resistor", "ECRE_08"]
            ])],
            ["Temperature measuring", new Map([
                ["Minimelf high stability (RS) common (RC) low power film resistor", "ECRE_01"],
                ["Low power wirewound accuracy resistor", "ECRE_03"],
                ["High stability bulk metal foil accuracy resistor", "ECRE_08"]
            ])],
            ["Temperature sensor", new Map([
                ["Minimelf high stability (RS) common (RC) low power film resistor", "ECRE_01"],
                ["Low power wirewound accuracy resistor", "ECRE_03"],
                ["High stability bulk metal foil accuracy resistor", "ECRE_08"]
            ])]
        ])],
        ["Transistors", new Map([
            ["Low Power, NPN (lower than 2watts)", new Map([
                ["Low power Transistors Silicon bipolar lower than 5W", "ECDS_20"]
            ])],
            ["Low Power, PNP (lower than 2watts)", new Map([
                ["Low power Transistors Silicon bipolar lower than 5W", "ECDS_20"]
            ])],
            ["High Power, NPN (superior to 2watts)", new Map([
                ["Power Transistors Silicon bipolar superior to 5W", "ECDS_21"]
            ])],
            ["High Power, PNP (superior to 2watts)", new Map([
                ["Power Transistors Silicon bipolar superior to 5W", "ECDS_21"]
            ])],
            ["FET N Channel", new Map([
                ["Low power Transistors Silicon MOS lower than 5W", "ECDS_19"],
                ["Low power Transistors Silicon JFET lower than 5W", "ECDS_18"]
            ])],
            ["FET P Channel", new Map([
                ["Low power Transistors Silicon MOS lower than 5W", "ECDS_19"],
                ["Low power Transistors Silicon JFET lower than 5W", "ECDS_18"]
            ])],
            ["RF/microwave Npn Low Power / Low Noise", new Map([
                ["RF HF Low power Transistors Silicon Bipolar lower than 5W", "HFDI_02"],
                ["RF HF Low power Transistors SiGe Bipolar lower than 1W", "HFDI_03"]
            ])],
            ["RF/microwave Pnp Low Power / Low Noise", new Map([
                ["RF HF Low power Transistors Silicon Bipolar lower than 5W", "HFDI_02"],
                ["RF HF Low power Transistors SiGe Bipolar lower than 1W", "HFDI_03"]
            ])],
            ["RF/microwave Bipolar Power", new Map([
                ["RF HF Power Transistors Silicon Bipolar superior to 5W", "HFDI_05"]
            ])],
            ["RF/microwave FET N-channel/ P-channel", "No more present in the EPPL"],
            ["RF/microwave FET Power (Si)", new Map([
                ["Rather use RF HF Power Transistors Silicon MOS superior to 5W", "HFDI_06"]
            ])],
            ["Microwave Power (GaAs)", new Map([
                ["Rather use RF HF Power Transistors GaAs superior to 1W", "HFDI_07"]
            ])],
            ["Microwave Low Noise (GaAs)", new Map([
                ["Rather use RF HF Low power Transistors GaAs lower than 1W", "HFDI_04"],
                ["Rather use RF HF Power Transistors GaAs superior to 1W", "HFDI_07"]
            ])],
            ["Multiple", "Rather model as the sum of all individual transistors"],
            ["Switching", new Map([
                ["Rather use Low power Transistors Silicon bipolar lower than 5W", "ECDS_20"]
            ])],
            ["Chopper", new Map([
                ["Low power Transistors Silicon bipolar lower than 5W", "ECDS_20"],
                ["Low power Transistors Silicon MOS lower than 5W", "ECDS_19"],
                ["Low power Transistors Silicon JFET lower than 5W", "ECDS_18"]
            ])]
        ])],
        ["Transformers", new Map([
            ["Power", new Map([
                ["High Power", ""]
            ])],
            ["Signal", , new Map([
                ["Low Power (or Low Level)", ""]
            ])]
        ])],
        ["Switches", new Map([
            ["Standard DC/AC power toggle", new Map([
                ["Toggle", "ECSW"]
            ])],
            ["Circuit breaker", "Not used in space applications"],
            ["RF switch", "Based on the number of operations of the part"],
            ["Microswitch", new Map([
                ["Rather use Toggle", "ECSW"]
            ])],
            ["Reed switch", new Map([
                ["Rather use Toggle", "ECSW"]
            ])]
        ])],
        ["Opto-electronics", new Map([
            ["Optocoupler", new Map([
                ["Optocoupler with photodiode", "ECOP_01"],
                ["Optocouple with phototransistor", "ECOP_02"]
            ])],
            ["LED", new Map([
                ["LED", "ECLE"]
            ])],
            ["Phototransistor", "Phototransistor after investigation and assessment"],
            ["Photodiode", "Photodiode after investigation and assessment"],
            ["Laser diode", "Single LED/LCD Segment after investigation and assessment"],
            ["CCD", new Map([
                ["ASIC, Silicon bipolar, BiCMOS, Digital ASIC", "ECAS"]
            ])],
            ["LCD screen", "LCD screens (TFT, STN) but not used in space applications"],
            ["Laser detector", "Laser Module - CW Laser” after investigation and assessment"],
            ["Laser transceiver", "Laser Module - CW Laser” after investigation and assessment"]
        ])],
        ["PCB", new Map([
            ["PCB", new Map([
                ["Printed circuit board (PCB)", "ECPC"]
            ])]
        ])],
        ["Hybrids", new Map([
            ["Hybrid", new Map([
                ["Hybrids and Multi Chip Modules", ""]
            ])]
        ])]

    ])

    let eee_families_links = new Map([

        ["Capacitors", "https://nrpmhandbook.reliability.space/en/latest/eee/handbook/reliability_prediction/random_failure/reliability_model_EEE_families.html#capacitors-family-01"],
        ["Connectors", "https://nrpmhandbook.reliability.space/en/latest/eee/handbook/reliability_prediction/random_failure/reliability_model_EEE_families.html#connectors-family-02"],
        ["Piezo electric", "https://nrpmhandbook.reliability.space/en/latest/eee/handbook/reliability_prediction/random_failure/reliability_model_EEE_families.html#piezo-electric-devices-family-03"],
        ["Diodes", "https://nrpmhandbook.reliability.space/en/latest/eee/handbook/reliability_prediction/random_failure/reliability_model_EEE_families.html#diodes-family-04"],
        ["Filters", "https://nrpmhandbook.reliability.space/en/latest/eee/handbook/reliability_prediction/random_failure/reliability_model_EEE_families.html#filters-family-05"],
        ["Fuses", "https://nrpmhandbook.reliability.space/en/latest/eee/handbook/reliability_prediction/random_failure/reliability_model_EEE_families.html#fuses-family-06"],
        ["Inductors", "https://nrpmhandbook.reliability.space/en/latest/eee/handbook/reliability_prediction/random_failure/reliability_model_EEE_families.html#inductors-family-07"],
        ["Integrated Circuits", "https://nrpmhandbook.reliability.space/en/latest/eee/handbook/reliability_prediction/random_failure/reliability_model_EEE_families.html#integrated-circuits-family-08"],
        ["Relays", "https://nrpmhandbook.reliability.space/en/latest/eee/handbook/reliability_prediction/random_failure/reliability_model_EEE_families.html#relays-family-09"],
        ["Resistors", "https://nrpmhandbook.reliability.space/en/latest/eee/handbook/reliability_prediction/random_failure/reliability_model_EEE_families.html#resistors-family-10"],
        ["Thermistors", "https://nrpmhandbook.reliability.space/en/latest/eee/handbook/reliability_prediction/random_failure/reliability_model_EEE_families.html#thermistors-family-11"],
        ["Transistors", "https://nrpmhandbook.reliability.space/en/latest/eee/handbook/reliability_prediction/random_failure/reliability_model_EEE_families.html#transistors-family-12"],
        ["Transformers", "https://nrpmhandbook.reliability.space/en/latest/eee/handbook/reliability_prediction/random_failure/reliability_model_EEE_families.html#transformers-family-13"],
        ["Switches", "https://nrpmhandbook.reliability.space/en/latest/eee/handbook/reliability_prediction/random_failure/reliability_model_EEE_families.html#switches-family-14"],
        ["Opto-electronics", "https://nrpmhandbook.reliability.space/en/latest/eee/handbook/reliability_prediction/random_failure/reliability_model_EEE_families.html#opto-electronics-family-18"],
        ["PCB", "https://nrpmhandbook.reliability.space/en/latest/eee/handbook/reliability_prediction/random_failure/reliability_model_EEE_families.html#pcb"],
        ["Hybrids", "https://nrpmhandbook.reliability.space/en/latest/eee/handbook/reliability_prediction/random_failure/reliability_model_EEE_families.html#hybrids-family-40"]

    ])

    setInterval(function () {
        let img = document.getElementById("animated_picture_eee_guide");
        let src_data = img.src.split('/');
        let elt = src_data[[src_data.length - 1]]
        if (elt == "final_on.svg") {
            img.setAttribute("src","../../_static/images/final_off.svg");
        }
        else if (elt == "final_off.svg") {
            img.setAttribute("src","../../_static/images/final_on.svg");
        }
        else if (elt == "moon_on.svg") {
            img.setAttribute("src","../../_static/images/moon_off.svg");
        }
        else if (elt == "moon_off.svg") {
            img.setAttribute("src","../../_static/images/moon_on.svg");
        }
        else if (elt == "launch_on.svg") {
            img.setAttribute("src","../../_static/images/launch_off.svg");
        }
        else if (elt == "launch_off.svg") {
            img.setAttribute("src","../../_static/images/launch_on.svg");
        }
        else if (elt == "ground_on.svg") {
            img.setAttribute("src","../../_static/images/ground_off.svg");
        }
        else if (elt == "ground_off.svg") {
            img.setAttribute("src","../../_static/images/ground_on.svg");
        }
    }
        , 300);

    let first_step_div = document.createElement("div");
    let second_step_div = document.createElement("div");
    let third_step_div = document.createElement("div");

    function displayStep1() {

        let first_question_div = document.createElement("div");
        first_question_div.className = "other-message";
        first_question_div.innerHTML = "What's your component's family ?"

        document.getElementById("messagesTrack_eee_guide").appendChild(first_question_div);


        first_step_div.className = "my-message";
        document.getElementById("messagesTrack_eee_guide").appendChild(first_step_div);

        let family_filtering_area = document.createElement("input");
        family_filtering_area.id = "family_filtering_area";
        family_filtering_area.className = "information-filtering-eee-guide";
        family_filtering_area.type = "search";
        family_filtering_area.placeholder = " Tap here to filter families"
        family_filtering_area.oninput = function () {
            if (this.value.length > 2) {
                displayFamilyButton(this.value);
            }
            else {
                displayFamilyButton("");
            }
        }


        first_step_div.appendChild(family_filtering_area)

        let first_step_buttons_div = document.createElement("div");
        first_step_buttons_div.id = "first_step_buttons_div"
        first_step_div.appendChild(first_step_buttons_div);
        first_step_div.scrollIntoView();
        displayFamilyButton("");
        
        document.getElementById("messagesTrack_eee_guide").style.height = "400px";


    }


    function removeFamilyBTN() {
        let div = document.getElementById("first_step_buttons_div");
        div.remove();
    }

    function disableFamilyBTN() {
        for (var btn of document.getElementsByClassName("family-button-eee")) {
            btn.disabled = true;
        }
        document.getElementById("family_filtering_area").disabled = true;
    }

    function displayFamilyButton(search) {
        removeFamilyBTN();
        let first_step_buttons_div = document.createElement("div");
        first_step_buttons_div.id = "first_step_buttons_div"
        first_step_div.appendChild(first_step_buttons_div);
        if (search != "") {
            for (var [key, value] of eee_families_informations) {
                if (key.toLowerCase().includes(search.toLowerCase())) {
                    var btn = document.createElement("button");
                    btn.className = "choice-button-eee-guide family-button-eee";
                    btn.innerHTML = key;
                    btn.onclick = function () {
                        this.className = "chosen-choice-button-eee";
                        disableFamilyBTN();
                        displayStep2(this.innerHTML);
                    }
                    first_step_buttons_div.appendChild(btn)
                }
            }
            first_step_div.appendChild(first_step_buttons_div);
        }
        else {
            for (var [key, value] of eee_families_informations) {
                var btn = document.createElement("button");
                btn.className = "choice-button-eee-guide family-button-eee";
                btn.innerHTML = key;
                btn.id = key;
                btn.onclick = function () {
                    this.className += " chosen-choice-button-eee";
                    disableFamilyBTN();
                    displayStep2(this.innerHTML);
                }
                first_step_buttons_div.appendChild(btn)
            }
            first_step_div.appendChild(first_step_buttons_div);
        }
    }

    function removeGroupBTN() {
        let div = document.getElementById("second_step_buttons_div");
        div.remove();
    }

    function disableGroupBTN() {
        for (var btn of document.getElementsByClassName("group-button-eee")) {
            btn.disabled = true;
        }
        document.getElementById("group_filtering_area").disabled = true;
    }

    function displayGroupButton(selection, search) {

        changePicture(2);

        let second_step_buttons_div = document.createElement("div");
        second_step_buttons_div.id = "second_step_buttons_div"
        second_step_div.appendChild(second_step_buttons_div);

        removeGroupBTN();
        let family = eee_families_informations.get(selection);
        if (search != "") {
            for (var [key, value] of family) {
                if (key.toLowerCase().includes(search.toLowerCase())) {
                    var btn = document.createElement("button");
                    btn.className = "choice-button-eee-guide group-button-eee";
                    btn.innerHTML = key;
                    btn.onclick = function () {
                        this.className += " chosen-choice-button-eee";
                        disableGroupBTN();
                        displayStep3(selection, this.innerHTML);
                    }
                    second_step_buttons_div.appendChild(btn)
                }
            }
            second_step_div.appendChild(second_step_buttons_div);
        }
        else {
            for (var [key, value] of family) {
                var btn = document.createElement("button");
                btn.className = "choice-button-eee-guide group-button-eee";
                btn.innerHTML = key;
                btn.id = key;
                btn.onclick = function () {
                    this.className += " chosen-choice-button-eee";
                    disableGroupBTN();
                    displayStep3(selection, this.innerHTML);
                }
                second_step_buttons_div.appendChild(btn)
            }
            second_step_div.appendChild(second_step_buttons_div);
        }
    }

    function displayStep2(selection) {


        let second_question_div = document.createElement("div");
        second_question_div.className = "other-message";
        second_question_div.innerHTML = "What's your component's group ?"

        document.getElementById("messagesTrack_eee_guide").appendChild(second_question_div);


        second_step_div.className = "my-message";
        document.getElementById("messagesTrack_eee_guide").appendChild(second_step_div);

        let group_filtering_area = document.createElement("input");
        group_filtering_area.id = "group_filtering_area";
        group_filtering_area.className = "information-filtering-eee-guide";
        group_filtering_area.type = "search";
        group_filtering_area.placeholder = " Tap here to filter group"
        group_filtering_area.oninput = function () {
            if (this.value.length > 2) {
                displayGroupButton(selection, this.value);
            }
            else {
                displayGroupButton(selection, "");
            }
        }
        second_step_div.appendChild(group_filtering_area)




        let second_step_buttons_div = document.createElement("div");
        second_step_buttons_div.id = "first_step_buttons_div"
        second_step_div.appendChild(second_step_buttons_div);
        second_step_div.scrollIntoView();
        displayGroupButton(selection, "");
        
        document.getElementById("messagesTrack_eee_guide").style.height = "400px";
    }

    function removeModelBTN() {
        let div = document.getElementById("third_step_buttons_div");
        div.remove();
    }

    function disableModelBTN() {
        for (var btn of document.getElementsByClassName("model-button-eee")) {
            btn.disabled = true;
        }
        document.getElementById("model_filtering_area").disabled = true;
    }

    function displayStep3(selection, group) {

        let third_question_div = document.createElement("div");
        third_question_div.className = "other-message";
        third_question_div.innerHTML = "What's your component's model ?"

        document.getElementById("messagesTrack_eee_guide").appendChild(third_question_div);


        third_step_div.className = "my-message";
        document.getElementById("messagesTrack_eee_guide").appendChild(third_step_div);

        let model_filtering_area = document.createElement("input");
        model_filtering_area.id = "model_filtering_area";
        model_filtering_area.className = "information-filtering-eee-guide";
        model_filtering_area.type = "search";
        model_filtering_area.placeholder = " Tap here to filter models"
        model_filtering_area.oninput = function () {
            if (this.value.length > 2) {
                displayModelButton(selection, group, this.value);
            }
            else {
                displayGroupButton(selection, group, "");
            }
        }
        third_step_div.appendChild(model_filtering_area)




        let third_step_buttons_div = document.createElement("div");
        third_step_buttons_div.id = "third_step_buttons_div"
        third_step_div.appendChild(third_step_buttons_div);
        third_step_div.scrollIntoView();
        displayModelButton(selection, group, "");
        
        document.getElementById("messagesTrack_eee_guide").style.height = "400px";
    }

    function displayModelButton(selection, group, search) {

        changePicture(3);

        let third_step_buttons_div = document.createElement("div");
        third_step_buttons_div.id = "third_step_buttons_div"
        third_step_div.appendChild(third_step_buttons_div);

        removeModelBTN();
        let model = eee_families_informations.get(selection).get(group);
        console.log(group)
        if (typeof model == "string" || model == undefined || isEmptyDictionary(model)) {
            displayStep4(selection, group, model, false);
        }
        else {
            if (search != "") {
                for (var [key, value] of model) {
                    if (key.toLowerCase().includes(search.toLowerCase())) {
                        var btn = document.createElement("button");
                        btn.className = "choice-button-eee-guide model-button-eee";
                        btn.innerHTML = key;
                        btn.onclick = function () {
                            this.className += " chosen-choice-button-eee";
                            disableModelBTN();
                            displayStep4(selection, group, this.innerHTML, true);
                        }
                        third_step_buttons_div.appendChild(btn)
                    }
                }
                third_step_div.appendChild(third_step_buttons_div);
            }
            else {
                for (var [key, value] of model) {
                    var btn = document.createElement("button");
                    btn.className = "choice-button-eee-guide model-button-eee";
                    btn.innerHTML = key;
                    btn.id = key;
                    btn.onclick = function () {
                        this.className += " chosen-choice-button-eee";
                        disableModelBTN();
                        displayStep4(selection, group, this.innerHTML, true);
                    }
                    third_step_buttons_div.appendChild(btn)
                }
                third_step_div.appendChild(third_step_buttons_div);
            }
        }

    }

    function displayStep4(selection, group, model, is_fides_model) {

        changePicture(4);

        let final_question_div = document.createElement("div");
        final_question_div.className = "other-message";

        if (is_fides_model) {
            final_question_div.innerHTML = "Your component '" + model + " has a FIDES model components : " + eee_families_informations.get(selection).get(group).get(model) + ".";
        }



        document.getElementById("messagesTrack_eee_guide").appendChild(final_question_div);
        final_question_div.scrollIntoView();
        
        document.getElementById("messagesTrack_eee_guide").style.height = "400px";

        setTimeout(() => {
            let final_question_div2 = document.createElement("div");
            final_question_div2.className = "other-message";

            if (is_fides_model) {
                final_question_div2.innerHTML = "You can find the dedicated handbook page <a href='" + eee_families_links.get(selection) + "' style='color:white;'>here</a>.";
            }

            document.getElementById("messagesTrack_eee_guide").appendChild(final_question_div2);
            final_question_div2.scrollIntoView();
        
            document.getElementById("messagesTrack_eee_guide").style.height = "400px";
        }, 200);

    }

    function changePicture(step) {
        if (step == 2) {
            setTimeout(() => {
                document.getElementById("animated_picture_eee_guide").style.opacity = "0.75";
                setTimeout(() => {
                    document.getElementById("animated_picture_eee_guide").style.opacity = "0.5";
                    setTimeout(() => {
                        document.getElementById("animated_picture_eee_guide").style.opacity = "0.25";
                        setTimeout(() => {
                            displayPicture(2)
                        }, 100);
                    }, 100);
                }, 100);
            }, 100);

        }
        else if (step == 3) {
            setTimeout(() => {
                document.getElementById("animated_picture_eee_guide").style.opacity = "0.75";
                setTimeout(() => {
                    document.getElementById("animated_picture_eee_guide").style.opacity = "0.5";
                    setTimeout(() => {
                        document.getElementById("animated_picture_eee_guide").style.opacity = "0.25";
                        setTimeout(() => {
                            document.getElementById("animated_picture_eee_guide").style.opacity = "0";
                            displayPicture(3);
                        }, 100);
                    }, 100);
                }, 100);
            }, 100);

        }
        else if (step == 4) {
            setTimeout(() => {
                document.getElementById("animated_picture_eee_guide").style.opacity = "0.75";
                setTimeout(() => {
                    document.getElementById("animated_picture_eee_guide").style.opacity = "0.5";
                    setTimeout(() => {
                        document.getElementById("animated_picture_eee_guide").style.opacity = "0.25";
                        setTimeout(() => {
                            document.getElementById("animated_picture_eee_guide").style.opacity = "0";
                            displayPicture(4);
                        }, 100);
                    }, 100);
                }, 100);
            }, 100);

        }
    }

    function displayPicture(step) {
        if (step == 2) {
            document.getElementById("animated_picture_eee_guide").src = "../../_static/images/launch_on.svg";
            document.getElementById("animated_picture_eee_guide").style.visibility = "visible";
            document.getElementById("animated_picture_eee_guide").style.opacity = "0";
            setTimeout(() => {
                document.getElementById("animated_picture_eee_guide").style.opacity = "0.25";
                setTimeout(() => {
                    document.getElementById("animated_picture_eee_guide").style.opacity = "0.5";
                    setTimeout(() => {
                        document.getElementById("animated_picture_eee_guide").style.opacity = "0.75";
                        setTimeout(() => {
                            document.getElementById("animated_picture_eee_guide").style.opacity = "1";
                        }, 100);
                    }, 100);
                }, 100);
            }, 100);

        }
        else if (step == 3) {
            document.getElementById("animated_picture_eee_guide").src = "../../_static/images/moon_on.svg";
            document.getElementById("animated_picture_eee_guide").style.visibility = "visible";
            document.getElementById("animated_picture_eee_guide").style.opacity = "0";
            setTimeout(() => {
                document.getElementById("animated_picture_eee_guide").style.opacity = "0.25";
                setTimeout(() => {
                    document.getElementById("animated_picture_eee_guide").style.opacity = "0.5";
                    setTimeout(() => {
                        document.getElementById("animated_picture_eee_guide").style.opacity = "0.75";
                        setTimeout(() => {
                            document.getElementById("animated_picture_eee_guide").style.opacity = "1";
                        }, 100);
                    }, 100);
                }, 100);
            }, 100);

        }
        else if (step == 4) {
            document.getElementById("animated_picture_eee_guide").src = "../../_static/images/final_on.svg";
            document.getElementById("animated_picture_eee_guide").style.visibility = "visible";
            document.getElementById("animated_picture_eee_guide").style.opacity = "0";
            setTimeout(() => {
                document.getElementById("animated_picture_eee_guide").style.opacity = "0.25";
                setTimeout(() => {
                    document.getElementById("animated_picture_eee_guide").style.opacity = "0.5";
                    setTimeout(() => {
                        document.getElementById("animated_picture_eee_guide").style.opacity = "0.75";
                        setTimeout(() => {
                            document.getElementById("animated_picture_eee_guide").style.opacity = "1";
                        }, 100);
                    }, 100);
                }, 100);
            }, 100);

        }
    }

    function isEmptyDictionary(dico){
        let empty = true;
        for (var [key,value] of dico){
            if (dico.get(key) != ""){
                empty = false;
            }
        }
        return empty
    }

    displayStep1()

}
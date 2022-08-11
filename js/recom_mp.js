let recoms_mp = new Map([
    ["phase type", ""],
    ["phase name", "Two phases cannnot have the same name. You can add the 'ON/OFF' indication to differentiate two similar phases. <br>Enter a name starting with a lowercase letter, with no space and no punctuation except for the underscore '_' that can be added to seprate terms"],
    ["unit onboard", ""],
    ["calendar time", ""],
    ["ambient temperature", "Must be between -55&deg;C and +125&deg;C"],
    ["delta t", "A cycle generally corresponds to a temperature deviation from the reference temperature. It can also be considered as a temperature variation around an average temperature."],
    ["cycle duration", ""],
    ["number of cycles", ""],
    ["max temperature", "Must me &leq; 180&deg;C"],
    ["humidity rate", "Should be 0 for Orbit phases"],
    ["random vibrations", "Should be 0.01 Grms for Orbit phases and 18 Grms for Launch phases."],
    ["saline pollution", "Should be LOW for Orbit phases"],
    ["environment pollution", "Should be L(Low) for Orbit phases"],
    ["application pollution", "Should be L(Low) for Orbit phases"],
    ["protection level", "Should be H (Hermetic) for Orbit phases if the component ids inside the satellite."]
])

let infos_mp = new Map([
    ["phase type", "There are 5 types of phases to which different recommendation will be applied.<ul><li> Storage phase corresponds to a phase during which the product is stored and kept steady. For space application, this may include numeral static test of the electronics on-bord. To consider if the storage phase last a considerable amount of time.</li><li>Transport phase corresponds to a phase during which the product is shipped to its final destination. For space application, this phase may include some stress for the product if the environment changes during transport e.g. temperature, humidity, vibration</li><li>Launch phase corresponds to a critical mechanical phase which involves a lot of vibrations for the product. Its impact is rather limited on the overall reliability due to it's very short duration time.</li><li>Reaching orbit phase, also called 'Orbit raising phase', might have a noticeable impact on the overall reliability of the product. Depending on the propulsion technology, it can last a considerable amount of time. This phase very often include ON and OFF phase of the unit onboard.</li><li>In-orbit phase, also called 'station keeping phase', is predominant in overall reliability. Being the rated use phase of a mission, its duration is very often far above the other phases. This phase mostly depends on the variable thermal stress of the life profile.</li><li>Other phases corresponds to any phase that would not fit in the other categories. It can be used to modelize the deorbitation of the product, though its reliability should not be taken into account for the rated use of the mission.</li></ul>"],
    ["phase name", "The phase name must describe in a few words the objective of the phase."],
    ["unit onboard", "The equipment is generally switched off when it is not used to limit as much as possible the consumption of energy. In the mission profile, the impact on EEE components of the frequent ON / OFF cycles is considered only by the thermal variations due to the self-heating of electronic equipment in the model. The influence of frequent switching on and switching off on the reliability of electronic equipment is not perfectly apprehended and not correctly considered.\nA transmitter of a Low Earth Orbit satellite being switched off when out of the scope of the reception stations can occur up to 100 000 times over the mission lifetime without having any failures.For this specific constraint, no potential impacts have been currently found with experience of In - Orbit Return.Consequently, the impact of these frequent ON / OFF cycles is considered as a wear - out phenomenon of EEE components and is discussed in Section 3.4.6.5."],
    ["calendar time", "The calendar time represents the duration of the whole phase."],
    ["ambient temperature", "The ambient temperature represents the mean ambient temperature during cycles."],
    ["delta t", "&Delta;T represents the mean amplitude of temperature during cycles. It has to be chosen accordingly fot the corresponding temperature profiles."],
    ["cycle duration", "Cycle duration represents the mean duration of one tempreature cycle."],
    ["number of cycles", "The number of cycles indicates how many cycles happen during the whole phase duration."],
    ["max temperature", "The maximum temperature to be computed for the mission profile corresponds to the highest temperature reached by the electronic equipment during the cycle. The number of cycles is estimated with the total duration of each cycle, and the overall duration of the in-orbit phase."],
    ["random vibrations", "The vibrations are mainly present during the launch phase. Once the satellite is in space, there is only little vibration and failures due to vibrations are considered as random failures. So, vibrations are mainly considered in the mission profile during the launch phase and can be considered as extrinsic failures. The value of vibrations depends on the position of the electronic equipment inside the satellite, on the maximum vibrations endured by the satellite during the launch, and on the launcher. This value is estimated by measurements or mechanical simulations. Even if the influence of vibrations can be small due to the low duration of this phase, the vibrations have to be considered.\nWhatever the estimated reliability prediction due to vibrations, as the risk of extrinsic failures due to vibrations is still present, specific qualifications of the equipment should be done to ensure that vibrations cannot affect the behaviour of the electronic equipment."],
    ["saline pollution", "This pollution is mainly present near the seaside or for naval equipment; for space applications, this pollution is relevant during the launch phase only if the launch platform is located near the seaside"],
    ["environment pollution", "This pollution could be considered for equipment located in areas where chemical pollutants are present such as industrial areas, chemical industries, oil and gas industries; for space applications, this pollution is relevant during the launch phase only if the launch platform is close to an industrial area;"],
    ["application pollution", "This pollution is present in areas where the pollution due to other equipment is present, for example an engine of a vehicle; for space applications, this pollution is not relevant except for some equipment close to thrusters"],
    ["protection level", "The protection is linked to the ability of humidity to infiltrate in the EEE components; as humidity is not present in space, the protection level is considered as “hermetic”."]
])

var infos_mp_categories = new Map([
    ["1", "Here it's possible to indicate the general information relative to the phase."],
    ["2", "Here you can indicate the time information of the phase and its differents cycles."],
    ["3", "Here you can indicate the temperature information of the phase and its differents cycles."],
    ["4", "Here you can indicate the information relative to the humidity and vibration conditions."],
    ["5", "Here it's possible to indicate the chemical information relative to the phase."]
])
<!--- Copyright (C) Matrisk GmbH 2022 -->

(eee_8_6)=
# Extrinsic failures of EEE components

An {term}`extrinsic failure <Extrinsic failure>` is a failure induced by the space environment on the satellite elements. Sucess

For {term}`EEE` components reliability assessment, the following aspects need to be considered:

-   The failure modes induced by the "physical conditions" are assumed to be mitigated by appropriate design and qualification;

-   Wear-out-like threats due to UV degradation, atomic oxygen effects are assumed to be controlled through appropriate qualification within the nominal {term}`mission lifetime <Mission lifetime>` of the satellite;

-   Heavy ions, radiations and plasma can lead to specific defects. EEE components are sensitive to SEE with high energy particles. These particles are changing the state of transistors in junction and are destructive or non-destructive for the component depending on its technology. Most of the {term}`EEE` components designed for space applications are qualified against SEE with high energy particles. For commercial components, specific tests are realised to ensure a minimum of robustness against these constraints.

(eee_8_6_1)=
## List of components sensitive to extrinsic failures

Among the components which are listed by {term}`ESA` in its {term}`EPPL`, only few of them are sensitive to {term}`extrinsic failures <Extrinsic failure>`:

-   Memories such as Memory PROM, Memory {term}`EPROM`, Memory {term}`EEPROM`, Flash memory, Programmable Logic, Anti fuse {term}`FPGA`, SRAM based FPGA, Flash technology: these components are sensitive to SEE; design is realised in order to have redundancies and internal checksum, moreover specific additional qualifications are performed to verify the behaviour of these components subjected to a flux of protons or radiations;

-   {term}`Deep Sub Micron <Deep Sub Micron>` components: these components have a low value of power supply and high level of integration and so, are sensitive to SEE, specific additional qualifications are performed to verify the behaviour of these components subjected to a flux of protons or radiations;

-   Optoelectronics such as LED, laser diodes, optocouplers: these components can be sensitive to the erosion due to ultra-violet and light with damage on the lens and optical parts;

-   Switches such as end-of-course switches: some concerns have been reported on the behaviour of these components in vacuum.

(eee_8_6_2)=
## Consideration of extrinsic failures in reliability prediction

This approach approach for E{term}`EEE`EE components accounts for some {term}`extrinsic failure <Extrinsic failure>` by considering the mechanical, thermal and electrical over-stress. These over-stresses are defined for each {term}`EEE` component by the factor $C_{\text{sensitivity}}$ representing the coefficient of sensitivity to over-stresses inherent to each considered technology. Generally, the contributions of electrical, mechanical and thermal over-stresses are respectively 55%, 35% and 10%. Afterwards, this factor has a direct influence in the calculation of the induced factor $\Pi_{\text{induced}}$ and thus on the global reliability prediction of {term}`EEE` components. Therefore, by the factor $C_{\text{sensitivity}}$, extrinsic influences are part of the calculation, although not covering space specific environmental effects such as radiations, ultra violet light and vacuum.

To minimize the occurrence of {term}`extrinsic failures <Extrinsic failure>` on the global reliability prediction, design rules and specific qualification tests should be performed to ensure integrity of {term}`EEE` components:

-   Technical analysis: a technical analysis should be performed for all {term}`EEE` components to identify potential risks of {term}`extrinsic failures <Extrinsic failure>`, especially for SEE and radiations;

-   Data from manufacturers: manufacturers are generally providing information about the behaviour of their {term}`EEE` components with SEE and radiations; that is why it is recommended to select components which are not sensitive to radiations;

-   Qualification tests: manufacturers which supply {term}`EEE` components not sensitive to SEE and radiations are realizing qualification tests; analysis of these {term}`test data <Test data>` is useful.

When the different technical analyses are correctly realised, the {term}`extrinsic failures <Extrinsic failure>`, and especially the destructive SEE should not have any impact on the {term}`EEE` components and on the electronic equipment during the lifetime of the satellite. Analysis and tests in regard to radiations can provide information about the level of damage due to {term}`extrinsic failures <Extrinsic failure>`. Otherwise, when the technical analyses are not realised or not correctly performed, failures due to extrinsic effects can be considered as design errors, and classified as {term}`systematic failures <Systematic failure>`.
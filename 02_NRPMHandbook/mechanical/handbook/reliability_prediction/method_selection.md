<!--- Copyright (C) Matrisk GmbH 2022 -->

(meca_4_5)=
# Method selection for different items and failure mechanisms

Once it is clear what needs to be considered in the {term}`reliability prediction <Reliability prediction>` (see {numref}`meca_4_4`), the next step is to decide _how_ each part and {term}`failure mechanism <Failure mechanism>` should be modelled. The present section gives guidance on this method selection task.

(meca_4_5_1)=
## Categories and combinations of mechanical failure mechanisms
The method selection for {term}`mechanical parts <Mechanical part>` reliability modelling should always take basis in a good understanding of the {term}`failure mechanisms <Failure mechanism>` that are of relevance for the considered item, especially the predominant ones. To simplify the presentation in the following sections, mechanical {term}`failure mechanisms <Failure mechanism>` are grouped into five distinct categories listed in {numref}`meca-table4-4`.

```{list-table} Categories of mechanical failure mechanisms
:name: meca-table4-4

* - <table class="myTable" id="meca_table4_4">
		<thead>
			<tr>
				<th>Failure mechanism category</th>
				<th>Examples</th>
			</tr>
		</thead>
		<tr>
			<td>Distortion</td>
			<td>Creep, elastic deformation, plastic deformation, displacement</td>
		</tr>
		<tr>
			<td>Fracture / Fatigue</td>
			<td>Ductile/brittle fracture, high-cycle fatigue, low-cycle fatigue</td>
		</tr>
		<tr>
			<td>Mechanical wear</td>
			<td>Adhesive wear, abrasive wear, lubricated wear</td>
		</tr>
		<tr>
			<td>Corrosion</td>
			<td>Stress-corrosion cracking, galvanic corrosion</td>
		</tr>
		<tr>
			<td>Material {term}`degradation <Degradation>`</td>
			<td>Thermal {term}`degradation <Degradation>`, radiation damage</td>
		</tr>
	</table>
```

The probability of failure can for some items be driven by several different {term}`failure mechanisms <Failure mechanism>`. When using {term}`PoF` methods, the results for the individual mechanisms have to be combined to estimate the overall part reliability. The correct way of doing this depends on whether the different {term}`failure mechanisms <Failure mechanism>` can be considered as independent processes or events.

For independent {term}`failure mechanisms <Failure mechanism>`, it is sufficient to consider one process at once, and to combine the results using normal probability calculus.

However, independence between different {term}`failure mechanisms <Failure mechanism>` may not always be a valid assumption, e.g. in case of physical interactions between different {term}`failure mechanisms <Failure mechanism>` processes. {numref}`meca-table4-5` gives an overview for which combinations of {term}`failure mechanisms <Failure mechanism>` such effects may have to be considered. The table distinguishes interactions between different {term}`failure mechanisms <Failure mechanism>` affecting the same part (left hand side) and between different {term}`failure mechanisms <Failure mechanism>` affecting different parts (right hand side).

```{list-table} Possible interactions between different mechanical failure mechanisms
:name: meca-table4-5

* - ![table5_4_5](../../pictures/table5_4_5.png)
```


A simple way to account for such interactions is to select the dominating {term}`failure mechanism <Failure mechanism>` (e.g. the one with the highest probability of failure) and to consider the effect of other {term}`failure mechanism(s) <Failure mechanism>` on the dominating {term}`failure mechanism <Failure mechanism>`. When using {term}`structural reliability methods <Structural reliability method>`, this can be achieved by adapting the basic variable distributions to account for physical effects related to other {term}`failure mechanism <Failure mechanism>` processes. The assessment then requires the following steps:

* Selection of the dominating {term}`failure mechanism <Failure mechanism>` - e.g. wear of a lubricated bearing.
* Identification of other {term}`failure mechanisms <Failure mechanism>` that may interact with the dominating {term}`failure mechanism <Failure mechanism>` using {numref}`meca-table4-5` - e.g. distortion of the membrane compressing the bearing.
* Identification of physical variables used by the model for the dominating {term}`failure mechanism <Failure mechanism>` that may be affected by the interaction - e.g. increase of the contact pressure in the bearing.
* Adjustment of the identified basic variables distributional models to account for the effect of the interaction - e.g. by considering the increased contact pressure.

Finally, it should be noted that besides physical interactions between {term}`failure mechanism <Failure mechanism>`, there are other possible reason for statistical dependence, such as common cause effects due to random physical variables (e.g. temperature, loads), having an effect on different {term}`failure mechanisms <Failure mechanism>` and/or parts. An example for explicit common cause modelling in a redundant bolted {term}`interface <Interface>` with load redistribution can be found in {cite:p}`mec-AO-1-8017-14-NL-KM`.

(meca_4_5_2)=
## Selection of methods for part level mechanical reliability prediction
The approach for method selection presented in the following is centred around the identified {term}`failure mechanisms <Failure mechanism>`, see {numref}`meca-table4-6`  giving an overview of different {term}`mechanical part <Mechanical part>` types with associated {term}`failure mechanisms <Failure mechanism>` and modelling recommendations.

The third column of {numref}`meca-table4-6` gives an indication about the relevance of each part type for different classes of mechanical systems introduced in {numref}`meca-table4-3` . As has been discussed in {numref}`meca_4_4`, it may be sufficient to focus on those parts that dominate system level reliability. In the same way, the reliability of a specific part is often dominated by a single (or very few) {term}`failure mechanism(s) <Failure mechanism>`, allowing to focus the analysis especially with methods that are based on the {term}`PoF`. 

Which {term}`failure mechanism(s) <Failure mechanism>` dominates reliability depends not only on the part type, but also on the application; e.g. a spring is likely to fail differently when used with static, cyclic or dynamic loading. The “predominant” {term}`failure mechanisms <Failure mechanism>` listed in {numref}`meca-table4-6` should therefore be considered only as a first guidance.

The remaining columns of {numref}`meca-table4-6` provide recommendations on the modelling of the selected parts and {term}`failure mechanisms <Failure mechanism>`. The focus is on the methods making reference to the {term}`physics of failure <Physics of failure>`, in particular {term}`structural reliability methods <Structural reliability method>` as outlined in {numref}`meca_4_6` and {numref}`meca_4_7`. 

The application of the Handbook approaches is restricted to selected parts, allowing the possible use of the {term}`NSWC` Handbook {cite:p}`mec-NSWC-11` as a scaling method (which is based the {term}`physics of failure <Physics of failure>`) to adapt statistical estimates based on data samples that are more relevant for space applications than the {term}`NSWC` data, see {numref}`meca_4_3_1_5` for discussion. The {term}`NPRD` Handbook {cite:p}`mec-NPRD-16` is not considered any further. 

In {numref}`meca-table4-6`, {term}`statistical methods <Statistical method>` are mentioned only where a prediction based on a pure {term}`physics of failure <Physics of failure>` approach is unlikely to be successful. However, as has been discussed already in {numref}`meca_4_3_2`, {term}`statistical methods <Statistical method>` are generally preferred over {term}`physics of failure <Physics of failure>` approaches provided that sufficient and relevant data is available to perform the prediction. The {term}`failure mechanisms <Failure mechanism>` listed in {numref}`meca-table4-6` can provide guidance for judging the relevance of a specific data set, always keeping in mind the strong variability in {term}`mechanical parts <Mechanical part>` reliability when seemingly identical parts are applied under different conditions.

Also a combined approach with {term}`Bayesian inference <Bayesian inference>` updating of a prior derived from the {term}`physics of failure <Physics of failure>`, using relevant data even with limited sample size, is generally preferred over a pure {term}`physics of failure <Physics of failure>` approach, see {numref}`meca_4_3_2_4` and {numref}`meca_4_6_5` for guidance.

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'meca_table4_6')" placeholder="Search table...">

```{list-table} Mechanical part types, associated failure mechanisms and modelling recommendations
:name: meca-table4-200

* - <table id="meca_table4_6" class="myTable" overflowY="scroll">
		<thead>
			<tr class="db-header">
				<th colspan="5"></th>
				<th colspan="3">Structural reliability methods</th>
				<th colspan="2">NSWG 2011 handbook</th>
			</tr>
			<tr class="db-header">
				<th>Part type</th>
				<th>Description</th>
				<th>Mechanical item category</th>
				<th>Predominant failure mechanism</th>
				<th>Modelling recommendation</th>
				<th>Potential failure mechanisms</th>
				<th>Limit state function</th>
				<th>Simplified method</th>
				<th>Model available</th>
				<th>Space relevance of NSWC method</th>
			</tr>
		</thead>
		<tr>
			<td>Bearings</td>
			<td>A device that constrains relative motion to only the I Active desired motion, and reduces friction
				between moving parts</td>
			<td>I Active</td>
			<td>Lubrication wear</td>
			<td>Structural reliability methods</td>
			<td>
				<p><u>wear</u></p>
				<p>fatigue &fracture</p>
				<p>distortion</p>
			</td>
			<td>
				<p><i class="fa fa-check" style="color:green"></i></p>
				<p><i class="fa fa-check" style="color:green"></i></p>
				<p>generic</p>
			</td>
			<td>
				<p><i class="fa fa-check" style="color:green"></i></p>
				<p><i class="fa fa-check" style="color:green"></i></p>
				<p><i class="fa fa-times" style="color:red"></i></p>
			</td>
			<td>
				<p><i class="fa fa-check" style="color:green"></i></p>
			</td>
			<td>method not applicable due to predominance of lubrication wear over fatigue in space</td>
		</tr>
		<tr>
			<td>Springs</td>
			<td>An elastic object that stores mechanical energy, II Passive used to exert forces or to provide flexibility.</td>
			<td>II Passive</td>
			<td>Load loss, creep (distortion)</td>
			<td>Statistical methods, NSWC adjusted, or Structural (but  difficult to model creep)</td>
			<td>
				<p>fatigue &fracture</p>
				<p><u>distortion</u></p>
			</td>
			<td>
				<p><i class="fa fa-check" style="color:green"></i></p>
				<p><i class="fa fa-times" style="color:red"></i></p>
			</td>
			<td>
				<p><i class="fa fa-check" style="color:green"></i></p>
				<p><i class="fa fa-times" style="color:red"></i></p>
			</td>
			<td>
				<p><i class="fa fa-check" style="color:green"></i></p>
			</td>
			<td>depends on the type and application; fatigue/fracture less relevant in space</td>
		</tr>
		<tr>
			<td>Gears and splines</td>
			<td>A toothed machine part such as a wheel or cylinder I Active that meshes with another toothed part to transmit motion or to change speed or direction</td>
			<td>I Active</td>
			<td>Lubrication wear</td>
			<td>Structural reliability methods</td>
			<td>
				<p><u>wear</u></p>
				<p>fatigue &fracture</p>
				<p>distortion</p>
			</td>
			<td>
				<p><i class="fa fa-check" style="color:green"></i></p>
				<p><i class="fa fa-check" style="color:green"></i></p>
				<p>generic</p>
			</td>
			<td>
				<p><i class="fa fa-check" style="color:green"></i></p>
				<p><i class="fa fa-check" style="color:green"></i></p>
				<p><i class="fa fa-times" style="color:red"></i></p>
			</td>
			<td>
				<p><i class="fa fa-check" style="color:green"></i></p>
			</td>
			<td>application questionable due to space specific lubrication and rotation speeds</td>
		</tr>
		<tr>
			<td>Shafts</td>
			<td>A rotating device, usually of circular cross section that transmits torque from one part to another</td>
			<td>I Active</td>
			<td>Wear (when contact is present),otherwise fatigue</td>
			<td>Structural reliability methods</td>
			<td>
				<p><u>wear</u></p>
				<p>fatigue &fracture</p>
				<p>distortion</p>
			</td>
			<td>
				<p><i class="fa fa-check" style="color:green"></i></p>
				<p><i class="fa fa-check" style="color:green"></i></p>
				<p>generic</p>
			</td>
			<td>
				<p><i class="fa fa-check" style="color:green"></i></p>
				<p><i class="fa fa-check" style="color:green"></i></p>
				<p><i class="fa fa-times" style="color:red"></i></p>
			</td>
			<td>
				<p><i class="fa fa-check" style="color:green"></i></p>
			</td>
			<td>method is maintenance related and thus not applicable to space</td>
		</tr>
		<tr>
			<td>Hinges</td>
			<td>Ajoint that holds two parts together such that one II Passive can swing relative to the other</td>
			<td>II Passive</td>
			<td>Increased friction or kinematic issues</td>
			<td>Structural reliability methods</td>
			<td>
				<p><u>distortion</u></p>
				<p>wear</p>
			</td>
			<td>
				<p>generic</p>
				<p><i class="fa fa-check" style="color:green"></i></p>
			</td>
			<td>
				<p><i class="fa fa-times" style="color:red"></i></p>
				<p><i class="fa fa-check" style="color:green"></i></p>
			</td>
			<td>
				<p><i class="fa fa-check" style="color:green"></i></p>
			</td>
			<td>only some general considerations in NSWC</td>
		</tr>
		<tr>
			<td>Mirrors and lenses</td>
			<td>A piece of glass or similar material designed to reflect (mirror), or to concentrate or disperse light rays.</td>
			<td>IV Structural</td>
			<td>Fracture</td>
			<td>Structural reliability methods</td>
			<td>
				<p><u>fatigue &fracture</u></p>
				<p>distortion</p>
				<p>{term}`degradation <Degradation>`</p>
			</td>
			<td>
				<p><i class="fa fa-check" style="color:green"></i></p>
				<p>generic</p>
				<p><i class="fa fa-check" style="color:green"></i></p>
			</td>
			<td>
				<p><i class="fa fa-check" style="color:green"></i></p>
				<p><i class="fa fa-times" style="color:red"></i></p>
				<p><i class="fa fa-check" style="color:green"></i></p>
			</td>
			<td>
				<p><i class="fa fa-times" style="color:red"></i></p>
			</td>
			<td>NA</td>
		</tr>
		<tr>
			<td>Flexural pivots</td>
			<td>A flexure which is engineered to be compliant in one or more angular degrees of freedom.</td>
			<td>
				<p>I Active</p>
				<p>II Passive</p>
			</td>
			<td>Fatigue</td>
			<td>Structural reliability methods</td>
			<td>
				<p><u>fatigue &fracture</u></p>
			</td>
			<td>
				<p><i class="fa fa-check" style="color:green"></i></p>
			</td>
			<td>
				<p><i class="fa fa-check" style="color:green"></i></p>
			</td>
			<td>
				<p><i class="fa fa-times" style="color:red"></i></p>
			</td>
			<td>NA</td>
		</tr>
		<tr>
			<td>Fusible Wires</td>
			<td>A device consisting of metal strips soldered with a fusible alloy that melts at a specific temperature, allowing the pieces to separate</td>
			<td>II Passive</td>
			<td>Quality issue or random failure</td>
			<td>Statistical methods</td>
			<td>
				<p>fatigue &fracture</p>
				<p>distortion</p>
			</td>
			<td>
				<p><i class="fa fa-check" style="color:green"></i></p>
				<p>generic</p>
			</td>
			<td>
				<p><i class="fa fa-check" style="color:green"></i></p>
				<p><i class="fa fa-times" style="color:red"></i></p>
			</td>
			<td>
				<p><i class="fa fa-times" style="color:red"></i></p>
			</td>
			<td>NA</td>
		</tr>
		<tr>
			<td>Seals and Gaskets</td>
			<td>A device placed between two surfaces to prevent the flow of gas or fluid from one region to another</td>
			<td>
				<p>I Active</p>
				<p>II Passive</p>
				<p>III Fluidic</p>
			</td>
			<td>Wear, {term}`degradation <Degradation>`, installation damage</td>
			<td>NSWC adjusted, Statistical methods or Structural reliability methods</td>
			<td>
				<p><u>wear</u></p>
				<p>distortion</p>
				<p>{term}`degradation <Degradation>`</p>
			</td>
			<td>
				<p><i class="fa fa-check" style="color:green"></i></p>
				<p>generic</p>
				<p><i class="fa fa-times" style="color:red"></i></p>
			</td>
			<td>
				<p><i class="fa fa-check" style="color:green"></i></p>
				<p><i class="fa fa-times" style="color:red"></i></p>
				<p><i class="fa fa-times" style="color:red"></i></p>
			</td>
			<td>
				<p><i class="fa fa-check" style="color:green"></i></p>
			</td>
			<td>method may be applicable but requires base failure rate adjustment</td>
		</tr>
		<tr>
			<td>Structural component (ind.threaded fasteners,inserts, brackets)</td>
			<td>A mechanical component designed to sustain loads or pressures, provide stiffness or stability, or
				provide support or containment.</td>
			<td>IV Structural</td>
			<td>Fracture</td>
			<td>Structural reliability methods</td>
			<td>
				<p><u>fatigue &fracture</u></p>
				<p>distortion</p>
			</td>
			<td>
				<p><i class="fa fa-check" style="color:green"></i></p>
				<p>generic</p>
			</td>
			<td>
				<p><i class="fa fa-check" style="color:green"></i></p>
				<p><i class="fa fa-times" style="color:red"></i></p>
			</td>
			<td>
				<p><i class="fa fa-times" style="color:red"></i></p>
			</td>
			<td>NA</td>
		</tr>
	</table>
```

```{list-table} Mechanical part types, associated failure mechanisms and modelling recommendations
:name: meca-table4-6
:header-rows: 1
:widths: 10 10 10 10 10 10 10 10 10 10

*   - Part type
    - Description
    - Mechanical item category
    - Predominant {term}`failure mechanism <Failure mechanism>`
    - Modelling recommendation
	- Structural reliability methods - Potential {term}`failure mechanisms <Failure mechanism>`
	- Structural reliability methods - Limit state function
	- Structural reliability methods - Simplified method
	- NSWG 2011 handbook - Model available
	- NSWG 2011 handbook - Space relevance of NSWC method
*   - Bearings
    - A device that constrains relative motion to only the I Active desired motion, and reduces friction between moving parts
    - I Active
    - Lubrication wear
    - Structural reliability methods
	- <p><u>wear</u></p><p>fatigue &fracture</p><p>distortion</p>
	- <p><i class="fa fa-check" style="color:green"></i></p><p><i class="fa fa-check" style="color:green"></i></p><p>generic</p>
	- <p><i class="fa fa-check" style="color:green"></i></p><p><i class="fa fa-check" style="color:green"></i></p><p><i class="fa fa-times" style="color:red"></i></p>
	- <p><i class="fa fa-check" style="color:green"></i></p>
	- method not applicable due to predominance of lubrication wear over fatigue in space
*   - Springs
    - An elastic object that stores mechanical energy, II Passive used to exert forces or to provide flexibility.
    - II Passive
    - Load loss, creep (distortion)
    - Statistical methods, NSWC adjusted, or Structural (but  difficult to model creep)
	- <p>fatigue &fracture</p><p><u>distortion</u></p>
	- <p><i class="fa fa-check" style="color:green"></i></p><p><i class="fa fa-times" style="color:red"></i></p>
	- <p><i class="fa fa-check" style="color:green"></i></p><p><i class="fa fa-times" style="color:red"></i></p>
	- <p><i class="fa fa-check" style="color:green"></i></p>
	- depends on the type and application; fatigue/fracture less relevant in space
*   - Gears and splines
    - A toothed machine part such as a wheel or cylinder I Active that meshes with another toothed part to transmit motion or to change speed or direction
    - I Active
    - Lubrication wear
    - Structural reliability methods
	- <p><u>wear</u></p><p>fatigue &fracture</p><p>distortion</p>
	- <p><i class="fa fa-check" style="color:green"></i></p><p><i class="fa fa-check" style="color:green"></i></p><p>generic</p>
	- <p><i class="fa fa-check" style="color:green"></i></p><p><i class="fa fa-check" style="color:green"></i></p><p><i class="fa fa-times" style="color:red"></i></p>
	- <p><i class="fa fa-check" style="color:green"></i></p>
	- application questionable due to space specific lubrication and rotation speeds
*   - Shafts
    - A rotating device, usually of circular cross section that transmits torque from one part to another
    - I Active
    - Wear (when contact is present),otherwise fatigue
    - Structural reliability methods
	- <p><u>wear</u></p><p>fatigue &fracture</p><p>distortion</p>
	- <p><i class="fa fa-check" style="color:green"></i></p><p><i class="fa fa-check" style="color:green"></i></p><p>generic</p>
	- <p><i class="fa fa-check" style="color:green"></i></p><p><i class="fa fa-check" style="color:green"></i></p><p><i class="fa fa-times" style="color:red"></i></p>
	- <p><i class="fa fa-check" style="color:green"></i></p>
	- method is maintenance related and thus not applicable to space
*   - Hinges
    - Ajoint that holds two parts together such that one II Passive can swing relative to the other
    - II Passive
    - Increased friction or kinematic issues
    - Structural reliability methods
	- <p><u>distortion</u></p><p>wear</p>
	- <p>generic</p><p><i class="fa fa-check" style="color:green"></i></p>
	- <p><i class="fa fa-times" style="color:red"></i></p><p><i class="fa fa-check" style="color:green"></i></p>
	- <p><i class="fa fa-check" style="color:green"></i></p>
	- only some general considerations in NSWC
*   - Mirrors and lenses
    - A piece of glass or similar material designed to reflect (mirror), or to concentrate or disperse light rays.
    - IV Structural
    - Fracture
    - Structural reliability methods
	- <p><u>fatigue &fracture</u></p><p>distortion</p><p>{term}`degradation <Degradation>`</p>
	- <p><i class="fa fa-check" style="color:green"></i></p><p>generic</p><p><i class="fa fa-check" style="color:green"></i></p>
	- <p><i class="fa fa-check" style="color:green"></i></p><p><i class="fa fa-times" style="color:red"></i></p><p><i class="fa fa-check" style="color:green"></i></p>
	- <p><i class="fa fa-times" style="color:red"></i></p>
	- NA
*   - Flexural pivots
    - A flexure which is engineered to be compliant in one or more angular degrees of freedom.
    - <p>I Active</p><p>II Passive</p>
    - Fatigue
    - Structural reliability methods
	- <p><u>fatigue &fracture</u></p>
	- <p><i class="fa fa-check" style="color:green"></i></p>
	- <p><i class="fa fa-check" style="color:green"></i></p>
	- <p><i class="fa fa-times" style="color:red"></i></p>
	- NA
*   - Fusible Wires
    - A device consisting of metal strips soldered with a fusible alloy that melts at a specific temperature, allowing the pieces to separate
    - II Passive
    - Quality issue or {term}`random failure <Random failure>`
    - Statistical methods
	- <p>fatigue &fracture</p><p>distortion</p>
	- <p><i class="fa fa-check" style="color:green"></i></p><p>generic</p>
	- <p><i class="fa fa-check" style="color:green"></i></p><p><i class="fa fa-times" style="color:red"></i></p>
	- <p><i class="fa fa-times" style="color:red"></i></p>
	- NA
*   - Seals and Gaskets
    - A device placed between two surfaces to prevent the flow of gas or fluid from one region to another
    - <p>I Active</p><p>II Passive</p><p>III Fluidic</p>
    - Wear, {term}`degradation <Degradation>`, installation damage
    - NSWC adjusted, Statistical methods or Structural reliability methods
	- <p><u>wear</u></p><p>distortion</p><p>{term}`degradation <Degradation>`</p>
	- <p><i class="fa fa-check" style="color:green"></i></p><p>generic</p><p><i class="fa fa-times" style="color:red"></i></p>
	- <p><i class="fa fa-check" style="color:green"></i></p><p><i class="fa fa-times" style="color:red"></i></p><p><i class="fa fa-times" style="color:red"></i></p>
	- <p><i class="fa fa-check" style="color:green"></i></p>
	- method may be applicable but requires base failure rate adjustment
*   - Structural component (ind.threaded fasteners,inserts, brackets)
    - A mechanical component designed to sustain loads or pressures, provide stiffness or stability, orprovide support or containment.
    - IV Structural
    - Fracture
	- Structural reliability methods
    - <p><u>fatigue &fracture</u></p><p>distortion</p>
	- <p><i class="fa fa-check" style="color:green"></i></p><p>generic</p>
	- <p><i class="fa fa-check" style="color:green"></i></p><p><i class="fa fa-times" style="color:red"></i></p>
	- <p><i class="fa fa-times" style="color:red"></i></p>
	- NA
```

<script>
	document.getElementById("meca-table4-6").overflowY="scroll";
</script>

(meca_4_5_3)=
## Selection of methods for assembly level mechanical reliability prediction
{term}`Reliability prediction <Reliability prediction>` for assemblies of {term}`mechanical parts <Mechanical part>` can either be made bottom-up, combining part level inputs with system level reliability methods, or top-down, using inputs directly collected at the level of the considered assembly. In general, similar considerations apply as for part level mechanical {term}`reliability prediction <Reliability prediction>`, leading to the following modelling recommendations:

* Statistical (or combined) methods are suitable provided that relevant failure data is available directly at the level of the considered assembly.
* {term}`Physics of failure <Physics of failure>` methods based on Structural reliability theory are suitable if the assembly level probability of failure is dominated by one or very few {term}`failure mechanisms <Failure mechanism>` (see also the discussion in {numref}`meca_4_4`).
* Bottom-up modelling starting from part level analysis is recommended in case none of the abovementioned conditions is fulfilled.
* 
It should be noted that the {term}`NSWC` Handbook {cite:p}`mec-NSWC-11` contains models also for some items that are better considered as assemblies rather than parts, including e.g. electric motors, solenoids and transducers. For reasons already discussed in {numref}`meca_4_3_1_5`, the direct use of these models is not recommended for space applications.



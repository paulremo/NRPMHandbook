(misc_5_1)=
# List of miscellaneous items
{numref}`misc-table4-1` presents the miscellaneous items for which a reliability “standard model” is defined (refer to {numref}`misc_5_7` and {numref}`misc_5_8`).

The reliability model derived from IOR data gathers in fact all the elements related to an “equivalent class” and is only valid for this class of miscellaneous items. The related numerical values are provided in {numref}`misc-table4-8`.

To use the reliability model it is, first, necessary to assess that the {term}`miscellaneous item <Miscellaneous item>` considered falls in the scope of the model definition. The “standard model” refers to a class of {term}`miscellaneous item <Miscellaneous item>` identified by the main functions which are supported, the parameters reflecting the reliability ({term}`quality <Quality>`…) and the operating conditions.

{numref}`misc-table4-2` provides additional information for the miscellaneous items for which no “standard model” is provided (the list is not exhaustive, refer to {numref}`misc_5_7`).


<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'misc_table4_1')" placeholder="Search table...">

```{list-table} List of miscellaneous items with “standard model”
:name: misc-table4-1

* - <table class="myTable" id="misc_table4_1">
        <thead>
            <tr>
                <th>REF</th>
                <th>SUBSYSTEM</th>
                <th>UNIT / ITEM</th>
                <th>RELIABILITY DATA</th>
            </tr>
        </thead>
        <tr>
            <td colspan="4" class="full-span">RF - Radio Frequency</td>
        </tr>
        <tr>
            <td>STD_001</td>
            <td>PAYLOAD</td>
            <td>TWTA, Single MPM</td>
            <td>Constant failure rate</td>
        </tr>
        <tr>
            <td>STD_002</td>
            <td>PAYLOAD</td>
            <td>TWTA, Double MPM</td>
            <td>Constant failure rate</td>
        </tr>
        <tr>
            <td colspan="4" class="full-span">PWR - Power</td>
        </tr>
        <tr>
            <td>STD_003</td>
            <td>POWER</td>
            <td>BATTERY CELL GEO</td>
            <td>Constant failure rate</td>
        </tr>
        <tr>
            <td>STD_004</td>
            <td>POWER</td>
            <td>BATTERY CELL LEO</td>
            <td>Constant failure rate</td>
        </tr>
        <tr>
            <td>STD_005</td>
            <td>POWER</td>
            <td>SOLAR ARRAY CELL Si</td>
            <td>Constant failure rate</td>
        </tr>
        <tr>
            <td>STD_006</td>
            <td>POWER</td>
            <td>SOLAR ARRAY CELL GaAs</td>
            <td>Constant failure rate</td>
        </tr>
        <tr>
            <td>STD_007</td>
            <td>POWER</td>
            <td>SADM (Solar Array drive Mechanism) GEO</td>
            <td>Constant failure rate</td>
        </tr>
        <tr>
            <td>STD_008</td>
            <td>POWER</td>
            <td>SADM (Solar Array drive Mechanism) LEO</td>
            <td>Constant failure rate</td>
        </tr>
        <tr>
            <td colspan="4" class="full-span">PROP - Propulsion</td>
        </tr>
        <tr>
            <td>STD_009</td>
            <td>PROPULSION</td>
            <td>THRUSTER</td>
            <td>Constant failure rate</td>
        </tr>
        <tr>
            <td>STD_010</td>
            <td>PROPULSION</td>
            <td>TANK TUBING</td>
            <td>probability of failure</td>
        </tr>
        <tr>
            <td colspan="4" class="full-span">AOCS - Attitude and Orbit Control System</td>
        </tr>
        <tr>
            <td>STD_011</td>
            <td>AOCS</td>
            <td>RW (Reaction Wheel) GEO</td>
            <td>Constant failure rate</td>
        </tr>
        <tr>
            <td>STD_012</td>
            <td>AOCS</td>
            <td>RW (Reaction Wheel) LEO</td>
            <td>Constant failure rate</td>
        </tr>
        <tr>
            <td colspan="4" class="full-span">DEP - Deployment</td>
        </tr>
        <tr>
            <td>STD_013</td>
            <td>DEPLOYMENT</td>
            <td>DEPLOYMENT DEVICE<br />
                Antenna, boom</td>
            <td>Probability of failure</td>
        </tr>
        <tr>
            <td>STD_014</td>
            <td>DEPLOYMENT</td>
            <td>
                <p>DEPLOYMENT DEVICE</p>
                <p>Solar Array</p>
            </td>
            <td>Probability of failure</td>
        </tr>
    </table>
```

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'misc_table4_2')" placeholder="Search table...">

```{list-table} List of Miscellaneous items with “non-standard model”
:name: misc-table4-2

* - <table id="misc_table4_2" class="myTable">
        <thead>
            <tr>
                <th>REF</th>
                <th>SUBSYSTEM</th>
                <th>UNIT / ITEM</th>
                <th>RELIABILITY DATA</th>
            </tr>
        </thead>
        <tr>
            <td colspan="4" class="full-span">RF - Radio Frequency</td>
        </tr>
        <tr>
            <td>N-STD_001</td>
            <td>PAYLOAD</td>
            <td>RF PASSIVE</td>
            <td>Refer to user experience</td>
        </tr>
        <tr>
            <td colspan="4" class="full-span">PWR - Power</td>
        </tr>
        <tr>
            <td>N-STD_002</td>
            <td>POWER</td>
            <td>CONNECTORS</td>
            <td>See EEE</td>
        </tr>
        <tr>
            <td colspan="4" class="full-span">PROP - Propulsion</td>
        </tr>
        <tr>
            <td>N-STD_003</td>
            <td>PROPULSION</td>
            <td>HET (Hall Effect Thruster)</td>
            <td>Refer to user experience</td>
        </tr>
        <tr>
            <td>N-STD_004</td>
            <td>PROPULSION</td>
            <td>VALVE LV (Latching Valve)</td>
            <td>Refer to Manufacturer data</td>
        </tr>
        <tr>
            <td>N-STD_005</td>
            <td>PROPULSION</td>
            <td>VALVE FCV (MONO STABLE) Flow Control Valve</td>
            <td>Refer to Manufacturer data</td>
        </tr>
        <tr>
            <td>N-STD_006</td>
            <td>PROPULSION</td>
            <td>VALVE PYRO VALVE</td>
            <td>Refer to Manufacturer data</td>
        </tr>
        <tr>
            <td>N-STD_007</td>
            <td>PROPULSION</td>
            <td>PT (Pressure Transducer)</td>
            <td>Refer to Manufacturer data</td>
        </tr>
        <tr>
            <td>N-STD_008</td>
            <td>PROPULSION</td>
            <td>FILTER</td>
            <td>Refer to Manufacturer data</td>
        </tr>
        <tr>
            <td colspan="4" class="full-span">THER - Thermal</td>
        </tr>
        <tr>
            <td>N-STD_009</td>
            <td>THERMAL</td>
            <td>HEAT PIPES</td>
            <td>Refer to Manufacturer data</td>
        </tr>
        <tr>
            <td>N-STD_010</td>
            <td>THERMAL</td>
            <td>THERMO SWITCH</td>
            <td>Refer to Manufacturer data</td>
        </tr>
        <tr>
            <td>N-STD_011</td>
            <td>THERMAL</td>
            <td>HEATER</td>
            <td></td>
        </tr>
        <tr>
            <td colspan="4" class="full-span">PYRO - Pyrotechnics</td>
        </tr>
        <tr>
            <td>N-STD_012</td>
            <td>AOCS</td>
            <td>Pyro Actuator</td>
            <td>Based on Tests results (Bruceton, PROBIT, severe, one-shot, Neyer
                tests)</td>
        </tr>
        <tr>
            <td colspan="4" class="full-span">DEP - Deployment</td>
        </tr>
        <tr>
            <td>N-STD_013</td>
            <td>NEA</td>
            <td>Non Explosive Actuator</td>
            <td></td>
        </tr>
        <tr>
            <td colspan="4" class="full-span">Other</td>
        </tr>
        <tr>
            <td>N-STD_014</td>
            <td>PAYLOAD</td>
            <td>OPTICS</td>
            <td>
                <p>Based on Manufacturer data.</p>
                <p>Mechanical models for structural failure mechanisms and radiation
                    degradation (wear-out).</p>
            </td>
        </tr>
        <tr>
            <td>N-STD_015</td>
            <td>ALL</td>
            <td>OPTRONICS</td>
            <td>See EEE</td>
        </tr>
    </table>
```





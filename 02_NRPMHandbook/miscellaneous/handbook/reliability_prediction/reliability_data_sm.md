(misc_5_8)=
# Reliability data for miscellaneous “standard model”
{numref}`misc-table4-8` provides the basic failures rates or basic probability of failure (%) to be considered for miscellaneous “standard models”. 

The meaning of the columns is explained in {numref}`misc-table4-7`.

````{admonition} Note 1 : MIS_01 TWTA, Single HPA
:class: note
The failure rate is provided per TWT Channel (mono channel or dual channel). In order to be used for LEO, if adaptation is necessary, it is recommended to use 

1.  by default the following proportion (based on average MIL-HDBK-217 {cite:t}`mis-MIL-HDBK-217F` {term}`reliability prediction <Reliability prediction>`) of the whole failure rate.
    * EPC_common = 36%
    * EPC_channel = 9%
    * {term}`CAMP` = 25%
    * TWT = 30%
2. to use the supplier repartition as per its own {term}`reliability prediction <Reliability prediction>`.

````

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'misc_table4_7')" placeholder="Search table...">

```{list-table} Structure of the reliability data table
:name: misc-table4-7

* - <table class="large-table" id="misc_table4_7">
        <thead>
            <tr>
                <th>Column</th>
                <th>Description</th>
                <th>Remark</th>
            </tr>
        </thead>
        <tr>
            <td>REF</td>
            <td>Identifies the miscellaneous item</td>
            <td></td>
        </tr>
        <tr>
            <td>EQUIPMENT</td>
            <td>Name of the item</td>
            <td></td>
        </tr>
        <tr>
            <td>FR</td>
            <td>
                <p>Depending on the model either a constant Failure rate (fit) or %
                    standing for estimate of the proportion of failures</p>
                <p>A figure (integer) means a Failure rate in fit. A proportion (figure
                    followed by %) means a proportion of failure</p>
            </td>
            <td>Constant failure rate @60% LoC (Chi Square) or Probability of
                failure @60% upper bound one-sided interval</td>
        </tr>
        <tr>
            <td>POINT ESTIMATE</td>
            <td>When relevant - observed failure(s) - point estimate of the failure
                rate or of the proportion of failures %</td>
            <td></td>
        </tr>
        <tr>
            <td>QUALITY</td>
            <td>Level of quality used to define the “standard model”</td>
            <td>HIGH, MEDIUM, LOW</td>
        </tr>
        <tr>
            <td>MATURITY</td>
            <td>Indicates the level of maturity, generally based on the first use of
                the equipment in-orbit</td>
            <td></td>
        </tr>
        <tr>
            <td>TECHNOLOGY</td>
            <td>Indicates when relevant which technology is concerned</td>
            <td></td>
        </tr>
        <tr>
            <td>COMPLEXITY</td>
            <td>Indicates when relevant the level of complexity</td>
            <td></td>
        </tr>
        <tr>
            <td>ORBIT</td>
            <td>Indicates which orbit is relevant to the “standard model”</td>
            <td>LEO, GEO</td>
        </tr>
        <tr>
            <td>T°</td>
            <td>Indicates the range of T° when T° has to be considered</td>
            <td></td>
        </tr>
        <tr>
            <td>POWER</td>
            <td>Indicates the range of Power when Power has to be considered</td>
            <td></td>
        </tr>
        <tr>
            <td>CYCLING</td>
            <td>Indicates the fact that cycling is a contributor to reliability</td>
            <td></td>
        </tr>
        <tr>
            <td>DUTY CYCLE</td>
            <td>The percentage of time during which the item is operated</td>
            <td></td>
        </tr>
        <tr>
            <td>OTHER</td>
            <td>Any other parameters or data to be considered</td>
            <td></td>
        </tr>
        <tr>
            <td>WO</td>
            <td>Wear-Out is to be considered when “YES”</td>
            <td></td>
        </tr>
    </table>
```

<input type="text" class="myInput" id="myInput" onkeyup="searchTableJupyter(this, 'misc_table4_8')" placeholder="Search table...">

```{list-table} Reliability data
:name: misc-table4-8

* - <table class="myTable" id="misc_table4_8">
        <thead>
            <tr>
                <th>REF</th>
                <th>EQUIPEMENT</th>
                <th>FR (fit) / %</th>
                <th>POINT ESTIM.</th>
                <th>QUALITY</th>
                <th>MATURITY</th>
                <th>TECHNOLOGY</th>
                <th>COMPLEXITY</th>
                <th>ORBIT</th>
                <th>T°</th>
                <th>POWER</th>
                <th>CYCLING</th>
                <th>DUTY CYCLE</th>
                <th>OTHER</th>
                <th>WO</th>
            </tr>
        </thead>
        <tr>
            <td>STD_001</td>
            <td>
                <p>TWTA, Single HPA</p>
                <p>(refer to note 1)</p>
            </td>
            <td>200</td>
            <td>n/a</td>
            <td>HIGH</td>
            <td>since 1990</td>
            <td>HPA (TWTA)</td>
            <td>TWTA complexity</td>
            <td>GEO<br />
                LEO</td>
            <td>30° C &lt; T° &lt; 60°C</td>
            <td>ALL</td>
            <td>30° C &lt; T° &lt; 60°C</td>
            <td>ON<br />
                ON/OFF</td>
            <td>All frequencies C, X, Ku, Ka, L</td>
            <td>YES</td>
        </tr>
        <tr>
            <td>STD_002</td>
            <td>TWTA, Dual HPA</td>
            <td>400</td>
            <td>n/a</td>
            <td>HIGH</td>
            <td>since 1990</td>
            <td>HPA (TWTA)</td>
            <td>TWTA complexity</td>
            <td>GEO<br />
                LEO</td>
            <td>30° C &lt; T° &lt; 60°C</td>
            <td>ALL</td>
            <td>30° C &lt; T° &lt; 60°C</td>
            <td>ON<br />
                ON/OFF</td>
            <td>All frequencies C, X, Ku, Ka, L</td>
            <td>YES</td>
        </tr>
        <tr>
            <td>STD_003</td>
            <td>BATTERY CELL (GEO)</td>
            <td>5</td>
            <td>2</td>
            <td>HIGH</td>
            <td>since 2000</td>
            <td>Li-Ion</td>
            <td>X S - Y P<br />
                Z P- A S</td>
            <td>GEO</td>
            <td>0°C &lt; T°C &lt; 20°C</td>
            <td>n/a</td>
            <td>n /a</td>
            <td>100%</td>
            <td>DoD &lt; 70%<br />
                V &lt; 50v</td>
            <td>YES</td>
        </tr>
        <tr>
            <td>STD_004</td>
            <td>BATTERY CELL (LEO)</td>
            <td>1</td>
            <td>n/a</td>
            <td>HIGH</td>
            <td>since 2000</td>
            <td>Li-Ion</td>
            <td>18560</td>
            <td>LEO</td>
            <td>0°C &lt; T°C &lt; 20°C</td>
            <td>n/a</td>
            <td>90mn</td>
            <td>100%</td>
            <td>DoD &lt; 70%<br />
                CID, PTC</td>
            <td>YES</td>
        </tr>
        <tr>
            <td>STD_005</td>
            <td>SOLAR ARRAY CELL Si</td>
            <td>0,15</td>
            <td>n/a</td>
            <td>HIGH</td>
            <td>since 1990</td>
            <td>Si</td>
            <td>Triple-Junction</td>
            <td>GEO<br />
                LEO</td>
            <td>-100°C &lt; T° &lt;100°C</td>
            <td>n/a</td>
            <td>n/a</td>
            <td>n/a</td>
            <td>n/a</td>
            <td>YES</td>
        </tr>
        <tr>
            <td>STD_006</td>
            <td>SOLAR ARRAY CELL GaAs</td>
            <td>0,15</td>
            <td>n/a</td>
            <td>HIGH</td>
            <td>since 1991</td>
            <td>GaAs</td>
            <td>Triple-Junction</td>
            <td>GEO<br />
                LEO</td>
            <td>-100°C &lt; T° &lt;100°C</td>
            <td>n/a</td>
            <td>n/a</td>
            <td>n/a</td>
            <td>n/a</td>
            <td>YES</td>
        </tr>
        <tr>
            <td>STD_007</td>
            <td>SADM GEO</td>
            <td>210 </td>
            <td>150</td>
            <td>HIGH</td>
            <td>since 1992</td>
            <td>SlipRing</td>
            <td>n/a</td>
            <td>GEO</td>
            <td>-100°C &lt; T° &lt;100°C</td>
            <td>some kW</td>
            <td>n/a</td>
            <td>100%</td>
            <td>n/a</td>
            <td>YES</td>
        </tr>
        <tr>
            <td>STD_008</td>
            <td>SADM LEO</td>
            <td>213</td>
            <td>105</td>
            <td>HIGH</td>
            <td>since 1992</td>
            <td>SlipRing</td>
            <td>n/a</td>
            <td>LEO</td>
            <td>-100°C &lt; T° &lt;100°C</td>
            <td>some kW</td>
            <td>n/a</td>
            <td>100%</td>
            <td>n/a</td>
            <td>YES</td>
        </tr>
        <tr>
            <td>STD_009</td>
            <td>THRUSTER</td>
            <td>82</td>
            <td>71</td>
            <td>HIGH</td>
            <td>since 1990</td>
            <td>Cold gas<br />
                Hot gas</td>
            <td>1N – 10N</td>
            <td>GEO<br />
                LEO</td>
            <td>n/a</td>
            <td>n/a</td>
            <td>ALL</td>
            <td>from low to high rate</td>
            <td> </td>
            <td>YES</td>
        </tr>
        <tr>
            <td>STD_010</td>
            <td>TANK TUBING (SPF)</td>
            <td> 3,27%</td>
            <td>2,4%</td>
            <td>HIGH</td>
            <td>since 2000</td>
            <td>Ti<br />
                Al</td>
            <td>PIPING</td>
            <td>
                <p>GEO</p>
                <p>LEO</p>
            </td>
            <td>n/a</td>
            <td>n/a</td>
            <td>n/a</td>
            <td>n/a</td>
            <td>MEOP up to 200bars</td>
            <td>NO</td>
        </tr>
        <tr>
            <td>STD_011</td>
            <td>RW GEO</td>
            <td>250 </td>
            <td>205</td>
            <td>HIGH</td>
            <td>since 1990</td>
            <td>bearing<br />
                magnetic</td>
            <td>n/a</td>
            <td>GEO</td>
            <td>-30° C &lt; T° &lt; 80°C</td>
            <td>n/a</td>
            <td>n/a</td>
            <td>100%</td>
            <td>REACTION<br />
                MOMENUM </td>
            <td>YES</td>
        </tr>
        <tr>
            <td>STD_012</td>
            <td>RW LEO</td>
            <td>140</td>
            <td>112</td>
            <td>HIGH</td>
            <td>Since 1990</td>
            <td>Bearing<br />
                magnetic</td>
            <td>n/a</td>
            <td>LEO</td>
            <td>-30° C &lt; T° &lt; 80°C</td>
            <td>n/a</td>
            <td>n/a</td>
            <td>100%</td>
            <td>REACTION<br />
                MOMENTUM</td>
            <td>YES</td>
        </tr>
        <tr>
            <td>STD_013</td>
            <td>DEPLOYMENT DEVICE Antenna</td>
            <td>0,2% </td>
            <td>n/a</td>
            <td>HIGH</td>
            <td>since 1990</td>
            <td>hinge</td>
            <td>n/a</td>
            <td>GEO<br />
                LEO</td>
            <td>n/a</td>
            <td>n/a</td>
            <td>n/a</td>
            <td>one-shot</td>
            <td> </td>
            <td>no</td>
        </tr>
        <tr>
            <td>STD_014</td>
            <td>DEPLOYMENT DEVICE Solar Array</td>
            <td>0,3% </td>
            <td>n/a</td>
            <td>HIGH</td>
            <td>since 1990</td>
            <td>hinge</td>
            <td>n/a</td>
            <td>GEO<br />
                LEO</td>
            <td>n/a</td>
            <td>n/a</td>
            <td>n/a</td>
            <td>one-shot</td>
            <td> </td>
            <td>no</td>
        </tr>
    </table>
```
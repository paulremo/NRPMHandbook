<!--- Copyright (C) Matrisk GmbH 2022 -->

(cv_calculator)=
# CV product calculator for capacitor components

```{admonition} Under construction
:class: todo
The content of this page is missing and will be provided in a future version of the NRPM digital handbook.
```
<div class="calculator-container-eee" id="capa_type_voltage_input">
    <div>
        <p>Component type : </p>
        <form>
            <input class="radio-cv-calculator" type="radio" id="type1" name="type_1" value="1">
            <label class="radio-label-cv-calculator" for="type1" id="type1_label">Type I</label>
            <input class="radio-cv-calculator" type="radio" id="type2" name="type_2" value="2">
            <label class="radio-label-cv-calculator" for="type2" id="type2_label">Type II</label>
        </form>
    </div>
    <div>
        <p>Capacitance : </p>
        <input type="number" id="capacitance_input_cv"><a>&nbsp;&nbsp;&nbsp;V</a>
    </div>
    <br>
    <div>
        <p>Voltage : </p>
        <input type="number" id="voltage_input_cv">
        <select id="voltage_unit_cv">
            <option value="0">F</option>
            <option value="6">&mu;F</option>
            <option value="9">nF</option>
            <option value="12">pF</option>
        </select>
    </div>
    <br>
    <button id="ok_button_eee">OK</button>
</div>
<div class="calculator-container-eee" id="techno_limit_input">
    <div>
        <p>Your component CV equals to <a id="intermediary_cv_value_output"></a> V.F.</p>
        <p>Is it in technological limit ? </p>
        <button class="yes-no-button-cv" id="techno_yes_cv">YES</button>
        <button class="yes-no-button-cv" id="techno_no_cv">NO</button>
    </div>
</div>

<div class="calculator-container-eee" id="cv_output">
    <div>
        <p>Your component has a <a id="cv_value_output"></a> CV.</p>
    </div>
</div>

<div class="calculator-container-eee" id="cv_redirect">
    <div>
        <p>You can find your component model using <a href="https://nrpmhandbook.reliability.space/en/latest/eee/handbook/reliability_prediction/random_failure/reliability_model_EEE_families.html?highlight=cv#eee-table4-20" style="color:black"><b>this table</b></a>.</p>
    </div>
</div>


<script type="text/javascript">runCvCalculator();</script>

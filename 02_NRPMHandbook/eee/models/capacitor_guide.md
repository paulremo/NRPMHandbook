<!--- Copyright (C) Matrisk GmbH 2022 -->

(capacitor_guide)=
# Guide for the capacitor family

```{admonition} Under construction
:class: todo
The content of this page is missing and will be provided in a future version of the NRPM digital handbook.
```


<div>
    <label>Guide speed : </label>
    <button id="slow_capacitor_guide" class="">SLOW</button>
    <button id="medium_capacitor_guide" class="selected_speed_capacitor">MEDIUM</button>
    <button id="fast_capacitor_guide" class="">FAST</button>
</div>

<div id="conversation_capacitor">
    <table>
        <tr>
            <td id="astronaut_capacitor_div">
                <div id="astronaut_capacitor">
                    <img id="astroPicture_capacitor" src="../../_static/images/new_astronaut_speaks.svg"/>
                </div>
            </td>
            <td id="message_capacitor_div">
                <div id="messages_capacitor" class="scroll">
                    <table class="track" id="messages_track_capacitor"></table>
                </div>
            </td>
        </tr>
    </table>
</div>

<script type="text/javascript" src="../js/capacitor_family_guide.js"></script>
<script type="text/javascript">runCapacitorFamilyGuide();</script>
<!--- Copyright (C) Matrisk GmbH 2022 -->

(eee_annex_a)=
# Annex A : example of mission profiles for space applications


This annex provides examples of mission profiles dedicated to geostationary satellites and low Earth orbit satellites according to the methodology to define mission profiles as described in {numref}`eee_4_5`.

(eee_annex_a_1)=
## Example of a mission profile for geostationary satellites

Geostationary satellites are satellites located at 36 000km from Earth with a daily revolution of 24 hours. Most of them are telecommunication satellites. These satellites perform a cycle every day. Generally, the temperature of the equipment is controlled when the equipment is running and thermal variations are low. Some more severe orbits can occur during periods of eclipse, but without any significant effect on reliability. No humidity is present, and the equipment is submitted to vacuum. So, the mission profile of each equipment is not severe compared to equipment of other industrial domains.

Here is an example of electronic equipment located on the platform of a geostationary satellite such as an electronic control board. This mission profile is specific to this equipment, but can be used as a basis for the formulation of a mission profile for any other equipment of a geostationary satellite. It can be used also as a reference mission profile for geostationary satellites when it is necessary to do comparisons among several different equipment in order to get comparisons independent of the mission profile. The mission description of this equipment is the following:

-   launch of 2 hours until arrival of the satellite to its injection orbit, with reference temperature stable at 15°C without any variations;

-   time to reach orbit is around 2 days, that is 48 hours with a hypothesis of chemical propulsion, with a temperature variation of about ±5°C during each cycle of 24 hours;

-   the typical mission duration in orbit is around 15 years, which corresponds to 5 475 cycles with 365 cycles of one day every year;

-   stable temperature in orbit of 25°C with some thermal cycling of 5°C maximum due to thermal regulation.

As explained in Section {numref}`eee_4_3_1_7`, vibrations during launch phase are considered in the mission profile of geostationary satellites even if their influence on the total reliability prediction could be minor.

Considering the example of electronic equipment inside a geostationary satellite, the corresponding mission profile is described in the following table. Values highlighted in bold characters are parameters of the mission profile which can differ from one equipment to another. Values in standard characters are parameters which usually do not change whatever the equipment.

```{list-table} Mission profile of an equipment of a geostationary satellite. (1)
:name: eee-table4-209-a
:header-rows: 1
:widths: 20 10 10 10 10 10 10 20

*   - Phase name
    - On / Off
    - Calendar time
    - Reference temperature
    - ∆t
    - Cycle duration
    - Number of cycles
    - Maximum temperature during cycling
*   - Launch
    - ON
    - 2h
    - 15°C
    - 0°C
    - 2h
    - 1
    - 15°C
*   - Time to reach orbit
    - ON
    - 48h
    - 15°C
    - 10°C
    - 24h
    - 2
    - 20°C
*   - Geostationary satellite
    - ON
    - 131 400h
    - 25°C
    - 5°C
    - 24h
    - 5 475
    - 27,5°C
```
```{list-table} Mission profile of an equipment of a geostationary satellite.(2)
:name: eee-table4-209-b
:header-rows: 1
:widths: 20 10 10 10 10 10 10 10 10

*   - Phase name
    - On / Off
    - Calendar time
    - Relative humidity
    - Random vibrations
    - Saline pollution
    - Environ-mental pollution
    - Application pollution
    - Protection level
*   - Launch
    - ON
    - 2h
    - 70%RH
    - 18Grms
    - Low
    - Low
    - Low
    - Hermetic
*   - Time to reach orbit
    - ON
    - 48h
    - 0%RH
    - 0Grms
    - Low
    - Low
    - Low
    - Hermetic
*   - Geostationary satellite
    - ON
    - 131 400h
    - 0%RH
    - 0Grms
    - Low
    - Low
    - Low
    - Hermetic
```

(eee_annex_a_2)=
## Example of a mission profile for low Earth orbit satellites

Low Earth Orbit satellites are satellites located from 500 to 1 500km from Earth with several revolutions every day and a typical life duration from 3 to 10 years. Most of these satellites are observation satellites or telecommunication satellites for constellations. The time to reach their orbit after launch can last several months with electrical propulsion. Once they are in orbit, they are subjected to many cycles depending on the duration of their revolutions, from 95min for satellites located at 500km to 115min for satellites located at 1 500km. This is why each type of satellite has a different mission profile. However, all characteristics linked to the space environment are similar. Generally, the temperature of the equipment is controlled when it is running. There is no humidity, and the equipment is submitted to vacuum. So, the mission profile is not severe compared to equipment of other industrial domains with possible specificities in worst case conditions when temperature can fluctuate from -30°C to +60°C.

Here is an example of an electronic control board of a camera located on the payload of a low Earth orbit satellite dedicated to Earth observation. This camera is activated only when the satellite is above the area to observe. This mission profile is specific to this camera, but can be used as a basis for the formulation of a mission profile for any other equipment of a low Earth orbit satellite, knowing that these satellites have different purposes and so very different mission profiles. Therefore, this Low Earth Orbit mission profile is an example for illustration purposes only, and cannot be used as a reference mission profile for Low Earth Orbit satellites with the objective to do comparisons among several different equipment of satellites.

The mission of this equipment is the following:

-   launch of 2 hours until the arrival of the satellite on its injection orbit, with reference temperature stable at 15°C without any variations, the equipment is switched off during this phase;

-   the time to reach its orbit is estimated to 6 months, that is 4 380 hours with the hypothesis of electrical propulsion, the equipment is off and the reference temperature is changing by about ±5°C during cycles of 2 hours around the Earth;

-   typical mission duration in orbit of around 5 years with cycles around the Earth of 2 hours with the hypothesis of camera switched on during observation and switched off during 3 times of 10 minutes per cycle;

-   stable temperature in orbit of 25°C with thermal cycling from maximum ±5°C during equipment switched on and maximum ±3°C during equipment switched off.

As explained in Section {numref}`eee_4_3_1_7`, vibrations during launch phase are considered in the mission profile of Low Earth Orbit satellites even if their influence on the total reliability prediction could be minor.

Considering this electronic equipment inside a Low Earth Orbit satellite, the example of a mission profile is described in the following table. Values highlighted in bold characters are parameters of the mission profile which can differ from one equipment to another. Values in standard characters are parameters which usually do not change whatever the equipment.

```{list-table} Mission profile of an equipment of a low Earth orbit satellite. (1)
:name: eee-table4-210-a
:header-rows: 1
:widths: 20 10 10 10 10 10 10 20

*   - Phase name
    - On / Off
    - Calendar time
    - Reference temperature
    - ∆t
    - Cycle duration
    - Number of cycles
    - Maximum temperature during cycling
*   - Launch
    - OFF
    - 2h
    - 15°C
    - 0°C
    - 2h
    - 1
    - 15°C
*   - Time to reach orbit
    - OFF
    - 4 380h
    - 15°C
    - 10°C
    - 2h
    - 2 190
    - 20°C
*   - Low Earth orbit satellite / Phase ON
    - ON
    - 32 850h
    - 25°C
    - 5°C
    - 30min
    - 65 700
    - 25°C
*   - Low Earth orbit satellite/ Phase OFF
    - OFF
    - 10 950h
    - 20°C
    - 3°C
    - 10min
    - 65 700
    - 20°C
```
```{list-table} Mission profile of an equipment of a geostationary satellite.(2)
:name: eee-table4-210-b
:header-rows: 1
:widths: 20 10 10 10 10 10 10 10 10

*   - Phase name
    - On / Off
    - Calendar time
    - Relative humidity
    - Random vibrations
    - Saline pollution
    - Environ-mental pollution
    - Application pollution
    - Protection level
*   - Launch
    - OFF
    - 2h
    - 70%RH
    - 18Grms
    - Low
    - Low
    - Low
    - Hermetic
*   - Time to reach orbit
    - OFF
    - 4 380h
    - 0%RH
    - 0Grms
    - Low
    - Low
    - Low
    - Hermetic
*   - Low Earth orbit satellite / Phase ON
    - ON
    - 32 850h
    - 0%RH
    - 0Grms
    - Low
    - Low
    - Low
    - Hermetic
*   - Low Earth orbit satellite/ Phase OFF
    - OFF
    - 10 950h
    - 0%RH
    - 0Grms
    - Low
    - Low
    - Low
    - Hermetic
```

(eee_annex_a_3)=
## Mission profiles for science missions

Some science missions are leaving the Earth with far destination such as comets, satellites of other planets of solar system or asteroids. Other science missions are remaining in the Earth attraction with elliptic orbits. Each science mission is particular; therefore, each mission profile is specific and should be defined within the system team to catch all the parameters of each phase of the mission. However, some characteristics are similar whatever the mission is. Generally, there are two types of electronic equipment:

-   Equipment for cruise is switched on during the travel until joining the final destination and switched off after;

-   Equipment for mission as the payload is not activated during cruise and switched on when arriving at the final destination.

During the travel of the satellite, external conditions are those encountered in space. After reactivation, the temperature of the equipment is controlled. No humidity is present and the equipment is in the vacuum. Some characteristics of the missions are the following:

-   no typical duration, duration from few months to several years;

-   possible thermal cycling;

-   no humidity;

-   no vibrations;

-   no pollution.

Once arriving at the destination, the external conditions can be totally different from one mission to another and depend entirely on the final destination. The satellite and its modules are qualified to the conditions encountered at the final destination depending on the atmosphere, gravitation, external temperature and capability to store energy.

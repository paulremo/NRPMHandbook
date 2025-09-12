<!--- Copyright (C) Matrisk GmbH 2022 -->

(home_page)=
# Welcome to the ECSS-Q-HB-30-02A digital reliability handbook

This is the digital version of the ECSS-Q-HB-30-02A reliability handbook. This handbook offers:
 * **Technical content** in the [Handbook](methodologies) sections,
 * **Interactive content** in the [Models](sec_eee_models) sections.

## Objective

The ECSS-Q-HB-30-02A reliability handbook was developed to provide a reliability methodology that can be used for space applications, without the limitations and shortcomings of existing {term}`reliability prediction <Reliability prediction>` methodologies. The present digital handbook is a digitalized version of the ECSS-Q-HB-30-02A reliability handbook that offers easier access, interactive content, and a contemporary design.

This digital handbook contains 7 parts. These parts can be accessed by clicking on the icons below or browsing the table of contents on the left side of this page.

::::{grid}
:gutter: 3

:::{grid-item-card} **Methodologies**
<a href="methodologies/handbook/intro.html"><img class="link-image" src="_static/images/methodologyPicture.png" alt="logo methodologies"></a>
^^^
Gives a brief introduction to the project life cycle and to the different phases describing an item’s reliability over time. These concepts are needed to understand the taxonomy and for the reliability prediction process discussed in this handbook.
:::

:::{grid-item-card} **Methods**
<a href="methods/handbook/intro.html"><img class="link-image" src="_static/images/methodPicture.png" alt="logo methods"></a>
^^^
Provides information on different reliability prediction and methods inputs, allowing to understand the background of the models defined in the following parts.
:::
::::

::::{grid}
:gutter: 3

:::{grid-item-card} **EEE**
<a href="eee/handbook/intro.html"><img class="link-image" src="_static/images/eeePicture.png" alt="logo eee"></a>
^^^
Explains the modelling of EEE components based on the FIDES methodology.
:::

:::{grid-item-card} **Mechanical**
<a href="mechanical/handbook/intro.html"><img class="link-image" src="_static/images/mecaPicture.png" alt="logo mechanical"></a>
^^^
Introduces different inputs and methods for mechanical reliability prediction and presents elementary reliability modelling of mechanical items.
:::
::::

::::{grid}
:gutter: 3

:::{grid-item-card} **Miscellaneous**
<a href="miscellaneous/handbook/intro.html"><img class="link-image" src="_static/images/miscellaneousPicture.png" alt="logo miscellaneous"></a>
^^^
Introduces methods to treat parts that are difficult to classify into either EEE or mechanical.
:::

:::{grid-item-card} **System**
<a href="system/handbook/intro.html"><img class="link-image" src="_static/images/systemPicture.png" alt="logo system"></a>
^^^
Provides an overview of existing methods for system applications and consideration of specific aspects relevant to space applications.
:::
::::

::::{grid}
:gutter: 3

:::{grid-item-card} **Glossary**
<a href="glossary/handbook/intro.html"><img class="link-image" src="_static/images/glossary_picture1.png" alt="logo glossary"></a>
^^^
Provides a glossary of terms, definitions and abbreviated terms that can be found in the 6 previous parts.
:::
::::

Reliability prediction ({term}`RP`) is not an end in itself. The ultimate goal is decision support. A “decision” in this context should be understood as any kind of engineering, project management or business choice or trade-off, including e.g. feasibility assessments and design trade-offs, decisions during operations or for safe disposal, and business planning for single spacecraft or constellations.

The purpose of the **Part 1 - Methodology** ({numref}`methodologies`) is to provide guidance for the use of reliability prediction to support such decisions. The ground rules and scope of the prediction are defined accounting for the RP objectives and uses as well as for the project life cycle phase in which the predictions are performed. Ultimately, the goal is to select suitable methods and models to perform a prediction in a given context. The **Part 2 - Methods** ({numref}`methods`) contains information about the inputs and modelling approaches that can be used to develop models for reliability predictions in a given application. The discussion of methods can be used to derive new applications or update existing ones. However, the main purpose of this chapter is to form the basis for the application specific-parts following it: **Part 3 - EEE** ({numref}`sec_eee_handbook`, {numref}`sec_eee_models`), **Part 4 - Mechanical** ({numref}`sec_mech_handbook`, {numref}`sec_mech_models`), **Part 5 - Miscellaneous** ({numref}`sec_misc_handbook`, {numref}`sec_misc_models`), **Part 6 - System** ({numref}`sec_sys_handbook`, {numref}`sec_sys_models`).

```{figure} _static/images/overview_hdbk.png
---
width: 600px
name: fig_hdbk
---
Tasks in reliability prediction
```


Even though the handbook targets decision support, the decision-making as such is left to the user; reliability prediction is limited to providing the numbers that can be used to decide in a given trade-off situation. Also, the practical implementation and development or choice of suitable software tools is outside the scope of this handbook. As a general rule, models are provided with full detail, allowing the development of tools without any restrictions regarding the information needed to implement them.

## **How to use this digital handbook**

### Navigation

Every chapter contains at most two sections:

- **Handbook**: This section hosts the digitalized version of the original handbook. It follows closely the original structure but is enhanced with interactive content (e.g., automatic linking of terms and acronyms, searchable tables, powerful search functionality).
- **Models**: This section offers interactive elements (interactive guides, advanced reliability assessment).

They can be accessed from the navigation panel on the left of this page. The structure of the currently active site can be seen on the right of this page.

At the top of the left navigation panel is a search box that can be used to browse the contents of the whole digital handbook. 

### Versioning 

This digital handbook is supplied in a versioned format powered by [ReadTheDocs](https://readthedocs.org/). It is possible to switch between different versions of this document by selecting the desired version from the ReadTheDocs menu at the bottom of the left navigation panel. Besides the numbered versions, two special versions are distinguished:

- `latest` this is the latest version of the document and might change unexpectedly.
- `stable` this is the latest official version of the document and corresponds to the last released numbered version.

All versions may also be accessed (and linked to) with the following URL: `https://handbook.reliability.space/en/<version>/...` where `<version>` can be replaced by any version of this document.


(imprint)=
## Imprint

The content of this digital handbook has been developed within the [European Space Agency](https://www.esa.int/) ({term}`ESA`) project _New reliability prediction aimed at space applications_ (NRPM) under {term}`ESA` contract `No. 4000121065/17/NL/PS` (2017-2020).
As part of the {term}`ESA` project _Adaptation of the NRPM Handbook into an {term}`ESA` Handbook following the ECSS_ (2021-2022) under {term}`ESA` contract `No. 4000135482/21/NL/AR/va`, updated information on the PISTIS project has been added. Otherwise, no material changes have been made to the content.
 
As part of the {term}`ESA` project _Adaptation of the NRPM Handbook into an {term}`ESA` Handbook following the ECSS_ the contents of the handbook were structured to meet the requirements for {term}`ESA` handbooks.
 
In the context of the digitalization and possibilities of the digital world, within the {term}`ESA` project _Adaptation of the NRPM Handbook into an {term}`ESA` Handbook following the ECSS_ the consortium under the {term}`ESA` contract `No. 4000135482/21/NL/AR/va` developed the idea to create a digital interactive version besides the classical handbook version. In the project, the digital version was developed with the aim to show which interactive possibilities exist for books and to conduct a feasibility study for the implementation.
 
{term}`ESA` contract `No. 4000121065/17/NL/PS` (reliability.space) consortium:
- [Matrisk GmbH](https://matrisk.ch/en/) (lead)
- [Airbus Defence and Space](https://www.airbus.com/en/products-services/space/)
- [Thales Alenia Space](https://www.thalesgroup.com/en/global/activities/space)
- [Serma Technologies](https://www.serma-technologies.com/)
- [Sarel Consult](https://www.sarel-consult.de/)
 
{term}`ESA` contract `No. 4000135482/21/NL/AR/va` consortium:
- [Matrisk GmbH](https://matrisk.ch/en/) (lead)
- [Airbus Defence and Space](https://www.airbus.com/en/products-services/space/)

### Copyright
© [Matrisk GmbH](https://matrisk.ch/en/) 2022\
The copyright in this document is vested in [Matrisk GmbH](https://matrisk.ch/en/). This document may only be reproduced in whole or in part, or stored in a retrieval system, or transmitted in any form, or by any means electronic, mechanical, photocopying or otherwise, either with the prior permission of [Matrisk GmbH](https://matrisk.ch/en/) or in accordance with the terms of {term}`ESA` Contract `No. 4000121065/17/NL/PS`.

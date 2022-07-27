(home_page)=
# Welcome to the NRPM digital handbook!

This is the digital version of the {term}`NRPM` handbook for reliability.space. The handbook is currently under construction, but already offers a large collection of sections to explore, guides to interact with, and models to analyze.

```{admonition} Under construction
:class: todo
This digital handbook is under construction. Throughout the handbook you will find notes titled *under construction* that warn about content that is not yet finalized.

The following sections (and their subsections) are finalized and serve as a template for the remaining, unfinished sections:

- {numref}`sec_mech_models`: This sections hosts three tools for advanced interactive reliability assessment.
- {numref}`sec_misc_handbook`: This sections hosts the digitalized version of the miscellaneous chapter.
- {numref}`sec_misc_models`: This sections hosts two interactive tools for exploring the miscellaneous chapter of the digital handbook.
```

## Objective

The reliability.space 2020 handbook was developed during a {term}`ESA` study aiming at the development of a {term}`reliability prediction <Reliability prediction>` methodology for space applications. The objective of the handbook is to provide a methodology that is dedicated to space, avoiding the limitations and shortcomings of existing {term}`reliability prediction <Reliability prediction>` methodologies which were largely focussing on ground applications. The present digital handbook is a digitalized version of the reliabililty.space 2020 handbook that offers easier access, interactive content, and a contemporary design.

This digital handbook contains a methodology, a methods and four application-specific chapters for {term}`reliability prediction <Reliability prediction>` in space applications. These chapters can be accessed by clicking on the icons below or browsing the table of contents to the left of this page.

::::{grid}
:gutter: 3

:::{grid-item-card} **Methodologies**
<a href="methodologies/handbook/intro.html"><img class="link-image" src="_static/images/methodologyPicture.png" alt="logo methodologies"></a>
:::

:::{grid-item-card} **Methods**
<a href="methods/handbook/intro.html"><img class="link-image" src="_static/images/methodPicture.png" alt="logo methods"></a>
:::
::::

::::{grid}
:gutter: 3

:::{grid-item-card} **EEE**
<a href="eee/handbook/intro.html"><img class="link-image" src="_static/images/eeePicture.png" alt="logo eee"></a>
:::

:::{grid-item-card} **Mechanical**
<a href="mechanical/handbook/introduction.html"><img class="link-image" src="_static/images/mecaPicture.png" alt="logo mechanical"></a>
:::
::::

::::{grid}
:gutter: 3

:::{grid-item-card} **Miscellaneous**
<a href="miscellaneous/handbook/introduction.html"><img class="link-image" src="_static/images/miscellaneousPicture.png" alt="logo miscellaneous"></a>
:::

:::{grid-item-card} **System**
<a href="system/handbook/introduction.html"><img class="link-image" src="_static/images/systemPicture.png" alt="logo system"></a>
:::
::::

{term}`Reliability prediction <Reliability prediction>` ({term}`RP`) is not an end in itself – the ultimate goal is decision support. A “decision” in this context should be understood as any kind of engineering, project management or business choice or trade-off, including e.g. feasibility assessments and design trade-offs, decisions during operations or for safe disposal, and business planning for single {term}`spacecrafts <Spacecraft>` or constellations.

The purpose of the **methodology chapter** ({numref}`methodologies`) is to provide guidance for the use of {term}`reliability prediction <Reliability prediction>` to support such decisions. The ground rules and scope of the prediction are defined accounting for the {term}`RP` objectives and uses as well as for the project life cycle phase in which the predictions are performed. Ultimately, the goal is to select suitable methods and models to perform a prediction in a given context. The **methods chapter** ({numref}`methods`) contains information about the inputs and modelling approaches that can be used to develop models for {term}`reliability predictions <Reliability prediction>` in a given application. The discussion of methods can be used to derive new applications or update existing ones. However, the main purpose of this chapter is to form the basis for the application specific-chapters following it: **EEE chapter** ({numref}`sec_eee_handbook`, {numref}`sec_eee_models`), **mechanical chapter** ({numref}`sec_mech_handbook`, {numref}`sec_mech_models`), **miscellaneous chapter** ({numref}`sec_misc_handbook`, {numref}`sec_misc_models`), **system chapter** ({numref}`sec_sys_handbook`, {numref}`sec_sys_models`).

```{figure} _static/images/overview_hdbk.png
---
width: 600px
name: fig_hdbk
---
Tasks in {term}`reliability prediction<Reliability prediction>`.
```


Even though the handbook targets decision support, the decision-making as such is left to the user; {term}`reliability prediction <Reliability prediction>` is limited to providing the numbers that can be used to decide in a given trade-off situation. Also, the practical implementation and development or choice of suitable software tools is outside the scope of this handbook. As a general rule, models are provided with full detail, allowing the development of tools without any restrictions regarding the information needed to implement them.

## How to use this digital handbook

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

All versions may also be accessed (and linked to) with the following URL: `https://nrpmhandbook.reliability.space/en/<version>/...` where `<version>` can be replaced by any version of this document.


(imprint)=
## Imprint

The content of this digital handbook has been developed within the [European Space Agency](https://www.esa.int/) (ESA) project _New reliability prediction aimed at space applications_ (NRPM) under ESA contract `No. 4000121065/17/NL/PS` (2017-2020).
As part of the ESA project _Adaptation of the NRPM Handbook into an ESA Handbook following the ECSS_ (2021-2022) under ESA contract `No. 4000135482/21/NL/AR/va`, updated information on the PISTIS project has been added. Otherwise, no material changes have been made to the content.
 
As part of the ESA project _Adaptation of the NRPM Handbook into an ESA Handbook following the ECSS_ the contents of the handbook were structured to meet the requirements for ESA handbooks.
 
In the context of the digitalization and possibilities of the digital world, within the ESA project _Adaptation of the NRPM Handbook into an ESA Handbook following the ECSS_ the consortium under the ESA contract `No. 4000135482/21/NL/AR/va` developed the idea to create a digital interactive version besides the classical handbook version. In the project, the digital version was developed with the aim to show which interactive possibilities exist for books and to conduct a feasibility study for the implementation.
 
ESA contract `No. 4000121065/17/NL/PS` consortium:
- [Matrisk GmbH](https://matrisk.com/) (lead)
- [Airbus Defence and Space](https://www.airbus.com/en/products-services/space/)
- [Thales Alenia Space](https://www.thalesgroup.com/en/global/activities/space)
- [Serma Technologies](https://www.serma-technologies.com/)
- [Sarel Consult](https://www.sarel-consult.de/)
 
ESA contract `No. 4000135482/21/NL/AR/va` consortium:
- [Matrisk GmbH](https://matrisk.com/) (lead)
- [Airbus Defence and Space](https://www.airbus.com/en/products-services/space/)

### Copyright
© [Matrisk GmbH](https://matrisk.com/) 2022\
The copyright in this document is vested in [Matrisk GmbH](https://matrisk.com/). This document may only be reproduced in whole or in part, or stored in a retrieval system, or transmitted in any form, or by any means electronic, mechanical, photocopying or otherwise, either with the prior permission of [Matrisk GmbH](https://matrisk.com/) or in accordance with the terms of ESA Contract `No. 4000121065/17/NL/PS`.

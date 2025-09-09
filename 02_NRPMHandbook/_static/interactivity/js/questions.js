// Copyright (C) Matrisk GmbH 2022

let question_dico = new Map([
    ["Specification", new Map([
        [0, new Map([
            ["id", "1"],
            ["question", "Is there a financing item for reliability studies? Have the necessary means and personnel been identified?"],
            ["recommandation", "Assign human and financial resources to dependability and safety a.k.a. RAMST (Reliability, Availability, Maintainability, Safety, Testability) studies. → Financing is assigned to the project’s Dependability and Safety Manager(s). This is the subject of a separate project management item (at accounting level). The means and personnel required to carry out dependability studies are made available to the Product Dependability and Safety Manager."],
            ["weight", "10,7"],
            ["levels", new Map([
                ["N1", "No specific resources are allocated to dependability studies: They are integrated into other studies or there is a specific non-formalized allocation."],
                ["N2", "Resources allocated to dependability studies are identified at project management level and formalized in a document."],
                ["N3", "Resources allocated to dependability studies are identified at project management level and formalized in a validated plan."],
                ["N4", "Resources allocated to dependability studies are identified at project management level and formalized in a validated plan. Proof of the actual availability of the resources is established."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [1, new Map([
            ["id", "2"],
            ["question", "Are the general reliability requirements allocated down to subassembly level? If so, which method of allocation was used?"],
            ["recommandation", "Allocate reliability requirements down to subassembly level. → The reliability requirements must be applied at every level (system, equipment, board, etc.) by reliability specialists or under the control of reliability specialists. They can be grouped together in a dedicated document or integrated into the design documents."],
            ["weight", "10,4"],
            ["levels", new Map([
                ["N1", "Reliability requirements are not or will not be assigned to the different subassembly levels."],
                ["N2", "People in charge of reliability engineering have defined (or participated in defining) the detailed allocation of reliability requirements to the different subassembly levels. The detailed allocations are not attested by any document."],
                ["N3", "People in charge of reliability engineering have defined (or participated in defining) the detailed allocation of reliability requirements to the different subassembly levels. The detailed allocations are attested by validated documents."],
                ["N4", "People in charge of reliability engineering have defined (or participated in defining) the detailed allocation of reliability requirements to the different subassembly levels. The detailed allocations are attested by validated documents. This allocation is based on prior data relating to similar equipment (technology, operating environment)."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [2, new Map([
            ["id", "26"],
            ["question", "Is there a description and characterization of the environment in which the product is to be stored, transported, used and maintained? If applicable, are there any recommendations on storage, transport, use and maintenance?"],
            ["recommandation", "Describe fully the environment in which the product is to be used and maintained. → The environment in which the product is to be stored, transported, used and maintained is described. The following parameters are characterized by their mean and maximum values: Temperature, Humidity, Shocks, Vibrations, Pressure, Ambient light, Radiations, UV light, Mount position, ... If applicable, recommendations are made on the storage, transport, use and maintenance of the product. "],
            ["weight", "12,4"],
            ["levels", new Map([
                ["N1", "The product environment is unknown (or is hardly known). No formal analysis has been conducted by the manufacturer."],
                ["N2", "The product environment is partially known (the parameters listed in the further description are partially known). The analysis of the product environment, and the resulting recommendations, have not been formalized."],
                ["N3", "The product environment is partially known (applicable parameters defined in the recommendation are partially known), the manufacturer has made complementary assumptions and formalised them in a document."],
                ["N4", "The product environment is fully known (the parameters listed in the further description are known). The analysis and the resulting recommendations are formalized in a document."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [3, new Map([
            ["id", "28"],
            ["question", "What counts as a product failure?"],
            ["recommandation", "Define the criteria for product failure. → The criteria for product failure are described in detail. When applicable: (1) Tolerated degraded modes are described and validated ; (2) Redundancies are utilized. This work may lead, for example, to the calculation of a MTBCF (Mean Time Between Critical Failures)."],
            ["weight", "10,3"],
            ["levels", new Map([
                ["N1", "Product failure (along with acceptable degraded modes and usable redundancies) is not defined."],
                ["N2", "Product failure (along with acceptable degraded modes and usable redundancies) is defined by the manufacturer, but not validated by the customer."],
                ["N3", "Product failure (along with acceptable degraded modes and usable redundancies) is defined by the manufacturer and subsequently validated by the customer."],
                ["N4", "Product failure (along with acceptable degraded modes and usable redundancies) is defined by the manufacturer and subsequently validated by the customer. Product failure is specified in the appropriate documents: design documents and reliability plans."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [4, new Map([
            ["id", "29"],
            ["question", "How is it planned to demonstrate the reliability of the product?"],
            ["recommandation", "Define the method for demonstrating reliability. → Define, and validate with the customer, the method to be used for demonstrating compliance with the quantitative reliability requirement. "],
            ["weight", "8,1"],
            ["levels", new Map([
                ["N1", "The method for demonstrating reliability is not described in the call for tenders or contract."],
                ["N2", "The call for tenders or contract requires a demonstration of reliability, but does not specify the method."],
                ["N3", "The call for tenders or contract requires a demonstration of reliability but the method to be used is only partially described."],
                ["N4", "he reliability demonstration method is clearly defined in the call for tenders or contract."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [5, new Map([
            ["id", "31"],
            ["question", "Is there a clear definition of the product mission profile for which the reliability performance is expected?"],
            ["recommandation", "Define the product mission profile for which the reliability performance is expected. → The product mission profile (broken down into operational scenarios for which the reliability performance is expected) is fully defined. There is a description of the successive phases of use of the product (with the phase duration and environmental characteristics). This description must include, as a minimum: (1) The storage phases (non-operating, protected environment, low temperature variation, controlled humidity, etc.) ; (2) The non-operating phases (the product may be in its operational environment) ; (3) The operating phases (e.g. flight, taxiing, navigation, etc.). The mission profile can be refined during development."],
            ["weight", "9,9"],
            ["levels", new Map([
                ["N1", "The mission profile is not defined."],
                ["N2", "The mission profile is not supplied in the specifications (contract), but has been defined fully or partially by the manufacturer, but not validated by the customer."],
                ["N3", "The mission profile is supplied in the specifications (contract) and partially complies with the recommendation, or has been partially defined by the manufacturer and formally validated by the customer."],
                ["N4", "The mission profile is supplied in the specifications (contract) and complies with the recommendation, or has been fully defined by the manufacturer and formally validated by the customer."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [6, new Map([
            ["id", "53"],
            ["question", "Is experience feedback used to maintain confidence in delivering the required reliability performance?"],
            ["recommandation", "Leverage experience feedback. → Leverage experience feedback on products in operation. Experience feedback is exploited for three purposes: (1)To establish reasonable confidence in delivering the required reliability performance: field data analyses are performed on similar products used in similar environments, to consolidate predictive data ; (2) To improve product reliability: feedback analyses are shared with the development teams, in order to identify improvement options in terms of design ; (3) To readjust/calibrate/control predictive reliability methods. The methodology for exploiting feedback must be correctly defined. These studies require a large amount of time to collect operational data, and meticulous recording of the anomalies encountered. Input data: (1) Records of observed anomalies ; (2) The conditions of use of the product (mission profile, operational environment, length of use) ; (3) Analysis of the cause of failures (whether attributable to the manufacturer or not). Output data: (1) Operational reliability, which can be extrapolated for different environments and mission profiles by using system engineering models."],
            ["weight", "8,5"],
            ["applicability", "To be filled up by subcontractors in case of a standard catalogue item (e.g. startrackers). May also be completed by prime in case of constellation or satellite standard family."],
            ["levels", new Map([
                ["N1", "No experience feedback (measuring operational reliability on previous projects) is available or experience feedback  is available but not used."],
                ["N2", "Experience feedback is available, used but not formalized."],
                ["N3", "The manufacturer’s experience feedback is used and formalized in a document. This field data does not correspond exactly to the technologies employed. There is a procedure to validate or readjust predictive reliability methods."],
                ["N4", "The manufacturer’s experience feedback is used and formalized in a document. This field data corresponds to the current technologies employed, or similarity studies are conducted and formalized to evaluate the differences (document). There is a procedure to validate or readjust predictive reliability methods, and it is regularly updated."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [7, new Map([
            ["id", "54"],
            ["question", "Are reliability criteria taken into account in the product architecture, and in decisions about design, product industrialization, and support?"],
            ["recommandation", "Involve the dependability function in the functional and organic design of the product. → Use reliability engineering to optimize the product architecture and design choices. Give reliability engineering teams authority to act in the event of a reliability performance failure."],
            ["weight", "12,6"],
            ["levels", new Map([
                ["N1", "Reliability engineers do not participate in the design of the product."],
                ["N2", "The participation of reliability engineers in the design of the product is sporadic and/or partial. Reliability engineers intervene only for reliability assessments."],
                ["N3", "Reliability engineers contribute to design and to decision-making if a reliability target is missed; there are documents to this effect, but the company’s reference system does not describe their participation."],
                ["N4", "Reliability engineers contribute to design and to decision-making if a reliability target is missed; there are documents to this effect and the company’s reference system describes their participation."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [8, new Map([
            ["id", "57"],
            ["question", "Are the reliability requirements, in particular the quantitative requirement, formalized? Do they accurately describe the assumptions involved in assessing reliability performance?"],
            ["recommandation", "Formalize the reliability requirements, and the quantitative requirement in particular. → This recommendation concerns the way in which high-level requirements, generally formulated by the customer, are broken down into measureable elements. All reliability-related requirements (whether derived or taken directly from the customer’s requirements) must be formalized. Reliability performance must be specified quantitatively, for example by using one of the following metrics: (1) MTTF ; (2) MTBF or failure rate: this concept applies to repairable systems that have a long lifetime; it assumes a constant failure rate over time, which sometimes needs to be validated ; (2) Reliability or probability of survival for a given period of time; this concept can be used when a high level of reliability is required throughout the mission ; (3) The probability of success (independently of time) for single-use or cyclical-use devices. The assumptions involved in assessing reliability performance must be described: mission profile (Recommendation 31), type of time measurement (hours of operation, flight hours, cycles), etc. Quantitative values will be specified either as mean values (design objectives) or as minimum acceptable values. Minimum acceptable values are the values below which the customer judges the system to be unfit for purpose. The type of target value (design objective or minimum acceptable) will be defined explicitly."],
            ["weight", "13"],
            ["levels", new Map([
                ["N1", "No quantitative reliability requirements are specified."],
                ["N2", "No quantitative reliability requirements are specified, but a quantitative evaluation of reliability is requested."],
                ["N3", "The quantitative requirement is specified. Some quantification elements involve non-formalized assumptions."],
                ["N4", "The quantitative requirement is specified. All quantification assumptions are formally specified."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [9, new Map([
            ["id", "62"],
            ["question", "Are the technical risks that affect reliability identified?"],
            ["recommandation", "Formally identify the technical risks that affect reliability. → Formally identify any technical risks that might jeopardize delivery of the required reliability performance. This information will be used by the risk management procedure. Trace and manage these risks (in an action plan). Risk examples: components subject to SEEs (Single Event Effects), limited lifetime components, technologies that are new to the manufacturer, etc... "],
            ["weight", "12,4"],
            ["levels", new Map([
                ["N1", "There is no risk management policy, or the risk management policy does not address reliability aspects."],
                ["N2", "The risk management policy is informal, or addresses reliability aspects only partially."],
                ["N3", "An initial analysis has been carried out of the risks to the delivery of reliability performance. This is formalized, but risk management is not sustained over time; collaboration is organized between the equipment manufacturer and the system integrator to evaluate the risks inherent in the product environment."],
                ["N4", "The risks to the delivery of reliability performance are clearly identified. There is a procedure for managing these risks at the manufacturer, and it is followed. Collaboration is organized between the equipment manufacturer and the system integrator to evaluate the risks inherent in the product environment. A risk form is drawn up and updated for each risk. The risk form takes a quantitative approach to the probability of the risk, its severity (in terms of cost, planning, and performance), the proposed risk mitigation solutions, and the cost of these solutions."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [10, new Map([
            ["id", "65"],
            ["question", "Have the customer’s reliability-related requirements been identified, documented and tracked?"],
            ["recommandation", "Identify the customer’s reliability-related requirements. → The customer’s reliability-related requirements must be identified, documented and tracked. "],
            ["weight", "7,3"],
            ["levels", new Map([
                ["N1", "The customer’s requirements are not identified."],
                ["N2", "The customer’s requirements are identified informally."],
                ["N3", "The customer’s requirements are identified, documented and listed in a document (e.g. reliability plan) that is not revision-controlled."],
                ["N4", "The customer’s requirements are identified, documented and listed in a revision controlled document (e.g. reliability plan). Revision control ensures that all changes to the requirements are traceable."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [11, new Map([
            ["id", "103"],
            ["question", "Are the reliability requirements analysed? If applicable, does this analysis lead to the negotiation of requirements, or to the formalization of a risk management plan?"],
            ["recommandation", "Analyse the customer’s reliability requirements. → The reliability requirements must be analysed, with two aims in mind: (1) To assess the risk of nonconformity ; (2) To optimize reliability performance versus cost (cost of designing product, cost of conducting reliability studies). Analysis of the requirements may lead to: (1) Negotiation of requirements with the customer ; (2) The formalization of a plan to manage the risk of nonconformity to the requirements. In every case, analysis and negotiation must be carried out with reference to the state of the art in the technology."],
            ["weight", "10,7"],
            ["levels", new Map([
                ["N1", "The requirements are not analysed."],
                ["N2", "The requirements are analysed informally. However, there is no risk management plan and negotiations, if any, remain informal."],
                ["N3", "The requirements are analysed formally. The risk management plan or negotiations with the customer remain informal."],
                ["N4", "The requirements are analysed. Analysis of the requirements leads, where necessary, to the formalization of a plan to manage nonconformity risks, or to the negotiation of requirements with the customer. In the latter case, the result of the negotiation is integrated into the final bid submitted to the customer."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [12, new Map([
            ["id", "106"],
            ["question", "Do design reviews (PDR, CDR) address reliability aspects ?"],
            ["recommandation", "Address reliability aspects during design reviews. → Design reviews must address reliability aspects. Conformity to reliability requirements must be addressed in these reviews. The reviews must define: (1) Reliability allocations ; (2) Conditions of use (mission profile)."],
            ["weight", "10,3"],
            ["levels", new Map([
                ["N1", "There are no design reviews, or the design reviews do not address reliability aspects."],
                ["N2", "Design reviews address reliability aspects only in part, or they are held in the absence of reliability specialists."],
                ["N3", "Design reviews address reliability aspects in full and are held in the presence of reliability specialists."],
                ["N4", "Design reviews address reliability aspects in full and are held in the presence of reliability specialists. Design reviews, and the presence of reliability specialists, are imposed by a procedure or plan."]
            ])]
        ])],
        [13, new Map([
            ["id", "107"],
            ["question", "Do requirements reviews (PRR, SRR) address reliability requirements ?"],
            ["recommandation", "Address reliability aspects during requirements reviews. → Requirements reviews must address reliability requirements and verify that: (1) All reliability requirements are identified and tracked ; (2) The reliability requirements correspond to the customer’s need (contract) ; (3) The reliability requirements are attainable, verifiable and validatable (conformity metrics)."],
            ["weight", "10,3"],
            ["levels", new Map([
                ["N1", "There are no requirements reviews, or if there are, they do not address the reliability requirements."],
                ["N2", "Requirements reviews address reliability requirements only in part, or they are held in the absence of reliability specialists."],
                ["N3", "Requirements reviews address reliability requirements in full and are held in the presence of reliability specialists."],
                ["N4", "Requirements reviews address reliability requirements in full and are held in the presence of reliability specialists. Requirements reviews, and the presence of reliability specialists, are imposed by a procedure or plan."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [14, new Map([
            ["id", "117"],
            ["question", "How is the customer’s product maintenance policy taken into account?"],
            ["recommandation", "Take account of the product maintenance policy, as defined by the customer. → The customer’s maintenance policy must be taken into account in order to preserve the reliability of the product over time."],
            ["weight", "5,8"],
            ["applicability", "Crewed vehicle only"],
            ["levels", new Map([
                ["N1", "The product maintenance policy is unknown."],
                ["N2", "The maintenance policy is known, but was defined without taking account of reliability aspects."],
                ["N3", "The maintenance policy is known and was defined by taking account of reliability aspects (identification and monitoring of critical elements)."],
                ["N4", "The maintenance policy is known and was defined by taking account of reliability aspects (identification and monitoring of critical elements). The maintenance policy was defined with input from reliability managers. The maintenance policy is formalized in a document."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [15, new Map([
            ["id", "122"],
            ["question", "Has a reliability plan been written for the product?"],
            ["recommandation", "Write a reliability plan. → A reliability plan is written, including, as a minimum: (1) A description of the project organization (human and hardware) ; (2) A reminder of the reliability-related requirements ; (3) A description of the calculation methodology and underlying assumptions (level of detail of the study, mission profile, etc.) ; (4)  A description of the requirement demonstration method ; (5) A description of the method for exploiting feedback ; (6) A description of the activities to be performed in the event of nonconformity. In the absence of a reliability plan, the above topics must be fully covered in a RAMS/RAMT plan or a development plan."],
            ["weight", "7,6"],
            ["levels", new Map([
                ["N1", "No reliability plan has been written."],
                ["N2", "A reliability plan is written informally, but is not validated by the project."],
                ["N3", "The reliability plan is written and validated by the project. However, this document, written at the outset, is not updated during the project."],
                ["N4", "The reliability plan is written and validated by the project. This document is updated throughout the project, to take stock of events that might cause it to be modified."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [16, new Map([
            ["id", "181"],
            ["question", "Is the product mission profile known and mastered?"],
            ["recommandation", "Know and control the mission profile. → The product mission profile is fully known and controlled: (1) The potential variations in the different environmental stresses are known ; (2) The impact of environmental stress variation is controlled and taken into account in dependability analyses (e.g. MTBF for safety analyses)."],
            ["weight", "13"],
            ["levels", new Map([
                ["N1", "The mission profile is not  mastered ; a “standard” mission profile is assumed."],
                ["N2", "The mission profile is not mastered. However, reliability calculations are performed using multiple mission profiles corresponding to typical use cases."],
                ["N3", "Sensitivity analyses are conducted to evaluate the impact of the different environmental stresses on product reliability. These analyses are taken into account to adjust reliability calculations to the circumstances (e.g. “average” mission profile for an ISS contract, or “worst case” mission profile for a safety analysis)."],
                ["N4", "Integrated sensors (HUMS) are implemented; these measure environmental stresses in real time and process them to gain better knowledge of the product’s conditions of operation. This data is taken into account to update reliability analyses and adjust them to the circumstances (e.g. “average” mission profile for an ISS contract, or “worst case” mission profile for a safety analysis)."],
                ["NA", "Not Applicable"],
            ])]
        ])],
    ])],
    ["Design", new Map([
        [0, new Map([
            ["id", "6"],
            ["question", "Is the technical data on subassemblies available for the development of production tests?"],
            ["recommandation", "Ensure the completeness of information on subassemblies in order to establish subassembly test manuals. → Obtain technical data on subassemblies in order to develop production tests."],
            ["weight", "7,8"],
            ["applicability", "Not applicable for unique or low quantity production of board/unit"],
            ["levels", new Map([
                ["N1", "Technical data on subassemblies is not available."],
                ["N2", "Technical data on subassemblies is available, but it is not validated and is only partially usable."],
                ["N3", "Technical data on subassemblies is available; it is validated, but incomplete or only partially usable."],
                ["N4", "Technical data on subassemblies is available ; it is validated, complete, and usable for all of the subassemblies."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [1, new Map([
            ["id", "7"],
            ["question", "What process is used to collect data on technical events, to report anomalies, and to manage them?"],
            ["recommandation", "Implement corrective actions. → This recommendation deals with the implementation of corrective actions (the documentation aspect is dealt with in Recommendation 116). The following functions must be covered by a quality assurance procedure: (1) Processing customer complaints and product nonconformity reports ; (2)  Searching for causes of nonconformity relating to the product, the process and the quality system, and recording the results of this search ; (3)  Determining corrective and preventive actions required to eliminate causes of nonconformity ; (4) Applying resources to measure the efficacy of these corrective and preventive actions."],
            ["weight", "6,7"],
            ["applicability", ""],
            ["levels", new Map([
                ["N1", "There are no corrective action procedures."],
                ["N2", "Corrective actions are implemented following a customer complaint or nonconformity report, but they are not formalized."],
                ["N3", "Corrective action procedures include at least: (1)  Effective processing of customer complaints and product nonconformity reports ; (2) The search for causes of nonconformity relating to the product, the process and the quality system, and recording the results of this search ; (3)  The determination of corrective actions required to eliminate causes of nonconformity. These procedures do not define the application of control measures to ensure that corrective actions are implemented and that they produce the desired effect."],
                ["N4", "Corrective action procedures include: (1)  Effective processing of customer complaints and product nonconformity reports ; (2) The search for causes of nonconformity relating to the product, the process and the quality system, and recording the results of this search ; (3) The determination of corrective actions required to eliminate causes of nonconformity ; (4) The application of control measures to ensure that corrective actions are implemented and that they produce the desired effect."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [2, new Map([
            ["id", "8"],
            ["question", "Do the preventive action procedures include: (1) The use of diversified sources of information? ; (2) The definition of the steps to follow? ; (3) The criteria for triggering preventive actions and applying inspection procedures? ; (4) A preventive action follow-up review?"],
            ["recommandation", "Implement preventive actions. → Preventive action procedures include: (1) Using appropriate sources of information – such as processes and operations affecting product quality, waivers, audit results, quality records, maintenance reports and customer complaints – to detect, analyse and eliminate potential causes of nonconformity ; (2) The definition of appropriate steps to deal with any problem that requires preventive action ; (3) Triggering preventive actions and applying inspection procedures to make sure they produce the desired effect ; (4)  Ensuring that relevant information on the actions implemented is submitted for management review."],
            ["weight", "6,8"],
            ["levels", new Map([
                ["N1", "No preventive action procedures are implemented."],
                ["N2", "Preventive action procedures exist but are incomplete."],
                ["N3", "Preventive action procedures exist and are almost complete with regard to the listed criteria (there may be minor nonconformities in the way criteria are applied or met)."],
                ["N4", "Preventive action procedures exist, are formalized, and are complete with regard to the listed criteria."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [3, new Map([
            ["id", "16"],
            ["question", "Is the viewpoint of the different disciplines involved in the engineering work taken into account?"],
            ["recommandation", "Make sure that a person responsible for logistics support, product industrialization, procurement, development and RAMS is involved at every step (concurrent engineering). → Make sure that a person responsible for logistics support, product industrialization, procurement, development and RAMS is involved at every step. Make sure that the guidelines used impose concurrent engineering: the company’s organization relies on permanent function specialists."],
            ["weight", "16,7"],
            ["levels", new Map([
                ["N1", "The guidelines do not impose concurrent engineering."],
                ["N2", "There is an overall instruction that does not specify the precise modalities. No formal organization."],
                ["N3", "There is a procedure imposing concurrent engineering, but it is not adapted to the company’s organization: positions of responsibility for logistics support, product industrialization, procurement, development and RAMS are assigned independently of the functions."],
                ["N4", "There is a procedure imposing concurrent engineering. The company’s organization relies on permanent function specialists."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [4, new Map([
            ["id", "28"],
            ["question", "What counts as a product failure?"],
            ["recommandation", "Define the criteria for product failure. → The criteria for product failure are described in detail. Where applicable: (1) Tolerated degraded modes are described and validated ; (2) Redundancies are utilized. This work may lead, for example, to the calculation of a MTBCF (Mean Time Between Critical Failures)."],
            ["weight", "14"],
            ["levels", new Map([
                ["N1", "Product failure (along with acceptable degraded modes and usable redundancies) is not defined."],
                ["N2", "Product failure (along with acceptable degraded modes and usable redundancies) is defined by the manufacturer, but not validated by the customer."],
                ["N3", "Product failure (along with acceptable degraded modes and usable redundancies) is defined by the manufacturer and subsequently validated by the customer."],
                ["N4", "Product failure (along with acceptable degraded modes and usable redundancies) is defined by the manufacturer and subsequently validated by the customer. Product failure is specified in the appropriate documents: design documents and reliability plans."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [5, new Map([
            ["id", "34"],
            ["question", "What training have the test personnel received to qualify them to work with the test equipment, measurements, and corresponding standards?"],
            ["recommandation", "Assign personnel qualified to work with the test equipment, measurements and corresponding standards. → Provide training to ensure that personnel have full mastery of the test equipment, the standards, and the interpretation of the measurements: training planned and skills monitored."],
            ["weight", "5,8"],
            ["levels", new Map([
                ["N1", "No training or skills monitoring on these points."],
                ["N2", "Training is available, but not tracked; courses are not individualized."],
                ["N3", "Training is followed on an individual basis."],
                ["N4", "Training is followed on an individual basis, with refresher courses."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [6, new Map([
            ["id", "36"],
            ["question", "Is a preliminary reliability study conducted during the preliminary development phases?"],
            ["recommandation", "Conduct a preliminary technical reliability study. → Perform a preliminary reliability study during the preliminary development phases. The preliminary study serves to allocate reliability requirements down to subassembly level. The requirements are formalized in the subassembly specifications. There is a directive that makes it mandatory to formalize the preliminary study and the requirements. "],
            ["weight", "8"],
            ["levels", new Map([
                ["N1", "There is no preliminary reliability study."],
                ["N2", "A preliminary study is conducted, but not formalized."],
                ["N3", "A preliminary study is formalized. The reliability requirements are not allocated down to subassembly level."],
                ["N4", "A preliminary study is formalized. The reliability requirements are allocated down to subassembly level and are formalized in the subassembly specifications."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [7, new Map([
            ["id", "38"],
            ["question", "Are specialist design procedures managed? Are these specialist design procedures updated?"],
            ["recommandation", "Apply specialist design procedures to capitalize on know-how. → Capitalize on know-how and on the application of technical standards by means of specialist design procedures (information leveraging designer know-how: guidelines, checklists, processes, operating procedures, etc.). Make sure that these procedures cover the reliability risks. Update these procedures in response to technical developments, and manage the resulting changes."],
            ["weight", "13,8"],
            ["levels", new Map([
                ["N1", "There are no specialist design procedures."],
                ["N2", "There are specialist design procedures, but they are incomplete and/or not updated."],
                ["N3", "There are specialist design procedures, and they are updated."],
                ["N4", "There are specialist design procedures, and they are updated. Moreover: (1) They cover reliability risks ; (2)There is a plan to improve and capitalize on procedures ; (3) There are regular formalized reviews that define action plans to improve practices."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [8, new Map([
            ["id", "39"],
            ["question", "Are design skills managed? Is there a regularly updated skills matrix? Is the relevance of training verified?"],
            ["recommandation", "Manage and maintain a design skills matrix. → Make sure that the skills required in design are attributed to named individuals in a regularly updated skills matrix. Perform periodic checks on the suitability of training."],
            ["weight", "24,5"],
            ["levels", new Map([
                ["N1", "Design skills are not monitored."],
                ["N2", "Design skills are monitored and are attributed to named individuals in a skills matrix."],
                ["N3", "Design skills are monitored and are attributed to named individuals in a regularly updated skills matrix."],
                ["N4", "Design skills are monitored and are attributed to named individuals in a regularly updated skills matrix. The skills matrix incorporates monitoring of training, in order to verify that courses are commensurate with the objectives."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [9, new Map([
            ["id", "44"],
            ["question", "Is there a guideline document on customer-site handling and storage operations?"],
            ["recommandation", "Control handling and storage operations at the user site. → Make sure there is a list of function-specific recommendations on handling and storage operations at the user site, and that it is applied. This list must be enriched by experience feedback. These recommendations will enable Integrated Logistics Support to write the user manual."],
            ["weight", "7,7"],
            ["levels", new Map([
                ["N1", "There is no list of recommendations or procedures for processing feedback."],
                ["N2", "There is a list of recommendations, but it is neither formalized nor managed. Feedback is processed unsystematically."],
                ["N3", "There is a list of formalized recommendations, not necessarily applicable to the project (not referenced to the project) and not validated. Feedback is formalized in an unmanaged database and is rarely used in design."],
                ["N4", "The list of recommendations is formalized, validated, and referenced to the project. Feedback is formalized, validated, referenced to the project, and usable, and serves as design input data to improve reliability."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [10, new Map([
            ["id", "48"],
            ["question", "Are the component databases updated so as to capitalize on existing knowledge? Is there a regularly maintained preferred components list?"],
            ["recommandation", "Improve product reliability by managing a preferred components list. → A preferred components list takes account of: (1) Qualification of manufacturers/suppliers ; (2) Reliability characteristics ; (3) Estimated end-of-life dates (prevention of obsolescence). This list must be updated regularly, if possible in real time, to take account of new solutions, permanent quality alerts, and information gathered from manufacturers (manufacturer status, lifetime estimate)."],
            ["weight", "8"],
            ["levels", new Map([
                ["N1", "There is no preferred components list."],
                ["N2", "There is a preferred components list but it is not formalized, not validated, and contains only technical characteristics."],
                ["N3", "There is a preferred components list, and it is managed and formalized, with standardization targets. It is validated by Procurement, Methods and Technical Services and contains only technical characteristics."],
                ["N4", "There is a preferred components list, and it is managed and formalized, with standardization targets. It is validated by Procurement, Methods and Technical Services and contains not only technical characteristics but also information on component reliability."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [11, new Map([
            ["id", "50"],
            ["question", "Is there a technical event database? How is it maintained and operated?"],
            ["recommandation", "Maintain and operate a technical event database. → Make sure that there is a technical event database, and that it is maintained and operated, with the aim of capitalizing on experience feedback and improving the reliability of future designs."],
            ["weight", "24,2"],
            ["levels", new Map([
                ["N1", "There is no technical event database."],
                ["N2", "There is a technical event database, but it is not up to date."],
                ["N3", "There is a technical event database; it is up to date, but it is not operated."],
                ["N4", "There is a technical event database; it is up to date and it is operated."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [12, new Map([
            ["id", "51"],
            ["question", "Is there a database to capitalize on reliability assessment studies?"],
            ["recommandation", "Maintain a database to capitalize on reliability assessment studies. → Ensure centralized management of reliability assessment studies in order to reuse previous calculations with stresses: (1) The baseline assumptions are clearly identified ; (2) The data is extractible and reusable by the design functions."],
            ["weight", "10,6"],
            ["levels", new Map([
                ["N1", "There is no database."],
                ["N2", "There is a database, but it is not centralized."],
                ["N3", "There is a centralized database, but no formal process"],
                ["N4", "There is a centralized database with a formal enrichment process."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [13, new Map([
            ["id", "52"],
            ["question", "Is there a process for describing, tracking and justifying design definitions and changes to developed products? Is there a database on the design history and justifications?"],
            ["recommandation", "Control design definitions and changes to products in development. → Verify the existence of a design definition files and design justification files; make sure changes are tracked and configuration-managed."],
            ["weight", "7,8"],
            ["levels", new Map([
                ["N1", "There is no design definition file and no design justification file."],
                ["N2", "There is a design definition file, but there is no design justification file."],
                ["N3", "There is a design definition file and a design justification file. However, the traceability of changes is not managed."],
                ["N4", "There is a design definition file and a design justification file. There is a configuration management plan that enables changes to be tracked."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [14, new Map([
            ["id", "54"],
            ["question", "Are reliability criteria taken into account in the product architecture, and in decisions about design, product industrialization, and support?"],
            ["recommandation", "Involve the dependability function in the functional and organic design of the product. → Use reliability engineering to optimize the product architecture and design choices. Give reliability engineering teams authority to act in the event of a reliability performance failure."],
            ["weight", "12,6"],
            ["levels", new Map([
                ["N1", "Reliability engineers do not participate in the design of the product."],
                ["N2", "The participation of reliability engineers in the design of the product is sporadic and/or partial. Reliability engineers intervene only for reliability assessments."],
                ["N3", "Reliability engineers contribute to design and to decision-making if a reliability target is missed; there are documents to this effect, but the company’s reference system does not describe their participation."],
                ["N4", "Reliability engineers contribute to design and to decision-making if a reliability target is missed; there are documents to this effect and the company’s reference system describes their participation."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [15, new Map([
            ["id", "61"],
            ["question", "Have measures been identified and implemented to protect subassemblies during certain production activities?"],
            ["recommandation", "Identify and implement measures to protect subassemblies. → External stresses must be identified and protective measures implemented to avoid impacting the reliability of subassemblies: (1) Mechanical protection ; (2) Thermal protection ; (3) Protection from contaminants."],
            ["weight", "7,3"],
            ["levels", new Map([
                ["N1", "No particular measures to protect subassemblies are identified."],
                ["N2", "PMeasures to protect subassemblies are identified, but only partially applied in the various activities."],
                ["N3", "Measures to protect subassemblies are specified, and their application is verified. However, this specification is not updated on the basis of past data."],
                ["N4", "Measures to protect subassemblies are specified and their application is verified. This specification is based on past data from previous products, and on periodic analysis of observed anomalies."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [16, new Map([
            ["id", "62"],
            ["question", "Are the technical risks that affect reliability identified?"],
            ["recommandation", "Formally identify the technical risks that affect reliability. → Formally identify any technical risks that might jeopardize delivery of the required reliability performance. This information will be used by the risk management procedure. Trace and manage these risks (in an action plan). Risk examples: components subject to SEEs (Single Event Effects), limited lifetime components, technologies that are new to the manufacturer, etc..."],
            ["weight", "12,4"],
            ["levels", new Map([
                ["N1", "There is no risk management policy, or the risk management policy does not address reliability aspects."],
                ["N2", "The risk management policy is informal, or addresses reliability aspects only partially."],
                ["N3", "The risk management policy is informal, or addresses reliability aspects only partially."],
                ["N4", "The risks to the delivery of reliability performance are clearly identified. There is a procedure for managing these risks at the manufacturer, and it is followed. Collaboration is organized between the equipment manufacturer and the system integrator to evaluate the risks inherent in the product environment. A risk form is drawn up and updated for each risk. The risk form takes a quantitative approach to the probability of the risk, its severity (in terms of cost, planning, and performance), the proposed risk mitigation solutions, and the cost of these solutions."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [17, new Map([
            ["id", "83"],
            ["question", "Are checks performed to ensure that test coverage is complete, based on the specification? Is there a document describing the method of calculation and justifying the coverage rate?"],
            ["recommandation", "Maximize test coverage based on the specification. → Make sure that test coverage is  complete, based on the specification. Produce a document justifying the coverage rate."],
            ["weight", "6"],
            ["levels", new Map([
                ["N1", "The coverage rate is not evaluated."],
                ["N2", "Test coverage is evaluated, but no action is taken to achieve the specification target or to maximize the coverage rate."],
                ["N3", "Test coverage is evaluated and actions are taken to maximize the coverage rate. The justification of the coverage rate is not formalized."],
                ["N4", "Test coverage is evaluated and actions are taken to maximize the coverage rate. The justification of the coverage rate is formalized. Any non-coverage of certain functions must be justified (functions not used in operation, no impact, etc.)."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [18, new Map([
            ["id", "86"],
            ["question", "Are design reviews held?"],
            ["recommandation", "Implement design reviews. → Design reviews must be organized throughout development to ensure that the project is moving in the right direction. These reviews will include, at a minimum: (1) A preliminary design review ; (2) A detailed design review ; (3) A final design review. These reviews must be attended by a representative from each function."],
            ["weight", "27,1"],
            ["levels", new Map([
                ["N1", "There is no design review."],
                ["N2", "There are design reviews at each stage of development, but they are informal, and not described in a procedure validated by the company."],
                ["N3", "There are design reviews at each stage of development. They are formal, and described in a procedure validated by the company. However, they do not involve all of the functions."],
                ["N4", "There are design reviews at each stage of development. These reviews are organized following a procedure validated by the company. These reviews involve all of the functions."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [19, new Map([
            ["id", "87"],
            ["question", "Is there a maintenance concept?"],
            ["recommandation", "Implement a maintenance concept as part of logistics support. → Make sure that the maintenance concept is formalized and validated by the customer. Example of documents to be presented to meet the concept requirements: (1) Integrated logistics support plan ; (2) Logistics supportability analysis (LSA)."],
            ["weight", "5,4"],
            ["applicability", "Case of single satellite, probe and launcher without specified maintenance : all NA. Regular calibration is not considered as a maintenance operation.  Maintenance for crewed vehicle is considered here. In that case L4 is expected even for newspace. Constellation replenishment is considered as a maintenance."],
            ["levels", new Map([
                ["N1", "There are no support requirements. The customer’s organization is not taken into account."],
                ["N2", "There are support requirements, but they are only partially formalized, and ad-hoc or even disorganized, and they are not defined down to subassembly level. The customer’s organization is not taken into account."],
                ["N3", "Support requirements are formalized. The response to the requirements is formalized, but not validated, and is seen as secondary: the requirements are only partially justified, or are not met."],
                ["N4", "Support requirements are formalized (maintenance concept). A project organization is implemented at the manufacturer to respond to the customer requirements, in the form of a logistics support plan. Support requirements are taken into account from the design stage; they are defined down to subassembly level, justified and validated in a supportability analysis. The support system elements (documents, training, spare parts batches, tools and test equipment) are available, and are consistent and validated."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [20, new Map([
            ["id", "106"],
            ["question", "Do design reviews address reliability aspects?"],
            ["recommandation", "Address reliability aspects during design reviews. → Design reviews must address reliability aspects. Conformity to reliability requirements must be addressed in these reviews. The reviews must define: (1) Reliability allocations ; (2) Conditions of use (mission profile)."],
            ["weight", "10,3"],
            ["levels", new Map([
                ["N1", "There are no design reviews, or the design reviews do not address reliability aspects."],
                ["N2", "Design reviews address reliability aspects only in part, or they are held in the absence of reliability specialists."],
                ["N3", "Design reviews address reliability aspects in full and are held in the presence of reliability specialists."],
                ["N4", "Design reviews address reliability aspects in full and are held in the presence of reliability specialists. Design reviews, and the presence of reliability specialists, are imposed by a procedure or plan."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [21, new Map([
            ["id", "116"],
            ["question", "What information is described in the nonconformity reports?"],
            ["recommandation", "Control the quality of data in nonconformity reports. → Nonconformity reports must specify: (1)The product identification ; (2) The description of the nonconformity ; (3) The cause of the nonconformity ; (4) The actions taken to avoid recurrence of the nonconformity ; (5) The rework or repairs, if necessary ; (6) The inspection of the characteristics affected by the rework or repairs ; (7) The final decision."],
            ["weight", "13"],
            ["levels", new Map([
                ["N1", "There are no specific nonconformity documents."],
                ["N2", "The nonconformity documents serve only to identify nonconforming products."],
                ["N3", "The nonconformity documents specify the product identification, the description of the nonconformity, and the cause of the nonconformity. However, no formal actions are defined to avoid recurrence of the nonconformity, specify any rework or repairs required, and inspect the characteristics affected by the rework or repairs."],
                ["N4", "The nonconformity documents specify the product identification, the description of the nonconformity, and the cause of the nonconformity. Formal actions are defined to avoid recurrence of the nonconformity, specify any rework or repairs required, and inspect the characteristics affected by the rework or repairs."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [22, new Map([
            ["id", "123"],
            ["question", "Is there a plan that integrates the dependability aspects? Are activities planned  identified?"],
            ["recommandation", "Plan dependability activities. → Make sure that there is a plan (e.g. a project management plan or dependability management plan) that clearly describes the activities to be performed, their interactions (inputs/outputs) and how they fit in with the other activities, and any adjustments made to the guidelines."],
            ["weight", "17,7"],
            ["levels", new Map([
                ["N1", "There is no management plan, and no schedule describing the tasks to be performed. There is no organizational structure in place."],
                ["N2", "The management plan is incomplete: (1) It does not specify any adjustments made to the guidelines ; (2) The schedule describing the tasks to be performed and the organization put in place is imprecise and/or incompatible with the available resources."],
                ["N3", "The management plan is incomplete: (1) It does not specify any adjustments made to the guidelines ; (2) The schedule describing the tasks to be performed and the organization put in place is precise, but not peer-validated (by key function personnel)."],
                ["N4", "The management plan is complete: (1) It specifies the adjustments made to the guidelines, if any ; (2) The schedule describing the tasks to be performed and the organization put in place is precise and is validated. ; (3) The plan is peer-validated (by key function personnel)."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [23, new Map([
            ["id", "124"],
            ["question", "Is there an final acceptance test procedure for production tests?"],
            ["recommandation", "Write an acceptance test procedure. → Make sure that there is an acceptance test procedure and that it is relevant. The acceptance test procedure is drawn up on the basis of a definition file and a manufacturing file which focuses on testing and final inspection."],
            ["weight", "7,8"],
            ["levels", new Map([
                ["N1", "There is no acceptance test procedure."],
                ["N2", "There is an acceptance test procedure, but it is established in production, independently from the development teams."],
                ["N3", "There is an acceptance test procedure, which is established during development; it integrates configuration management, but is neither validated nor tracked."],
                ["N4", "The acceptance test procedure is adapted to the product (with proof of the traceability of its application to the product and its configuration) and is validated."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [24, new Map([
            ["id", "130"],
            ["question", "Are the elements required for the reliability assessment available Does the input data come from validated documents?"],
            ["recommandation", "Make sure that the elements required for the reliability assessment are available. → Make sure that the necessary input data for reliability assessment is available. This data includes: (1) The definition file (including the functional and physical architectures, electrical diagrams, mission profile and reliability requirements) ; (2) The parts lists ; (3) The thermal analysis reports ; (4) The derating analysis. These input data have been validated."],
            ["weight", "7,5"],
            ["levels", new Map([
                ["N1", "The data required for reliability assessment is not validated."],
                ["N2", "The data required for reliability assessment is incomplete or only partially validated, or is not up to date."],
                ["N3", "The data required for reliability assessment is available, up to date and validated, but incomplete (see further description list)."],
                ["N4", "All the data required for reliability assessment (see further description list) is available, up to date and validated."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [25, new Map([
            ["id", "131"],
            ["question", "Are there any design rules for adapting the choice of component to the required reliability level?"],
            ["recommandation", "Make sure there are design rules for adapting the choice of component to the required reliability level. → Make sure there is a design methodology that imposes rules appropriate to the required reliability level: (1) Choice of packages (dimensions, materials) appropriate to the conditions of use ; (2) Choice of components with a lifetime commensurable with the lifetime of the equipment ; (3) Mechanical rules (stiffeners, etc.) ; (4) Etc.. Make sure that the application of the rules is verified."],
            ["weight", "12,7"],
            ["levels", new Map([
                ["N1", "There are no reliability-oriented design rules."],
                ["N2", "The production manager knows about the test implementation method, and contributed to the test recommendations."],
                ["N3", "The production manager knows about the test implementation method and contributed to the test recommendations. There is a validated set of recommendations explaining how to conduct the tests. There is no traceability (no guarantee that the recommendations are applied)."],
                ["N4", "The production manager knows about the test implementation method and contributed to the test recommendations. There is a validated set of recommendations explaining how to conduct the tests. There are documents attesting that the recommendations are applied."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [26, new Map([
            ["id", "132"],
            ["question", "Are test points defined and are recommendations on production tests applied?"],
            ["recommandation", "Make sure that production test points are defined and that test recommendations are applied by production. → Make sure test points are defined. Make sure that the test operation constraints (as specified by the test manager) are integrated into the product definition and communicated to the production manager. Remark: The definition of test points can sometimes be deduced from the key characteristics identified in the Design FMECA."],
            ["weight", "6"],
            ["levels", new Map([
                ["N1", "The test points have not been defined, or the production manager has no information on the method for implementing tests on the product."],
                ["N2", "The production manager is aware of the manner in which test operations will be carried out and participated in producing the test recommendations."],
                ["N3", "The production manager is aware of the manner in which test operations will be carried out and participated in producing the test recommendations. There is a validated compilation of recommendations specifically describing the manner in which the tests are carried out, but with no guarantee about their application."],
                ["N4", "Production managers participate in the definition of the production test. There is a validated compilation of recommendations specifically describing the manner in which the tests are carried out, and there is proof that the recommendations are applied."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [27, new Map([
            ["id", "133"],
            ["question", "Is there a qualification procedure for the products and the manufacturing process?"],
            ["recommandation", "Make sure there is a qualification procedure for the product and the manufacturing process. → Make sure there is a product/process qualification procedure, including the description of the qualification test. This procedure is validated and updated in accordance with the entity’s practices."],
            ["weight", "7,2"],
            ["levels", new Map([
                ["N1", "There is no product/process qualification procedure."],
                ["N2", "There is a qualification procedure for the product but there is no qualification procedure for the process."],
                ["N3", "There is a qualification procedure for the product and a qualification procedure for the process, but the compatibility between the two procedures is not verified."],
                ["N4", "There is a qualification procedure for the product and a qualification procedure for the process; the compatibility between the two procedures is verified."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [28, new Map([
            ["id", "134"],
            ["question", "Is there a  selection process for Tier-1 suppliers/products? On what criteria is this selection based?"],
            ["recommandation", "Make sure there is a selection process  for Tier-1 suppliers/products. → Make sure that Tier-1 suppliers are qualified selected taking into account and that the following aspects are covered: (1) Quality ; (2) Reliability ;(3) Long-term sustainability. Make sure that the initial qualification selection level is maintained over time (audits, analyses, tests, etc.)."],
            ["weight", "7,6"],
            ["levels", new Map([
                ["N1", "There is selection of suppliers."],
                ["N2", "Supplier selection is performed partially and informally."],
                ["N3", "The company guidelines call for the selection of suppliers according to criteria of quality, reliability and long-term sustainability. This is implemented and is based on formal activities: analysis of supplier data, interviews with suppliers, track record analysis, audits, ISO certification, etc.)."],
                ["N4", "The company guidelines call for the  selection of suppliers according to criteria of quality, reliability and long-term sustainability. This is implemented and is based on formal activities: analysis of supplier data, interviews with suppliers, track record analysis, audits, ISO certification, etc.). There is a procedure for maintaining selection over time."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [29, new Map([
            ["id", "135"],
            ["question", "Are specific components and new technologies qualified before use? Is there a qualification procedure?"],
            ["recommandation", "Make sure there is a qualification procedure for specific components or new technologies. → This recommendation concerns specific components (e.g. ASICs or hybrids). Make sure there is a qualification procedure for evaluating the risks inherent in the use of specific components or new technologies."],
            ["weight", "7,2"],
            ["levels", new Map([
                ["N1", "There is no procedure."],
                ["N2", "There are informal rules."],
                ["N3", "There are informal rules."],
                ["N4", "There is a managed procedure that follows developments in technologies; it is validated by the competent technical services. There is proof of its application."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [30, new Map([
            ["id", "137"],
            ["question", "Is the method used for predictive reliability assessment recognized and validated by experience? Is the calculation tool qualified or validated?"],
            ["recommandation", "Use a proven methodology and a qualified or validated tool for predictive reliability calculations. → Make sure that the predictive reliability calculation follows a recognized methodology and uses a qualified or validated tool."],
            ["weight", "7,7"],
            ["levels", new Map([
                ["N1", "There is no identified methodology: no standard, guide or instruction was followed. The tool is neither recognized nor validated by evaluation."],
                ["N2", "There is an identified methodology, but it is neither recognized nor validated. The tool is recognized, but not validated by evaluation."],
                ["N3", "The methodology and the tool are recognized, but not validated by evaluation."],
                ["N4", "The methodology and the tool are recognized and are validated by evaluation."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [31, new Map([
            ["id", "147"],
            ["question", "Is the impact of the complexity of built-in tests on reliability evaluated?"],
            ["recommandation", "Take account of the balance between reliability and the complexity of built-in tests. → To achieve effective test coverage, there is a trade-off to be made between the complexity of built-in tests and the reliability of the components used for operational functions. In particular, the coverage rate should be weighed against the false alarm rate."],
            ["weight", "10,2"],
            ["levels", new Map([
                ["N1", "The influence of built-in tests on reliability is not evaluated."],
                ["N2", "The influence of built-in tests on reliability is taken into account informally."],
                ["N3", "There is a specified objective limiting the impact of built-in tests on reliability, but this objective is not verified."],
                ["N4", "There is a specified objective limiting the impact of built-in tests on reliability. This objective is verified and taken into account in the product design in order to optimize the design of built-in tests. The entire procedure is formalized."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [32, new Map([
            ["id", "150"],
            ["question", "Are the modelling techniques (electrical, thermal, mechanical, etc.) validated and recognized?"],
            ["recommandation", "Use validated and recognized modelling techniques. → Use validated and recognized modelling techniques (electrical, thermal and mechanical, etc… models). Demonstrate that tools are monitored and updated."],
            ["weight", "13,8"],
            ["levels", new Map([
                ["N1", "Modelling tools and techniques are neither validated nor recognized."],
                ["N2", "Modelling techniques are validated and recognized, but not monitored."],
                ["N3", "Modelling techniques are validated, recognized and monitored, but responsibility for monitoring the tools is not clearly identified in the organization."],
                ["N4", "Modelling tools and techniques are validated, recognized and monitored. Responsibility for monitoring the tools is clearly identified in the organization."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [33, new Map([
            ["id", "181"],
            ["question", "Is the product mission profile known and mastered?"],
            ["recommandation", "Know and control the mission profile. → The product mission profile is fully known and controlled: (1) The potential variations in the different environmental stresses are known ; (2) The impact of environmental stress variation is controlled and taken into account in dependability analyses (e.g. MTBF for safety analyses)."],
            ["weight", "13"],
            ["levels", new Map([
                ["N1", "The mission profile is not  mastered ; a “standard” mission profile is assumed."],
                ["N2", "The mission profile is not mastered. However, reliability calculations are performed using multiple mission profiles corresponding to typical use cases."],
                ["N3", "Sensitivity analyses are conducted to evaluate the impact of the different environmental stresses on product reliability. These analyses are taken into account to adjust reliability calculations to the circumstances (e.g. “average” mission profile for an ISS contract, or “worst case” mission profile for a safety analysis)."],
                ["N4", "Integrated sensors (HUMS) are implemented; these measure environmental stresses in real time and process them to gain better knowledge of the product’s conditions of operation. This data is taken into account to update reliability analyses and adjust them to the circumstances (e.g. “average” mission profile for an ISS contract, or “worst case” mission profile for a safety analysis)."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [34, new Map([
            ["id", "182"],
            ["question", "Are margins taken into account to ensure design robustness ?"],
            ["recommandation", "Implement an improvement process to improve product robustness. → It is important to conduct a process to improve the robustness of the product in development and in production, so as to limit its sensitivity to environmental stresses (disturbance, severe environments, overstress); this improvement process must be formalized in a document (e.g. a robustness improvement plan). Robustness is characterized by increased operational stress margins, generally measured by accelerated stress tests, a combination of traditional vibration and thermo-mechanical tests, or highly accelerated life testing (HALT). The operational stress margin must be estimated and, if necessary, improved through successive iterations (with additional tests to verify the improvement). This margin will be necessary in order to conduct accelerated ESS testing, beyond the maximum stress levels."],
            ["weight", "20"],
            ["levels", new Map([
                ["N1", "Design stress margins are not evaluated."],
                ["N2", "Design stress margins are evaluated and implemented, but do not follow any standard."],
                ["N3", "Design stress margins are evaluated and implemented, following an internal standard."],
                ["N4", "Design stress margins are evaluated and implemented, following a standard agreed and validated by the end-user/customer."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [35, new Map([
            ["id", "183"],
            ["question", "Are analyses (such as Design FMECA) conducted in order to identify and reduce risks? Are the recommendations that emerge from these analyses formalized? Are the recommendations that emerge from these analyses followed?"],
            ["recommandation", "Identify and reduce design risks. → A Design FMECA identifies and reduces risks, for example following design changes or when new technologies are brought in. Criticality analysis of the identified risks leads to formalized recommendations and/or corrective actions. Design FMECAs must be an iterative process: the efficacy of corrective actions must be measured."],
            ["weight", "15"],
            ["levels", new Map([
                ["N1", "There is no Design FMECA."],
                ["N2", "There is a Design FMECA, but the risk criticality analysis does not lead to formalized recommendations and/or corrective actions."],
                ["N3", "Design FMECA is conducted; the risk criticality analysis leads to formalized recommendations and/or corrective actions, but these are not systematically tracked over time."],
                ["N4", "The Design FMECA is realized; the risk criticality analysis leads to formalized recommendations and/or corrective actions, which are tracked over time."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [36, new Map([
            ["id", "184"],
            ["question", "Is the industrial strategy defined in a plan? Have the product industrialization requirements been detailed in an industrial specification?"],
            ["recommandation", "Prepare the product industrialization phase. → Preparations for product industrialization must begin during the design phase. The industrial strategy must be formalized in a plan; the product industrialization requirements must be detailed in an industrial specification and taken into account by designers."],
            ["weight", "16"],
            ["levels", new Map([
                ["N1", "Industrial activity is not taken into account in design: no plan, no specification."],
                ["N2", "Industrial activity is taken into account in design, without being formalized."],
                ["N3", "Industrial activity is taken into account and formalized in a plan. There is no specification (there are no requirements defined for designers)."],
                ["N4", "Industrial activity is taken into account and formalized by a plan. The requirements are formalized in a specification and are taken into account by designers."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [37, new Map([
            ["id", "185"],
            ["question", "Has the need for ESS been analysed? If applicable, has the ESS procedure been defined?"],
            ["recommandation", "Analyse the need for environmental stress screening (ESS) and define the ESS procedure. → The need for environmental stress screening must be analysed and, if applicable, an ESS procedure established. Several criteria can be considered: reliability test results (e.g. HALT, qualification trials); experience feedback on other products; customer requirements; efficiency targets (e.g. maximum scrap rate after first use, after one year); product quantity, etc. Experience feedback on the product itself (ESS results and field data) must be used to optimize the ESS procedure for the duration of the programme."],
            ["weight", "18"],
            ["levels", new Map([
                ["N1", "The need for ESS is not analysed."],
                ["N2", "An analysis is conducted to justify ESS and, if applicable, define an appropriate ESS procedure for the product, but this procedure is not covered by a validated document."],
                ["N3", "An analysis is conducted to justify ESS and, if applicable, define an appropriate ESS procedure for the product, and this procedure is covered by a validated and configuration-managed document."],
                ["N4", "An analysis is conducted to justify ESS and, if applicable, define an appropriate ESS procedure for the product; this procedure is covered by a validated document. Additionally, experience feedback on the product itself (ESS results and field data) is used to optimize the ESS procedure for the duration of the programme."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [38, new Map([
            ["id", "186"],
            ["question", "Has the coverage rate of the ESS test been estimated?"],
            ["recommandation", "Check that the environmental stress screening (ESS) test coverage is correctly defined and formalized. → If ESS is necessary, it is important to verify the testability of the product before, during and after applying stress. The ESS test coverage rate must be estimated. The built-in functional tests on the board, subassembly or system may be sufficient if their coverage rate is satisfactory. If so, the test coverage is formalized in the FMECA or the testability report."],
            ["weight", "11"],
            ["levels", new Map([
                ["N1", "The ESS testability of the product is not taken into account."],
                ["N2", "The ESS testability of the product is taken into account, but the ESS test coverage rate has not been estimated."],
                ["N3", "The ESS test coverage rate is estimated (e.g. by a FMECA)."],
                ["N4", "The ESS test coverage rate is estimated ((e.g. by a FMECA); experience feedback (ESS results and field data) is used to optimize the ESS test."],
                ["NA", "Not Applicable"],
            ])]
        ])],
    ])],
    ["Manufacturing of board - Subassembly", new Map([
        [0, new Map([
            ["id", "5"],
            ["question", "Is a test result summary produced in order to optimize the final test coverage?"],
            ["recommandation", "Optimize the final test coverage with regard to the product specification, with the aid of the test result summary. → The final product test, and in particular the level of coverage achieved by this test, must be analysed, and if necessary modified, even after the product has been specified and designed. A test result summary can optimize the effectiveness of this final test."],
            ["weight", "6,6"],
            ["levels", new Map([
                ["N1", "The predefined test coverage rate is not reviewed."],
                ["N2", "A product test summary can be compiled with the aim of reviewing and improving the predefined coverage rate. However, there is no document that formally describes any corresponding actions."],
                ["N3", "The final product tests are regularly reviewed, even after specification and design, with the aim of increasing the predefined test coverage. There are documents that describe the procedure to follow."],
                ["N4", "The final product tests are regularly reviewed, even after specification and design, with the aim of increasing the predefined test coverage. There are documents that describe the procedure to follow. These have been validated by an authority independent from the operating entity."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [1, new Map([
            ["id", "7"],
            ["question", "What process is used to collect data on technical events, to report anomalies, and to manage them?"],
            ["recommandation", "Implement corrective actions. → This recommendation deals with the implementation of corrective actions (the documentation aspect is dealt with in Recommendation 116). The following functions must be covered by a quality assurance procedure: (1) Processing customer complaints and product nonconformity reports ; (2) Searching for causes of nonconformity relating to the product, the process and the quality system, and recording the results of this search ; (3) Determining corrective and preventive actions required to eliminate causes of nonconformity ; (4) Applying resources to measure the efficacy of these corrective and preventive actions."],
            ["weight", "15,4"],
            ["levels", new Map([
                ["N1", "There are no corrective action procedures."],
                ["N2", "Corrective actions are implemented following a customer complaint or nonconformity report, but they are not formalized."],
                ["N3", "Corrective action procedures include at least: (1) Effective processing of customer complaints and product nonconformity reports ; (2) The search for causes of nonconformity relating to the product, the process and the quality system, and recording the results of this search ; (3) The determination of corrective actions required to eliminate causes of nonconformity. These procedures do not define the application of control measures to ensure that corrective actions are implemented and that they produce the desired effect."],
                ["N4", "Corrective action procedures include: (1) Effective processing of customer complaints and product nonconformity reports ; (2) The search for causes of nonconformity relating to the product, the process and the quality system, and recording the results of this search ; (3) The determination of corrective actions required to eliminate causes of nonconformity ; (4) The application of control measures to ensure that corrective actions are implemented and that they produce the desired effect."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [2, new Map([
            ["id", "8"],
            ["question", "Do the preventive action procedures include: (1) The use of diversified sources of information? ; (2) The definition of the steps to follow? ; (3) The criteria for triggering preventive actions and applying inspection procedures? ; (4) A preventive action follow-up review?"],
            ["recommandation", "Implement preventive actions. → Preventive action procedures include: (1) Using appropriate sources of information – such as processes and operations affecting product quality, waivers, audit results, quality records, maintenance reports and customer complaints – to detect, analyse and eliminate potential causes of nonconformity ; (2) The definition of appropriate steps to deal with any problem that requires preventive action ; (3) Triggering preventive actions and applying inspection procedures to make sure they produce the desired effect ; (4) Ensuring that relevant information on the actions implemented is submitted for management review."],
            ["weight", "15,6"],
            ["levels", new Map([
                ["N1", "No preventive action procedures are implemented."],
                ["N2", "Preventive action procedures exist but are incomplete."],
                ["N3", "Preventive action procedures exist and are almost complete with regard to the listed criteria (there may be minor nonconformities in the way criteria are applied or met)."],
                ["N4", "Preventive action procedures exist, are formalized, and are complete with regard to the listed criteria."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [3, new Map([
            ["id", "17"],
            ["question", "Is continuous environmental monitoring provided for sensitive manufacturing operations (cleanliness, temperature, humidity)?"],
            ["recommandation", "Provide continuous environmental monitoring (cleanliness, temperature, humidity) for sensitive manufacturing operations. → Several steps in the board and subassembly manufacturing process are sensitive to particle rate, temperature and relative humidity factors in the manufacturing environment. The following processes (non-exhaustive list) are particularly concerned: (1)  Soldering ; (2) Gluing ; (3) Underfill ; (4) Varnishing.These influence factors must be monitored and recorded continuously, or periodically, in order to ensure the reproducibility of product performance."],
            ["weight", "9,9"],
            ["levels", new Map([
                ["N1", "Some of the environment parameters of sensitive process steps are not monitored, or not sufficiently regularly."],
                ["N2", "The environment parameters of sensitive process steps are monitored continuously, but this monitoring is not covered by any formal specification, or there is no analysis / expert judgment / state of the art / material specifications of their criticality to the reliability of the board or subassembly."],
                ["N3", "The environment parameters of sensitive process steps are monitored continuously, and this monitoring is covered by a formal specification based on an analysis / expert judgment / state of the art / material specifications of their criticality to the reliability of the board or subassembly. However, the specification has not been validated by an independent authority."],
                ["N4", "The environment parameters of sensitive process steps are monitored continuously, and this monitoring is covered by a formal specification based on an analysis / expert judgment / state of the art / material specifications of its criticality to the reliability of the board or subassembly. The specification and the criticality analysis / expert judgment / state of the art / material specifications have been validated by an independent authority."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [4, new Map([
            ["id", "18"],
            ["question", "Is corrective maintenance performed following the occurrence of an anomaly in the production system or in the subassemblies produced?"],
            ["recommandation", "Perform corrective maintenance following the occurrence of an anomaly in the production system. → Applied to anomalies in production systems and subassemblies, corrective maintenance procedures involve: (1) Determining the root causes of the anomaly, by setting up a multidisciplinary team ; (2) Defining corrective actions, stipulating action owners and deadlines ; (3) Monitoring the implementation of corrective actions and their effectiveness ; (4) Updating the associated Process FMECA chapter and, where applicable, the Control Plan ; (5) Updating the machinery maintenance plan, if necessary. These actions are often standardized in a process called “8D”, overseen by the Quality department."],
            ["weight", "6,9"],
            ["levels", new Map([
                ["N1", "There is no corrective maintenance following the occurrence of an anomaly on a production machine or on a subassembly (non-systematic)."],
                ["N2", "Corrective actions are applied directly where the anomaly was observed, without a formalisation through dedicated procedure update."],
                ["N3", "Real maintenance procedures are implemented for corrective actions, following anomalies in production. They are covered by a formalized corrective maintenance procedure, but this is not validated by an authority independent from the operating entity."],
                ["N4", "Real maintenance procedures are implemented for corrective actions, following anomalies in production. They are covered by a formalized corrective maintenance procedure, validated by an authority independent from the operating entity. This procedure describes the following steps: anomaly identification, root cause analysis, correction and preventive action, checking the effectiveness of corrective measures, and (where applicable) internal auditing."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [5, new Map([
            ["id", "19"],
            ["question", "Is there effective control over the working times of transformable materials?"],
            ["recommandation", "Control working time limits on transformable (limited lifetime) materials. → Several materials have a limited working time after withdrawal from stores, or after preparation (glue, solder paste, varnish, etc.). It is essential that these materials be withdrawn from production before this time limit is exceeded, and replaced with conforming batches. These working time durations are based on manufacturer recommendations, and can be reduced on the basis of experience in production. This control is performed by reading the expiry date on a dedicated label, and/or by the system alerting the operator, or even stopping the machine."],
            ["weight", "4"],
            ["levels", new Map([
                ["N1", "The working times of transformable materials are not under clear control."],
                ["N2", "The working times of transformable materials are controlled, but they are not described in any clear chapter or document."],
                ["N3", "The working times of transformable materials are controlled. There are instruction documents and/or chapters that clearly define the procedure to follow for each material concerned. The expiry dates for each batch are indicated on dedicated labels, but there is no automatic alert to tell the operator to change batches."],
                ["N4", "The working times of transformable materials are controlled. There are instruction documents and/or chapters that clearly define the procedure to follow for each material concerned. The expiry dates for each batch are indicated on dedicated labels. Furthermore, these dates are input into the system in order to alert the operator before changing the batch."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [6, new Map([
            ["id", "21"],
            ["question", "Are embedded software programming devices checked periodically to ensure that software is correctly loaded?"],
            ["recommandation", "Perform periodic checks on embedded software programming devices. → This check, performed by the user of the programming device (examples: JTAG probe, programming boards, etc.), is designed to ensure that the right software is loaded or that the configuration is correct. The frequency of checks must be specified, based on a risk analysis."],
            ["weight", "4,1"],
            ["levels", new Map([
                ["N1", "There is no periodic check on programming devices used to load software."],
                ["N2", "A number of checks are performed on programming devices. These checks are brief and do not necessarily take account of all software loading rules. There is no clear formal definition of the procedure or the limits of these checks."],
                ["N3", "A schedule of checks on programming devices has been designed; this schedule is adhered to, and all of the points verified (and the procedure to follow) are covered by a written document."],
                ["N4", "A strict schedule of checks on programming devices has been designed; this schedule is adhered to, and all of the points verified (and the procedure to follow) are covered by a written document. This document has been produced with reference to the entire loading software process and validated by an authority independent from the operating entity."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [7, new Map([
            ["id", "23"],
            ["question", "Is the production and handling of components, boards and subassemblies automated (partially or totally)?"],
            ["recommandation", "Automate handling in order to limit potential damage to components, boards and subassemblies. → Efforts must be made to keep the handling of components, boards and subassemblies to a minimum during the production phase in order to limit the risk of mechanical shock, contamination, and other overstresses. Additionally, the automation of handling operations between activities throughout the production process eliminates a large number of failures caused by human intervention. This recommendation also applies to very small production series. Beyond using robots, this risk can be addressed by using stores, trolleys, vacuum lifters, etc..."],
            ["weight", "6,5"],
            ["levels", new Map([
                ["N1", "None of the handling of components, boards and subassemblies is automated / secured by other means."],
                ["N2", "Some component, board and subassembly handling operations have been automated / secured by other means."],
                ["N3", "Component, board and subassembly handling operations are maximally automated / secured by other means. The level of automation has been established by a feasibility and benefit analysis. The whole procedure is formalized, but the study has not been validated by an authority independent from the operating entity."],
                ["N4", "Component, board and subassembly handling operations are maximally automated / secured by other means. The level of automation has been established by a feasibility and benefit analysis. The whole procedure is formalized, following a study validated by an authority independent from Production."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [8, new Map([
            ["id", "25"],
            ["question", "Is the data loaded in programmable production systems managed?"],
            ["recommandation", "Control and maintain (through updates) the data loaded in programmable production systems. → For task automation and for reliable execution of activities, it is essential to specifically monitor and maintain (i.e. update) the references (coordinates, batch numbers, etc.) loaded in programmable production tools."],
            ["weight", "2,8"],
            ["levels", new Map([
                ["N1", "There are no controls on the maintenance of programming data in programmable production systems."],
                ["N2", "The parameters loaded in programmable production systems are controlled or maintained, but there is no formal definition of actions to be carried out to guarantee this maintenance."],
                ["N3", "The data programmed into the production systems is controlled and maintained in accordance with an identified formal definition (document, inspection procedure, update procedure)."],
                ["N4", "The data programmed into the production systems is controlled and maintained in accordance with an identified formal definition (document, inspection procedure, update procedure). All the documents have been validated by an authority independent from the operating entity."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [9, new Map([
            ["id", "33"],
            ["question", "Is quality control performed by someone other than the operator, during the main manufacturing steps?"],
            ["recommandation", "Delegate the final inspection of key operations in order to optimize screening before moving on to the next step in the process. → Cross-inspection screens out nonconformities before passing the subassembly on to the next step in the production process. It can be performed by a quality inspector or by a technician trained for the task. This inspection particularly concerns the component soldering, board varnishing, gluing, marking and electrical testing processes. These inspection measures generally involve updating the tracking sheet in order to track all operations, in accordance with the control plan."],
            ["weight", "10"],
            ["levels", new Map([
                ["N1", "For some key processes, no quality control is performed by a person other than the operator."],
                ["N2", "Quality control of key processes is performed by a person other than the operator, but this inspection is not based on any formal document describing the procedure."],
                ["N3", "Quality control of key processes is performed by a person other than the operator. This inspection follows a formal procedure, but the corresponding document has not been validated by an independent authority."],
                ["N4", "Quality control of key processes is performed by a person other than the operator. This inspection follows a formal procedure set out in a document validated by an independent authority. These cross-inspections are recorded in the batch tracking sheet."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [10, new Map([
            ["id", "37"],
            ["question", "Are sensitive manufacturing processes entrusted to trained and experienced personnel?"],
            ["recommandation", "Make sure that operators and technicians in charge of sensitive operations are trained and sufficiently experienced. → Certain steps in the manufacturing process require a particular level of training and experience. Certain types of stress can impact equipment reliability in a way that cannot be detected by quality controls or final testing. This is the case with the polymerization or drying steps, for example, where the maximum temperature and duration must be kept under control Or with the soldering of components on the board (screen-printing in particular). Or with the X-ray inspection of boards Or with quality inspection (acceptance criteria). Or with electrical testing, where special care is needed  to apply ESD protections, etc... This requirement must be covered by a training and certification plan. Records will be kept of these training courses."],
            ["weight", "12"],
            ["levels", new Map([
                ["N1", "There is no evidence of training for employees in charge of sensitive operations that can impact equipment reliability."],
                ["N2", "Operators performing sensitive operations are experienced or trained, but there is no evidence."],
                ["N3", "Operators performing sensitive operations  have followed specific training for these processes. The training in question is not independently validated and tracked."],
                ["N4", "Operators performing sensitive operations  have followed specific training for these processes. The training in question has been independently validated and is tracked."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [11, new Map([
            ["id", "42"],
            ["question", "Are periodic temperature checks or readings taken for soldering operations?"],
            ["recommandation", "Take periodic temperature readings for each soldering operation to make sure it is not damaging the component or subassembly. → The temperature (e.g. for soldering irons) or temperature profile (e.g. for reflow ovens) must be regularly monitored, and the results must fall within certain temperature and duration limits (as per the specifications). The periodicity of monitoring is determined by experience and specified in the process control instruction."],
            ["weight", "6,9"],
            ["levels", new Map([
                ["N1", "Temperature checks are not performed regularly for soldering operations."],
                ["N2", "Temperature checks are performed regularly for soldering operations. The readings do not follow any specific formal procedure."],
                ["N3", "Temperature checks are performed regularly for soldering operations, in line with a formal procedure pre-defined in documents that specify the protocol, frequency, etc., but which have not been validated by an authority independent from the operating entity."],
                ["N4", "Temperature checks are performed regularly for soldering operations, in line with a formal procedure pre-defined in documents that specify the protocol, frequency, etc., and which have been validated by an authority independent from the operating entity."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [12, new Map([
            ["id", "43"],
            ["question", "How is it ensured that the production systems are fully compatible with the items to be produced?"],
            ["recommandation", "Ensure compatibility between the production systems and the subassemblies produced. → The description of the actions to be performed when using a production tool on a subassembly must be sufficiently explicit to rule out any interpretation by the operator that might result in the accidental use of unsuitable tools. Identification via barcodes on machines and tracking sheets is an effective error-proofing mechanism."],
            ["weight", "7,2"],
            ["levels", new Map([
                ["N1", "Compatibility between production machine and product is not verified before use on a subassembly."],
                ["N2", "Compatibility between production machine and product is verified before use on a subassembly but it is not formally identified in a document."],
                ["N3", "Compatibility between production machine and product is verified before use on a subassembly. This operation is formally identified in a document. However, this document has not been validated by an authority independent from the operating entity, or there is no double-check on compatibility."],
                ["N4", "Compatibility between production machine and product is verified before use on a subassembly. All the parameters that need to be checked are formalized in a document validated by an authority independent from the operating entity. Additionally, compatibility is double-checked, generally using a barcode system."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [13, new Map([
            ["id", "46"],
            ["question", "Are the anomalies encountered recorded so as to enable corrective and / or preventive actions?"],
            ["recommandation", "Record any anomalies liable to lead to the application of corrective and/or preventive actions. → Any problem or dysfunction in production, regardless of its nature, must be identified and recorded in an “anomaly report”. Anomaly reports follow a set format: all the information to be recorded, and the way of recording it, is predetermined. The anomaly report is the element that triggers the implementation of preventive and/or corrective maintenance actions. Tracking anomaly reports provides traceability on the different steps taken to manage nonconformities. The potential sources of anomaly are the process, the production systems (test benches, test instruments, etc.) but also the products themselves: product failures must also be recorded in anomaly reports."],
            ["weight", "7,6"],
            ["levels", new Map([
                ["N1", "There is no recording or traceability of problems encountered during production."],
                ["N2", "The anomalies identified are recorded in order to undertake corrective actions, but nothing is formalized."],
                ["N3", "Every production problem, regardless of its nature, is identified and recorded in a document provided for this purpose, which can then be used for preventive and corrective maintenance. However, this method of leveraging information has not been validated."],
                ["N4", "Every production problem, regardless of its nature, is identified and recorded in a document provided for this purpose, following a set format. The whole procedure, and particularly the way in which information is recorded for reuse during preventive and corrective maintenance, has been validated by an authority independent from the operating entity."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [14, new Map([
            ["id", "60"],
            ["question", "How are priorities managed with regard to process deadlines?"],
            ["recommandation", "Manage priorities that need to be met within process deadlines (planning). → The various subassemblies are made and integrated on the basis of planned tasks that may involve simultaneous activities. Priorities have to be managed, so that only a minimum number of subassemblies need to be kept in stock (any delay in the production flow entails additional handling and storage of subassemblies) and so that the potential impacts on component reliability can also be kept to a minimum."],
            ["weight", "3,1"],
            ["levels", new Map([
                ["N1", "There is no ranking of priorities in production."],
                ["N2", "Depending on the production schedule, some priority is given to subassemblies in order to minimize handling and storage. These priorities are not described in formal documents."],
                ["N3", "A fully-fledged priority management system is in place, based on process deadlines. This planning activity relies on formal documents, but these have not been validated by an authority independent from the operating entity."],
                ["N4", "A fully-fledged priority management system is in place, based on process deadlines. This planning activity relies on formal documents, which have been validated by an authority independent from the operating entity."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [15, new Map([
            ["id", "61"],
            ["question", "Have measures been identified and implemented to protect subassemblies during certain production activities?"],
            ["recommandation", "Identify and implement measures to protect subassemblies. → External stresses must be identified and protective measures implemented to avoid impacting the reliability of subassemblies: (1) Mechanical protection ; (2) Thermal protection ; (3) Protection from contaminants."],
            ["weight", "7,3"],
            ["levels", new Map([
                ["N1", "No particular measures to protect subassemblies are identified."],
                ["N2", "Measures to protect subassemblies are identified, but only partially applied in the various activities."],
                ["N3", "Measures to protect subassemblies are specified, and their application is verified. However, this specification is not updated on the basis of past data."],
                ["N4", "Measures to protect subassemblies are specified and their application is verified. This specification is based on past data from previous products, and on periodic analysis of observed anomalies."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [16, new Map([
            ["id", "75"],
            ["question", "How is the workplace environment controlled (cleanliness, temperature and humidity)?"],
            ["recommandation", "Control the workplace environment. → The workplace environment is important for the quality of the product: appropriate limits must be specified for the ambient temperature and humidity. The level of cleanliness must be controlled. The layout of the workshop and the ergonomics of the workstation must be optimized."],
            ["weight", "13"],
            ["levels", new Map([
                ["N1", "The workshop layout and the workplace environment are not fully suited to the product or the environment is not controlled."],
                ["N2", "The workstations are adapted to the specific needs of the product. The work environment is controlled (cleanliness/temperature/humidity)."],
                ["N3", "The workstations are adapted to the specific needs of the product. The work environment is controlled and periodically verified (cleanliness/temperature/humidity)."],
                ["N4", "The workstations are adapted to the specific needs of the product. The work environment is controlled and monitored (cleanliness/temperature/humidity). The workshop layout is optimized with the aim of improving product quality."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [17, new Map([
            ["id", "77"],
            ["question", "How are changes to manufacturing processes managed? Which changes are notified to the customer? Is there a requalification plan according to the nature of the change?"],
            ["recommandation", "Manage changes to manufacturing processes. → There must be a clear list of people authorized to approve process changes. Changes that require customer acceptance before being applied must be identified in a document. Any change relating to the processes, production equipment, tools or programs must be documented and must trigger a procedure to control its application. Ensure that the results of process changes produce the desired effect, and that the changes have not impacted the quality of the product. The actions and tests required to qualify a new process, material or tool must be specified in a document."],
            ["weight", "13,9"],
            ["levels", new Map([
                ["N1", "Process changes are implemented without being recorded; these modifications are not submitted for authorization."],
                ["N2", "Process changes are recorded and submitted for authorization. These changes are not documented, and they do not trigger a procedure to control their implementation."],
                ["N3", "Process changes are recorded; the people authorized to approve changes to production processes, including quality/reliability managers, are clearly designated. Changes that require customer acceptance before being applied are identified. Any change relating to the processes, production equipment, tools or programs is documented and follows a procedure to control its implementation. However, there is no systematic check to ensure that the results of process changes produce the desired effect and that the changes have not impacted the quality of the product (qualification)."],
                ["N4", "Process changes are recorded; the people authorized to approve changes to production processes, including quality/reliability managers, are clearly designated. Changes that require customer acceptance before being applied are identified. Any change relating to the processes, production equipment, tools or programs is documented and follows a procedure to control its implementation. Changes to processes, materials or production machinery give rise to requalification in accordance with a written procedure approved by Quality."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [18, new Map([
            ["id", "79"],
            ["question", "How are production machines, tools and programmable devices inspected before use?"],
            ["recommandation", "Inspect production machines, tools and programmable devices before use. → To avoid damaging the equipment, it is important to check, before use, that the production machines (test benches, ovens, vibrators, etc.), tools (torque screwdrivers, etc.) and programmable devices (numerical control machines, software programming devices used on test benches, etc.) are suited to the product, and that the parameters conform to the specifications. This prior inspection activity must be described in written procedures."],
            ["weight", "12"],
            ["levels", new Map([
                ["N1", "Production machines, tools and programmable devices are not inspected and validated before use."],
                ["N2", "Production machines, tools and programmable devices are inspected before use, but not all these inspections are formalized."],
                ["N3", "Production machines, tools and programmable devices are inspected before use. These inspections are covered by written procedures."],
                ["N4", "Production machines, tools and programmable devices are inspected before use. These inspections are covered by written procedures. The results of these inspections are recorded."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [19, new Map([
            ["id", "84"],
            ["question", "Are solder baths periodically checked for contamination? Using which procedure?"],
            ["recommandation", "Periodically check for bath contamination during wave soldering operations. → Solder baths, for wave soldering operations, must be checked regularly for contamination in order to avoid degrading the final solder quality. The contamination level and the checking frequency must be specified. The record of results must be taken into account when adjusting the periodicity of these checks."],
            ["weight", "5,8"],
            ["applicability", "It could not be applicable if soldering by wave is not applied."],
            ["levels", new Map([
                ["N1", "The solder bath contamination level is not measured."],
                ["N2", "Solder bath contamination levels are measured, but measurements are sporadic and are not formalized."],
                ["N3", "Solder bath contamination levels are measured. Measurements are taken in accordance with a protocol and periodicity identified and described in a document, but this document has not been validated by an authority independent from the operating entity."],
                ["N4", "Solder bath contamination levels are measured. Measurements are taken in accordance with a protocol and periodicity identified and described in a document that has been validated by an authority independent from the operating entity."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [20, new Map([
            ["id", "88"],
            ["question", "Is there a self-inspection by the operator at the end of each production process? Is it instruction-based? Is the inspection result recorded?"],
            ["recommandation", "Implement self-inspection by the operator at the end of each production process. → Self-inspection by the operator, at the end of each process step, helps to filter out human errors that might jeopardize the reliability of the subassembly. The self-inspection procedure, usually based on a visual inspection of parts in production, is described in the operation instructions and in the Control Plan. The result of this inspection is recorded for batch traceability."],
            ["weight", "5,3"],
            ["levels", new Map([
                ["N1", "There is no systematic self-inspection by the operator at the end of each production process."],
                ["N2", "Self-inspection is performed by the operator at the end of each production process. However, it is not described in any formal document."],
                ["N3", "Self-inspection is performed by the operator at the end of each production process. This is done in accordance with a predefined protocol formalized in a document. However, this document has not been validated by an independent authority."],
                ["N4", "Self-inspection is performed by the operator at the end of each production process. This is done in accordance with a predefined protocol formalized in a document. This document has been validated by an independent authority. The inspection result is recorded."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [21, new Map([
            ["id", "89"],
            ["question", "Inspect solder paste deposition after screen-printing. → Before mounting components, it is important to inspect the quality of screen-printing depositions, to minimize subsequent repairs and to supplement post-reflow inspections. Solder paste inspection (SPI) (of thickness/volume, quantity, etc.) must be specified, and the measurements recorded."],
            ["recommandation", "Is the quality of solder paste deposition inspected systematically after screen-printing?"],
            ["weight", "6"],
            ["levels", new Map([
                ["N1", "Solder paste deposition is not systematically inspected."],
                ["N2", "The thickness of the solder paste deposition is measured regularly, but this inspection is not based on a clearly identified document."],
                ["N3", "The thickness of the solder paste deposition is measured regularly. This inspection is based on a clearly identified document. However, this document does not refer to the IPC-A-610 standard, or there is no independent validation of the document."],
                ["N4", "The thickness of the solder paste deposition is measured regularly. This inspection is based on a clearly identified document. The IPC-A-610 standard is cited as a reference in this document. Additionally, the document has been validated by an authority independent from the operating entity."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [22, new Map([
            ["id", "90"],
            ["question", "Are periodic inventories carried out on component and material stocks?"],
            ["recommandation", "Implement periodic inventories of component and material stocks. → Setting up periodic store inventories is useful for checking the accuracy of the recorded data: names or identifiers, batch quantities, geographic locations, expiry dates."],
            ["weight", "5,5"],
            ["levels", new Map([
                ["N1", "No periodic stock inventories are carried out."],
                ["N2", "A number of inventories are carried out, but there is no formal plan for the frequency of these inventories."],
                ["N3", "Periodic inventories are carried out. If an inventory date is missed, a reminder is systematically issued until a new inventory has been validated. The actions to be performed, and the different tracking forms to be updated, are defined in formal documents. However, these documents have not been independently validated."],
                ["N4", "Periodic inventories are carried out. If an inventory date is missed, a reminder is systematically issued until a new inventory has been validated. The actions to be performed, and the different tracking forms to be updated, are defined in formal documents. These documents have been validated by an authority independent from the operating entity."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [23, new Map([
            ["id", "91"],
            ["question", "Are specific ESD protections put in place for components and subassemblies during handling and storage?"],
            ["recommandation", "Implement ESD protections for components and subassemblies during handling and storage. → ESD protections for components and subassemblies include: (1) The grounding (earthing) of machines, tables, shelving, chairs and trolleys ; (2) The incoming inspection of conductive shoes and wristbands for the operators concerned ;  (3) The connection of anti-ESD wristbands for operators ; (4) The use of ionizers, if necessary ; (5) The use of antistatic bags for board storage."],
            ["weight", "26"],
            ["levels", new Map([
                ["N1", "Protection against ESD is not addressed."],
                ["N2", "Protection against ESD is handled by non-formalized rules and practices."],
                ["N3", "Protection against ESD is handled by validated procedures/instructions that define practices known to protect subassemblies. However, there is no external verification of the application of these rules (dedicated quality audits)."],
                ["N4", "Protection of components and subassemblies against ESD is handled by validated procedures/instructions, which are monitored through dedicated internal audits."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [24, new Map([
            ["id", "92"],
            ["question", "Are periodic checks performed on production system inspection tools? Are the measurements checked for reproducibility?"],
            ["recommandation", "Perform periodic checks on production system inspection tools. → A number of production system parameters (temperature, dimensions, time, etc.) need to be controlled. Inspection tools (probes, sensors, detectors, micrometres, confocal microscopes, etc.) must be calibrated periodically in accordance with a set procedure, and, for certain critical tools, measurement repeatability and reproducibility tests are required, incorporating the operator factor."],
            ["weight", "4,9"],
            ["levels", new Map([
                ["N1", "There is no periodic verification of production system inspection tools."],
                ["N2", "Tools and instruments used to inspect production systems are verified occasionally, but without following a formal verification plan."],
                ["N3", "Tools and instruments used to inspect production systems are periodically calibrated. There is evidence of these calibrations (records, labels). The calibration procedure is formalized in documents. However, the reproducibility and repeatability of critical measurements are not verified."],
                ["N4", "Tools and instruments used to inspect production systems are periodically verified. The calibration procedure is formalized in documents, which have been validated by an authority independent from the operating entity. The reproducibility and repeatability of critical measurements are verified periodically."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [25, new Map([
            ["id", "93"],
            ["question", "Are suitable protections applied to avoid damaging subassemblies during cleaning?"],
            ["recommandation", "Implement suitable protections to avoid damaging subassemblies during cleaning. → Suitable protections must be put in place to avoid damage to subassemblies during board cleaning operations. As the purpose of these protections is to isolate part of the subassembly, their effectiveness after completion of this activity must be verifiable (by inspection and measurement)."],
            ["weight", "6"],
            ["levels", new Map([
                ["N1", "No specific protections are used while cleaning subassemblies."],
                ["N2", "A number of protections are put in place during subassembly cleaning. These may be specific to certain subassemblies, but they are not covered by formal documents."],
                ["N3", "A number of protections are put in place during subassembly cleaning. The effectiveness of the protections is verified during subsequent inspections. The protections for each type of subassembly, and the correct procedures to follow, are identified and formalized in one or more documents. However, these documents are not validated by an independent authority."],
                ["N4", "A number of protections are put in place during subassembly cleaning. The effectiveness of the protections is verified during subsequent inspections. The protections for each type of subassembly, and the correct procedures to follow,vare identified and formalized in one or more documents, which have been validated by an authority independent from the operating entity."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [26, new Map([
            ["id", "94"],
            ["question", "Is there a testing tool self-test to detect any anomalies before use on the subassembly?"],
            ["recommandation", "Implement testing tool self-tests to detect any anomalies. → Implement testing tool self-tests (built-in tests performed by the test equipment itself) to detect any anomalies. Reference units of known validity can be used for this self-test. The self-test is generally run during tester setup (with verifications during changes of operator or product, etc.) No test can be done if the self-test is not conclusive, unless there is a tracked waiver for the subassembly under test (i.e. authorization to conduct the test, but using markings and a signed tracking sheet that must constantly accompany the subassembly thereafter)."],
            ["weight", "5,1"],
            ["levels", new Map([
                ["N1", "No self-test is implemented on testing tools."],
                ["N2", "A self-test is implemented on testing tools. It runs automatically, but there is no formal document or study to determine its effectiveness and limitations."],
                ["N3", "A self-test is implemented on testing tools. This self-test is described in documents that are used to determine the procedure and the degree of effectiveness. But these documents have not been validated by an authority independent from the operating entity."],
                ["N4", "A self-test is implemented on testing tools. This self-test is described in documents that are used to determine the procedure and the degree of effectiveness. These documents have been validated by an authority independent from the operating entity."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [27, new Map([
            ["id", "96"],
            ["question", "Is the conformity of materials and items in stock identified?"],
            ["recommandation", "Manage the conformity of items and materials in stock. → The conformity of items and materials placed in stock, and available for production, must be clearly identified: (1) Stocks of nonconforming products must be placed in distinct areas, if possible inaccessible to production ; (2) Wrappings on items placed in production stock are usually marked (quality stamp or label). (3) The stock database records acceptance by the incoming quality control department, along with data on quantity, location, expiry dates, etc..."],
            ["weight", "6"],
            ["levels", new Map([
                ["N1", "There is no clear identification of the conformity of items and materials held in stock."],
                ["N2", "The conformity of items and materials held in stock is identified, but this is not formalized in writing."],
                ["N3", "The conformity of items and materials held in stock is clearly identified, in accordance with a written procedure. Nonconforming products are placed in dedicated areas. However, there is no stock database identifying conforming batches and their location."],
                ["N4", "The conformity of items and materials held in stock is clearly identified, in accordance with a written procedure. Nonconforming products are placed in dedicated areas. Conforming batches, and their location, are identified in a stock database."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [28, new Map([
            ["id", "97"],
            ["question", "Is the production process managed by SPC (Statistical Process Control)? Have the critical characteristics identified by SPC been analysed? Do they feature clearly on the Control Plan? Are the upper and lower control limits updated?"],
            ["recommandation", "Use Statistical Process Control (SPC) to manage the critical characteristics of the production process. → Statistical Process Control (SPC) charts can be used to monitor variability in critical processes with regard to the specification limits, and to take corrective or preventive action on the machine parameters. The process performance of SPC is measured by comparing the interval between the mean and a specified limit with the standard deviation of the measurement (3 Sigma). This process performance ratio (denoted Cpk) is used to calculate a quality target (lower limit). The SPC characteristics feature in the Process Control Plan, and are based on a failure mode effects and criticality analysis (FMECA). The control limits (upper and lower) are generally updated as a function of the measurement history."],
            ["weight", "4,5"],
            ["applicability", "For small production, it could be not applicable."],
            ["levels", new Map([
                ["N1", "The production process is not controlled by statistical methods (SPC)."],
                ["N2", "There are statistical analyses of the critical production process characteristics, but these are not formally described in a document."],
                ["N3", "There are statistical analyses of the critical production process characteristics. This statistical control is formalized in documents, and control limits have been established. The result of the analyses is monitored by Quality, and corrective actions are initiated when the limits are exceeded. However, there is no evidence of a link between the FMECA study and the SPC characteristics, or there is no evidence that the reproducibility and repeatability of the measurements of these characteristics are regularly monitored."],
                ["N4", "There are statistical analyses of the critical production process characteristics. This statistical control is formalized in documents, and control limits have been established. The result of the analyses is monitored by Quality, and corrective actions are initiated when the limits are exceeded. The SPC characteristics are based on a FMECA conducted by a multidisciplinary team. The repeatability and reproducibility of the SPC tests are verified periodically."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [29, new Map([
            ["id", "98"],
            ["question", "Are detailed instructions available for each production process? Are these instructions available online? Are help documents permanently visible to the operator?"],
            ["recommandation", "Provide detailed instructions for each production process. → Reliability depends on the reproducibility of production operations (screen-printing, component mounting, reflow, cleaning, repair, masking, varnishing, etc.). Each of these operations must be clearly described in an instruction that defines the actions to be performed by the operator step-by-step. These instructions must be easily accessible on the production line, and should even, where appropriate, be printed on help documents permanently visible to the operator. These instructions must be constantly updated on the basis of internal or external quality audits."],
            ["weight", "12"],
            ["levels", new Map([
                ["N1", "There are no instructions describing the actions to be performed by each operator."],
                ["N2", "There is an instruction for each production operation, but its update procedure is not quality controlled, or it has not been validated by an independent authority, or is not easily accessible to the operator."],
                ["N3", "There is an instruction for each production operation. It is easily accessible to the operator and has been validated by an independent authority, but its update procedure is not quality controlled (internal audits)."],
                ["N4", "There is an instruction for each production operation. It is easily accessible to the operator and has been validated by an independent authority. Its update procedure is quality controlled (internal audits) and only the latest version is available."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [30, new Map([
            ["id", "99"],
            ["question", "Is there a procedure for identifying expired items/consumables and withdrawing them from stock (or reforming them)?"],
            ["recommandation", "Implement a procedure to prevent items/consumables that are expired or due to be scrapped being used in production. → The use of expired consumables must be rendered impossible. The method of prevention is based on labelling, to identify the expiry date of the material, or on recording the date in the system, or on both. It is the responsibility of the storekeeper to check the date, and there must be a mandatory instruction to this effect. Preferably, the system will alert the storekeeper to withdraw the material/item before the date is exceeded, and will block the use of the batch. For the particular case of components that need to be reconditioned or reformed after a given storage time (e.g. electrolytic capacitors), there must be a corresponding procedure, and this action must be tracked in the stock database."],
            ["weight", "6,4"],
            ["levels", new Map([
                ["N1", "There is no procedure describing how to manage consumables that are out of date, or need to be reconditioned or reformed."],
                ["N2", "There is a procedure describing how to manage consumables that are out of date, or need to be reconditioned or reformed, but the labelling or signalling of expiry dates is either non-existent or very sporadic."],
                ["N3", "The expiry dates of consumables, and, where applicable, the reconditioning or reforming date, are correctly managed and identified by labelling, and/or via the system. The usage instructions clearly describe how to manage these dates, but these documents have not been validated by an authority independent from the operating entity."],
                ["N4", "The expiry dates of consumables, and, where applicable, the reconditioning or reforming dates, are correctly managed and identified, both by labelling and via the system. The usage instructions clearly describe how to manage these dates, and these documents are validated by an authority independent from the operating entity."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [31, new Map([
            ["id", "100"],
            ["question", "Are test monitoring indicators processed in real time in order to avoid damage to the subassembly if an anomaly occurs?"],
            ["recommandation", "Implement real-time processing of test monitoring indicators. → The use of test monitoring indicators makes it possible to intervene as soon as an anomaly occurs: (1) An alarm is initiated on detection of an anomaly ; (2) The current activity is suspended if the anomaly is considered serious (to avoid stress to the subassembly) ; (3) The anomaly is addressed and corrected before restarting or resuming the activity ; (4) If possible (if volumes are sufficient), a minimum test rate is defined, below which the result is considered abnormal."],
            ["weight", "4,7"],
            ["levels", new Map([
                ["N1", "There are no test monitoring indicators."],
                ["N2", "There are a number of indicators used to identify any anomaly occurring during the test. However, indicators are not part of a formal plan and/or they are not processed until later."],
                ["N3", "There are a number of indicators used to identify any anomaly occurring during the test, and the processing of these indicators makes it possible to intervene as soon as an anomaly occurs. There are documents that formally describe how these indicators, and the resulting actions, are managed. However, the relevant data has not been validated by an authority independent from the operating entity."],
                ["N4", "There are a number of indicators used to identify any anomaly occurring during the test, and the processing of these indicators makes it possible to intervene as soon as an anomaly occurs. There are documents that formally describe how these indicators, and the resulting actions, are managed. Additionally, these documents have been validated by an authority independent from the operating entity."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [33, new Map([
            ["id", "112"],
            ["question", "Is the temperature of the drying and polymerization ovens continuously monitored, using external probes?"],
            ["recommandation", "Continuously monitor the temperature of the drying and polymerization ovens. → It is important that the equipment and materials are not subject to unnecessary thermal stress during the drying and polymerization operations. The temperature of the ovens must be kept under control. This control must be exercised by continuously measuring the temperature, or by frequent periodic checks, but also by verifying the set points or program at the start of the operation. All such checks and measurements must be recorded by the operator and tracked for each production batch. Corrective actions (program shutdown, decisions about the production batch) must be clearly defined in an instruction."],
            ["weight", "12,7"],
            ["levels", new Map([
                ["N1", "The temperature of the ovens is not monitored continuously or even frequently, nor is it recorded."],
                ["N2", "The temperature of the ovens is monitored frequently or continuously, and the results are recorded, but this monitoring task is not covered by a document describing the actions to be performed."],
                ["N3", "The temperature of the ovens is monitored frequently or continuously; the results are recorded, and there are limits that trigger corrective action. This monitoring task is covered by a document describing the actions to be performed. However, this document has not been validated by an authority independent from the operating entity."],
                ["N4", "The temperature of the ovens is monitored frequently or continuously; the results are recorded, and there are limits that trigger corrective action. The result is recorded for each batch. This monitoring task is covered by a document describing the actions to be performed. This document has been validated by an authority independent from the operating entity."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [34, new Map([
            ["id", "116"],
            ["question", "What information is described in the nonconformity reports?"],
            ["recommandation", "Control the quality of data in nonconformity reports. → Nonconformity reports must specify: (1) The product identification ; (2) The description of the nonconformity ; (3) The cause of the nonconformity ; (4) The actions taken to avoid recurrence of the nonconformity ; (5) The rework or repairs, if necessary ; (6) The inspection of the characteristics affected by the rework or repairs ; (7) The final decision. "],
            ["weight", "5,7"],
            ["levels", new Map([
                ["N1", "There are no specific nonconformity documents."],
                ["N2", "The nonconformity documents serve only to identify nonconforming products."],
                ["N3", "The nonconformity documents specify the product identification, the description of the nonconformity, and the cause of the nonconformity. However, no formal actions are defined to avoid recurrence of the nonconformity, specify any rework or repairs required, and inspect the characteristics affected by the rework or repairs."],
                ["N4", "The nonconformity documents specify the product identification, the description of the nonconformity, and the cause of the nonconformity. Formal actions are defined to avoid recurrence of the nonconformity, specify any rework or repairs required, and inspect the characteristics affected by the rework or repairs."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [35, new Map([
            ["id", "120"],
            ["question", "Is there an inspection step (even if only visual) to verify correct deposition of the solder mask before varnishing?"],
            ["recommandation", "Verify solder mask deposition before varnishing. → The quality of solder mask applied before varnishing is important for avoiding potential reliability issues with connectors or heat sinks in operation. The inspection of this operation must feature on the Control Plan of the manufacturing process."],
            ["weight", "13"],
            ["levels", new Map([
                ["N1", "No particular visual inspection is carried out when placing solder mask before varnishing."],
                ["N2", "A specific solder mask inspection is carried out before varnishing, but there is no document that describes the procedure to follow for this inspection."],
                ["N3", "A specific solder mask inspection is carried out before varnishing. This dedicated inspection is covered by a formal instruction chapter. However, this document has not been validated by an independent authority, or does not feature in the Control Plan."],
                ["N4", "A specific solder mask inspection is carried out before varnishing. This dedicated inspection is covered by a formal instruction chapter. This document is validated by an independent authority, and features in the Control Plan."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [36, new Map([
            ["id", "121"],
            ["question", "Are the machine parameters checked before each use of a production machine? Is this check described in the corresponding machine instructions?"],
            ["recommandation", "Check the machine parameters every time before using a production machine on a board or a subassembly (Setup). → It is important to detect any anomalies before using a machine on a board or subassembly. This is done through a series of “machine setup” checks, performed by the operator at key production steps: (1) Machine startup ; (2) Product changeover ; (3) Production batch changeover ; (4) Operator team changeover ; (5) Replacement of certain consumables. These checks are clearly described in the machine instructions, and are recorded."],
            ["weight", "4,7"],
            ["levels", new Map([
                ["N1", "There is no evidence that machine parameters are checked methodically during critical changeovers."],
                ["N2", "Some machine parameters are checked during critical changeovers, but these checks are not exhaustive and are not covered by a formal document."],
                ["N3", "Machine parameters are systematically checked during critical changeovers. These checks are described in a machine instruction. However, this document is not duly validated, or the checks are not recorded."],
                ["N4", "Machine parameters are systematically checked during critical changeovers. These controls are described in a machine instruction, which is validated by an independent authority. The parameter checks are recorded, and the subsequent anomaly analysis can lead to corrective or preventive actions."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [37, new Map([
            ["id", "126"],
            ["question", "Is the inspection specification for the pick-and-place machine updated periodically? Are the board inspection results taken into account?"],
            ["recommandation", "Revise and strengthen production system controls to eliminate any possibility of damaging component connections. → To avoid damaging component connections during production operations, especially when placing components, the machine parameters and the tools must be covered by an inspection specification. This specification, and the associated instructions, must be periodically updated to take account of machine incidents, the results of board inspections (as per the IPC standard) and changes in the production process. Machine setup and calibration also contribute to this prevention role."],
            ["weight", "6,7"],
            ["levels", new Map([
                ["N1", "There is no production system specification that covers component handling risks."],
                ["N2", "There is a production system specification that covers component handling risks, but it is not regularly updated."],
                ["N3", "There is a production system specification that covers component handling risks. The specification is regularly updated, but this document is not validated by an independent authority, or is not covered by a dedicated FMECA analysis."],
                ["N4", "There is a production system specification that covers component handling risks. This specification is regularly updated, and is validated by an independent authority. The risk of damaging component connections is the subject of a FMECA analysis."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [38, new Map([
            ["id", "127"],
            ["question", "How is the preparation of transformable materials (solder paste, glues, varnish) controlled?"],
            ["recommandation", "Control the preparation of transformable materials by means of a qualified procedure and inspection measures. → The preparation of transformable materials (solder paste, glues, resin, varnish) must be qualified and its reproducibility guaranteed. The instructions need to have been analysed and the Control Plan must include the associated inspection specifications.  The observations and inspections must be recorded in the batch tracking sheet."],
            ["weight", "5,9"],
            ["levels", new Map([
                ["N1", "Not all transformable materials (solder paste, glues, varnish) are covered by a qualified preparation instruction and a quality control check."],
                ["N2", "All transformable materials (solder paste, glues, varnish) are covered by a preparation instruction. However, these documents are not based on process qualification studies, or do not mention associated quality controls."],
                ["N3", "All transformable materials (solder paste, glues, varnish) are covered by a preparation instruction. These documents systematically mention the associated quality controls, which are recorded on the batch tracking sheet, but not all of them are based on process qualification studies."],
                ["N4", "All transformable materials (solder paste, glues, varnish) are covered by a preparation instruction. These documents systematically mention the associated quality controls, which are recorded on the batch tracking sheet, and all of them are based on process qualification studies. Any change of material leads to requalification. These documents have been validated by an independent authority."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [39, new Map([
            ["id", "128"],
            ["question", "Are training, assessment and other actions performed to maintain the skills of operators and technicians? Are process changes accompanied by additional training? How is operator or technician turnover managed?"],
            ["recommandation", "Maintain the skills of operators and technicians through continuous training and frequent assessment. → Beyond initial training, and the certification of the operator/technician for the tasks entrusted to them, it is important to make sure that these skills are firmly rooted, and that they are updated in response to process changes. This can be monitored, and any necessary corrections made, by drawing on a range of actions: (1) Re-certification of the operator after a period of time that depends on the criticality of the  operation in terms of quality and reliability ; (2) Training in new methods or processes ; (3) Internal audits conducted by Quality, and external audits conducted by independent services ; (4) Logging and analysis of nonconformities or customer feedback ; (5) Skills management within teams (e.g. preventing turnover)."],
            ["weight", "4,4"],
            ["levels", new Map([
                ["N1", "There is no plan in place to upgrade operator knowledge."],
                ["N2", "Operator skills are updated. However, this update is not described formally in documents."],
                ["N3", "Operator skills are updated. This update is covered by documents describing training plans and events that give rise to updates. However, these documents have not been validated, or there is no knowledge monitoring on the production line (quality audits)."],
                ["N4", "Operator skills are updated. This update is covered by documents describing training plans and events that give rise to updates. These documents have been validated by an authority independent from the operating entity. Knowledge is monitored through internal quality audits. Skills management for each position is constantly analysed."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [40, new Map([
            ["id", "129"],
            ["question", "Is the effectiveness of the final varnishing quality inspection assured by strict application of the inspection procedure?"],
            ["recommandation", "Verify the effectiveness of the final varnishing quality inspection by means of an appropriate procedure. → The inspection procedure must be strictly applied to the varnishing. This final check includes visual inspection and a verification of all the process steps. The reference standard is IPC-A-610 or an equivalent internal standard."],
            ["weight", "6,7"],
            ["levels", new Map([
                ["N1", "It is not clear that the final varnishing inspection is performed systematically."],
                ["N2", "The final varnishing inspection is performed systematically, but there is no document describing the control points and requirements in detail."],
                ["N3", "The final varnishing inspection is performed systematically. There is a document describing the control points and requirements in detail. However, this document does not refer to a recognized standard or has not been validated by an authority independent from the operating entity."],
                ["N4", "The final varnishing inspection is performed systematically. There is a document describing the control points and requirements in detail. This document refers to the IPC-A-610 standard or an equivalent internal standard, and has been validated by an authority independent from the operating entity."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [41, new Map([
            ["id", "138"],
            ["question", "Are checks performed to ensure that the correct embedded software is loaded, and are its version details recorded?"],
            ["recommandation", "Make sure that the correct embedded software is loaded, and record its version details. → Make sure that the correct embedded software is loaded and, in particular, that it corresponds to the latest version for use on the subassembly. This identification information must be traceable for the rest of the process."],
            ["weight", "6,7"],
            ["levels", new Map([
                ["N1", "The embedded software that has been loaded is not identified."],
                ["N2", "After embedded software has been loaded into a hardware subassembly, an identifier is supplied for the loaded software, guaranteeing that it conforms to the subassembly. However, there is no document that precisely describes the format or recording of this identifier."],
                ["N3", "Every time embedded software is loaded, the operator is informed of the software version to be used. An identifier of the version to be used is supplied after the operation."],
                ["N4", "Every time embedded software is loaded, the operator is informed of the software version to be used. An identifier of the version to be used is supplied after the operation. Cross-checking is formalized."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [42, new Map([
            ["id", "139"],
            ["question", "Is preventive maintenance performed on the production systems? Is this maintenance monitored?"],
            ["recommandation", "Ensure that preventive maintenance is performed on the production systems and that it is monitored. → Preventive maintenance on production systems must take account of specified wear/usage criteria (duration, number of operations or drifts) and the recent history of nonconformities and characteristic measurement drifts. The maintenance of equipment involves the repair and recalibration of tools, and the replacement of worn parts or those that have reached their maximum authorized lifetime. This function can be entrusted to a dedicated team, which will also manage the need for inspection and repair by outside firms (which may depend on the machine manufacturer)."],
            ["weight", "5,9"],
            ["levels", new Map([
                ["N1", "Preventive maintenance of production systems is not monitored."],
                ["N2", "Preventive maintenance is performed on the production systems and is monitored. However there is no documented formal maintenance plan indicating the periodicity and the mandatory inspection points for this maintenance."],
                ["N3", "There is an effective preventive maintenance procedure in place for the production systems. It is monitored on the basis of a plan that lists all the mandatory inspection points and the periodicities of each action. There is no evidence of recent nonconformities being taken into account in the maintenance plan."],
                ["N4", "There is an effective maintenance procedure in place for the production systems. It is monitored on the basis of a plan that lists all the mandatory inspection points and the periodicities of each action. Additionally, recent nonconformities are taken into account in the preventive maintenance plan."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [43, new Map([
            ["id", "144"],
            ["question", "Are personnel made aware of the importance of visual checks on subassemblies after placement and before reflow?"],
            ["recommandation", "Sensitize personnel to the importance of visual checks on subassemblies after placement and before reflow. → In order to reduce the number of anomalies that go undetected during inspections that rely on the human factor (in this case visual checks), it is important to sensitize the personnel responsible for this task so as to minimize risks due to human error or to failure to detect anomalies."],
            ["weight", "5,9"],
            ["levels", new Map([
                ["N1", "No particular verification is performed after placing the components and before reflow."],
                ["N2", "The operator may check that placement is correct before reflow, but this verification is not described formally."],
                ["N3", "The operator checks that placement is correct before reflow. This verification conforms to a procedure (which may simply mention a visual check or may list the points to be verified systematically)."],
                ["N4", "The operator checks that placement is correct before reflow. This verification conforms to a procedure (which may simply mention a visual check or may list the points to be verified systematically). Additionally, this procedure has been validated by an authority independent from the operating entity."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [44, new Map([
            ["id", "153"],
            ["question", "Is the conformity of purchased products checked against clearly defined specifications?"],
            ["recommandation", "Check the conformity of purchased products. → Implement measures to verify purchased products, e.g.: (1) Examination of incoming products (components, PCBs, subassemblies, accessories) ; (2) Examination of the required documentation, including the supplier’s Certificate of Conformity, if specified ; (3) Inspection of incoming batches (critical characteristics). This incoming inspection is covered by dedicated specifications for each type of material or item purchased."],
            ["weight", "8,6"],
            ["levels", new Map([
                ["N1", "The conformity of purchased products is not verified."],
                ["N2", "The conformity of purchased products is verified only partially, by examining the batch documents."],
                ["N3", "The conformity of purchased products is verified by inspecting incoming products and examining the required documentation. These inspections are recorded. However, this incoming inspection is not covered by dedicated specifications for each type of material or item purchased."],
                ["N4", "The conformity of purchased products is verified by inspecting incoming batches and examining the required documentation, in accordance with clearly defined and validated specifications (dedicated to each type of item purchased). These inspections are recorded."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [45, new Map([
            ["id", "154"],
            ["question", "Is a check performed (by reading the barcode or S/N) to ensure that the test device and software are compatible with the product under test before starting the test?"],
            ["recommandation", "Before starting the test, verify (by reading the barcode or S/N) that the test device and software are compatible with the product under test. → The compatibility of the test device and software with the product under test is generally verified, before starting the test, by comparing the information on the batch tracking sheet with the test programme identifier on the test machine. This operator task is often confirmed by scanning and loading the barcodes that are also found on the batch tracking sheet (with a handheld scanner)."],
            ["weight", "6,1"],
            ["applicability", "In standard space applications, the ESS procedure is not fully applied. A qualification test is performed on a dedicated model and an acceptance test is performed on a flight model. L4 cannot be applied, the maximum for space is L3 if those two conditions (qualification + acceptance) are fulfilled."],
            ["levels", new Map([
                ["N1", "No checks are performed to ensure that the test device and program are compatible with the product under test."],
                ["N2", "The test device and test program are verified to ensure that they are compatible with the product under test, but this verification is not formally described."],
                ["N3", "The test device and test program are verified to ensure that they are compatible with the product under test. This is based on a documented procedure indicating how the verification is done (by scanning an identifier, etc.)."],
                ["N4", "The test device and test program are verified to ensure that they are compatible with the product under test. This is based on a documented procedure indicating how the verification is done (by scanning an identifier, etc.). This verification procedure has been validated by an authority independent from the operating entity."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [46, new Map([
            ["id", "155"],
            ["question", "Have checks been done to ensure that the ESS procedure defined at the design stage is correctly applied?"],
            ["recommandation", "Check that the ESS procedure is correctly applied. → It is important to ensure that the environmental stress screening (ESS) procedure defined at the design stage is correctly applied, and that the results are correctly recorded and are traceable. It is also important for corrective or preventive actions to be planned, in order to minimize the ESS failure rate. Finally, the team in charge of defining the ESS procedure must be given the necessary information to optimize this procedure."],
            ["weight", "5,2"],
            ["applicability", "In standard space applications, the ESS procedure is not fully applied. A qualification test is performed on a dedicated model and an acceptance test is performed on a flight model. L4 cannot be applied, the maximum for space is L3 if those two conditions (qualification + acceptance) are fulfilled."],
            ["levels", new Map([
                ["N1", "The ESS procedure defined at the design stage is not applied."],
                ["N2", "The ESS procedure defined at the design stage is applied, but there is no traceable record of the test results."],
                ["N3", "The ESS procedure defined at the design stage is applied; the results of the ESS test are recorded and traceable. ESS failures are analysed to assist possible corrective or preventive actions in production."],
                ["N4", "The ESS procedure defined at the design stage is applied; the results of the ESS test are recorded and traceable. ESS failures are analysed to assist possible corrective or preventive actions in production. Additionally, all of this information is communicated to the design team in charge of optimizing the ESS procedure."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [47, new Map([
            ["id", "172"],
            ["question", "Is the viscosity of the varnish inspected periodically? Is the thickness of the varnish inspected using test specimens?"],
            ["recommandation", "Control the viscosity and thickness of the varnish. → Given the impact on final quality, the viscosity of the varnish must be inspected at least daily. Remark: For glues and solder paste, the viscosity is generally controlled by managing the working time under production conditions (Recommendation 19). To control the thickness of the varnish deposited, test specimens are generally produced for each new batch of boards, with tolerance limits that are specified in a document."],
            ["weight", "6"],
            ["levels", new Map([
                ["N1", "The viscosity of the varnish is not controlled."],
                ["N2", "The viscosity of the varnish is measured periodically. However, there is no specification describing the criteria for rejection and/or corrective action."],
                ["N3", "The viscosity of the varnish is measured every day. The criteria for rejection and/or corrective action are clearly described in specifications and/or instructions. However, these documents have not been validated by an independent authority."],
                ["N4", "The viscosity of the varnish is measured every day. The criteria for rejection and/or corrective action are clearly described in specifications and/or instructions. These documents have been validated by an independent authority."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [48, new Map([
            ["id", "173"],
            ["question", "Is the quality of the solders controlled systematically, by inspecting the solder joints after reflow?"],
            ["recommandation", "Systematically inspect the quality of the solder joints on board-mounted components after solder reflow. → Solder joints between boards and components can present the following defects: (1) Lack of solder, or overly large gaps ; (2) Excess of solder, and/or solder balling ; (3) Mispositioned components (decentring, tilt, etc.) ; (4) Incomplete mixing in the case of ball grid arrays. Solder joint inspections must be specified and recorded, in order to prevent all of these reliability issues in subassemblies. Optical and X-ray techniques are generally used. The reference standard is IPC-A-610 or an equivalent internal standard."],
            ["weight", "6"],
            ["levels", new Map([
                ["N1", "The quality of solder joints between boards and components is not systematically inspected."],
                ["N2", "The quality of solder joints between boards and components is systematically inspected, but this inspection is not based on a clearly identified document."],
                ["N3", "The quality of solder joints between boards and components is systematically inspected. This inspection is based on a clearly identified document. However, this document does not refer to IPC-A-610 or an equivalent internal standard, or is not independently validated."],
                ["N4", "The quality of solder joints between boards and components is systematically inspected. This inspection is based on a clearly identified document. IPC-A-610 or an equivalent internal standard is cited as the reference standard in this document. Additionally, this document has been validated by an authority independent from the operating entity."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [49, new Map([
            ["id", "174"],
            ["question", "Are conformity checks performed on finished products entering storage, so that nonconforming items are excluded?"],
            ["recommandation", "Implement conformity checks on finished products entering storage. → A “conformity check” step on finished products must be identified, and must be performed systematically before items definitively enter storage. The aim is to ensure that the accompanying data is complete, and is consistent with the items received."],
            ["weight", "8"],
            ["levels", new Map([
                ["N1", "There is no conformity check on finished products before they enter storage."],
                ["N2", "Certain parameters of finished products are monitored on entering storage, but these are not formally defined."],
                ["N3", "A full conformity check is performed on finished products before they enter storage. This conformity check is documented formally (parameters, particular points, etc.). However, no independent authority has validated these documents."],
                ["N4", "A full conformity check is performed on finished products before they enter storage. This conformity check is documented formally (parameters, particular points, etc.). The relevance of the information in these documents has been validated by an authority independent from the operating entity."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [50, new Map([
            ["id", "175"],
            ["question", "Are the temperature/humidity conditions of the component and material storage zones controlled?"],
            ["recommandation", "Control the environmental conditions for the stock of components and materials. → Electronic components are sensitive to environmental conditions in storage (corrosion, moisture absorption, ESD). Certain materials require cold storage (cold room or freezer). It is important that the limits (specifications and control limits) are defined in an official document and that inspection systems (probes, recordings, alarms) are in place."],
            ["weight", "9"],
            ["levels", new Map([
                ["N1", "The storage conditions of items and materials are not measured, or are not monitored periodically."],
                ["N2", "The storage conditions of items and materials are measured, and are monitored continuously or periodically, but there are no specifications describing the acceptable limits."],
                ["N3", "The storage conditions of items and materials are measured and monitored continuously or periodically. There are specifications describing the acceptable limits. However, these specifications are not described in a document validated by an independent authority, or the specification limits are not backed up by control limits to avoid the risk of excursion."],
                ["N4", "The storage conditions of items and materials are measured and monitored continuously or periodically. There are specifications describing the acceptable limits. These specifications are described in a document validated by an independent authority. The specification limits are backed up by control limits to avoid the risk of excursion."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [51, new Map([
            ["id", "176"],
            ["question", "Is the MSL of components taken into account during their industrial implementation?"],
            ["recommandation", "Control the sensitivity of components to moisture (MSL) and to the reflow process. → Manufacturers assign a moisture sensitivity level (MSL) to SMD plastic components; sensitive components are wrapped in sealed bags, and working time limits are specified. The reference document for production is the J-STD-033 standard. It is important for operators tasked with mounting components on boards to manage this risk, and for there to be an accompanying instruction. Operators must have the means to implement the necessary actions (an oven for drying components, etc.)"],
            ["weight", "12"],
            ["levels", new Map([
                ["N1", "The MSL of sensitive components is not managed by the operator."],
                ["N2", "The MSL of sensitive components is known and managed by the operator, but there is no internal document describing the actions associated with this risk."],
                ["N3", "The MSL of sensitive components is known and managed by the operator. There is an internal document describing the actions associated with this risk. However, this document is not validated by an independent authority."],
                ["N4", "The MSL of sensitive components is known and managed by the operator. There is an internal document describing the actions associated with this risk. This document is up to date and is validated by an independent authority."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [52, new Map([
            ["id", "177"],
            ["question", "Is there a batch tracking sheet describing the required traceability information for all operations?"],
            ["recommandation", "Track all production and testing operations on the batch tracking sheet. → At each step of production and testing, it is important to know certain information in order to minimize quality and reliability risks: partnumber, batch number, incoming quantity, references of the required consumables, reference of the test to be performed, etc. Likewise, the operator must enter a certain number of traceability details on the tracking sheet: batch numbers of consumable materials, tools, outgoing quantity, reasons for rejecting or repairing parts, number of the machine used, name of the operator, etc. The same sheet is often used by Quality Control to track inspections (e.g. the Quality Assurance stamp)."],
            ["weight", "8"],
            ["levels", new Map([
                ["N1", "There is no batch tracking sheet recording the materials used and/or the test applied."],
                ["N2", "A tracking sheet is filled in for each production batch. However, it does not contain all the information necessary to perform every operation, or does not track the factors that influence quality/reliability."],
                ["N3", "A tracking sheet is filled in for each production batch. It contains all the information necessary to perform every operation, and tracks the factors that influence quality/reliability, but it is not validated by an independent authority."],
                ["N4", "A tracking sheet is filled in for each production batch. It contains all the information necessary to perform every operation, tracks the factors that influence quality/reliability, and is validated and updated by an independent authority."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [53, new Map([
            ["id", "178"],
            ["question", "Are actions carried out to continuously improve the organization of the production line?"],
            ["recommandation", "Optimize the production line organization. → The organization of the production line, the flows of products and persons, and the clarity and ease of use of workstations all help to minimize reliability risks to the products on the line. Organizational methodologies are defined in a number of standards (5S, Lean, etc.)"],
            ["weight", "3"],
            ["applicability", "Not applicable for unique or low quantity production of board/unit"],
            ["levels", new Map([
                ["N1", "There are no concrete actions in place to improve the organization of the production line."],
                ["N2", "Improvements have been made to the organization of the production line, but there is no methodology for its continuous improvement."],
                ["N3", "Concrete actions are in place for the continuous improvement of the production line. These actions are not monitored by a quality review."],
                ["N4", "Concrete actions are in place for the continuous improvement of the production line. These actions are monitored by a quality review."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [54, new Map([
            ["id", "179"],
            ["question", "Is the risk of buying fraudulent/counterfeit components covered by a procedure?"],
            ["recommandation", "Guard against the purchase of fraudulent components. → The potential use of fraudulent or counterfeit components, generally purchased from brokers (independent suppliers not under franchise to the manufacturers), represents a reliability risk. It is important that there is a clear procurement procedure that authorizes the purchase of components from brokers only under particular circumstances, and in accordance with a specific protocol (waiver request, authorized broker, batch inspections, proofs of conformity, notification of the customer when specified)."],
            ["weight", "10"],
            ["levels", new Map([
                ["N1", "The potential procurement of components from brokers is not subject to any particular procedure."],
                ["N2", "There is a broker procurement procedure, but no authorized list, or no reinforced control of the batch inspections."],
                ["N3", "There is a broker procurement procedure, a list of authorized brokers, and a specific incoming inspection procedure. However, these documents are not validated and updated periodically by an authority independent from the Procurement department."],
                ["N4", "There is a broker procurement procedure, a list of authorized brokers, and a specific incoming inspection procedure. These documents have been validated by an authority independent from Procurement, and are periodically updated."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [55, new Map([
            ["id", "180"],
            ["question", "Is the bending of the board controlled during electrical probe tests? Is there a document specifying what is acceptable?"],
            ["recommandation", "Monitor the bending of the board during electrical probe tests. → During electrical probe tests, deformation of the board can damage the item under test, impacting its reliability. It is important to monitor the degree of bending by taking measurements at the start of each new batch. The rules to be applied must be set out in a specification."],
            ["weight", "7"],
            ["levels", new Map([
                ["N1", "There is no evidence that the bending of the board is monitored/controlled during electrical probe tests."],
                ["N2", "The bending of the board is monitored/controlled during electrical probe tests at the start of the batch, but this is not specified in any document."],
                ["N3", "The bending of the board is monitored/controlled during electrical probe tests at the start of the batch. The measurement conditions and acceptance criteria are specified in a document. However, this document has not been validated by an independent authority."],
                ["N4", "The bending of the board is monitored/controlled during electrical probe tests at the start of the batch. The measurement conditions and acceptance criteria are specified in a document. This document has been validated by an authority independent from the operating entity."],
                ["NA", "Not Applicable"],
            ])]
        ])],
    ])],
    ["Integration into equipment", new Map([
        [0, new Map([
            ["id", "5"],
            ["question", "Is a test result summary produced in order to optimize the final test coverage?"],
            ["recommandation", "Optimize the final test coverage with regard to the product specification, with the aid of the test result summary. → The final product test, and in particular the level of coverage achieved by this test, must be analysed, and if necessary modified, even after the product has been specified and designed. A test result summary can optimize the effectiveness of this final test."],
            ["weight", "6,6"],
            ["levels", new Map([
                ["N1", "The predefined test coverage rate is not reviewed."],
                ["N2", "A product test summary can be compiled with the aim of reviewing and improving the predefined coverage rate. However, there is no document that formally describes any corresponding actions."],
                ["N3", "The final product tests are regularly reviewed, even after specification and design, with the aim of increasing the predefined test coverage. There are documents that describe the procedure to follow."],
                ["N4", "The final product tests are regularly reviewed, even after specification and design, with the aim of increasing the predefined test coverage. There are documents that describe the procedure to follow. These have been validated by an authority independent from the operating entity."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [1, new Map([
            ["id", "7"],
            ["question", "What process is used to collect data on technical events, to report anomalies, and to manage them?"],
            ["recommandation", "Implement corrective actions. → This recommendation deals with the implementation of corrective actions (the documentation aspect is dealt with in Recommendation 116). The following functions must be covered by a quality assurance procedure: (1)Processing customer complaints and product nonconformity reports ; (2) Searching for causes of nonconformity relating to the product, the process and the quality system, and recording the results of this search ; (3) Determining corrective and preventive actions required to eliminate causes of nonconformity ; (5) Applying resources to measure the efficacy of these corrective and preventive actions."],
            ["weight", "15,4"],
            ["levels", new Map([
                ["N1", "There are no corrective action procedures."],
                ["N2", "Corrective actions are implemented following a customer complaint or nonconformity report, but they are not formalized."],
                ["N3", "Corrective action procedures include at least (1) Effective processing of customer complaints and product nonconformity reports ; (2) The search for causes of nonconformity relating to the product, the process and the quality system ; (3) The determination of corrective actions required to eliminate causes of nonconformity ; These procedures do not define the application of control measures to ensure that corrective actions are implemented and that they produce the desired effect."],
                ["N4", "Corrective action procedures include: (1) Effective processing of customer complaints and product nonconformity reports ; (2) The search for causes of nonconformity relating to the product, the process and the quality system, and recording the results of this search ; (3) The determination of corrective actions required to eliminate causes of nonconformity ; (4) The application of control measures to ensure that corrective actions are implemented and that they produce the desired effect."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [2, new Map([
            ["id", "8"],
            ["question", "Do the preventive action procedures include: (1) The use of diversified sources of information? ; (2) The definition of the steps to follow? ; (3) The criteria for triggering preventive actions and applying inspection procedures? ; (4) A preventive action follow-up review?"],
            ["recommandation", "Implement preventive actions.  → Preventive action procedures include: (1) Using appropriate sources of information such as processes and operations affecting product quality, waivers, audit results, quality records, maintenance reports and customer complaints  to detect, analyse and eliminate potential causes of nonconformity ; (2) The definition of appropriate steps to deal with any problem that requires preventive action ; (3) Triggering preventive actions and applying inspection procedures to make sure they produce the desired effect ; (4)  Ensuring that relevant information on the actions implemented is submitted for management review."],
            ["weight", "15,6"],
            ["levels", new Map([
                ["N1", "No preventive action procedures are implemented."],
                ["N2", "Preventive action procedures exist but are incomplete."],
                ["N3", "Preventive action procedures exist and are almost complete with regard to the listed criteria (there may be minor nonconformities in the way criteria are applied or met)."],
                ["N4", "Preventive action procedures exist, are formalized, and are complete with regard to the listed criteria."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [3, new Map([
            ["id", "9"],
            ["question", "How is product traceability ensured?"],
            ["recommandation", "Ensure product traceability. → The system implemented must make it possible to: (1) Maintain the product identification throughout the life cycle ; (2) Know the history (definition file and changes) and final use (delivery, scrap) of all products ;  made from the same batch of raw material or belonging to the same production batch ; (3) Identify the elements that make up an assembly, and identify the higher assembly ; (4) Find sequential documentation on the production (manufacture, assembly, inspection) of a given product (e.g. configuration tracking sheet listing operations performed and anomalies observed). The traceability system must be capable of determining the configuration of the product ready for delivery, including any variance between the actual condition and the agreed/specified condition."],
            ["weight", "16,5"],
            ["levels", new Map([
                ["N1", "There is no product traceability during the life cycle; the product is distinguished only by its markings."],
                ["N2", "There is sufficient traceability to identify the product, but not to determine its origin or history."],
                ["N3", "There is sufficient traceability to identify the product and determine its history (design definition and changes), but not to identify the documentation associated with its life cycle (e.g. there is no configuration tracking sheet listing operations performed and any anomalies observed)."],
                ["N4", "There is sufficient traceability to identify the product and determine its history (design definition and changes), including the components e.g. date code, etc., as well as to identify the documentation associated with its life cycle (e.g. a configuration tracking sheet listing operations performed and any anomalies observed). The recommendation is applied in full."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [4, new Map([
            ["id", "10"],
            ["question", "Does the supplier control wrapping, packaging and marking processes to ensure compliance with specified requirements? Is there a list of equipment that requires packaging?"],
            ["recommandation", "Manage the packaging of systems and equipment.  → The wrapping, packaging and marking processes must be controlled to ensure compliance with specified requirements. Define a list of equipment that requires packaging. Propose a way to manage packaging specific to particular products (dates, methods, duration). Periodically inspect packaging quality. Use appropriate product-specific packaging."],
            ["weight", "12,3"],
            ["levels", new Map([
                ["N1", "Product packaging is not defined; packaging materials are used on the basis of their availability. Information on the packaging dates, management methods and required inspections is not recorded."],
                ["N2", "Standard packaging is used for the products. Information is supplied about the packaging. There is no specific packaging inspection."],
                ["N3", "Product-specific packaging is used, and documentation is associated with it. There is no specific packaging inspection."],
                ["N4", "Product-specific packaging is used, and documentation is associated with it. A specific packaging inspection is performed each time it is used, following a formal procedure."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [5, new Map([
            ["id", "11"],
            ["question", "Are there any designated storage areas or premises? ; Are they adapted to prevent deterioration or damage to subassemblies? ; Are appropriate measures taken to enable reception and shipping in these areas?"],
            ["recommandation", "Manage the storage conditions for subassemblies. → Designated storage areas or premises must be adapted to prevent damage or deterioration to subassemblies: (1)  Appropriate measures are taken to enable reception in these areas and shipment from them ; (2) The state of products in stock must be evaluated at appropriate intervals to detect any deterioration ; (3) The storage atmosphere must be controlled ; (4) Tailor positioning in storage ; (4) Organize periodic interventions (e.g. powering up) to maintain product characteristics in storage."],
            ["weight", "10,8"],
            ["levels", new Map([
                ["N1", "Product storage areas are not specific; the storage environment is not considered."],
                ["N2", "Product storage areas are not specific; the storage environment is controlled and adapted to the stored products."],
                ["N3", "Product storage areas are specific. The storage environment is controlled and adapted to the stored products. Storage positions are individually defined. Periodic interventions are performed to maintain product characteristics."],
                ["N4", "Product storage areas are specific. The storage environment is controlled and adapted to the stored products. Storage positions are individually defined. Periodic interventions are performed to maintain product characteristics. The condition of products in stock is regularly inspected; the stock is verified and storage conditions are regularly optimized."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [6, new Map([
            ["id", "12"],
            ["question", "Does the supplier take steps to maintain product quality after final testing and inspection? When specified in the contract, are these steps extended to include delivery for final use?"],
            ["recommandation", "Manage the delivery conditions for systems and equipment. → The supplier must take measures to protect the quality of the product after the final tests and inspections. When specified in the contract, this protection is extended to include delivery for final use. The supplier makes sure that the accompanying product documentation, as specified on the order, is present at the time of delivery and that it is protected against loss and damage."],
            ["weight", "17,5"],
            ["levels", new Map([
                ["N1", "Normal protections for products during delivery are not used."],
                ["N2", "Product quality protections are used during delivery to the customer. The supplier does not check that the accompanying documents are present."],
                ["N3", "Product quality protections are used during delivery to the customer. The supplier checks that the accompanying documents are present, but does not protect them against loss and damage."],
                ["N4", "Product quality protections are used during delivery to the customer. The supplier checks that the accompanying product documentation, as specified on the order, is present, and that it is protected against loss and damage."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [7, new Map([
            ["id", "13"],
            ["question", "How are the planned tests and inspections for a phase validated before moving on to the next phase?"],
            ["recommandation", "Validate the required tests and inspections before moving on to the next phase. → During the phase, the product must be inspected and tests must be carried out in accordance with the quality plan and/or written procedures. The product must remain blocked until the required inspections and tests are terminated, or until the necessary reports have been received and verified. Corrective actions must be carried out if applicable."],
            ["weight", "7,2"],
            ["levels", new Map([
                ["N1", "Test and inspection results are not validated before moving on to the next phase."],
                ["N2", "Test and inspection results are validated before moving on to the next phase, but this is not formalized by a written procedure or a quality plan."],
                ["N3", "Test and inspection results are validated before moving on to the next phase. This validation is described in a written procedure."],
                ["N4", "Test and inspection results are validated before moving on to the next phase. This validation is described in a written procedure, approved by Quality. The procedure is effectively applied, and, where applicable, corrective actions are based on these controls."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [8, new Map([
            ["id", "14"],
            ["question", "How is it ensured that all final tests and inspections are conducted in accordance with the control plan and the written procedures?"],
            ["recommandation", "Perform final tests and inspections. → The control plan must contain a “Final Tests and Inspections” chapter, describing the equipment, the general conditions and the references to the associated procedures. The acceptance criteria and the specific product requirements must be described in detail. These inspections must be based on an analysis (e.g. FMECA) of the history of failures encountered and customer feedback. Additionally, it is important for an independent inspector to check, prior to shipping, that: (1) All the activities specified in the control plan have been completed satisfactorily ; (2) The associated data and documentation are available and accepted."],
            ["weight", "7,9"],
            ["levels", new Map([
                ["N1", "No final tests or inspections."],
                ["N2", "Final tests and inspections are carried out, but these are not described in procedures adapted to the product under test."],
                ["N3", "Final tests and inspections are carried out in accordance with the control plan and the written procedures, and are adapted to the products under test. However, the application of these tests and inspections is neither verified nor validated."],
                ["N4", "Final tests and inspections are carried out in accordance with the control plan and the written procedures. The control plan is complete and is based on the experience and analysis of failures encountered (e.g. FMECA). Before shipping, the following points are controlled by an independent inspector: (1) All the activities specified in the control plan have been completed satisfactorily ; (2) The associated data and documentation are available and accepted (document such as a tracking sheet that logs the configuration, the operations performed and any anomalies observed)."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [9, new Map([
            ["id", "15"],
            ["question", "Are appropriate tests and inspections carried out on all incoming parts or materials before use, in accordance with a specification?"],
            ["recommandation", "Perform tests and inspections specific to the reception of  materials and parts.  → Make sure that purchased parts and materials are not used or implemented until they have been inspected or until their conformity to the specified requirements has been verified in some other way. The verification of conformity to the specified requirements must be performed in accordance with the quality plan and/or the written procedures. Inspections carried out on subcontractor premises, and proofs of conformity supplied, must be taken into account in determining the extent and nature of the inspections to be performed on reception. When, for reasons of urgency, the incoming product is released before being verified, it must be identified and the decision to release recorded."],
            ["weight", "6,7"],
            ["applicability", "For classic space, the regular interactions between supplier and prime allow considering a full coverage of input inspection."],
            ["levels", new Map([
                ["N1", "No tests or inspections on reception."],
                ["N2", "Tests or inspections are performed on reception, but no specific procedure is described for these actions."],
                ["N3", "Conformity to specified requirements is verified in accordance with a quality plan (or control plan) and/or written procedures."],
                ["N4", "Conformity to specified requirements is verified in accordance with a quality plan (or control plan) and/or written procedures. Inspections carried out on subcontractor premises, and proofs of conformity supplied are taken into account in determining the extent and nature of inspections to be performed on reception. "],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [10, new Map([
            ["id", "18"],
            ["question", "Is corrective maintenance performed following the occurrence of an anomaly in the production system or in the subassemblies produced?"],
            ["recommandation", "Perform corrective maintenance following the occurrence of an anomaly in the production system.  → Applied to anomalies in production systems and subassemblies, corrective maintenance procedures involve: (1) Determining the root causes of the anomaly, by setting up a multidisciplinary team ; (2) Defining corrective actions, stipulating action owners and deadlines ; (3) Monitoring the implementation of corrective actions and their effectiveness ;  (4) Updating the associated Process FMECA chapter and, where applicable, the Control Plan ;  (5) Updating the machinery maintenance plan, if necessary. These actions are often standardized in a process called “8D”, overseen by the Quality department."],
            ["weight", "6,9"],
            ["levels", new Map([
                ["N1", "There is no corrective maintenance following the occurrence of an anomaly on a production machine or on a subassembly (non-systematic)."],
                ["N2", "Corrective actions are applied directly where the anomaly was observed, without a formalisation through dedicated procedure update."],
                ["N3", "Real maintenance procedures are implemented for corrective actions, following anomalies in production. They are covered by a formalized corrective maintenance procedure, but this is not validated by an authority independent from the operating entity."],
                ["N4", "Real maintenance procedures are implemented for corrective actions, following anomalies in production. They are covered by a formalized corrective maintenance procedure, validated by an authority independent from the operating entity. This procedure describes the following steps: anomaly identification, root cause analysis, correction and preventive action, checking the effectiveness of corrective measures, and (where applicable) internal auditing."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [11, new Map([
            ["id", "19"],
            ["question", "Is there effective control over the working times of transformable materials?"],
            ["recommandation", "Control working time limits on transformable (limited lifetime) materials.  → Several materials have a limited working time after withdrawal from stores, or after preparation (glue, solder paste, varnish, etc.). It is essential that these materials be withdrawn from production before this time limit is exceeded, and replaced with conforming batches. These working time durations are based on manufacturer recommendations, and can be reduced on the basis of experience in production. This control is performed by reading the expiry date on a dedicated label, and/or by the system alerting the operator, or even stopping the machine."],
            ["weight", "4"],
            ["levels", new Map([
                ["N1", "The working times of transformable materials are not under clear control."],
                ["N2", "The working times of transformable materials are controlled, but they are not described in any clear chapter or document."],
                ["N3", "The working times of transformable materials are controlled. There are instruction documents and/or chapters that clearly define the procedure to follow for each material concerned. The expiry dates for each batch are indicated on dedicated labels, but there is no automatic alert to tell the operator to change batches."],
                ["N4", "The working times of transformable materials are controlled. There are instruction documents and/or chapters that clearly define the procedure to follow for each material concerned. The expiry dates for each batch are indicated on dedicated labels. Furthermore, these dates are input into the system in order to alert the operator before changing the batch."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [12, new Map([
            ["id", "21"],
            ["question", "Are embedded software programming devices checked periodically to ensure that software is correctly loaded?"],
            ["recommandation", "Perform periodic checks on embedded software programming devices. → Perform periodic checks on embedded software programming devices.  → "],
            ["weight", "4,1"],
            ["levels", new Map([
                ["N1", "There is no periodic check on programming devices used to load software."],
                ["N2", "A number of checks are performed on programming devices. These checks are brief and do not necessarily take account of all software loading rules. There is no clear formal definition of the procedure or the limits of these checks."],
                ["N3", "A schedule of checks on programming devices has been designed; this schedule is adhered to, and all of the points verified (and the procedure to follow) are covered by a written document."],
                ["N4", "A strict schedule of checks on programming devices has been designed; this schedule is adhered to, and all of the points verified (and the procedure to follow) are covered by a written document. This document has been produced with reference to the entire loading software process and validated by an authority independent from the operating entity."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [13, new Map([
            ["id", "23"],
            ["question", "Is the production and handling of components, boards and subassemblies automated (partially or totally)?"],
            ["recommandation", "Automate handling in order to limit potential damage to components, boards and subassemblies. → Efforts must be made to keep the handling of components, boards and subassemblies to a minimum during the production phase in order to limit the risk of mechanical shock, contamination, and other overstresses. Additionally, the automation of handling operations between activities throughout the production process eliminates a large number of failures caused by human intervention. This recommendation also applies to very small production series. Beyond using robots, this risk can be addressed by using stores, trolleys, vacuum lifters, etc."],
            ["weight", "6,5"],
            ["levels", new Map([
                ["N1", "None of the handling of components, boards and subassemblies is automated  / secured by other means."],
                ["N2", "Some component, board and subassembly handling operations have been automated  / secured by other means."],
                ["N3", "Component, board and subassembly handling operations are maximally automated  / secured by other means. The level of automation has been established by a feasibility and benefit analysis. The whole procedure is formalized, but the study has not been validated by an authority independent from the operating entity."],
                ["N4", "Component, board and subassembly handling operations are maximally automated  / secured by other means. The level of automation has been established by a feasibility and benefit analysis. The whole procedure is formalized, following a study validated by an authority independent from Production."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [14, new Map([
            ["id", "25"],
            ["question", "Is the data loaded in programmable production systems managed?"],
            ["recommandation", "Control and maintain (through updates) the data loaded in programmable production systems. → For task automation and for reliable execution of activities, it is essential to specifically monitor and maintain (i.e. update) the references (coordinates, batch numbers, etc.) loaded in programmable production tools."],
            ["weight", "2,8"],
            ["levels", new Map([
                ["N1", "None of the handling of components, boards and subassemblies is automated  / secured by other means."],
                ["N2", "The parameters loaded in programmable production systems are controlled or maintained, but there is no formal definition of actions to be carried out to guarantee this maintenance."],
                ["N3", "The data programmed into the production systems is controlled and maintained in accordance with an identified formal definition (document, inspection procedure, update procedure)."],
                ["N4", "The data programmed into the production systems is controlled and maintained in accordance with an identified formal definition (document, inspection procedure, update procedure). All the documents have been validated by an authority independent from the operating entity."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [15, new Map([
            ["id", "30"],
            ["question", "Is the description of accepted nonconformities, or of repairs performed, recorded to indicate the real condition of the product?"],
            ["recommandation", "Define the degree of nonconformity.  → The description of the accepted nonconformity, or of repairs performed, is recorded to indicate the real condition of the product. Written procedures are kept up to date, defining, as a minimum: (1) How nonconformities are classified, and how the use of nonconforming components in finished products is monitored ; (2) The formal authorization process and scope of application for personnel authorizing the use of replacement materials and/or nonconforming products (waiver procedures) ; ( 3) The process for managing scrapped parts."],
            ["weight", "10,3"],
            ["levels", new Map([
                ["N1", "There is no provision for indicating the degree of nonconformity of the product."],
                ["N2", "The degree of nonconformity of products is indicated for information only, and not to assist the decision on whether to use nonconforming equipment."],
                ["N3", "The description of the accepted nonconformity, or of repairs performed, is recorded to indicate the real condition of the product. The process for classifying nonconformities, and the monitoring of the use of nonconforming components in finished products, are defined in written procedures. The process for authorizing personnel to use replacement materials and/or nonconforming products is not formalized."],
                ["N4", "The description of the accepted nonconformity, or of repairs performed, is recorded to indicate the real condition of the product. There are written procedures defining: (1) The process for classifying nonconformities, and the monitoring of the use of nonconforming components in finished products ; (2) The process for authorizing personnel to use replacement materials and/or nonconforming products ; (3) The process for managing scrapped parts."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [16, new Map([
            ["id", "32"],
            ["question", "Which procedure defines the necessary resources for the testing and inspection of the product?"],
            ["recommandation", "Define the necessary resources for the testing and inspection of the product.  →  The product testing and inspection procedures must specify the resources required (human and technical), the methods to be implemented, the acceptance criteria, and the methods for recording the results. These procedures must also define training requirements and, if necessary, specify operator qualification requirements."],
            ["weight", "11,6"],
            ["levels", new Map([
                ["N1", "No product testing or inspection procedure is specified, and there is no description of the acceptance criteria and methods."],
                ["N2", "The product testing or inspection procedures are specified. The acceptance criteria and methods are described. The results are not kept."],
                ["N3", "The product testing or inspection procedures are specified. The acceptance criteria and methods are described. The results are not recorded and used as experience feedback. The procedures also describe the training and qualification of operators."],
                ["N4", "The product testing or inspection procedures are specified. The acceptance criteria and methods are described. The results are recorded and used as experience feedback. The procedures also describe the training and qualification of operators."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [17, new Map([
            ["id", "35"],
            ["question", "Are there any documents for performing incoming inspections on supplies?"],
            ["recommandation", "Provide documents for performing incoming inspections on subassembly supplies.  → Procurement documents must include, where applicable: (1) The type, the category, and any other precise identification ; (2) The title, or any other formal identification, and the applicable version of specifications, drawings, process requirements, inspection instructions and other relevant technical data ; (3) The title, identifier and version of the applicable quality system standard ; (4) The list of procurement documents reviewed and approved prior to distribution as conforming to the requirements. The documented procurement requirements must include, where applicable: (1) The tests, examinations, inspections and acceptance conditions imposed by the customer, and any corresponding instructions or requirements ; (2) The requirements relating to specimens (method of production, number, storage conditions) for inspections, investigations or audits ; (3) The requirements relating to the notification of anomalies, to changes in the definition, and to the approval of their processing. Customer requirements must be passed on to suppliers."],
            ["weight", "8,8"],
            ["levels", new Map([
                ["N1", "There is no specific documentation on the incoming inspection of supplies."],
                ["N2", "The only documents for performing incoming inspections on supplies are the product identification documents."],
                ["N3", "The procurement documents include: a precise identification; the applicable versions of specifications, plans, process requirements, inspection instructions and other relevant technical data; the title, identifier and version of the applicable quality system standard; and the list of procurement documents reviewed and approved prior to distribution as conforming to the requirements. The documented procurement requirements also include: the tests, examinations, inspections and acceptance conditions imposed by the customer, and any corresponding instructions or requirements; the requirements relating to specimens (method of production, number, storage conditions) for inspections, investigations or audits, the requirements relating to the notification of anomalies, to changes in the definition, and to the approval of their processing. Customer requirements are passed on to suppliers."],
                ["N4", "The procurement documents include: a precise identification; the applicable versions of specifications, plans, process requirements, inspection instructions and other relevant technical data; the title, identifier and version of the applicable quality system standard; and the list of procurement documents reviewed and approved prior to distribution as conforming to the requirements. The documented procurement requirements also include: the tests, examinations, inspections and acceptance conditions imposed by the customer, and any corresponding instructions or requirements; the requirements relating to specimens (method of production, number, storage conditions) for inspections, investigations or audits, the requirements relating to the notification of anomalies, to changes in the definition, and to the approval of their processing. Customer requirements are passed on to suppliers."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [18, new Map([
            ["id", "37"],
            ["question", "Are sensitive manufacturing processes entrusted to trained and experienced personnel?"],
            ["recommandation", "Make sure that operators and technicians in charge of sensitive operations are trained and sufficiently experienced.  → Certain steps in the manufacturing process require a particular level of training and experience. Certain types of stress can impact equipment reliability in a way that cannot be detected by quality controls or final testing. This is the case with the polymerization or drying steps, for example, where the maximum temperature and duration must be kept under control Or with the soldering of components on the board (screen-printing in particular). Or with the X-ray inspection of boards Or with quality inspection (acceptance criteria) Or with electrical testing, where special care is needed  to apply ESD protections, etc. This requirement must be covered by a training and certification plan. Records will be kept of these training courses."],
            ["weight", "12"],
            ["levels", new Map([
                ["N1", "There is no evidence of training for employees in charge of sensitive operations that can impact equipment reliability."],
                ["N2", "Operators performing sensitive operations are experienced or trained, but  there is no evidence."],
                ["N3", "Operators performing sensitive operations  have followed specific training for these processes. The training in question is not independently validated and tracked."],
                ["N4", "Operators performing sensitive operations  have followed specific training for these processes. The training in question has been independently validated and is tracked."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [19, new Map([
            ["id", "43"],
            ["question", "How is it ensured that the production systems are fully compatible with the items to be produced?"],
            ["recommandation", "Ensure compatibility between the production systems and the subassemblies produced. → The description of the actions to be performed when using a production tool on a subassembly must be sufficiently explicit to rule out any interpretation by the operator that might result in the accidental use of unsuitable tools. Identification via barcodes on machines and tracking sheets is an effective error-proofing mechanism."],
            ["weight", "7,2"],
            ["levels", new Map([
                ["N1", "Compatibility between production machine and product is not verified before use on a subassembly."],
                ["N2", "Compatibility between production machine and product is verified before use on a subassembly but it is not formally identified in a document."],
                ["N3", "Compatibility between production machine and product is verified before use on a subassembly. All the parameters that need to be checked are formalized in a document validated by an authority independent from the operating entity. Additionally, compatibility is double-checked, generally using a barcode system."],
                ["N4", "Compatibility between production machine and product is verified before use on a subassembly. All the parameters that need to be checked are formalized in a document validated by an authority independent from the operating entity. Additionally, compatibility is double-checked, generally using a barcode system."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [20, new Map([
            ["id", "46"],
            ["question", "Are the anomalies encountered recorded so as to enable corrective and/or preventive actions?"],
            ["recommandation", "Record any anomalies liable to lead to the application of corrective and/or preventive actions.  → Any problem or dysfunction in production, regardless of its nature, must be identified and recorded in an “anomaly report”. Anomaly reports follow a set format: all the information to be recorded, and the way of recording it, is predetermined. The anomaly report is the element that triggers the implementation of preventive and/or corrective maintenance actions. Tracking anomaly reports provides traceability on the different steps taken to manage nonconformities. The potential sources of anomaly are the process, the production systems (test benches, test instruments, etc.) but also the products themselves: product failures must also be recorded in anomaly reports."],
            ["weight", "7,6"],
            ["levels", new Map([
                ["N1", "There is no recording or traceability of problems encountered during production."],
                ["N2", "The anomalies identified are recorded in order to undertake corrective actions, but nothing is formalized."],
                ["N3", "Every production problem, regardless of its nature, is identified and recorded in a document provided for this purpose, which can then be used for preventive and corrective maintenance. However, this method of leveraging information has not been validated."],
                ["N4", "Every production problem, regardless of its nature, is identified and recorded in a document provided for this purpose, following a set format. The whole procedure, and particularly the way in which information is recorded for reuse during preventive and corrective maintenance, has been validated by an authority independent from the operating entity."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [21, new Map([
            ["id", "47"],
            ["question", "Are there any written procedures for checking that purchased assemblies and subassemblies meet the specified requirements?"],
            ["recommandation", "Establish procedures to verify that purchased assemblies and subassemblies meet the specified requirements.  → Establish written procedures to ensure that all purchased assemblies and subassemblies conform to the specified requirements. Define the terms and conditions of supply and the responsibilities of all concerned. Check that procedures are applied."],
            ["weight", "10,6"],
            ["levels", new Map([
                ["N1", "There are no procedures to check conformity of products to specified requirements. Nothing is formalized."],
                ["N2", "The anomalies identified are recorded in order to undertake corrective actions, but nothing is formalized."],
                ["N3", "Product-specific procedures are defined in a validated plan to ensure conformity of purchased products. The conditions of supply and the responsibilities of those involved are not described."],
                ["N4", "Every production problem, regardless of its nature, is identified and recorded in a document provided for this purpose, following a set format. The whole procedure, and particularly the way in which information is recorded for reuse during preventive and corrective maintenance, has been validated by an authority independent from the operating entity."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [22, new Map([
            ["id", "49"],
            ["question", "How are nonconformities analysed? ; Are there any procedures for processing nonconforming products?"],
            ["recommandation", "Manage the processing of nonconformities.  → The processing of nonconformities must be described in written procedures. These procedures must provide for the possibility of nonconforming products being: (1) Reworked to satisfy the specified requirements ; (2) Accepted by waiver, with or without repair ; (3) Declassified for other applications ; (4) Rejected or scrapped. If specified by the contract, the proposal to use or repair a nonconforming product may be submitted to the customer. The repaired and/or reworked product is inspected again, in accordance with the requirements of the quality plan and/or written procedures. The responsibility for examining nonconforming products and for deciding on their processing must be defined."],
            ["weight", "13,6"],
            ["levels", new Map([
                ["N1", "The processing of nonconformities is not clearly defined."],
                ["N2", "Nonconforming products are examined and processed, but these actions are performed without written procedures."],
                ["N3", "Nonconforming products are examined and processed in accordance with written procedures, but these do not allow for product modifications or for acceptance without modification."],
                ["N4", "Nonconforming products are examined and processed in accordance with written procedures. These provide for the product to be: (1) Reworked to satisfy the specified requirements ; (2) Accepted by waiver, with or without repair ; (3) Declassified for other applications ; (4) Rejected or scrapped. If specified by the contract, the proposal to use or repair a nonconforming product is submitted to the customer. The repaired and/or reworked product is inspected again, in accordance with the requirements of the quality plan and/or written procedures."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [23, new Map([
            ["id", "60"],
            ["question", "How are priorities managed with regard to process deadlines?"],
            ["recommandation", "Manage priorities that need to be met within process deadlines (planning).  → The various subassemblies are made and integrated on the basis of planned tasks that may involve simultaneous activities. Priorities have to be managed, so that only a minimum number of subassemblies need to be kept in stock (any delay in the production flow entails additional handling and storage of subassemblies) and so that the potential impacts on component reliability can also be kept to a minimum."],
            ["weight", "3,1"],
            ["levels", new Map([
                ["N1", "There is no ranking of priorities in production."],
                ["N2", "Depending on the production schedule, some priority is given to subassemblies in order to minimize handling and storage. These priorities are not described in formal documents."],
                ["N3", "A fully-fledged priority management system is in place, based on process deadlines. This planning activity relies on formal documents, or dedicated meetings, but these have not been validated by an authority independent from the operating entity."],
                ["N4", "A fully-fledged priority management system is in place, based on process deadlines. This planning activity relies on formal documents, which have been validated by an authority independent from the operating entity."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [24, new Map([
            ["id", "61"],
            ["question", "Have measures been identified and implemented to protect subassemblies during certain production activities?"],
            ["recommandation", "Identify and implement measures to protect subassemblies.  → Hazard risks must be identified and protective measures implemented to avoid impacting the reliability of subassemblies: (1) Mechanical protection ; (2) Thermal protection ; (3) Protection from contaminants."],
            ["weight", "7,3"],
            ["levels", new Map([
                ["N1", "No particular measures to protect subassemblies are identified."],
                ["N2", "Measures to protect subassemblies are identified, but only partially applied in the various activities."],
                ["N3", "Measures to protect subassemblies are specified, and their application is verified. However, this specification is not updated on the basis of past data."],
                ["N4", "Measures to protect subassemblies are specified and their application is verified. This specification is based on past data from previous products, and on periodic analysis of observed anomalies."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [25, new Map([
            ["id", "66"],
            ["question", "Are the necessary means for special processes identified?"],
            ["recommandation", "Identify the necessary means for special processes. → The requirements for the qualification of process operations, including the associated equipment and personnel, must be specified."],
            ["weight", "13,1"],
            ["levels", new Map([
                ["N1", "The resources for special processes are not formally identified."],
                ["N2", "There are documents identifying the technical resources dedicated to special processes. The equipment and personnel associated with these processes are not defined."],
                ["N3", "The requirements for the qualification of special process operations, including the associated equipment and personnel, are specified. These specifications are not updated regularly."],
                ["N4", "The requirements for the qualification of the process operations, including the associated equipment and personnel, are specified. The documents identifying these requirements are regularly updated."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [26, new Map([
            ["id", "67"],
            ["question", "Identify the human resources for special processes?"],
            ["recommandation", "Identify the human resources for special processes.  → Special processes must be performed by qualified operators, and their skills must be continuously monitored."],
            ["weight", "11,7"],
            ["levels", new Map([
                ["N1", "Special processes are not performed by  qualified human resources."],
                ["N2", "Special processes are performed by qualified operators, but there is no regular monitoring of their skills."],
                ["N3", "Special processes are performed by qualified operators. And their skills are continuously monitored."],
                ["N4", "Special processes are performed by qualified operators, and their skills are continuously monitored. There is a plan to regularly update the necessary skills and ressources."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [27, new Map([
            ["id", "71"],
            ["question", "Is the documentation associated with the equipment or system strictly managed? Does it take account of all equipment upgrades?"],
            ["recommandation", "Manage the equipment or system documentation.  → Managing the documentation involves: (1) Recording and backing up product and process documents ;  (2) Training a group of workshop personnel in the management of technical documents ;  (3) Regularly updating the document inventory ; (4) Specifying technical documents for each process ; (5) Updating documents to take account of equipment upgrades ; (6) Submitting the documents, and their modifications, for validation ; (7) Making the process documents available, and usable, in the workshop."],
            ["weight", "15"],
            ["levels", new Map([
                ["N1", "There is no specific documentation on products or processes, and there is no provision for making specific documentation available."],
                ["N2", "There is specific documentation on products and processes, however, it is not always updated, and the validity of the documents is not analysed."],
                ["N3", "There is specific documentation on products and processes. It is periodically checked to verify that it is up to date, but the validity of the documents used is not analysed."],
                ["N4", "There is specific documentation on products and processes. It is periodically checked to verify that it is up to date, and the validity of the documents used is analysed. Strict procedures are followed for indexing and preserving the documentation, and for making it available to users."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [28, new Map([
            ["id", "73"],
            ["question", "What steps are taken to ensure that test/inspection equipment and software are compatible with requirements?"],
            ["recommandation", "Make sure that test/inspection equipment and software are compatible with requirements.  → Inspection, measurement and test equipment is used to ensure that the measurement uncertainty is known and is compatible with the required measurement accuracy. The test software, or the comparison references used for inspection purposes, are checked before being brought into service in order to demonstrate that they are capable of verifying the acceptability of the product. The equipment covered by this recommendation includes tools (e.g. drills), test equipment (e.g. harmonization benches), and test apparatus (e.g. ovens), etc."],
            ["weight", "9,6"],
            ["levels", new Map([
                ["N1", "There is no procedure that defines how to check that inspection, measurement and testing equipment is compatible with requirements."],
                ["N2", "There are procedures defining how to check that inspection, measurement and testing equipment is compatible with requirements, but no checks are performed to ensure that they are used."],
                ["N3", "The inspection, measurement and testing equipment is used to ensure that the measurement uncertainty is known and is compatible with the required measurement accuracy. However, inspection equipment is not checked before being brought into service."],
                ["N4", "The inspection, measurement and testing equipment is used to ensure that the measurement uncertainty is known and is compatible with the required measurement accuracy. The test software, or the comparison references used for inspection purposes, are checked before being brought into service in order to demonstrate that they are capable of verifying the acceptability of the product. If systematic verification before use is industrially impossible, a metrology procedure is used (with a validation period and definition of the equipment class)."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [29, new Map([
            ["id", "74"],
            ["question", "How is the environment of inspection, measurement and testing equipment controlled?"],
            ["recommandation", "Control the environment of inspection, measurement and testing equipment.  → The handling, preservation and storage of inspection and measurement equipment ensure that accuracy and usability are maintained. Inspection, measurement and testing equipment, including the test benches and test software, must be protected against handling operations that might invalidate the calibration settings."],
            ["weight", "7,9"],
            ["levels", new Map([
                ["N1", "The environment of inspection, measurement and testing equipment is not taken into account."],
                ["N2", "Inspection, measurement and testing equipment is protected against potential hazards that might damage it."],
                ["N3", "Inspection, measurement and testing equipment is protected against potential hazards that might damage it, and against handling operations that might invalidate the calibration settings. However, the handling, preservation and storage of inspection equipment are not defined by strict procedures."],
                ["N4", "Inspection, measurement and testing equipment is protected against potential hazards that might damage it, and against handling operations that might invalidate the calibration settings. The handling, preservation and storage of inspection equipment are defined by strict procedures, which are applied by the operators."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [30, new Map([
            ["id", "75"],
            ["question", "How is the workplace environment controlled? (Cleanliness, temperature and humidity)"],
            ["recommandation", "Control the workplace environme nt.  → The workplace environment is important for the quality of the product: appropriate limits must be specified for the ambient temperature and humidity. The level of cleanliness must be controlled. The layout of the workshop and the ergonomics of the workstation must be optimized."],
            ["weight", "9,6"],
            ["levels", new Map([
                ["N1", "The workshop layout and the workplace environment are not fully suited to the product or the environment is not controlled."],
                ["N2", "The workstations are adapted to the specific needs of the product. The work environment is controlled (cleanliness/temperature/humidity)."],
                ["N3", "The workstations are adapted to the specific needs of the product. The work environment is controlled and periodically verified (cleanliness/temperature/humidity)."],
                ["N4", "The workstations are adapted to the specific needs of the product. The work environment is controlled and  monitored (cleanliness/temperature/humidity). The workshop layout is optimized with the aim of improving product quality."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [31, new Map([
            ["id", "77"],
            ["question", "How are changes to manufacturing processes managed? ; Which changes are notified to the customer? ; Is there a requalification plan according to the nature of the change?"],
            ["recommandation", "Manage changes to manufacturing processes.  →  There must be a clear list of people authorized to approve process changes. Changes that require customer acceptance before being applied must be identified in a document. Any change relating to the processes, production equipment, tools or programs must be documented and must trigger a procedure to control its application. Ensure that the results of process changes produce the desired effect, and that the changes have not impacted the quality of the product. The actions and tests required to qualify a new process, material or tool must be specified in a document."],
            ["weight", "13,9"],
            ["levels", new Map([
                ["N1", "Process changes are implemented without being recorded; these modifications are not submitted for authorization."],
                ["N2", "Process changes are recorded and submitted for authorization. These changes are not documented, and they do not trigger a procedure to control their implementation."],
                ["N3", "Process changes are recorded; the people authorized to approve changes to production processes, including quality/reliability managers, are clearly designated. Changes that require customer acceptance before being applied are identified. Any change relating to the processes, production equipment, tools or programs is documented and follows a procedure to control its implementation. However, there is no systematic check to ensure that the results of process changes produce the desired effect and that the changes have not impacted the quality of the product (qualification)."],
                ["N4", "Process changes are recorded; the people authorized to approve changes to production processes, including quality/reliability managers, are clearly designated. Changes that require customer acceptance before being applied are identified. Any change relating to the processes, production equipment, tools or programs is documented and follows a procedure to control its implementation. Changes to processes, materials or production machinery give rise to requalification in accordance with a written procedure approved by Quality."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [32, new Map([
            ["id", "78"],
            ["question", "Are handling and inter-site transport methods defined?"],
            ["recommandation", "Control handling methods.  → Product handling methods and means are provided to prevent damage or deterioration to the product and include: (1) Intersite transport procedures ; (2) Handling modes specific to each product."],
            ["weight", "8,8"],
            ["levels", new Map([
                ["N1", "Handling methods are not defined; there are no specific means to avoid deterioration during handling."],
                ["N2", "Handling methods are defined, but they are not product-specific."],
                ["N3", "Product-specific handling methods are defined, and specific means are made available to avoid any deterioration during handling. However, no checks are performed to ensure their application."],
                ["N4", "Product-specific handling methods are defined, and the associated means prevent any deterioration to the product during handling. Checks are performed to ensure their application."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [33, new Map([
            ["id", "79"],
            ["question", "How are production machines, tools and programmable devices inspected before use?"],
            ["recommandation", "Inspect production machines, tools and programmable devices before use.  → To avoid damaging the equipment, it is important to check, before use, that the production machines (test benches, ovens, vibrators, etc.), tools (torque screwdrivers, etc.) and programmable devices (numerical control machines, software programming devices used on test benches, etc.) are suited to the product, and that the parameters conform to the specifications. This prior inspection activity must be described in written procedures."],
            ["weight", "10,5"],
            ["levels", new Map([
                ["N1", "Production machines, tools and programmable devices are not inspected and validated before use."],
                ["N2", "Production machines, tools and programmable devices are inspected before use, but not all these inspections are formalized."],
                ["N3", "Production machines, tools and programmable devices are inspected before use. These inspections are covered by written procedures."],
                ["N4", "Production machines, tools and programmable devices are inspected before use. These inspections are covered by written procedures. The results of these inspections are recorded."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [34, new Map([
            ["id", "80"],
            ["question", "How are handling, storage, packaging and preservation operations controlled?"],
            ["recommandation", "Control handling, storage, packaging and preservation operations.  → For each production step, and in accordance with the manufacturer recommendations and/or the applicable regulations, there must be a procedure covering the specific requirements for: (1) Cleaning ; (2) Prevention, detection and removal of foreign bodies ; (3) Handling of sensitive products ; (4) Marking and labelling, including safety marking ; (5) Control of shelf life and stock rotation ; (6)  Hazardous materials. Establish specific management procedures for perishables. Eliminate all expired or unidentified products. Suggest criteria for evaluating and analysing the quality of storage conditions. List and analyse failures due to lack of quality in storage."],
            ["weight", "6,5"],
            ["levels", new Map([
                ["N1", "Handling, storage, packaging and preservation conditions are not codified; the execution of these operations is not perfectly controlled."],
                ["N2", "Handling, storage, packaging and preservation conditions are codified; they give rise to procedures that can be adapted to all products. The execution of these operations is not specific to any one product."],
                ["N3", "Handling, storage, packaging and preservation conditions are codified; they use ready made procedures after checking that they are adapted to the specific needs of the product, or give rise to procedures that are specific to each product."],
                ["N4", "Handling, storage, packaging and preservation conditions are codified; they  use ready made procedures after checking that they are adapted to the specific needs of the product, or give rise to procedures that are specific to each product. Considerations such as expiry dates, sensitivity of products to stress, and the hazardousness of products are also codified and applied."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [35, new Map([
            ["id", "81"],
            ["question", "How are special processes controlled? ;  Which documents describe these processes, and how are they updated? ; How are special processes qualified?"],
            ["recommandation", "Control special processes.  → Special processes are processes for which the results cannot be fully verified retrospectively by inspecting or testing the product, and for which the consequences of defective implementation will not appear until the product is used. Examples include gluing, soldering, brazing, heat treatment, and surface treatment. The following points must be taken into account: (1) The special processes to be implemented must be identified. ; (2) The supplier must check that all special process parameters (e.g. materials, personnel, procedures and software) produce satisfactory results. ; (3) The supplier must identify and document significant operations and process parameters to be controlled. ; (4) Any change to these operations and parameters must be described in a proposal justifying the change and guaranteeing that it does not produce any harmful effects for the outcome of the process. ; (5) The supplier must verify special processes by producing one or more typical parts under the conditions defined for the phase. ; (6) Special processes or subcontracted processes must be qualified before use. ; (7) The supplier must keep qualified special processes up to date."],
            ["weight", "14,4"],
            ["levels", new Map([
                ["N1", "Special processes are not identified."],
                ["N2", "Special processes are identified. The parameters of these processes (materials, personnel, procedures and software) are evaluated. However, these processes are not documented, or not defined by strict procedures."],
                ["N3", "Special processes are identified. The parameters of these processes (materials, personnel, procedures and software) are evaluated. The significant operations and the parameters of the process to be controlled in production have been identified and documented. Any change to these operations and parameters is described in a proposal justifying the change and guaranteeing that it does not produce any harmful effects for the result of the process. However, the special processes have not been verified by producing one or more typical parts under controlled conditions."],
                ["N4", "Same criteria as Level 3, plus: Checks are performed to ensure that all the special processes parameters (e.g. materials, personnel, procedures and software) produce the expected results. Special processes are verified by producing one or more typical parts under controlled conditions. Special processes (whether subcontracted or otherwise) are qualified before use and kept up to date."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [36, new Map([
            ["id", "82"],
            ["question", "How are services and fluids controlled in the work environment?"],
            ["recommandation", "Control services and fluids in the work environment.  → Services and supplies such as water, compressed air, electricity and chemicals used must be controlled and verified regularly to ensure that their effect on the process remains constant."],
            ["weight", "10,1"],
            ["levels", new Map([
                ["N1", "Services and supplies such as water, compressed air, electricity and chemicals are not verified."],
                ["N2", "Services and supplies such as water, compressed air, electricity and chemicals are verified occasionally and when a failure occurs (see ISO 14000)."],
                ["N3", "Services and supplies such as water, compressed air, electricity and chemicals are controlled and verified periodically to ensure that their effect on the process remains constant."],
                ["N4", "Services and supplies such as water, compressed air, electricity and chemicals are controlled and verified continuously to ensure that their effect on the process remains constant."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [37, new Map([
            ["id", "88"],
            ["question", "Is there a self-inspection by the operator at the end of each production process? ;  Is it instruction-based? ; Is the inspection result recorded?"],
            ["recommandation", "Implement self-inspection by the operator at the end of each production process.  → Self-inspection by the operator, at the end of each process step, helps to filter out human errors that might jeopardize the reliability of the subassembly. The self-inspection procedure, usually based on a visual inspection of parts in production, is described in the operation instructions and in the Control Plan. The result of this inspection is recorded for batch traceability."],
            ["weight", "5,3"],
            ["levels", new Map([
                ["N1", "There is no systematic self-inspection by the operator at the end of each production process."],
                ["N2", "Self-inspection is performed by the operator at the end of each production process. However, it is not described in any formal document."],
                ["N3", "Self-inspection is performed by the operator at the end of each production process. This is done in accordance with a predefined protocol formalized in a document. However, this document has not been validated by an independent authority."],
                ["N4", "Self-inspection is performed by the operator at the end of each production process. This is done in accordance with a predefined protocol formalized in a document. This document has been validated by an independent authority. The inspection result is recorded."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [38, new Map([
            ["id", "91"],
            ["question", "Are specific ESD protections put in place for components and subassemblies during handling and storage?"],
            ["recommandation", "Implement ESD protections for components and subassemblies during handling and storage.  → ESD protections for components and subassemblies include: (1) The grounding (earthing) of machines, tables, shelving, chairs and trolleys ; (2) The incoming inspection of conductive shoes and wristbands for the operators concerned ; (3) The connection of anti-ESD wristbands for operators ; (4) The use of ionizers, if necessary ; (5) The use of antistatic bags for board storage."],
            ["weight", "26"],
            ["levels", new Map([
                ["N1", "Protection against ESD is not addressed."],
                ["N2", "Protection against ESD is handled by non-formalized rules and practices."],
                ["N3", "Protection against ESD is handled by validated procedures/instructions that define practices known to protect subassemblies. However, there is no external verification of the application of these rules (dedicated quality audits)."],
                ["N4", "Protection of components and subassemblies against ESD is handled by validated procedures/instructions, which are monitored through dedicated internal audits"],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [39, new Map([
            ["id", "92"],
            ["question", "Is there a testing tool self-test to detect any anomalies before use on the subassembly?"],
            ["recommandation", "Perform periodic checks on production system inspection tools.  → A number of production system parameters (temperature, dimensions, time, etc.) need to be controlled. Inspection tools (probes, sensors, detectors, micrometres, confocal microscopes, etc.) must be calibrated periodically in accordance with a set procedure, and, for certain critical tools, measurement repeatability and reproducibility tests are required, incorporating the operator factor."],
            ["weight", "4,9"],
            ["levels", new Map([
                ["N1", "There is no periodic verification of production system inspection tools."],
                ["N2", "Tools and instruments used to inspect production systems are verified occasionally, but without following a formal verification plan."],
                ["N3", "Tools and instruments used to inspect production systems are periodically calibrated. There is evidence of these calibrations (records, labels). The calibration procedure is formalized in documents. However, the reproducibility and repeatability of critical measurements are not verified."],
                ["N4", "Tools and instruments used to inspect production systems are periodically verified. The calibration procedure is formalized in documents, which have been validated by an authority independent from the operating entity. The reproducibility and repeatability of critical measurements are verified periodically."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [40, new Map([
            ["id", "94"],
            ["question", "Is there a testing tool self-test to detect any anomalies before use on the subassembly?"],
            ["recommandation", "Implement testing tool self-tests to detect any anomalies.  → Implement testing tool self-tests (built-in tests performed by the test equipment itself) to detect any anomalies. Reference units of known validity can be used for this self-test. The self-test is generally run during tester setup (with verifications during changes of operator or product, etc.) No test can be done if the self-test is not conclusive, unless there is a tracked waiver for the subassembly under test (i.e. authorization to conduct the test, but using markings and a signed tracking sheet that must constantly accompany the subassembly thereafter)."],
            ["weight", "5,1"],
            ["levels", new Map([
                ["N1", "No self-test is implemented on testing tools"],
                ["N2", "A self-test is implemented on testing tools. It runs automatically, but there is no formal document or study to determine its effectiveness and limitations."],
                ["N3", "A self-test is implemented on testing tools. This self-test is described in documents that are used to determine the procedure and the degree of effectiveness. But these documents have not been validated by an authority independent from the operating entity."],
                ["N4", "A self-test is implemented on testing tools. This self-test is described in documents that are used to determine the procedure and the degree of effectiveness. These documents have been validated by an authority independent from the operating entity."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [41, new Map([
            ["id", "98"],
            ["question", "Are detailed instructions available for each production process? ; Are these instructions available online? ; Are help documents permanently visible to the operator?"],
            ["recommandation", "Provide detailed instructions for each production process.  → Reliability depends on the reproducibility of production operations (screen-printing, component mounting, reflow, cleaning, repair, masking, varnishing, etc.). Each of these operations must be clearly described in an instruction that defines the actions to be performed by the operator step-by-step. These instructions must be easily accessible on the production line, and should even, where appropriate, be printed on help documents permanently visible to the operator. These instructions must be constantly updated on the basis of internal or external quality audits."],
            ["weight", "12"],
            ["levels", new Map([
                ["N1", "There are no instructions describing the actions to be performed by each operator."],
                ["N2", "There is an instruction for each production operation, but its update procedure is not quality controlled, or it has not been validated by an independent authority, or is not easily accessible to the operator."],
                ["N3", "There is an instruction for each production operation. It is easily accessible to the operator and has been validated by an independent authority, but its update procedure is not quality controlled (internal audits)."],
                ["N4", "There is an instruction for each production operation. It is easily accessible to the operator and has been validated by an independent authority. Its update procedure is quality controlled (internal audits) and only the latest version is available."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [42, new Map([
            ["id", "99"],
            ["question", "Is there a procedure for identifying expired items/consumables and withdrawing them from stock (or reforming them)?"],
            ["recommandation", "Implement a procedure to prevent items/consumables that are expired or due to be scrapped being used in production.  → The use of expired consumables must be rendered impossible. The method of prevention is based on labelling, to identify the expiry date of the material, or on recording the date in the system, or on both. It is the responsibility of the storekeeper to check the date, and there must be a mandatory instruction to this effect. Preferably, the system will alert the storekeeper to withdraw the material/item before the date is exceeded, and will block the use of the batch. For the particular case of components that need to be reconditioned or reformed after a given storage time (e.g. electrolytic capacitors), there must be a corresponding procedure, and this action must be tracked in the stock database."],
            ["weight", "6,4"],
            ["levels", new Map([
                ["N1", "There is no procedure describing how to manage consumables that are out of date, or need to be reconditioned or reformed."],
                ["N2", "There is a procedure describing how to manage consumables that are out of date, or need to be reconditioned or reformed, but the labelling or signalling of expiry dates is either non-existent or very sporadic."],
                ["N3", "The expiry dates of consumables and, where applicable, the reconditioning or reforming date are correctly managed and identified by labelling, and/or via the system. The usage instructions clearly describe how to manage these dates, but these documents have not been validated by an authority independent from the operating entity."],
                ["N4", "The expiry dates of consumables – and, where applicable, the reconditioning or reforming dates – are correctly managed and identified, both by labelling and via the system. The usage instructions clearly describe how to manage these dates, and these documents are validated by an authority independent from the operating entity."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [43, new Map([
            ["id", "100"],
            ["question", "Are test monitoring indicators processed in real time in order to avoid damage to the subassembly if an anomaly occurs?"],
            ["recommandation", "Implement real-time processing of test monitoring indicators.  → The use of test monitoring indicators makes it possible to intervene as soon as an anomaly occurs: (1) An alarm is initiated on detection of an anomaly ; (2) The current activity is suspended if the anomaly is considered serious (to avoid stress to the subassembly) ; (3) The anomaly is addressed and corrected before restarting or resuming the activity ; (4) If possible (if volumes are sufficient), a minimum test rate is defined, below which the result is considered abnormal."],
            ["weight", "4,7"],
            ["levels", new Map([
                ["N1", "There are no test monitoring indicators."],
                ["N2", "There are a number of indicators used to identify any anomaly occurring during the test. However, indicators are not part of a formal plan and/or they are not processed until later."],
                ["N3", "There are a number of indicators used to identify any anomaly occurring during the test, and the processing of these indicators makes it possible to intervene as soon as an anomaly occurs. There are documents that formally describe how these indicators, and the resulting actions, are managed. However, the relevant data has not been validated by an authority independent from the operating entity."],
                ["N4", "There are a number of indicators used to identify any anomaly occurring during the test, and the processing of these indicators makes it possible to intervene as soon as an anomaly occurs. There are documents that formally describe how these indicators, and the resulting actions, are managed. Additionally, these documents have been validated by an authority independent from the operating entity."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [44, new Map([
            ["id", "113"],
            ["question", "Are records produced and kept to prove that the product has been inspected and/or tested in accordance with defined criteria? Do the records identify the person who performed the inspections?"],
            ["recommandation", "Keep inspection and test records.  → Records must be established and kept proving that the product has been inspected and/or tested in accordance with the defined criteria. The records must identify the person who performed the inspections and released the product. Test records must indicate the measured values when they are required by the specification or by the acceptance plan. If specified, the supplier must demonstrate the qualification of the product."],
            ["weight", "5,3"],
            ["levels", new Map([
                ["N1", "Records of tests and inspections are established but not kept."],
                ["N2", "Records of tests and inspections are established and kept, but do not identify the source of the inspection (persons, machines)."],
                ["N3", "Records of tests and inspections are established and kept and identify the source of the inspection (persons, machines)."],
                ["N4", "The inspection file contains: (1) The definition of the acceptance or rejection criteria, supplemented as needed by photographs of acceptable/unacceptable defects for visual inspection ; (2) The inspection and testing sequence to be performed ; (3) The inspection results ; (4 The list of specific and non-specific inspection instruments ; (5) The documents associated with the specific inspection instruments, pertaining to their design, production, validation, management, use and maintenance."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [45, new Map([
            ["id", "114"],
            ["question", "Is there an inspection file containing the acceptance criteria, the inspection and testing sequence, the inspection records, and the list of specific and non-specific inspection instruments?"],
            ["recommandation", "Maintain an inspection file.  → The inspection file must contain: (1) The acceptance and rejection criteria ; (2) A sequential list of test and inspection operations to be performed ; (3) The inspection results ; (4) A list of specific and non-specific inspection instruments ; (5) The documents associated with the specific inspection instruments, pertaining to their design, production, validation, management, use and maintenance."],
            ["weight", "5,7"],
            ["levels", new Map([
                ["N1", "There is no inspection file."],
                ["N2", "The inspection file is limited to the definition of the acceptance or rejection criteria."],
                ["N3", "The inspection file defines acceptance or rejection criteria, as well as the list of operations to be performed. It proposes documents for recording inspection results."],
                ["N4", "The inspection file contains: (1) The definition of the acceptance or rejection criteria, supplemented as needed by photographs of acceptable/unacceptable defects for visual inspection ; (2) The inspection and testing sequence to be performed ; (3) The inspection results ; (4 The list of specific and non-specific inspection instruments ; (5) The documents associated with the specific inspection instruments, pertaining to their design, production, validation, management, use and maintenance."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [46, new Map([
            ["id", "116"],
            ["question", "What information is described in the nonconformity reports?"],
            ["recommandation", "Control the quality of data in nonconformity reports.  → Nonconformity reports must specify: (1) The product identification ; (2) The description of the nonconformity ; (3) The cause of the nonconformity ; (4) The actions taken to avoid recurrence of the nonconformity ; (5) The rework or repairs, if necessary ;  (6) The inspection of the characteristics affected by the rework or repairs ; (7) The final decision."],
            ["weight", "11,1"],
            ["levels", new Map([
                ["N1", "There are no specific nonconformity documents."],
                ["N2", "The nonconformity documents serve only to identify nonconforming products."],
                ["N3", "The nonconformity documents specify the product identification, the description of the nonconformity, and the cause of the nonconformity. However, no formal actions are defined to avoid recurrence of the nonconformity, specify any rework or repairs required, and inspect the characteristics affected by the rework or repairs."],
                ["N4", "The nonconformity documents specify the product identification, the description of the nonconformity, and the cause of the nonconformity. Formal actions are defined to avoid recurrence of the nonconformity, specify any rework or repairs required, and inspect the characteristics affected by the rework or repairs."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [47, new Map([
            ["id", "121"],
            ["question", "Are the machine parameters checked before each use of a production machine? ;  Is this check described in the corresponding machine instructions?"],
            ["recommandation", "Check the machine parameters every time before using a production machine on a board or a subassembly (Setup).  → "],
            ["weight", "4,7"],
            ["levels", new Map([
                ["N1", "There is no evidence that machine parameters are checked methodically during critical changeovers."],
                ["N2", "Some machine parameters are checked during critical changeovers, but these checks are not exhaustive and are not covered by a formal document."],
                ["N3", "Machine parameters are systematically checked during critical changeovers. These checks are described in a machine instruction. However, this document is not duly validated, or the checks are not recorded."],
                ["N4", "Machine parameters are systematically checked during critical changeovers. These controls are described in a machine instruction, which is validated by an independent authority. The parameter checks are recorded, and the subsequent anomaly analysis can lead to corrective or preventive actions."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [48, new Map([
            ["id", "128"],
            ["question", "Are training, assessment and other actions performed to maintain the skills of operators and technicians? ;  Are process changes accompanied by additional training? ;  How is operator or technician turnover managed?"],
            ["recommandation", "Maintain the skills of operators and technicians through continuous training and frequent assessment.  → Beyond initial training, and the certification of the operator/technician for the tasks entrusted to them, it is important to make sure that these skills are firmly rooted, and that they are updated in response to process changes. This can be monitored, and any necessary corrections made, by drawing on a range of actions: (1) Re-certification of the operator after a period of time that depends on the criticality of the operation in terms of quality and reliability ; (2) Training in new methods or processes ; (3) Internal audits conducted by Quality, and external audits conducted by independent services ; (4) Logging and analysis of nonconformities or customer feedback ; (5) Skills management within teams (e.g. preventing turnover)."],
            ["weight", "10"],
            ["levels", new Map([
                ["N1", "There is no plan in place to upgrade operator knowledge."],
                ["N2", "Operator skills are updated. However, this update is not described formally in documents."],
                ["N3", "Operator skills are updated. This update is covered by documents describing training plans and events that give rise to updates. However, these documents have not been validated, or there is no knowledge monitoring on the production line (quality audits)."],
                ["N4", "Operator skills are updated. This update is covered by documents describing training plans and events that give rise to updates. These documents have been validated by an authority independent from the operating entity. Knowledge is monitored through internal quality audits. Skills management for each position is constantly analysed."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [49, new Map([
            ["id", "138"],
            ["question", "Are checks performed to ensure that the correct embedded software is loaded, and are its version details recorded?"],
            ["recommandation", "Make sure that the correct embedded software is loaded, and record its version details.  → Make sure that the correct embedded software is loaded and, in particular, that it corresponds to the latest version for use on the subassembly. This identification information must be traceable for the rest of the process."],
            ["weight", "6,7"],
            ["levels", new Map([
                ["N1", "The embedded software that has been loaded is not identified."],
                ["N2", "After embedded software has been loaded into a hardware subassembly, an identifier is supplied for the loaded software, guaranteeing that it conforms to the subassembly. However, there is no document that precisely describes the format or recording of this identifier."],
                ["N3", "Every time embedded software is loaded, the operator is informed of the software version to be used. An identifier of the version to be used is supplied after the operation."],
                ["N4", "Every time embedded software is loaded, the operator is informed of the software version to be used. An identifier of the version to be used is supplied after the operation. Cross-checking is formalized."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [50, new Map([
            ["id", "139"],
            ["question", "Is preventive maintenance performed on the production systems? ; Is this maintenance monitored?"],
            ["recommandation", "Ensure that preventive maintenance is performed on the production systems and that it is monitored.  → Ensure that preventive maintenance is performed on the production systems and that it is monitored.  → "],
            ["weight", "5,9"],
            ["levels", new Map([
                ["N1", "Preventive maintenance of production systems is not monitored."],
                ["N2", "Preventive maintenance is performed on the production systems and is monitored. However there is no documented formal maintenance plan indicating the periodicity and the mandatory inspection points for this maintenance."],
                ["N3", "There is an effective preventive maintenance procedure in place for the production systems. It is monitored on the basis of a plan that lists all the mandatory inspection points and the periodicities of each action. There is no evidence of recent nonconformities being taken into account in the maintenance plan."],
                ["N4", "There is an effective maintenance procedure in place for the production systems. It is monitored on the basis of a plan that lists all the mandatory inspection points and the periodicities of each action. Additionally, recent nonconformities are taken into account in the preventive maintenance plan."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [51, new Map([
            ["id", "153"],
            ["question", "Is the conformity of purchased products checked against clearly defined specifications?"],
            ["recommandation", "Check the conformity of purchased products.  → Implement measures to verify purchased products, e.g.: (1) Examination of incoming products (components, PCBs, subassemblies, accessories) ; (2) Examination of the required documentation, including the supplier’s Certificate of Conformity, if specified ; (3) Inspection of incoming batches (critical characteristics). This incoming inspection is covered by dedicated specifications for each type of material or item purchased."],
            ["weight", "8,6"],
            ["levels", new Map([
                ["N1", "The conformity of purchased products is not verified."],
                ["N2", "The conformity of purchased products is verified only partially, by examining the batch documents."],
                ["N3", "The conformity of purchased products is verified by inspecting incoming products and examining the required documentation. These inspections are recorded. However, this incoming inspection is not covered by dedicated specifications for each type of material or item purchased."],
                ["N4", "The conformity of purchased products is verified by inspecting incoming batches and examining the required documentation, in accordance with clearly defined and validated specifications (dedicated to each type of item purchased). These inspections are recorded."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [52, new Map([
            ["id", "155"],
            ["question", "Have checks been done to ensure that the ESS procedure defined at the design stage is correctly applied?"],
            ["recommandation", "Check that the ESS procedure is correctly applied.  → It is important to ensure that the environmental stress screening (ESS) procedure defined at the design stage is correctly applied, and that the results are correctly recorded and are traceable. It is also important for corrective or preventive actions to be planned, in order to minimize the ESS failure rate. Finally, the team in charge of defining the ESS procedure must be given the necessary information to optimize this procedure."],
            ["weight", "9"],
            ["applicability", "This question is only relevant at board level for space"],
            ["levels", new Map([
                ["N1", "The ESS procedure defined at the design stage is not applied."],
                ["N2", "The ESS procedure defined at the design stage is applied, but there is no traceable record of the test results."],
                ["N3", "The ESS procedure defined at the design stage is applied; the results of the ESS test are recorded and traceable. ESS failures are analysed to assist possible corrective or preventive actions in production."],
                ["N4", "The ESS procedure defined at the design stage is applied; the results of the ESS test are recorded and traceable. ESS failures are analysed to assist possible corrective or preventive actions in production. Additionally, all of this information is communicated to the design team in charge of optimizing the ESS procedure."],
                ["NA", "Not Applicable"],
            ])]
        ])],
    ])],
    ["Integration into system", new Map([
        [0, new Map([
            ["id", "7"],
            ["question", "What process is used to collect data on technical events, to report anomalies, and to manage them?"],
            ["recommandation", " Implement corrective actions. → This recommendation deals with the implementation of corrective actions (the documentation aspect is dealt with in Recommendation 116). The following functions must be covered by a quality assurance procedure: (1) Processing customer complaints and product nonconformity reports ; (2) Searching for causes of nonconformity relating to the product, the process and the quality system, and recording the results of this search ; (3) Determining corrective and preventive actions required to eliminate causes of nonconformity ; (4) Applying resources to measure the efficacy of these corrective and preventive actions."],
            ["weight", "15,4"],
            ["levels", new Map([
                ["N1", ""],
                ["N2", ""],
                ["N3", ""],
                ["N4", ""],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [1, new Map([
            ["id", "8"],
            ["question", "Do the preventive action procedures include: (1) The use of diversified sources of information? ; (2) The definition of the steps to follow? ; (3) The criteria for triggering preventive actions and applying inspection procedures? ; (4) A preventive action follow-up review?"],
            ["recommandation", "Implement preventive actions. → Preventive action procedures include: (1) Using appropriate sources of information – such as processes and operations affecting product quality, waivers, audit results, quality records, maintenance reports and customer complaints – to detect, analyse and eliminate potential causes of nonconformity ; (2) The definition of appropriate steps to deal with any problem that requires preventive action ; (3) Triggering preventive actions and applying inspection procedures to make sure they produce the desired effect ; (4) Ensuring that relevant information on the actions implemented is submitted for management review."],
            ["weight", "15,6"],
            ["levels", new Map([
                ["N1", ""],
                ["N2", ""],
                ["N3", ""],
                ["N4", ""],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [2, new Map([
            ["id", "9"],
            ["question", "How is product traceability ensured?"],
            ["recommandation", "Ensure product traceability. → The system implemented must make it possible to: (1) Maintain the product identification throughout the life cycle ; (2) Know the history (definition file and changes) and final use (delivery, scrap) of all products ; (3) made from the same batch of raw material or belonging to the same production batch ; (4) Identify the elements that make up an assembly, and identify the higher assembly ; (5) Find sequential documentation on the production (manufacture, assembly, inspection) of a given product (e.g. configuration tracking sheet listing operations performed and anomalies observed). The traceability system must be capable of determining the configuration of the product ready for delivery, including any variance between the actual condition and the agreed/specified condition."],
            ["weight", "15,4"],
            ["levels", new Map([
                ["N1", ""],
                ["N2", ""],
                ["N3", ""],
                ["N4", ""],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [3, new Map([
            ["id", "10"],
            ["question", "Does the supplier control wrapping, packaging and marking processes to ensure compliance with specified requirements? Is there a list of equipment that requires packaging?"],
            ["recommandation", "Manage the packaging of systems and equipment. → The wrapping, packaging and marking processes must be controlled to ensure compliance with specified requirements. Define a list of equipment that requires packaging. Propose a way to manage packaging specific to particular products (dates, methods, duration). Periodically inspect packaging quality. Use appropriate product-specific packaging."],
            ["weight", "12,3"],
            ["levels", new Map([
                ["N1", "Product packaging is not defined, the materials used for this packaging are used depending on their availability. Information about packaging dates, management methods inspections to be carried out is not defined."],
                ["N2", "Standard packaging is used for the products. Information about the packaging is given.o specific inspection of the packaging."],
                ["N3", "Special product packaging is provided, and documentation is associated with it No specific inspection of the packaging."],
                ["N4", "Special product packaging is provided, and documentation is associated with it.specific regular inspection of the packaging is made  procedure regularly checks that periodic inspections are applied."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [4, new Map([
            ["id", "11"],
            ["question", "Are there any designated storage areas or premises? Are they adapted to prevent deterioration or damage to subassemblies? Are appropriate measures taken to enable reception and shipping in these areas?"],
            ["recommandation", "Manage the storage conditions for subassemblies. → Designated storage areas or premises must be adapted to prevent damage or deterioration to subassemblies. (1) Appropriate measures are taken to enable reception in these areas and shipment from them ; (2) The state of products in stock must be evaluated at appropriate intervals to detect any deterioration ; (3) The storage atmosphere must be controlled ; (4) Tailor positioning in storage ; (5) Organize periodic interventions (e.g. powering up) to maintain product characteristics in storage."],
            ["weight", "10,8"],
            ["levels", new Map([
                ["N1", "Product storage areas are not specific, the storage environment is not considered."],
                ["N2", "Product storage areas are not specific, the storage environment is controlled and adapted to the stored products."],
                ["N3", "Product storage areas are specific. The storage environment is controlled and adapted to the stored products. Storage positions are individually defined. Periodic actions are carried out to maintain product characteristics."],
                ["N4", "Product storage areas are specific. The storage environment is controlled and adapted to the stored products. Storage positions are individually defined. Periodic actions are carried out to maintain product characteristics. The condition of products in stock is regularly inspected, the stock is verified and storage conditions are regularly optimised."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [5, new Map([
            ["id", "12"],
            ["question", "Does the supplier take steps to maintain product quality after final testing and inspection? When specified in the contract, are these steps extended to include delivery for final use?"],
            ["recommandation", "Manage the delivery conditions for systems and equipment. → The supplier must take measures to protect the quality of the product after the final tests and inspections. When specified in the contract, this protection is extended to include delivery for final use. The supplier makes sure that the accompanying product documentation, as specified on the order, is present at the time of delivery and that it is protected against loss and damage."],
            ["weight", "17,5"],
            ["levels", new Map([
                ["N1", "Normal protections for products during delivery are not used"],
                ["N2", "Product quality protections are used during delivery to the customer. The supplier does not check that accompanying documents are present."],
                ["N3", "Product quality protections are used during delivery to the customer. The supplier does check that accompanying documents are present, but does not protect them against loss and deterioration."],
                ["N4", "The supplier takes measures to protect the product quality during delivery for its final use. He assures that the accompanying documentation for the product is present as specified at the time of the order, and that the documentation is protected against loss and deterioration."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [6, new Map([
            ["id", "13"],
            ["question", "How are the planned tests and inspections for a phase validated before moving on to the next phase?"],
            ["recommandation", "Validate the required tests and inspections before moving on to the next phase. → During the phase, the product must be inspected and tests must be carried out in accordance with the quality plan and/or written procedures. The product must remain blocked until the required inspections and tests are terminated, or until the necessary reports have been received and verified. Corrective actions must be carried out if applicable."],
            ["weight", "7,2"],
            ["levels", new Map([
                ["N1", "No inspection or test during the phase."],
                ["N2", "Inspections are carried out during the phase, but they are not formalised in the form of written procedures or quality plan."],
                ["N3", "Inspections are carried out during the phase and are formalised in the form of written procedures or a quality plan. These inspections and test are not always complete."],
                ["N4", "Inspections are carried out during the phase and are formalised in the form of written procedures or a quality plan. These inspections and tests are complete."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [7, new Map([
            ["id", "14"],
            ["question", "How is it ensured that all final tests and inspections are conducted in accordance with the control plan and the written procedures?"],
            ["recommandation", "Perform final tests and inspections. → The control plan must contain a “Final Tests and Inspections” chapter, describing the equipment, the general conditions and the references to the associated procedures. The acceptance criteria and the specific product requirements must be described in detail. These inspections must be based on an analysis (e.g. FMECA) of the history of failures encountered and customer feedback. Additionally, it is important for an independent inspector to check, prior to shipping, that: (1) All the activities specified in the control plan have been completed satisfactorily ; (2) The associated data and documentation are available and accepted."],
            ["weight", "7,9"],
            ["levels", new Map([
                ["N1", "No final inspection or test."],
                ["N2", "Final inspections and tests are carried out, but they are not described in strict procedures or in a quality plan."],
                ["N3", "Final inspections and tests are carried out, They are described in strict procedures or in a quality plan. Application of these inspections and tests is not verified and validated."],
                ["N4", "Final inspections and tests are carried out in accordance with the quality plan and/or written procedures. The quality plan and/or procedures for final inspections and tests require that all specified inspections and tests, including those specified for product reception or during its manufacturing, are done and that the results are conforming with the requirements. It is checked before shipment that: All activities specified in the quality plan and/or in written procedures have been satisfactorily accomplished Data and the associated documentation are available (follower sheet type document that records the configuration, operations carried out and observed anomalies) and accepted."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [8, new Map([
            ["id", "15"],
            ["question", "Are appropriate tests and inspections carried out on all incoming parts or materials before use, in accordance with a specification?"],
            ["recommandation", "Perform tests and inspections specific to the reception of materials and parts. → Make sure that purchased parts and materials are not used or implemented until they have been inspected or until their conformity to the specified requirements has been verified in some other way. The verification of conformity to the specified requirements must be performed in accordance with the quality plan and/or the written procedures. Inspections carried out on subcontractor premises, and proofs of conformity supplied, must be taken into account in determining the extent and nature of the inspections to be performed on reception. When, for reasons of urgency, the incoming product is released before being verified, it must be identified and the decision to release recorded."],
            ["weight", "6,7"],
            ["levels", new Map([
                ["N1", "No inspection or test on reception."],
                ["N2", "Inspections and tests are carried out on reception, but no procedure specific to these actions is described."],
                ["N3", "Conformity with specified requirements is verified in accordance with a quality plan and/or written procedures. There is no monitoring of products allowed to enter without inspections in case of urgency."],
                ["N4", "Conformity with specified requirements is verified in accordance with a quality plan and/or written procedures. Inspections carried out in subcontractor premises and proofs of conformity supplied are taken into account to determine the importance and nature of inspections to be carried out on reception. When the entering product is released before it has been verified for reasons of urgency, it is identified and this release is recorded. "],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [9, new Map([
            ["id", "30"],
            ["question", "Is the description of accepted nonconformities, or of repairs performed, recorded to indicate the real condition of the product?"],
            ["recommandation", "Define the degree of nonconformity. → The description of the accepted nonconformity, or of repairs performed, is recorded to indicate the real condition of the product. Written procedures are kept up to date, defining, as a minimum: (1) How nonconformities are classified, and how the use of nonconforming components in finished products is monitored ; (2) The formal authorization process and scope of application for personnel authorizing the use of replacement materials and/or nonconforming products (waiver procedures) ; (3) The process for managing scrapped parts."],
            ["weight", "10,3"],
            ["levels", new Map([
                ["N1", "There is no information about the degree of nonconformity of the product."],
                ["N2", "The indication of the degree of nonconformity of the products is only used for information, its purpose is not to make a decision about whether or not to use the nonconforming equipment."],
                ["N3", "The description of the accepted nonconformity or the repairs made is recorded to indicate the real condition of the product. Written procedures define the process for classification of nonconformities and control over the use of nonconforming components in finished products. The process for authorisation of personnel to use replacement materials and/or nonconforming products is not formalised."],
                ["N4", "The description of the accepted nonconformity or the repairs made is recorded to indicate the real condition of the product. Written procedures are kept up to date defining: The process for classification of nonconformities and control over the use of nonconforming components in finished products. The formal process for authorisation and the application field for personnel authorising the use of replacement materials and/or nonconforming products. The process for control over scrapped parts. "],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [10, new Map([
            ["id", "32"],
            ["question", "Which procedure defines the necessary resources for the testing and inspection of the product?"],
            ["recommandation", "Define the necessary resources for the testing and inspection of the product. → The product testing and inspection procedures must specify the resources required (human and technical), the methods to be implemented, the acceptance criteria, and the methods for recording the results. These procedures must also define training requirements and, if necessary, specify operator qualification requirements."],
            ["weight", "11,6"],
            ["levels", new Map([
                ["N1", "No product inspection or test procedure has been specified, there is no description of methods and acceptance criteria."],
                ["N2", "Product inspection or test procedures are specified. Acceptance methods and criteria are described. The results are not kept."],
                ["N3", "Product inspection or test procedures are specified. Acceptance methods and criteria are described. Results are not recorded and used for feedback from operations. Procedures also describe training and qualification of operators."],
                ["N4", "Product inspection or test procedures are specified. Acceptance methods and criteria are described. Results are recorded and used for feedback from operations. Procedures also describe training and qualification of operators."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [11, new Map([
            ["id", "35"],
            ["question", "Are there any documents for performing incoming inspections on supplies?"],
            ["recommandation", "Provide documents for performing incoming inspections on subassembly supplies. → Procurement documents must include, where applicable: (1) The type, the category, and any other precise identification ; (2) The title, or any other formal identification, and the applicable version of specifications, drawings, process requirements, inspection instructions and other relevant technical data ; (3) The title, identifier and version of the applicable quality system standard ; (4) The list of procurement documents reviewed and approved prior to distribution as conforming to the requirements. The documented procurement requirements must include, where applicable: (1) The tests, examinations, inspections and acceptance conditions imposed by the customer, and any corresponding instructions or requirements ; (2) The requirements relating to specimens (method of production, number, storage conditions) for inspections, investigations or audits ; (3) The requirements relating to the notification of anomalies, to changes in the definition, and to the approval of their processing. Customer requirements must be passed on to suppliers."],
            ["weight", "8,8"],
            ["levels", new Map([
                ["N1", "No documentation specific to the incoming inspection on supplies."],
                ["N2", "Product identification documents are the only documents used for the incoming inspection on supplies."],
                ["N3", "Purchasing documents include a precise identification, the applicable edition of specifications, drawings, requirements in terms of process, inspection instructions and other relevant technical data, the title, identifier and edition of the quality system standard to be applied, purchasing documents reviewed and approved before distribution, to assure that they satisfy the requirements."],
                ["N4", "Purchasing documents include a precise identification, the applicable edition of specifications, drawings, requirements in terms of process, inspection instructions and other relevant technical data, the title, identifier and edition of the quality system standard to be applied, purchasing documents reviewed and approved before distribution, to assure that they satisfy the requirements. Documented procurement requirements also include: Tests, examinations, inspections and customer acceptance conditions and any relevant instruction or requirements, requirements related to specimens (production method, number, storage conditions) for inspections, investigations or audits, requirements related to notification of anomalies, changes to the definition and approval of their processing . The customer's requirements are forwarded to suppliers."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [12, new Map([
            ["id", "37"],
            ["question", "Are sensitive manufacturing processes entrusted to trained and experienced personnel?"],
            ["recommandation", "Make sure that operators and technicians in charge of sensitive operations are trained and sufficiently experienced. → Certain steps in the manufacturing process require a particular level of training and experience. Certain types of stress can impact equipment reliability in a way that cannot be detected by quality controls or final testing. This is the case with the polymerization or drying steps, for example, where the maximum temperature and duration must be kept under control. Or with the soldering of components on the board (screen-printing in particular). Or with the X-ray inspection of boards. Or with quality inspection (acceptance criteria). Or with electrical testing, where special care is needed  to apply ESD protections, etc. This requirement must be covered by a training and certification plan. Records will be kept of these training courses."],
            ["weight", "5,2"],
            ["levels", new Map([
                ["N1", "No verification of the test coverage rate during burn-in is done."],
                ["N2", "The test coverage rate during burn-in was verified when it was set up. No additional verifications have been done with regard to possible changes (new technologies, etc.)."],
                ["N3", "The test coverage rate during burn-in is verified. A document describes changes requiring a verification and the procedure to be implemented."],
                ["N4", "The test coverage rate during burn-in is verified. A document describes changes requiring a verification and the procedure to be implemented. This entire document has been validated by an authority independent from the operating entity."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [13, new Map([
            ["id", "47"],
            ["question", "Are there any written procedures for checking that purchased assemblies and subassemblies meet the specified requirements?"],
            ["recommandation", "Establish procedures to verify that purchased assemblies and subassemblies meet the specified requirements. → Establish written procedures to ensure that all purchased assemblies and subassemblies conform to the specified requirements. Define the terms and conditions of supply and the responsibilities of all concerned. Check that procedures are applied."],
            ["weight", "10,6"],
            ["levels", new Map([
                ["N1", "No procedures to assure that products are conforming with specified requirements. Nothing formal."],
                ["N2", "Generic procedures (all products) are defined to assure conformity of the purchased product. There is a formal proof: e.g. note."],
                ["N3", "Procedures specific to the product are defined in a validated plan to assure conformity of the purchased product. Procurement conditions and the responsibilities of persons doing the work are not described."],
                ["N4", "Procedures specific to the product are defined in a validated plan to assure conformity of the purchased product. Procurement conditions and the responsibilities of persons doing the work are described. Proofs that these procedures have been evaluated exist. "],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [14, new Map([
            ["id", "49"],
            ["question", "How are nonconformities analysed? Are there any procedures for processing nonconforming products?"],
            ["recommandation", "Manage the processing of nonconformities. → The processing of nonconformities must be described in written procedures. These procedures must provide for the possibility of nonconforming products being: (1) Reworked to satisfy the specified requirements ; (2) Accepted by waiver, with or without repair ; (3) Declassified for other applications ; (4) Rejected or scrapped. If specified by the contract, the proposal to use or repair a nonconforming product may be submitted to the customer. The repaired and/or reworked product is inspected again, in accordance with the requirements of the quality plan and/or written procedures. The responsibility for examining nonconforming products and for deciding on their processing must be defined."],
            ["weight", "13,6"],
            ["levels", new Map([
                ["N1", "The nonconforming product is not examined."],
                ["N2", "The nonconforming product is examined and described but these actions are carried out with no written procedures."],
                ["N3", "The nonconforming product is examined and described according to written procedures, but they do not allow for product modifications or acceptance without modification."],
                ["N4", "The nonconforming product is examined and described according to written procedures. These specify that the product may be: Reworked to satisfy specified requirements. Accepted by waiver with or without repair. Declassified for other applications. Rejected or scrapped. If required by the contract, the proposal for use or repair of the non-conforming product is submitted to the customer. The repaired and/or reworked product is once again inspected in accordance with the requirements in the quality plan and/or the written procedures. "],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [15, new Map([
            ["id", "66"],
            ["question", "Are the necessary means for special processes identified?"],
            ["recommandation", "Identify the necessary means for special processes. → The requirements for the qualification of process operations, including the associated equipment and personnel, must be specified."],
            ["weight", "13,1"],
            ["levels", new Map([
                ["N1", "Means concerning special processes are not formally identified."],
                ["N2", "Documents identify technical means dedicated to special processes. Equipment and personnel associated with these processes are not defined."],
                ["N3", "Process operation qualification requirements, including associated equipment and personnel, are specified."],
                ["N4", "Process operation qualification requirements, including associated equipment and personnel, are specified. Documents identifying these requirements are regularly updated."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [16, new Map([
            ["id", "67"],
            ["question", "Are human resources concerning special processes managed?"],
            ["recommandation", "Identify the human resources for special processes. → Special processes must be performed by qualified operators, and their skills must be continuously monitored."],
            ["weight", "11,7"],
            ["levels", new Map([
                ["N1", "Special processes are not associated with qualified human resources."],
                ["N2", "Special processes are done by trained operators, but there is no regular check on their skills."],
                ["N3", "Special processes are done by qualified operators, or they are continuously monitored."],
                ["N4", "Special processes are done by qualified operators and they are continuously monitored."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [17, new Map([
            ["id", "71"],
            ["question", "Is the documentation associated with the equipment or system strictly managed? Does it take account of all equipment upgrades?"],
            ["recommandation", "Manage the equipment or system documentation. → Managing the documentation involves: (1) Recording and backing up product and process documents ; (2) Training a group of workshop personnel in the management of technical documents ; (3) Regularly updating the document inventory ; (4) Specifying technical documents for each process ; (5) Updating documents to take account of equipment upgrades ; (6) Submitting the documents, and their modifications, for validation  ; (7) Making the process documents available, and usable, in the workshop."],
            ["weight", "12,2"],
            ["levels", new Map([
                ["N1", "No documentation specific to the products or processes, there are no plans to provide special documentation."],
                ["N2", "Documentation specific to products and processes does exist, however it is not always effectively updated, there is no analysis about the validity of documents."],
                ["N3", "Documentation specific to products and processes does exist, it is updated periodically in a planned manner, the validity of the documents used is not analysed."],
                ["N4", "Documentation specific to products and processes does exist, it is updated periodically in a planned manner, the validity of the documents used is analysed. Precise procedures are applied for storage and preservation of the documentation. "],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [18, new Map([
            ["id", "73"],
            ["question", "What steps are taken to ensure that test/inspection equipment and software are compatible with requirements?"],
            ["recommandation", "Make sure that test/inspection equipment and software are compatible with requirements. → Inspection, measurement and test equipment is used to ensure that the measurement uncertainty is known and is compatible with the required measurement accuracy. The test software, or the comparison references used for inspection purposes, are checked before being brought into service in order to demonstrate that they are capable of verifying the acceptability of the product. The equipment covered by this recommendation includes tools (e.g. drills), test equipment (e.g. harmonization benches), and test apparatus (e.g. ovens), etc."],
            ["weight", "9,6"],
            ["levels", new Map([
                ["N1", "There is no procedure that defines how to check that inspection, measurement and test equipment is compatible with needs."],
                ["N2", "Procedures define how to check that inspection, measurement and test equipment is compatible with needs. There is no check to assure that they are used."],
                ["N3", "Inspection, measurement and test equipment is used in such a manner that the measurement uncertainty is known and is compatible with the required measurement aptitude. There is no verification of inspection equipment before it is put into service."],
                ["N4", "Inspection, measurement and test equipment is used in such a manner that the measurement uncertainty is known and is compatible with the required measurement aptitude. Test software or comparison references used as inspection means are verified before they are put into service to demonstrate that they are capable of checking if the product is acceptable. Systematic verification before use is industrially impossible but the use of a metrological procedure (Validation period and definition of the class of equipment in the test procedure), the class is defined in advance."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [19, new Map([
            ["id", "74"],
            ["question", "How is the environment of inspection, measurement and testing equipment controlled?"],
            ["recommandation", "Control the environment of inspection, measurement and testing equipment. → The handling, preservation and storage of inspection and measurement equipment ensure that accuracy and usability are maintained. Inspection, measurement and testing equipment, including the test benches and test software, must be protected against handling operations that might invalidate the calibration settings."],
            ["weight", "7,9"],
            ["levels", new Map([
                ["N1", "The environment of inspection, measurement and test equipment is not taken into account."],
                ["N2", "Inspection, measurement and test equipment is protected against aggression that could damage it."],
                ["N3", "Inspection, measurement and test equipment is protected against aggression that could damage it, it is also protected against manipulations that would invalidate calibration settings. Handling, preservation and storage of inspection equipment are not defined by strict procedures."],
                ["N4", "Inspection, measurement and test equipment is protected against aggression that could damage it, it is also protected against manipulations that would invalidate calibration settings. Handling, preservation and storage of inspection equipment are defined by strict procedures."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [20, new Map([
            ["id", "75"],
            ["question", "How is the workplace environment controlled? (Cleanliness, temperature and humidity)"],
            ["recommandation", "Control the workplace environment. → The workplace environment is important for the quality of the product: appropriate limits must be specified for the ambient temperature and humidity. The level of cleanliness must be controlled. The layout of the workshop and the ergonomics of the workstation must be optimized."],
            ["weight", "9,6"],
            ["levels", new Map([
                ["N1", "The layout of workshops is not designed as a function of the processed product."],
                ["N2", "Workstations are specific to equipment. The working environment is controlled."],
                ["N3", "Workstations are specific to equipment. The working environment is controlled and verified."],
                ["N4", "Workstations are adapted to the specific needs of products. The working environment is controlled and verified. Workshop layouts are designed to optimise maintenance."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [21, new Map([
            ["id", "77"],
            ["question", "How are changes to manufacturing processes managed? Which changes are notified to the customer? Is there a requalification plan according to the nature of the change?"],
            ["recommandation", "Manage changes to manufacturing processes. → There must be a clear list of people authorized to approve process changes. Changes that require customer acceptance before being applied must be identified in a document. Any change relating to the processes, production equipment, tools or programs must be documented and must trigger a procedure to control its application. Ensure that the results of process changes produce the desired effect, and that the changes have not impacted the quality of the product. The actions and tests required to qualify a new process, material or tool must be specified in a document."],
            ["weight", "13,9"],
            ["levels", new Map([
                ["N1", "Process changes are made without being recorded, these modifications are not submitted for authorisation."],
                ["N2", "Process changes are recorded and submitted for authorisation. These changes are not documented, and there is no procedure to control their application."],
                ["N3", "Process changes are recorded, persons authorised to approve changes to production processes are clearly named. Changes requiring acceptance by the customer are identified before application. Any change affecting processes, production equipment, tools and programs is described in a document and a procedure must be produced to control its application. However, there is no systematic check that the results of changes to processes produce the required effect and that these changes have not modified the product quality."],
                ["N4", "Process changes are recorded, persons authorised to approve changes to production processes are clearly named. Changes requiring acceptance by the customer are identified before application. Any change affecting processes, production equipment, tools and programs is described in a document and a procedure must be produced to control its application. Systematic checks are carried out to assure that the results of changes to processes produce the required effect and that these changes have not modified the product quality."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [22, new Map([
            ["id", "78"],
            ["question", "Are handling and inter-site transport methods defined?"],
            ["recommandation", "Control handling methods. → Product handling methods and means are provided to prevent damage or deterioration to the product and include: (1) Intersite transport procedures  ; (2) Handling modes specific to each product."],
            ["weight", "8,8"],
            ["levels", new Map([
                ["N1", "Handling methods are not defined. There are no specific means to prevent deterioration during manipulation."],
                ["N2", "Handling methods are defined, but they are not specific to a product."],
                ["N3", "Handling methods specific to the product are written down, specific means are provided to prevent any deterioration during manipulations. There is no verification about their application. "],
                ["N4", "Product manipulation procedures are specifically defined, and associated means prevent any deterioration to the product during manipulations. It is verified that these methods are applied."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [23, new Map([
            ["id", "79"],
            ["question", "How are production machines, tools and programmable devices inspected before use?"],
            ["recommandation", "Inspect production machines, tools and programmable devices before use. → To avoid damaging the equipment, it is important to check, before use, that the production machines (test benches, ovens, vibrators, etc.), tools (torque screwdrivers, etc.) and programmable devices (numerical control machines, software programming devices used on test benches, etc.) are suited to the product, and that the parameters conform to the specifications. This prior inspection activity must be described in written procedures."],
            ["weight", "10,5"],
            ["levels", new Map([
                ["N1", "Means and tools are not submitted for inspection and validation before use."],
                ["N2", "Means and tools are submitted for inspection before use, but these inspections are not all formalised."],
                ["N3", "The periodic inspection of means and tools is submitted for validation, formal procedures identify periodic inspections to be carried out."],
                ["N4", "The periodic inspection of means and tools is submitted for validation, formal procedures identify actions and periodic inspections to be carried out. Normal procedures describe maintenance of tools."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [24, new Map([
            ["id", "80"],
            ["question", "How are handling, storage, packaging and preservation operations controlled?"],
            ["recommandation", "Control handling, storage, packaging and preservation operations. → For each production step, and in accordance with the manufacturer recommendations and/or the applicable regulations, there must be a procedure covering the specific requirements for: (1) Cleaning ; (2) Prevention, detection and removal of foreign bodies ; (3) Handling of sensitive products ; (4) Marking and labelling, including safety marking ; (5) Control of shelf life and stock rotation ; (6) Hazardous materials. Establish specific management procedures for perishables. Eliminate all expired or unidentified products. Suggest criteria for evaluating and analysing the quality of storage conditions. List and analyse failures due to lack of quality in storage."],
            ["weight", "6,5"],
            ["levels", new Map([
                ["N1", "Handling, storage, packaging, preservation and delivery conditions are not coded, and execution of these operations is not perfectly controlled."],
                ["N2", "Handling, storage, packaging, preservation and delivery conditions are coded, there are procedures that can be adapted to all products. Execution of these operations is not specific to a product."],
                ["N3", "Handling, storage, packaging, preservation and delivery conditions are coded, there are procedures specific to each product."],
                ["N4", "Handling, storage, packaging, preservation and delivery conditions are coded, there are procedures specific to each product. Considerations such as expiration dates, sensitivity of products to stress, dangerousness of products are also coded and applied."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [25, new Map([
            ["id", "81"],
            ["question", "How are special processes controlled? Which documents describe these processes, and how are they updated? How are special processes qualified?"],
            ["recommandation", "Control special processes. → Special processes are processes for which the results cannot be fully verified retrospectively by inspecting or testing the product, and for which the consequences of defective implementation will not appear until the product is used. Examples include gluing, soldering, brazing, heat treatment, and surface treatment. The following points must be taken into account: (1) The special processes to be implemented must be identified. ; (2) The supplier must check that all special process parameters (e.g. materials, personnel, procedures and software) produce satisfactory results. ; (3) The supplier must identify and document significant operations and process parameters to be controlled. ; (4) Any change to these operations and parameters must be described in a proposal justifying the change and guaranteeing that it does not produce any harmful effects for the outcome of the process. ; (5) The supplier must verify special processes by producing one or more typical parts under the conditions defined for the phase. ; (6) Special processes or subcontracted processes must be qualified before use. ; (7) The supplier must keep qualified special processes up to date."],
            ["weight", "14,4"],
            ["levels", new Map([
                ["N1", "Special processes are not identified."],
                ["N2", "Special processes are identified. The parameters for these processes (materials, personnel, procedures and software) are evaluated. These processes are not documented, or not defined by strict procedures."],
                ["N3", "Special processes are identified. The parameters for these processes (materials, personnel, procedures and software) are evaluated. Significant operations and parameters of the process to be controlled in production have been identified and documented. Any modification to these operations and parameters will be described in a proposal justifying this modification and guaranteeing that it does not introduce any harmful effect on the result of the process. Special processes have not been verified by making one or several typical parts under defined conditions."],
                ["N4", "Same criterion as level 3 and also: It is verified that all parameters of special processes (for example materials, personnel, procedures and software) produce the expected results. Special processes are verified by making one or several typical parts under defined conditions. Special processes (subcontracted or not) are qualified before they are used and they are kept up to date."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [26, new Map([
            ["id", "82"],
            ["question", "How are services and fluids controlled in the work environment?"],
            ["recommandation", "Control services and fluids in the work environment. → Services and supplies such as water, compressed air, electricity and chemicals used must be controlled and verified regularly to ensure that their effect on the process remains constant."],
            ["weight", "10,1"],
            ["levels", new Map([
                ["N1", "Services and supplies such as water, compressed air, electricity and chemicals are not verified."],
                ["N2", "Services and supplies such as water, compressed air, electricity and chemicals are verified occasionally following a proven failure (see ISO 14000). "],
                ["N3", "Services and supplies such as water, compressed air, electricity and chemicals are controlled and verified periodically to make sure that their effect on the process is constant."],
                ["N4", "Services and supplies such as water, compressed air, electricity and chemicals are controlled and verified continuously to make sure that their effect on the process is constant."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [27, new Map([
            ["id", "88"],
            ["question", "Is there a self-inspection by the operator at the end of each production process? Is it instruction-based? Is the inspection result recorded?"],
            ["recommandation", "Implement self-inspection by the operator at the end of each production process. → Self-inspection by the operator, at the end of each process step, helps to filter out human errors that might jeopardize the reliability of the subassembly. The self-inspection procedure, usually based on a visual inspection of parts in production, is described in the operation instructions and in the Control Plan. The result of this inspection is recorded for batch traceability."],
            ["weight", "5,3"],
            ["levels", new Map([
                ["N1", "No self-checking is done on the task"],
                ["N2", "Self-checking is done at the end of the activity. However, it is not described in any formal document ."],
                ["N3", "Self-checking is done at the end of the activity. This is done in accordance with a predefined protocol formalised in a document."],
                ["N4", "Self-checking is done at the end of the activity. This is done in accordance with a protocol that was validated by an authority independent from the operating entity. This protocol is formalised in a document ."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [28, new Map([
            ["id", "91"],
            ["question", "Are specific ESD protections put in place for components and subassemblies during handling and storage?"],
            ["recommandation", "Implement ESD protections for components and subassemblies during handling and storage. → ESD protections for components and subassemblies include: (1) The grounding (earthing) of machines, tables, shelving, chairs and trolleys ; (2) The incoming inspection of conductive shoes and wristbands for the operators concerned ; (3) The connection of anti-ESD wristbands for operators ; (4) The use of ionizers, if necessary ; (5) The use of antistatic bags for board storage."],
            ["weight", "18,4"],
            ["levels", new Map([
                ["N1", "There is no protection against ESD."],
                ["N2", "Protection against ESD is subject to non formalised rules and practices."],
                ["N3", "There are validated procedures for protection against ESD defining practices recognised as protecting the subassemblies."],
                ["N4", "Protection against ESD is described in validated procedures and follow - up checks are made on these procedures."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [29, new Map([
            ["id", "99"],
            ["question", "Is there a procedure for identifying expired items/consumables and withdrawing them from stock (or reforming them)?"],
            ["recommandation", "Implement a procedure to prevent items/consumables that are expired or due to be scrapped being used in production. → The use of expired consumables must be rendered impossible. The method of prevention is based on labelling, to identify the expiry date of the material, or on recording the date in the system, or on both. It is the responsibility of the storekeeper to check the date, and there must be a mandatory instruction to this effect. Preferably, the system will alert the storekeeper to withdraw the material/item before the date is exceeded, and will block the use of the batch. For the particular case of components that need to be reconditioned or reformed after a given storage time (e.g. electrolytic capacitors), there must be a corresponding procedure, and this action must be tracked in the stock database."],
            ["weight", "6,4"],
            ["levels", new Map([
                ["N1", "No labels or signs provide any information about expiration dates of consumables."],
                ["N2", "Consumables are correctly identified by labelling. No other information is provided."],
                ["N3", "Consumables are correctly identified by labelling. All information necessary for this identification is formally described in documents, but these documents have not been validated by an authority independent from the operating entity."],
                ["N4", "Consumables are correctly identified by labelling. All information necessary for this identification is formally described in documents, and these documents have been validated by an authority independent from the operating entity"],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [30, new Map([
            ["id", "113"],
            ["question", "Are records produced and kept to prove that the product has been inspected and/or tested in accordance with defined criteria? Do the records identify the person who performed the inspections?"],
            ["recommandation", "Keep inspection and test records. → Records must be established and kept proving that the product has been inspected and/or tested in accordance with the defined criteria. The records must identify the person who performed the inspections and released the product. Test records must indicate the measured values when they are required by the specification or by the acceptance plan. If specified, the supplier must demonstrate the qualification of the product."],
            ["weight", "5,3"],
            ["levels", new Map([
                ["N1", "Records of inspections and tests are produced but are not kept."],
                ["N2", "Records of inspections and tests are produced and are kept but cannot be used to identify the source of the inspection(persons, machine)."],
                ["N3", "Records of inspections and tests are produced and are kept and can be used to identify the source of the inspection(persons, machine)."],
                ["N4", "Records prove that inspections and / or tests have been carried out on the product in accordance with defined criteria.he records are sufficient to identify the person who carried out the inspections and authorised release of the product.est records indicate measured values when they are required by the specification or the acceptance plan."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [31, new Map([
            ["id", "114"],
            ["question", "Is there an inspection file containing the acceptance criteria, the inspection and testing sequence, the inspection records, and the list of specific and non-specific inspection instruments?"],
            ["recommandation", "Maintain an inspection file. → The inspection file must contain: (1) The acceptance and rejection criteria ; (2) A sequential list of test and inspection operations to be performed ; (3) The inspection results ; (4) A list of specific and non-specific inspection instruments ; (5) The documents associated with the specific inspection instruments, pertaining to their design, production, validation, management, use and maintenance."],
            ["weight", "5,7"],
            ["levels", new Map([
                ["N1", "No inspection file."],
                ["N2", "The inspection file is limited to the definition of acceptance or refusal criteria."],
                ["N3", "The inspection file defines acceptance or refusal criteria, and the list of operations to be done. It proposes inspection result record documents. "],
                ["N4", "The inspection file contains: the definition of acceptance or refusal criteria, the sequential list of inspection and test operations to be carried out, inspection result record documents, the list of specific and non-specific inspection instruments, documents associated with specific inspection instruments for their design, production, validation, management, use and maintenance."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [32, new Map([
            ["id", "116"],
            ["question", "What information is described in the nonconformity reports?"],
            ["recommandation", "Control the quality of data in nonconformity reports.  →  Nonconformity reports must specify: (1) The product identification ; (2) The description of the nonconformity ; (3) The cause of the nonconformity ; (4) The actions taken to avoid recurrence of the nonconformity ; (5) The rework or repairs, if necessary ; (6) The inspection of the characteristics affected by the rework or repairs ; (7) The final decision."],
            ["weight", "13"],
            ["levels", new Map([
                ["N1", "There is no documentation specific to the nonconformity."],
                ["N2", "Documentation specific to the nonconformity plays a unique role to identify the nonconforming product."],
                ["N3", "Nonconformity documents specify the product identification, the description of the nonconformity and the cause of the nonconformity. However, there is no formal definition of actions to prevent recurrence of the nonconformity, reworking or repairs if necessary and checking of characteristics affected by the reworking or repairs."],
                ["N4", "Nonconformity documents specify the product identification, the description of the nonconformity and the cause of the nonconformity. Actions are formalised to prevent recurrence of the nonconformity, reworking or repairs if necessary and checking of characteristics affected by the reworking or repairs."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [33, new Map([
            ["id", "138"],
            ["question", "Are checks performed to ensure that the correct embedded software is loaded, and are its version details recorded?"],
            ["recommandation", "Make sure that the correct embedded software is loaded, and record its version details.  →  Make sure that the correct embedded software is loaded and, in particular, that it corresponds to the latest version for use on the subassembly. This identification information must be traceable for the rest of the process."],
            ["weight", "6,7"],
            ["levels", new Map([
                ["N1", "No identification of the loaded software is made."],
                ["N2", "After software has been loaded in a hardware subassembly, an identifier of the loaded software is provided, assuring that the software is conforming with the subassembly. However, no document precisely describes the format or logging of this identifier."],
                ["N3", "Every time that software is loaded, the operator is informed of the software version to be used. An identifier of the version to be used is provided after the operation."],
                ["N4", "Every time that software is loaded, the operator is informed of the software version to be used. An identifier of the version to be used is provided after the operation  cross verification is formalised."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [34, new Map([
            ["id", "153"],
            ["question", "Is the conformity of purchased products checked against clearly defined specifications?"],
            ["recommandation", "Check the conformity of purchased products.  → Implement measures to verify purchased products, e.g.: (1) Examination of incoming products (components, PCBs, subassemblies, accessories) ; (2) Examination of the required documentation, including the supplier’s Certificate of Conformity, if specified ; (3) Inspection of incoming batches (critical characteristics). This incoming inspection is covered by dedicated specifications for each type of material or item purchased."],
            ["weight", "8,6"],
            ["levels", new Map([
                ["N1", "There is no verification on the conformity of purchased products."],
                ["N2", "Conformity of purchased products is only verified by examination of the required documentation."],
                ["N3", "Conformity of purchased products is verified by examination of products on delivery and by examination of the required documentation."],
                ["N4", "Conformity of purchased products is verified by examination of products on delivery, by examination of the required documentation and by inspection and audit of the purchase source."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [35, new Map([
            ["id", "155"],
            ["question", "Have checks been done to ensure that the ESS procedure defined at the design stage is correctly applied?"],
            ["recommandation", "Check that the ESS procedure is correctly applied. → It is important to ensure that the environmental stress screening (ESS) procedure defined at the design stage is correctly applied, and that the results are correctly recorded and are traceable. It is also important for corrective or preventive actions to be planned, in order to minimize the ESS failure rate. Finally, the team in charge of defining the ESS procedure must be given the necessary information to optimize this procedure."],
            ["weight", "9"],
            ["levels", new Map([
                ["N1", "No verification of the test coverage rate during burn-in is done."],
                ["N2", "The test coverage rate during burn-in was verified when it was set up. No additional verifications have been done with regard to possible changes (new technologies, etc.)."],
                ["N3", "The test coverage rate during burn-in is verified. A document describes changes requiring a verification and the procedure to be implemented."],
                ["N4", "The test coverage rate during burn-in is verified. A document describes changes requiring a verification and the procedure to be implemented. This entire document has been validated by an authority independent from the operating entity."],
                ["NA", "Not Applicable"],
            ])]
        ])],
    ])],
    ["Operation and Maintenance", new Map([
        [0, new Map([
            ["id", "7"],
            ["question", "What process is used to collect data on technical events, to report anomalies, and to manage them?"],
            ["recommandation", "Implement corrective actions. → This recommendation deals with the implementation of corrective actions (the documentation aspect is dealt with in Recommendation 116). The following functions must be covered by a quality assurance procedure: (1) Processing customer complaints and product nonconformity reports ; (2) Searching for causes of nonconformity relating to the product, the process and the quality system, and recording the results of this search ; (3) Determining corrective and preventive actions required to eliminate causes of nonconformity ; (4) Applying resources to measure the efficacy of these corrective and preventive actions."],
            ["weight", "17,5"],
            ["levels", new Map([
                ["N1", "There are no procedures related to corrective actions."],
                ["N2", "Corrective actions are implemented following a customer complaint or a nonconformity report, but they are not formalised."],
                ["N3", "Procedures related to corrective actions include at least: Effective processing of customer complaints and nonconformity reports on the product, The search for causes of nonconformity related to the product, the process and the quality system and recording the results of this search, Determination of corrective actions necessary to eliminate the causes of the nonconformity, These procedures do not define the application of control means to assure that the corrective action is implemented and that it produces the expected effect. "],
                ["N4", "Procedures related to corrective actions include: Effective processing of customer complaints and nonconformity reports on the product, The search for causes of nonconformity related to the product, the process and the quality system and recording the results of this search, Determination of corrective actions necessary to eliminate the causes of the nonconformity, Application of control means to assure that the corrective action is implemented and that it produces the expected effect."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [1, new Map([
            ["id", "8"],
            ["question", "Do the preventive action procedures include: (1) The use of diversified sources of information? ; (2) The definition of the steps to follow? ; (3) The criteria for triggering preventive actions and applying inspection procedures? ; (4) A preventive action follow-up review?"],
            ["recommandation", "Implement preventive actions. → Preventive action procedures include: (1) Using appropriate sources of information, such as processes and operations affecting product quality, waivers, audit results, quality records, maintenance reports and customer complaints, to detect, analyse and eliminate potential causes of nonconformity ; (2) The definition of appropriate steps to deal with any problem that requires preventive action ; (3) Triggering preventive actions and applying inspection procedures to make sure they produce the desired effect ; (4) Ensuring that relevant information on the actions implemented is submitted for management review."],
            ["weight", "17,7"],
            ["levels", new Map([
                ["N1", "No procedure for preventive actions is implemented."],
                ["N2", "Procedures for preventive actions do exist but they are incomplete."],
                ["N3", "Procedures for preventive actions do exist and are almost complete with regard to the mentioned criteria (there are possible minor nonconformities in the application or satisfaction of criteria)."],
                ["N4", "Procedures for preventive actions do exist, they are formalised and are complete with regard to the mentioned criteria "],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [2, new Map([
            ["id", "9"],
            ["question", "How is product traceability ensured?"],
            ["recommandation", "Ensure product traceability. → The system implemented must make it possible to: (1) Maintain the product identification throughout the life cycle ; (2) Know the history (definition file and changes) and final use (delivery, scrap) of all products made from the same batch of raw material or belonging to the same production batch ; (3) Identify the elements that make up an assembly, and identify the higher assembly ; (4) Find sequential documentation on the production (manufacture, assembly, inspection) of a given product (e.g. configuration tracking sheet listing operations performed and anomalies observed). The traceability system must be capable of determining the configuration of the product ready for delivery, including any variance between the actual condition and the agreed/specified condition."],
            ["weight", "9,2"],
            ["levels", new Map([
                ["N1", "No product traceability during its life cycle, the product is distinguished only by its marking."],
                ["N2", "Traceability is used to identify the product but not to determine its origin and its history."],
                ["N3", "Traceability is used to identify and know the product history(Definition file + changes), however it is not sufficient to know the documentation associated with its life cycle(e.g.no configuration follower sheet containing records of operations carried out and anomalies observed)."],
                ["N4", "Traceability is used to identify and know the product history(Definition file + changes), including components, e.g.Date Code... It is sufficient to find the documentation associated with its life cycle(e.g.configuration follower sheet containing records of operations carried out and anomalies observed). Exhaustive application of the recommendation."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [3, new Map([
            ["id", "10"],
            ["question", "Does the supplier control wrapping, packaging and marking processes to ensure compliance with specified requirements? Is there a list of equipment that requires packaging?"],
            ["recommandation", "Manage the packaging of systems and equipment. → The wrapping, packaging and marking processes must be controlled to ensure compliance with specified requirements. Define a list of equipment that requires packaging. Propose a way to manage packaging specific to particular products (dates, methods, duration). Periodically inspect packaging quality. Use appropriate product-specific packaging."],
            ["weight", "13,8"],
            ["levels", new Map([
                ["N1", "Product packaging is not defined, the materials used for this packaging are used depending on their availability. Information about packaging dates, management methods inspections to be carried out is not defined."],
                ["N2", "Standard packaging is used for the products. Information about the packaging is given.o specific inspection of the packaging."],
                ["N3", "Special product packaging is provided, and documentation is associated with it No specific inspection of the packaging."],
                ["N4", "Special product packaging is provided, and documentation is associated with it.specific regular inspection of the packaging is made  procedure regularly checks that periodic inspections are applied."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [4, new Map([
            ["id", "11"],
            ["question", "Are there any designated storage areas or premises? Are they adapted to prevent deterioration or damage to subassemblies? Are appropriate measures taken to enable reception and shipping in these areas?"],
            ["recommandation", "Manage the storage conditions for subassemblies. → Designated storage areas or premises must be adapted to prevent damage or deterioration to subassemblies. (1) Appropriate measures are taken to enable reception in these areas and shipment from them ; (2) The state of products in stock must be evaluated at appropriate intervals to detect any deterioration ; (3) The storage atmosphere must be controlled ; (4) Tailor positioning in storage ; (5) Organize periodic interventions (e.g. powering up) to maintain product characteristics in storage."],
            ["weight", "15,6"],
            ["levels", new Map([
                ["N1", "Product storage areas are not specific, the storage environment is not considered."],
                ["N2", "Product storage areas are not specific, the storage environment is controlled and adapted to the stored products."],
                ["N3", "Product storage areas are specific. The storage environment is controlled and adapted to the stored products. Storage positions are individually defined. Periodic actions are carried out to maintain product characteristics."],
                ["N4", "Product storage areas are specific. The storage environment is controlled and adapted to the stored products. Storage positions are individually defined. Periodic actions are carried out to maintain product characteristics. The condition of products in stock is regularly inspected, the stock is verified and storage conditions are regularly optimised."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [5, new Map([
            ["id", "13"],
            ["question", "How are the planned tests and inspections for a phase validated before moving on to the next phase?"],
            ["recommandation", "Validate the required tests and inspections before moving on to the next phase. → During the phase, the product must be inspected and tests must be carried out in accordance with the quality plan and/or written procedures. The product must remain blocked until the required inspections and tests are terminated, or until the necessary reports have been received and verified. Corrective actions must be carried out if applicable."],
            ["weight", "11,2"],
            ["levels", new Map([
                ["N1", "No inspection or test during the phase."],
                ["N2", "Inspections are carried out during the phase, but they are not formalised in the form of written procedures or quality plan."],
                ["N3", "Inspections are carried out during the phase and are formalised in the form of written procedures or a quality plan. These inspections and test are not always complete."],
                ["N4", "Inspections are carried out during the phase and are formalised in the form of written procedures or a quality plan. These inspections and tests are complete."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [6, new Map([
            ["id", "14"],
            ["question", "How is it ensured that all final tests and inspections are conducted in accordance with the control plan and the written procedures?"],
            ["recommandation", "Perform final tests and inspections. → The control plan must contain a “Final Tests and Inspections” chapter, describing the equipment, the general conditions and the references to the associated procedures. The acceptance criteria and the specific product requirements must be described in detail. These inspections must be based on an analysis (e.g. FMECA) of the history of failures encountered and customer feedback. Additionally, it is important for an independent inspector to check, prior to shipping, that: (1) All the activities specified in the control plan have been completed satisfactorily ; (2) The associated data and documentation are available and accepted."],
            ["weight", "10,4"],
            ["levels", new Map([
                ["N1", "No final inspection or test on launchpad."],
                ["N2", "Final inspections and tests on launchpad are carried out, but they are not described in strict procedures or in a quality plan."],
                ["N3", "Final inspections and tests on launchpad are carried out, They are described in strict procedures or in a quality plan. Application of these inspections and tests is not verified and validated."],
                ["N4", "Final inspections and tests on launchpad are carried out in accordance with the quality plan and/or written procedures. The quality plan and/or procedures for final inspections and tests on launchpad require that all specified inspections and tests, including those specified for product reception or during its manufacturing, are done and that the results are conforming with the requirements. It is checked before shipment that: All activities specified in the quality plan and/or in written procedures have been satisfactorily accomplished Data and the associated documentation are available (follower sheet type document that records the configuration, operations carried out and observed anomalies) and accepted."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [7, new Map([
            ["id", "20"],
            ["question", "Is a policy applied to identify, evaluate and manage the potential risks associated with nonconformities, whether in the products or in the design, planning, manufacturing, assembly, inspection, etc. processes?"],
            ["recommandation", "Adopt a policy for managing nonconformity risks. → A policy is applied to identify, evaluate and manage the potential risks associated with nonconformities, whether in the products or in the design, planning, manufacturing, assembly, inspection, etc. processes This policy must take account of the potential risks associated with human factors."],
            ["weight", "16,3"],
            ["levels", new Map([
                ["N1", "No policy is applied to evaluate risks of nonconformity."],
                ["N2", "There is a policy aimed at identifying, evaluating and managing potential risks associated with nonconformities only on products. But not on all design, planning, manufacturing, assembly, inspection processes, etc."],
                ["N3", "There is a policy aimed at identifying, evaluating and managing potential risks associated with nonconformities, not only on products but also on all design, planning, manufacturing, assembly, inspection processes, etc. This policy does not take account of potential risks associated with human factors. "],
                ["N4", "There is a policy aimed at identifying, evaluating and managing potential risks associated with nonconformities, not only on products but also on all design, planning, manufacturing, assembly, inspection processes, etc. This policy takes account of potential risks associated with human factors."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [8, new Map([
            ["id", "30"],
            ["question", "Is the description of accepted nonconformities, or of repairs performed, recorded to indicate the real condition of the product?"],
            ["recommandation", "Define the degree of nonconformity. → The description of the accepted nonconformity, or of repairs performed, is recorded to indicate the real condition of the product. Written procedures are kept up to date, defining, as a minimum: (1) How nonconformities are classified, and how the use of nonconformin ; (2) Components in finished products is monitored ; (3) The formal authorization process and scope of application for personnel authorizing the use of replacement materials and/or nonconforming products (waiver procedures) ; (4) The process for managing scrapped parts."],
            ["weight", "12,8"],
            ["levels", new Map([
                ["N1", "There is no information about the degree of nonconformity of the product."],
                ["N2", "The indication of the degree of nonconformity of the products is only used for information, its purpose is not to make a decision about whether or not to use the nonconforming equipment."],
                ["N3", "The description of the accepted nonconformity or the repairs made is recorded to indicate the real condition of the product. Written procedures define the process for classification of nonconformities and control over the use of nonconforming components in finished products. The process for authorisation of personnel to use replacement materials and/or nonconforming products is not formalised."],
                ["N4", "The description of the accepted nonconformity or the repairs made is recorded to indicate the real condition of the product. Written procedures are kept up to date defining: The process for classification of nonconformities and control over the use of nonconforming components in finished products. The formal process for authorisation and the application field for personnel authorising the use of replacement materials and/or nonconforming products. The process for control over scrapped parts. "],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [9, new Map([
            ["id", "32"],
            ["question", "Which procedure defines the necessary resources for the testing and inspection of the product?"],
            ["recommandation", "Define the necessary resources for the testing and inspection of the product. → The product testing and inspection procedures must specify the resources required (human and technical), the methods to be implemented, the acceptance criteria, and the methods for recording the results. These procedures must also define training requirements and, if necessary, specify operator qualification requirements."],
            ["weight", "14,3"],
            ["levels", new Map([
                ["N1", "No product inspection or test procedure has been specified, there is no description of methods and acceptance criteria."],
                ["N2", "Product inspection or test procedures are specified. Acceptance methods and criteria are described. The results are not kept."],
                ["N3", "Product inspection or test procedures are specified. Acceptance methods and criteria are described. Results are not recorded and used for feedback from operations. Procedures also describe training and qualification of operators."],
                ["N4", "Product inspection or test procedures are specified. Acceptance methods and criteria are described. Results are recorded and used for feedback from operations. Procedures also describe training and qualification of operators."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [10, new Map([
            ["id", "35"],
            ["question", "Are there any documents for performing incoming inspections on supplies?"],
            ["recommandation", "Provide documents for performing incoming inspections on subassembly supplies. → Procurement documents must include, where applicable: (1) The type, the category, and any other precise identification ; (2) The title, or any other formal identification, and the applicable version of specifications, drawings, process requirements, inspection instructions and other relevant technical data ; (3) The title, identifier and version of the applicable quality system standard ; (4) The list of procurement documents reviewed and approved prior to distribution as conforming to the requirements. The documented procurement requirements must include, where applicable: (1) The tests, examinations, inspections and acceptance conditions imposed by the customer, and any corresponding instructions or requirements ; (2) The requirements relating to specimens (method of production, number, storage conditions) for inspections, investigations or audits ; (3) The requirements relating to the notification of anomalies, to changes in the definition, and to the approval of their processing. Customer requirements must be passed on to suppliers."],
            ["weight", "9,9"],
            ["levels", new Map([
                ["N1", "No documentation specific to the incoming inspection on supplies."],
                ["N2", "Product identification documents are the only documents used for the incoming inspection on supplies."],
                ["N3", "Purchasing documents include a precise identification, the applicable edition of specifications, drawings, requirements in terms of process, inspection instructions and other relevant technical data, the title, identifier and edition of the quality system standard to be applied, purchasing documents reviewed and approved before distribution, to assure that they satisfy the requirements."],
                ["N4", "Purchasing documents include a precise identification, the applicable edition of specifications, drawings, requirements in terms of process, inspection instructions and other relevant technical data, the title, identifier and edition of the quality system standard to be applied, purchasing documents reviewed and approved before distribution, to assure that they satisfy the requirements. Documented procurement requirements also include: Tests, examinations, inspections and customer acceptance conditions and any relevant instruction or requirements, requirements related to specimens (production method, number, storage conditions) for inspections, investigations or audits, requirements related to notification of anomalies, changes to the definition and approval of their processing . The customer's requirements are forwarded to suppliers."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [11, new Map([
            ["id", "47"],
            ["question", "Are there any written procedures for checking that purchased assemblies and subassemblies meet the specified requirements?"],
            ["recommandation", "Establish procedures to verify that purchased assemblies and subassemblies meet the specified requirements. → Establish written procedures to ensure that all purchased assemblies and subassemblies conform to the specified requirements. Define the terms and conditions of supply and the responsibilities of all concerned. Check that procedures are applied."],
            ["weight", "6,8"],
            ["levels", new Map([
                ["N1", "No procedures to assure that products are conforming with specified requirements. Nothing formal."],
                ["N2", "Generic procedures (all products) are defined to assure conformity of the purchased product. There is a formal proof: e.g. note."],
                ["N3", "Procedures specific to the product are defined in a validated plan to assure conformity of the purchased product. Procurement conditions and the responsibilities of persons doing the work are not described."],
                ["N4", "Procedures specific to the product are defined in a validated plan to assure conformity of the purchased product. Procurement conditions and the responsibilities of persons doing the work are described. Proofs that these procedures have been evaluated exist. "],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [12, new Map([
            ["id", "63"],
            ["question", "Is there documentation for special processes? Is this documentation updated?"],
            ["recommandation", "Identify documentation for special processes. → Records concerning processes, products and personnel are kept up to date."],
            ["weight", "12,2"],
            ["levels", new Map([
                ["N1", "No documentation concerning special processes."],
                ["N2", "The associated documentation only deals with processes, the associated products or human resources are not taken into account."],
                ["N3", "Records are provided for processes, products and personnel associated with special processes, but these procedures are not updated."],
                ["N4", "Records for processes, products and personnel are updated. "],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [13, new Map([
            ["id", "66"],
            ["question", "Are the necessary means for special processes identified?"],
            ["recommandation", "Identify the necessary means for special processes. → The requirements for the qualification of process operations, including the associated equipment and personnel, must be specified."],
            ["weight", "13,1"],
            ["levels", new Map([
                ["N1", "Means concerning special processes are not formally identified."],
                ["N2", "Documents identify technical means dedicated to special processes. Equipment and personnel associated with these processes are not defined."],
                ["N3", "Process operation qualification requirements, including associated equipment and personnel, are specified."],
                ["N4", "Process operation qualification requirements, including associated equipment and personnel, are specified. Documents identifying these requirements are regularly updated."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [14, new Map([
            ["id", "67"],
            ["question", "Are human resources concerning special processes managed?"],
            ["recommandation", "Identify the human resources for special processes. → Special processes must be performed by qualified operators, and must be continuously monitored, with control over process parameters to ensure conformity to requirements."],
            ["weight", "13,7"],
            ["levels", new Map([
                ["N1", "Special processes are not associated with qualified human resources."],
                ["N2", "Special processes are done by trained operators, but there is no regular check on their skills."],
                ["N3", "Special processes are done by qualified operators, or they are continuously monitored."],
                ["N4", "Special processes are done by qualified operators and they are continuously monitored."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [15, new Map([
            ["id", "71"],
            ["question", "Is the documentation associated with the equipment or system strictly managed? Does it take account of all equipment upgrades?"],
            ["recommandation", "Manage the equipment or system documentation. → Managing the documentation involves: (1) Recording and backing up product and process documents ; (2) Training a group of workshop personnel in the management of technical documents ; (3) Regularly updating the document inventory ; (4) Specifying technical documents for each process ; (5) Updating documents to take account of equipment upgrades ; (6) Submitting the documents, and their modifications, for validation ; (7) Making the process documents available, and usable, in the workshop."],
            ["weight", "5,6"],
            ["levels", new Map([
                ["N1", "No documentation specific to the operational configuration or processes, there are no plans to provide special documentation."],
                ["N2", "Documentation specific to operational configuration and processes does exist, however it is not always effectively updated, there is no analysis about the validity of documents."],
                ["N3", "Documentation specific to operational configuration or processes does exist, it is updated periodically in a planned manner, the validity of the documents used is not analysed."],
                ["N4", "Documentation specific to operational configuration and processes does exist, it is updated periodically in a planned manner, the validity of the documents used is analysed. Precise procedures are applied for storage and preservation of the documentation. "],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [16, new Map([
            ["id", "72"],
            ["question", "How are product testability and maintainability controlled?"],
            ["recommandation", "Control product testability and maintainability. → Control the capability of products to detect failures; control failure detection systems; facilitate maintenance."],
            ["weight", "17,6"],
            ["levels", new Map([
                ["N1", "No monitoring or maintainability is performed."],
                ["N2", "There is a minimum surveillance by alarms."],
                ["N3", "The FDIR process is mainly automatic. No intervention from operators is planned."],
                ["N4", "The FDIR process requires both automatic reaction and manual intervention from ground. The FDIR principles are described in the FDIR User manual. The operators have been trained for such procedures. "],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [17, new Map([
            ["id", "73"],
            ["question", "What steps are taken to ensure that test/inspection equipment and software are compatible with requirements?"],
            ["recommandation", "Make sure that test/inspection equipment and software are compatible with requirements. → Inspection, measurement and test equipment is used to ensure that the measurement uncertainty is known and is compatible with the required measurement accuracy. The test software, or the comparison references used for inspection purposes, are checked before being brought into service in order to demonstrate that they are capable of verifying the acceptability of the product. The equipment covered by this recommendation includes tools (e.g. drills), test equipment (e.g. harmonization benches), and test apparatus (e.g. ovens), etc."],
            ["weight", "11,3"],
            ["levels", new Map([
                ["N1", "There is no procedure that defines how to check that inspection, measurement and test equipment is compatible with needs."],
                ["N2", "Procedures define how to check that inspection, measurement and test equipment is compatible with needs. There is no check to assure that they are used."],
                ["N3", "Inspection, measurement and test equipment is used in such a manner that the measurement uncertainty is known and is compatible with the required measurement aptitude. There is no verification of inspection equipment before it is put into service."],
                ["N4", "Inspection, measurement and test equipment is used in such a manner that the measurement uncertainty is known and is compatible with the required measurement aptitude. Test software or comparison references used as inspection means are verified before they are put into service to demonstrate that they are capable of checking if the product is acceptable. Systematic verification before use is industrially impossible but the use of a metrological procedure (Validation period and definition of the class of equipment in the test procedure), the class is defined in advance."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [18, new Map([
            ["id", "74"],
            ["question", "How is the environment of inspection, measurement and testing equipment controlled?"],
            ["recommandation", "Control the environment of inspection, measurement and testing equipment. → The handling, preservation and storage of inspection and measurement equipment ensure that accuracy and usability are maintained. Inspection, measurement and testing equipment, including the test benches and test software, must be protected against handling operations that might invalidate the calibration settings."],
            ["weight", "11,7"],
            ["levels", new Map([
                ["N1", "The environment of inspection, measurement and test equipment is not taken into account."],
                ["N2", "Inspection, measurement and test equipment is protected against aggression that could damage it."],
                ["N3", "Inspection, measurement and test equipment is protected against aggression that could damage it, it is also protected against manipulations that would invalidate calibration settings. Handling, preservation and storage of inspection equipment are not defined by strict procedures."],
                ["N4", "Inspection, measurement and test equipment is protected against aggression that could damage it, it is also protected against manipulations that would invalidate calibration settings. Handling, preservation and storage of inspection equipment are defined by strict procedures."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [19, new Map([
            ["id", "75"],
            ["question", "How is the workplace environment controlled? (Cleanliness, temperature and humidity)"],
            ["recommandation", "Control the workplace environment. → The workplace environment is important for the quality of the product: appropriate limits must be specified for the ambient temperature and humidity. The level of cleanliness must be controlled. The layout of the workshop and the ergonomics of the workstation must be optimized."],
            ["weight", "10,8"],
            ["levels", new Map([
                ["N1", "The layout of workshops is not designed as a function of the processed product."],
                ["N2", "Workstations are specific to equipment. The working environment is controlled."],
                ["N3", "Workstations are specific to equipment. The working environment is controlled and verified."],
                ["N4", "Workstations are adapted to the specific needs of products. The working environment is controlled and verified. Workshop layouts are designed to optimise maintenance."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [20, new Map([
            ["id", "77"],
            ["question", "How are changes to manufacturing processes managed? Which changes are notified to the customer? Is there a requalification plan according to the nature of the change?"],
            ["recommandation", "Manage changes to manufacturing processes. → There must be a clear list of people authorized to approve process changes. Changes that require customer acceptance before being applied must be identified in a document. Any change relating to the processes, production equipment, tools or programs must be documented and must trigger a procedure to control its application. Ensure that the results of process changes produce the desired effect, and that the changes have not impacted the quality of the product. The actions and tests required to qualify a new process, material or tool must be specified in a document."],
            ["weight", "13,9"],
            ["levels", new Map([
                ["N1", "Process changes are made without being recorded, these modifications are not submitted for authorisation."],
                ["N2", "Process changes are recorded and submitted for authorisation. These changes are not documented, and there is no procedure to control their application."],
                ["N3", "Process changes are recorded, persons authorised to approve changes to production processes are clearly named. Changes requiring acceptance by the customer are identified before application. Any change affecting processes, production equipment, tools and programs is described in a document and a procedure must be produced to control its application. However, there is no systematic check that the results of changes to processes produce the required effect and that these changes have not modified the product quality."],
                ["N4", "Process changes are recorded, persons authorised to approve changes to production processes are clearly named. Changes requiring acceptance by the customer are identified before application. Any change affecting processes, production equipment, tools and programs is described in a document and a procedure must be produced to control its application. Systematic checks are carried out to assure that the results of changes to processes produce the required effect and that these changes have not modified the product quality."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [21, new Map([
            ["id", "78"],
            ["question", "Are handling and inter-site transport methods defined?"],
            ["recommandation", "Control handling methods. → Product handling methods and means are provided to prevent damage or deterioration to the product and include: (1) Intersite transport procedures ; (2) Handling modes specific to each product."],
            ["weight", "9,9"],
            ["levels", new Map([
                ["N1", "Handling methods are not defined. There are no specific means to prevent deterioration during manipulation."],
                ["N2", "Handling methods are defined, but they are not specific to a product."],
                ["N3", "Handling methods specific to the product are written down, specific means are provided to prevent any deterioration during manipulations. There is no verification about their application. "],
                ["N4", "Product manipulation procedures are specifically defined, and associated means prevent any deterioration to the product during manipulations. It is verified that these methods are applied."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [22, new Map([
            ["id", "79"],
            ["question", "How are production machines, tools and programmable devices inspected before use?"],
            ["recommandation", "Inspect production machines, tools and programmable devices before use. → To avoid damaging the equipment, it is important to check, before use, that the production machines (test benches, ovens, vibrators, etc.), tools (torque screwdrivers, etc.) and programmable devices (numerical control machines, software programming devices used on test benches, etc.) are suited to the product, and that the parameters conform to the specifications. This prior inspection activity must be described in written procedures."],
            ["weight", "11,3"],
            ["levels", new Map([
                ["N1", "Means and tools are not submitted for inspection and validation before use."],
                ["N2", "Means and tools are submitted for inspection before use, but these inspections are not all formalised."],
                ["N3", "The periodic inspection of means and tools is submitted for validation, formal procedures identify periodic inspections to be carried out."],
                ["N4", "The periodic inspection of means and tools is submitted for validation, formal procedures identify actions and periodic inspections to be carried out. Normal procedures describe maintenance of tools."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [23, new Map([
            ["id", "80"],
            ["question", "How are handling, storage, packaging and preservation operations controlled?"],
            ["recommandation", "Control handling, storage, packaging and preservation operations. → For each production step, and in accordance with the manufacturer recommendations and/or the applicable regulations, there must be a procedure covering the specific requirements for: (1) Cleaning ; (2) Prevention, detection and removal of foreign bodies ; (3) Handling of sensitive products ; (4) Marking and labelling, including safety marking ; (5) Control of shelf life and stock rotation ; (6) Hazardous materials. Establish specific management procedures for perishables. Eliminate all expired or unidentified products. Suggest criteria for evaluating and analysing the quality of storage conditions. List and analyse failures due to lack of quality in storage."],
            ["weight", "11,3"],
            ["levels", new Map([
                ["N1", "Handling, storage, packaging, preservation and delivery conditions are not coded, and execution of these operations is not perfectly controlled."],
                ["N2", "Handling, storage, packaging, preservation and delivery conditions are coded, there are procedures that can be adapted to all products. Execution of these operations is not specific to a product."],
                ["N3", "Handling, storage, packaging, preservation and delivery conditions are coded, there are procedures specific to each product."],
                ["N4", "Handling, storage, packaging, preservation and delivery conditions are coded, there are procedures specific to each product. Considerations such as expiration dates, sensitivity of products to stress, dangerousness of products are also coded and applied."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [24, new Map([
            ["id", "81"],
            ["question", "How are special processes controlled? Which documents describe these processes, and how are they updated? How are special processes qualified?"],
            ["recommandation", "Control special processes. →  Special processes are processes for which the results cannot be fully verified retrospectively by inspecting or testing the product, and for which the consequences of defective implementation will not appear until the product is used. Examples include gluing, soldering, brazing, heat treatment, and surface treatment. The following points must be taken into account: (1) The special processes to be implemented must be identified. ; (2) The supplier must check that all special process parameters (e.g. materials, personnel, procedures and software) produce satisfactory results. ; (3) The supplier must identify and document significant operations and process parameters to be controlled. ; (4) Any change to these operations and parameters must be described in a proposal justifying the change and guaranteeing that it does not produce any harmful effects for the outcome of the process. ; (5) The supplier must verify special processes by producing one or more typical parts under the conditions defined for the phase. ; (6) Special processes or subcontracted processes must be qualified before use. ; (7) The supplier must keep qualified special processes up to date."],
            ["weight", "15,2"],
            ["levels", new Map([
                ["N1", "Special processes are not identified."],
                ["N2", "Special processes are identified. The parameters for these processes (materials, personnel, procedures and software) are evaluated. These processes are not documented, or not defined by strict procedures."],
                ["N3", "Special processes are identified. The parameters for these processes (materials, personnel, procedures and software) are evaluated. Significant operations and parameters of the process to be controlled in production have been identified and documented. Any modification to these operations and parameters will be described in a proposal justifying this modification and guaranteeing that it does not introduce any harmful effect on the result of the process. Special processes have not been verified by making one or several typical parts under defined conditions."],
                ["N4", "Same criterion as level 3 and also: It is verified that all parameters of special processes (for example materials, personnel, procedures and software) produce the expected results. Special processes are verified by making one or several typical parts under defined conditions. Special processes (subcontracted or not) are qualified before they are used and they are kept up to date."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [25, new Map([
            ["id", "82"],
            ["question", "How are services and fluids controlled in the work environment?"],
            ["recommandation", "Control services and fluids in the work environment. → Services and supplies such as water, compressed air, electricity and chemicals used must be controlled and verified regularly to ensure that their effect on the process remains constant."],
            ["weight", "12,2"],
            ["levels", new Map([
                ["N1", "Services and supplies such as water, compressed air, electricity and chemicals are not verified."],
                ["N2", "Services and supplies such as water, compressed air, electricity and chemicals are verified occasionally following a proven failure (see ISO 14000). "],
                ["N3", "Services and supplies such as water, compressed air, electricity and chemicals are controlled and verified periodically to make sure that their effect on the process is constant."],
                ["N4", "Services and supplies such as water, compressed air, electricity and chemicals are controlled and verified continuously to make sure that their effect on the process is constant."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [26, new Map([
            ["id", "91"],
            ["question", "Are specific ESD protections put in place for components and subassemblies during handling and storage?"],
            ["recommandation", "Implement ESD protections for components and subassemblies during handling and storage. → ESD protections for components and subassemblies include: (1) The grounding (earthing) of machines, tables, shelving, chairs and trolleys ; (2) The incoming inspection of conductive shoes and wristbands for the operators concerned ; (3) The connection of anti-ESD wristbands for operators ; (4) The use of ionizers, if necessary ; (5) The use of antistatic bags for board storage."],
            ["weight", "17,4"],
            ["levels", new Map([
                ["N1", "No check is scheduled and performed."],
                ["N2", "No check is scheduled but can be performed if deemed necessary."],
                ["N3", "Checks are scheduled and performed following a procedure. There is no recordings of what is done."],
                ["N4", "Checks are scheduled, performed following a procedure. Every intervention is documented. The operator is trained for this procedure."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [27, new Map([
            ["id", "114"],
            ["question", "Is there an inspection file containing the acceptance criteria, the inspection and testing sequence, the inspection records, and the list of specific and non-specific inspection instruments?"],
            ["recommandation", "Maintain an inspection file. → The inspection file must contain: (1) The acceptance and rejection criteria ; (2) A sequential list of test and inspection operations to be performed ; (3) The inspection results ; (4) A list of specific and non-specific inspection instruments ; (5) The documents associated with the specific inspection instruments, pertaining to their design, production, validation, management, use and maintenance."],
            ["weight", "5,7"],
            ["levels", new Map([
                ["N1", "No inspection file."],
                ["N2", "The inspection file is limited to the definition of acceptance or refusal criteria."],
                ["N3", "The inspection file defines acceptance or refusal criteria, and the list of operations to be done. It proposes inspection result record documents. "],
                ["N4", "The inspection file contains: the definition of acceptance or refusal criteria, the sequential list of inspection and test operations to be carried out, inspection result record documents, the list of specific and non-specific inspection instruments, documents associated with specific inspection instruments for their design, production, validation, management, use and maintenance."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [28, new Map([
            ["id", "116"],
            ["question", ""],
            ["recommandation", ""],
            ["weight", "11,1"],
            ["levels", new Map([
                ["N1", "There is no documentation specific to the nonconformity."],
                ["N2", "Documentation specific to the nonconformity plays a unique role to identify the nonconforming product."],
                ["N3", "Nonconformity documents specify the product identification, the description of the nonconformity and the cause of the nonconformity. However, there is no formal definition of actions to prevent recurrence of the nonconformity, reworking or repairs if necessary and checking of characteristics affected by the reworking or repairs."],
                ["N4", "Nonconformity documents specify the product identification, the description of the nonconformity and the cause of the nonconformity. Actions are formalised to prevent recurrence of the nonconformity, reworking or repairs if necessary and checking of characteristics affected by the reworking or repairs."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [29, new Map([
            ["id", "116"],
            ["question", "What information is described in the nonconformity reports?"],
            ["recommandation", "Control the quality of data in nonconformity reports. → Nonconformity reports must specify: (1) The product identification ; (2) The description of the nonconformityl, the cause of the nonconformity ; (3) The actions taken to avoid recurrence of the nonconformity ; (4) The rework or repairs, if necessary ; (5) The inspection of the characteristics affected by the rework or repairs ; (6) The final decision."],
            ["weight", "5,2"],
            ["levels", new Map([
                ["N1", "No verification of the test coverage rate during burn-in is done."],
                ["N2", "The test coverage rate during burn-in was verified when it was set up. No additional verifications have been done with regard to possible changes (new technologies, etc.)."],
                ["N3", "The test coverage rate during burn-in is verified. A document describes changes requiring a verification and the procedure to be implemented."],
                ["N4", "The test coverage rate during burn-in is verified. A document describes changes requiring a verification and the procedure to be implemented. This entire document has been validated by an authority independent from the operating entity."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [30, new Map([
            ["id", "181"],
            ["question", "Is the product mission profile known and controlled?"],
            ["recommandation", "Know and control the mission profile. → The product mission profile is fully known and controlled: (1) The potential variations in the different environmental stresses are known ; (2) The impact of environmental stress variation is controlled and taken into account in dependability analyses (e.g. MTBF for safety analyses)."],
            ["weight", "5,2"],
            ["levels", new Map([
                ["N1", "No verification of the test coverage rate during burn-in is done."],
                ["N2", "The test coverage rate during burn-in was verified when it was set up. No additional verifications have been done with regard to possible changes (new technologies, etc.)."],
                ["N3", "The test coverage rate during burn-in is verified. A document describes changes requiring a verification and the procedure to be implemented."],
                ["N4", "The test coverage rate during burn-in is verified. A document describes changes requiring a verification and the procedure to be implemented. This entire document has been validated by an authority independent from the operating entity."],
                ["NA", "Not Applicable"],
            ])]
        ])],
    ])],
    ["Support Activities", new Map([
        [0, new Map([
            ["id", "3"],
            ["question", "Have analyses (such as Process FMECA) been carried out in order to formulate recommendations on the necessary infrastructures for production and integration? Are the recommendations that emerge from these studies formalized? Are the recommendations that emerge from these analyses followed?"],
            ["recommandation", "Allocate the necessary infrastructures to avoid deterioration of products during production and integration operations. → A Process FMECA analysis is conducted to ensure that production and integration operations do not impact reliability; this analysis serves to define the necessary infrastructures or to issue recommendations about existing infrastructures. Typical recommendations: apply 5S methods; provide appropriate power networks, clean rooms, ergonomic buildings; increase surface areas to facilitate handling; improve lighting; implement tidiness and cleanliness standards; improve tool quality; raise awareness of reliability issues."],
            ["weight", "7,4"],
            ["levels", new Map([
                ["N1", "No impact analyses have been conducted on the infrastructures; no measures are planned."],
                ["N2", "Impact analyses are conducted informally; the infrastructures take account of these analyses."],
                ["N3", "Impact analyses are formalized. The recommendations that emerge from these analyses are formalized and taken into account when defining and/or improving the infrastructures."],
                ["N4", "Impact analyses are formalized. The recommendations that emerge from these analyses are formalized and taken into account when defining and/or improving the infrastructures. The infrastructures are subject to periodic inspection."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [1, new Map([
            ["id", "4"],
            ["question", "Have improvement targets been defined for reliability engineering? Have performance indicators been defined for these targets?"],
            ["recommandation", "Continuously improve the company’s reliability engineering. → Set reliability engineering improvement targets and tie them to performance indicators. Examples of targets: (1) Mandatory: maintaining reliability guidelines; achieving reliability performance levels, etc. ; (2) Nice to have: training; participation in working groups, conferences, etc. Audit the company’s reliability engineering."],
            ["weight", "6,6"],
            ["levels", new Map([
                ["N1", "No reliability engineering improvement targets are defined."],
                ["N2", "Reliability engineering improvement targets are defined informally, but no performance indicators are defined for these targets."],
                ["N3", "Reliability engineering improvement targets are formalized and performance indicators are defined for these targets."],
                ["N4", "Reliability engineering improvement targets are formalized, in particular those relating to reliability performance levels and maintaining the guidelines. Performance indicators are in place for these targets. Reliability engineering is evaluated by regular audits."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [2, new Map([
            ["id", "24"],
            ["question", "Is there a procedure to collect customer comments about the reliability of the product in operation?"],
            ["recommandation", "Collect customer comments about the reliability of the product in operation. → Survey customers and users of the product to gather information on its reliability in the operational environment, and conduct corresponding action plans."],
            ["weight", "7,9"],
            ["levels", new Map([
                ["N1", "No information is available about how the reliability of the product is perceived by the customer."],
                ["N2", "Some information is available about how the reliability of the product is perceived by the customer."],
                ["N3", "Customer satisfaction surveys, addressing the reliability aspect, have been conducted."],
                ["N4", "Customer satisfaction surveys, addressing the reliability aspect, have been conducted, action plans to improve reliability have been implemented, and the results have been observed by the customer."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [3, new Map([
            ["id", "45"],
            ["question", "Does the company have one or more quality certifications, such as ISO 9001 v2016 or EN9100?"],
            ["recommandation", "Commit the company to a quality certification process. → Certify the company’s quality system, for example to ISO 9001 v2016 or EN9100 standard."],
            ["weight", "6,5"],
            ["levels", new Map([
                ["N1", "The manufacturer has not set up a quality system."],
                ["N2", "The manufacturer has set up a quality system, but is not recognized by a quality certification standard, or the certification is more than one year old."],
                ["N3", "The manufacturer has set up a quality system and has obtained certification, e.g. ISO 9001 v2016 or EN9100."],
                ["N4", "The manufacturer has set up a quality system and has obtained certification, e.g. ISO 9001 v2016 or EN9100. The manufacturer conducts an internal audit on the reliability activity regularly (at least every two years) to define improvement actions."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [4, new Map([
            ["id", "53"],
            ["question", "Is experience feedback used to maintain confidence in delivering the required reliability performance?"],
            ["recommandation", "Leverage experience feedback. → Leverage experience feedback on products in operation. Experience feedback is exploited for three purposes: (1) To establish reasonable confidence in delivering the required reliability performance: field data analyses are performed on similar products used in similar environments, to consolidate predictive data ; (2) To improve product reliability: feedback analyses are shared with the development teams, in order to identify improvement options in terms of design ; (3) To readjust/calibrate/control predictive reliability methods. The methodology for exploiting feedback must be correctly defined. These studies require a large amount of time to collect operational data, and meticulous recording of the anomalies encountered. Input data: (1) Records of observed anomalies ; (2) The conditions of use of the product (mission profile, operational environment, length of use) ; (3) Analysis of the cause of failures (whether attributable to the manufacturer or not). Output data: (1) Operational reliability, which can be extrapolated for different environments and mission profiles by using system engineering models."],
            ["weight", "5,2"],
            ["levels", new Map([
                ["N1", "No experience feedback (measuring operational reliability on previous projects) is available."],
                ["N2", "Experience feedback is available, but it is neither used nor formalized."],
                ["N3", "The manufacturer’s experience feedback is used and formalized in a document. This field data does not correspond exactly to the technologies employed. There is a procedure to validate or readjust predictive reliability methods."],
                ["N4", "The manufacturer’s experience feedback is used and formalized in a document. This field data corresponds to the current technologies employed, or similarity studies are conducted and formalized to evaluate the differences (document). There is a procedure to validate or readjust predictive reliability methods, and it is regularly updated."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [5, new Map([
            ["id", "55"],
            ["question", "Does the Dependability function participate in every phase of the project?"],
            ["recommandation", "Involve the Dependability function in every phase of the project. → The Dependability function participates in every phase of the project, from the upstream development phases through to the start of production. The Dependability function is also involved in production and in operational monitoring."],
            ["weight", "8,8"],
            ["levels", new Map([
                ["N1", "No reliability engineers participate in the project."],
                ["N2", "Reliability engineers participate partially in the project (incomplete assistance as defined in the recommendation); there are no documents attesting to their participation."],
                ["N3", "Reliability engineers participate fully in the project (full assistance as defined in the recommendation); this participation is not formalized by any plan or procedure."],
                ["N4", "Reliability engineers participate fully in the project (full assistance as defined in the recommendation); this participation is formalized and attested in documents."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [6, new Map([
            ["id", "56"],
            ["question", "Is the training of reliability personnel adapted to the criticality of the reliability performance expected from the product?"],
            ["recommandation", "Provide training for personnel in reliability studies or whose work has an influence on reliability, or employ qualified personnel. → Provide training for personnel in reliability studies, with training varying from awareness-raising to expert refresher courses for reliability managers, depending on the criticality of the reliability performance expected from the product. Make production personnel aware of the importance of avoiding deterioration of products."],
            ["weight", "7,5"],
            ["levels", new Map([
                ["N1", "No specific training (whether initial or further training) is given to personnel in charge of reliability studies. No awareness actions are carried out for production personnel."],
                ["N2", "Personnel in charge of reliability studies have been trained, but no awareness actions are carried out for production personnel."],
                ["N3", "Personnel in charge of reliability studies have been trained and awareness actions are carried out for production personnel."],
                ["N4", "Personnel in charge of reliability studies have been trained; they are experienced, and engage with reliability work. Awareness actions are carried out for production personnel."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [7, new Map([
            ["id", "58"],
            ["question", "Is the necessary technical data for reliability studies accessible? Are the necessary tools available for reliability studies? Are the necessary time and funding provided for the studies?"],
            ["recommandation", "Supply the necessary resources for reliability studies. → Allocate the necessary resources for reliability studies: (1) Access to technical data ; (2) Tools and equipment ; (3) Time and funding."],
            ["weight", "8,3"],
            ["levels", new Map([
                ["N1", "There is no clear allocation of resources to reliability activities."],
                ["N2", "Resources are allocated to reliability activities, but they are insufficient: one of the three resources, technical data, tools and equipment, or time and funding, is not available."],
                ["N3", "Sufficient resources are allocated to reliability activities."],
                ["N4", "Sufficient resources are allocated to reliability activities. These resources are described in a project management plan or in a reliability management plan."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [8, new Map([
            ["id", "59"],
            ["question", "Are reliability studies documents managed?"],
            ["recommandation", "Manage reliability studies documentation. → Manage reliability studies documentation: validation, backup, archiving, configuration management of documents. Document management extends to any document that has an influence on reliability studies, including any document that formally defines the assumptions and input data."],
            ["weight", "5,4"],
            ["levels", new Map([
                ["N1", "Reliability documents are not managed."],
                ["N2", "Only certain documents (for example, customer deliverables) are managed."],
                ["N3", "Reliability studies documentation is not fully managed, as defined in the recommendation: for example, configuration management is not systematic, the assumptions underlying predictive calculations are not formalized, etc."],
                ["N4", "Reliability studies documentation is fully managed: with systematic configuration management of all documents, including those relating to assumptions and input data. Predictive reliability studies documents are available for the lifetime of the programmes (for comparative predictive/operational studies)."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [9, new Map([
            ["id", "68"],
            ["question", "Have product reliability risks at subcontractors been identified?"],
            ["recommandation", "Identify product reliability risks at subcontractors. → Identify reliability risks in subcontracted products: risk of not delivering reliability performance, use of new technologies, components used outside specifications, etc."],
            ["weight", "7,2"],
            ["levels", new Map([
                ["N1", "Reliability risks are not identified with the subcontractor before the signing of the contract (no specific provision)."],
                ["N2", "Reliability risks are not identified with the subcontractor before the signing of the contract, but risks are identified during the project. However, they are not managed."],
                ["N3", "An analysis of reliability risks is carried out before the signing of the contract and is covered by a formal document. However, these risks are not managed."],
                ["N4", "An analysis of reliability risks is carried out before the signing of the contract and is covered by a formal document, which is updated and configuration-managed."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [10, new Map([
            ["id", "69"],
            ["question", "Does the subject of reliability feature in the company’s quality policy?"],
            ["recommandation", "Integrate reliability into the company’s quality policy. → Integrate reliability activities into the company’s quality policy and adapt the policy to the levels concerned by reliability engineering. The company’s quality manual deals specifically with reliability activities. An audit of the reliability process (as proposed by the FIDES Guide, for example) is integrated into the company’s quality audits"],
            ["weight", "7,4"],
            ["levels", new Map([
                ["N1", "The quality policy does not take reliability into account."],
                ["N2", "Reliability is mentioned indirectly in the quality policy objectives. The company’s quality manual does not specifically address reliability activities."],
                ["N3", "Reliability features in the company’s quality policy. Reliability activities are specifically addressed in the company’s quality manual."],
                ["N4", "Reliability is one of the key features of the quality policy. Reliability activities are specifically addressed in the company’s quality manual. An audit of the reliability process is integrated into the company’s quality audits."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [11, new Map([
            ["id", "76"],
            ["question", "What procedure is there to control monitoring and measurement devices, the metrology of measurement apparatus and industrial machinery?"],
            ["recommandation", "Control monitoring and measurement devices, the metrology of measurement apparatus and industrial machinery. → Control monitoring and measurement devices, the metrology of measurement apparatus and industrial machinery. Control the verification, calibration and rating of the measurement instruments and the test and trial equipment used by the company. The measurement instruments are linked to national measurement standards."],
            ["weight", "7,8"],
            ["levels", new Map([
                ["N1", "There is no verification, calibration and rating procedure in the company for measurement instruments or for test and trial equipment."],
                ["N2", "There is a verification, calibration and rating procedure in the company for measurement instruments and for test and trial equipment, but is not followed."],
                ["N3", "There is a verification, calibration and rating procedure in the company for measurement instruments and for test and trial equipment, and it is applied."],
                ["N4", "The verification, calibration and rating of the measurement instruments and test and trial equipment used by the company is controlled (accreditation, certification, etc.).   measurement instruments are linked to national measurement standards."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [12, new Map([
            ["id", "104"],
            ["question", "Has someone been formally appointed to be in charge of reliability studies?"],
            ["recommandation", "Appoint someone to be in charge of reliability studies. → Appoint a reliability manager for each project, with responsibility for ensuring that the product reliability objectives are achieved. This person will report on the progress of studies and on problems encountered."],
            ["weight", "8,5"],
            ["levels", new Map([
                ["N1", "Nobody is identified as being in charge of reliability studies."],
                ["N2", "There is somebody in charge of reliability studies, but there is no record of their appointment."],
                ["N3", "Somebody has been formally appointed to take charge of reliability studies. They are  named in a programme management plan or in a function-specific plan (reliability or RAMS plan). They are trained and experienced in the field of reliability."],
                ["N4", "Somebody has been formally appointed to take charge of reliability studies. They are named in a programme management plan or in a function-specific plan (reliability or RAMS plan). They are trained and experienced in the field of reliability. They are integrated into  the project and provide regular updates on  the progress of studies at meetings or in reports."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [13, new Map([
            ["id", "105"],
            ["question", "How is the subcontracting of reliability studies managed?"],
            ["recommandation", "Manage the subcontracting of reliability studies. → The subcontracting of reliability studies must be organized and formalized: (1) The process of communication and data exchange with the subcontractor must be described ; (2) Periodic meetings must be organized with the subcontractor."],
            ["weight", "5,7"],
            ["levels", new Map([
                ["N1", "The management of subcontracting is neither organized nor formalized."],
                ["N2", "The management of subcontracting is incomplete (at least one of the two criteria in the further description is not met)."],
                ["N3", "The management of subcontracting is  complete, with regard to both the criteria in  the further description, but it is not formalized  in a project management plan."],
                ["N4", "The management of subcontracting is  described in a project management plan, covering, at least, both of the criteria in the further description."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [14, new Map([
            ["id", "110"],
            ["question", "Are reliability growth actions implemented?"],
            ["recommandation", "Implement reliability growth actions. → Describe reliability growth activities in the reliability plan, and document their implementation."],
            ["weight", "9,1"],
            ["levels", new Map([
                ["N1", "No product reliability growth activities are planned or implemented."],
                ["N2", "Product reliability growth activities do exist, but are not described in any plan."],
                ["N3", "Product reliability growth activities are described in a plan and are partially implemented."],
                ["N4", "Product reliability growth activities are described in a plan and are fully implemented."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [15, new Map([
            ["id", "111"],
            ["question", "Are reliability studies planned?"],
            ["recommandation", "Plan reliability studies. → Plan reliability studies and synchronize them with the design of the product. Integrate reliability activities into project schedules."],
            ["weight", "7,3"],
            ["levels", new Map([
                ["N1", "Reliability studies are not planned."],
                ["N2", "Reliability studies are planned informally (schedule defined and updated by the reliability team)."],
                ["N3", "Reliability studies are identified in a project schedule."],
                ["N4", "Reliability studies are identified in a project  schedule, which is updated. The  synchronization with the design of the product is formalized through milestones, freezes, etc."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [16, new Map([
            ["id", "119"],
            ["question", "Are periodic consultations planned with customers on reliability aspects?"],
            ["recommandation", "Plan for periodic customer consultations on reliability aspects. → Consult customers regularly on operational reliability aspects and take their comments into account for the design of new products. This consultation can be conducted through customer satisfaction surveys, which must take account of reliability aspects."],
            ["weight", "7,3"],
            ["levels", new Map([
                ["N1", "There is no available customer feedback about the perception of product reliability."],
                ["N2", "There is some available customer feedback on reliability, but it is rarely used."],
                ["N3", "There is some available customer feedback  on reliability, and it is used to improve product design, development and manufacture."],
                ["N4", "The company regularly consults its customers about the reliability of its products (formal interviews or questionnaire surveys). This feedback is used and give rise to action plans, the results of which are communicated to the customer. The effectiveness of this process can be demonstrated by customer satisfaction levels."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [17, new Map([
            ["id", "142"],
            ["question", "Are reliability criteria considered when selecting the components to be used?"],
            ["recommandation", "Select the components used. → Select the components used on the basis of the expected reliability level: analyse the market; evaluate the reliability of the components."],
            ["weight", "12,9"],
            ["levels", new Map([
                ["N1", "There is no selection of components."],
                ["N2", "Components are selected on the basis of reliability (and/or manufacturing quality), but only informally."],
                ["N3", "The company guidelines call for components to be selected on the basis of reliability (and/or manufacturing quality). This is followed, but is based only on manufacturer data."],
                ["N4", "The company guidelines call for components to be selected on the basis of reliability (and/or manufacturing quality). This is followed, and is based on in-depth analyses (using manufacturer data, manufacturer audits, and evaluations of the technologies employed)."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [18, new Map([
            ["id", "143"],
            ["question", "Are reliability criteria considered when selecting component suppliers?"],
            ["recommandation", "Select component suppliers. → Select component suppliers: analyse the market; evaluate how component reliability is taken into account by suppliers."],
            ["weight", "10,8"],
            ["levels", new Map([
                ["N1", "Component suppliers are not selected."],
                ["N2", "Component suppliers are selected informally."],
                ["N3", "The company guidelines call for suppliers to be selected on the basis of reliability (and/or manufacturing quality). This is followed, but is based only on supplier data."],
                ["N4", "The company guidelines call for suppliers to be selected on the basis of reliability (and/or manufacturing quality). This is followed, and is based on formal activities: interviews with suppliers, track record analysis, audits, ISO certifications, etc."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [19, new Map([
            ["id", "146"],
            ["question", "Are reliability-related corrective actions by subcontractors monitored?"],
            ["recommandation", "Monitor and control corrective actions by subcontractors relating to product reliability. → Monitor and control (through plans and records) corrective actions by subcontractors relating to product reliability."],
            ["weight", "7,2"],
            ["levels", new Map([
                ["N1", "There is no system for monitoring corrective actions that the subcontractor has been asked to perform."],
                ["N2", "Corrective actions required from  subcontractors are monitored partially during meetings with the subcontractor."],
                ["N3", "A system has been set up to periodically monitor corrective actions required from subcontractors, but it is not fully or sufficiently controlled."],
                ["N4", "A system has been set up to periodically monitor corrective actions required from subcontractors, and there are documents attesting that they are monitored."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [20, new Map([
            ["id", "148"],
            ["question", "Is reliability addressed in management reviews?"],
            ["recommandation", "Address reliability in management reviews. → Put reliability on the agenda of management reviews (progress targets, action plans, monitoring of target attainment, reliability assessment of products at customers)."],
            ["weight", "5,6"],
            ["levels", new Map([
                ["N1", "Product reliability is not addressed in management reviews."],
                ["N2", "Product reliability is addressed sporadically in management reviews."],
                ["N3", "Product reliability is addressed  systematically in management reviews."],
                ["N4", "Product reliability is addressed systematically in management reviews; progress targets are defined and their attainment is evaluated."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [21, new Map([
            ["id", "149"],
            ["question", "What process is set up to collect technical events, produce anomaly reports and measure improved reliability? How are hardware upgrades managed?"],
            ["recommandation", "Handle anomalies through an incident management and corrective action approach. → Set up an anomaly processing system that can cover the entire FIDES life cycle. This system is intended to: (1) record the circumstances of the anomaly, ; (2) record references of the defective product, ; (3) propose remedial action, ; (4) analyse the causes of the anomaly, ; (5) propose corrective/preventive actions, ; (6) check the efficiency of the corrective/preventive actions. Processing in this system is suitable for: (1) quickly finding identical anomalies observed previously ; (2) producing statistics, ; (3) use as feedback from operations."],
            ["weight", "8,3"],
            ["levels", new Map([
                ["N1", "There is no system for processing anomalies."],
                ["N2", "The manufacturer has set up a system for processing anomalies that partially satisfies the requirements of the recommendation. It is not fully applied to the project."],
                ["N3", "The manufacturer has set up a system for processing anomalies that partially satisfies the requirements of the recommendation. It is fully applied to the project."],
                ["N4", "The manufacturer has set up a system for processing anomalies that fully satisfies the requirements of the recommendation. It is fully applied to the project. Furthermore: (1) Indicators are available, ; (2) They are regularly interpreted to produce conclusions, ; (3) Benefits of the system set up are measured."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [22, new Map([
            ["id", "151"],
            ["question", "Are appropriate statistical methods used to leverage experience feedback?"],
            ["recommandation", "Use appropriate statistical methods to leverage experience feedback. → Use appropriate statistical methods to leverage experience feedback."],
            ["weight", "6"],
            ["levels", new Map([
                ["N1", "Feedback is neither observed nor documented."],
                ["N2", "Feedback is documented, but it is not used,  or it is used with unsuitable and nonformalized statistical methods."],
                ["N3", "Feedback is documented, and is exploited with suitable methods, but they are not formalized (no generalized methods)."],
                ["N4", "Feedback is documented; it is processed using relevant statistical methods and is communicated to users."],
                ["NA", "Not Applicable"],
            ])]
        ])],
        [23, new Map([
            ["id", "152"],
            ["question", "Are the subcontractor’s reliability management guidelines validated?"],
            ["recommandation", "Validate the subcontractor’s reliability management guidelines. → Validate the subcontractor’s reliability management guidelines. In particular, make sure that the contractual requirements are correctly incorporated by the subcontractor."],
            ["weight", "7,7"],
            ["levels", new Map([
                ["N1", "The contractual reliability requirements, though applicable, are not transmitted to the subcontractor."],
                ["N2", "The manufacturer transmits the contractual or internal reliability requirements to the subcontractor, but there is no document  written by the subcontractor that guarantees the implementation of these requirements."],
                ["N3", "The subcontractor has produced reliability management guidelines (a management plan or reliability plan) that mirror the manufacturer’s original requirements. However, the implementation of these guidelines is not verified by the manufacturer."],
                ["N4", "The subcontractor has produced reliability management guidelines (a management plan or reliability plan) that mirror the manufacturer’s original requirements. The implementation of these guidelines is validated by the manufacturer (through progress meetings, audits, etc.)."],
                ["NA", "Not Applicable"],
            ])]
        ])],
    ])],
])
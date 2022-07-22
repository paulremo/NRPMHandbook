function runPiProcess() {

    /* CONFIGURE CONSTANTS */

    let planets = document.getElementsByClassName("planet");
    let options = document.getElementsByClassName("choice-description");
    let pages = document.getElementsByClassName("pageNumber");

    let astronaut = "pictures/new_astronaut.svg";
    let happy_astronaut = "pictures/new_astronaut_happy.svg";
    let idea_astronaut = "pictures/new_astronaut_idea.svg";
    let speaking_astronaut = "pictures/new_astronaut_speaks.svg";

    var coll = document.getElementsByClassName("collapsible");

    let new_dico = question_dico;

    let categoryIcons = new Map([
        ["Specification", "planet1"],
        ["Design", "planet2"],
        ["Manufacturing of board - Subassembly", "planet3"],
        ["Integration into equipment", "planet4"],
        ["Integration into system", "planet5"],
        ["Operation and Maintenance", "planet6"],
        ["Support Activities", "planet7"]
    ])

    let categoryContribution = new Map([
        ["Specification", 0.10],
        ["Design", 0.21],
        ["Manufacturing of board - Subassembly", 0.20],
        ["Integration into equipment", 0.15],
        ["Integration into system", 0.15],
        ["Operation and Maintenance", 0.10],
        ["Support Activities", 0.9]
    ])

    let delta_2 = 2.079;

    /* CONFIGURE VARIABLES */

    var i;

    let currentAnswers = new Map();;

    let commentsDico = dicoComments;

    let current_category = "Specification";
    let current_question = 0;

    let info_displayed = false;


    let process_factor = 1;

    let modeSubco = true;
    let appliNS = true;

    /* CONFIGURE ONCLICK EVENTS */

    document.getElementById("mode-button").onclick = function () {
        if (modeSubco) {
            this.style.backgroundColor = "#002f72"
            this.innerHTML = "PRIME";
            modeSubco = false;
        }
        else {
            this.style.backgroundColor = "#730f00"
            this.innerHTML = "SUBCONTRACTOR";
            modeSubco = true;
        }
    }

    document.getElementById("application-button").onclick = function () {
        if (appliNS) {
            this.style.backgroundColor = "#ff8eea"
            this.innerHTML = "CLASSIK";
            appliNS = false;
        }
        else {
            this.style.backgroundColor = "#ffe100"
            this.innerHTML = "NEW SPACE";
            appliNS = true;
        }
    }

    let modeKey;
    let appliDico;
    document.getElementById("start").onclick = function () {
        document.getElementById('overlay').style.display = 'none';
        console.log(document.getElementById("question-load").value)
        if (document.getElementById("question-load").value != "") {
            if (document.getElementById("question-load").value.substring(0,13) == "Specification"){
                let ans_dico = generate_saved_answers_collection(document.getElementById("question-load").value);
                if (ans_dico.size == 7){
                    currentAnswers = ans_dico;
                }
                else{
                    alert("Values corrupted, please verify your data and try again");
                    for (const [key, value] of new_dico) {
                        let ct_dict = new Map();
                        for (const [q, v] of value) {
                            if (modeSubco) {
                                modeKey = "subco"
                            }
                            else {
                                modeKey = "prime"
                            }
                            if (appliNS) {
                                appliDico = recomNS
                            }
                            else {
                                appliDico = recomCL
                            }
                            let recoms = appliDico.get(new_dico.get(key).get(parseInt(q)).get("id")).get(modeKey);
                            //console.log(key, q, modeKey, recoms.values().next().value);
                            if (recoms.values().next().value == 'NA') {
                                ct_dict.set(q, "NA");
                            }
                            else {
                                ct_dict.set(q, null);
                            }
                        }
                        currentAnswers.set(key, ct_dict);
                    }
                }
            }
            else{
                alert("Values corrupted, please verify your data and try again");
                for (const [key, value] of new_dico) {
                    let ct_dict = new Map();
                    for (const [q, v] of value) {
                        if (modeSubco) {
                            modeKey = "subco"
                        }
                        else {
                            modeKey = "prime"
                        }
                        if (appliNS) {
                            appliDico = recomNS
                        }
                        else {
                            appliDico = recomCL
                        }
                        let recoms = appliDico.get(new_dico.get(key).get(parseInt(q)).get("id")).get(modeKey);
                        //console.log(key, q, modeKey, recoms.values().next().value);
                        if (recoms.values().next().value == 'NA') {
                            ct_dict.set(q, "NA");
                        }
                        else {
                            ct_dict.set(q, null);
                        }
                    }
                    currentAnswers.set(key, ct_dict);
                }
            }
            
        }
        else {
            for (const [key, value] of new_dico) {
                let ct_dict = new Map();
                for (const [q, v] of value) {
                    if (modeSubco) {
                        modeKey = "subco"
                    }
                    else {
                        modeKey = "prime"
                    }
                    if (appliNS) {
                        appliDico = recomNS
                    }
                    else {
                        appliDico = recomCL
                    }
                    let recoms = appliDico.get(new_dico.get(key).get(parseInt(q)).get("id")).get(modeKey);
                    //console.log(key, q, modeKey, recoms.values().next().value);
                    if (recoms.values().next().value == 'NA') {
                        ct_dict.set(q, "NA");
                    }
                    else {
                        ct_dict.set(q, null);
                    }
                }
                currentAnswers.set(key, ct_dict);
            }

        }

        document.getElementById("planetBox1").click();

        calculate_process_factor();
    }

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = "fit-content";
            }
            if (info_displayed) {
                document.getElementById("astronautPicture").src = astronaut;
                info_displayed = false;
            }
            else {
                document.getElementById("astronautPicture").src = speaking_astronaut;
                info_displayed = true;
            }
        });
    }

    /* CONFIGURE COLLECTIONS */




    let categoriesCollection = new Map([
        ["1", false],
        ["2", false],
        ["3", false],
        ["4", false],
        ["5", false],
        ["6", false],
        ["7", false]
    ])

    let optionsCollection = new Map([
        ["1", false],
        ["2", false],
        ["3", false],
        ["4", false]
    ])


    let pagesCollection = new Map();


    /* UTILITY FUNCTIONS */

    function clearElement(e) {
        for (child of e.childNodes) {
            child.remove();
        }
    }

    function transformName(name) {
        let trueName;
        if (name == "MANUFACTURING OF BOARD - SUBASSEMBLY") {
            /*trueName = content[0].charAt(0) + content[0].slice(1).toLowerCase() + "-" + content[1].charAt(0) +  content[1].charAt(1) +content[1].slice(2).toLowerCase();*/
            trueName = "Manufacturing of board - Subassembly";
        }
        else if (name == "OPERATION AND MAINTENANCE") {
            trueName = "Operation and Maintenance";
        }
        else if (name == "SUPPORT ACTIVITIES") {
            trueName = "Support Activities";
        }
        else {
            trueName = name.charAt(0) + name.slice(1).toLowerCase();
        }
        return trueName;
    }

    function saveAnswers() {
        let ans = "";
        //console.log(ans);
        for ([cat, value] of currentAnswers) {
            ans = ans + cat + ":"
            for ([q, v] of currentAnswers.get(cat)) {
                if (currentAnswers.get(cat).get(q) == 'NA') {
                    ans = ans + q + "," + 'NA';
                }
                else if (currentAnswers.get(cat).get(q) == null) {
                    ans = ans + q + "," +  'null';
                }
                else {
                    ans = ans + q + "," + currentAnswers.get(cat).get(q);
                }
                ans = ans + ";"
            }
            ans = ans.substring(0, ans.length - 1) + "!"
        }
        console.log(ans);
        return ans.substring(0, ans.length - 1);
    }

    function generate_saved_answers_collection(answer_str){
        let loaded_answers = new Map();
        let categories = answer_str.split("!");
        console.log(categories)
        for (c of categories){
            let questions_answers = c.split(":")[1];
            let cat_name = c.split(":")[0];
            console.log(cat_name)
            loaded_answers.set(cat_name, new Map());
            for (q_a of questions_answers.split(";")){
                let id_q_a = parseInt(q_a.split(",")[0]);
                let ans_q_a = q_a.split(",")[1];
                if (ans_q_a == "null"){
                    ans_q_a = null;
                }
                loaded_answers.get(cat_name).set(id_q_a, ans_q_a);
            }
        }
        console.log(loaded_answers);
        return loaded_answers
    }
    

    /* Configure interface according to the selected category */

    function configureCategory(cat) {
        current_category = cat;
        let cat_dico = currentAnswers.get(cat)
        console.log(cat_dico)
        pagesCollection = new Map();
        document.getElementById("pages-box").remove();
        let newPageBox = document.createElement("tr");
        newPageBox.id = "pages-box";
        document.getElementById("pages").appendChild(newPageBox);

        for (const [key, value] of cat_dico) {
            console.log(key)
            let page_num = document.createElement("td");
            let id = parseInt(new_dico.get(current_category).get(key).get("id"));
            if (id < 10) {
                page_num.innerHTML = "00" + (id);
            }
            else if (id < 100) {
                page_num.innerHTML = "0" + (id);
            }
            else {
                page_num.innerHTML = id;
            }
            page_num.id = "page" + key;
            page_num.className = "pageNumber";
            pagesCollection.set(key, false);
            if (cat_dico.get(key) == "NA") {
                page_num.style.backgroundColor = "black"
            }
            document.getElementById("pages-box").appendChild(page_num);
        }

        pages = document.getElementsByClassName("pageNumber");

        for (var pgn of pages) {
            pgn.onclick = function () {
                for (var pb of pages) {
                    setPageUnclicked(pb);
                    setUnclickedPageStyle(pb);
                }
                setClickedPageStyle(this);
                setPageClicked(this);
            }
            pgn.onmouseenter = function () {
                setClickedPageStyle(this);
            }
            pgn.onmouseleave = function () {
                let num = this.id.substr(4);
                if (!pagesCollection.get(num)) {
                    setUnclickedPageStyle(this);
                }
            }
        }

        for (var [ct, v] of categoryIcons) {
            checkCategoryFilled(ct);
        }

        document.getElementById("category-title").innerHTML = cat.toUpperCase();

        let first = findFirstApplicable(cat);
        if (first != null) {
            document.getElementById("page" + first).click();
        }
        else {
            document.getElementById("page0").click();
        }



        calculate_process_factor();

    }

    function findFirstApplicable(category) {
        let cnt = 0;
        let found = false;
        while (!found && cnt < new_dico.get(category).size) {
            found = (currentAnswers.get(current_category).get(cnt) != 'NA')
            cnt += 1;
        }
        if (found) {
            return cnt - 1
        }
        else {
            return null
        }
    }

    /* Configure interface according to the selected question */

    function configureQuestion(q) {
        current_question = q;
        let q_information = new_dico.get(current_category).get(parseInt(q));
        let id = q_information.get('id');
        let text = q_information.get('question');
        let recommandation = q_information.get('recommandation');
        let weight = q_information.get('weight');
        let n1 = q_information.get('levels').get('N1');
        let n2 = q_information.get('levels').get('N2');
        let n3 = q_information.get('levels').get('N3');
        let n4 = q_information.get('levels').get('N4');

        let text_divided = text.split('?');
        document.getElementById("questionBox").remove();
        let div = document.createElement("div");
        div.id = "questionBox";
        document.getElementById("questionBoxDiv").appendChild(div);
        //clearElement(document.getElementById("questionBox"));

        for (q_element of text_divided) {
            if (q_element.length > 3) {
                let new_p = document.createElement("p");
                new_p.innerHTML = q_element + " ?";
                document.getElementById("questionBox").appendChild(new_p);
            }
        }

        document.getElementById("choice1").innerHTML = n1;
        document.getElementById("choice2").innerHTML = n2;
        document.getElementById("choice3").innerHTML = n3;
        document.getElementById("choice4").innerHTML = n4;
        let q_answer = currentAnswers.get(current_category).get(parseInt(q));
        if (q_answer != "NA" && q_answer != null) {
            document.getElementById("choice" + q_answer[1]).click();
        }
        else if (q_answer == "NA") {
            document.getElementById("not-applicable").click();
        }
        else {
            for (var pb of document.getElementsByClassName("choice-description")) {
                setNonApplicableUnclicked();
                setOptionUnclicked(pb);
                setFreeOptionStyle(pb);
            }
        }
        document.getElementById("number").innerHTML = id;
        document.getElementById("recommandation").innerHTML = recommandation;
        document.getElementById("weight").innerHTML = weight;

        if (modeSubco) {
            modeKey = "subco"
        }
        else {
            modeKey = "prime"
        }
        if (appliNS) {
            appliDico = recomNS;
        }
        else {
            appliDico = recomCL;
        }

        let recoms = appliDico.get(new_dico.get(current_category).get(parseInt(current_question)).get("id")).get(modeKey);
        for (var rec of document.getElementsByClassName("recom")) {
            rec.innerHTML = "";
        }
        document.getElementById("recommendationNA").innerHTML = "";
        if (recoms != null) {
            for (var el of recoms) {
                if (el == 'NA') {
                    document.getElementById("recommendationNA").innerHTML = "★";
                }
                else {
                    document.getElementById("recommendation" + el).innerHTML = "★";
                }
            }
        }


    }

    /* NAVIGATION FUNCTIONS */

    function nextQuestion() {
        if (parseInt(current_question) < currentAnswers.get(current_category).size) {
            let nextQuestion = parseInt(current_question) + 1;
            while (currentAnswers.get(current_category).get(nextQuestion) == 'NA' && parseInt(current_question) < currentAnswers.get(current_category).size) {
                nextQuestion = nextQuestion + 1;
            }
            if (nextQuestion > currentAnswers.get(current_category).size - 1) {
                console.log(categoryIcons.get(current_category).substring(6))
                if (parseInt(categoryIcons.get(current_category).substring(6)) + 1 < 8) {
                    let nextCat = parseInt(categoryIcons.get(current_category).substring(6)) + 1;
                    document.getElementById("planet" + nextCat).click();
                }
                else {
                    document.getElementById("page" + current_question).click();
                    document.getElementById("right-button").disabled = true;
                }

            }
            else {
                document.getElementById("page" + nextQuestion).click();
            }

        }
    }

    function previousQuestion() {
        if (parseInt(current_question) > 0) {
            let nextQuestion = parseInt(current_question) - 1;
            while (currentAnswers.get(current_category).get(nextQuestion) == 'NA' && parseInt(current_question) >= 0) {
                nextQuestion = nextQuestion - 1;
            }
            if (nextQuestion == 0) {
                nextQuestion = parseInt(current_question);
            }
            document.getElementById("page" + nextQuestion).click();
        }
    }


    /* STYLING AND ANSWER FUNCTIONS */

    function setOptionClicked(opt) {
        let optDescr = opt.id.substr(-1);
        optionsCollection.set(optDescr, true);
        currentAnswers.get(current_category).set(parseInt(current_question), "N" + optDescr)
        for ([cat, value] of new_dico) {
            for ([q, v] of new_dico.get(cat)) {
                if (new_dico.get(cat).get(q).get("id") == new_dico.get(current_category).get(parseInt(current_question)).get("id")) {
                    currentAnswers.get(cat).set(q, "N" + optDescr)
                }
            }
        }
        let last_astronaut = document.getElementById("astronautPicture").src
        document.getElementById("astronautPicture").src = happy_astronaut;
        window.setTimeout(() => {
            document.getElementById("astronautPicture").src = last_astronaut;
        }, "500")
    }

    function setOptionUnclicked(opt) {
        let optDescr = opt.id.substr(-1);
        optionsCollection.set(optDescr, false);
    }

    function setFreeOptionStyle(opt) {
        let optDescr = opt;
        optDescr.style.backgroundColor = "#eae8e8";
        optDescr.style.color = "#555555";
    }

    function setHoveredOptionStyle(opt) {
        let optDescr = opt;
        optDescr.style.backgroundColor = "#076a78";
        optDescr.style.color = "#eee";
    }

    function setClickedOptionStyle(opt) {
        let optDescr = opt;
        optDescr.style.backgroundColor = "#720154";
        optDescr.style.color = "#eee";
    }

    function setCategoryClicked(plt) {
        let num = plt.id.substr(-1);
        categoriesCollection.set(num, true);
        let catName = plt.innerHTML.split('<br>')[1];
        configureCategory(transformName(catName));
    }

    function setNonApplicableClicked() {
        let btn = document.getElementById("not-applicable");
        btn.style.backgroundColor = "#720154";
        btn.style.color = "#eee";
        currentAnswers.get(current_category).set(parseInt(current_question), "NA");
    }

    function setNonApplicableUnclicked() {
        let btn = document.getElementById("not-applicable");
        btn.style.backgroundColor = "black";
        btn.style.color = "#eee";
    }



    function setCategoryUnclicked(plt) {
        let num = plt.childNodes[0].id.substr(-1);
        categoriesCollection.set(num, false);
    }

    function setUnclickedCategoryStyle(plt) {
        plt.style.backgroundColor = "";
        plt.style.color = "black";
    }

    function setClickedCategoryStyle(plt) {
        let num = plt.childNodes[0].id.substr(-1);
        plt.style.backgroundColor = "black";
        plt.style.color = "white";
    }

    function setPageClicked(pg) {
        let num = pg.id.substr(4);

        pagesCollection.set(num, true);
        if (num == "0") {
            document.getElementById("left-button").disabled = true;
            document.getElementById("right-button").disabled = false;
        }
        else {
            document.getElementById("left-button").disabled = false;
            document.getElementById("right-button").disabled = false;
        }
        configureQuestion(num)

    }

    function setPageUnclicked(pg) {
        let num = pg.id.substr(4);
        pagesCollection.set(num, false);
    }

    function setUnclickedPageStyle(pg) {
        let num = pg.id.substr(4);
        if (currentAnswers.get(current_category).get(parseInt(num)) == "NA") {
            pg.style.backgroundColor = "black";
        }
        else if (currentAnswers.get(current_category).get(parseInt(num)) != null) {
            pg.style.backgroundColor = "gray";
        }
        else {
            pg.style.backgroundColor = "#006597";
        }
        pg.style.color = "white";
    }

    function setClickedPageStyle(pg) {
        pg.style.backgroundColor = "#7fd3fc";
        pg.style.color = "black";
    }

    /* Check that all the applicable questions of the current category have been answered */

    function checkCategoryFilled(cat) {
        let filled = true;
        for (const [key, v] of currentAnswers.get(current_category)) {
            if (v == null) {
                filled = false
            }
        }
        if (filled) {
            document.getElementById(categoryIcons.get(current_category)).src = "pictures/pi_process/" + categoryIcons.get(current_category) + ".svg"
        }
    }

    /* Process the pi process value */

    function calculate_process_factor() {
        let process_grade = 0;
        for (var [key, value] of currentAnswers) {
            let n_audit = 0;
            let n_audit_max = 1;
            for (const [k, v] of value) {
                if (v == null) {
                    n_audit = n_audit + 0 * parseInt(new_dico.get(key).get(k).get('weight'));
                    n_audit_max = n_audit_max + 3 * parseInt(new_dico.get(key).get(k).get('weight'));
                }
                else if (v == 'NA') {
                }
                else {
                    n_audit = n_audit + (parseInt(v.slice(1)) - 1) * parseInt(new_dico.get(key).get(k).get('weight'));
                    n_audit_max = n_audit_max + 3 * parseInt(new_dico.get(key).get(k).get('weight'));
                }
            }

            process_grade = process_grade + categoryContribution.get(key) * n_audit / n_audit_max;

        }

        let pi_process = Math.exp(delta_2 * (1 - process_grade));


        document.getElementById("pi-process-box").innerHTML = "Pi Process : " + pi_process.toFixed(3);

        var all_ok = true
        for ([ctname, v] of categoryContribution) {
            if (!checkCategoryFilled(ctname)) {
                all_ok = false;
            }
        }

        if (all_ok) {
            document.getElementById("pi-process-box").backgroundColor = "#0a7a21";
            document.getElementById("pi-process-box").color = "white";
        }

    }

    /* CONFIGURE INTERFACE */


    for (var p of planets) {
        p.onclick = function () {
            for (var pb of document.getElementsByClassName("planet")) {
                setCategoryUnclicked(pb);
                setUnclickedCategoryStyle(pb);
            }
            setClickedCategoryStyle(this);
            setCategoryClicked(this);
        }
        p.onmouseenter = function () {
            setClickedCategoryStyle(this);
        }
        p.onmouseleave = function () {
            let num = this.childNodes[0].id.substr(-1);
            if (!categoriesCollection.get(num)) {
                setUnclickedCategoryStyle(this);
            }
        }
    }

    for (var opt of options) {
        opt.onclick = function () {
            for (var pb of document.getElementsByClassName("choice-description")) {
                setOptionUnclicked(pb);
                setFreeOptionStyle(pb);
                setNonApplicableUnclicked();
            }
            setOptionClicked(this);
            setClickedOptionStyle(this);
            checkCategoryFilled(current_category);
            calculate_process_factor();
        }
        opt.onmouseenter = function () {
            let num = this.id.substr(-1);
            if (!optionsCollection.get(num)) {
                setHoveredOptionStyle(this);
            }
        }
        opt.onmouseleave = function () {
            let num = this.id.substr(-1);
            if (!optionsCollection.get(num)) {
                setFreeOptionStyle(this);
            }
        }
    }

    document.getElementById("not-applicable").onclick = function () {
        for (var pb of document.getElementsByClassName("choice-description")) {
            setOptionUnclicked(pb);
            setFreeOptionStyle(pb);
            setNonApplicableUnclicked();
        }
        setNonApplicableClicked();
    }

    document.getElementById("left-button").onclick = function () {
        previousQuestion();
    }

    document.getElementById("right-button").onclick = function () {
        nextQuestion();
    }

    document.getElementById("copyAnswers").onclick = function () {
        let ans = saveAnswers();
        navigator.clipboard.writeText(ans);
        alert("Copied the answers. Please make sure to properly paste the answers and to save it in a dedicated text file. Do not modify data unless they may compromise the results");
    }

}
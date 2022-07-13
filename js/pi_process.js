function runPiProcess() {
    let planets = document.getElementsByClassName("planet");
    let options = document.getElementsByClassName("choice-description");
    let pages = document.getElementsByClassName("pageNumber");

    let astronaut = "pictures/new_astronaut.svg";
    let happy_astronaut = "pictures/new_astronaut_happy.svg";
    let idea_astronaut = "pictures/new_astronaut_idea.svg";
    let speaking_astronaut = "pictures/new_astronaut_speaks.svg";

    var coll = document.getElementsByClassName("collapsible");
    var i;

    let new_dico = question_dico;
    let answers = new Map();

    let current_category = "Manufacturing of board - Subassembly";
    let current_question = 0;

    let info_displayed = false;

    let categoryIcons = new Map([
        ["Specification","planet1"],
        ["Design","planet2"],
        ["Manufacturing of board - Subassembly","planet3"],
        ["Integration into equipment","planet4"],
        ["Integration into system","planet5"],
        ["Operation and Maintenance","planet6"],
        ["Support Activities","planet7"]
    ])

    let categoryContribution = new Map([
        ["Specification",0.10],
        ["Design",0.21],
        ["Manufacturing of board - Subassembly",0.20],
        ["Integration into equipment",0.15],
        ["Integration into system",0.15],
        ["Operation and Maintenance",0.10],
        ["Support Activities",0.9]
    ])

    let delta_2 = 2.079;

    let process_factor = 1;
    

    for (const [key, value] of new_dico) {
        console.log(key)
        let ct_dict = new Map();
        for (const [q, v] of value) {
            ct_dict.set(q, null);
        }
        answers.set(key, ct_dict);
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
            if (info_displayed){
                document.getElementById("astronautPicture").src = astronaut;
                info_displayed = false;
            }
            else{
                document.getElementById("astronautPicture").src = speaking_astronaut;
                info_displayed = true;
            }
        });
    }


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

    function configureCategory(cat) {
        current_category = cat;
        let cat_dico = answers.get(cat)
        pagesCollection = new Map();
        document.getElementById("pages-box").remove();
        let newPageBox = document.createElement("tr");
        newPageBox.id = "pages-box";
        document.getElementById("pages").appendChild(newPageBox);
        for (const [key, value] of cat_dico) {
            let page_num = document.createElement("td");
            if (key < 9) {
                page_num.innerHTML = "0" + (key + 1);
            }
            else {
                page_num.innerHTML = key + 1;
            }
            page_num.id = "page" + key;
            page_num.className = "pageNumber";
            pagesCollection.set(key, false);
            if (answers.get(cat).get(key) == "NA") {
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

        document.getElementById("category-title").innerHTML = cat.toUpperCase();

        document.getElementById("page0").click();

    }

    function clearElement(e){
        for (child of e.childNodes){
            child.remove();
        }
    }

    function configureQuestion(q) {
        //console.log(q);
        current_question = q;
        //console.log(current_question)
        let q_information = new_dico.get(current_category).get(parseInt(q));
        //console.log(q_information);
        let id = q_information.get('id');
        let text = q_information.get('question');
        let recommandation = q_information.get('recommandation');
        let weight = q_information.get('weight');
        let n1 = q_information.get('levels').get('N1');
        let n2 = q_information.get('levels').get('N2');
        let n3 = q_information.get('levels').get('N3');
        let n4 = q_information.get('levels').get('N4');

        let text_divided = text.split('?');
        clearElement(document.getElementById("questionBox"));
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
        let q_answer = answers.get(current_category).get(parseInt(q));
        //console.log(q_answer);
        if (q_answer != "NA" && q_answer != null) {
            //console.log("choice" + q_answer[1]);
            document.getElementById("choice" + q_answer[1]).click();
        }
        else if (q_answer == "NA"){
            document.getElementById("not-applicable").click();
        }
        else{
            for (var pb of document.getElementsByClassName("choice-description")) {
                setNonApplicableUnclicked();
                setOptionUnclicked(pb);
                setFreeOptionStyle(pb);
            }
        }
        document.getElementById("number").innerHTML = id;
        document.getElementById("recommandation").innerHTML = recommandation;
        document.getElementById("weight").innerHTML = weight;

    }

    configureCategory(current_category);

    function nextQuestion(){
        //console.log("current question" + current_question);
        if (parseInt(current_question) < answers.get(current_category).size){
            //console.log("next");
            let nextQuestion = parseInt(current_question) + 1;
            while (answers.get(current_category).get(nextQuestion) == 'NA' && parseInt(current_question) < answers.get(current_category).size){
                nextQuestion = nextQuestion + 1;
            }
            if (nextQuestion > answers.get(current_category).size){
                nextQuestion = parseInt(current_question)
            }
            //console.log("next question" + nextQuestion);
            document.getElementById("page" + nextQuestion).click();
        }
    }

    function previousQuestion(){
        //console.log("previous");
        if (parseInt(current_question) > 0){
            let nextQuestion = parseInt(current_question) - 1;
            while (answers.get(current_category).get(nextQuestion) == 'NA' && parseInt(current_question) >= 0){
                nextQuestion = nextQuestion - 1;
            }
            if (nextQuestion == 0){
                nextQuestion = parseInt(current_question);
            }
            document.getElementById("page" + nextQuestion).click();
        }
    }


    function setOptionClicked(opt) {
        let optDescr = opt.id.substr(-1);
        optionsCollection.set(optDescr, true);
        answers.get(current_category).set(parseInt(current_question), "N"+optDescr)

        let last_astronaut = document.getElementById("astronautPicture").src
        document.getElementById("astronautPicture").src = happy_astronaut;
        window.setTimeout(() => {
            document.getElementById("astronautPicture").src = last_astronaut;
          }, "800")
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
        let num = plt.childNodes[0].id.substr(-1);
        categoriesCollection.set(num, true);
        let catName = document.getElementById("cat-name-" + num).innerHTML;
        configureCategory(transformName(catName));
    }

    function setNonApplicableClicked(){
        let btn = document.getElementById("not-applicable");
        btn.style.backgroundColor = "#720154";
        btn.style.color = "#eee"; 
        answers.get(current_category).set(parseInt(current_question), "NA");
    }

    function setNonApplicableUnclicked(){
        let btn = document.getElementById("not-applicable");
        btn.style.backgroundColor = "black";
        btn.style.color = "#eee"; 
    }

    function transformName(name){
        let trueName;
        if (name == "MANUFACTURING OF BOARD - SUBASSEMBLY"){
            /*trueName = content[0].charAt(0) + content[0].slice(1).toLowerCase() + "-" + content[1].charAt(0) +  content[1].charAt(1) +content[1].slice(2).toLowerCase();*/
            trueName = "Manufacturing of board - Subassembly";
        }
        else if (name == "OPERATION AND MAINTENANCE"){
            trueName = "Operation and Maintenance";
        }
        else if (name == "SUPPORT ACTIVITIES"){
            trueName = "Support Activities";
        }
        else{
            trueName = name.charAt(0) + name.slice(1).toLowerCase();
        }
        //console.log(trueName);
        return trueName;
    }

    function setCategoryUnclicked(plt) {
        let num = plt.childNodes[0].id.substr(-1);
        categoriesCollection.set(num, false);
    }

    function setUnclickedCategoryStyle(plt) {
        //plt.childNodes[0].src = "pictures/pi_process/emptyPlanet.svg";
        plt.style.backgroundColor = "";
        plt.style.color = "black";
    }

    function setClickedCategoryStyle(plt) {
        let num = plt.childNodes[0].id.substr(-1);

        //plt.childNodes[0].src = "pictures/pi_process/planet" + num + ".svg";
        plt.style.backgroundColor = "black";
        plt.style.color = "white";
    }

    function setPageClicked(pg) {
        let num = pg.id.substr(4);
        pagesCollection.set(num, true);
        configureQuestion(num)
    }

    function setPageUnclicked(pg) {
        let num = pg.id.substr(4);
        pagesCollection.set(num, false);
    }

    function setUnclickedPageStyle(pg) {
        let num = pg.id.substr(4);
        if (answers.get(current_category).get(parseInt(num)) == "NA") {
            pg.style.backgroundColor = "black";
        }
        else if (answers.get(current_category).get(parseInt(num)) != null) {
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

    function checkCategoryFilled(cat){
        let filled = true;
        for (const [key,v] of answers.get(current_category)){
            console.log("value : " + v)
            if (v == null){
                filled = false
            }
        }
        console.log(categoryIcons.get(current_category));
        if (filled){
            document.getElementById(categoryIcons.get(current_category)).src = "pictures/pi_process/" + categoryIcons.get(current_category) + ".svg"
        }
        //console.log(answers.get(current_category));
        console.log(filled);
    }

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
            //console.log(categoriesCollection.get(num));
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
            //console.log(optionsCollection);
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

    function calculate_process_factor(){
        let process_grade = 0;
        for (var [key, value] of answers){
            let n_audit = 0;
            let n_audit_max = 0;
            for (const [k,v] of value){
                //console.log(v)
                if (v == null ){
                    n_audit = n_audit + 0 * parseInt(new_dico.get(key).get(k).get('weight'));
                    n_audit_max = n_audit_max + 3 * parseInt(new_dico.get(key).get(k).get('weight'));
                }
                else if (v == 'NA'){
                    
                }
                else{
                    n_audit = n_audit + (parseInt(v.slice(1)) - 1) * parseInt(new_dico.get(key).get(k).get('weight'));
                    n_audit_max = n_audit_max + 3 * parseInt(new_dico.get(key).get(k).get('weight'));
                }
            }
            process_grade = process_grade + categoryContribution.get(key) * n_audit / n_audit_max;
            
        }

        let pi_process = Math.exp(delta_2 * (1 - process_grade));

        console.log(pi_process);

        document.getElementById("pi-process-box").innerHTML = "Pi Process : " + pi_process.toFixed(3);

    }

    calculate_process_factor();

}
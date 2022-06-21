console.log("initiate decision tree");
window.onload = function () {

    console.log("initiate decision tree")

    let last_level = 1;

    let first_node;

    let last_node;

    function clickLeaf(leaf){

        console.log("click");

        for (var l of document.getElementsByClassName("leaf-item")){
            if (l.id.split("-")[1] <= leaf.id.split("-")[1] && l != leaf && l.innerHTML != first_node && l.innerHTML != last_node){
                l.style.backgroundColor = "black";
            }
            else{
                l.style.backgroundColor = "green";
            }
            
            if (l.id.split("-")[1] > leaf.id.split("-")[1]){
                console.log(l.id)
                l.style.display = "none";
            }
        }

        let leafName = leaf.innerHTML;

        let stage = leaf.id.split("-")[1];
        let place = leaf.id.split("-")[2];
        leaf.style.backgroundColor = "red";

        console.log(last_level)
        console.log(place)

        if (stage == "1"){
            if (leafName == "Same parts"){
                first_node = "Same parts";
                last_node = "Same parts";
                document.getElementById("leaf-2-2").innerHTML = "Fracture / Fatigue";
                document.getElementById("leaf-2-2").style.display = "block";
                document.getElementById("leaf-2-3").innerHTML = "Radiation degradation";
                document.getElementById("leaf-2-3").style.display = "block";
                document.getElementById("leaf-2-4").innerHTML = "Distortion";
                document.getElementById("leaf-2-4").style.display = "block";
            }
            else{
                first_node = "Different parts";
                last_node = "Different parts";
                document.getElementById("leaf-2-1").innerHTML = "Mechanical Wear";
                document.getElementById("leaf-2-1").style.display = "block";
                document.getElementById("leaf-2-2").innerHTML = "Fracture / Fatigue";
                document.getElementById("leaf-2-2").style.display = "block";
                document.getElementById("leaf-2-3").innerHTML = "Distortion";
                document.getElementById("leaf-2-3").style.display = "block";
            }
        }
        else if (stage == "2"){
            if (leafName == "Radiation degradation"){
                last_node = "Radiation degradation";
                document.getElementById("leaf-3-3").innerHTML = "Fracture / Fatigue";
                document.getElementById("leaf-3-3").style.display = "block";
            }
            else if (leafName == "Mechanical Wear"){
                last_node = "Mechanical Wear";
                document.getElementById("leaf-3-1").innerHTML = "Fracture / Fatigue";
                document.getElementById("leaf-3-1").style.display = "block";
            }
            else if (leafName == "Fracture / Fatigue"){
                last_node = "Fracture / Fatigue";
                if (first_node == "Same parts"){
                    document.getElementById("leaf-3-2").innerHTML = "Distortion";
                    document.getElementById("leaf-3-2").style.display = "block";
                }
                else{
                    document.getElementById("leaf-3-2").innerHTML = "Distortion";
                    document.getElementById("leaf-3-2").style.display = "block";
                }
            }
            else {
                last_node = "Distortion";
                if (first_node == "Same parts"){
                    document.getElementById("leaf-3-4").innerHTML = "Mechanical wear";
                    document.getElementById("leaf-3-4").style.display = "block";
                    document.getElementById("leaf-3-5").innerHTML = "Fracture / Fatigue";
                    document.getElementById("leaf-3-5").style.display = "block";
                }
                else{
                    document.getElementById("leaf-3-3").innerHTML = "Mechanical wear";
                    document.getElementById("leaf-3-3").style.display = "block";
                    document.getElementById("leaf-3-4").innerHTML = "Fracture / Fatigue";
                    document.getElementById("leaf-3-4").style.display = "block";
                }
            }
        }

        last_level = (parseInt(leaf.id.split("-")[1]) + 1);
        console.log("current level : " + last_level);
    }

    for (var l of document.getElementsByClassName("leaf-item")){
        l.onclick = function () {
            clickLeaf(this);
        }
        if (l.id.split("-")[1] != "1"){
            l.style.display = "none";
        }
    }

}

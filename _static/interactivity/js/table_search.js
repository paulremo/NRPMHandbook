function searchTable() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    console.log(tr);
    for (i = 1; i < tr.length; i++) {
        found = false;
        td_lst = tr[i].getElementsByTagName("td");
        //console.log(td_lst.length);
        j=0;
        while (!found && j < td_lst.length){
            td = td_lst[j];
            console.log(td.className);
            if (td) {
                txtValue = td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    found = true;
                }
            }
            /*if (found){
                console.log(txtValue);
                console.log(found);
            }*/
            if (td.className == "full-span"){
                found = true;
            }
            j++;
        }
        if (found){
            tr[i].style.display = "";
        }
        else{
            tr[i].style.display = "none";
        }

    }
}
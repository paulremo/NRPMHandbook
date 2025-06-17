function searchTableJupyter(input, tableName) {
    var filter = input.value.toUpperCase();
    var table = document.getElementById(tableName);
    if (!table) {
        console.warn("Table not found: " + tableName);
        return;
    }

    var tr = table.getElementsByTagName("tr");

    for (var i = 1; i < tr.length; i++) {
        if (tr[i].className !== "db-header") {
            var found = false;
            var td_lst = tr[i].getElementsByTagName("td");
            var j = 0;
            while (!found && j < td_lst.length) {
                var td = td_lst[j];
                if (td) {
                    var txtValue = (td.innerText || td.textContent)
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "")
                        .toUpperCase();

                    if (txtValue.indexOf(filter) > -1 || td.className === "full-span") {
                        found = true;
                    }
                }
                j++;
            }
            tr[i].style.display = found ? "" : "none";
        }
    }
}

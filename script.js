let count = 0;
let selectedRow = null;

function onformSubmit() { //After clicking Submit Button
    let formData = readformData();
    if (selectedRow == null) { 
        insertNewRecord(formData);
    } else {
        updateRecord(formData);
    }
    resetForm();
}

function readformData() { //Get data from input-box
    let formData = {};
    formData["fname"] = document.getElementById('fname').value;
    formData["lname"] = document.getElementById('lname').value;
    formData["degree"] = document.getElementById('degree').value;
    formData["sdegree"] = document.getElementById('sdegree').value;
    formData["dob"] = document.getElementById('dob').value;
    formData["emailid"] = document.getElementById('emailid').value;
    formData["pnumber"] = document.getElementById('pnumber').value;
    return formData;
}

function rand() { // For Student ID
    return count = count + 1;
}

function insertNewRecord(data) { // Insert Data in Table
    let table = document.getElementById('emp-list').getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);

    //For Student ID 
    cell0 = newRow.insertCell(0);
    cell0.innerHTML = rand();

    cell1 = newRow.insertCell(1);
    cell1.innerHTML = data.fname;

    cell2 = newRow.insertCell(2);
    cell2.innerHTML = data.lname;

    cell3 = newRow.insertCell(3);
    cell3.innerHTML = data.degree;

    cell4 = newRow.insertCell(4);
    cell4.innerHTML = data.sdegree;

    cell5 = newRow.insertCell(5);
    cell5.innerHTML = data.dob;

    cell6 = newRow.insertCell(6);
    cell6.innerHTML = data.emailid;

    cell7 = newRow.insertCell(7);
    cell7.innerHTML = data.pnumber;

    cell8 = newRow.insertCell(8);
    cell8.innerHTML = `<a class="btn" onClick="onEdit(this)">Edit</a>
                                           <a class="btn" onClick ="onDelete(this)">Delete</a>`;
}

function resetForm() { // Empty input-box
    document.getElementById('fname').value = "";
    document.getElementById('lname').value = "";
    document.getElementById('degree').value = "";
    document.getElementById('sdegree').value = "";
    document.getElementById('dob').value = "";
    document.getElementById('emailid').value = "";
    document.getElementById('pnumber').value = "";
    selectedRow = null;
}

function onEdit(td) { // For editing data in input-box
    selectedRow = td.parentElement.parentElement;
    document.getElementById('fname').value = selectedRow.cells[1].innerHTML;
    document.getElementById('lname').value = selectedRow.cells[2].innerHTML;
    document.getElementById('degree').value = selectedRow.cells[3].innerHTML;
    document.getElementById('sdegree').value = selectedRow.cells[4].innerHTML;
    document.getElementById('dob').value = selectedRow.cells[5].innerHTML;
    document.getElementById('emailid').value = selectedRow.cells[6].innerHTML;
    document.getElementById('pnumber').value = selectedRow.cells[7].innerHTML;
}

function updateRecord(formData) { // For Update data in Table
    selectedRow.cells[1].innerHTML = formData.fname;
    selectedRow.cells[2].innerHTML = formData.lname;
    selectedRow.cells[3].innerHTML = formData.degree;
    selectedRow.cells[4].innerHTML = formData.sdegree;
    selectedRow.cells[5].innerHTML = formData.dob;
    selectedRow.cells[6].innerHTML = formData.emailid;
    selectedRow.cells[7].innerHTML = formData.pnumber;
}

function onDelete(td) {  // To delete data in Table
    if (confirm('Are you Sure to Remove Data ?')) {
        row = td.parentElement.parentElement;
        document.getElementById('emp-list').deleteRow(row.rowIndex);
        resetForm();
    }
}

function onDelete(td) { // Function to delete Table Data
    if (confirm('Are you Sure to Remove Data ?')) {
        row = td.parentElement.parentElement;
        document.getElementById('emp-list').deleteRow(row.rowIndex);
        resetForm();
    }
}
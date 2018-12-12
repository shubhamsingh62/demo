var rindex,table = document.getElementById("mtable")



function add(){
    fname = document.getElementById('name').value
    Lname = document.getElementById('Lname').value
    age = document.getElementById('age').value
    email = document.getElementById('email').value
      console.log("helloooo")
      addRow(fname,Lname,age,email)
      selectRow()
      addOption(fname)

        
}


function addRow(f,l,a,e){
    
    
    let table= document.getElementById('mtable')
        row = table.insertRow(table.length)
        cell1 = row.insertCell(0)
        cell2 = row.insertCell(1)
        cell3 = row.insertCell(2)
        cell4 = row.insertCell(3)

        cell1.innerHTML = f;
        cell2.innerHTML = l;
        cell3.innerHTML = a;
        cell4.innerHTML = e;
    

}



function selectRow(){
   for(let i=0 ; i<table.rows.length ;i++){
        table.rows[i].onclick = function(){
        rindex = this.rowIndex
        console.log(rindex) 
        document.getElementById("name").value = this.cells[0].innerHTML;
        document.getElementById("Lname").value = this.cells[1].innerHTML;
        document.getElementById("age").value = this.cells[2].innerHTML;
        document.getElementById("email").value = this.cells[3].innerHTML;

    };
   }
}

function editRow(){
    // document.getElementById("mtable").contentEditable = true;

    let fname = document.getElementById('name').value;
    let lname  = document.getElementById('Lname').value;
    let age  = document.getElementById('age').value;
    let email = document.getElementById('email').value;
     
    table.rows[rindex].cells[0].innerHTML = fname;
    table.rows[rindex].cells[1].innerHTML = lname;
    table.rows[rindex].cells[2].innerHTML = age;
    table.rows[rindex].cells[3].innerHTML = email;

     
}

function deleteRow(){
    table.deleteRow(rindex);

    document.getElementById('name').value = ""
    document.getElementById('Lname').value = ""
    document.getElementById('age').value = ""
    document.getElementById('email').value = ""
}

function search(input){
   let table = document.getElementById("mtable");
   let tr = table.getElementsByTagName("tr");
   for (let i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[0];
    if (td) {
        let txtValue = td.textContent || td.innerText;
        if (txtValue.indexOf(input) > -1) {
        tr[i].style.display = "";
      } 
      else {
        tr[i].style.display = "none";
      }
    }       
  }
   
}

function searchFilter(){

   let input = document.getElementById("input").value;
   search(input)
   
}

function addOption(f){

    let select = document.getElementById('select');
    let option = document.createElement('option')
    option.text = f;
    select.add(option ,select[0])
}

function selectFilter() {

   let select = document.getElementById("select").value;
   search(select)
   
}


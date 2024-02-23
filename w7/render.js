const TBL = document.getElementById("tab-data");

function renderTblHeading(){
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTxtArr = ["Name", "Household", "HouseSize", "Footprint", "Actions"];
    headingTxtArr.forEach(function(text){
        const th = document.createElement("th");
        th.textContent = text;
        tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead);
    return table;
}

function renderTbl(data){
  TBL.innerHTML = ""; 
  const table = renderTblHeading(); 
  const tbody = document.createElement("tbody"); 


  data.forEach(function(userInput){
    const tr = document.createElement("tr");

  
    const tdFirstName = document.createElement("td");
    tdFirstName.textContent = userInput.firstName;

    //const tdLastName = document.createElement("td");
    //tdLastName.textContent = userInput.lastName;

    const tdHousehold = document.createElement("td");
    tdHousehold.textContent = userInput.houseMem;

    const tdHouseSize = document.createElement("td");
    tdHouseSize.textContent = userInput.houseSize;

    const tdTotal = document.createElement("td");
    tdTotal.textContent = userInput.cfpTotal;

    tr.appendChild(tdFirstName);
    //tr.appendChild(tdLastName);
    tr.appendChild(tdHousehold);
    tr.appendChild(tdHouseSize);
    tr.appendChild(tdTotal);

    const tdActions = document.createElement("td");
    const btnEdit = document.createElement("button");
    btnEdit.textContent = "Edit";
    const btnDel = document.createElement("button");
    btnDel.textContent = "Del";

    tdActions.appendChild(btnEdit);
    tdActions.appendChild(btnDel);


    tr.appendChild(tdActions);
    tbody.appendChild(tr);
  });

  
  table.appendChild(tbody);


  TBL.appendChild(table);
}
  

  


export{renderTbl, renderTblHeading};
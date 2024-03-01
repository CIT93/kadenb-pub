const TBL = document.getElementById("tab-data");
const FORM = document.getElementById("form");

function renderTblHeading() {
  TBL.innerHTML = "";
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTxtArr = [
    "Name",
    "Household",
    "HouseSize",
    "Footprint",
    "Actions",
  ];
  headingTxtArr.forEach(function (text) {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);
  return table;
}

function renderBtn(obj, index, data){
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnDel.textContent = "Del";
  td.appendChild(btnEdit);
  td.appendChild(btnDel);
  btnDel.addEventListener('click', function(e){
    data.splice(index, 1);
    renderTbl(data);
  })
  btnEdit.addEventListener('click', function(e){
    FORM[1].value = obj.firstName;
    FORM[2].value = obj.lastName;
    FORM[3].value = obj.houseMem;
    FORM[4].value = obj.houseSize;
    data.splice(index, 1);
    renderTbl(data);
  })
  return td;
}


function renderBody(data) {
  const tbody = document.createElement("tbody");
  data.forEach(function (obj, index) {
    const tr = document.createElement("tr");
    for (const [key, value] of Object.entries(obj)) {
      if (key !== "lastName" && key !== "houseMemPts" && key !== "houseSPts") {
        const td = document.createElement("td");
        td.textContent = value;
        tr.appendChild(td);
      }
    }
    const td = renderBtn(obj, index, data);
    tr.appendChild(td);
    tbody.appendChild(tr);
  });
  return tbody;
}

function renderTbl(data) {
  TBL.innerHTML = ""; 
  if (data.length > 0) {
    const table = renderTblHeading();
    const tbody = renderBody(data);
    table.appendChild(tbody);
    TBL.appendChild(table);
  }
}


export { renderTbl };


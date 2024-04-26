import {FORM, TBL} from "./global.js"
import {saveLS} from "./storage.js"

const renderTblHeading = () => {
  TBL.innerHTML = "";
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTxtArr = [
    "Name",
    "Household",
    "HouseSize",
    "Food",
    "Footprint",
    "Actions",
  ];
  headingTxtArr.forEach( text => {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);
  return table;
}

const onUpdate = (index, data) => {
  data.splice(index, 1);
    saveLS(data);
    renderTbl(data);
}

const renderBtn = (obj, index, data) => {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnDel.textContent = "Del";
  td.appendChild(btnEdit);
  td.appendChild(btnDel);
  btnDel.addEventListener('click', e => {
    onUpdate(index, data);
  })
  btnEdit.addEventListener('click', e => {
    FORM[1].value = obj.first;
    FORM[2].value = obj.last;
    FORM[3].value = obj.houseMembers;
    FORM[4].value = obj.houseSize;
    FORM[5].value = obj.cfpFood;
    onUpdate(index, data);
  })
  return td;
}


const renderBody = data =>  {
  const tbody = document.createElement("tbody");
  data.forEach( (obj, index) => {
    const tr = document.createElement("tr");
    const keys = ["first", 'houseMembers', "houseSize", "cfpFood", "total"]

       keys.forEach(key => {
        const td = document.createElement("td");
        td.textContent = obj[key];
        tr.appendChild(td);
       }) 
        
    
    const td = renderBtn(obj, index, data);
    tr.appendChild(td);
    tbody.appendChild(tr);
  });
  return tbody;
}

const calculateAvgFP = data => {
  if (data.length === 0) {
    return 0;
  }
  
  const totalFP = data.reduce((sum, obj) => sum + obj.cfpFood, 0);
  const avgFP = totalFP / data.length;
  return avgFP;
};

const renderTbl = data => {
  TBL.innerHTML = ""; 
  if (data.length > 0) {
    const table = renderTblHeading();
    const tbody = renderBody(data);
    table.appendChild(tbody);

    const averageFootprint = calculateAvgFP(data);
    const tfoot = document.createElement("tfoot");
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.setAttribute("colspan", "6");
    td.textContent = `Average Footprint Score: ${averageFootprint.toFixed(2)}`;
    tr.appendChild(td);
    tfoot.appendChild(tr);

    table.appendChild(tfoot);
    TBL.appendChild(table);
  }
};


export { renderTbl };


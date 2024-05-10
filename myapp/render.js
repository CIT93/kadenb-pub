import { TBL, FORM, OUTPUT } from "./global.js";
import { saveLS } from "./storage.js";

const renderTblHeading = () => {
  TBL.innerHTML = "";
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTxtArr = ["Dog", "Dog Fit", "Dog Age", "Actions"];
  headingTxtArr.forEach(function (text) {
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
};

function renderTbl(chosenDog, dogFit, dogAge, index, obj) {
  const table = renderTblHeading();
  const tbody = document.createElement("tbody");
  const tr = document.createElement("tr");
  const trTextArr = [`${chosenDog}`, `${dogFit}`, `${dogAge}`];
  trTextArr.forEach(function(text) {
    const td = document.createElement("td");
    td.textContent = text;
    tr.appendChild(td);
  });

  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnDel.textContent = "Del";
  
  btnEdit.addEventListener("click", function() {
    function formValues(dogsize, dogenergy, dogwalk, dogage) {
      this.dogsize = dogsize
      this.dogenergy = dogenergy
      this.dogwalk = dogwalk
      this.dogage = dogage
  }
    FORM[1].value = formValues.dogsize;
    FORM[2].value = formValues.dogenergy;
    FORM[3].value = formValues.dogwalk;
    FORM[4].value = formValues.dogage;
    onUpdate(index);
  });
  
  btnDel.addEventListener("click", function() {
    tbody.removeChild(tr); 
  });
  
  td.appendChild(btnEdit);
  td.appendChild(btnDel);
  tr.appendChild(td);
  tbody.appendChild(tr);
  table.appendChild(tbody);

  TBL.appendChild(table);
  OUTPUT.appendChild(table);
}
export { renderTbl, renderTblHeading };

const getLS = function() {
    const retrievedArr = localStorage.getItem("cfp");
    if (retrievedArr !== null) {
        return JSON.parse(retrievedArr);
    } else {
        return [];
    }
}

const cfpData = getLS();

const saveLS = function(cfpData){
    const serializedArr = JSON.stringify(cfpData);
    localStorage.setItem("cfp", serializedArr);
}

export {cfpData, saveLS, getLS};
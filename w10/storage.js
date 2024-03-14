const getLS = () => {
    const retrievedArr = localStorage.getItem("cfp");
    if (retrievedArr !== null) {
        return JSON.parse(retrievedArr);
    } else {
        return [];
    }
}

const cfpData = getLS();

const saveLS = cfpData =>{
    const serializedArr = JSON.stringify(cfpData);
    localStorage.setItem("cfp", serializedArr);
}

export {cfpData, saveLS, getLS};
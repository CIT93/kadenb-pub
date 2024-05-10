const getLS = () => {
    const retrievedArr = localStorage.getItem("dog");
    if (retrievedArr !== null) {
        return JSON.parse(retrievedArr);
    } else {
        return [];
    }
}

const doggyData = getLS();

const saveLS = doggyData =>{
    const serializedArr = JSON.stringify(doggyData);
    localStorage.setItem("dog", serializedArr);
}

export {doggyData, saveLS, getLS};
const totalMembers = 8;
const totalHome = 7;
const totalFood = 6;
const totalWater = 2;
const totalPurchases = 8;
const totalTrash = 30;
const totalRecycle = 12;
const totalTravel = 14;

const totalCarbon = totalMembers + totalHome + totalFood + totalWater + totalPurchases + totalTrash + totalRecycle + totalTravel;

document.getElementById('carbonTotal').textContent = totalCarbon;

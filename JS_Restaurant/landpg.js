const menpg = document.getElementsByClassName("menupg")[0];

//menulist
const elem = document.createElement("div");
elem.classList.add("elemlist");
const tracker = [];
const elemobj = [
  { id: 1, name: "Idli", price: "Rs.75" },
  { id: 2, name: "Dosa", price: "Rs.80" },
  { id: 3, name: "Dal Makhani", price: "Rs.150" },
  { id: 4, name: "Shahi Paneer", price: "Rs.240" },
  { id: 5, name: "Ras Malai", price: "Rs.380" },
  { id: 6, name: "Veg Biryani", price: "Rs.280" },
  { id: 7, name: "Aloo Gobi", price: "Rs.160" },
  { id: 8, name: "Meals", price: "Rs.210" },
];
elemobj.forEach((obj) => {
  const inel = document.createElement("div");
  inel.setAttribute("draggable", true);
  inel.classList.add("itemsmenupg");
  inel.innerHTML += `<h4>${obj.name}</h4><h4>${obj.price}</h4>`;
  elem.appendChild(inel);
  tracker.push({ ele: inel, i: obj });
});
menpg.appendChild(elem);

// tableslist
const tablepg = document.getElementsByClassName("tablepg")[0];

const tabtracker = [];
const tables = document.createElement("div");
tables.classList.add("tablist");
const tabobj = [
  { id: 1, name: "Table-1", price: "Rs.300", Total_Items: "2" },
  { id: 2, name: "Table-2", price: "Rs.0", Total_Items: "0" },
  { id: 3, name: "Table-3", price: "Rs.999", Total_Items: "0" },
];
tabobj.forEach((obj) => {
  const inel = document.createElement("div");
  inel.classList.add("tableitems");
  inel.innerHTML += `<h4>${obj.name}</h4><h4>${obj.price}</h4><h4>Total Items: ${obj.Total_Items}</h4>`;
  tables.appendChild(inel);
  tabtracker.push({ ele: inel, i: obj });
});
tablepg.appendChild(tables);

// Filtering items in Menu

const mensearch = document.querySelectorAll("input")[1];

mensearch.addEventListener("input", searchmenu);

function searchmenu() {
  const ans = mensearch.value.trim().toLowerCase();
  let foundItem = null;
  tracker.forEach(({ ele, i }) => {
    const item = i.name.toLowerCase();
    if (item.includes(ans)) {
      ele.style.display = "block";
      if (!foundItem) {
        foundItem = ele;
      }
    } else {
      ele.style.display = "none";
    }
  });
  if (foundItem == null) {
    alert("No such item");
  }
}

// function searchmenu() {
//   const ans = mensearch.value.trim();
//   let found = false;
//   let reqobj = null;
//   elemobj.forEach((obj) => {
//     if (obj.name.toLowerCase() == ans.toLowerCase()) {
//       found = true;
//     } else {
//       obj.style.display = "hidden";
//     }
//   });
//   if (found == false) {
//     elemobj.forEach((i) => {
//       i.style.display = "block";
//     });
//   } else {
//     alert("There's no such item");
//   }
// }

// Filtering items in Tables

const tabsearch = document.querySelectorAll("input")[0];

tabsearch.addEventListener("input", searchtable);

function searchtable() {
  const ans = tabsearch.value.trim().toLowerCase();
  let foundItem = null;
  tabtracker.forEach(({ ele, i }) => {
    const item = i.name.toLowerCase();
    if (item.includes(ans)) {
      ele.style.display = "block";
      if (!foundItem) {
        foundItem = ele;
      }
    } else {
      ele.style.display = "none";
    }
  });
  if (foundItem == null) {
    alert("No such item");
  }
}

// Drag and drop Feature

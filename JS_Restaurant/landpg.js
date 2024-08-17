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
  { id: 7, name: "Meals", price: "Rs.210" },
];
elemobj.forEach((obj) => {
  const inel = document.createElement("div");
  inel.setAttribute("draggable", true);
  inel.classList.add("itemsmenupg");
  inel.innerHTML += `<h4>${obj.name}</h4><h4>${obj.price}</h4>`;
  elem.appendChild(inel);
  tracker.push({ ele: inel, i: obj });
  inel.setAttribute("data-id", obj.id);
  inel.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", e.target.dataset.id);
  });
});
menpg.appendChild(elem);

// tableslist
const tablepg = document.getElementsByClassName("tablepg")[0];

const tabtracker = [];
const tables = document.createElement("div");
tables.classList.add("tablist");
const tabobj = [
  { id: 1, name: "Table-1", price: "Rs.0", Total_Items: "0" },
  { id: 2, name: "Table-2", price: "Rs.0", Total_Items: "0" },
  { id: 3, name: "Table-3", price: "Rs.0", Total_Items: "0" },
];
tabobj.forEach((obj) => {
  const inel = document.createElement("div");
  inel.classList.add("tableitems");
  inel.innerHTML += `<h4>${obj.name}</h4><h4>${obj.price}</h4><h4>Total Items: ${obj.Total_Items}</h4>`;
  tables.appendChild(inel);
  inel.setAttribute("data-id", obj.id);
  tabtracker.push({ ele: inel, i: obj });
  inel.addEventListener("dragover", (e) => e.preventDefault());
  inel.addEventListener("drop", (e) => {
    e.preventDefault();
    const itemid = e.dataTransfer.getData("text/plain");
    console.log(itemid);
    const menuitem = getdragelm(itemid);
    console.log(menuitem);
    const tableid = inel.dataset.id;
    console.log(tableid);
    // draggable.classList.remove("hide");
    const tablelm = tabobj.find((x) => x.id == tableid);
    console.log(tablelm);
    updatetable(menuitem, tablelm);
  });
});
tablepg.appendChild(tables);

function getdragelm(id) {
  for (let { ele, i } of tracker) {
    if (i.id == id) {
      return ele;
    }
  }
}

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

// Drop

function updatetable(menuitem, tablelm) {
  const menprice = menuitem.getElementsByTagName("h4");
  const prc = menprice[1].textContent.slice(3);
  const updprice = parseInt(tablelm.price.slice(3)) + parseInt(prc);
  let reqd;
  for (let { ele, i } of tabtracker) {
    if (i.id == tablelm.id) {
      reqd = ele;
      break;
    }
  }
  tablelm.price = "Rs." + updprice;
  tablelm.Total_Items = parseInt(tablelm.Total_Items) + 1;
  reqd.innerHTML = `<h4>${tablelm.name}</h4><h4>${tablelm.price}</h4><h4>Total Items: ${tablelm.Total_Items}</h4>`;
  // console.log(reqd);
}

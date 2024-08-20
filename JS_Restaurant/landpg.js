const menpg = document.getElementsByClassName("menupg")[0];

//menulist
const elem = document.createElement("div");
elem.classList.add("elemlist");
const tracker = [];
const elemobj = [
  { id: 1, name: "Idli", price: 75, course: "Tiffins" },
  { id: 2, name: "Dosa", price: 80, course: "Tiffins" },
  { id: 3, name: "Dal Makhani", price: 150, course: "Curry" },
  { id: 4, name: "Shahi Paneer", price: 240, course: "Curry" },
  { id: 5, name: "Ras Malai", price: 380, course: "Dessert" },
  { id: 6, name: "Veg Biryani", price: 280, course: "Biryani" },
  { id: 7, name: "Meals", price: 210, course: "Meals" },
  { id: 8, name: "Paneer Biryani", price: 280, course: "Biryani" },
  { id: 9, name: "Mushroom Biryani", price: 280, course: "Biryani" },
  { id: 10, name: "pavlova", price: 250, course: "Dessert" },
  { id: 11, name: "carrot cake", price: 320, course: "Dessert" },
  { id: 12, name: "sweet cake", price: 380, course: "Dessert" },
];
elemobj.forEach((obj) => {
  const inel = document.createElement("div");
  inel.setAttribute("draggable", true);
  inel.classList.add("itemsmenupg");
  inel.innerHTML += `<h4>${obj.name}</h4><h4>Rs. ${obj.price}</h4>`;
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
  { id: 1, name: "Table-1", price: 0, Total_Items: 0, orders: [] },
  { id: 2, name: "Table-2", price: 0, Total_Items: 0, orders: [] },
  { id: 3, name: "Table-3", price: 0, Total_Items: 0, orders: [] },
];
tabobj.forEach((obj) => {
  const inel = document.createElement("div");
  inel.classList.add("tableitems");
  inel.innerHTML += `<h4>${obj.name}</h4><h4>Rs. ${obj.price}</h4><h4>Total Items: ${obj.Total_Items}</h4>`;
  tables.appendChild(inel);
  inel.addEventListener("click", () => {
    intermedcaller(obj);
  });
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
      return i;
    }
  }
}

// Filtering items in Menu

const mensearch = document.querySelectorAll("input")[1];

mensearch.addEventListener("input", searchmenu);

function searchmenu() {
  document.querySelectorAll("button")[1].style.display = "block";
  const ans = mensearch.value.trim().toLowerCase();
  let foundItem = null;
  tracker.forEach(({ ele, i }) => {
    const item = i.name.toLowerCase();
    const courseitem = i.course.toLowerCase();
    if (item.includes(ans) || courseitem.includes(ans)) {
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
  document.querySelectorAll("button")[0].style.display = "block";
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
  const present = tablelm.orders.find((x) => x.id === menuitem.id);
  if (present) {
    present.quantity += 1;
  } else {
    tablelm.orders.push({ ...menuitem, quantity: 1 });
  }
  // console.log(tableno.orders);
  tablelm.price += menuitem.price;
  tablelm.Total_Items += 1;
  // console.log(tableno.price);
  // console.log(tableno.Total_Items);
  updatetab(tablelm);

  // const menprice = menuitem.getElementsByTagName("h4");
  // const prc = menprice[1].textContent.slice(3);
  // const updprice = parseInt(tablelm.price.slice(3)) + parseInt(prc);
  // let reqd;
  // for (let { ele, i } of tabtracker) {
  //   if (i.id == tablelm.id) {
  //     reqd = ele;
  //     break;
  //   }
  // }
  // tablelm.price = "Rs." + updprice;
  // tablelm.Total_Items = parseInt(tablelm.Total_Items) + 1;
  // reqd.innerHTML = `<h4>${tablelm.name}</h4><h4>${tablelm.price}</h4><h4>Total Items: ${tablelm.Total_Items}</h4>`;
  // console.log(reqd);
}
function updatetab(table) {
  const tab = document.querySelector(`.tableitems[data-id="${table.id}"]`);
  tab.innerHTML = `<h3>Table-${table.id}</h3><p>Rs. ${table.price}</p><p>Total Items:${table.Total_Items}</p>`;
}

// Popup

// const tabpop = document.getElementsByClassName("tablist")[0];

function intermedcaller(obj) {
  popupactivate(obj);
}

function popupactivate(table) {
  // console.log(table);
  for (let { ele, i } of tabtracker) {
    if (table === i) {
      ele.classList.add("activey");
    }
  }
  const pop = document.querySelector(".popup");
  const body = document.querySelector("body");
  pop.style.display = "inline-block";
  body.style.backgroundColor = "grey";
  document.getElementsByClassName("menupg")[0].style.opacity = "0.4";
  document.getElementsByClassName("tablepg")[0].style.opacity = "0.4";
  // console.log(`Printing ${table}`);
  gettabledetails(table);
}

function closepop() {
  for (let { ele, i } of tabtracker) {
    ele.classList.remove("activey");
  }
  const pop = document.querySelector(".popup");
  pop.style.display = "none";
  const body = document.querySelector("body");
  body.style.backgroundColor = "grey";
  document.getElementsByClassName("menupg")[0].style.opacity = "1";
  document.getElementsByClassName("tablepg")[0].style.opacity = "1";
}

function closeSession() {
  const activeTable = tabtracker.find(({ ele }) =>
    ele.classList.contains("activey")
  );
  for (let { ele, i } of tabtracker) {
    ele.classList.remove("activey");
  }
  // const pop = document.querySelector(".popup");
  // pop.style.display = "none";
  // const body = document.querySelector("body");
  // alert("Bill has been Generated!!!");
  if (activeTable) {
    // Get the total price from the table object
    const totalBill = activeTable.i.price;

    // Display the bill
    alert(
      `Bill for ${activeTable.i.name} has been generated! Total amount: Rs.${totalBill}`
    );

    // Clear the orders and reset the table
    activeTable.i.orders = [];
    activeTable.i.price = 0;
    activeTable.i.Total_Items = 0;

    // Update the table card
    updatetab(activeTable.i);
    closepop();
  }
  body.style.backgroundColor = "grey";
  document.getElementsByClassName("menupg")[0].style.opacity = "1";
  document.getElementsByClassName("tablepg")[0].style.opacity = "1";
}

function gettabledetails(table) {
  const tableid = table.id;
  // console.group(table);
  const pardiv = document.querySelector(".details");
  pardiv.innerHTML = `<h3>${table.name}|Details</h3>`;

  const tablar = document.createElement("table");
  tablar.innerHTML += `<tr>
            <th>S.No</th>
            <th>Item</th>
            <th>Price</th>
          </tr>`;
  // const pop = document.createElement("tbody");
  // console.log(pop);
  table.orders.forEach((order, i) => {
    // console.log(e);
    const its = document.createElement("tr");
    its.innerHTML = `<td><p>${i + 1}.${order.name}</p></td><td><p>Quantity:
  <input type="number" id="quant" min="1"  value="${
    order.quantity
  }" ></p></td><td><p>Price:${
      order.quantity * order.price
    }</p></td><td><button class="delete">Delete</button></td>`;
    tablar.appendChild(its);
    // console.log(pop);
    // its.style.overflow = "hidden";
    its.querySelector("input").addEventListener("input", (e) => {
      updatetablenew(table, order.id, parseInt(e.target.value));
    });
    its.querySelector("button").addEventListener("click", () => {
      deleteOrder(table, order.id);
    });
  });
  console.log(tablar);
  pardiv.appendChild(tablar);
}

function updatetablenew(table, orderid, newquantity) {
  // console.log(newquantity);
  const order = table.orders.find((x) => x.id == orderid);
  if (order) {
    table.price -= order.price * order.quantity;
    table.Total_Items -= order.quantity;
    order.quantity = newquantity;
    console.log(order.quantity);
    console.log(table.quantity);
    table.Total_Items += order.quantity;
    table.price += order.price * order.quantity;
    updatetab(table);
    gettabledetails(table);
  }
}

function deleteOrder(table, orderId) {
  const orderIndex = table.orders.findIndex((order) => order.id == orderId);
  if (orderIndex > -1) {
    const order = table.orders[orderIndex];
    table.price -= order.price * order.quantity;
    table.Total_Items -= order.quantity;
    table.orders.splice(orderIndex, 1);
    updatetab(table);
    gettabledetails(table);
  }
}

function clearinptab() {
  document.querySelectorAll("input")[0].value = "";
  searchtable();
  document.querySelectorAll("button")[0].style.display = "none";
  // console.log("Hello from clearinptab");
}

function clearinpmen() {
  document.querySelectorAll("input")[1].value = "";
  searchmenu();
  document.querySelectorAll("button")[1].style.display = "none";
  // console.log("Hello from clearinpmen");
}

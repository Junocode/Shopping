//홈버튼
let homeButton = document.querySelector(".home");

// 종류별 선택
let shirtFilter = document.querySelector(".shirt");
let pantsFilter = document.querySelector(".pants");
let skirtFilter = document.querySelector(".skirt");
let blueFilter = document.querySelector(".Blue");
let yellowFilter = document.querySelector(".Yellow");
let pinkFilter = document.querySelector(".Pink");

//쇼핑 아이템
let shoppingList = document.querySelectorAll(".items");

// 셔츠만
function fliteringShirt() {
  for (let i = 0; i < shoppingList.length; i++) {
    if (shoppingList[i].innerHTML.indexOf("shirt") === -1) {
      shoppingList[i].style.display = "none";
    } else {
      shoppingList[i].style.display = "flex";
    }
  }
}

// 바지만
function fliteringPants() {
  for (let i = 0; i < shoppingList.length; i++) {
    if (shoppingList[i].innerHTML.indexOf("pants") === -1) {
      shoppingList[i].style.display = "none";
    } else {
      shoppingList[i].style.display = "flex";
    }
  }
}

// 치마만
function fliteringSkirt() {
  for (let i = 0; i < shoppingList.length; i++) {
    if (shoppingList[i].innerHTML.indexOf("skirt") === -1) {
      shoppingList[i].style.display = "none";
    } else {
      shoppingList[i].style.display = "flex";
    }
  }
}

//파란색만
function fliteringBlue() {
  for (let i = 0; i < shoppingList.length; i++) {
    if (shoppingList[i].innerHTML.indexOf("blue") === -1) {
      shoppingList[i].style.display = "none";
    } else {
      shoppingList[i].style.display = "flex";
    }
  }
}

// 노란색만
function fliteringYellow() {
  for (let i = 0; i < shoppingList.length; i++) {
    if (shoppingList[i].innerHTML.indexOf("yellow") === -1) {
      shoppingList[i].style.display = "none";
    } else {
      shoppingList[i].style.display = "flex";
    }
  }
}

// 분홍색만
function fliteringPink() {
  for (let i = 0; i < shoppingList.length; i++) {
    if (shoppingList[i].innerHTML.indexOf("pink") === -1) {
      shoppingList[i].style.display = "none";
    } else {
      shoppingList[i].style.display = "flex";
    }
  }
}

shirtFilter.addEventListener("click", fliteringShirt);
pantsFilter.addEventListener("click", fliteringPants);
skirtFilter.addEventListener("click", fliteringSkirt);
blueFilter.addEventListener("click", fliteringBlue);
yellowFilter.addEventListener("click", fliteringYellow);
pinkFilter.addEventListener("click", fliteringPink);
homeButton.addEventListener("click", () => location.reload());

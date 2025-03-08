const menu = document.querySelectorAll("input");
const orderButton = document.querySelector("button");
const foodContainer = document.querySelector(".food-container");

const imageBasePath = "./assets/";
const orderSound = document.getElementById("ordered");
const deliveredSound = document.getElementById("delivered");
const orders = [];

orderButton.addEventListener("click", () => {
    // play order sound
  orderSound.currentTime = 0;
  orderSound.play();
  checkOrder();
});

function checkOrder() {
  menu.forEach(async (item) => {
    if (item.checked) {
      const myPromise = new Promise((resolve, reject) => {
        const randomTimer = Math.floor(Math.random() * 5000);
        setTimeout(() => {
          resolve({
            message: "Successfull",
            item: `${item.value}`,
            orderId: randomTimer,
          });
          reject(
            "Sorry for the inconviniance, We could not executred your ordder!"
          );
        }, randomTimer);
      });
      const result = await myPromise;
      console.log(result);
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("item-div");

      const image = document.createElement("img");
      image.src = imageBasePath + item.value + ".jpg";

      const orderId = document.createElement("p");
      orderId.classList.add("order-id");
      orderId.innerText = "Order Id : " + result.orderId;

      const feedback = document.createElement("form");
      const textArea = document.createElement("textarea");
      textArea.placeholder =  "Enter your feedback here!"
      feedback.append(textArea)

      const detailDiv = document.createElement("div");
      detailDiv.append(orderId, feedback)
      detailDiv.classList.add("detail-div")


      
      


      itemDiv.append(image, detailDiv);
      foodContainer.append(itemDiv);
// play delivered sound
      deliveredSound.currentTime = 0;
      deliveredSound.play();
    }
  });
}


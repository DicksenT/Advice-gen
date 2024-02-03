const tipNum = document.querySelector(".num");
const quote = document.querySelector(".adv-text");
async function advice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    if (!response.ok) {
      console.log(response.status);
    }
    const result = await response.json();
    tipNum.innerText = `#${result.slip.id}`;
    quote.innerText = `"${result.slip.advice}"`;
  } catch (error) {
    console.error(error);
  }
}
advice();

const generate = document.querySelector(".img-container");
generate.addEventListener("click", function () {
  advice();
});

const imgContainer = document.querySelector(".img-container");
const dice = document.querySelector(".dice");
deg = 0;
imgContainer.addEventListener("click", handleEvent);
imgContainer.addEventListener("mouseover", handleEvent);
imgContainer.addEventListener("mouseout", handleEvent);

function handleEvent(e) {
  if (e.type === "click") {
    deg += 90;
  } else if (e.type === "mouseover") {
    deg += 45;
  } else if (e.type === "mouseout") {
    deg -= 45;
  }
  dice.style.rotate = `${deg}deg`;
}

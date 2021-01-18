const bike = document.getElementById("bike")
const eve = new MouseEvent("mouseover", {
  view: window,
  bubbles: true,
  cancelable: true
})
// window.onload = bike.click
bike.addEventListener("click", () => {
  console.log("clicked", bike.className)
  const back = document.getElementsByClassName("front-wheel")[0]
  const front = document.getElementsByClassName("back-wheel")[0]

  if (this.className) {
  } else {
    bike.className = "bike move"
    back.className = "back-wheel spin"
    front.className = "front-wheel spin"
  }
})
// bike.ddEventListener(
//   "click",
//   () => {

//   },
//   false
// )

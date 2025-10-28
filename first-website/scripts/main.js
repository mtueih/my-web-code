const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Combination_of_GNU_Head_and_Tux_logos.svg") {
    myImage.setAttribute("src", "images/Tux.svg");
  } else {
    myImage.setAttribute(
      "src",
      "images/Combination_of_GNU_Head_and_Tux_logos.svg"
    );
  }
});

const myButton = document.querySelector("button");

function setUserName() {
  const userName = prompt("请输入你的名字。");
  if (!userName) {
    setUserName();
  } else {
    localStorage.setItem("userName", userName);
    myHeading.textContent = `快开始使用 Linux 系统吧，${userName}`;
  }
}

if (!localStorage.getItem("userName")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("userName");
  myHeading.textContent = `快开始使用 Linux 系统吧，${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});

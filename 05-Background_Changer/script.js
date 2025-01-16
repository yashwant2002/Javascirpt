const randomHexColorCode = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };
  
  const body = document.querySelector(".background"); 
  const changer = document.querySelector(".changer");
  
  changer.addEventListener("click", () => {
    body.style.backgroundColor = randomHexColorCode();
    changer.textContent = randomHexColorCode();
  });
  
//   console.log(changer);
  
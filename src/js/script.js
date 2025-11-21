window.onload = () => {
  const mainImages = document.querySelectorAll("body > main > .img");
  const maxIndex = mainImages.length;

  const destaquesImgs = document.querySelectorAll(
    "body > section.destaques > div > div > div.container-imgs > div"
  );
  const POSITIONS = {
    1: { top: "60px", left: "20px", zIndex: 30 }, // Frente
    2: { top: "40px", left: "40px", zIndex: 20 }, // Meio
    3: { top: "20px", left: "60px", zIndex: 10 }, // Atrás
  };

  let index = 0;
  mainImages.forEach((img, i) => {
    img.style.transition = "opacity 1s ease-in-out";
    img.style.opacity = i === 0 ? 1 : 0;
  });

  function updatePositions() {
    destaquesImgs.forEach((div) => {
      const currentPos = parseInt(div.getAttribute("data-pos"));
      const styles = POSITIONS[currentPos];

      div.style.top = styles.top;
      div.style.left = styles.left;
      div.style.zIndex = styles.zIndex;
    });
  }

  updatePositions();

  setInterval(() => {
    mainImages[index].style.opacity = 0;
    index++;
    if (index === maxIndex) {
      index = 0;
    }
    mainImages[index].style.opacity = 1;

    destaquesImgs.forEach((div) => {
      const currentPos = parseInt(div.getAttribute("data-pos"));
      let nextPos;

      if (currentPos === 1) nextPos = 3;
      else if (currentPos === 3) nextPos = 2;
      else if (currentPos === 2) nextPos = 1;
      

      div.setAttribute("data-pos", nextPos);
    });
    updatePositions();
  }, 3000);
};

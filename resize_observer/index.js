const box = document.querySelector(".box");
// const container = document.querySelector(".container");

const observer = new ResizeObserver((entries) => {
    const boxElement = entries[0];
    const isSmall = boxElement.contentRect.width < 150;
    boxElement.target.style.backgroundColor = isSmall ? "blue" : "red";
  console.log(entries[0].target.style);
});

observer.observe(box);

// observer.observe(container);

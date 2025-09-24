const cursor = document.querySelector("#cursor");
const cursorBorder = document.querySelector("#cursor-border");
const anchor = document.querySelectorAll('a');
const cursorPos = { x: 0, y: 0 };
const cursorBorderPos = { x: 0, y: 0 };

document.addEventListener("mousemove", (e) => {
    cursorPos.x = e.clientX;
    cursorPos.y = e.clientY;

    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

requestAnimationFrame(function loop() {
    const easting = 8;
    cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easting;
    cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easting;

    cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
    requestAnimationFrame(loop);
});


anchor.forEach(el => {
    el.addEventListener('mouseover', () => {
        cursor.style.display = "none"
    })
})

anchor.forEach(el => {
    el.addEventListener('mouseout', () => {
        cursor.style.display = "block"
    })
})
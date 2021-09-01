const text = document.querySelector('.text p')
text.innerHTML = text.innerText.split("").map((char, i) => {
    return `<span style="transform:rotate(${i * 8}deg)">${char}</span>`
}).join("");
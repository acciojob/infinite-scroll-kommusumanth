const list = document.getElementById("infi-list");
let count = 1;

function addItems(n) {
    for (let i = 0; i < n; i++) {
        const li = document.createElement("li");
        li.textContent = `Item ${count++}`;
        list.appendChild(li);
    }
}

// Add 10 items initially
addItems(10);

// Add 2 more items when scrolled to bottom
list.addEventListener("scroll", () => {
    if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
        addItems(2);
    }
});
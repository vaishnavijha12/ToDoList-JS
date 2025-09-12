const listContainer = document.getElementById("list-container");
const inputbox = document.getElementById("input-box");

function addTask() {
    if (inputbox.value === '') {
        alert("enter some data");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;

        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);

        listContainer.appendChild(li);
    }
    inputbox.value = "";
    saveTask();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveTask();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveTask();
    }
});

function saveTask() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data") || "";

    // ✅ Add <span> ❌ to all <li> that don't have one
    document.querySelectorAll("#list-container li").forEach(li => {
        if (!li.querySelector("span")) {
            let span = document.createElement("span");
            span.innerHTML = '\u00d7';
            li.appendChild(span);
        }
    });
}

showTask();

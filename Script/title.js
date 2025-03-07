const cards = document.querySelectorAll(".card");
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function() {
        // const completeBtn = cards[i].querySelector('.complete-btn');
        const cardTitle = cards[i].querySelector("#container-title").innerText;
        const p = `
            Your task completed: ${cardTitle} at ${new Date().toLocaleString()}.
        `
        console.log(p);
        const history = document.getElementById('history-div');
        const pTag = document.createElement('p');
        pTag.textContent = p;
        history.appendChild(pTag);
        pTag.classList.add("p-3", "bg-gray-200", "rounded-md", "my-2");
    });
};

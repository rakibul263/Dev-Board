document.getElementById('clearHistory').addEventListener('click', function() {
    const history = document.getElementById('history-div');
    history.innerHTML = ``;
    alert('History cleared successfully!');
});
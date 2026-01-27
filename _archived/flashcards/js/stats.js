const statsData = JSON.parse(sessionStorage.getItem('flashcardStats')) || [];

if (statsData.length === 0) {
    document.getElementById('mostKnownCard').innerHTML = '<em>No data available.</em>';
    document.getElementById('cardsNeedingWork').innerHTML = '<li><em>No data available.</em></li>';
} else {
    const mostKnownCard = statsData.reduce((best, card) => 
        card.score > best.score ? card : best, statsData[0]);
    document.getElementById('mostKnownCard').innerHTML = `
        <div class="card-stat">
            <div class="card-front"><strong>Front:</strong> ${mostKnownCard.front}</div>
            <div class="card-back"><strong>Back:</strong> ${mostKnownCard.back}</div>
            <div class="card-score"><strong>Score:</strong> ${mostKnownCard.score}</div>
        </div>
    `;

    const cardsNeedingWork = statsData.filter(card => card.score < 3);
    const workList = document.getElementById('cardsNeedingWork');
    workList.innerHTML = '';
    cardsNeedingWork.forEach(card => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <div class="card-stat">
                <div class="card-front"><strong>Front:</strong> ${card.front}</div>
                <div class="card-back"><strong>Back:</strong> ${card.back}</div>
                <div class="card-score"><strong>Score:</strong> ${card.score}</div>
            </div>
        `;
        workList.appendChild(listItem);
    });
}
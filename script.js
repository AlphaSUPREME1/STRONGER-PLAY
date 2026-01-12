fetch('games.json')
  .then(response => response.json())
  .then(games => {
    const container = document.getElementById('games-container');
    games.forEach(game => {
      const div = document.createElement('div');
      div.className = 'game';
      div.innerHTML = `
        <a href="games/game.html?url=${encodeURIComponent(game.url)}">
          <img src="${game.thumbnail}">
          <p>${game.name}</p>
        </a>
      `;
      container.appendChild(div);
    });
  })
  .catch(err => console.error('Failed to load games:', err));

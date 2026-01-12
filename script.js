const base = "/STRONGER-PLAY";

fetch(base + "/games.json")
  .then(res => {
    console.log("JSON status:", res.status);
    return res.json();
  })
  .then(games => {
    console.log("Games loaded:", games);

    const container = document.getElementById("games-container");
    container.innerHTML = "";

    games.forEach(game => {
      const div = document.createElement("div");
      div.className = "game";
      div.innerHTML = `
        <a href="${base}/games/game.html?url=${encodeURIComponent(game.url)}">
          <img src="${game.thumbnail}">
          <p>${game.name}</p>
        </a>
      `;
      container.appendChild(div);
    });
  })
  .catch(err => {
    document.getElementById("games-container").innerHTML =
      "<p style='color:red'>ERROR loading games</p>";
    console.error(err);
  });

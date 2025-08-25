fetch("produtos.json")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("produtos");

    data.forEach(produto => {
      const card = document.createElement("div");
      card.className = "produto";

      card.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}">
        <h2>${produto.nome}</h2>
        <p>${produto.descricao}</p>
        <strong>R$ ${produto.preco.toFixed(2)}</strong><br>
        <button>Comprar</button>
      `;


      card.querySelector("button").addEventListener("click", () => {
        alert(`Você comprou: ${produto.nome}`);
      });

      container.appendChild(card);
    });
  })
  .catch(error => console.error("Erro ao carregar produtos:", error));
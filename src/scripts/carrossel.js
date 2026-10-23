// Carrossel simples com setas: rola o trilho de um card por vez.
// Funciona com qualquer bloco que use estes atributos:
//   [data-carrossel]
//     [data-carrossel-trilho]    -> a faixa que rola
//     [data-carrossel-anterior]  -> botão voltar
//     [data-carrossel-proximo]   -> botão avançar

function iniciarCarrossel(raiz) {
  const trilho = raiz.querySelector("[data-carrossel-trilho]");
  const anterior = raiz.querySelector("[data-carrossel-anterior]");
  const proximo = raiz.querySelector("[data-carrossel-proximo]");

  if (!trilho || !anterior || !proximo) return;

  const reduzirMovimento = window.matchMedia("(prefers-reduced-motion: reduce)");

  // Distância de um card + o espaço entre eles
  function passo() {
    const card = trilho.firstElementChild;
    if (!card) return trilho.clientWidth;
    const gap = parseFloat(getComputedStyle(trilho).columnGap) || 0;
    return card.getBoundingClientRect().width + gap;
  }

  function rolar(direcao) {
    trilho.scrollBy({
      left: direcao * passo(),
      behavior: reduzirMovimento.matches ? "auto" : "smooth",
    });
  }

  // Desativa a seta quando chega no começo ou no fim
  function atualizarSetas() {
    const max = trilho.scrollWidth - trilho.clientWidth;
    anterior.disabled = trilho.scrollLeft <= 2;
    proximo.disabled = trilho.scrollLeft >= max - 2;
  }

  anterior.addEventListener("click", () => rolar(-1));
  proximo.addEventListener("click", () => rolar(1));

  // Setas do teclado quando o trilho está focado
  trilho.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      rolar(-1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      rolar(1);
    }
  });

  let aguardando = false;
  trilho.addEventListener(
    "scroll",
    () => {
      if (aguardando) return;
      aguardando = true;
      requestAnimationFrame(() => {
        atualizarSetas();
        aguardando = false;
      });
    },
    { passive: true }
  );

  window.addEventListener("resize", atualizarSetas);
  atualizarSetas();
}

document.querySelectorAll("[data-carrossel]").forEach(iniciarCarrossel);
document.addEventListener("DOMContentLoaded", () => {

  /* BOTÃO ROLAGEM PARA CURSOS */
  const btn = document.querySelector('.btn');
  if (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('#cursos').scrollIntoView({
        behavior: 'smooth'
      });
    });
  }

  /* BOTÃO HERO */
  const btnHero = document.querySelector(".btn-hero");
  if (btnHero) {
    btnHero.addEventListener("click", function (e) {
      e.preventDefault();
      const destino = document.querySelector("#planos");
      if (destino) {
        destino.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  /* HEADER DESCE AO SCROLL */
  const header = document.getElementById("mainHeader");
  if (header) {
    let lastScroll = 0;
    header.classList.add("show");

    window.addEventListener("scroll", () => {
      const currentScroll = window.scrollY;

      if (currentScroll <= 10 || currentScroll < lastScroll) {
        header.classList.add("show");
      } else {
        header.classList.remove("show");
      }

      lastScroll = currentScroll;
    });
  }

  /* MODAL GALERIA */
  const imagens = document.querySelectorAll(".galeria-grid img");
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  const close = document.querySelector(".close");

  if (modal && modalImg && close) {
    imagens.forEach(img => {
      img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
      });
    });

    close.addEventListener("click", () => {
      modal.style.display = "none";
    });

    modal.addEventListener("click", e => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  }

  /* ANIMAÇÃO GALERIA AO SCROLL */
  function revealGaleria() {
    const alturaTela = window.innerHeight;
    imagens.forEach(img => {
      const topo = img.getBoundingClientRect().top;
      if (topo < alturaTela - 100) {
        img.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealGaleria);
  revealGaleria();

  /* BOTÃO VOLTAR AO TOPO */
  const backToTop = document.getElementById("backToTop");

  if (backToTop) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTop.classList.add("show");
      } else {
        backToTop.classList.remove("show");
      }
    });

    backToTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

});

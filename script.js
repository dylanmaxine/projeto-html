/* =========================================
   CONEC.JOV - JAVASCRIPT
   ========================================= */


/* =========================================
   MENU HAMBÚRGUER
   ========================================= */

const botaoMenu = document.querySelector(".menu-hamburguer");
const menu = document.querySelector("nav ul");

if (botaoMenu && menu) {

    botaoMenu.addEventListener("click", function () {

        menu.classList.toggle("menu-aberto");

    });

}


/* =========================================
   PESQUISA DE CURSOS
   ========================================= */

const campoPesquisa = document.getElementById("cursos");

if (campoPesquisa) {

    const listaCursos = document.querySelector("main > ul");

    if (listaCursos) {

        const cursos = listaCursos.querySelectorAll("li");

        campoPesquisa.addEventListener("input", function () {

            const pesquisa = campoPesquisa.value.toLowerCase();

            cursos.forEach(function (curso) {

                const nomeCurso = curso.textContent.toLowerCase();

                if (nomeCurso.includes(pesquisa)) {

                    curso.style.display = "list-item";

                } else {

                    curso.style.display = "none";

                }

            });

        });

    }

}


/* =========================================
   INSCRIÇÃO EM CURSO
   ========================================= */

const formulario = document.getElementById("form-inscricao");
const modal = document.getElementById("modal-confirmacao");

if (formulario && modal) {

    formulario.addEventListener("submit", function (event) {

        event.preventDefault();

        if (formulario.checkValidity()) {

            modal.classList.add("ativo");

        } else {

            formulario.reportValidity();

        }

    });

}


/* =========================================
   FECHAR MODAL
   ========================================= */

function fecharModal() {

    const modal = document.getElementById("modal-confirmacao");

    if (modal) {

        modal.classList.remove("ativo");

    }

}


/* =========================================
   CONFIRMAR INSCRIÇÃO
   ========================================= */

function confirmarInscricao() {

    const formulario = document.getElementById("form-inscricao");

    if (!formulario) {
        return;
    }

    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const curso = document.getElementById("curso");

    if (!nome || !email || !curso) {
        return;
    }


    /* Dados da inscrição */

    const inscricao = {

        nome: nome.value,
        email: email.value,
        curso: curso.options[curso.selectedIndex].text,
        data: new Date().toLocaleDateString("pt-BR")

    };


    /* =========================================
       LOCAL STORAGE
       ========================================= */

    localStorage.setItem(
        "inscricaoCONECJOV",
        JSON.stringify(inscricao)
    );


    /* Fecha o modal */

    fecharModal();


    /* Mostra mensagem de confirmação */

    mostrarMensagem(
        "Inscrição realizada com sucesso!"
    );


    /* Limpa o formulário */

    formulario.reset();

}


/* =========================================
   MENSAGEM DE FEEDBACK
   ========================================= */

function mostrarMensagem(mensagem) {

    let toast = document.getElementById("toast");

    if (!toast) {

        toast = document.createElement("div");

        toast.id = "toast";
        toast.className = "toast";

        document.body.appendChild(toast);

    }

    toast.textContent = mensagem;

    toast.classList.add("ativo");


    setTimeout(function () {

        toast.classList.remove("ativo");

    }, 3000);

}


/* =========================================
   RECUPERAR INSCRIÇÃO
   ========================================= */

function verificarInscricao() {

    const dadosSalvos = localStorage.getItem("inscricaoCONECJOV");

    if (!dadosSalvos) {
        return;
    }

    try {

        const inscricao = JSON.parse(dadosSalvos);

        console.log("Inscrição encontrada:", inscricao);

    } catch (erro) {

        console.error(
            "Não foi possível recuperar a inscrição.",
            erro
        );

        localStorage.removeItem("inscricaoCONECJOV");

    }

}


/* Executa a verificação */

verificarInscricao();
/* =========================================
   CONEC.JOV - JAVASCRIPT
   ========================================= */


/* =========================================
   DADOS DOS CURSOS
   ========================================= */

const cursos = [
    "Curso de Programação Web",
    "Curso de Informática Básica",
    "Programa de Empreendedorismo",
    "Workshop de Liderança",
    "Curso de Desenvolvimento Pessoal",
    "Curso de Habilidades Sociais"
];


/* =========================================
   ELEMENTO PRINCIPAL DA SPA
   ========================================= */

const app = document.getElementById("app");


/* =========================================
   GERAÇÃO DA LISTA DE CURSOS
   ========================================= */

function gerarCursos(lista = cursos) {

    return lista.map(function(curso) {

        return `<li>${curso}</li>`;

    }).join("");

}


/* =========================================
   GERAÇÃO DAS OPÇÕES DO SELECT
   ========================================= */

function gerarOpcoesCursos() {

    return cursos.map(function(curso) {

        return `<option value="${curso}">${curso}</option>`;

    }).join("");

}


/* =========================================
   PÁGINAS DA SPA
   ========================================= */

const paginas = {


    /* =====================================
       HOME
       ===================================== */

    home: `

        <h2>
            Bem-vindo à CONEC.JOV!
        </h2>


        <p>
            Estamos comprometidos em oferecer oportunidades de aprendizado e
            desenvolvimento para jovens em situação de vulnerabilidade.
            Explore nossos cursos e programas para descobrir como você pode
            se beneficiar de nossas iniciativas.
        </p>


        <img
            src="imagens/bemvindo.jpg"
            alt="Jovens participando de uma atividade"
            width="500"
            height="350"
        >


        <section>

            <h3>
                Nossos Cursos
            </h3>


            <span class="badge">
                ATIVO
            </span>


            <p>
                Oferecemos uma variedade de cursos e programas de capacitação
                para ajudar os jovens a desenvolverem habilidades essenciais
                para o mercado de trabalho e para a vida.
            </p>


            <a href="#cursos">
                Saiba mais sobre nossos cursos
            </a>

        </section>


        <section>

            <h3>
                Voluntariado
            </h3>


            <p>
                Participe de nossas ações de voluntariado e faça a diferença
                na vida de jovens em situação de vulnerabilidade.
            </p>


            <a href="#voluntariado">
                Faça parte de nossa missão
            </a>

        </section>


        <section>

            <h3>
                Doações
            </h3>


            <p>
                Apoie a nossa causa e faça a diferença na vida de jovens
                em situação de vulnerabilidade.
            </p>


            <a href="#doacoes">
                Contribua conosco
            </a>

        </section>

    `,


    /* =====================================
       CURSOS
       ===================================== */

    cursos: `

        <h2>
            Cursos
        </h2>


        <p>
            Descubra nossos cursos e programas de capacitação:
        </p>


        <ul id="lista-cursos">

            ${gerarCursos()}

        </ul>


        <!-- GRÁFICO -->

        <h3>
            Quantidade de cursos por área
        </h3>


        <canvas id="graficoCursos"></canvas>


        <!-- PESQUISA -->

        <h3>
            Pesquisar curso
        </h3>


        <label for="pesquisa-curso">

            Digite o nome do curso:

        </label>


        <input
            type="text"
            id="pesquisa-curso"
            placeholder="Digite o nome do curso"
        >


        <!-- FORMULÁRIO -->

        <h2>
            Inscreva-se em nossos cursos:
        </h2>


        <form id="form-inscricao">


            <label for="nome">
                Nome:
            </label>


            <input
                type="text"
                id="nome"
                name="nome"
                required
            >


            <small class="mensagem-erro"></small>


            <br><br>


            <label for="email">
                Email:
            </label>


            <input
                type="email"
                id="email"
                name="email"
                required
            >


            <small class="mensagem-erro"></small>


            <br><br>


            <label for="curso">
                Curso de interesse:
            </label>


            <select
                id="curso"
                name="curso"
                required
            >

                <option value="">
                    Selecione um curso
                </option>


                ${gerarOpcoesCursos()}

            </select>


            <small class="mensagem-erro"></small>


            <br><br>


            <input
                type="submit"
                value="Inscrever-se"
            >

        </form>

    `,


    /* =====================================
       SOBRE
       ===================================== */

    sobre: `

        <h2>
            Sobre
        </h2>

    `,


    /* =====================================
       PROJETOS
       ===================================== */

    projetos: `

        <h2>
            Projetos
        </h2>

    `,


    /* =====================================
       VOLUNTARIADO
       ===================================== */

    voluntariado: `

        <h2>
            Voluntariado
        </h2>

    `,


    /* =====================================
       DOAÇÕES
       ===================================== */

    doacoes: `

        <h2>
            Doações
        </h2>

    `,


    /* =====================================
       INCLUSÃO DIGITAL
       ===================================== */

    "inclusao-digital": `

        <h2>
            Inclusão Digital
        </h2>

    `,


    /* =====================================
       CRONOGRAMA
       ===================================== */

    cronograma: `

        <h2>
            Cronograma
        </h2>

    `

};


/* =========================================
   GRÁFICO DE CURSOS
   ========================================= */

function criarGraficoCursos() {

    const canvas =
        document.getElementById("graficoCursos");


    if (
        !canvas ||
        typeof Chart === "undefined"
    ) {

        return;

    }


    new Chart(canvas, {

        type: "bar",


        data: {

            labels: [

                "Programação Web",

                "Informática Básica",

                "Empreendedorismo",

                "Liderança",

                "Desenvolvimento Pessoal",

                "Habilidades Sociais"

            ],


            datasets: [

                {

                    label:
                        "Cursos disponíveis",


                    data: [

                        1,

                        1,

                        1,

                        1,

                        1,

                        1

                    ]

                }

            ]

        },


        options: {

            responsive: true,


            scales: {

                y: {

                    beginAtZero: true,


                    ticks: {

                        stepSize: 1

                    }

                }

            }

        }

    });

}


/* =========================================
   RENDERIZAÇÃO DA PÁGINA
   ========================================= */

function renderizarPagina() {

    if (!app) {

        return;

    }


    let rota =
        location.hash.replace("#", "");


    if (!rota) {

        rota = "home";

    }


    if (!paginas[rota]) {

        rota = "home";

    }


    app.innerHTML =
        paginas[rota];


    /* =====================================
       CONFIGURAÇÕES DA PÁGINA DE CURSOS
       ===================================== */

    if (rota === "cursos") {

        configurarPesquisa();

        configurarFormulario();

        carregarInscricao();

        criarGraficoCursos();

    }

}


/* =========================================
   PESQUISA DE CURSOS
   ========================================= */

function configurarPesquisa() {

    const campoPesquisa =
        document.getElementById(
            "pesquisa-curso"
        );


    const listaCursos =
        document.getElementById(
            "lista-cursos"
        );


    if (
        !campoPesquisa ||
        !listaCursos
    ) {

        return;

    }


    campoPesquisa.addEventListener(
        "input",
        function() {


            const textoPesquisa =
                campoPesquisa.value
                    .toLowerCase()
                    .trim();


            const cursosFiltrados =
                cursos.filter(
                    function(curso) {


                        return curso
                            .toLowerCase()
                            .includes(
                                textoPesquisa
                            );

                    }
                );


            listaCursos.innerHTML =
                gerarCursos(
                    cursosFiltrados
                );

        }
    );

}


/* =========================================
   VALIDAÇÃO DOS CAMPOS
   ========================================= */

function validarCampo(
    campo,
    mensagem
) {

    if (!campo) {

        return false;

    }


    const mensagemErro =
        campo.nextElementSibling;


    if (!campo.value.trim()) {


        campo.classList.add(
            "campo-erro"
        );


        campo.classList.remove(
            "campo-sucesso"
        );


        if (mensagemErro) {

            mensagemErro.textContent =
                mensagem;

        }


        return false;

    }


    if (!campo.checkValidity()) {


        campo.classList.add(
            "campo-erro"
        );


        campo.classList.remove(
            "campo-sucesso"
        );


        if (mensagemErro) {

            mensagemErro.textContent =
                mensagem;

        }


        return false;

    }


    campo.classList.remove(
        "campo-erro"
    );


    campo.classList.add(
        "campo-sucesso"
    );


    if (mensagemErro) {

        mensagemErro.textContent =
            "";

    }


    return true;

}


/* =========================================
   CONFIGURAÇÃO DO FORMULÁRIO
   ========================================= */

function configurarFormulario() {

    const formulario =
        document.getElementById(
            "form-inscricao"
        );


    if (!formulario) {

        return;

    }


    const nome =
        document.getElementById(
            "nome"
        );


    const email =
        document.getElementById(
            "email"
        );


    const curso =
        document.getElementById(
            "curso"
        );


    /* =====================================
       VALIDAÇÃO DO NOME
       ===================================== */

    nome.addEventListener(
        "input",
        function() {

            validarCampo(
                nome,
                "Digite seu nome."
            );

        }
    );


    /* =====================================
       VALIDAÇÃO DO EMAIL
       ===================================== */

    email.addEventListener(
        "input",
        function() {

            validarCampo(
                email,
                "Digite um email válido."
            );

        }
    );


    /* =====================================
       VALIDAÇÃO DO CURSO
       ===================================== */

    curso.addEventListener(
        "input",
        function() {

            validarCampo(
                curso,
                "Selecione um curso."
            );

        }
    );


    /* =====================================
       ENVIO DO FORMULÁRIO
       ===================================== */

    formulario.addEventListener(
        "submit",
        function(event) {


            event.preventDefault();


            const nomeValido =
                validarCampo(
                    nome,
                    "Digite seu nome."
                );


            const emailValido =
                validarCampo(
                    email,
                    "Digite um email válido."
                );


            const cursoValido =
                validarCampo(
                    curso,
                    "Selecione um curso."
                );


            if (
                !nomeValido ||
                !emailValido ||
                !cursoValido
            ) {

                return;

            }


            /* =================================
               CRIAÇÃO DO OBJETO
               ================================= */

            const inscricao = {

                nome:
                    nome.value,


                email:
                    email.value,


                curso:
                    curso.options[
                        curso.selectedIndex
                    ].text,


                data:
                    new Date()
                        .toLocaleDateString(
                            "pt-BR"
                        )

            };


            /* =================================
               LOCALSTORAGE
               ================================= */

            localStorage.setItem(

                "inscricaoCONECJOV",

                JSON.stringify(
                    inscricao
                )

            );


            /* =================================
               MENSAGEM
               ================================= */

            mostrarMensagem(
                "Inscrição realizada com sucesso!"
            );


            /* =================================
               LIMPEZA DO FORMULÁRIO
               ================================= */

            formulario.reset();


            nome.classList.remove(
                "campo-sucesso"
            );


            email.classList.remove(
                "campo-sucesso"
            );


            curso.classList.remove(
                "campo-sucesso"
            );

        }
    );

}


/* =========================================
   RECUPERAÇÃO DO LOCALSTORAGE
   ========================================= */

function carregarInscricao() {

    const dadosSalvos =
        localStorage.getItem(
            "inscricaoCONECJOV"
        );


    if (!dadosSalvos) {

        return;

    }


    const inscricao =
        JSON.parse(
            dadosSalvos
        );


    const nome =
        document.getElementById(
            "nome"
        );


    const email =
        document.getElementById(
            "email"
        );


    const curso =
        document.getElementById(
            "curso"
        );


    if (
        !nome ||
        !email ||
        !curso
    ) {

        return;

    }


    nome.value =
        inscricao.nome;


    email.value =
        inscricao.email;


    /* =====================================
       RESTAURAÇÃO DO CURSO
       ===================================== */

    for (
        let i = 0;
        i < curso.options.length;
        i++
    ) {


        if (
            curso.options[i].text ===
            inscricao.curso
        ) {


            curso.selectedIndex =
                i;


            break;

        }

    }

}


/* =========================================
   MENSAGEM DE CONFIRMAÇÃO
   ========================================= */

function mostrarMensagem(
    mensagem
) {

    let alerta =
        document.getElementById(
            "alerta"
        );


    if (!alerta) {


        alerta =
            document.createElement(
                "div"
            );


        alerta.id =
            "alerta";


        alerta.classList.add(
            "alerta"
        );


        app.prepend(
            alerta
        );

    }


    alerta.textContent =
        mensagem;


    alerta.style.display =
        "block";


    setTimeout(
        function() {


            alerta.style.display =
                "none";


        },
        3000
    );

}


/* =========================================
   MENU HAMBÚRGUER
   ========================================= */

function configurarMenu() {

    const botaoMenu =
        document.querySelector(
            ".menu-hamburguer"
        );


    const menu =
        document.querySelector(
            "nav ul"
        );


    if (
        !botaoMenu ||
        !menu
    ) {

        return;

    }


    botaoMenu.addEventListener(
        "click",
        function() {


            menu.classList.toggle(
                "menu-aberto"
            );


        }
    );

}


/* =========================================
   DOMCONTENTLOADED
   ========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {


        renderizarPagina();


        configurarMenu();


    }
);


/* =========================================
   HASHCHANGE
   ========================================= */

window.addEventListener(
    "hashchange",
    function() {


        renderizarPagina();


    }
);
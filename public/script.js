window.addEventListener('load', function () {
    var audio = document.getElementById('sambaSong');
    audio.play().catch(function () {
        document.addEventListener('click', function () {
            audio.play();
        }, {
            once: true
        });
    });
});

function showCustomAlert(message) {
    document.querySelector('.custom-alert-content p').innerText = message;
    document.getElementById('custom-alert').style.display = 'block';
}

function closeCustomAlert() {
    document.getElementById('custom-alert').style.display = 'none';
}

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});



document.addEventListener('keydown', function (e) {
    if (e.ctrlKey || e.metaKey) {
        if (e.key === 's' || e.key === 'p' || e.key === 'c' || e.key === 'u') {
            e.preventDefault();
        }
    }
});

document.addEventListener('dragstart', function (e) {
    e.preventDefault();
});

function openCard(cardId) {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById(cardId).classList.add('active');
}


function closeCard() {
    document.getElementById('overlay').style.display = 'none';
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.classList.remove('active'));
}


function openOtherCard(cardId) {
    closeCard();
    setTimeout(() => {
        openCard(cardId);
    }, 300);
}


function verComunicado(comunicadoId, imgSrc) {
    const comunicados = {
        'comunicado1':'<br>Pois é! Esse é um benefício que estendemos a todos os colaboradores e também à família de cada um de vocês! <br><br>Aproveitem essa oportunidade de ouro para acessar uma série de serviços, como lazer, esporte, saúde, cultura e muito mais.',
        'link': 'Acesse o nosso portal para realizar consultas e gerenciar as respostas de ID dos clientes. Este espaço foi projetado para oferecer informações exclusivas e facilitar a comunicação. <br><br>Você encontrará recursos valiosos para atender às suas necessidades e garantir um atendimento de qualidade.<br> <br> <a href="https://exemplo.com/portal-cliente" target="_blank" style="color: goldenrod;  text-decoration: none;">Clique aqui!</a> ',
        'link1': 'Visite o nosso site oficial para conhecer mais sobre nossos serviços, missão e visão.<br><br> Aqui, você encontrará informações detalhadas sobre tudo o que fazemos e como podemos ajudar nossos clientes.<br> <br> <a href="https://andcont.com.br/" target="_blank" style="color: goldenrod;  text-decoration: none;">Clique Aqui</a>',
        'link2': 'Fique conectado com a gente através das nossas redes sociais! Siga-nos para receber atualizações, novidades e interagir com a nossa comunidade. <br>Compartilhamos conteúdos interessantes e dicas que podem ser úteis para você. <br> <br><a href="https://linktr.ee/andcont?fbclid=PAZXh0bgNhZW0CMTEAAaYD0ClmjXWcn_nacSrC_VBcNUMj4d7tUANJVJ3idh9W_5OPtist8R6nTcY_aem_5_xKy14HuJri181auKuOZwcom.br/" target="_blank" style="color: goldenrod;  text-decoration: none;">Clique Aqui</a>',
        'link3': 'Acesse nosso Google Drive para visualizar e baixar documentos, apresentações e outros arquivos compartilhados. <br><br>Este espaço é utilizado para facilitar o compartilhamento de informações entre a equipe e garantir que todos tenham acesso às últimas versões dos documentos importantes.  <br> <br><a href="https://drive.google.com/drive/my-drive" target="_blank" style="color: goldenrod;  text-decoration: none;">Clique Aqui</a>',
        'link4': '<p><strong>O Código de Ética e Conduta da AndCont</strong> é um guia que estabelece os <strong>princípios éticos</strong> e as diretrizes para as relações internas e externas da empresa. Ele orienta comportamentos baseados em <strong>integridade</strong>, <strong>respeito</strong>, <strong>transparência</strong> e <strong>responsabilidade</strong>. O documento reforça a cultura organizacional, assegura conformidade com a legislação e facilita o acesso dos colaboradores à aplicação desses valores no dia a dia.<br><br><a href="https://andcont.com.br/wp-content/uploads/2024/02/AC2023-book-conduta-A5-0512.pdf" target="_blank" style="color: goldenrod; text-decoration: none;">Clique aqui para acessar o documento completo</a>.</p>',
        'link5': '<strong>📸 Fotos da Confraternização Disponíveis!</strong><br> Acesse as fotos no link: <a href="https://drive.google.com/drive/folders/1p8k-qIgGrxRkNL8lO4hH1JkwjY5CNYL4?usp=drive_link" target="_blank" style="color: goldenrod; text-decoration: none;">Clique Aqui!</a>.',
        'link6': '<br><strong>CURSOS AndCont 💥</strong><br><BR><strong><a href="https://cursosmodulos.com.br/Aluno/">MODULOS</a></strong><br>Login: monicaandrade@andcont.com.br<br>Senha temporária de Acesso (você altera no Portal do Aluno): fjlj33jij<br><strong><a href="https://app.infogo.com.br/a92339">AUDISA</a></strong><br>Usuário: 47.754.987/0001-01<br>Senha: andcont2023<br><strong><a href="https://www.coad.com.br/home">COAD</a></strong><br>Usuário: 11K16409<br>Senha: 99039627<br><strong><a href="https://www.filantropia.ong/area_afiliado/home.php">FILANTROPIA</a></strong><br>Usuário: monicaandrade@andcont.com.br<br>Senha: 804616<br><strong><br>CURSOS GRATUITOS 😁</strong><br><a href="https://www.sebrades.org.br">SEBRADES</a> <a href="https://www.bradesco.com.br">BRADESCO</a> <a href="https://educacao-executiva.fgv.br">FGV</a> <a href="https://www.aprenda.com.br">APRENDA</a> <a href="https://www.saberes.org.br">SABERES</a> <a href="https://www.sebrae.com.br">SEBRAE</a> <a href="https://www.sp.senai.br">SENAI</a><br><strong><br>VALE A PENA ACESSAR.<br></strong><a href="https://www.youtube.com/@escolaaberta3setor">ESCOLA ABERTA DA 3º SETOR</a>  <a href="https://www.youtube.com">OSC LEGAL YOUTUBE</a> <a href="https://www.unisescon.org.br">UNISESCON</a> <a href="https://www.podcast3setor.com.br">PODCAST 3º SETOR</a><br>',
        'calendario7': '<br> <strong>Aniversariante de Maio 🎉🥳</strong> <br><br>Jamile  02/05 <br> ',
        'comunicado9': '<strong><br>Olá, AndConters!</strong><br>Estamos animados em compartilhar com vocês a programação de férias para 2025.<br><br>🌟 <strong>Planeje-se e aproveite ao máximo!<br></strong>Consulte agora mesmo o cronograma completo disponível no link: <a href="https://docs.google.com/spreadsheets/d/1AfEk6-Ol0fq4X7fS21jrhDHqJ37JKLvt/edit?usp=sharing&ouid=110009148269717977147&rtpof=true&sd=true" target="_blank" style="color: goldenrod;  text-decoration: none;">Acessar programação de férias</a>.',
        'calendario8': '<strong><br>Olá, AndConters!<br></strong><br>Consulte agora mesmo o cronograma completo disponível no link: <a href="https://docs.google.com/spreadsheets/d/1AfEk6-Ol0fq4X7fS21jrhDHqJ37JKLvt/edit?usp=sharing&ouid=110009148269717977147&rtpof=true&sd=true" target="_blank" style="color: goldenrod;  text-decoration: none;">Acessar programação de férias</a>.',
        'link7': '<p><strong>Olá, pessoal!</strong><br>O departamento TIC apresenta um tutorial simples e rápido para que vocês possam utilizar perfeitamente nossa ferramenta de ligações.<br><strong><br>Como realizar uma ligação para números externos:</strong><br>Sempre que quiser ligar para um número externo, é necessário adicionar o DDD antes do número desejado.<br><strong><br>Exemplos:</strong><br>(021) 4444-5555<br>(011) 5555-4444<br><strong><br>Transferência de chamadas:</strong><br>Nosso MicroSip também permite transferir atendimentos de um colaborador para outro. Para isso, siga os seguintes passos:<br><br>1. Digite <code>*2</code>.<br>2. Aguarde a voz informando que você pode transferir a chamada.<br>3. Digite o número do ramal para o qual deseja transferir a chamada.<br>4. Aguarde o sinal sonoro (um "PIIII") que confirma que o ramal foi selecionado.<br>5. Finalmente, digite <code>#</code> para concluir a transferência.<br><br><strong>Exemplo:</strong><br><code>*21001#</code><br><br><strong>Como realizar uma ligação interna (para outro ramal):</strong><br>Para ligar para outro ramal, basta digitar diretamente o número do ramal desejado.<br><br><strong>Exemplo:</strong><br>Digitar <code>1001</code> realizará uma ligação para o Andrey.<br><br><strong>Lista de ramais dos nossos colaboradores:</strong><br><ul><li><strong>Luciene:</strong> 1000</li><li><strong>Yves:</strong> 1001</li><li><strong>Dayana:</strong> 1002</li><li><strong>Gabrielle:</strong> 1003</li><li><strong>Jamile:</strong> 1004</li><li><strong>Bruno:</strong> 1005</li><li><strong>Iago:</strong> 1006</li><li><strong>Isabelly:</strong> 1007</li><li><strong>Julia:</strong> 1008</li><li><strong>Taiane:</strong> 1009</li><li><strong>Tatiane:</strong> 1010</li><li><strong>Vanda:</strong> 1011</li><li><strong>Vitoria:</strong> 1012</li><li><strong>Amanda:</strong> 1013</li><strong><li>Andrey:</strong> 1014</li> </ul><br>Caso tenha dúvidas, entre em contato com o time do TIC. Estamos à disposição!<br><br><strong>AndCont – Conectando Pessoas e Números há mais de 30 anos.</strong></p>',
        'comunicado3':'📢 <strong>Informativo – Feriados e Home Office</strong> 📢 <br> <br>📌 <strong>18/04 </strong> – Feriado (<strong>Sexta-feira Santa</strong>) [<strong>Folga</strong>] <br>📌 <strong>21/04</strong> – Feriado (<strong>Tiradentes</strong>) [<strong>Folga</strong>] <br>📌 <strong>22/04 </strong> – Dia normal [<strong>Home Office</strong>] <br>📌 <strong>23/04 )</strong> – Feriado (<strong>Dia de São Jorge</strong>) [<strong>Folga</strong>] <br>📌 <strong>24/04 </strong> e <strong>25/04 </strong> – Dias normais [<strong>Home Office</strong>] <br><br>🔄 <strong>Retorno ao escritório: 28/04 </strong>',
        'comunicado14': '<br>É com muita alegria que damos as boas-vindas à nossa nova colaboradora: <strong>Alessandra</strong>!<br> <br>Mais conhecida como <strong>Ale</strong>, <strong>Lele</strong>, <strong>Lessa</strong> ou <strong>Alezinha</strong> (pode escolher o apelido 😄), ela chega para somar com sua energia, dedicação e muitas habilidades. <br><br>Alessandra é mãe de dois meninos, casada há cerca de 5 anos, e tem um jeitinho mais reservado no início, mas logo vai se enturmando e conquistando todos à sua volta com seu carisma e simpatia. <br>Ela ama aprender coisas novas, é fã de uma boa leitura, adora cantar, dançar, viajar e – claro – comer bem! 😋 <br><br>No ambiente profissional, a Ale é conhecida por sua proatividade, senso de urgência, calma, organização e olhar detalhista. Ao longo de suas experiências, desenvolveu empatia, flexibilidade e uma persistência admirável, sempre disposta a encarar novos desafios. <br><br>💼 Estamos muito felizes em tê-la com a gente e desejamos muito sucesso nessa nova jornada! Seja bem-vinda, Ale! 💙<br>',
    };

    const resumo = comunicados[comunicadoId] || 'Resumo não disponível no momento.';


    document.getElementById('resumo-conteudo').innerHTML = resumo;

    const comunicadoImagem = document.getElementById('comunicado-imagem');
    if (imgSrc) {
        comunicadoImagem.src = imgSrc;
        comunicadoImagem.style.display = 'block';
    } else {
        comunicadoImagem.style.display = 'none';
    }

    openCard('resumo-card');
}


function closeResumoCard() {
    document.getElementById('resumo-card').classList.remove('active');
    document.getElementById('overlay').style.display = 'none';
}

const popup = document.getElementById('popup');
const closeButton = document.getElementById('close-button');

function showPopup() {
    document.getElementById('popup-novo-comunicado').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup-novo-comunicado').style.display = 'none';
}

function goToComunicado() {
    closePopup(); // Fechar o popup
    window.location.href = '#comunicado';
}

setTimeout(showPopup, 5);

if ("Notification" in window) {
    window.addEventListener('load', () => {
        if (Notification.permission === "default") {
            Notification.requestPermission();
        }
    });
} else {
    console.log("Este navegador não suporta notificações.");
}
const employees = [{
        name: "Luciene",
        extension: "1000"
    },
    {
        name: "Yves",
        extension: "1001"
    },
    {
        name: "Dayana",
        extension: "1002"
    },
    {
        name: "Gabrielle",
        extension: "1003"
    },
    {
        name: "Jamile",
        extension: "1004"
    },
    {
        name: "Bruno",
        extension: "1005"
    },
    {
        name: "Iago",
        extension: "1006"
    },
    {
        name: "Isabelly",
        extension: "1007"
    },
    {
        name: "Julia",
        extension: "1008"
    },
    {
        name: "Taiane",
        extension: "1009"
    },
    {
        name: "Tatiane",
        extension: "1010"
    },
    {
        name: "Vanda",
        extension: "1011"
    },
    {
        name: "Vitoria",
        extension: "1012"
    },
    {
        name: "Amanda",
        extension: "1013"
    },
    {
        name: "Andrey",
        extension: "1014"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById('searchRamal');
    if (searchInput) {
        searchInput.addEventListener('input', filterEmployees);
    }

    displayEmployees(employees);
});


function filterEmployees() {
    const searchInput = document.getElementById('searchRamal');
    if (!searchInput) return;

    const searchTerm = searchInput.value.trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    const filtered = employees.filter(employee => {
        const name = employee.name.toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
        const extension = employee.extension.toString();

        return name.includes(searchTerm) || extension.includes(searchTerm);
    });

    displayEmployees(filtered);
}

function displayEmployees(employeesList) {
    const directoryGrid = document.getElementById('directoryGrid');
    if (!directoryGrid) return;

    directoryGrid.innerHTML = '';

    if (employeesList.length === 0) {
        directoryGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-user-slash"></i>
                <h3>Nenhum coloborador encontrado</h3>
                <p>Tente novamente</p>
            </div>
        `;
        return;
    }

    employeesList.forEach(employee => {
        const card = document.createElement('div');
        card.className = 'employee-card';
        card.innerHTML = `
            <div class="avatar">${employee.name[0].toUpperCase()}</div>
            <div class="employee-info">
                <div class="employee-name">${employee.name}</div>
                <div class="employee-extension">
                    <i class="fas fa-phone-alt"></i>
                    ${employee.extension}
                </div>
            </div>
        `;
        directoryGrid.appendChild(card);
    });
}



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
        'comunicado1': '<br>Pois é! Esse é um benefício que estendemos a todos os colaboradores e também à família de cada um de vocês! <br><br>Aproveitem essa oportunidade de ouro para acessar uma série de serviços, como lazer, esporte, saúde, cultura e muito mais.',
        'link': 'Acesse o nosso para realizar consultas e gerenciar as respostas de ID dos clientes. Este espaço foi projetado para oferecer informações exclusivas e facilitar a comunicação. <br><br>Você encontrará recursos valiosos para atender às suas necessidades e garantir um atendimento de qualidade.<br> <br> <a href="https://exemplo.com/portal-cliente" target="_blank" style="color: goldenrod;  text-decoration: none;">Clique aqui!</a> ',
        'link1': 'Visite o nosso site oficial para conhecer mais sobre nossos serviços, missão e visão.<br><br> Aqui, você encontrará informações detalhadas sobre tudo o que fazemos e como podemos ajudar nossos clientes.<br> <br> <a href="https://andcont.com.br/" target="_blank" style="color: goldenrod;  text-decoration: none;">Clique Aqui</a>',
        'link2': 'Fique conectado com a gente através das nossas redes sociais! Siga-nos para receber atualizações, novidades e interagir com a nossa comunidade. <br>Compartilhamos conteúdos interessantes e dicas que podem ser úteis para você. <br> <br><a href="https://linktr.ee/andcont?fbclid=PAZXh0bgNhZW0CMTEAAaYD0ClmjXWcn_nacSrC_VBcNUMj4d7tUANJVJ3idh9W_5OPtist8R6nTcY_aem_5_xKy14HuJri181auKuOZwcom.br/" target="_blank" style="color: goldenrod;  text-decoration: none;">Clique Aqui</a>',
        'link3': 'Acesse nosso Google Drive para visualizar e baixar documentos, apresentações e outros arquivos compartilhados. <br><br>Este espaço é utilizado para facilitar o compartilhamento de informações entre a equipe e garantir que todos tenham acesso às últimas versões dos documentos importantes.  <br> <br><a href="https://drive.google.com/drive/my-drive" target="_blank" style="color: goldenrod;  text-decoration: none;">Clique Aqui</a>',
        'comunicado3': '<strong>Tecnologia da Informação e Comunicação</strong><br><br>Prezados Clientes,<br><br>Temos o prazer de comunicar uma novidade estratégica para a AndCont e, principalmente, para você: a criação do nosso novo Departamento de Tecnologia, Informação e Comunicação (TIC). Essa iniciativa reflete o nosso compromisso contínuo em oferecer soluções inovadoras e de alta qualidade, aliadas ao atendimento humanizado que sempre nos guiou.<br><br>O TIC é mais um passo para consolidarmos a excelência e a segurança nos nossos serviços, alinhado com a nossa Cultura GOT — Gentil, Objetivo e Técnico. Ele foi desenvolvido para aprimorar nossos processos, fortalecer a proteção de dados e ampliar nossos canais de comunicação, garantindo que cada atendimento seja ágil, eficiente e confiável.<br><br>Com o TIC, nossos clientes contarão com:<br><br><strong>Tecnologia de Ponta:</strong> Novas ferramentas para otimizar serviços e oferecer ainda mais precisão e rapidez nas entregas.<br><strong>Segurança da Informação:</strong> Medidas reforçadas para proteger as suas informações, sempre em conformidade com a legislação.<br><strong>Comunicação Integrada e Humanizada:</strong> Uma comunicação mais fluida e direta, aproximando você ainda mais de toda nossa equipe.<br><br>Estamos investindo para que cada interação com a AndCont continue sendo positiva, com transparência, inovação e confiança.<br><br>Agradecemos pela parceria e estamos à disposição para mais detalhes sobre as melhorias que o TIC traz para nossos serviços.<br><br>Atenciosamente,<br>Equipe AndCont ',
        'link4': '<p><strong>O Código de Ética e Conduta da AndCont</strong> é um guia que estabelece os <strong>princípios éticos</strong> e as diretrizes para as relações internas e externas da empresa. Ele orienta comportamentos baseados em <strong>integridade</strong>, <strong>respeito</strong>, <strong>transparência</strong> e <strong>responsabilidade</strong>. O documento reforça a cultura organizacional, assegura conformidade com a legislação e facilita o acesso dos colaboradores à aplicação desses valores no dia a dia.<br><br><a href="https://andcont.com.br/wp-content/uploads/2024/02/AC2023-book-conduta-A5-0512.pdf" target="_blank" style="color: goldenrod; text-decoration: none;">Clique aqui para acessar o documento completo</a>.</p>',
        'comunicado4': '<p><strong>Bem-vindo à Intranet AndConters!</strong><br>Este é o seu portal de comunicação com a AndCont. Aqui você encontrará informações importantes para se manter conectado com a empresa:<br><br><strong>Comunicados</strong>: Fique por dentro das novidades e mensagens oficiais da AndCont.<br><strong>Calendário</strong>: Descubra os eventos e atividades programados para cada data.<br><strong>Links úteis</strong>: Acesse ferramentas e recursos essenciais para o seu trabalho.<br><br>Aproveite este espaço para estar sempre atualizado e bem informado sobre o que acontece na AndCont!</p>',
        'comunicado5': 'Oi, Time! 🎨<br><br> <strong>Segue nosso calendário de fim de ano:<br> </strong> <br> <strong>Home Office:</strong> a partir do dia 20/12/2024 (sexta-feira)<br> <br> <strong>Retorno presencial:</strong> 06/01/2025 (segunda-feira) <br><br> <strong>Folgas especiais:</strong> <br> 24/12 (terça-feira) <br> 31/12 (terça-feira) <br><br> <strong>Feriados:</strong> <br> 25/12 (quarta-feira) – Natal 🎄 <br> 01/01/2025 (quarta-feira) – Ano Novo 🎆 <br><br> Esse planejamento foi feito para nos proporcionar um bom descanso e celebrações ao lado de nossas famílias! Esperamos que recarreguem suas energias para um 2025 ainda mais próspero e cheio de bons momentos. <br> <br>Aproveitem as festas com muito amor e alegria!',
        'link5': '<strong>📸 Fotos da Confraternização Disponíveis!</strong><br> Acesse as fotos no link: <a href="https://drive.google.com/drive/folders/1p8k-qIgGrxRkNL8lO4hH1JkwjY5CNYL4?usp=drive_link" target="_blank" style="color: goldenrod; text-decoration: none;">Clique Aqui!</a>.',
        'link6': '<br><strong>CURSOS AndCont 💥</strong><br><BR><strong><a href="https://cursosmodulos.com.br/Aluno/">MODULOS</a></strong><br>Login: monicaandrade@andcont.com.br<br>Senha temporária de Acesso (você altera no Portal do Aluno): fjlj33jij<br><strong><a href="https://app.infogo.com.br/a92339">AUDISA</a></strong><br>Usuário: 47.754.987/0001-01<br>Senha: andcont2023<br><strong><a href="https://www.coad.com.br/home">COAD</a></strong><br>Usuário: 11K16409<br>Senha: 99039627<br><strong><a href="https://www.filantropia.ong/area_afiliado/home.php">FILANTROPIA</a></strong><br>Usuário: monicaandrade@andcont.com.br<br>Senha: 804616<br><strong><br>CURSOS GRATUITOS 😁</strong><br><a href="https://www.sebrades.org.br">SEBRADES</a> <a href="https://www.bradesco.com.br">BRADESCO</a> <a href="https://educacao-executiva.fgv.br">FGV</a> <a href="https://www.aprenda.com.br">APRENDA</a> <a href="https://www.saberes.org.br">SABERES</a> <a href="https://www.sebrae.com.br">SEBRAE</a> <a href="https://www.sp.senai.br">SENAI</a><br><strong><br>VALE A PENA ACESSAR.<br></strong><a href="https://www.youtube.com/@escolaaberta3setor">ESCOLA ABERTA DA 3º SETOR</a>  <a href="https://www.youtube.com">OSC LEGAL YOUTUBE</a> <a href="https://www.unisescon.org.br">UNISESCON</a> <a href="https://www.podcast3setor.com.br">PODCAST 3º SETOR</a><br>',
        'calendario7': '<br> <strong>Aniversariantes de Fevereiro🎉🥳</strong> <br><br>Dayana 14/02',
        'calendario6': '<br>Está na hora do <strong>último brunch de 2024</strong> da AndCont, um momento para <strong>parar o trabalho</strong>,reunir o time e celebrar juntos na <strong>sala de reunião</strong>, onde <strong>tudo está pronto</strong>!',
        'comunicado9': '<strong><br>Olá, AndConters!</strong><br>Estamos animados em compartilhar com vocês a programação de férias para 2025.<br><br>🌟 <strong>Planeje-se e aproveite ao máximo!<br></strong>Consulte agora mesmo o cronograma completo disponível no link: <a href="https://docs.google.com/spreadsheets/d/1AfEk6-Ol0fq4X7fS21jrhDHqJ37JKLvt/edit?usp=sharing&ouid=110009148269717977147&rtpof=true&sd=true" target="_blank" style="color: goldenrod;  text-decoration: none;">Acessar programação de férias</a>.',
        'calendario8': '<strong><br>Olá, AndConters!<br></strong><br>Consulte agora mesmo o cronograma completo disponível no link: <a href="https://docs.google.com/spreadsheets/d/1AfEk6-Ol0fq4X7fS21jrhDHqJ37JKLvt/edit?usp=sharing&ouid=110009148269717977147&rtpof=true&sd=true" target="_blank" style="color: goldenrod;  text-decoration: none;">Acessar programação de férias</a>.',
        'link7': '<p><strong>Olá, pessoal!</strong><br>O departamento TIC apresenta um tutorial simples e rápido para que vocês possam utilizar perfeitamente nossa ferramenta de ligações.<br><strong><br>Como realizar uma ligação para números externos:</strong><br>Sempre que quiser ligar para um número externo, é necessário adicionar o DDD antes do número desejado.<br><strong><br>Exemplos:</strong><br>(021) 4444-5555<br>(011) 5555-4444<br><strong><br>Transferência de chamadas:</strong><br>Nosso MicroSip também permite transferir atendimentos de um colaborador para outro. Para isso, siga os seguintes passos:<br><br>1. Digite <code>*2</code>.<br>2. Aguarde a voz informando que você pode transferir a chamada.<br>3. Digite o número do ramal para o qual deseja transferir a chamada.<br>4. Aguarde o sinal sonoro (um "PIIII") que confirma que o ramal foi selecionado.<br>5. Finalmente, digite <code>#</code> para concluir a transferência.<br><br><strong>Exemplo:</strong><br><code>*21001#</code><br><br><strong>Como realizar uma ligação interna (para outro ramal):</strong><br>Para ligar para outro ramal, basta digitar diretamente o número do ramal desejado.<br><br><strong>Exemplo:</strong><br>Digitar <code>1001</code> realizará uma ligação para o Andrey.<br><br><strong>Lista de ramais dos nossos colaboradores:</strong><br><ul><li><strong>Luciene:</strong> 1000</li><li><strong>Yves:</strong> 1001</li><li><strong>Dayana:</strong> 1002</li><li><strong>Gabrielle:</strong> 1003</li><li><strong>Jamile:</strong> 1004</li><li><strong>Bruno:</strong> 1005</li><li><strong>Iago:</strong> 1006</li><li><strong>Isabelly:</strong> 1007</li><li><strong>Julia:</strong> 1008</li><li><strong>Taiane:</strong> 1009</li><li><strong>Tatiane:</strong> 1010</li><li><strong>Vanda:</strong> 1011</li><li><strong>Vitoria:</strong> 1012</li><li><strong>Amanda:</strong> 1013</li><strong><li>Andrey:</strong> 1014</li> </ul><br>Caso tenha dúvidas, entre em contato com o time do TIC. Estamos à disposição!<br><br><strong>AndCont – Conectando Pessoas e Números há mais de 30 anos.</strong></p>',
        'calendario9':'<br>Treinamento: <b>Saúde Mental no Trabalho</b><br><br>Na próxima segunda-feira, <b>03/02/2025</b>, das <b>8h às 9h</b>, vamos nos reunir no <b>Departamento Pessoal</b> para um treinamento especial sobre a importância da saúde mental no ambiente de trabalho.<br>Será um momento de reflexão e aprendizado, com uma dinâmica interativa e foco na prevenção. Afinal, cuidar da mente é tão essencial quanto cuidar do corpo.<br><br><b>Contamos com a participação de todos para essa troca enriquecedora!<br></b><br>📍 <b>Local:</b> Setor do Departamento Pessoal<br>⏰ <b>Horário:</b> 8h às 9h<br><b>Nos vemos lá! 😊</b>',
        'calendario10': '<p>🌟🎉 <strong>Pessoal, atenção para uma notícia super especial!</strong> 🎉🌟<br><br>Hoje é dia de celebrar os <strong>aniversariantes do mês de janeiro!</strong> 🥳🎂<br>Vamos nos reunir para comemorar com muito carinho, risadas e, claro, <strong>bolo!</strong> 🍰💖<br><br>A comemoração será <strong>às 16h, na AndCont</strong>, então não se esqueçam de reservar um tempinho para esse momento de <strong>alegria, amizade e boas energias!</strong> 🌈<br><br>Vamos tornar esse dia ainda mais especial, <strong>celebrando juntos</strong> as conquistas e os sorrisos dos nossos colegas de trabalho! 😄🎈<strong><br><br>Contamos com todos vocês</strong> para deixar essa festa ainda mais incrível! 💫</p>',
        'comunicado22':'📢 Prezados colaboradores, segue a nossa programação de carnaval<br> <br>Nos dias <strong>03/03, 04/03 e 05/03</strong>, não haverá expediente.<br>Nos dias <strong>06/03 e 07/03</strong>, será home office.<br><br>Retornaremos as atividades no escritório no dia <strong>10/03</strong>.<br><br>Contamos com a colaboração de todos!<br>Divirtam-se com moderação e aproveitem o feriadão!<br><br> <strong>"Viver cada dia como se fosse o último é uma ótima oportunidade para aprender a amar cada segundo do seu dia".🤗😉</strong><br><br><br>Atenciosamente,<br><strong> AndCont</strong>',
        'calendario11':'Prezados colaboradores,<br><br><strong>Amanhã, antes de iniciarmos o expediente, precisaremos de 10 minutinhos da atenção de todos. Contamos com a presença de cada um!</strong><br><br>Desde já, agradecemos a colaboração.'
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
const employees = [
    { name: "Luciene", extension: "1000" },
    { name: "Yves", extension: "1001" },
    { name: "Dayana", extension: "1002" },
    { name: "Gabrielle", extension: "1003" },
    { name: "Jamile", extension: "1004" },
    { name: "Bruno", extension: "1005" },
    { name: "Iago", extension: "1006" },
    { name: "Isabelly", extension: "1007" },
    { name: "Julia", extension: "1008" },
    { name: "Taiane", extension: "1009" },
    { name: "Tatiane", extension: "1010" },
    { name: "Vanda", extension: "1011" },
    { name: "Vitoria", extension: "1012" },
    { name: "Amanda", extension: "1013" },
    { name: "Andrey", extension: "1014" }
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

const snowContainer = document.getElementById("snow-container");
const snowContent = ['&#10052', '&#10053', '&#10054']

const random = (num) => {
    return Math.floor(Math.random() * num);
}

const getRandomStyles = () => {
    const top = random(100);
    const left = random(100);
    const dur = random(10) + 10;
    const size = random(25) + 25;
    return `
    top: -${top}%;
    left: ${left}%;
    font-size: ${size}px;
    animation-duration: ${dur}s;
  `;
}

const createSnow = (num) => {
    for (var i = num; i > 0; i--) {
        var snow = document.createElement("div");
        snow.className = "snow";
        snow.style.cssText = getRandomStyles();
        snow.innerHTML = snowContent[random(3)]
        snowContainer.append(snow);
    }
}

const removeSnow = () => {
    snowContainer.style.opacity = "0";
    setTimeout(() => {
        snowContainer.remove()
    }, 500)
}

window.addEventListener("load", () => {
    createSnow(30)
    setTimeout(removeSnow, (1000 * 60))
});

window.addEventListener("click", () => {
    removeSnow()
});

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
    showCustomAlert("Proibido tentar salvar qualquer conteúdo");
});

document.addEventListener('keydown', function (e) {
    if (e.ctrlKey || e.metaKey) {
        if (e.key === 's' || e.key === 'p' || e.key === 'c' || e.key === 'u') {
            e.preventDefault(); 
            showCustomAlert("Esta ação foi desativada.");
        }
    }
});

document.addEventListener('dragstart', function (e) {
    e.preventDefault();
    showCustomAlert("Arrastar e salvar conteúdo foi desativado.");
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
        'calendario1': '🎉 Enfim, nossa festa de final de ano está chegando! 🎊🥳✨<br><br>O ano foi cheio de desafios, conquistas e união. Agora, é hora de celebrarmos juntos tudo o que construímos! 🌟<br>💌 O convite já está feito:<br><br>Prepare-se para uma festa cheia de amor, alegria, e momentos inesquecíveis para encerrarmos o ano com chave de ouro.',
        'comunicado2': '<strong>ENFIM, NOSSA FESTA DE FINAL DE ANO! </strong>🎊🥳✨<br><br>Este ano foi marcado por muitos momentos de crescimento, trabalho em equipe, mudanças e, claro, altos e baixos. Mas o mais importante é que passamos por tudo isso juntos, com resiliência e deixando nossa marca registrada!<br><br>Para celebrar nossas conquistas, quero convidá-los para a nossa festa de encerramento do ano.<br><br>Será um momento de diversão, acolhimento e muita gratidão. Teremos de tudo: amor, alegria, emoções e, principalmente, a oportunidade de estarmos juntos para encerrar o ano com chave de ouro. Vocês podem trazer seus filhos, parceiros(as) ou namorados(as). Tudo será por conta da AndCont, como forma de agradecer o empenho e dedicação de cada um de vocês ao longo deste ano.<br><br>🗓 <strong>Data:</strong> 06/12<br>🏠 <strong>Local:</strong> Rua Antonio Azeredo Neto, 52 - Jardim Tropical, Nova Iguaçu (Ita Festas)<br>⏰ <strong>Horário:</strong> [em breve!]<br><br>👗<strong>Traje:</strong> Incentivamos roupas em tons claros, além é claro, da sua roupa de banho.<br><br>No dia da festa, não teremos expediente, então aproveitem para relaxar e se divertir! Aqueçam o coração e a expectativa – será um dia de emoções inesquecíveis! Em breve, trago mais informações.<br><br><strong>Contamos com a presença de todos vocês! </stron>💗',
        'comunicado3': '<strong>Tecnologia da Informação e Comunicação</strong><br><br>Prezados Clientes,<br><br>Temos o prazer de comunicar uma novidade estratégica para a AndCont e, principalmente, para você: a criação do nosso novo Departamento de Tecnologia, Informação e Comunicação (TIC). Essa iniciativa reflete o nosso compromisso contínuo em oferecer soluções inovadoras e de alta qualidade, aliadas ao atendimento humanizado que sempre nos guiou.<br><br>O TIC é mais um passo para consolidarmos a excelência e a segurança nos nossos serviços, alinhado com a nossa Cultura GOT — Gentil, Objetivo e Técnico. Ele foi desenvolvido para aprimorar nossos processos, fortalecer a proteção de dados e ampliar nossos canais de comunicação, garantindo que cada atendimento seja ágil, eficiente e confiável.<br><br>Com o TIC, nossos clientes contarão com:<br><br><strong>Tecnologia de Ponta:</strong> Novas ferramentas para otimizar serviços e oferecer ainda mais precisão e rapidez nas entregas.<br><strong>Segurança da Informação:</strong> Medidas reforçadas para proteger as suas informações, sempre em conformidade com a legislação.<br><strong>Comunicação Integrada e Humanizada:</strong> Uma comunicação mais fluida e direta, aproximando você ainda mais de toda nossa equipe.<br><br>Estamos investindo para que cada interação com a AndCont continue sendo positiva, com transparência, inovação e confiança.<br><br>Agradecemos pela parceria e estamos à disposição para mais detalhes sobre as melhorias que o TIC traz para nossos serviços.<br><br>Atenciosamente,<br>Equipe AndCont ',
        'link4': '<p><strong>O Código de Ética e Conduta da AndCont</strong> é um guia que estabelece os <strong>princípios éticos</strong> e as diretrizes para as relações internas e externas da empresa. Ele orienta comportamentos baseados em <strong>integridade</strong>, <strong>respeito</strong>, <strong>transparência</strong> e <strong>responsabilidade</strong>. O documento reforça a cultura organizacional, assegura conformidade com a legislação e facilita o acesso dos colaboradores à aplicação desses valores no dia a dia.<br><br><a href="https://andcont.com.br/wp-content/uploads/2024/02/AC2023-book-conduta-A5-0512.pdf" target="_blank" style="color: goldenrod; text-decoration: none;">Clique aqui para acessar o documento completo</a>.</p>',
        'comunicado4': '<p><strong>Bem-vindo à Intranet AndConters!</strong><br>Este é o seu portal de comunicação com a AndCont. Aqui você encontrará informações importantes para se manter conectado com a empresa:<br><br><strong>Comunicados</strong>: Fique por dentro das novidades e mensagens oficiais da AndCont.<br><strong>Calendário</strong>: Descubra os eventos e atividades programados para cada data.<br><strong>Links úteis</strong>: Acesse ferramentas e recursos essenciais para o seu trabalho.<br><br>Aproveite este espaço para estar sempre atualizado e bem informado sobre o que acontece na AndCont!</p>',
        'comunicado5': 'Oi, Time! 🎨<br><br> <strong>Segue nosso calendário de fim de ano:<br> </strong> <br> <strong>Home Office:</strong> a partir do dia 20/12/2024 (sexta-feira)<br> <br> <strong>Retorno presencial:</strong> 06/01/2025 (segunda-feira) <br><br> <strong>Folgas especiais:</strong> <br> 24/12 (terça-feira) <br> 31/12 (terça-feira) <br><br> <strong>Feriados:</strong> <br> 25/12 (quarta-feira) – Natal 🎄 <br> 01/01/2025 (quarta-feira) – Ano Novo 🎆 <br><br> Esse planejamento foi feito para nos proporcionar um bom descanso e celebrações ao lado de nossas famílias! Esperamos que recarreguem suas energias para um 2025 ainda mais próspero e cheio de bons momentos. <br> <br>Aproveitem as festas com muito amor e alegria!',
        'calendario4': '<strong>Home Office:</strong> a partir do dia 20/12/2024 (sexta-feira) <br>',
        'calendario5': '<strong>Retorno presencial:</strong> 06/01/2025 (segunda-feira) <br>',
        'comunicado6': '<br><strong>📸 Fotos da Confraternização Disponíveis!</strong><br> <br>Olá, Time AndCont!<br> As fotos incríveis da nossa confraternização já estão disponíveis para que todos possam relembrar esses momentos especiais! 💜<br> Aproveite para salvar as fotos que mais gostarem e, ao compartilhar em suas redes sociais, não esqueçam de marcar o nosso Instagram: <strong>@andcont.oficial</strong>. <br><br><a href="https://drive.google.com/drive/folders/1p8k-qIgGrxRkNL8lO4hH1JkwjY5CNYL4?usp=drive_link" target="_blank" style="color: goldenrod; text-decoration: none;">Clique aqui</a>',
        'link5': '<strong>📸 Fotos da Confraternização Disponíveis!</strong><br> Acesse as fotos no link: <a href="https://drive.google.com/drive/folders/1p8k-qIgGrxRkNL8lO4hH1JkwjY5CNYL4?usp=drive_link" target="_blank" style="color: goldenrod; text-decoration: none;">Clique Aqui!</a>.',
        'link6': '<br><strong>CURSOS AndCont 💥</strong><br><BR><strong><a href="https://cursosmodulos.com.br/Aluno/">MODULOS</a></strong><br>Login: monicaandrade@andcont.com.br<br>Senha temporária de Acesso (você altera no Portal do Aluno): fjlj33jij<br><strong><a href="https://app.infogo.com.br/a92339">AUDISA</a></strong><br>Usuário: 47.754.987/0001-01<br>Senha: andcont2023<br><strong><a href="https://www.coad.com.br/home">COAD</a></strong><br>Usuário: 11K16409<br>Senha: 99039627<br><strong><a href="https://www.filantropia.ong/area_afiliado/home.php">FILANTROPIA</a></strong><br>Usuário: monicaandrade@andcont.com.br<br>Senha: 804616<br><strong><br>CURSOS GRATUITOS 😁</strong><br><a href="https://www.sebrades.org.br">SEBRADES</a> <a href="https://www.bradesco.com.br">BRADESCO</a> <a href="https://educacao-executiva.fgv.br">FGV</a> <a href="https://www.aprenda.com.br">APRENDA</a> <a href="https://www.saberes.org.br">SABERES</a> <a href="https://www.sebrae.com.br">SEBRAE</a> <a href="https://www.sp.senai.br">SENAI</a><br><strong><br>VALE A PENA ACESSAR.<br></strong><a href="https://www.youtube.com/@escolaaberta3setor">ESCOLA ABERTA DA 3º SETOR</a>  <a href="https://www.youtube.com">OSC LEGAL YOUTUBE</a> <a href="https://www.unisescon.org.br">UNISESCON</a> <a href="https://www.podcast3setor.com.br">PODCAST 3º SETOR</a><br>',
        'calendario7': '<br> <strong>Aniversariantes de Janeiro🎉🥳</strong> <br><br>Andrey <strong>07/01</strong><br> Yves <strong>14/01</strong><br>Gabrielle <strong>15/01</strong><br>Iago <strong>18/01</strong><br>Tatiane <strong>19/01</strong></p></div>',
        'calendario6': '<br>Está na hora do <strong>último brunch de 2024</strong> da AndCont, um momento para <strong>parar o trabalho</strong>,reunir o time e celebrar juntos na <strong>sala de reunião</strong>, onde <strong>tudo está pronto</strong>!',
        'comunicado8': '<strong>Corridas de Rua x Run Experience: Descubra as Diferenças e Participe!<br></strong><br>💨 <strong>Corridas de Rua:</strong> São eventos tradicionais em vias públicas, com percursos bem definidos e distâncias para todos os gostos — de 5 km a maratonas. Essas corridas são ideais para quem busca competição, lazer ou o simples prazer de superar limites pessoais.<br><br>✨ <strong>Run Experience:</strong> Muito além da corrida! É um conceito inovador que combina o esporte com experiências únicas, como música ao vivo, food trucks, workshops e interação social. Perfeito para quem busca correr e viver momentos inesquecíveis, seja durante o dia ou em eventos temáticos à noite.<br><br><strong>Por que Participar?</strong><br>🏃 <strong>Saúde e bem-estar:</strong> Seja uma corrida de rua ou uma experiência imersiva, o importante é se movimentar!<br>🌟 <strong>Diversão e conexão:</strong> Faça amigos, explore novas sensações e celebre cada quilômetro percorrido.<br><br><strong>Pronto para Curtir?</strong></<br><br>📅Calendário de Corridas e Run Experience 2025:👉 Fique por dentro de todos os eventos do ano diretamente no link do calendário dos dois tipos de corridas. <br><br><a href="https://www.riorunningtour.com.br/calendario-corridas-rio-de-janeiro?utm_campaign=3034a55d-553b-4020-809e-703477c1d1a8&utm_source=so&utm_medium=mail&cid=6359632e-5774-4372-8474-2fa7a304396d">Descubra as próximas corridas</a><br> <br>🚀 <strong>Transforme cada corrida em uma jornada incrível!</strong>',
        'comunicado7': '<strong>Seja bem-vinda, Luciene! </strong>. <br> <br>Luciene Pimenta chegou para fortalecer o time de Departamento Pessoal da AndCont! Com uma experiência robusta na área, ela será fundamental para contribuir com excelência e eficiência no dia a dia da nossa equipe.<br><br>Estamos confiantes de que sua dedicação e conhecimento farão a diferença!<br><br>Sempre atenta aos detalhes e extremamente resiliente, ela veio para somar! Estamos ansiosos para ver todo o seu potencial brilhar aqui na <strong>AndCont!</strong>',
        'comunicado9': '<strong><br>Olá, AndConters!</strong><br>Estamos animados em compartilhar com vocês a programação de férias para 2025.<br><br>🌟 <strong>Planeje-se e aproveite ao máximo!<br></strong>Consulte agora mesmo o cronograma completo disponível no link: <a href="https://docs.google.com/spreadsheets/d/1AfEk6-Ol0fq4X7fS21jrhDHqJ37JKLvt/edit?usp=sharing&ouid=110009148269717977147&rtpof=true&sd=true" target="_blank" style="color: goldenrod;  text-decoration: none;">Acessar programação de férias</a>.',
        'calendario8': '<strong><br>Olá, AndConters!<br></strong><br>Consulte agora mesmo o cronograma completo disponível no link: <a href="https://docs.google.com/spreadsheets/d/1AfEk6-Ol0fq4X7fS21jrhDHqJ37JKLvt/edit?usp=sharing&ouid=110009148269717977147&rtpof=true&sd=true" target="_blank" style="color: goldenrod;  text-decoration: none;">Acessar programação de férias</a>.',
        'link7':'<p><strong>Olá, pessoal!</strong><br>O departamento TIC apresenta um tutorial simples e rápido para que vocês possam utilizar perfeitamente nossa ferramenta de ligações.<br><strong><br>Como realizar uma ligação para números externos:</strong><br>Sempre que quiser ligar para um número externo, é necessário adicionar o DDD antes do número desejado.<br><strong><br>Exemplos:</strong><br>(021) 4444-5555<br>(011) 5555-4444<br><strong><br>Transferência de chamadas:</strong><br>Nosso MicroSip também permite transferir atendimentos de um colaborador para outro. Para isso, basta digitar:<br><code>*2 + ramal + #</code><br><strong><br>Exemplo:</strong><br><code>*21001#</code><br><br><strong>Como realizar uma ligação interna (para outro ramal):</strong><br>Para ligar para outro ramal, basta digitar diretamente o número do ramal desejado.<br><br><strong>Exemplo:</strong><br>Digitar <code>1001</code> realizará uma ligação para o Andrey.<br><br><strong>Lista de ramais dos nossos colaboradores:</strong><br><ul><li><strong>Luciene:</strong> 1000</li><li><strong>Yves:</strong> 1001</li><li><strong>Dayana:</strong> 1002</li><li><strong>Gabrielle:</strong> 1003</li><li><strong>Jamile:</strong> 1004</li><li><strong>Bruno:</strong> 1005</li><li><strong>Iago:</strong> 1006</li><li><strong>Isabelly:</strong> 1007</li><li><strong>Julia:</strong> 1008</li><li><strong>Taiane:</strong> 1009</li><li><strong>Tatiane:</strong> 1010</li><li><strong>Vanda:</strong> 1011</li><li><strong>Victoria:</strong> 1012</li><li><strong>Amanda:</strong> 1013</li></ul><br>Caso tenha dúvidas, entre em contato com o time do TIC. Estamos à disposição!<br><br><strong>AndCont – Conectando Pessoas e Números há mais de 30 anos.</strong></p>',

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
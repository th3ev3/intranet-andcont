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
    var audio = document.getElementById('natalSong');
    // Tenta iniciar o áudio sem interação
    audio.play().catch(function () {
        // Em caso de bloqueio, tenta após uma interação do usuário
        document.addEventListener('click', function () {
            audio.play();
        }, {
            once: true
        });
    });
});

// Função para exibir o alerta personalizado
function showCustomAlert(message) {
    document.querySelector('.custom-alert-content p').innerText = message;
    document.getElementById('custom-alert').style.display = 'block';
}

// Função para fechar o alerta personalizado
function closeCustomAlert() {
    document.getElementById('custom-alert').style.display = 'none';
}

// Bloquear o menu de contexto (clique direito)
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    showCustomAlert("Proibido tentar salvar qualquer conteúdo");
});

// Bloquear atalhos de teclado para salvar, copiar, imprimir ou ver código-fonte
document.addEventListener('keydown', function (e) {
    if (e.ctrlKey || e.metaKey) {
        if (e.key === 's' || e.key === 'p' || e.key === 'c' || e.key === 'u') {
            e.preventDefault(); // Bloquear Ctrl+S, Ctrl+P, Ctrl+C, Ctrl+U
            showCustomAlert("Esta ação foi desativada.");
        }
    }
});

// Bloquear a função de arrastar imagens (para impedir arrastar e salvar)
document.addEventListener('dragstart', function (e) {
    e.preventDefault();
    showCustomAlert("Arrastar e salvar conteúdo foi desativado.");
});

// Função para abrir um card específico
function openCard(cardId) {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById(cardId).classList.add('active');
}

// Função para fechar todos os cards
function closeCard() {
    document.getElementById('overlay').style.display = 'none';
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.classList.remove('active'));
}

// Função para abrir outro card a partir de um card atual
function openOtherCard(cardId) {
    closeCard();
    setTimeout(() => { // Pequeno delay para transição suave
        openCard(cardId);
    }, 300);
}

// Função para visualizar o resumo do comunicado com a imagem
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
    };

    const resumo = comunicados[comunicadoId] || 'Resumo não disponível no momento.';

    // Exibe o resumo do comunicado com HTML (para permitir links clicáveis)
    document.getElementById('resumo-conteudo').innerHTML = resumo;

    // Verifica se imgSrc é válido e exibe a imagem
    const comunicadoImagem = document.getElementById('comunicado-imagem');
    if (imgSrc) {
        comunicadoImagem.src = imgSrc;
        comunicadoImagem.style.display = 'block'; // Exibe a imagem
    } else {
        comunicadoImagem.style.display = 'none'; // Oculta a imagem se não houver
    }

    openCard('resumo-card');
}

// Função para fechar o card de resumo do comunicado
function closeResumoCard() {
    document.getElementById('resumo-card').classList.remove('active');
    document.getElementById('overlay').style.display = 'none';
}

const popup = document.getElementById('popup');
const closeButton = document.getElementById('close-button');

// Função para abrir o popup
function showPopup() {
    document.getElementById('popup-novo-comunicado').style.display = 'block';
}

// Função para fechar o popup
function closePopup() {
    document.getElementById('popup-novo-comunicado').style.display = 'none';
}

// Função para redirecionar ao comunicado
function goToComunicado() {
    closePopup(); // Fechar o popup
    window.location.href = '#comunicado'; // Alterar para o link ou âncora correta
}

// Exibir o popup após um pequeno atraso (ex: 3 segundos)
setTimeout(showPopup, 5); // 3000 milissegundos = 3 segundos

// Verifica se o navegador suporta notificações
if ("Notification" in window) {
    // Solicita permissão assim que o site é carregado
    window.addEventListener('load', () => {
        // Verifica se a permissão ainda não foi definida pelo usuário
        if (Notification.permission === "default") { // "default" significa que o usuário ainda não escolheu
            Notification.requestPermission();
        }
    });
} else {
    console.log("Este navegador não suporta notificações.");
}
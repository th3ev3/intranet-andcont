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
        'link5': '',
        'comunicado7': '',
        'comunicado8': '',
        'comunicado9': '',
        'comunicado10': '',
        'comunicado11': 'teste'
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
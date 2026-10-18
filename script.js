const masterCardsData = [
    { title: "Adoção de IA Generativa", desc: "Automatização avançada de processos e atendimento ao cliente.", target: "right" },
    { title: "Vazamento de Dados", desc: "Falha crítica de segurança em servidores corporativos em nuvem.", target: "left" },
    { title: "Transição Energética ESG", desc: "Migração completa para matrizes sustentáveis e metas de carbono.", target: "right" },
    { title: "Processos Manuais Obsoletos", desc: "Uso de planilhas locais sem backup ou governança integrada.", target: "left" },
    { title: "Arquitetura Cloud Native", desc: "Escalabilidade elástica e alta disponibilidade de microsserviços.", target: "right" },
    { title: "Resistência Cultural Interna", desc: "Falta de alinhamento das equipes com a inovação digital.", target: "left" },
    { title: "Governança de Dados Robusta", desc: "Conformidade total com LGPD e auditoria automatizada.", target: "right" },
    { title: "Falta de Visibilidade de Riscos", desc: "Ausência de monitoramento preditivo de ameaças no ecossistema.", target: "left" },
    { title: "Inovação Aberta com Startups", desc: "Parcerias estratégicas para aceleração de novos produtos.", target: "right" },
    { title: "Dependência de Legado Antigo", desc: "Sistemas monolíticos sem suporte e vulneráveis a falhas.", target: "left" },
    { title: "Cultura de Cibersegurança", desc: "Treinamento contínuo e conscientização de colaboradores.", target: "right" },
    { title: "Falta de Agilidade Estratégica", desc: "Decisões lentas frente às mudanças rápidas de mercado.", target: "left" },
    { title: "Automação RPA de Processos", desc: "Redução de erros humanos em tarefas repetitivas e financeiras.", target: "right" },
    { title: "Fraude Interna por Acesso Livre", desc: "Falta de controle de permissões e auditoria de logs.", target: "left" },
    { title: "Análise de Dados Preditiva", desc: "Uso de Business Intelligence para antecipar tendências globais.", target: "right" },
    { title: "Falta de Backup Geográfico", desc: "Risco iminente de perda total de dados em caso de desastre.", target: "left" },
    { title: "Parcerias Estratégicas Globais", desc: "Expansão de mercado com segurança e conformidade jurídica.", target: "right" },
    { title: "Infraestrutura Local Vulnerável", desc: "Servidores físicos expostos a falhas elétricas e invasões.", target: "left" },
    { title: "Transformação Digital Ágil", desc: "Modernização completa da jornada do cliente com tecnologia.", target: "right" },
    { title: "Ausência de Plano de Continuidade", desc: "Empresa sem protocolos de contingência para crises graves.", target: "left" },
    { title: "Criptografia de Ponta a Ponta", desc: "Proteção intransigível de dados sensíveis em trânsito e repouso.", target: "right" },
    { title: "Silos de Informação Internos", desc: "Departamentos desconectados que impedem a visão unificada.", target: "left" },
    { title: "Cultura de Inovação Contínua", desc: "Estímulo à experimentação e melhoria ágil de produtos.", target: "right" },
    { title: "Falta de Conformidade Regulatória", desc: "Exposição a multas pesadas por ignorar leis de mercado.", target: "left" },
    { title: "Gestão Ágil de Riscos", desc: "Antecipação e mitigação eficiente de cenários de incerteza.", target: "right" },
    { title: "Falta de Treinamento Técnico", desc: "Equipes defasadas diante das novas tecnologias do setor.", target: "left" },
    { title: "Experiência Omnichannel Integrada", desc: "Jornada do cliente fluida e conectada em todos os pontos de contato.", target: "right" },
    { title: "Monopólio de Fornecedor Único", desc: "Alta vulnerabilidade e dependência comercial crítica.", target: "left" },
    { title: "Auditoria Automatizada em Tempo Real", desc: "Visibilidade financeira e operacional transparente e segura.", target: "right" },
    { title: "Falta de Visão de Futuro", desc: "Gestão reativa focada apenas no curto prazo e sobrevivência.", target: "left" },
    { title: "Cadeia de Suprimentos Circular", desc: "Logística reversa e reaproveitamento inteligente de insumos.", target: "right" },
    { title: "Falta de Diversidade na Liderança", desc: "Tomadas de decisão homogêneas e sem visão plural de mercado.", target: "left" },
    { title: "APIs Abertas e Escaláveis", desc: "Integração fluida com ecossistemas de parceiros e desenvolvedores.", target: "right" },
    { title: "Uso de Software Não Licenciado", desc: "Riscos graves de compliance e portas abertas para malwares.", target: "left" },
    { title: "Plataforma de Analytics em Self-Service", desc: "Empoderamento de equipes com dados em tempo real.", target: "right" },
    { title: "Falta de Canais de Feedback Anônimo", desc: "Clima organizacional tóxico e problemas abafados na base.", target: "left" },
    { title: "Estratégia de Zero Trust", desc: "Validação contínua de identidade para cada acesso corporativo.", target: "right" },
    { title: "Dependência de Planilhas Manuais", desc: "Erros humanos frequentes em relatórios financeiros críticos.", target: "left" },
    { title: "Modernização de ERP na Nuvem", desc: "Integração total de finanças, RH e operações em tempo real.", target: "right" },
    { title: "Resistência a Auditorias Externas", desc: "Falta de transparência contábil e processos obscuros.", target: "left" },
    { title: "Gestão de Identidade Descentralizada", desc: "Controle rigoroso de privilégios e acessos temporários.", target: "right" },
    { title: "Ausência de Onboarding Estruturado", desc: "Alta rotatividade e baixa produtividade inicial de novos talentos.", target: "left" },
    { title: "Laboratório de Inovação Interno", desc: "Espaço dedicado para prototipagem rápida de novos negócios.", target: "right" },
    { title: "Comunicação Interna Falha", desc: "Rumores, desinformação e desalinhamento operacional generalizado.", target: "left" },
    { title: "Mitigação de Pegada de Carbono", desc: "Monitoramento rigoroso de emissões em toda a cadeia produtiva.", target: "right" },
    { title: "Contratos Antigos Sem Revisão", desc: "Cláusulas abusivas e reajustes desfavoráveis ocultos.", target: "left" },
    { title: "Cultura de Testes e Aprendizado", desc: "Encarar falhas rápidas como oportunidades de melhoria ágil.", target: "right" },
    { title: "Falta de Métricas de Retenção", desc: "Perda silenciosa de clientes valiosos para a concorrência.", target: "left" },
    { title: "Plataforma de Relacionamento CRM", desc: "Visibilidade 360 graus do histórico e satisfação do cliente.", target: "right" },
    { title: "Gestão Baseada em Achismos", desc: "Decisões executivas tomadas sem embasamento em dados reais.", target: "left" },
    { title: "Criptografia Quântica Preventiva", desc: "Preparação antecipada contra futuras ameaças criptográficas.", target: "right" },
    { title: "Falta de Ergonomia e Bem-Estar", desc: "Altos índices de burnout e esgotamento físico de equipes.", target: "left" },
    { title: "Programa de Parceria com Universidades", desc: "Captação precoce de talentos de alta performance técnica.", target: "right" },
    { title: "Burocracia Excessiva (Red Tape)", desc: "Lentidão extrema na aprovação de projetos inovadores.", target: "left" },
    { title: "Arquitetura Orientada a Eventos", desc: "Respostas em tempo real para mudanças no fluxo operacional.", target: "right" },
    { title: "Falta de Canal de Denúncias Éticas", desc: "Exposição jurídica e desamparo a colaboradores.", target: "left" },
    { title: "Automatização de Testes de Software", desc: "Garantia de qualidade contínua em deploys de alta frequência.", target: "right" },
    { title: "Falta de Alinhamento com o Regulador", desc: "Conflitos iminentes com órgãos governamentais do setor.", target: "left" },
    { title: "Programa de Mentoria Executiva", desc: "Desenvolvimento acelerado de sucessores para liderança.", target: "right" },
    { title: "Corte Cego de Custos Operacionais", desc: "Eliminação de ferramentas essenciais que prejudicam a entrega.", target: "left" }
];

let shuffledCardsDeck = [];
let cardIndex = 0;

function prepareDeck() {
    shuffledCardsDeck = [...masterCardsData];
    for (let i = shuffledCardsDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledCardsDeck[i], shuffledCardsDeck[j]] = [shuffledCardsDeck[j], shuffledCardsDeck[i]];
    }
    cardIndex = 0;
}

function getNextCard() {
    if (cardIndex >= shuffledCardsDeck.length) {
        prepareDeck();
    }
    return shuffledCardsDeck[cardIndex++];
}

let currentScreen = 1; 
let score = 0;
let gameDurationSetting = 60;
let timeLeft = 60;
let gameInterval = null;
let inactivityTimer = null;
let modalCountdownInterval = null;
let modalSecondsLeft = 3;
let audioEnabled = true;
let volumeLevel = 1.0;
let isDarkMode = true;

let sponsorNameVal = "EY - Brasil";
let sponsorLogoVal = "";
let eventSubtitleVal = "Shape the future with confidence";

let Acerto_seguido_ponto = 0;
let Ponto_Bonus = 0;
let combo15 = 0;

let currentCard = null;
let physicsAnimFrame = null;
let dragOffset = { x: 0, y: 0 };
let canvasW = 0, canvasH = 0;

function loadSettingsFromStorage() {
    try {
        const saved = localStorage.getItem('totem_operator_settings');
        if (saved) {
            const data = JSON.parse(saved);
            if (data.sponsorName !== undefined) sponsorNameVal = data.sponsorName;
            if (data.sponsorLogo !== undefined) sponsorLogoVal = data.sponsorLogo;
            if (data.eventSubtitle !== undefined) eventSubtitleVal = data.eventSubtitle;
            if (data.gameDuration !== undefined) {
                gameDurationSetting = parseInt(data.gameDuration) || 60;
                timeLeft = gameDurationSetting;
            }
            if (data.audioEnabled !== undefined) audioEnabled = data.audioEnabled;
            if (data.isDarkMode !== undefined) {
                isDarkMode = data.isDarkMode;
            }
        }
    } catch (e) {}
    applyThemeToDOM();
    applySettingsToUI();
}

function applySettingsToUI() {
    for (let i = 1; i <= 6; i++) {
        const badge = document.getElementById(`headerLogoBadge${i}`);
        const textSpan = document.getElementById(`headerSponsorText${i}`);
        const subtext = document.getElementById(`headerSubtext${i}`);

        if (badge && textSpan) {
            if (sponsorLogoVal) {
                badge.innerHTML = `<img src="${sponsorLogoVal}" alt="Logo" class="h-8 max-w-[120px] object-contain">`;
                badge.className = "flex items-center";
                textSpan.innerText = "";
                textSpan.classList.add('hidden');
            } else {
                badge.innerHTML = "EY";
                badge.className = "bg-eyYellow text-black font-extrabold px-3.5 py-2 rounded-lg text-lg tracking-wider";
                if (sponsorNameVal && sponsorNameVal !== "EY - Brasil") {
                    textSpan.innerText = sponsorNameVal;
                    textSpan.classList.remove('hidden');
                } else {
                    textSpan.innerText = "";
                    textSpan.classList.add('hidden');
                }
            }
        }

        if (subtext) {
            subtext.innerText = eventSubtitleVal;
        }
    }

    const standbyImg = document.getElementById('standbySponsorImg');
    const standbyTxt = document.getElementById('standbySponsorText');

    if (standbyImg && standbyTxt) {
        if (sponsorLogoVal) {
            standbyImg.src = sponsorLogoVal;
            standbyImg.classList.remove('hidden');
            standbyTxt.classList.add('hidden');
        } else {
            standbyImg.classList.add('hidden');
            standbyTxt.innerText = sponsorNameVal || "EY";
            standbyTxt.classList.remove('hidden');
        }
    }

    document.querySelectorAll('.footer-sponsor-name').forEach(el => {
        el.innerText = sponsorNameVal;
    });

    const timerDisp = document.getElementById('timerDisplay');
    if (timerDisp && currentScreen !== 3) {
        timerDisp.innerText = gameDurationSetting + 's';
        timeLeft = gameDurationSetting;
    }

    const opThemeBtn = document.getElementById('opThemeBtn');
    if (opThemeBtn) opThemeBtn.innerText = isDarkMode ? "🌞 Modo Claro" : "🌙 Modo Escuro";

    const userThemeBtn = document.getElementById('userThemeBtn');
    if (userThemeBtn) userThemeBtn.innerText = isDarkMode ? "🌞 Claro" : "🌙 Escuro";

    const userVolBtn = document.getElementById('userVolBtn');
    if (userVolBtn) userVolBtn.innerText = `🔊 ${Math.round(volumeLevel * 100)}%`;
}

function toggleTheme() {
    isDarkMode = !isDarkMode;
    applyThemeToDOM();
    applySettingsToUI();
    playSound('click');
}

function applyThemeToDOM() {
    const body = document.getElementById('appBody');
    const mainTitle = document.getElementById('mainTitle');
    const finalScoreDisplay = document.getElementById('finalScoreDisplay');
    const badgeChallenge = document.getElementById('badgeChallenge');
    const inputLabel = document.getElementById('inputLabel');
    const inputSubLabel = document.getElementById('inputSubLabel');
    const playerNameInput = document.getElementById('playerNameInput');
    const rankingHeaderTitle = document.getElementById('rankingHeaderTitle');
    const gameHeader = document.getElementById('gameHeader');
    
    const subTexts = document.querySelectorAll('.subtext-header');
    const descMains = document.querySelectorAll('.desc-main');
    const titleMains = document.querySelectorAll('.title-main');
    const cardBoxes = document.querySelectorAll('.card-box');
    const cardTitlesInner = document.querySelectorAll('.card-title-inner');
    const cardDescsInner = document.querySelectorAll('.card-desc-inner');
    const footers = document.querySelectorAll('footer');

    if (isDarkMode) {
        body.className = "bg-neutral-950 text-white h-full";
        document.querySelectorAll('.screen').forEach(s => {
            s.className = s.className.replace(/bg-gradient-to-br from-neutral-200 via-white to-neutral-100/g, 'bg-gradient-to-br from-neutral-900 to-black');
        });
        const s1 = document.getElementById('screen1');
        if (s1) s1.className = "screen active bg-gradient-to-br from-neutral-900 via-neutral-950 to-black p-0 h-full w-full cursor-pointer";
        const s6 = document.getElementById('screen6');
        if (s6) s6.className = "screen bg-gradient-to-br from-neutral-900 via-neutral-950 to-black p-0 h-full w-full";
        const s3 = document.getElementById('screen3');
        if (s3) s3.className = "screen bg-neutral-950 flex flex-col justify-between overflow-hidden h-full w-full text-white";
        if (gameHeader) gameHeader.className = "w-full px-4 md:px-8 py-3 bg-neutral-900/95 border-b border-neutral-800 flex flex-wrap justify-between items-center z-20 gap-3 shrink-0";

        if (mainTitle) mainTitle.className = "text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-4 text-white";
        if (finalScoreDisplay) finalScoreDisplay.className = "text-5xl md:text-6xl font-black text-eyYellow mb-4";
        if (badgeChallenge) badgeChallenge.className = "inline-block bg-eyYellow/20 text-eyYellow border border-eyYellow/40 px-6 py-2 rounded-full text-sm font-black mb-4 uppercase tracking-wider";
        if (inputLabel) inputLabel.className = "block text-xs uppercase tracking-widest text-neutral-400 mb-1 font-extrabold";
        if (inputSubLabel) inputSubLabel.className = "text-xs text-eyCyan mb-2 font-bold";
        if (playerNameInput) playerNameInput.className = "w-full bg-neutral-800 border-2 border-neutral-700 rounded-2xl px-6 py-3 text-xl text-center text-white font-bold tracking-wide focus:border-eyYellow outline-none uppercase shadow-md";
        if (rankingHeaderTitle) rankingHeaderTitle.className = "text-eyGold font-black uppercase tracking-widest text-xs md:text-sm mb-3";

        subTexts.forEach(el => el.className = "subtext-header text-neutral-400 text-sm uppercase tracking-widest font-semibold hidden sm:inline");
        descMains.forEach(el => el.className = "desc-main text-base sm:text-xl text-neutral-300 mb-6 max-w-2xl mx-auto leading-relaxed");
        titleMains.forEach(el => el.className = "title-main text-3xl sm:text-5xl font-black mb-4 text-white tracking-tight");
        cardBoxes.forEach(el => el.className = "card-box bg-neutral-800/80 border border-neutral-700 p-5 rounded-2xl flex items-center gap-4 text-white shadow-lg");
        cardTitlesInner.forEach(el => el.className = "font-bold text-base text-white card-title-inner");
        cardDescsInner.forEach(el => el.className = "card-desc-inner text-neutral-400 text-xs sm:text-sm");
        footers.forEach(f => f.className = "w-full text-neutral-400 text-xs tracking-wider uppercase text-center py-4 z-10 bg-neutral-900/90 border-t border-neutral-800/50 shrink-0");
    } else {
        body.className = "bg-neutral-100 text-neutral-900 h-full";
        document.querySelectorAll('.screen').forEach(s => {
            s.className = s.className.replace(/bg-gradient-to-br from-neutral-900 to-black/g, 'bg-gradient-to-br from-neutral-200 via-white to-neutral-100');
            s.className = s.className.replace(/bg-gradient-to-br from-neutral-950 via-neutral-900 to-black/g, 'bg-gradient-to-br from-neutral-200 via-white to-neutral-100');
        });
        const s1 = document.getElementById('screen1');
        if (s1) s1.className = "screen active bg-gradient-to-br from-neutral-200 via-white to-neutral-100 p-0 h-full w-full cursor-pointer text-neutral-900";
        const s6 = document.getElementById('screen6');
        if (s6) s6.className = "screen bg-gradient-to-br from-neutral-200 via-white to-neutral-100 p-0 h-full w-full text-neutral-900";
        const s3 = document.getElementById('screen3');
        if (s3) s3.className = "screen bg-neutral-100 flex flex-col justify-between overflow-hidden h-full w-full text-neutral-900";
        if (gameHeader) gameHeader.className = "w-full px-4 md:px-8 py-3 bg-neutral-200/95 border-b border-neutral-300 flex flex-wrap justify-between items-center z-20 gap-3 shrink-0";

        if (mainTitle) mainTitle.className = "text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-4 text-neutral-900";
        if (finalScoreDisplay) finalScoreDisplay.className = "text-5xl md:text-6xl font-black text-amber-600 mb-4 drop-shadow";
        if (badgeChallenge) badgeChallenge.className = "inline-block bg-eyYellow text-black border-2 border-amber-400 px-6 py-2 rounded-full text-sm font-black mb-4 uppercase tracking-wider shadow-sm";
        if (inputLabel) inputLabel.className = "block text-xs uppercase tracking-widest text-neutral-800 mb-1 font-black";
        if (inputSubLabel) inputSubLabel.className = "text-xs text-blue-800 mb-2 font-extrabold";
        if (playerNameInput) playerNameInput.className = "w-full bg-white border-2 border-neutral-400 rounded-2xl px-6 py-3 text-xl text-center text-neutral-900 font-black tracking-wide focus:border-amber-500 outline-none uppercase shadow-md";
        if (rankingHeaderTitle) rankingHeaderTitle.className = "text-amber-700 font-black uppercase tracking-widest text-xs md:text-sm mb-3";

        subTexts.forEach(el => el.className = "subtext-header text-neutral-700 text-sm uppercase tracking-widest font-semibold hidden sm:inline");
        descMains.forEach(el => el.className = "desc-main text-base sm:text-xl text-neutral-800 mb-6 max-w-2xl mx-auto leading-relaxed");
        titleMains.forEach(el => el.className = "title-main text-3xl sm:text-5xl font-black mb-4 text-neutral-900 tracking-tight");
        cardBoxes.forEach(el => el.className = "card-box bg-white border border-neutral-300 p-5 rounded-2xl flex items-center gap-4 text-neutral-900 shadow-md");
        cardTitlesInner.forEach(el => el.className = "font-bold text-base text-neutral-900 card-title-inner");
        cardDescsInner.forEach(el => el.className = "card-desc-inner text-neutral-600 text-xs sm:text-sm");
        footers.forEach(f => f.className = "w-full text-neutral-700 text-xs tracking-wider uppercase text-center py-4 z-10 bg-neutral-200/90 border-t border-neutral-300/80 shrink-0 font-bold");
    }
    if (currentScreen === 5) renderLeaderboard();
}

function openUserSettingsModal(e) {
    if (e) e.stopPropagation();
    document.getElementById('userSettingsModal').classList.remove('hidden');
    playSound('click');
}

function closeUserSettingsModal() {
    document.getElementById('userSettingsModal').classList.add('hidden');
    playSound('click');
}

function adjustVolumeModal() {
    if (volumeLevel === 1.0) volumeLevel = 1.5;
    else if (volumeLevel === 1.5) volumeLevel = 2.0;
    else if (volumeLevel === 2.0) volumeLevel = 0.5;
    else volumeLevel = 1.0;

    applySettingsToUI();
    playSound('click');
}

const bgCanvas = document.getElementById('bgCanvas');
const bgCtx = bgCanvas.getContext('2d');
let particles = [];

function initBgCanvas() {
    bgCanvas.width = window.innerWidth;
    bgCanvas.height = window.innerHeight;
    particles = [];
    for (let i = 0; i < 40; i++) {
        particles.push({
            x: Math.random() * bgCanvas.width,
            y: Math.random() * bgCanvas.height,
            radius: Math.random() * 2 + 1,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            alpha: Math.random() * 0.5 + 0.2
        });
    }
}

function drawBg() {
    bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
    bgCtx.fillStyle = '#FFE600';
    particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = bgCanvas.width;
        if (p.x > bgCanvas.width) p.x = 0;
        if (p.y < 0) p.y = bgCanvas.height;
        if (p.y > bgCanvas.height) p.y = 0;

        bgCtx.globalAlpha = p.alpha;
        bgCtx.beginPath();
        bgCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        bgCtx.fill();
    });
    requestAnimationFrame(drawBg);
}
initBgCanvas();
drawBg();
window.addEventListener('resize', initBgCanvas);

let audioCtx = null;
let bgmInterval = null;

function getAudioContext() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    return audioCtx;
}

function playSound(type) {
    if (!audioEnabled) return;
    try {
        const ctx = getAudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        const now = ctx.currentTime;
        const mobileBoost = 1.4 * volumeLevel;

        if (type === 'click') {
            osc.type = 'sine';
            osc.frequency.setValueAtTime(440, now);
            osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);
            gain.gain.setValueAtTime(0.15 * mobileBoost, now);
            gain.gain.linearRampToValueAtTime(0.01, now + 0.08);
            osc.start(now);
            osc.stop(now + 0.08);
        } else if (type === 'success') {
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(523.25, now);
            osc.frequency.setValueAtTime(659.25, now + 0.08);
            osc.frequency.setValueAtTime(783.99, now + 0.16);
            gain.gain.setValueAtTime(0.2 * mobileBoost, now);
            gain.gain.linearRampToValueAtTime(0.01, now + 0.3);
            osc.start(now);
            osc.stop(now + 0.3);
        } else if (type === 'kaboom') {
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(120, now);
            osc.frequency.exponentialRampToValueAtTime(600, now + 0.15);
            osc.frequency.linearRampToValueAtTime(80, now + 0.4);
            gain.gain.setValueAtTime(0.35 * mobileBoost, now);
            gain.gain.linearRampToValueAtTime(0.01, now + 0.45);
            osc.start(now);
            osc.stop(now + 0.45);
        } else if (type === 'combo15') {
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(80, now);
            osc.frequency.exponentialRampToValueAtTime(850, now + 0.25);
            osc.frequency.linearRampToValueAtTime(50, now + 0.7);
            gain.gain.setValueAtTime(0.5 * mobileBoost, now);
            gain.gain.linearRampToValueAtTime(0.01, now + 0.75);
            osc.start(now);
            osc.stop(now + 0.75);
        } else if (type === 'error') {
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(180, now);
            osc.frequency.linearRampToValueAtTime(110, now + 0.2);
            gain.gain.setValueAtTime(0.25 * mobileBoost, now);
            gain.gain.linearRampToValueAtTime(0.01, now + 0.2);
            osc.start(now);
            osc.stop(now + 0.2);
        } else if (type === 'victory') {
            const notes = [523.25, 659.25, 783.99, 1046.50];
            notes.forEach((freq, idx) => {
                const o = ctx.createOscillator();
                const g = ctx.createGain();
                o.connect(g);
                g.connect(ctx.destination);
                o.frequency.setValueAtTime(freq, now + idx * 0.12);
                g.gain.setValueAtTime(0.2 * mobileBoost, now + idx * 0.12);
                g.gain.linearRampToValueAtTime(0.01, now + idx * 0.12 + 0.25);
                o.start(now + idx * 0.12);
                o.stop(now + idx * 0.12 + 0.25);
            });
        } else if (type === 'highscore') {
            const notes = [440, 554.37, 659.25, 880];
            notes.forEach((freq, idx) => {
                const o = ctx.createOscillator();
                const g = ctx.createGain();
                o.connect(g);
                g.connect(ctx.destination);
                o.frequency.setValueAtTime(freq, now + idx * 0.15);
                g.gain.setValueAtTime(0.25 * mobileBoost, now + idx * 0.15);
                g.gain.linearRampToValueAtTime(0.01, now + idx * 0.15 + 0.3);
                o.start(now + idx * 0.15);
                o.stop(now + idx * 0.15 + 0.3);
            });
        }
    } catch (e) {}
}

function startBgm() {
    stopBgm();
    if (!audioEnabled) return;
    const bassNotes = [220, 246.94, 261.63, 293.66];
    let step = 0;
    bgmInterval = setInterval(() => {
        if (!audioEnabled || currentScreen !== 3) return;
        try {
            const ctx = getAudioContext();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            const now = ctx.currentTime;
            osc.type = 'sine';
            osc.frequency.setValueAtTime(bassNotes[step % bassNotes.length], now);
            gain.gain.setValueAtTime(0.07 * volumeLevel, now);
            gain.gain.linearRampToValueAtTime(0.001, now + 0.2);
            osc.start(now);
            osc.stop(now + 0.2);
            step++;
        } catch(e) {}
    }, 300);
}

function stopBgm() {
    if (bgmInterval) {
        clearInterval(bgmInterval);
        bgmInterval = null;
    }
}

function goToScreen(screenNum) {
    playSound('click');
    currentScreen = screenNum;
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(`screen${screenNum}`).classList.add('active');

    if (gameInterval) clearInterval(gameInterval);
    if (physicsAnimFrame) cancelAnimationFrame(physicsAnimFrame);
    stopBgm();
    hideInactivityModal();
    if (inactivityTimer) clearTimeout(inactivityTimer);

    if (screenNum === 3) {
        initGame();
        resetInactivityTimer();
    }
    if (screenNum === 4) {
        document.getElementById('finalScoreDisplay').innerText = `${score} PTS`;
        document.getElementById('playerNameInput').value = '';
    }
    if (screenNum === 5) {
        renderLeaderboard();
    }
}

function resetInactivityTimer() {
    if (currentScreen !== 3) return;
    if (!document.getElementById('operatorModal').classList.contains('hidden')) return;

    hideInactivityModal();
    if (inactivityTimer) clearTimeout(inactivityTimer);
    if (modalCountdownInterval) clearInterval(modalCountdownInterval);

    inactivityTimer = setTimeout(() => {
        showInactivityModal();
    }, 10000);
}

function showInactivityModal() {
    if (currentScreen !== 3) return;
    if (!document.getElementById('operatorModal').classList.contains('hidden')) return;

    modalSecondsLeft = 3;
    document.getElementById('countdownModal').innerText = modalSecondsLeft;
    document.getElementById('inactivityModal').classList.remove('hidden');

    modalCountdownInterval = setInterval(() => {
        modalSecondsLeft--;
        document.getElementById('countdownModal').innerText = modalSecondsLeft;
        if (modalSecondsLeft <= 0) {
            clearInterval(modalCountdownInterval);
            hideInactivityModal();
            goToScreen(6);
        }
    }, 1000);
}

function hideInactivityModal() {
    document.getElementById('inactivityModal').classList.add('hidden');
    if (modalCountdownInterval) clearInterval(modalCountdownInterval);
}

['pointerdown', 'touchstart', 'touchmove', 'keydown', 'click'].forEach(evt => {
    window.addEventListener(evt, () => {
        if (currentScreen === 3) {
            resetInactivityTimer();
        }
    }, { passive: true });
});

function startGame() {
    score = 0;
    timeLeft = gameDurationSetting;
    Acerto_seguido_ponto = 0;
    Ponto_Bonus = 0;
    combo15 = 0;

    prepareDeck();
    updateHUD();
    goToScreen(3);
    startBgm();

    document.getElementById('timerDisplay').innerText = timeLeft + 's';
    document.getElementById('timerDisplay').classList.remove('text-red-500', 'animate-pulse');

    gameInterval = setInterval(() => {
        if (!document.getElementById('operatorModal').classList.contains('hidden')) return;

        timeLeft--;
        document.getElementById('timerDisplay').innerText = timeLeft + 's';
        if (timeLeft <= 10) {
            document.getElementById('timerDisplay').classList.add('text-red-500', 'animate-pulse');
        }
        if (timeLeft <= 0) {
            clearInterval(gameInterval);
            stopBgm();
            playSound('victory');
            goToScreen(4);
        }
    }, 1000);
}

function updateHUD() {
    document.getElementById('scoreDisplay').innerText = score;
    document.getElementById('comboDisplay').innerText = `🔥 ${Acerto_seguido_ponto}`;
    document.getElementById('bonusDisplay').innerText = `💥 +${Ponto_Bonus}`;
}

function initGame() {
    const container = document.getElementById('gameContainer');
    const canvas = document.getElementById('physicsCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
    canvasW = canvas.width;
    canvasH = canvas.height;

    spawnNewCard();

    let dragging = false;

    const getTouchPos = (e) => {
        const rect = canvas.getBoundingClientRect();
        const clientX = e.clientX !== undefined ? e.clientX : (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
        const clientY = e.clientY !== undefined ? e.clientY : (e.touches && e.touches[0] ? e.touches[0].clientY : 0);
        return { x: clientX - rect.left, y: clientY - rect.top };
    };

    const handlePointerDown = (e) => {
        const pos = getTouchPos(e);
        if (currentCard &&
            pos.x >= currentCard.x - 15 && pos.x <= currentCard.x + currentCard.w + 15 &&
            pos.y >= currentCard.y - 15 && pos.y <= currentCard.y + currentCard.h + 15) {
            dragging = true;
            currentCard.vx = 0;
            currentCard.vy = 0;
            dragOffset.x = pos.x - currentCard.x;
            dragOffset.y = pos.y - currentCard.y;
        }
    };

    const handlePointerMove = (e) => {
        if (!dragging || !currentCard) return;
        const pos = getTouchPos(e);
        let targetX = pos.x - dragOffset.x;
        let targetY = pos.y - dragOffset.y;

        currentCard.vx = (targetX - currentCard.x) * 0.4;
        currentCard.vy = (targetY - currentCard.y) * 0.4;

        currentCard.x = targetX;
        currentCard.y = targetY;

        highlightZones(currentCard.x + currentCard.w/2);
    };

    const handlePointerUp = (e) => {
        if (!dragging) return;
        dragging = false;
        clearZoneHighlights();

        const centerX = currentCard.x + currentCard.w / 2;
        const zoneWidth = canvasW * 0.26;

        if (centerX < zoneWidth || centerX > canvasW - zoneWidth) {
            const chosenSide = centerX < zoneWidth ? 'left' : 'right';
            evaluateCard(chosenSide);
        }
    };

    canvas.onpointerdown = handlePointerDown;
    canvas.onpointermove = handlePointerMove;
    canvas.onpointerup = canvas.onpointercancel = handlePointerUp;

    canvas.ontouchstart = (e) => { handlePointerDown(e); e.preventDefault(); };
    canvas.ontouchmove = (e) => { handlePointerMove(e); e.preventDefault(); };
    canvas.ontouchend = (e) => { handlePointerUp(e); e.preventDefault(); };

    function physicsLoop() {
        ctx.clearRect(0, 0, canvasW, canvasH);

        if (currentCard) {
            if (!dragging) {
                currentCard.vy += 0.25;
                currentCard.x += currentCard.vx;
                currentCard.y += currentCard.vy;
                currentCard.vx *= 0.95;

                const zoneWidth = canvasW * 0.26;
                const minX = zoneWidth + 5;
                const maxX = canvasW - zoneWidth - currentCard.w - 5;

                if (currentCard.x < minX) { currentCard.x = minX; currentCard.vx *= -0.5; }
                if (currentCard.x > maxX) { currentCard.x = maxX; currentCard.vx *= -0.5; }

                if (currentCard.y + currentCard.h > canvasH - 15) {
                    currentCard.y = canvasH - 15 - currentCard.h;
                    currentCard.vy *= -0.3;
                }
            }

            ctx.save();
            ctx.shadowColor = isDarkMode ? 'rgba(0, 229, 255, 0.4)' : 'rgba(0, 0, 0, 0.15)';
            ctx.shadowBlur = 20;
            ctx.fillStyle = isDarkMode ? '#18181b' : '#ffffff';
            ctx.strokeStyle = isDarkMode ? '#71717a' : '#cbd5e1';
            ctx.lineWidth = 3.5;

            const radius = 18;
            ctx.beginPath();
            ctx.roundRect(currentCard.x, currentCard.y, currentCard.w, currentCard.h, radius);
            ctx.fill();
            ctx.stroke();

            ctx.fillStyle = '#FFE600';
            ctx.beginPath();
            ctx.roundRect(currentCard.x + 16, currentCard.y + 16, 40, 6, 3);
            ctx.fill();

            ctx.fillStyle = isDarkMode ? '#ffffff' : '#0f172a';
            const titleFontSize = Math.max(18, Math.min(22, canvasW * 0.05));
            ctx.font = `900 ${titleFontSize}px system-ui, -apple-system, sans-serif`;
            ctx.fillText(currentCard.title, currentCard.x + 18, currentCard.y + 54, currentCard.w - 36);

            ctx.fillStyle = isDarkMode ? '#f4f4f5' : '#334155'; 
            const descFontSize = Math.max(14, Math.min(17, canvasW * 0.04));
            ctx.font = `600 ${descFontSize}px system-ui, -apple-system, sans-serif`;
            wrapText(ctx, currentCard.desc, currentCard.x + 18, currentCard.y + 86, currentCard.w - 36, descFontSize + 7);

            ctx.restore();
        }

        physicsAnimFrame = requestAnimationFrame(physicsLoop);
    }
    physicsLoop();
}

function spawnNewCard() {
    const raw = getNextCard();
    const centerZoneWidth = canvasW * 0.48;
    
    const cardW = Math.min(centerZoneWidth - 16, 320);
    const cardH = Math.min(canvasH * 0.38, 205);

    currentCard = {
        title: raw.title,
        desc: raw.desc,
        target: raw.target,
        w: cardW,
        h: cardH,
        x: (canvasW / 2) - (cardW / 2),
        y: 15,
        vx: 0,
        vy: 1
    };
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    const words = text.split(' ');
    let line = '';
    for(let n = 0; n < words.length; n++) {
        let testLine = line + words[n] + ' ';
        let metrics = ctx.measureText(testLine);
        let testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
            ctx.fillText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
        } else {
            line = testLine;
        }
    }
    ctx.fillText(line, x, y);
}

function highlightZones(xPos) {
    const zoneW = canvasW * 0.26;
    const zoneLeft = document.getElementById('zoneLeft');
    const zoneRight = document.getElementById('zoneRight');

    if (xPos < zoneW) {
        zoneLeft.style.backgroundColor = 'rgba(176, 38, 255, 0.35)';
        zoneRight.style.backgroundColor = 'rgba(0, 145, 255, 0.1)';
    } else if (xPos > canvasW - zoneW) {
        zoneRight.style.backgroundColor = 'rgba(0, 229, 255, 0.35)';
        zoneLeft.style.backgroundColor = 'rgba(176, 38, 255, 0.1)';
    } else {
        zoneLeft.style.backgroundColor = 'rgba(176, 38, 255, 0.2)';
        zoneRight.style.backgroundColor = 'rgba(0, 145, 255, 0.2)';
    }
}

function clearZoneHighlights() {
    document.getElementById('zoneLeft').style.backgroundColor = 'rgba(176, 38, 255, 0.2)';
    document.getElementById('zoneRight').style.backgroundColor = 'rgba(0, 145, 255, 0.2)';
}

function evaluateCard(chosenSide) {
    const isCorrect = chosenSide === currentCard.target;
    const toast = document.getElementById('feedbackToast');
    const toastBox = document.getElementById('toastBox');

    if (isCorrect) {
        Acerto_seguido_ponto++;
        let earned = 100;

        if (Acerto_seguido_ponto === 15) {
            combo15++;
            earned = 500;
            score += earned;
            Ponto_Bonus += earned;

            playSound('combo15');
            toastBox.innerText = `🔥 COMBO 15! SUPER BOOM! (+500 PTS)`;
            toastBox.className = "px-5 py-2 rounded-xl text-xs md:text-sm font-black tracking-wider shadow-xl bg-eyGold text-black border border-white animate-bounce";
        } 
        else if (Acerto_seguido_ponto % 5 === 0) {
            earned = 200;
            score += earned;
            Ponto_Bonus += earned;

            playSound('kaboom');
            toastBox.innerText = `💥 KABOOM! 5 SEGUIDOS! (+200 PTS)`;
            toastBox.className = "px-5 py-2 rounded-xl text-xs md:text-sm font-black tracking-wider shadow-xl bg-amber-950/90 text-amber-300 border border-amber-500/50 animate-bounce";
        } else {
            score += earned;
            playSound('success');
            toastBox.innerText = "✓ DECISÃO CERTA! (+100 PTS)";
            toastBox.className = "px-5 py-2 rounded-xl text-xs md:text-sm font-black tracking-wider shadow-xl bg-emerald-950/90 text-emerald-400 border border-emerald-500/50";
        }
    } else {
        Acerto_seguido_ponto = 0;
        playSound('error');
        toastBox.innerText = "✗ DECISÃO INCORRETA!";
        toastBox.className = "px-5 py-2 rounded-xl text-xs md:text-sm font-black tracking-wider shadow-xl bg-rose-950/90 text-rose-400 border border-rose-500/50";
    }

    updateHUD();

    toast.classList.remove('toast-animate');
    void toast.offsetWidth;
    toast.classList.add('toast-animate');

    spawnNewCard();
}

const keyboardLayout = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌫']
];

function initVirtualKeyboard() {
    const container = document.getElementById('virtualKeyboard');
    container.innerHTML = '';
    keyboardLayout.forEach(row => {
        const rowDiv = document.createElement('div');
        rowDiv.className = "flex justify-center gap-1.5 mb-2";
        row.forEach(key => {
            const btn = document.createElement('button');
            btn.className = "bg-neutral-800 hover:bg-neutral-700 active:bg-eyYellow active:text-black text-white font-black text-sm md:text-lg px-2.5 py-2 md:px-4 md:py-2.5 rounded-xl min-w-[30px] md:min-w-[50px] shadow transition";
            btn.innerText = key;
            btn.onclick = (e) => { e.stopPropagation(); handleVirtualKeyPress(key); };
            rowDiv.appendChild(btn);
        });
        container.appendChild(rowDiv);
    });
}
initVirtualKeyboard();

function handleVirtualKeyPress(key) {
    playSound('click');
    const input = document.getElementById('playerNameInput');
    if (key === '⌫') {
        input.value = input.value.slice(0, -1);
    } else {
        if (input.value.length < 12) {
            input.value += key;
        }
    }
}

window.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.key === 'c')) {
        e.preventDefault();
        openOperatorPanel();
        return;
    }

    if (currentScreen === 4) {
        const input = document.getElementById('playerNameInput');
        if (e.key === 'Backspace') {
            input.value = input.value.slice(0, -1);
        } else if (e.key.length === 1 && /^[a-zA-ZÀ-ÿ0-9 ]$/.test(e.key)) {
            if (input.value.length < 12) {
                input.value += e.key.toUpperCase();
            }
        }
    }
});

function saveScoreAndFinish() {
    const inputName = document.getElementById('playerNameInput').value.trim() || sponsorNameVal;
    let leaderboard = JSON.parse(localStorage.getItem('ey_leaderboard') || '[]');

    const newEntry = { name: inputName, score: score, date: new Date().toLocaleDateString() };
    leaderboard.push(newEntry);
    leaderboard.sort((a, b) => b.score - a.score);
    leaderboard = leaderboard.slice(0, 10);

    try {
        localStorage.setItem('ey_leaderboard', JSON.stringify(leaderboard));
    } catch (e) {}

    if (leaderboard.length > 0 && leaderboard[0].name === inputName && leaderboard[0].score === score && score > 0) {
        playSound('highscore');
    } else {
        playSound('success');
    }

    goToScreen(5);
}

function renderLeaderboard() {
    const listContainer = document.getElementById('leaderboardList');
    let leaderboard = [];
    try {
        leaderboard = JSON.parse(localStorage.getItem('ey_leaderboard') || '[]');
    } catch(e) {}
    listContainer.innerHTML = '';

    if (leaderboard.length === 0) {
        listContainer.innerHTML = `<div class="${isDarkMode ? 'text-neutral-500' : 'text-neutral-700'} py-3 font-bold text-sm">Nenhum recorde registrado ainda. Seja o primeiro!</div>`;
        return;
    }

    leaderboard.forEach((item, index) => {
        const row = document.createElement('div');
        if (isDarkMode) {
            row.className = `flex justify-between items-center px-4 py-2.5 rounded-xl ${index === 0 ? 'bg-eyYellow/20 border border-eyYellow/50 text-eyYellow font-black' : 'bg-neutral-800/50 text-neutral-300 font-bold'}`;
        } else {
            row.className = `flex justify-between items-center px-4 py-2.5 rounded-xl ${index === 0 ? 'bg-eyYellow text-black border-2 border-amber-400 font-black shadow-sm' : 'bg-neutral-200/80 border border-neutral-300 text-neutral-900 font-black'}`;
        }
        
        row.innerHTML = `
            <div class="flex items-center gap-3">
                <span class="w-6 text-center font-black">#${index + 1}</span>
                <span class="truncate max-w-[150px] sm:max-w-xs">${item.name}</span>
            </div>
            <div class="font-black text-sm md:text-base shrink-0">${item.score} PTS</div>
        `;
        listContainer.appendChild(row);
    });

    const trophy = document.getElementById('trophyIcon');
    if (score >= 1000) {
        trophy.innerText = "🏆";
        document.getElementById('endGameTitle').innerText = "Desempenho Extraordinário!";
    } else if (score >= 500) {
        trophy.innerText = "🥈";
        document.getElementById('endGameTitle').innerText = "Excelente Visão Estratégica!";
    } else {
        trophy.innerText = "⭐";
        document.getElementById('endGameTitle').innerText = "Bom Trabalho!";
    }
}

const touchZone = document.getElementById('operatorTouchZone');
const operatorLoaderSvg = document.getElementById('operatorLoaderSvg');
const operatorLoaderCircle = document.getElementById('operatorLoaderCircle');
let operatorProgressInterval = null;
let operatorProgress = 0;

function startOperatorHold(e) {
    operatorLoaderSvg.style.opacity = '1';
    operatorProgress = 0;
    updateLoaderCircle(0);

    const intervalMs = 30;
    const totalMs = 3000;
    const increment = (intervalMs / totalMs) * 100;

    operatorProgressInterval = setInterval(() => {
        operatorProgress += increment;
        if (operatorProgress >= 100) {
            operatorProgress = 100;
            clearInterval(operatorProgressInterval);
            cancelOperatorHold();
            openOperatorPanel();
        }
        updateLoaderCircle(operatorProgress);
    }, intervalMs);
}

function cancelOperatorHold() {
    if (operatorProgressInterval) clearInterval(operatorProgressInterval);
    operatorLoaderSvg.style.opacity = '0';
    operatorProgress = 0;
    updateLoaderCircle(0);
}

function updateLoaderCircle(percent) {
    operatorLoaderCircle.setAttribute('stroke-dasharray', `${percent}, 100`);
}

touchZone.addEventListener('mousedown', startOperatorHold);
touchZone.addEventListener('mouseup', cancelOperatorHold);
touchZone.addEventListener('mouseleave', cancelOperatorHold);

touchZone.addEventListener('touchstart', (e) => {
    startOperatorHold(e);
}, {passive: true});
touchZone.addEventListener('touchend', cancelOperatorHold, {passive: true});
touchZone.addEventListener('touchcancel', cancelOperatorHold, {passive: true});

function openOperatorPanel() {
    playSound('success');
    document.getElementById('opSponsorName').value = sponsorNameVal;
    document.getElementById('opEventSubtitle').value = eventSubtitleVal;
    document.getElementById('opGameDuration').value = gameDurationSetting;
    document.getElementById('opAudioToggle').checked = audioEnabled;

    renderOpLogoPreview();
    document.getElementById('operatorModal').classList.remove('hidden');

    if (inactivityTimer) clearTimeout(inactivityTimer);
    hideInactivityModal();
}

function closeOperatorPanel() {
    playSound('click');
    document.getElementById('operatorModal').classList.add('hidden');
    if (currentScreen === 3) {
        resetInactivityTimer();
    }
}

function renderOpLogoPreview() {
    const container = document.getElementById('opLogoPreviewContainer');
    if (sponsorLogoVal) {
        container.innerHTML = `
            <img src="${sponsorLogoVal}" alt="Logo Preview" class="h-10 max-w-[150px] object-contain rounded bg-neutral-900 p-1 border border-neutral-700">
            <span class="text-xs text-emerald-400 font-bold">Logo ativo</span>
        `;
    } else {
        container.innerHTML = `<span class="text-neutral-500 text-xs italic">Nenhum logo carregado (Usando texto: "${sponsorNameVal}")</span>`;
    }
}

function handleLogoUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const validTypes = ['image/png', 'image/jpeg', 'image/svg+xml', 'image/webp'];
    if (!validTypes.includes(file.type) && !file.name.match(/\.(png|jpg|jpeg|svg|webp)$/i)) {
        alert('Por favor, escolha um arquivo PNG, JPG, SVG ou WEBP válido.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
            const canvas = document.createElement('canvas');
            let width = img.width;
            let height = img.height;
            const maxSide = 800;

            if (width > maxSide || height > maxSide) {
                if (width > height) {
                    height = Math.round((height * maxSide) / width);
                    width = maxSide;
                } else {
                    width = Math.round((width * maxSide) / height);
                    height = maxSide;
                }
            }

            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, width, height);

            let mime = file.type;
            if (mime === 'image/svg+xml') mime = 'image/png';

            sponsorLogoVal = canvas.toDataURL(mime, 0.9);
            renderOpLogoPreview();
            playSound('success');
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

function removeLogo() {
    sponsorLogoVal = "";
    document.getElementById('opLogoFile').value = "";
    renderOpLogoPreview();
    playSound('click');
}

function saveOperatorSettings() {
    sponsorNameVal = document.getElementById('opSponsorName').value.trim() || "EY - Brasil";
    eventSubtitleVal = document.getElementById('opEventSubtitle').value.trim() || "Shape the future with confidence";
    
    const durInput = parseInt(document.getElementById('opGameDuration').value);
    if (!isNaN(durInput) && durInput >= 10 && durInput <= 300) {
        gameDurationSetting = durInput;
    }

    audioEnabled = document.getElementById('opAudioToggle').checked;

    const settingsData = {
        sponsorName: sponsorNameVal,
        sponsorLogo: sponsorLogoVal,
        eventSubtitle: eventSubtitleVal,
        gameDuration: gameDurationSetting,
        audioEnabled: audioEnabled,
        isDarkMode: isDarkMode
    };

    try {
        localStorage.setItem('totem_operator_settings', JSON.stringify(settingsData));
        playSound('success');
        alert('Configurações salvas com sucesso!');
    } catch (e) {
        alert('Aviso: Não foi possível salvar no localStorage.');
    }

    applySettingsToUI();
    closeOperatorPanel();
}

function resetLeaderboardOp() {
    if (confirm('Deseja realmente zerar todo o ranking oficial?')) {
        try {
            localStorage.removeItem('ey_leaderboard');
            playSound('success');
            alert('Ranking zerado com sucesso!');
        } catch (e) {}
    }
}

function restoreDefaultOp() {
    if (confirm('Deseja restaurar as configurações padrão do totem?')) {
        sponsorNameVal = "EY - Brasil";
        sponsorLogoVal = "";
        eventSubtitleVal = "Shape the future with confidence";
        gameDurationSetting = 60;
        audioEnabled = true;
        isDarkMode = true;

        try {
            localStorage.removeItem('totem_operator_settings');
        } catch (e) {}

        applyThemeToDOM();
        applySettingsToUI();
        playSound('success');
        closeOperatorPanel();
    }
}

loadSettingsFromStorage();
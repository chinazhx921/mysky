
const scrollArea = document.getElementById('main-scroll-area');

// 统一背景控制：完全移除 JS 对 backgroundColor 的修改。全站背景由底层的 canvas 提供。
function switchApp(appType, anchorId) {
    document.getElementById('landscape-container').style.display = 'none';
    document.getElementById('siku-container').style.display = 'none';
    document.getElementById('message-container').style.display = 'none';
    document.getElementById('movie-container').style.display = 'none';
    document.getElementById('caipiao-container').style.display = 'none';
    
    if (appType === 'landscape') {
        document.getElementById('landscape-container').style.display = 'block';
        scrollArea.scrollTo(0, 0);
    } else if (appType === 'siku') {
        document.getElementById('siku-container').style.display = 'block';
        scrollArea.scrollTo(0, 0);
    } else if (appType === 'message') {
        document.getElementById('message-container').style.display = 'block';
        scrollArea.scrollTo(0, 0);
    } else if (appType === 'movie') {
        document.getElementById('movie-container').style.display = 'block';
  } else if (appType === 'caipiao') {
        document.getElementById('caipiao-container').style.display = 'block';
        if (anchorId) setTimeout(() => { const target = document.getElementById(anchorId); if(target) scrollArea.scrollTo({ top: target.offsetTop - 20, behavior: 'smooth' }); }, 50);
    }
}

// ==========================================
// 动态东方山水画卷 Canvas 引擎 (作为全局背景)
// ==========================================
const canvas = document.getElementById('scenery-canvas');
const ctx = canvas.getContext('2d');
let width, height;

let clouds = [];
let fishes = [];

function initScenery() {
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // 初始化白云
    for(let i=0; i<8; i++) {
        clouds.push({
            x: Math.random() * width,
            y: Math.random() * (height * 0.4) + 20,
            size: Math.random() * 40 + 30,
            speed: Math.random() * 0.3 + 0.1
        });
    }
    
    // 初始化游鱼
    for(let i=0; i<20; i++) {
        fishes.push({
            x: Math.random() * width,
            y: height * 0.75 + Math.random() * (height * 0.2),
            size: Math.random() * 4 + 3,
            speed: (Math.random() * 1.5 + 0.5) * (Math.random() > 0.5 ? 1 : -1)
        });
    }
    
    animateScenery();
}

function resizeCanvas() {
    if(!canvas) return;
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
}

function drawMountains() {
    // 远山 (淡墨)
    ctx.fillStyle = 'rgba(178, 190, 195, 0.8)';
    ctx.beginPath();
    ctx.moveTo(0, height * 0.65);
    ctx.lineTo(width * 0.15, height * 0.45);
    ctx.lineTo(width * 0.45, height * 0.65);
    ctx.lineTo(width * 0.75, height * 0.4);
    ctx.lineTo(width, height * 0.6);
    ctx.lineTo(width, height);
    ctx.lineTo(0, height);
    ctx.fill();

    // 近山 (青绿)
    ctx.fillStyle = 'rgba(85, 239, 196, 0.85)';
    ctx.beginPath();
    ctx.moveTo(0, height * 0.75);
    ctx.lineTo(width * 0.25, height * 0.55);
    ctx.lineTo(width * 0.55, height * 0.75);
    ctx.lineTo(width * 0.85, height * 0.5);
    ctx.lineTo(width, height * 0.7);
    ctx.lineTo(width, height);
    ctx.lineTo(0, height);
    ctx.fill();
    
    // 山体渐变遮罩融合
    const gradient = ctx.createLinearGradient(0, height*0.4, 0, height*0.8);
    gradient.addColorStop(0, 'rgba(233,228,212,0)');
    gradient.addColorStop(1, 'rgba(233,228,212,0.5)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, height*0.4, width, height*0.6);
}

function drawWater() {
    // 绿水
    const waterGrad = ctx.createLinearGradient(0, height*0.7, 0, height);
    waterGrad.addColorStop(0, 'rgba(129, 236, 236, 0.4)');
    waterGrad.addColorStop(1, 'rgba(0, 206, 201, 0.8)');
    ctx.fillStyle = waterGrad;
    ctx.fillRect(0, height * 0.7, width, height * 0.3);
}

function animateScenery() {
    ctx.clearRect(0, 0, width, height);
    
    // 基础底色 (宣纸色)
    ctx.fillStyle = '#e9e4d4';
    ctx.fillRect(0, 0, width, height);

    // 太阳
    ctx.fillStyle = 'rgba(214, 48, 49, 0.7)';
    ctx.beginPath();
    ctx.arc(width * 0.85, height * 0.25, 55, 0, Math.PI * 2);
    ctx.fill();

    drawMountains();
    
    // 画云
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    clouds.forEach(cloud => {
        ctx.beginPath();
        ctx.arc(cloud.x, cloud.y, cloud.size, 0, Math.PI*2);
        ctx.arc(cloud.x + cloud.size*0.8, cloud.y - cloud.size*0.3, cloud.size*0.8, 0, Math.PI*2);
        ctx.arc(cloud.x + cloud.size*1.5, cloud.y, cloud.size*0.9, 0, Math.PI*2);
        ctx.fill();
        
        cloud.x += cloud.speed;
        if(cloud.x - cloud.size*2 > width) {
            cloud.x = -cloud.size*3;
        }
    });

    drawWater();

    // 画鱼
    fishes.forEach(fish => {
        ctx.fillStyle = 'rgba(45, 52, 54, 0.8)'; 
        ctx.beginPath();
        ctx.ellipse(fish.x, fish.y, fish.size*2, fish.size, 0, 0, Math.PI*2);
        ctx.fill();
        // 鱼尾巴
        ctx.beginPath();
        ctx.moveTo(fish.speed > 0 ? fish.x - fish.size*2 : fish.x + fish.size*2, fish.y);
        ctx.lineTo(fish.speed > 0 ? fish.x - fish.size*3.5 : fish.x + fish.size*3.5, fish.y - fish.size*1.5);
        ctx.lineTo(fish.speed > 0 ? fish.x - fish.size*3.5 : fish.x + fish.size*3.5, fish.y + fish.size*1.5);
        ctx.fill();
        
        fish.x += fish.speed;
        if(fish.speed > 0 && fish.x > width + 20) fish.x = -20;
        if(fish.speed < 0 && fish.x < -20) fish.x = width + 20;
    });

    requestAnimationFrame(animateScenery);
}

// ==========================================
// 公众号推文数据引擎
// ==========================================
const wxArticles = [
    {
        title: "《四库全书》入门指南：从哪里开始读起？",
        date: "2026-11-01",
        desc: "浩如烟海的古籍中，为你挑选最适合现代人品读的十本国学经典...",
        url: "https://mp.weixin.qq.com/"
    },
    {
        title: "细数金庸武侠里的真实历史背景",
        date: "2026-10-15",
        desc: "带你走进历史，看看靖康之耻与郭靖杨过的名字渊源...",
        url: "https://mp.weixin.qq.com/"
    },
    {
        title: "水墨画卷《清明上河图》隐藏的市井百态",
        date: "2026-10-01",
        desc: "放大十倍看汴京，原来一千年前的宋朝人生活这么丰富多彩...",
        url: "https://mp.weixin.qq.com/"
    }
];

function initWxArticles() {
    const articleContainer = document.getElementById('siku-articles');
    if (!articleContainer) return;
    let html = '';
    wxArticles.forEach(article => {
        html += `
            <a href="${article.url}" target="_blank" class="card">
                <div class="avatar" style="background-color: #8b0000; font-size: 14px;">推文</div>
                <div class="info">
                    <div class="name" style="font-size: 16px; color: #8b0000;">${article.title}</div>
                    <div style="font-size: 11px; color: #666; margin-bottom: 5px;">${article.date}</div>
                    <div class="desc">${article.desc}</div>
                </div>
            </a>
        `;
    });
    articleContainer.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
    initWxArticles();
    setTimeout(initScenery, 100);
});


const scrollArea = document.getElementById('main-scroll-area');

function switchApp(appType, anchorId) {
    document.getElementById('landscape-container').style.display = 'none';
    document.getElementById('siku-container').style.display = 'none';
    document.getElementById('message-container').style.display = 'none';
    document.getElementById('movie-container').style.display = 'none';
    document.getElementById('lottery-container').style.display = 'none';

    if (appType === 'landscape') {
        document.getElementById('landscape-container').style.display = 'block';
        scrollArea.scrollTo(0, 0);
    } else if (appType === 'siku') {
        document.getElementById('siku-container').style.display = 'block';
        scrollArea.scrollTo(0, 0);
    } else if (appType === 'message') {
        document.getElementById('message-container').style.display = 'block';
        scrollArea.scrollTo(0, 0);
    } else if (appType === 'lottery') {
        document.getElementById('lottery-container').style.display = 'block';
        scrollArea.scrollTo(0, 0);
    } else if (appType === 'movie') {
        document.getElementById('movie-container').style.display = 'block';
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
    
    for(let i=0; i<8; i++) {
        clouds.push({
            x: Math.random() * width,
            y: Math.random() * (height * 0.4) + 20,
            size: Math.random() * 40 + 30,
            speed: Math.random() * 0.3 + 0.1
        });
    }
    
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
    
    const gradient = ctx.createLinearGradient(0, height*0.4, 0, height*0.8);
    gradient.addColorStop(0, 'rgba(233,228,212,0)');
    gradient.addColorStop(1, 'rgba(233,228,212,0.5)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, height*0.4, width, height*0.6);
}

function drawWater() {
    const waterGrad = ctx.createLinearGradient(0, height*0.7, 0, height);
    waterGrad.addColorStop(0, 'rgba(129, 236, 236, 0.4)');
    waterGrad.addColorStop(1, 'rgba(0, 206, 201, 0.8)');
    ctx.fillStyle = waterGrad;
    ctx.fillRect(0, height * 0.7, width, height * 0.3);
}

function animateScenery() {
    ctx.clearRect(0, 0, width, height);
    
    ctx.fillStyle = '#e9e4d4';
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = 'rgba(214, 48, 49, 0.7)';
    ctx.beginPath();
    ctx.arc(width * 0.85, height * 0.25, 55, 0, Math.PI * 2);
    ctx.fill();

    drawMountains();
    
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

    fishes.forEach(fish => {
        ctx.fillStyle = 'rgba(45, 52, 54, 0.8)'; 
        ctx.beginPath();
        ctx.ellipse(fish.x, fish.y, fish.size*2, fish.size, 0, 0, Math.PI*2);
        ctx.fill();
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
        title: "他每次都说顺路，定位却显示他住城北",
        date: "2026-11-01",
        desc: "茫茫人海、爱恨只在一念之间...",
        url: "https://cnn.thsite.top/2026/09/24/%e4%bb%96%e6%af%8f%e6%ac%a1%e9%83%bd%e8%af%b4%e9%a1%ba%e8%b7%af%ef%bc%8c%e5%ae%9a%e4%bd%8d%e5%8d%b4%e6%98%be%e7%a4%ba%e4%bb%96%e4%bd%8f%e5%9f%8e%e5%8c%97/"
    },
    {
        title: "细数古诗词历史背景",
        date: "2026-10-15",
        desc: "带你走进山水，看看水墨间是否有花草...",
        url: "https://www.bing.com/search?q=%E6%90%9C%E9%9F%B5"
    },
    {
        title: "隐藏的市井百态",
        date: "2026-10-01",
        desc: "原来生活这么丰富多彩...",
        url: "https://www.bing.com/search?q=%E5%B9%B3%E5%87%A1%E7%9A%84%E4%B8%96%E7%95%8C"
    }
];

function initWxArticles() {
    const articleContainer = document.getElementById('siku-articles');
    if (!articleContainer) return;
    let html = '';
    wxArticles.forEach(article => {
        html += `
            <a href="${article.url}" target="_blank" class="card" style="background: rgba(255,255,255,0.7); border: 1px solid #ccc;">
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

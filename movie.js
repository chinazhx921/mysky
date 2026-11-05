const siteData = [
    {
        title: '热门推荐', id: 'hot', icon: '🔥',
        items: [
            { name: '密码影视', desc: '海量稀有片源一网打尽', url: 'https://myclass.dpdns.org' },
            { name: '大米星球', desc: '多线路，资源全，播放快', url: 'https://www.bing.com/search?q=大米星球影视' },
            { name: '追影猫', desc: '影视聚合搜索，界面清爽', url: 'https://www.bing.com/search?q=追影猫' },
            { name: '修罗影视', desc: '原哔滴影视，高清秒播无广', url: 'https://www.bing.com/search?q=修罗影视' },
            { name: '鸭奈飞', desc: '专注奈飞高清剧集，海外热门全包', url: 'https://www.bing.com/search?q=鸭奈飞影院' },
            { name: '厂长资源', desc: '老站发布页，海外剧多，高清播放快', url: 'https://www.bing.com/search?q=厂长资源' },
            { name: '在线之家', desc: '发布页高清播放快，海外剧多', url: 'https://www.bing.com/search?q=在线之家' },
            { name: '555电影', desc: '线路超多，午夜大片免费看', url: 'https://www.bing.com/search?q=555电影' }
        ]
    },
    {
        title: '在线影视', id: 'movie', icon: '🎬',
        items: [
            { name: '58电影', desc: '界面干净，线路多，高清播放快', url: 'https://www.bing.com/search?q=58电影' },
            { name: '兄弟影视', desc: '采集资源，高清播放快，国产剧全', url: 'https://www.bing.com/search?q=兄弟影视' },
            { name: '看片狂人', desc: '地址发布页，备用资源全，老牌强站', url: 'https://www.bing.com/search?q=看片狂人' },
            { name: '泥巴影院', desc: '海外华人常备，线路极其稳定', url: 'https://www.bing.com/search?q=泥巴影院' },
            { name: '星辰影院', desc: '同步院线大片，追剧党必备', url: 'https://www.bing.com/search?q=星辰影院' },
            { name: '剧圈圈', desc: '韩剧美剧聚合，界面极简无广告', url: 'https://www.bing.com/search?q=剧圈圈' },
            { name: '策驰影院', desc: '综合性老牌影院，搜索功能强大', url: 'https://www.bing.com/search?q=策驰影院' },
            { name: '努努影院', desc: '蓝光画质，播放流畅不卡顿', url: 'https://www.bing.com/search?q=努努影院' }
        ]
    },
    {
        title: '次元动漫', id: 'anime', icon: '🐱',
        items: [
            { name: 'AGE动漫', desc: '二次元常备，番剧极多，播放超快', url: 'https://www.bing.com/search?q=AGE动漫' },
            { name: '哔哩哔哩', desc: 'B站，二次元老家，懂的都懂', url: 'https://www.bilibili.com' },
            { name: 'AcFun', desc: 'A站，二次元老牌弹幕网站', url: 'https://www.acfun.cn' },
            { name: '樱花动漫', desc: '经典老站，国产日漫资源丰富', url: 'https://www.bing.com/search?q=樱花动漫' },
            { name: '异世界动漫', desc: '专注于异世界题材番剧收集', url: 'https://www.bing.com/search?q=异世界动漫' },
            { name: '嘀哩嘀哩', desc: 'D站，无名小站但资源出奇的好', url: 'https://www.bing.com/search?q=嘀哩嘀哩' }
        ]
    },
    {
        title: '网盘搜索', id: 'pan', icon: '☁️',
        items: [
            { name: '橘子盘搜', desc: '包含百度网盘，迅雷BT，阿里云盘资源', url: 'https://www.bing.com/search?q=橘子盘搜' },
            { name: '猫狸盘搜', desc: '阿里盘搜，专门搜阿里云盘大文件', url: 'https://www.bing.com/search?q=猫狸盘搜' },
            { name: '易搜', desc: '云盘高清，4K电影资源较多', url: 'https://www.bing.com/search?q=易搜' },
            { name: '夸克网盘搜', desc: '专注夸克网盘，短剧影视搜索一绝', url: 'https://www.bing.com/search?q=夸克网盘搜' },
            { name: '盘搜搜', desc: '综合性老牌网盘搜索引擎', url: 'https://www.bing.com/search?q=盘搜搜' },
            { name: '毕方铺', desc: '干净无广告的阿里云盘搜索神器', url: 'https://www.bing.com/search?q=毕方铺' }
        ]
    },
    {
        title: '影视下载', id: 'download', icon: '⬇️',
        items: [
            { name: 'BT之家', desc: '提供网盘，BT种子等各种下载资源', url: 'https://www.bing.com/search?q=BT之家' },
            { name: '音范丝', desc: '精选蓝光原盘下载，影音发烧友必备', url: 'https://www.bing.com/search?q=音范丝' },
            { name: '电影天堂', desc: '迅雷下载老牌站点，经典不用多说', url: 'https://www.bing.com/search?q=电影天堂' },
            { name: '磁力熊', desc: '一般热剧都有，干净好用的磁力站', url: 'https://www.bing.com/search?q=磁力熊' },
            { name: '人人影视', desc: '海外影视剧最新双语字幕下载', url: 'https://www.bing.com/search?q=人人影视下载站' },
            { name: '飘花资源网', desc: '每天更新高清MKV格式电影下载', url: 'https://www.bing.com/search?q=飘花资源网' }
        ]
    },
    {
        title: 'AI 工具箱', id: 'ai', icon: '🤖',
        items: [
            { name: 'ChatGPT', desc: 'OpenAI出品，目前最强大的大语言模型', url: 'https://chat.openai.com' },
            { name: 'Kimi', desc: '月之暗面，超长上下文，读文档神器', url: 'https://kimi.moonshot.cn' },
            { name: '豆包', desc: '字节跳动免费AI，响应快功能多', url: 'https://www.doubao.com' }, 
            { name: '文心一言', desc: '百度出品，懂中文，写文章不错', url: 'https://yiyan.baidu.com' },
            { name: 'LiblibAI', desc: 'AI绘画原创模型分享，在线免费出图', url: 'https://www.liblib.art/' },
            { name: '通义千问', desc: '阿里大模型，编码和逻辑推理强', url: 'https://tongyi.aliyun.com' }
        ]
    }
];

function initMovieNav() {
    const navMenu = document.getElementById('nav-menu');
    const movieContainer = document.getElementById('movie-container');
    
    siteData.forEach(category => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="javascript:void(0)" onclick="switchApp('movie', '${category.id}')"><span class="nav-icon">${category.icon}</span><span class="nav-text">${category.title}</span></a>`;
        navMenu.appendChild(li);
        
        const section = document.createElement('div'); 
        section.id = category.id;
        
        let cardsHtml = `<h2 class="section-title"><span>${category.icon}</span>${category.title}</h2><div class="grid">`;
        category.items.forEach(site => {
            const firstLetter = site.name.charAt(0).toUpperCase();
            let code = 0; 
            for (let i=0; i<site.name.length; i++) code += site.name.charCodeAt(i);
            const colors = ['#ff7675', '#74b9ff', '#55efc4', '#a29bfe', '#fab1a0', '#00b894', '#0984e3'];
            cardsHtml += `<a href="${site.url}" target="_blank" class="card"><div class="avatar" style="background-color: ${colors[code % colors.length]}">${firstLetter}</div><div class="info"><div class="name">${site.name}</div><div class="desc">${site.desc}</div></div></a>`;
        });
        section.innerHTML = cardsHtml + '</div>'; 
        movieContainer.appendChild(section);
    });
}

document.addEventListener('DOMContentLoaded', initMovieNav);

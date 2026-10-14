const items=[
{name:"Vencord",cat:"Discord Araçları",icon:"◈",desc:"Discord istemcisini özelleştirmek için topluluk aracı.",status:"Resmî kaynak",url:"https://vencord.dev/"},
{name:"Discord Support",cat:"Discord Araçları",icon:"◈",desc:"Hesap, uygulama ve güvenlik sorunları için resmî destek.",status:"Discord",url:"https://support.discord.com/"},
{name:"VALORANT Support",cat:"Valorant Araçları",icon:"◎",desc:"Oyun hataları, Riot Client ve hesap sorunları için destek merkezi.",status:"Riot Support",url:"https://support-valorant.riotgames.com/"},
{name:"Riot Games",cat:"Valorant Araçları",icon:"◎",desc:"Oyunlar, hesap işlemleri ve resmî Riot Games kaynakları.",status:"Resmî kaynak",url:"https://www.riotgames.com/"},
{name:"FiveM",cat:"GTA V & FiveM",icon:"▣",desc:"GTA V için çok oyunculu modifikasyon platformunun ana sayfası.",status:"Resmî kaynak",url:"https://fivem.net/"},
{name:"Rockstar Support",cat:"GTA V & FiveM",icon:"▣",desc:"GTA V ve Rockstar Games ürünleri için yardım ve destek.",status:"Rockstar",url:"https://support.rockstargames.com/"},
{name:"Steam Store",cat:"CS & Diğer Oyunlar",icon:"◉",desc:"Oyunlar, ücretsiz oyunlar ve resmî güncellemeler.",status:"Steam",url:"https://store.steampowered.com/"},
{name:"WeMod",cat:"CS & Diğer Oyunlar",icon:"◉",desc:"PC oyunları için yardımcı uygulama ve oyun topluluğu.",status:"Resmî kaynak",url:"https://www.wemod.com/"},
{name:"Adobe Photoshop",cat:"Adobe & Medya",icon:"▧",desc:"Görsel tasarım ve fotoğraf düzenleme uygulaması.",status:"Adobe",url:"https://www.adobe.com/products/photoshop.html"},
{name:"Adobe Premiere Pro",cat:"Adobe & Medya",icon:"▶",desc:"Video kurgu ve düzenleme aracı.",status:"Adobe",url:"https://www.adobe.com/products/premiere.html"},
{name:"Adobe After Effects",cat:"Adobe & Medya",icon:"✦",desc:"Hareketli grafikler ve görsel efektler.",status:"Adobe",url:"https://www.adobe.com/products/aftereffects.html"},
{name:"Spotify",cat:"Adobe & Medya",icon:"♫",desc:"Müzik dinleme hizmeti ve resmî plan bilgileri.",status:"Spotify",url:"https://www.spotify.com/"},
{name:"GPU-Z",cat:"Sistem & Güvenlik Araçları",icon:"▥",desc:"Ekran kartı ve grafik donanımı bilgilerini görüntüle.",status:"TechPowerUp",url:"https://www.techpowerup.com/gpuz/"},
{name:"Revo Uninstaller",cat:"Sistem & Güvenlik Araçları",icon:"⌫",desc:"Uygulamaları kaldırma ve artakalan dosyaları yönetme aracı.",status:"Resmî kaynak",url:"https://www.revouninstaller.com/"},
{name:"Malwarebytes",cat:"Sistem & Güvenlik Araçları",icon:"⛨",desc:"Zararlı yazılım tarama ve dijital güvenlik çözümleri.",status:"Resmî kaynak",url:"https://www.malwarebytes.com/"},
{name:"AdGuard",cat:"Sistem & Güvenlik Araçları",icon:"◈",desc:"Reklam ve izleyici engelleme seçenekleri.",status:"Resmî kaynak",url:"https://adguard.com/"},
{name:"Driver Booster",cat:"Sistem & Güvenlik Araçları",icon:"⌘",desc:"Sürücü yönetimi aracı. Yüklemeden önce yayıncıyı kontrol et.",status:"Resmî kaynak",url:"https://www.iobit.com/en/driver-booster.php"},
{name:"Microsoft Support",cat:"Sistem & Güvenlik Araçları",icon:"⊞",desc:"Windows güncelleme, etkinleştirme ve sorun giderme yönergeleri.",status:"Microsoft",url:"https://support.microsoft.com/windows"},
{name:"VirusTotal",cat:"Sistem & Güvenlik Araçları",icon:"⛨",desc:"Şüpheli dosya ve bağlantıları taramak için çoklu motor kontrolü.",status:"Resmî kaynak",url:"https://www.virustotal.com/"}
];
const grid=document.querySelector("#productGrid"),search=document.querySelector("#search"),pills=[...document.querySelectorAll(".pill")],count=document.querySelector("#count"),empty=document.querySelector("#noResults");
let category="Tümü";
function safe(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function draw(){
 const q=search.value.trim().toLocaleLowerCase("tr-TR");
 const found=items.filter(x=>(category==="Tümü"||x.cat===category)&&(!q||(x.name+" "+x.cat+" "+x.desc).toLocaleLowerCase("tr-TR").includes(q)));
 grid.innerHTML=found.map((x,i)=>`<article class="product-card" style="animation-delay:${Math.min(i*25,250)}ms"><div class="product-head"><span class="product-icon">${x.icon}</span><span class="product-category">${safe(x.cat.toLocaleUpperCase("tr-TR"))}</span></div><h3>${safe(x.name)}</h3><p>${safe(x.desc)}</p><div class="product-footer"><span class="product-status">${safe(x.status)}</span><a class="product-link" href="${x.url}" target="_blank" rel="noopener noreferrer">Siteye git ↗</a></div></article>`).join("");
 count.textContent=found.length;empty.hidden=found.length>0;grid.hidden=found.length===0;
}
pills.forEach(p=>p.addEventListener("click",()=>{category=p.dataset.filter;pills.forEach(b=>b.classList.toggle("active",b===p));draw()}));
search.addEventListener("input",draw);
document.querySelector("#reset").addEventListener("click",()=>{category="Tümü";search.value="";pills.forEach(p=>p.classList.toggle("active",p.dataset.filter==="Tümü"));draw()});
document.querySelectorAll(".category-card").forEach(card=>card.addEventListener("click",()=>{category=card.dataset.cat;pills.forEach(p=>p.classList.toggle("active",p.dataset.filter===category));document.querySelector("#products").scrollIntoView({behavior:"smooth"});draw()}));
document.addEventListener("keydown",e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault();search.focus()}if(e.key==="Escape"&&document.activeElement===search){search.value="";draw();search.blur()}});
document.querySelector("#mobileMenu").addEventListener("click",()=>document.querySelector("#navLinks").classList.toggle("open"));
document.querySelectorAll("#navLinks a").forEach(a=>a.addEventListener("click",()=>document.querySelector("#navLinks").classList.remove("open")));
document.querySelector("#year").textContent=new Date().getFullYear();
draw();

const categories = [
 {name:"Tümü",icon:"▦"},
 {name:"Discord Araçları",icon:"◈"},
 {name:"Valorant Araçları",icon:"◎"},
 {name:"GTA V & FiveM",icon:"▣"},
 {name:"CS & Diğer Oyunlar",icon:"◉"},
 {name:"Adobe & Medya",icon:"♫"},
 {name:"Sistem & Güvenlik Araçları",icon:"⌘"}
];
// Links are only enabled for known official product pages. Other links from the old
// site all pointed to the same Discord invite, so they are intentionally not reused.
const tools = [
 {name:"Discord Nitro Generator & Checker",cat:"Discord Araçları",icon:"◇",desc:"Eski arşiv kaydı. Resmîliği ve güvenilir indirme kaynağı doğrulanmadı.",status:"Bağlantı doğrulanmadı"},
 {name:"Discord Orbs Hilesi",cat:"Discord Araçları",icon:"◇",desc:"Eski arşiv kaydı. Kaynak bağlantısı doğrulanmadı.",status:"Bağlantı doğrulanmadı"},
 {name:"Discord Rozet Hilesi",cat:"Discord Araçları",icon:"◇",desc:"Eski arşiv kaydı. Kaynak bağlantısı doğrulanmadı.",status:"Bağlantı doğrulanmadı"},
 {name:"Vencord",cat:"Discord Araçları",icon:"◈",desc:"Discord için topluluk tarafından geliştirilen istemci özelleştirme aracı.",status:"Resmî site",url:"https://vencord.dev/"},
 {name:"Valorant Hile",cat:"Valorant Araçları",icon:"◎",desc:"Eski arşiv kaydı. İndirme bağlantısı eklenmedi.",status:"Bağlantı doğrulanmadı"},
 {name:"Valorant Spoofer",cat:"Valorant Araçları",icon:"◎",desc:"Eski arşiv kaydı. İndirme bağlantısı eklenmedi.",status:"Bağlantı doğrulanmadı"},
 {name:"Valorant Hata Çözücü",cat:"Valorant Araçları",icon:"⌁",desc:"VALORANT ve Riot Client sorunları için resmî destek kaynaklarını kullan.",status:"Riot Destek",url:"https://support-valorant.riotgames.com/"},
 {name:"VGC Emulator",cat:"Valorant Araçları",icon:"◎",desc:"Eski arşiv kaydı. Kaynak ve işlev doğrulanmadı.",status:"Bağlantı doğrulanmadı"},
 {name:"Valorant Injector",cat:"Valorant Araçları",icon:"◎",desc:"Eski arşiv kaydı. İndirme bağlantısı eklenmedi.",status:"Bağlantı doğrulanmadı"},
 {name:"Valorant Unlock All Skin Changer",cat:"Valorant Araçları",icon:"◎",desc:"Eski arşiv kaydı. İndirme bağlantısı eklenmedi.",status:"Bağlantı doğrulanmadı"},
 {name:"Valorant Color Bot",cat:"Valorant Araçları",icon:"◎",desc:"Eski arşiv kaydı. İndirme bağlantısı eklenmedi.",status:"Bağlantı doğrulanmadı"},
 {name:"Valorant Hesap Oluşturucu",cat:"Valorant Araçları",icon:"◎",desc:"Hesap işlemleri için yalnızca Riot Games'in resmî sayfasını kullan.",status:"Riot Games",url:"https://www.riotgames.com/"},
 {name:"Valorant Bypass",cat:"Valorant Araçları",icon:"◎",desc:"Eski arşiv kaydı. İndirme bağlantısı eklenmedi.",status:"Bağlantı doğrulanmadı"},
 {name:"GTA 5 Modları & Hileleri",cat:"GTA V & FiveM",icon:"▣",desc:"Eski arşiv kaydı. Mod kaynağı ve dosyalar doğrulanmadı.",status:"Bağlantı doğrulanmadı"},
 {name:"FiveM Hard Strafe & Strafe Macro",cat:"GTA V & FiveM",icon:"▣",desc:"Eski arşiv kaydı. Kaynak bağlantısı doğrulanmadı.",status:"Bağlantı doğrulanmadı"},
 {name:"FiveM Tweak & Mods",cat:"GTA V & FiveM",icon:"▣",desc:"FiveM ve GTA V modlarında dosyaların kaynağını ve uyumluluğunu kontrol et.",status:"Bağlantı doğrulanmadı"},
 {name:"FiveM FPS Boost Settings",cat:"GTA V & FiveM",icon:"↗",desc:"Grafik ayarlarını sistemine göre düzenleyerek performansı iyileştirmeye yönelik notlar.",status:"Bağlantı doğrulanmadı"},
 {name:"CS 1.6 Hile",cat:"CS & Diğer Oyunlar",icon:"◉",desc:"Eski arşiv kaydı. İndirme bağlantısı eklenmedi.",status:"Bağlantı doğrulanmadı"},
 {name:"Counter-Strike Hile",cat:"CS & Diğer Oyunlar",icon:"◉",desc:"Eski arşiv kaydı. İndirme bağlantısı eklenmedi.",status:"Bağlantı doğrulanmadı"},
 {name:"Crab Game Hile",cat:"CS & Diğer Oyunlar",icon:"◉",desc:"Eski arşiv kaydı. İndirme bağlantısı eklenmedi.",status:"Bağlantı doğrulanmadı"},
 {name:"Roblox Executor",cat:"CS & Diğer Oyunlar",icon:"◉",desc:"Eski arşiv kaydı. Kaynak bağlantısı doğrulanmadı.",status:"Bağlantı doğrulanmadı"},
 {name:"Steam Free Oyun Oynama",cat:"CS & Diğer Oyunlar",icon:"◉",desc:"Ücretsiz oyunlar için Steam'in resmî mağaza sayfasını kullan.",status:"Steam Mağazası",url:"https://store.steampowered.com/"},
 {name:"WeMod Pro",cat:"CS & Diğer Oyunlar",icon:"◉",desc:"PC oyunları için WeMod'un resmî sitesini incele.",status:"Resmî site",url:"https://www.wemod.com/"},
 {name:"Adobe After Effects",cat:"Adobe & Medya",icon:"✦",desc:"Hareketli grafik ve görsel efekt yazılımı.",status:"Adobe",url:"https://www.adobe.com/products/aftereffects.html"},
 {name:"Adobe Premiere Pro",cat:"Adobe & Medya",icon:"▶",desc:"Video düzenleme ve kurgu yazılımı.",status:"Adobe",url:"https://www.adobe.com/products/premiere.html"},
 {name:"Adobe Media Encoder",cat:"Adobe & Medya",icon:"⇄",desc:"Medya dosyalarını farklı biçimlere dönüştürme ve dışa aktarma aracı.",status:"Adobe",url:"https://www.adobe.com/products/media-encoder.html"},
 {name:"Adobe Photoshop",cat:"Adobe & Medya",icon:"▧",desc:"Fotoğraf düzenleme ve görsel tasarım yazılımı.",status:"Adobe",url:"https://www.adobe.com/products/photoshop.html"},
 {name:"Spotify Premium",cat:"Adobe & Medya",icon:"♫",desc:"Spotify hesabı ve plan bilgileri için resmî sayfa.",status:"Spotify",url:"https://www.spotify.com/premium/"},
 {name:"Video Downloader 4K",cat:"Adobe & Medya",icon:"⇩",desc:"Eski arşiv kaydı. Doğru ürün ve indirme kaynağı doğrulanmadı.",status:"Bağlantı doğrulanmadı"},
 {name:"Driver Booster",cat:"Sistem & Güvenlik Araçları",icon:"⌘",desc:"Sürücü yönetimi aracı. İndirmeden önce yayıncıyı ve sürümü kontrol et.",status:"Resmî site",url:"https://www.iobit.com/en/driver-booster.php"},
 {name:"Revo Uninstaller",cat:"Sistem & Güvenlik Araçları",icon:"⌫",desc:"Program kaldırma ve artakalan dosyaları temizleme aracı.",status:"Resmî site",url:"https://www.revouninstaller.com/"},
 {name:"Profil Kopyalama",cat:"Sistem & Güvenlik Araçları",icon:"▤",desc:"Eski arşiv kaydı. Hangi uygulamaya ait olduğu net değil.",status:"Bağlantı doğrulanmadı"},
 {name:"WLP Engine",cat:"Sistem & Güvenlik Araçları",icon:"⌘",desc:"Eski arşiv kaydı. Yayıncı ve kaynak doğrulanmadı.",status:"Bağlantı doğrulanmadı"},
 {name:"Dosya Şifre Kırma",cat:"Sistem & Güvenlik Araçları",icon:"⌁",desc:"Eski arşiv kaydı. Güvenli ve yetkili kullanım için kaynak doğrulanmadı.",status:"Bağlantı doğrulanmadı"},
 {name:"RAM Temizleyici",cat:"Sistem & Güvenlik Araçları",icon:"▥",desc:"Bu adla birden fazla araç bulunabilir; yayıncı doğrulanmalı.",status:"Bağlantı doğrulanmadı"},
 {name:"Windows Etkinleştirici",cat:"Sistem & Güvenlik Araçları",icon:"⊞",desc:"Windows lisansı ve etkinleştirme için Microsoft'un resmî yönergelerini kullan.",status:"Microsoft Destek",url:"https://support.microsoft.com/windows"},
 {name:"DLL Fixer",cat:"Sistem & Güvenlik Araçları",icon:"⌘",desc:"Eski arşiv kaydı. Yayıncı ve kaynak doğrulanmadı.",status:"Bağlantı doğrulanmadı"},
 {name:"AdBlocker & AdGuard",cat:"Sistem & Güvenlik Araçları",icon:"◈",desc:"Reklam ve izleyici engelleme çözümleri.",status:"AdGuard",url:"https://adguard.com/"},
 {name:"Malwarebytes & Hitman Pro",cat:"Sistem & Güvenlik Araçları",icon:"⛨",desc:"Zararlı yazılım tarama araçları; resmî ürün sayfalarını kullan.",status:"Malwarebytes",url:"https://www.malwarebytes.com/"},
 {name:"Ocean AC",cat:"Sistem & Güvenlik Araçları",icon:"⌘",desc:"Eski arşiv kaydı. Ürün ve kaynak doğrulanmadı.",status:"Bağlantı doğrulanmadı"},
 {name:"Defender Kalıcı Kapatıcı",cat:"Sistem & Güvenlik Araçları",icon:"⛨",desc:"Güvenlik korumasını kapatan araçlar önerilmez; bu kayıt için indirme bağlantısı yok.",status:"İndirme kapalı"},
 {name:"Speed Auto Clicker",cat:"Sistem & Güvenlik Araçları",icon:"↗",desc:"Otomatik tıklama aracı. Doğru yayıncı bağlantısı doğrulanmadı.",status:"Bağlantı doğrulanmadı"},
 {name:"Advanced SystemCare Optimizer",cat:"Sistem & Güvenlik Araçları",icon:"⌘",desc:"Sistem bakım aracı; indirmeden önce yayıncı ve lisans bilgilerini kontrol et.",status:"Resmî site",url:"https://www.iobit.com/en/advancedsystemcarefree.php"},
 {name:"GPU-Z",cat:"Sistem & Güvenlik Araçları",icon:"▥",desc:"Ekran kartı ve grafik donanımı bilgilerini görüntüleme aracı.",status:"Resmî site",url:"https://www.techpowerup.com/gpuz/"},
 {name:"Q Çeviri",cat:"Sistem & Güvenlik Araçları",icon:"文",desc:"Eski arşiv kaydı. Doğru ürün ve indirme kaynağı doğrulanmadı.",status:"Bağlantı doğrulanmadı"}
];
const filters = document.querySelector("#filters");
const grid = document.querySelector("#toolGrid");
const search = document.querySelector("#searchInput");
const clearSearch = document.querySelector("#clearSearch");
const empty = document.querySelector("#emptyState");
const resultCount = document.querySelector("#resultCount");
let activeCategory = "Tümü";
document.querySelector("#toolCount").textContent = tools.length;
document.querySelector("#year").textContent = new Date().getFullYear();

function renderFilters(){
 filters.innerHTML = categories.map(c => `<button class="filter-btn ${c.name===activeCategory?'active':''}" data-category="${escapeHTML(c.name)}">${c.icon} &nbsp;${escapeHTML(c.name)}</button>`).join("");
 filters.querySelectorAll("button").forEach(btn=>btn.addEventListener("click",()=>{activeCategory=btn.dataset.category;renderFilters();renderTools()}));
}
function escapeHTML(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function renderTools(){
 const q=search.value.trim().toLocaleLowerCase("tr-TR");
 const shown=tools.filter(t=>(activeCategory==="Tümü"||t.cat===activeCategory)&&(!q||(t.name+" "+t.cat+" "+t.desc).toLocaleLowerCase("tr-TR").includes(q)));
 grid.innerHTML=shown.map((t,i)=>`<article class="tool-card" style="animation-delay:${Math.min(i*25,250)}ms;--accent:${t.cat==="Sistem & Güvenlik Araçları"?"#62e6d5":"#8b7cff"}"><div class="card-top"><span class="tool-icon">${t.icon}</span><span class="tool-category">${escapeHTML(t.cat.toLocaleUpperCase("tr-TR"))}</span></div><h3>${escapeHTML(t.name)}</h3><p>${escapeHTML(t.desc)}</p><div class="card-bottom"><span class="card-tag">${escapeHTML(t.status.toLocaleUpperCase("tr-TR"))}</span>${t.url?`<a class="tool-link" href="${t.url}" target="_blank" rel="noopener noreferrer">Resmî sayfa ↗</a>`:`<span class="tool-link disabled" title="Bağlantı doğrulanmadı">${t.status==="İndirme kapalı"?"İndirme kapalı":"Link bekleniyor"}</span>`}</div></article>`).join("");
 resultCount.textContent=shown.length;
 empty.hidden=shown.length!==0;
 grid.hidden=shown.length===0;
 clearSearch.style.display=search.value?"block":"none";
}
search.addEventListener("input",renderTools);
clearSearch.addEventListener("click",()=>{search.value="";renderTools();search.focus()});
document.querySelector("#resetFilters").addEventListener("click",()=>{activeCategory="Tümü";search.value="";renderFilters();renderTools()});
document.addEventListener("keydown",e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault();search.focus()}if(e.key==="Escape"&&document.activeElement===search){search.value="";renderTools();search.blur()}});
document.querySelector("#menuToggle").addEventListener("click",()=>document.querySelector(".topnav").classList.toggle("open"));
document.querySelectorAll(".topnav a").forEach(a=>a.addEventListener("click",()=>document.querySelector(".topnav").classList.remove("open")));
document.querySelector("#backTop").addEventListener("click",e=>{e.preventDefault();window.scrollTo({top:0,behavior:"smooth"})});
renderFilters();renderTools();

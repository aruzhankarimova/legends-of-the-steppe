# Legends of the Steppe (Kazak Bozkırının Efsaneleri)

**Web Tasarım ve Programlama Dersi Bireysel Dönem Projesi**

---

## 1. Proje Adı ve Konusu

- **Proje Adı:** Legends of the Steppe
- **Türkçe Alt Başlık:** Kazak Bozkırının Efsaneleri
- **Proje Konusu:** Kazakistan'ın kadim sözlü edebiyatı, mitolojik imgeleri, efsaneleri, masalları, kahramanlık destanları ve kültürel sembollerinin modern bir dijital sergi formatında tanıtımı.

---

## 2. Kısa Proje Açıklaması

*Legends of the Steppe*, Avrasya bozkırının yüzyıllardır dilden dile aktarılan kadim anlatılarını modern web standartları ve sinematik bir dijital müze kurgusuyla sunan etkileşimli, tek sayfalık (single-page) bir kültürel web sitesidir. 

Site; Korkyt Ata'nın ilk kopuzu icat ederek ölüme meydan okumasından Er Töstik'in yeraltı serüvenine, Samruk kuşu ve Bayterek hayat ağacı mitolojisinden Asan Kaygı'nın ütopik yurt arayışına, Aldar Köse'nin hazırcevap latifelerinden Alpamıs Batır'ın epik kahramanlığına kadar Kazak folklorunun temel taşlarını özgün metinler ve vektörel illüstrasyonlarla ziyaretçilere tanıtmaktadır.

---

## 3. Kullanılan Teknolojiler

Proje hiçbir harici kütüphane, çatı (framework), paket yöneticisi, derleyici veya arka yüz (backend) servisi gerektirmeyen saf web standartlarıyla geliştirilmiştir:

- **HTML5:** Anlamsal etiketleme (Semantic HTML5: `header`, `nav`, `main`, `section`, `article`, `figure`, `footer`, `dialog`).
- **CSS3:** Modern CSS özel değişkenleri (Design Tokens), CSS Grid, Flexbox, akışkan tipografi (`clamp`), duyarlı medya sorguları (Responsive Media Queries) ve azaltılmış hareket tercihi (`prefers-reduced-motion`).
- **Vanilla JavaScript (ES6+):** Çerçevesiz saf JavaScript ile DOM manipülasyonu, olay dinleyicileri (Event Listeners), modal odak yönetimi (Focus Trap) ve tam etkileşimli bilgi yarışması mantığı.
- **Vektörel Varlıklar (SVG):** Bozkır temalı, yerel olarak barındırılan ve retinaya uygun özgün SVG illüstrasyonlar.

---

## 4. Kullanılan Yapay Zekâ Geliştirme Aracı

- **Geliştirme Aracı:** Google Antigravity
- Projenin mimarisi, bilgi mimarisi, semantik HTML kurgusu, erişilebilirlik ilkeleri ve JavaScript etkileşim mantığı Google Antigravity rehberliğinde titizlikle kodlanmıştır.

---

## 5. Etkileşimli Özellikler (JavaScript Features)

Web sitesinde üniversite değerlendirme kriterlerini fazlasıyla karşılayan 4 adet tam işlevsel etkileşimli JavaScript özelliği yer almaktadır:

1. **Duyarlı Mobil Gezinme (Responsive Mobile Drawer Navigation):**
   - Mobil ekranlarda açılıp kapanabilen hamburger menü.
   - `aria-expanded` erişilebilirlik özniteliği ile ekran okuyucu uyumluluğu.
   - Menü bağlantısına tıklandığında veya klavyeden `Escape` tuşuna basıldığında otomatik kapanma ve arka plan kaydırma kilidi (`body.scroll-locked`).

2. **Efsane Kartları Kategori Filtreleme (Legend Category Filtering):**
   - Ziyaretçilerin anlatıları folklorik türlerine göre anında filtreleyebilmesi (`Tümü`, `Mitoloji & Kozmoloji`, `Kahramanlık Destanı`, `Masal`, `Müzik & Efsane`, `Felsefi Efsane`, `Mizahi Halk Hikâyesi`).
   - Aktif filtre durumu ve ekran okuyucu için dinamik durum bildirimi (`aria-live="polite"`).

3. **Etkileşimli Hikâye Okuma Penceresi (Accessible Story Reading Modal):**
   - Ziyaretçi "Hikâyeyi Oku" butonuna bastığında açılan detaylı okuma çekmecesi.
   - Her anlatı için zenginleştirilmiş özgün metin, tür bilgisi, tahmini okuma süresi ve akademik kültürel bağlam analizi.
   - Klavye odak tuzağı (Focus Trap: `Tab` / `Shift+Tab`), `Escape` tuşu desteği ve pencere kapandığında odağın açan butona iade edilmesi.

4. **Etkileşimli Bilgi Yarışması (Interactive Folklore Quiz):**
   - Anlatılan konuları ölçen 6 adet çoktan seçmeli özgün soru.
   - Tek seferde tek soru gösterimi, anında doğru/yanlış görsel geri bildirimi ve detaylı açıklama metni.
   - Dinamik puan takibi, görsel ilerleme çubuğu ve yarışma sonunda puana göre özel unvan (Bozkır Bilgesi, Bozkır Yolcusu vb.).
   - Yarışmayı tüm durumlarıyla sıfırlayıp baştan başlatan tam işlevsel buton.

---

## 6. Proje Dosya Yapısı

```
Legends of the Steppe/
├── index.html              # Ana semantik HTML5 iskeleti ve Türkçe içerik
├── style.css               # Tasarım sistemi, değişkenler, ızgara ve responsive stiller
├── script.js               # Dört adet etkileşimli özelliğin saf JavaScript kodları
├── images/                 # Yerel vektörel SVG görsel varlıkları
│   ├── hero-steppe.svg         # Hero arka plan bozkır ve gece manzarası
│   ├── korkyt-ata.svg          # Korkyt Ata ve kopuz illüstrasyonu
│   ├── er-tostik.svg           # Er Töstik ve atı Şalqūyrıq illüstrasyonu
│   ├── samruk-bayterek.svg     # Samruk kuşu ve Bayterek hayat ağacı
│   ├── asan-kaygy.svg          # Asan Kaygı ve Jelmaya devesi
│   ├── aldar-kose.svg          # Aldar Köse mizahi sahnesi
│   ├── alpamis-batir.svg       # Alpamıs Batır ve savaş atı Bayşubar
│   ├── symbol-samruk.svg       # Samruk sembol kartı
│   ├── symbol-korkyt.svg       # Korkyt Ata sembol kartı
│   ├── symbol-kobyz.svg        # Kıl Kopuz sembol kartı
│   ├── symbol-bayterek.svg     # Bayterek sembol kartı
│   ├── symbol-shanyrak.svg     # Şanırak tavan kubbesi sembolü
│   ├── symbol-tulpar.svg       # Tulpar kanatlı at sembolü
│   └── kazakh-ornament.svg     # Geleneksel Kazak koç boynuzu (oyū) süsleme motifi
└── README.md               # Proje tanıtım ve kurulum dokümantasyonu
```

---

## 7. Projeyi Yerel Ortamda Çalıştırma

Site hiçbir derleme aracı veya sunucu bağımlılığı gerektirmez. Doğrudan modern bir tarayıcıda çalıştırılabilir:

### Yöntem 1: Doğrudan Tarayıcıda Açma
1. Proje klasöründeki `index.html` dosyasına çift tıklayın veya tarayıcınıza (Google Chrome, Firefox, Safari, Edge) sürükleyip bırakın.

### Yöntem 2: Yerel Statik Sunucu (Önerilen)
Terminal üzerinden hafif bir yerel sunucu ile çalıştırmak için:

```bash
# Python 3 ile yerel sunucu başlatma
python3 -m http.server 8000
```

Ardından tarayıcınızdan `http://localhost:8000` adresini açınız.

---

## 8. GitHub Pages Canlı Yayın Adresi

- **Canlı Yayın Bağlantısı:** *(GitHub Pages yayını öncesi beklemede)*
- Yayınlandığında adres şu yapıda olacaktır:  
  `https://<kullanici-adiniz>.github.io/<depo-adiniz>/`

---

## 9. GitHub ve GitHub Pages Yayın Adımları

Projeyi kendi GitHub hesabınızda yayınlamak için aşağıdaki adımları sırasıyla takip edebilirsiniz:

1. **GitHub Deposu Oluşturma:**
   - [GitHub](https://github.com) hesabınıza giriş yapın.
   - Sağ üstteki `+` simgesine tıklayıp **New repository** seçeneğini seçin.
   - Depo adına `legends-of-the-steppe` yazın.
   - Depo görünürlüğünü mutlaka **Public** olarak ayarlayın.
   - "Add a README file" seçeneğini **işaretlemeyin** (çünkü hazır `README.md` dosyamız mevcuttur).
   - **Create repository** butonuna tıklayın.

2. **Proje Dosyalarını Yükleme:**
   - Proje klasörünüzde terminal açarak şu komutları uygulayın:
     ```bash
     git init
     git add .
     git commit -m "İlk sürüm: Legends of the Steppe projesi tamamlandı"
     git branch -M main
     git remote add origin https://github.com/<kullanici-adiniz>/<depo-adiniz>.git
     git push -u origin main
     ```
   *(Alternatif olarak GitHub web arayüzünden "uploading an existing file" seçeneğiyle tüm dosyaları ve `images/` klasörünü yükleyebilirsiniz.)*

3. **GitHub Pages Yayını Aktifleştirme:**
   - Deponuzun üst menüsünden **Settings** (Ayarlar) sekmesine girin.
   - Sol taraftaki menüden **Pages** seçeneğine tıklayın.
   - **Build and deployment** başlığı altındaki **Source** kısmında **Deploy from a branch** seçeneğinin seçili olduğundan emin olun.
   - **Branch** bölümünde dal olarak `main` ve dizin olarak `/(root)` seçeneğini belirleyin.
   - **Save** butonuna tıklayın.

4. **Test ve Kontrol:**
   - Yaklaşık 1-2 dakika içinde sayfanın üstünde yeşil renkle canlı site bağlantınız belirecektir:  
     *“Your site is live at https://.../”*
   - Bağlantıya tıklayarak sitenin tüm bölümlerini, görsellerini, mobil menüsünü ve bilgi yarışmasını canlı ortamda test edebilirsiniz.


/**
 * LEGENDS OF THE STEPPE (Kazak Bozkırının Efsaneleri)
 * Ana Etkileşim ve Mantık Betiği (script.js)
 * 
 * İçerik:
 * 1. Veri Yapıları: Altı Hikâye Metinleri & Bilgi Yarışması Soruları
 * 2. Özellik 1: Duyarlı Mobil Gezinme (Hamburger Menü) & Scroll Header
 * 3. Özellik 2: Efsane Kartları Kategori Filtreleme
 * 4. Özellik 3: Etkileşimli Hikâye Okuma Penceresi (Modal & Erişilebilirlik)
 * 5. Özellik 4: Etkileşimli Bilgi Yarışması (Quiz Mantığı, Puanlama, Sıfırlama)
 * 6. Sayfa İçi Gezinme & "Yukarı Çık" Butonu
 */

'use strict';

/* ==========================================================================
   1. VERİ YAPILARI (DATA STRUCTURES)
   ========================================================================== */

/**
 * Altı efsane ve masalın tam Türkçe metinleri ve kültürel bağlam analizleri.
 * Akademik kaynaklara ve Kazak sözlü anlatı geleneklerine dayalıdır.
 */
const STORIES_DATA = {
  'korkyt-ata': {
    title: 'Korkyt Ata ve Kopuzun Doğuşu',
    subtitle: 'Ölüme Karşı Direnen Bozkır Ezgisi',
    category: 'Efsane & Müzik Geleneği',
    categoryClass: 'tag-efsane',
    readingTime: '⏱ 5 dk okuma',
    image: 'images/korkyt-ata.svg',
    imageAlt: 'Korkyt Ata Sır Derya nehrinde kopuzunu çalarken',
    paragraphs: [
      'Rivayete göre Korkyt Ata, yirmi yaşına bastığında rüyasında aklar giyinmiş haberciler görür; kendisine kırk yıl ömür biçildiğini ve ölümün adım adım yaklaştığını öğrenir. Korkyt, kaçınılmaz sondan kurtulmak için hızlı devesi Jelmaya’ya binerek dünyanın dört bir bucağına doğru yola çıkar.',
      'Doğuya gider, dağları aşar; mezar kazan insanlarla karşılaşır. “Kimin için mezar kazıyorsunuz?” diye sorduğunda, “Korkyt için” cevabını alır. Batıya, kuzeye ve güneye yönelir; bozkırın hangi köşesine varsa her yerde aynı ürpertici fısıltıyla karşılaşır: Her kazılan mezar Korkyt içindir. Anlar ki yeryüzünde ölümden kaçıp saklanacak hiçbir kara parçası yoktur.',
      'Sonunda ata yurduna, kutsal Sır Derya Nehri’nin kıyısına döner. Su üstünde ölümün olmadığını düşünerek nehrin ortasına keçe kilimini serer ve burada konaklar. Ancak ruhundaki derin kederi dindirmek için doğanın seslerini taklit eden bir çalgı yapmaya karar verir.',
      'Korkyt, tek parça çam ağacını oyar, çanağını deve derisiyle kaplar ve atın kuyruk kılından iki tel gerer. Böylece yeryüzünün ilk <em>kıl kopuzunu</em> icat eder. Kopuzun yayını tellere sürttüğünde çıkan ses; bozkır fırtınasının uğultusunu, kuğuların kanat çırpışını ve insanın ebediyet hasretini dile getirir.',
      'Korkyt kopuzunu çaldığı sürece ölüm meleği Azrail ona yaklaşamaz; ölüm, kutsal melodinin büyüsü karşısında geri çekilmek zorunda kalır. Bozkır halkı günlerce nehir kenarında toplanıp bu ezgileri dinler. Korkyt Ata, ancak bir anlık yorgunlukla uykuya daldığında nehir suyundan çıkan zehirli bir yılan (ölümün elçisi) tarafından ısırılarak fani dünyadan ayrılır. Lakin kopuzu ve müziği, bozkırın ebedi ruhunda sonsuza dek yaşamaya devam eder.'
    ],
    culturalContext: 'Korkyt Ata (Dede Korkut), Türk ve Kazak sözlü geleneğinde hem 9-10. yüzyılda Sır Derya boylarında yaşamış bilge bir şaman-ozan hem de müziğin kurucusu sayılan mitolojik bir arketiptir. Anlatı, ölümün kaçınılmaz fiziksel gerçeği karşısında sanatın ve sözün ölümsüzlüğünü simgeler. 2018 yılında UNESCO Somut Olmayan Kültürel Miras Temsili Listesi’ne dâhil edilmiştir.'
  },

  'er-tostik': {
    title: 'Er Töstik ve Yeraltı Dünyası',
    subtitle: 'Karanlık Güçlere Karşı Bozkırın Masal Kahramanı',
    category: 'Kahramanlık Masalı (Ertegi)',
    categoryClass: 'tag-masal',
    readingTime: '⏱ 6 dk okuma',
    image: 'images/er-tostik.svg',
    imageAlt: 'Er Töstik ve atı Şalqūyrıq yeraltı dünyasında',
    paragraphs: [
      'Büyük bir kıtlık sırasında sekiz oğlunu yiyecek aramak üzere uzak diyarlara gönderen ve onlardan bir daha haber alamayan ihtiyar Eleman ile karısı derin bir yalnızlığa gömülmüştü. Bir gün ana, bozkırda bir devenin göğüs kemiğini (<em>töstik</em>) bulur ve onu sandığında saklar. Zamanla bu kemikten nur yüzlü, olağanüstü güçte bir erkek çocuk dünyaya gelir; adını Er Töstik koyarlar.',
      'Töstik bir ayda bir yaşındaki çocuk kadar, bir yılda on beş yaşındaki yiğit kadar büyür. Gençlik çağına geldiğinde ağabeylerinin akıbetini öğrenir ve onları bulmak için yola çıkar. Yolda karşılaştığı hilekâr cadı Jalmauyz Kempir’in tuzağına düşerek yeraltı dünyasına (<em>Jertübi</em>) sürüklenir.',
      'Yeraltı dünyasında Töstik’in en büyük yardımcısı ve rehberi, konuşabilen, şekil değiştirebilen sadık atı <strong>Şalqūyrıq</strong> (Chal-Kuyruk) olur. Atı ona yeraltı hükümdarı Bapy Han’ın hazırladığı ölümcül tuzakları nasıl aşacağını fısıldar: Demir dağları eriten nefes ustası, gölleri bir yudumda içen dev ve yüz fersahı bir adımda aşan rüzgâr ayaklı yardımcılar Töstik’in yanında yer alır.',
      'Er Töstik, ejderha Aydahar’ı alt eder, Bapy Han’ın zorlu şartlarını zekâsı ve sadakatiyle tamamlar ve Samruk kuşunun yavrularını yeraltı canavarından kurtarır. Samruk kuşu, minnet borcu olarak Töstik’i ve atını sırtına alarak aydınlık yeryüzüne, ailesinin ve halkının yanına çıkarır.'
    ],
    culturalContext: 'Er Töstik masalı, Kazak folklorunun en zengin arkaik ve mitolojik unsurlarını barındıran fantastik anlatısıdır (ertegi). 19. yüzyılda Çokan Velihanov tarafından yazıya geçirilen masal; yeraltı (karanlık), yeryüzü (insan) ve gökyüzü (ışık) arasındaki kozmik dengeleri, şamanik yolculukları ve göçebe insanın atıyla kurduğu can yoldaşlığını anlatır.'
  },

  'samruk-bayterek': {
    title: 'Samruk Kuşu ve Hayat Ağacı Bayterek',
    subtitle: 'Kozmik Evren Düzeni ve Altın Güneş Yumurtası',
    category: 'Mitoloji & Kozmoloji',
    categoryClass: 'tag-mitoloji',
    readingTime: '⏱ 5 dk okuma',
    image: 'images/samruk-bayterek.svg',
    imageAlt: 'Hayat ağacı Bayterek doruğundaki Samruk kuşu ve altın yumurta',
    paragraphs: [
      'Kadim bozkır inancına göre evren, sınırları sonsuz Kök Tengri (Gök Tanrı) ile Jer-Su (Yer-Su) arasında uzanan devasa bir Hayat Ağacı olan <strong>Bayterek</strong> üzerinde dengede durur. Bu ulu kavak ağacının kökleri yeraltının karanlık sularına dalar, gövdesi insanların ve canlıların yurdunu taşır, en tepe dalları ise yıldızların arasına uzanır.',
      'Bayterek ağacının göğe değen zirvesinde efsanevi <strong>Samruk Kuşu</strong> (Simurg / Zümrüdüanka) yaşar. Samruk, tüyleri altından ve ışıktan yaratılmış, kanat çırptığında bozkıra bahar rüzgârları getiren ilahi bir koruyucudur.',
      'Her yıl yaz başında Samruk, Bayterek’in en tepe dalındaki yuvasına parlak, saf altından bir yumurta bırakır. Bu altın yumurta güneştir; yeryüzüne sıcaklık, bereket ve yaşam verir. Ancak yerin altındaki dipsiz karanlıkta yaşayan dev yılan <em>Aydahar</em>, gövdeye tırmanarak bu altın yumurtayı yutmak ve dünyayı karanlığa gömmek ister.',
      'Bozkırın cesur kahramanları Bayterek’e tırmanarak Aydahar’ı yener ve Samruk’un soyunu korur. Samruk yeniden doğar, güneş yeniden parlar. Bu ebedi döngü; gecenin gündüze, kışın bahara, ölümün hayata kavuşmasını temsil eden bozkır kozmolojisinin ana eksenidir.'
    ],
    culturalContext: 'Samruk ve Bayterek miti, göçebe Türk ve Kazak dünya görüşünün dikey kozmik tasavvurudur. 1997 yılında Kazakistan’ın başkenti Astana’da inşa edilen 97 metre yüksekliğindeki ünlü “Bayterek Anıtı”, bu mitolojik hayat ağacını ve tepesindeki altın güneşi modern mimariyle temsil ederek kadim kökleri çağdaş bağımsızlıkla birleştirmiştir.'
  },

  'asan-kaygy': {
    title: 'Asan Kaygı ve Jeruyık Arayışı',
    subtitle: 'Halkının Kederini Taşıyan Bozkır Filozofunun Ütopyası',
    category: 'Felsefi Efsane',
    categoryClass: 'tag-felsefe',
    readingTime: '⏱ 5 dk okuma',
    image: 'images/asan-kaygy.svg',
    imageAlt: 'Asan Kaygı devesi üstünde gün batımında bozkır ufkunu ararken',
    paragraphs: [
      '14. ve 15. yüzyıllarda Altın Orda’nın çözülüşü ve Kazak Hanlığı’nın kuruluşu döneminde yaşamış Hasan Sabitoğlu, halk arasında <strong>Asan Kaygı</strong> (Dertli / Kaygılı Asan) adıyla anılırdı. Ona bu unvanın verilmesinin sebebi, kendi dertlerine değil; bozkırda yaşayan yoksul halkın geleceğine, hayvanların susuzluğuna, otlakların kıtlığına ve kardeş kabileler arasındaki savaşlara durmaksızın kederlenmesiydi.',
      'Asan Kaygı, halkının barış ve bolluk içinde yaşayabileceği kutsal bir vatan bulmak amacıyla rüzgâr gibi koşan devesi <em>Jelmaya</em>’ya biner. Yedisu’dan Aral Denizi’ne, İdil boylarından Altay Dağları’na kadar bozkırın her karış toprağını gezer.',
      'Arayışının hedefi <strong>Jeruyık</strong> (Vaat Edilmiş Toprak) idi. Jeruyık öyle bir yerdir ki orada toprak kazmadan ürün verir, sular berrak akar, kış soğukları hayvanları kırmaz ve en önemlisi kurdun sırtında kuzuların güvenle otladığı ebedi bir adalet hüküm sürer.',
      'Asan Kaygı geçtiği her tepeyi, her ırmağı ve otlağı dikkatle inceler; coğrafyanın kaderine dair felsefi şiirler (<em>tolğavlar</em>) söyler. Kazak Hanı Canıbek Han’a öğütler vererek kabileleri birliğe çağırır. Jeruyık’ı fiziki bir coğrafya olarak bulamasa da halkına şunu miras bırakır: Jeruyık uzak bir ülke değil, adaletin, kardeşliğin ve doğaya saygının sağlandığı kendi öz vatanımızdır.'
    ],
    culturalContext: 'Asan Kaygı, Kazak edebiyatının ilk büyük kurucu jıravlarındandır (filozof şair). Arayışı, dünya edebiyatındaki Thomas More’un Ütopya’sı veya Gılgamış’ın ölümsüzlük arayışıyla paralel olan özgün bir bozkır hümanizmasıdır. Tarihsel bir şahsiyet olmasına rağmen halk hafızasında efsanevi bir bilge hüviyetine bürünmüştür.'
  },

  'aldar-kose': {
    title: 'Aldar Köse: Bozkırın Zekâ Ustası',
    subtitle: 'Açgözlülüğe ve Kibre Karşı Gülen Bozkır Aklı',
    category: 'Mizahi Halk Hikâyesi (Latife)',
    categoryClass: 'tag-mizah',
    readingTime: '⏱ 4 dk okuma',
    image: 'images/aldar-kose.svg',
    imageAlt: 'Aldar Köse gece ateş başında gülümserken',
    paragraphs: [
      'Kazak bozkırlarında herkes onu tanır: Yüzünde tek bir sakal kılı dahi çıkmadığı için “Köse”, insanları tatlı dili ve kurnazlığıyla aldattığı için “Aldar” (Hilebaz / Zeki) denmiştir. Ancak Aldar Köse sıradan bir düzenbaz değildir; o, yoksulun, çaresizin ve haksızlığa uğrayanın hakkını korumak için zekâsını kalkan yapan bir halk kahramanıdır.',
      'En bilinen hikâyelerinden birinde, dondurucu bir kış günü Aldar Köse üzerinde delik deşik, eski püskü bir keçe paltoyla bozkırda titreyerek yürümektedir. Karşıdan samur kürkler giyinmiş, karnı tok, burnu havada cimri bir zengin bay yaklaşır.',
      'Aldar Köse tir tir titremesine rağmen göğsünü açar ve sevinç naraları atar: “Ah ne güzel serinlik, ne harika ceket!” Açgözlü bay şaşırıp sorar: “Bu dondurucu ayazda deli misin be adam, nasıl üşümüyorsun?” Aldar Köse gözünü kırpar: “Benim paltom sihirli bayım. Rüzgâr bir deliğinden girip öbür deliğinden hemen dışarı kaçıyor; bu yüzden içerde soğuk hiç duramıyor!”',
      'Açgözlü bay bu mucizevi paltoya hemen sahip olmak ister. Aldar nazlanır, sonunda bayın paha biçilmez sıcak samur kürkünü, yağız atını ve altın kesesini alarak ona eski delik paltosunu verir. Bay soğuktan buz kesilirken Aldar Köse kazandığı kürk ve altınları köyündeki kimsesiz dullara ve yetimlere dağıtır.'
    ],
    culturalContext: 'Aldar Köse, Anadolu’daki Nasreddin Hoca veya İncili Çavuş tiplemelerinin Kazak göçebe kültüründeki karşılığıdır. Sosyal hiciv, mizah yoluyla halk terbiyesi ve kibirli yöneticileri gülünç duruma düşürme geleneğini temsil eder. Çizgi filmlere, tiyatro oyunlarına ve edebiyata ilham veren en sevilen halk figürüdür.'
  },

  'alpamis-batir': {
    title: 'Alpamıs Batır: Bozkırın Yenilmez Alpı',
    subtitle: 'Sadakat, Sabır ve Adaletin Epik Destanı',
    category: 'Kahramanlık Destanı (Batırlar Jırı)',
    categoryClass: 'tag-destan',
    readingTime: '⏱ 7 dk okuma',
    image: 'images/alpamis-batir.svg',
    imageAlt: 'Alpamıs Batır zırhı ve atı Bayşubar ile bozkırda',
    paragraphs: [
      'Kongrat boyunun varlıklı beyi Bayböri’nin uzun yıllar evladı olmaz. Ulu pîrlerin mezarlarını ziyaret edip dualar ettikten sonra eşiyle birlikte bir erkek çocukları dünyaya gelir; adını Alpamıs koyarlar. Aynı gün dostu Baysarı’nın da bir kızı olur, adını Gülbarşın korlar ve iki beşiği birbirine bağlayarak çocukları nişanlarlar.',
      'Alpamıs on dört yaşına geldiğinde kalkanı tek eliyle kaldıran, yayı tek hamlede geren cesur bir bahadır olur. Sadık atı <strong>Bayşubar</strong> (Bayçibar), rüzgârla yarışan, uçurumlardan atlayan ve sahibini savaşta canı pahasına koruyan efsanevi bir tulpartır.',
      'Kabileler arası fitneler sonucu sevdiği Gülbarşın’ın yurdu düşman Kalmak hanı Taisha Han tarafından işgal edilince Alpamıs tek başına sefer açar. Hileyle yakalanarak yerin altındaki yedi kulaç derinlikteki kör kuyuya (zindana) hapsedilir ve yedi yıl boyunca burada zincir altında kalır.',
      'Yedi yıl sonra sadık atı Bayşubar’ın ve kuyunun başında nöbet tutan hanın merhametli kızı Karagöz’ün yardımıyla kuyudan kurtulur. Yurduna döndüğünde Gülbarşın’ın zorla düşmanla evlendirilmek üzere olduğunu görür. Eski bir çoban kılığında düğün toyuna girer, yay çekme ve ok atma yarışında kimsenin geremediği kendi kadim yayını gererek hedefleri tam ortasından vurur. Düşmanları dize getirir, yurduna adaleti, huzuru ve sevgiyi yeniden armağan eder.'
    ],
    culturalContext: 'Alpamıs Batır Destanı, Türk-Kazak kahramanlık destanlarının (Batırlar Jırı) şaheseridir. Sözlü gelenekte binlerce beyitten oluşan destan, akınlar tarafından dombıra ve kopuz eşliğinde günlerce kesintisiz icra edilirdi. Destan; aileye sadakat, vatana bağlılık, zorluklara karşı sabır ve batırlık töresinin ebedi anıtıdır.'
  }
};

/**
 * Bilgi Yarışması Soruları (Quiz Data)
 * Web sitesindeki olgusal içeriklerle tam uyumludur.
 */
const QUIZ_QUESTIONS = [
  {
    question: 'Efsaneye göre kutsal Samruk Kuşu yuvasını nereye kurar ve bıraktığı altın yumurta neyi simgeler?',
    options: [
      { text: 'Altay Dağları’nın zirvesine / Kutsal nehri', letter: 'A' },
      { text: 'Hayat Ağacı Bayterek’in tepesine / Güneşi ve yeniden doğuşu', letter: 'B' },
      { text: 'Sır Derya Nehri kıyısına / İlk kopuz ezgisini', letter: 'C' },
      { text: 'Yeraltı dünyasının girişine / Karanlık güçleri', letter: 'D' }
    ],
    correctAnswer: 1, // B
    explanation: 'Doğru! Samruk kuşu, kökleri yeraltına dalları göğe uzanan Hayat Ağacı Bayterek’in tepesine yuva yapar ve her yıl güneşi simgeleyen altın bir yumurta bırakır.'
  },
  {
    question: 'Ölümün kaçınılmazlığı karşısında bozkırı gezen, sonunda ilk kıl kopuzu icat ederek ezgileriyle ölüme meydan okuyan bilge kimdir?',
    options: [
      { text: 'Korkyt Ata', letter: 'A' },
      { text: 'Asan Kaygı', letter: 'B' },
      { text: 'Aldar Köse', letter: 'C' },
      { text: 'Alpamıs Batır', letter: 'D' }
    ],
    correctAnswer: 0, // A
    explanation: 'Doğru! Korkyt Ata, Sır Derya Nehri üzerinde tek parça ağaçtan ve at kılından kıl kopuzu yaparak müziğin ebedi sesiyle ölüme karşı koymuştur.'
  },
  {
    question: 'Er Töstik masalında kahramanın yerin yedi kat altına inip zorlukları aşmasında rehberlik eden sadık ve konuşan atının adı nedir?',
    options: [
      { text: 'Bayşubar', letter: 'A' },
      { text: 'Jelmaya', letter: 'B' },
      { text: 'Şalqūyrıq (Chal-Kuyruk)', letter: 'C' },
      { text: 'Boztorğay', letter: 'D' }
    ],
    correctAnswer: 2, // C
    explanation: 'Doğru! Er Töstik’in konuşabilen ve yeraltı hükümdarı Bapy Han’ın hilelerini boşa çıkaran bilge atının adı Şalqūyrıq’tır.'
  },
  {
    question: 'Kazak göçebe çadırının (kiyiz üy) tavanında yer alan, aileyi, ocağı ve Kök Tengri’ye açılan pencereyi simgeleyen kutsal çemberin adı nedir?',
    options: [
      { text: 'Nayza', letter: 'A' },
      { text: 'Şanırak (Shanyrak)', letter: 'B' },
      { text: 'Saukele', letter: 'C' },
      { text: 'Tımaq', letter: 'D' }
    ],
    correctAnswer: 1, // B
    explanation: 'Doğru! Şanırak, çadırın tepesindeki duman deliği ve gök kubbe penceresidir. Bugün Kazakistan devlet armasında da vatan birliğinin simgesi olarak yer alır.'
  },
  {
    question: '15. yüzyılda halkının kederini sırtlanıp hızlı devesi Jelmaya ile kurdun kuzuyla kardeşçe yaşadığı ideal diyar “Jeruyık”ı arayan düşünür kimdir?',
    options: [
      { text: 'Canıbek Han', letter: 'A' },
      { text: 'Çokan Velihanov', letter: 'B' },
      { text: 'Asan Kaygı', letter: 'C' },
      { text: 'Muhtar Auezov', letter: 'D' }
    ],
    correctAnswer: 2, // C
    explanation: 'Doğru! Asan Kaygı (Kaygılı Asan), adaletin ve barışın hüküm sürdüğü bozkır ütopyası “Jeruyık”ı arayan bilge bir filozof şairdir (jırav).'
  },
  {
    question: 'Açgözlü beyleri ve cimri zenginleri keskin zekâsıyla aldatıp kazandıklarını yoksullara dağıtan köse (sakalsız) halk kahramanı kimdir?',
    options: [
      { text: 'Aldar Köse', letter: 'A' },
      { text: 'Er Töstik', letter: 'B' },
      { text: 'Korkyt Ata', letter: 'C' },
      { text: 'Eleman İhtiyar', letter: 'D' }
    ],
    correctAnswer: 0, // A
    explanation: 'Doğru! Aldar Köse, delik paltosunu rüzgârı dışarı kaçıran sihirli elbise diye zengin beye satacak kadar hazırcevap ve kurnaz bir halk koruyucusudur.'
  }
];

/* ==========================================================================
   2. ÖZELLİK 1: DUYARLI MOBİL GEZİNME (HAMBURGER MENÜ) & SCROLL
   ========================================================================== */

function initNavigation() {
  const header = document.getElementById('site-header');
  const toggleBtn = document.getElementById('mobile-nav-toggle');
  const navMenu = document.getElementById('primary-nav');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!toggleBtn || !navMenu) return;

  // Menü açma/kapatma durumu
  function setNavOpen(isOpen) {
    toggleBtn.setAttribute('aria-expanded', String(isOpen));
    if (isOpen) {
      navMenu.classList.add('is-open');
      document.body.classList.add('scroll-locked');
    } else {
      navMenu.classList.remove('is-open');
      document.body.classList.remove('scroll-locked');
    }
  }

  // Hamburger butonu tıklaması
  toggleBtn.addEventListener('click', () => {
    const isCurrentlyOpen = toggleBtn.getAttribute('aria-expanded') === 'true';
    setNavOpen(!isCurrentlyOpen);
  });

  // Navigasyon bağlantısına tıklandığında menüyü otomatik kapat
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        setNavOpen(false);
      }
    });
  });

  // Escape tuşuna basıldığında menüyü kapat
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && toggleBtn.getAttribute('aria-expanded') === 'true') {
      setNavOpen(false);
      toggleBtn.focus();
    }
  });

  // Menü açıkken dış alana tıklandığında menüyü kapat
  document.addEventListener('click', (e) => {
    if (
      toggleBtn.getAttribute('aria-expanded') === 'true' &&
      !navMenu.contains(e.target) &&
      !toggleBtn.contains(e.target)
    ) {
      setNavOpen(false);
    }
  });

  // Ekran boyutu masaüstü genişliğine geçtiğinde mobil menüyü sıfırla
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && toggleBtn.getAttribute('aria-expanded') === 'true') {
      setNavOpen(false);
    }
  });

  // Sayfa kaydırıldığında başlığa 'scrolled' sınıfı ekleme
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* ==========================================================================
   3. ÖZELLİK 2: EFSANE KARTLARI KATEGORİ FİLTRELEME
   ========================================================================== */

function initLegendFiltering() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const storyCards = document.querySelectorAll('.story-card');
  const filterStatus = document.getElementById('filter-status');

  if (!filterButtons.length || !storyCards.length) return;

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedFilter = btn.getAttribute('data-filter') || 'all';

      // Buton aktiflik durumlarını güncelle
      filterButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');

      // Hikâye kartlarını filtrele
      let visibleCount = 0;
      storyCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (selectedFilter === 'all' || cardCategory === selectedFilter) {
          card.classList.remove('is-hidden');
          visibleCount++;
        } else {
          card.classList.add('is-hidden');
        }
      });

      // Ekran okuyucu bildirim metnini güncelle
      if (filterStatus) {
        const filterName = btn.textContent ? btn.textContent.trim() : selectedFilter;
        filterStatus.textContent = `${filterName} kategorisinde ${visibleCount} hikâye gösteriliyor.`;
      }
    });
  });
}

/* ==========================================================================
   4. ÖZELLİK 3: ETKİLEŞİMLİ HİKÂYE OKUMA MODAL'I (MODAL DRAWER)
   ========================================================================== */

function initStoryModal() {
  const modalOverlay = document.getElementById('story-modal-overlay');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalBottomCloseBtn = document.getElementById('modal-bottom-close-btn');
  const readButtons = document.querySelectorAll('.story-read-btn');

  // Modal içerik alanları
  const modalStoryImg = document.getElementById('modal-story-img');
  const modalCategoryBadge = document.getElementById('modal-category-badge');
  const modalReadingTime = document.getElementById('modal-reading-time');
  const modalGenreType = document.getElementById('modal-genre-type');
  const modalStoryTitle = document.getElementById('modal-story-title');
  const modalStorySub = document.getElementById('modal-story-sub');
  const modalRichText = document.getElementById('modal-rich-text');
  const modalCulturalText = document.getElementById('modal-cultural-text');

  let lastActiveElement = null;

  if (!modalOverlay) return;

  // Modalı açma fonksiyonu
  function openStoryModal(storyId, triggerBtn) {
    const data = STORIES_DATA[storyId];
    if (!data) return;

    lastActiveElement = triggerBtn || document.activeElement;

    // Verileri modal elemanlarına yerleştir
    if (modalStoryImg) {
      modalStoryImg.src = data.image;
      modalStoryImg.alt = data.imageAlt;
    }
    if (modalCategoryBadge) {
      modalCategoryBadge.textContent = data.category;
      modalCategoryBadge.className = `modal-category-badge ${data.categoryClass || ''}`;
    }
    if (modalReadingTime) {
      modalReadingTime.textContent = data.readingTime;
    }
    if (modalGenreType) {
      modalGenreType.textContent = `📜 Tür: ${data.category}`;
    }
    if (modalStoryTitle) {
      modalStoryTitle.textContent = data.title;
    }
    if (modalStorySub) {
      modalStorySub.textContent = data.subtitle;
    }
    if (modalCulturalText) {
      modalCulturalText.textContent = data.culturalContext;
    }

    // Paragrafları oluştur
    if (modalRichText) {
      modalRichText.innerHTML = '';
      data.paragraphs.forEach((pText) => {
        const p = document.createElement('p');
        p.innerHTML = pText;
        modalRichText.appendChild(p);
      });
    }

    // Kaydırma alanını başa al
    const modalScrollArea = modalOverlay.querySelector('.modal-scroll-area');
    if (modalScrollArea) {
      modalScrollArea.scrollTop = 0;
    }

    // Modalı görünür yap ve gövde kaydırmasını kilitle
    modalOverlay.classList.remove('hidden');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('scroll-locked');

    // Odaklanmayı kapatma butonuna taşı
    setTimeout(() => {
      modalCloseBtn?.focus();
    }, 50);
  }

  // Modalı kapatma fonksiyonu
  function closeStoryModal() {
    modalOverlay.classList.add('hidden');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('scroll-locked');

    // Odağı açan butona geri ver (Erişilebilirlik)
    if (lastActiveElement && typeof lastActiveElement.focus === 'function') {
      lastActiveElement.focus();
    }
  }

  // Oku butonlarına olay dinleyicisi bağlama
  readButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const storyId = btn.getAttribute('data-story');
      if (storyId) {
        openStoryModal(storyId, btn);
      }
    });
  });

  // Kapatma butonları
  modalCloseBtn?.addEventListener('click', closeStoryModal);
  modalBottomCloseBtn?.addEventListener('click', closeStoryModal);

  // Dış alana (backdrop) tıklandığında kapatma
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeStoryModal();
    }
  });

  // Klavye olayları: Escape ve Focus Trap
  document.addEventListener('keydown', (e) => {
    if (modalOverlay.classList.contains('hidden')) return;

    if (e.key === 'Escape') {
      closeStoryModal();
      return;
    }

    // Modal içi klavye odak tuzağı (Focus Trap)
    if (e.key === 'Tab') {
      const focusableElements = modalOverlay.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (!focusableElements.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!modalOverlay.contains(document.activeElement)) {
        firstElement.focus();
        e.preventDefault();
        return;
      }

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    }
  });
}

/* ==========================================================================
   5. ÖZELLİK 4: ETKİLEŞİMLİ BİLGİ YARIŞMASI (QUIZ)
   ========================================================================== */

function initInteractiveQuiz() {
  const quizCard = document.getElementById('quiz-card');
  const quizResultCard = document.getElementById('quiz-result-card');
  
  const currentQuestionNumEl = document.getElementById('current-question-num');
  const totalQuestionsNumEl = document.getElementById('total-questions-num');
  const quizProgressFill = document.getElementById('quiz-progress-fill');
  const liveScoreEl = document.getElementById('live-score');
  
  const questionTextEl = document.getElementById('quiz-question-text');
  const optionsListEl = document.getElementById('quiz-options-list');
  const feedbackBoxEl = document.getElementById('quiz-feedback-box');
  const feedbackBadgeEl = document.getElementById('feedback-badge');
  const feedbackExplanationEl = document.getElementById('feedback-explanation');
  const nextBtn = document.getElementById('quiz-next-btn');

  // Sonuç ekranı elemanları
  const resultIcon = document.getElementById('result-icon');
  const resultCorrectCountEl = document.getElementById('result-correct-count');
  const resultTotalQuestionsEl = document.getElementById('result-total-questions');
  const resultLevelTitle = document.getElementById('result-level-title');
  const resultLevelDesc = document.getElementById('result-level-desc');
  const restartBtn = document.getElementById('quiz-restart-btn');

  if (!quizCard || !optionsListEl || !nextBtn) return;

  let currentQuestionIndex = 0;
  let score = 0;
  let hasAnswered = false;

  // Toplam soru adedini yaz
  if (totalQuestionsNumEl) {
    totalQuestionsNumEl.textContent = String(QUIZ_QUESTIONS.length);
  }
  if (resultTotalQuestionsEl) {
    resultTotalQuestionsEl.textContent = String(QUIZ_QUESTIONS.length);
  }

  // Soruyu ekrana basan fonksiyon
  function renderQuestion(index) {
    const qData = QUIZ_QUESTIONS[index];
    if (!qData) return;

    hasAnswered = false;

    // Başlık ve göstergeleri güncelle
    if (currentQuestionNumEl) currentQuestionNumEl.textContent = String(index + 1);
    if (liveScoreEl) liveScoreEl.textContent = String(score);
    if (questionTextEl) questionTextEl.textContent = qData.question;

    // İlerleme çubuğunu güncelle
    if (quizProgressFill) {
      const progressPercent = ((index + 1) / QUIZ_QUESTIONS.length) * 100;
      quizProgressFill.style.width = `${progressPercent}%`;
    }

    // Geri bildirimi ve sonraki butonunu sıfırla
    feedbackBoxEl?.classList.add('hidden');
    nextBtn.disabled = true;

    // Seçenek butonlarını oluştur
    optionsListEl.innerHTML = '';
    qData.options.forEach((opt, optIdx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'quiz-option-btn';
      btn.setAttribute('role', 'radio');
      btn.setAttribute('aria-checked', 'false');

      btn.innerHTML = `
        <span class="option-letter">${opt.letter}</span>
        <span class="option-text">${opt.text}</span>
      `;

      btn.addEventListener('click', () => handleOptionSelect(optIdx, btn));
      optionsListEl.appendChild(btn);
    });
  }

  // Seçenek seçildiğinde çalışır
  function handleOptionSelect(selectedIndex, clickedBtn) {
    if (hasAnswered) return;
    hasAnswered = true;

    const qData = QUIZ_QUESTIONS[currentQuestionIndex];
    const isCorrect = selectedIndex === qData.correctAnswer;

    // Tüm seçenekleri devre dışı bırak
    const allOptionButtons = optionsListEl.querySelectorAll('.quiz-option-btn');
    allOptionButtons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === qData.correctAnswer) {
        btn.classList.add('is-correct');
      }
    });

    if (isCorrect) {
      score += 10;
      if (liveScoreEl) liveScoreEl.textContent = String(score);
      clickedBtn.setAttribute('aria-checked', 'true');

      if (feedbackBadgeEl) {
        feedbackBadgeEl.className = 'feedback-badge badge-correct';
        feedbackBadgeEl.innerHTML = '✓ DOĞRU CEVAP!';
      }
    } else {
      clickedBtn.classList.add('is-wrong');
      clickedBtn.setAttribute('aria-checked', 'true');

      if (feedbackBadgeEl) {
        feedbackBadgeEl.className = 'feedback-badge badge-wrong';
        feedbackBadgeEl.innerHTML = '✗ YANLIŞ CEVAP';
      }
    }

    // Açıklamayı göster
    if (feedbackExplanationEl) {
      feedbackExplanationEl.textContent = qData.explanation;
    }
    feedbackBoxEl?.classList.remove('hidden');

    // Sonraki soru butonunu aktif et
    nextBtn.disabled = false;
    nextBtn.focus();
  }

  // Sonraki soru butonuna tıklandığında
  nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < QUIZ_QUESTIONS.length) {
      renderQuestion(currentQuestionIndex);
    } else {
      showResults();
    }
  });

  // Sonuç ekranını gösterme
  function showResults() {
    quizCard.classList.add('hidden');
    quizResultCard.classList.remove('hidden');

    const correctCount = score / 10;
    if (resultCorrectCountEl) {
      resultCorrectCountEl.textContent = String(correctCount);
    }

    // Unvan değerlendirmesi
    if (correctCount === 6) {
      if (resultIcon) resultIcon.textContent = '👑';
      if (resultLevelTitle) resultLevelTitle.textContent = 'Ulu Bozkır Bilgesi';
      if (resultLevelDesc) resultLevelDesc.textContent = 'Mükemmel! Kazak mitolojisi, sembolleri ve kadim destanlarına tam anlamıyla hâkimsin.';
    } else if (correctCount >= 4) {
      if (resultIcon) resultIcon.textContent = '🦅';
      if (resultLevelTitle) resultLevelTitle.textContent = 'Bozkır Yolcusu';
      if (resultLevelDesc) resultLevelDesc.textContent = 'Çok başarılı! Efsanelerin ruhunu ve önemli kahramanları gayet iyi kavramışsın.';
    } else {
      if (resultIcon) resultIcon.textContent = '📜';
      if (resultLevelTitle) resultLevelTitle.textContent = 'Bozkır Çırağı';
      if (resultLevelDesc) resultLevelDesc.textContent = 'Güzel bir başlangıç! Hikâyeler bölümünü tekrar okuyarak puanını artırabilirsin.';
    }

    restartBtn?.focus();
  }

  // Yeniden Başlatma fonksiyonu
  function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    hasAnswered = false;

    quizResultCard.classList.add('hidden');
    quizCard.classList.remove('hidden');

    renderQuestion(0);
  }

  restartBtn?.addEventListener('click', restartQuiz);

  // İlk soruyu başlat
  renderQuestion(0);
}

/* ==========================================================================
   6. SAYFA İÇİ GEZİNME & "YUKARI ÇIK" BUTONU
   ========================================================================== */

function initScrollHelpers() {
  const backToTopBtn = document.getElementById('back-to-top-btn');

  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ==========================================================================
   UYGULAMA BAŞLATICI (DOM CONTENT LOADED)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initLegendFiltering();
  initStoryModal();
  initInteractiveQuiz();
  initScrollHelpers();
});


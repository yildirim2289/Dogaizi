const sehirVerileri = {
    izmir: {
        tarihi: [
            {
                isim: "Efes Antik Kenti",
                resim: "resim/Efes.png",
                aciklama: "UNESCO Dünya Miras Listesi'nde yer alan Efes, Hellenistik ve Roma dönemlerinin en görkemli metropollerinden biridir. Dünyanın yedi harikasından biri olan Artemis Tapınağı'na ev sahipliği yapmış olan kent, devasa tiyatrosu ve Celsius Kütüphanesi ile ünlüdür. Binlerce yıllık mermer sokakları ve iyi korunmuş yapısıyla ziyaretçilerini antik dünyanın kalbine doğru büyüleyici bir yolculuğa çıkarır.",
                aktivite: "Celsius Kütüphanesi önünde fotoğraf çekilin, antik tiyatronun akustiğini test edin ve Yamaç Evler'deki antik mozaikleri mutlaka inceleyin. Akşamüstü giderseniz ışık oyunlarını yakalayabilirsiniz.",
                konaklama: "Selçuk merkezindeki butik otelleri tercih edebilir veya Şirince Köyü'nün tarihi Rum konaklarında geçmişin dokusunu hissedebilirsiniz.",
                konum: "https://maps.app.goo.gl/njnieqCsEiKWGCLn7"
            },
            {
                isim: "Tarihi Asansör",
                resim: "resim/Asansör.png",
                aciklama: "1907 yılında iki semt arasındaki 50 metrelik yükseklik farkını aşmak için inşa edilen bu simge yapı, İzmir'in en zarif mühendislik örneklerinden biridir. Tuğla işçiliğiyle dikkat çeken kule, günümüzde hem ulaşım hem de turistik bir seyir terası olarak hizmet vermektedir. Balkonundan İzmir Körfezi'ni kuş bakışı izleme imkanı sunan bu mekan, şehrin nostaljik ruhunu yansıtan en önemli duraklardandır.",
                aktivite: "Dario Moreno sokağındaki nostaljik kafelerde soluklanın, asansörle yukarı çıkıp körfez manzarasına karşı kahve içerek gün batımını izleyin.",
                konaklama: "Alsancak'ın canlı sokaklarındaki modern şehir otellerinde konaklayabilir veya Konak meydanına yakın tarihi binalarda yer alan otelleri seçebilirsiniz.",
                konum: "https://maps.app.goo.gl/ByA5XnhbSmu4p4899"
            },

            {
                isim: "Tarihi Kemeraltı Çarşısı",
                resim: "resim/Kemeraltı.png",
                aciklama: "Dünyanın en büyük açık hava çarşılarından biri olan Kemeraltı, İzmir'in yüzyıllardır süregelen ticaret ve kültür kalbidir. Labirent gibi sokaklarında saklı hanlar, tarihi camiler ve geleneksel zanaatkar dükkanları yer alır. Baharat kokularının yükseldiği bu tarihi dokuda gezmek, şehrin çok kültürlü mirasını ve yaşayan enerjisini hissetmek için en doğru adrestir.",
                aktivite: "Kızlarağası Hanı'nda kumda fincanla pişen kahveyi deneyin, Hisarönü’nde meşhur şambali tatlısını tadın ve antikacılar çarşısını keşfedin.",
                konaklama: "Kordon boyuna yürüme mesafesindeki butik işletmeleri seçerek akşamları deniz havası alabilir ya da Pasaport bölgesindeki lüks otelleri değerlendirebilirsiniz.",
                konum: "https://maps.app.goo.gl/Mu8edJLFj5v37YS26"
            },
            {
                isim: "Agora Antik Kenti",
                resim: "resim/Agora.png",
                aciklama: "İzmir'in merkezinde yükselen Agora, Roma döneminde kentin idari ve ticari merkezi olarak kullanılan devasa bir pazar yeridir. Modern yapıların arasında bir tarih adası gibi duran bu alanda, binlerce yıldır aktif olarak akan yeraltı su kanalları mevcuttur. Bazilika katındaki antik grafitiler, Roma dönemindeki günlük yaşamın ve ticaretin en canlı belgelerini ziyaretçilere sunar.",
                aktivite: "Yeraltı su kanallarının sesini dinleyin, bazilika katındaki dünyanın en eski grafitilerini (antik çizimler) yakından inceleyin.",
                konaklama: "Basmane semtinde restore edilmiş eski İzmir evlerinden dönüştürülen pansiyonları veya Konak çevresindeki modern otelleri deneyebilirsiniz.",
                konum: "https://maps.app.goo.gl/dwmYkVFEZviBmCX58"
            },

            {
                isim: "İzmir Saat Kulesi",
                resim: "resim/Saat Kulesi.png",
                aciklama: "1901 yılında inşa edilen bu zarif yapı, İzmir'in en bilinen simgesi ve buluşma noktasıdır. Konak Meydanı'nı süsleyen kule, oryantalist mimarisi ve beyaz mermer işçiliğiyle dikkat çeker. Alman İmparatoru II. Wilhelm tarafından hediye edilen saat mekanizması, yüzyılı aşkın süredir kentin zamanını tutmaya devam etmektedir. Kule, şehrin özgürlükçü ve modern yüzünü temsil eder.",
                aktivite: "Kule önünde fotoğraf çekilin ve Kemeraltı Çarşısı'nda tarihi bir tur yapın.",
                konaklama: "Kordon Boyu üzerinde yer alan, deniz manzaralı butik otellerde kalarak sabahları körfez manzarasına uyanabilirsiniz.",
                konum: "https://maps.app.goo.gl/cTFS4s2fQLSbK4Lx9"
            }

        ],
        doga: [
            {
                isim: "Delikli Koy",
                resim: "resim/Delikli Koy.png",
                aciklama: "Alaçatı'da yer alan bu gizli cennet, rüzgarın ve dalgaların aşındırdığı bembeyaz kalker kayalarıyla ünlüdür. Turkuaz denizin bu beyaz kayalarla buluşması, ortaya sürreal bir manzara çıkarmaktadır. Herhangi bir tesisin bulunmadığı koy, doğallığını korumayı başarmıştır. Özellikle sessizlik arayan kampçılar ve fotoğraf tutkunları için Ege'nin en özgün noktalarından biridir.",
                aktivite: "Kaya kovuklarında fotoğraf çekilin ve masmavi suda yüzün.",
                konaklama: "Alaçatı'nın popüler taş evleri veya yakınlardaki lüks glamping alanlarında kalabilirsiniz.",
                konum: "https://maps.app.goo.gl/HFdCc7CXXU5owXqv8"
            },
            {
                isim: "Karagöl Tabiat Parkı",
                resim: "resim/Karagöl.png",
                aciklama: "Yamanlar Dağı'nın zirvesinde yer alan Karagöl, volkanik bir set gölüdür ve çevresi yoğun çam ormanlarıyla kaplıdır. Kentin gürültüsünden kaçmak isteyenler için serin havası ve huzurlu atmosferiyle ideal bir sığınaktır. Göl yüzeyindeki nilüfer çiçekleri ve yansıyan ağaç gölgeleri, doğaseverler için büyüleyici kareler sunar. Piknik ve doğa yürüyüşü için İzmir'deki en popüler rotalardandır.",
                aktivite: "Göl kenarında piknik yapın ve doğa yürüyüşü rotalarını keşfedin, nilüfer çiçeklerini fotoğraflayın.",
                konaklama: "Tabiat parkı içindeki Karagöl Karavan ve Çadır Kampı veya bölgeye yakın dağ evlerini tercih edebilirsiniz.",
                konum: "https://maps.app.goo.gl/SdYP3zb3cCXH8feJ6"
            }
        ]
    },
    aydin: {
        tarihi: [
            {
                isim: "Aphrodisias Antik Kenti",
                resim: "resim/Aphrodisias.png",
                aciklama: "Aşk tanrıçası Afrodit'e adanan bu kent, Roma döneminde Anadolu'nun en ünlü heykeltıraşlık okulu olmuştur. Kentte bulunan antik stadyum, dünyadaki en iyi korunmuş örneklerden biri olarak kabul edilir. Mermer ocaklarına yakınlığı sayesinde muazzam bir işçiliğe sahip olan lahitler ve heykeller, bugün kentin müzesinde sergilenmektedir. Sanat ve tarihin iç içe geçtiği etkileyici bir merkezdir.",
                aktivite: "Devasa antik stadyumu gezin Tetrapylon kapısının önünde sanatsal kareler yakalayın ve heykeltıraşlık müzesindeki ince işçiliğe zaman ayırın.",
                konaklama: "Karacasu ilçesindeki yerel kültürü yansıtan konaklarda kalabilir veya bölgedeki müstakil pansiyonları tercih edebilirsiniz.",
                konum: "https://maps.app.goo.gl/UqJfov9KZLJ2tpxR9"
            },
            {
                isim: "Eski Doğanbey Köyü",
                resim: "resim/Doğanbey.png",
                aciklama: "Dilek Yarımadası yamaçlarında kurulu olan köy, mübadele öncesinden kalma Rum mimarisi ve taş evleriyle zamana meydan okumaktadır. Restorasyon çalışmalarının ardından açık hava müzesi görünümüne kavuşan sokakları, sessizliği ve huzuruyla ünlüdür. Ege Denizi'ne ve Menderes Deltası'na yukarıdan bakan konumuyla, hem mimari hem de manzara tutkunları için eşsiz bir duraktır.",
                aktivite: "Sessiz sokaklarda mimariyi inceleyerek fotoğraf çekin,köy kahvesinde mola verin ve milli parkın girişindeki Delta manzarasını seyredin.",
                konaklama: "Köyün tarihi dokusuna sadık kalınarak restore edilmiş taş ev pansiyonlarında konaklayabilirsiniz.",
                konum: "https://maps.app.goo.gl/tAsY7Yqaq6Pc2UQ3A"
            }, 
            {
                isim: "Kuşadası Güvercinada Kalesi",
                resim: "resim/Güvercinada Kalesi.png",
                aciklama: "Kuşadası limanının girişindeki küçük bir ada üzerine kurulu olan kale, stratejik konumuyla kentin savunma simgesi olmuştur. Bizans ve Osmanlı izlerini taşıyan yapı, bugün anakaraya bir yol ile bağlıdır. Kalenin surları arasından denizi izlemek ve akşamları yapılan ışıklandırmasıyla şehri seyretmek turistler için vazgeçilmezdir. İçerisinde bölgenin doğal yaşamına dair sergiler de bulunur.",
                aktivite: "Kalenin içindeki sergiyi gezin ve adanın çevresinde yürüyün.Akşamüstü kalenin batı ucundaki banklara oturup Güneş’in denizin tam kalbine batışını izleyin ve kalenin hemen yanındaki marinanın ışıklarıyla birleşen manzaranın keyfini çıkarın.",
                konaklama: "Kuşadası merkezindeki sahil şeridinde bulunan büyük resort otelleri veya marinaya yakın butik otelleri konaklama için değerlendirebilirsiniz.",
                konum: "https://maps.app.goo.gl/nas11x1RbzK58Zz27"
            },

            {
                isim: "Didim Apollon Tapınağı",
                resim: "resim/Apollon.png",
                aciklama: "Antik dünyanın en büyük kehanet merkezlerinden biri olan tapınak, devasa boyutlardaki sütunları ve mimari zarafetiyle büyüleyicidir. Tamamlanamamış olmasına rağmen antik çağ mühendisliğinin ulaştığı uç noktayı simgeler. Bahçesinde yer alan ünlü Medusa başı kabartması, Didim'in ve Aydın'ın ikonik sembollerinden biridir. Tarih öncesi inançların görkemini hissetmek için mutlaka ziyaret edilmelidir.",
                aktivite: "Medusa başı kabartmasını bulun ve dev sütunların arasında yürüyün,ve hemen yanındaki butik restoranlarda yerel yemekleri deneyin.",
                konaklama: "Altınkum plajı bölgesindeki eğlence mekanlarına yakın otelleri seçebilir veya tapınak çevresindeki sessiz aile pansiyonlarında huzur bulabilirsiniz.",
                konum: "https://maps.app.goo.gl/Yz3kTvf4NYV5vQGV7"
            },
            
        
            {
                isim: "Nysa Antik Kenti",
                resim: "resim/Nysa.png",
                aciklama: "Sultanhisar'da sarp bir arazi üzerine kurulu olan Nysa, antik çağın önemli eğitim ve kültür merkezlerinden biridir. Kenti ikiye bölen derin dere yatağı, antik tünelli köprülerle birleştirilmiş muazzam bir mühendislik başarısıdır. Kütüphanesi ve 12.000 kişilik tiyatrosuyla ünlü olan bu 'üniversite kenti', zeytin ağaçları ve üzüm bağları arasında huzurlu bir tarih yolculuğu sunar.",
                aktivite: "Antik kütüphanenin kalıntılarını görün, tünel benzeri alt geçitlerden geçin ve tiyatronun büyüleyici yapısını inceleyin.",
                konaklama: "Sultanhisar çevresindeki butik aile işletmelerini seçebilir ya da Aydın şehir merkezindeki geniş imkanlara sahip zincir otellerde konaklamayı düşünebilirsiniz.",
                konum: "https://maps.app.goo.gl/aUL2VXQgWraonnSv5"
}


        ],
        doga: [
            {
                isim: "Arapapıştı Kanyonu",
                resim: "resim/Arapapıştı.png",
                aciklama: "Akçay'ın kayalıkları aşındırmasıyla oluşan bu kanyon, turkuaz suları ve sarp yamaçlarıyla büyüleyici bir doğal yapıdır. Bölgedeki Pers döneminden kalma kaya mezarları ve saklı manastırlar, kanyona tarihi bir derinlik katar. Tekne turlarıyla gezilebilen kanyon, 'Dünyanın 8. Harikası' yakıştırmasını hak edecek kadar görkemlidir. Seyir teraslarından kanyonun nefes kesen kıvrımları izlenebilir.",
                aktivite: "Kanyonda düzenlenen tekne turlarına katılarak saklı kaya mezarlarını yakından görün, seyir terasından kanyonun kıvrımlarını fotoğraflayın.",
                konaklama: "Bozdoğan'daki doğa dostu yerel pansiyonlar veya baraj kıyısındaki bungalov tipi işletmeleri seçebilirsiniz.",
                konum: "https://maps.app.goo.gl/2QYrXUoQWKRsj4Df7"
            },
            {
                isim: "Dilek Yarımadası Milli Parkı",
                resim: "resim/Dilek yarımadası.png",
                aciklama: "Kuşadası ve Söke sınırındaki bu milli park, ormanların kristal berraklığındaki koylarla birleştiği nadir bir ekosistemdir. Biyoçeşitlilik açısından oldukça zengindir; yaban domuzları, yılkı atları ve Akdeniz foklarına ev sahipliği yapar. Hem trekking tutkunları hem de deniz tatili arayanlar için Ege'nin en kaliteli doğal yaşam alanlarından biridir. Sessizliği ve tertemiz havasıyla huzur vadeder.",
                aktivite: "Kanyon parkurunda trekking yapın, yaban domuzlarını doğal ortamında gözlemleyin ve en uçtaki Karasu Koyu'nda kristal suda yüzün.",
                konaklama: "Kuşadası veya Güzelçamlı çevresindeki oteller/kamplar veya Fausta Bungalov gibi doğa konseptleri.",
                konum: "https://maps.app.goo.gl/u3TvkUwp8cS7yuwM7"
            }
        ]
    },
    mugla: {
        tarihi: [
            {
                isim: "Kayaköy",
                resim: "resim/Kayaköy.png",
                aciklama: "Fethiye'de mübadele sonrası terk edilen bu eski Rum yerleşimi, hüzünlü ve mistik 'Hayalet Köy' atmosferiyle ünlüdür. Yamaca dizilmiş yüzlerce taş ev, kiliseler ve okullar zamana karşı direnmektedir. Bir açık hava müzesi niteliğindeki köyün dar sokaklarında yürümek, geçmişin izlerini hissettirir. Günümüzde sanatçıların ve gezginlerin uğrak noktası olan etkileyici bir sit alanıdır.",
                aktivite: "Taş evler arasında yürüyüş yapın ve gün batımını izleyin.Terk edilmiş kiliseleri ve okulları ziyaret edin, köyün zirvesine tırmanıp Soğuk Su koyu manzarasını yakalayın ve yerel atölyelerden el işi ürünler alın.",
                konaklama: "Köy içerisindeki doğa ile uyumlu bungalov evleri, glamping çadırlarını veya eski taş evlerden restore edilmiş pansiyonları deneyebilirsiniz.",
                konum: "https://maps.app.goo.gl/GjdbU67WcASfGD5z7"
            },

            {
                isim: "Knidos Antik Kenti",
                resim: "resim/Knidos.png",
                aciklama: "Datça Yarımadası'nın en uç noktasında, Ege ve Akdeniz'in birleştiği yerde kurulu olan Knidos, antik çağın bilim ve sanat merkezidir. Astronomi ve tıp alanında öncü dehalar yetiştirmiş olan kent, teraslı mimarisi ve iki farklı antik limanıyla eşsizdir. Güneş saatleri ve antik tiyatrosuyla tarihin coğrafyayla kucaklaştığı bu nokta, her iki denizi aynı anda gören panoramasıyla büyüleyicidir.",
                aktivite: "Antik tiyatroda iki denizin (Ege ve Akdeniz) birleştiği noktayı izleyin, gün batımında fener yolunda yürüyüş yapın ve güneş saatini inceleyin.",
                konaklama: "Palamutbükü'ndeki denize sıfır butik otellerde konaklayabilir veya Datça yolu üzerindeki zeytinlikler arasında saklı kalmış taş evleri seçebilirsiniz.",
                konum: "https://maps.app.goo.gl/BEkJ72ESBcjRcY176"
            },
            {
                isim: "Bodrum Kalesi",
                resim: "resim/Bodrum Kalesi.png",
                aciklama: "1402 yılında inşa edilen kale, Orta Çağ mimarisinin en sağlam örneklerinden biridir ve bugün dünyanın en önemli sualtı arkeoloji müzesine ev sahipliği yapar. Kalenin kulelerinden Bodrum limanını izlemek ve bahçesindeki tavus kuşları arasında gezmek çok keyiflidir. Müzede sergilenen antik batık gemiler, deniz altındaki gizemli tarihin kapılarını ziyaretçilere sonuna kadar aralar.",
                aktivite: "Sualtı Arkeoloji Müzesi'ndeki cam batık koleksiyonunu görün, kalenin kulelerine tırmanıp Bodrum limanını panoramik olarak izleyin ve tavus kuşlarıyla bahçede fotoğraf çekilin.",
                konaklama: "Bodrum merkezdeki marinası olan lüks otelleri veya dar sokaklarda saklı begonvilli beyaz boyalı eski Bodrum pansiyonlarını tercih edebilirsiniz.",
                konum: "https://maps.app.goo.gl/DsWH3h1D4fBtv5m77"
            },
            {
                isim: "Kaunos Kral Mezarları",
                resim: "resim/Kaunos.png",
                aciklama: "Dalyan Kanalı kıyısındaki sarp kayalıklar üzerine oyulmuş bu anıtsal mezarlar, antik soyluların ebedi istirahatgahlarıdır. Tapınak cepheli formlarıyla Likya tipi mezar mimarisinin en görkemli örneklerini sunarlar. Binlerce yıldır nehrin akışını sessizce izleyen bu yapılar, özellikle akşam ışıklandırmasıyla masalsı bir görünüme kavuşur. Antik insanın ölümsüzlük arayışının taşlara kazınmış sembolüdür.",
                aktivite: "Tekne turu ile mezarların önünden geçin ve tarihini dinleyin.çamur banyolarına uğrayın ve İztuzu plajında caretta carettaların yuvalarını uzaktan gözlemleyin.",
                konaklama: "Dalyan nehir kıyısındaki sazlık manzaralı küçük butik otellerde veya nehrin karşı kıyısında yer alan bungalovlarda kalabilirsiniz.",
                konum: "https://maps.app.goo.gl/9k2THid6u3jmWCXp6"
            },
            {
                isim: "Eski Datça Sokakları",
                resim: "resim/Datça.png",
                aciklama: "Zamanın yavaş aktığı Eski Datça, begonvillerle süslü taş evleri ve arnavut kaldırımlı dar sokaklarıyla Ege romantizmini yaşatır. Ünlü şair Can Yücel'in anılarıyla dolu olan mahalle, sanat galerileri ve butik kafeleriyle huzurlu bir duraktır. Taş binaların serinliği ve Datça'nın kendine has rüzgarı, burada yürürken hissedilen sükuneti tamamlar. Ruhunu dinlendirmek isteyenler için idealdir.",
                aktivite: "Can Yücel'in evini dışarıdan görün, butik kafelerde 'Bademli Kahve' için ve el yapımı seramik atölyelerini gezin.",
                konaklama: "Eski Datça'nın kalbinde yer alan, avlusu olan tarihi taş konaklarda kalarak bölgenin huzurlu ve sanatsal atmosferini sonuna kadar hissedebilirsiniz.",
                konum: "https://maps.app.goo.gl/P4Q2aALy98Vim1hy7"
            }
    
        ],
        doga: [
            {
                isim: "Kelebekler Vadisi",
                resim: "resim/Kelebekler.png",
                aciklama: "Fethiye'de sarp kayalıklar arasında izole kalmış bu vadi, sadece deniz yoluyla ulaşılabilen bir doğa harikasıdır. İsmini barındırdığı 80'den fazla endemik kelebek türünden alır ve 1. derece doğal sit alanıdır. Bembeyaz kumsalı, turkuaz denizi ve iç kısımdaki şelalesiyle dünyaca ünlü bir kamp ve trekking rotasıdır. Doğa ile baş başa, özgür bir atmosfer arayanlar için yeryüzündeki nadir duraklardandır.",
                aktivite: "Ölüdeniz'den kalkan teknelerle vadiye ulaşın.,",
                konaklama: "Vadi içindeki ağaç evlerde veya belirlenmiş güvenli çadır alanlarında kalabilirsiniz.",
                konum: "https://maps.app.goo.gl/28Mqpw7onvTkdgVo9"
            },
            {
                isim: "Bafa Gölü Kapıkırı",
                resim: "resim/Bafa.png",
                aciklama: "Beşparmak Dağları'nın gölgesindeki Bafa Gölü, antik Herakleia kentinin kalıntıları üzerine kurulu Kapıkırı Köyü ile mistik bir atmosfer sunar. Göl üzerindeki adalarda yer alan manastırlar ve kaya mezarları bölgeyi arkeolojik açıdan zengin kılar. Özellikle gün batımındaki gümüşi rengi ve garip şekilli kayalarıyla dünya dışı bir görünüm kazanır. Kuş gözlemcileri ve huzur arayan doğaseverler için eşsiz bir hazinedir.",
                aktivite: "Beşparmak Dağları'nın garip şekilli kayaları arasında tarih öncesi mağara resimlerini arayın, göl üzerindeki manastır kalıntılarına tekneyle gidin. Kuş gözlemi yapın ve göl kenarında kamp ateşi yakın.",
                konaklama: "Kapıkırı köyü içindeki aile işletmesi pansiyonları seçebilir veya göl kenarındaki sessiz kamp ve karavan alanlarında konaklamayı düşünebilirsiniz.",
                konum: "https://maps.app.goo.gl/1BxxbGvGbpx2LbCg9"
            }
        ]
    }
};


function sehirAc(evt, sehirAdi) {
    const btns = document.querySelectorAll('.sekme-butonu');
    btns.forEach(b => b.classList.remove('active'));
    evt.currentTarget.classList.add('active');

    const content = document.getElementById('content-area');
    const data = sehirVerileri[sehirAdi];

    // Hatalı kısımlar tırnak içine alınarak düzeltildi:
    let html = '<div class="container">';
    
    html += '<h2 class="kategori-baslik">Tarihi ve Kültürel Alanlar</h2>';
    data.tarihi.forEach(item => html += kartOlustur(item));

    html += '<h2 class="kategori-baslik">Doğal Alanlar</h2>';
    data.doga.forEach(item => html += kartOlustur(item));

    html += '</div>';
    content.innerHTML = html;
}

function kartOlustur(item) {
    return `
        <div class="rota-karti">
            <img src="${item.resim}" class="rota-karti-resmi" alt="${item.isim}">
            <div class="rota-karti-govde">
                <h3>${item.isim}</h3>
                <p>${item.aciklama}</p>
                <span class="alt-baslik">Neler Yapılır?</span>
                <p>${item.aktivite}</p>
                <span class="alt-baslik">Konaklama Tavsiyesi</span>
                <p>${item.konaklama}</p>
                <a href="${item.konum}" target="_blank" class="konum-butonu">Konumu Görüntüle</a>
            </div>
        </div>
    `;
}

// Sayfa yüklendiğinde çalıştır
window.addEventListener('DOMContentLoaded', () => {
    // 1. Menü Vurgusu Kontrolü
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('.menu-linkleri a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
const sehirler = [
    { ad: "Artvin", link: "Karadeniz.html?sehir=artvin" }, { ad: "Rize", link: "Karadeniz.html?sehir=rize" }, { ad: "Trabzon", link: "Karadeniz.html?sehir=trabzon" },
    { ad: "Kahramanmaraş", link: "Akdeniz.html?sehir=Kahramanmaraş" }, { ad: "Mersin", link: "Akdeniz.html?sehir=Mersin" }, { ad: "Antalya", link: "Akdeniz.html?sehir=Antalya" },
    { ad: "İstanbul", link: "Marmara.html?sehir=istanbul" }, { ad: "Bursa", link: "Marmara.html?sehir=bursa" }, { ad: "Çanakkale", link: "Marmara.html?sehir=canakkale" },
    { ad: "İzmir", link: "Ege.html?sehir=izmir" }, { ad: "Aydın", link: "Ege.html?sehir=aydin" }, { ad: "Muğla", link: "Ege.html?sehir=mugla" }
];

const input = document.getElementById('sehirAra');
const liste = document.getElementById('sonucListesi');

input.addEventListener('input', () => {
    const deger = input.value.toLocaleLowerCase('tr');
    liste.innerHTML = '';
    
    if (deger.length > 0) {
        const filtreli = sehirler.filter(s => s.ad.toLocaleLowerCase('tr').includes(deger));
        filtreli.forEach(s => {
            liste.innerHTML += `<li><a href="${s.link}">${s.ad}</a></li>`;
        });
    }
});

// Sayfa yüklendiğinde bu blok çalışır
window.addEventListener('load', () => {
    // 1. Adresteki parametreleri kontrol et (Örn: ?sehir=artvin)
    const adresBilgisi = new URLSearchParams(window.location.search);
    const aranacakSehir = adresBilgisi.get('sehir');

    // 2. Eğer adreste bir şehir varsa...
    if (aranacakSehir) {
        // Sayfadaki butonlardan, tıklandığında bu şehri açan butonu bul
        const hedefButon = document.querySelector(`button[onclick*="'${aranacakSehir}'"]`);
        
        // 3. Eğer buton bulunduysa, ona otomatik tıkla
        if (hedefButon) {
            hedefButon.click();
        }
    }
});
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

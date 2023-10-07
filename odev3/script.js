document.getElementById('baslatButonu').addEventListener('click', yarisiBaslat);

function yarisiBaslat() {
    const atlar = document.querySelectorAll('.at');
    const kazananYazisi = document.getElementById('kazanan');

    kazananYazisi.style.display = 'none';

    atlar.forEach((at, index) => {
        at.style.top = `${10 + index * 110}px`;
        at.style.left = '0';
        at.style.animationName = 'none';
        at.style.animationPlayState = 'paused';
    });

    let yarisZamanlayıcı;
    const yarisMesafesi = window.innerWidth - 150;

    function atiHareketEttir(at) {
        const rastgeleMesafe = Math.floor(Math.random() * 6);
        const anlıkSolPozisyon = parseInt(at.style.left, 10);
        const yeniSolPozisyon = anlıkSolPozisyon + rastgeleMesafe;
        at.style.left = `${yeniSolPozisyon}px`;

        if (yeniSolPozisyon >= yarisMesafesi) {
            at.style.animationPlayState = 'paused';
            clearInterval(yarisZamanlayıcı);
            const kazananAt = Array.from(atlar).indexOf(at) + 1;
            kazananYazisi.innerText = `${kazananAt}. at kazandı!`;
            kazananYazisi.style.display = 'block';
        }
    }
    yarisZamanlayıcı = setInterval(() => {
        atlar.forEach((at) => {
            atiHareketEttir(at);
        });
    }, 10);
}
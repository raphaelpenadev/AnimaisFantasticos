export default function fetchBitcoin(url, target) {
  fetch(url)
    .then(response => response.json())
    .then((bitcoin) => {
      const btcpreco = document.querySelector(target);
      btcpreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
    }).catch(erro => console.log(Error(erro)));
}

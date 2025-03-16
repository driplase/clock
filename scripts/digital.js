const clock = document.getElementById('clock');
const search = new URLSearchParams(location.search.toLowerCase());
const enableMs = search.has('ms');
const ndp = search.has('nodatepad') ?
  search.get('nodatepad') ?
    decodeURIComponent(search.get('nodatepad')).split(',')
  :
    ['d', 'm']
: search.has('ndp') ?
  search.get('ndp') ?
    decodeURIComponent(search.get('ndp')).split(',')
  :
    ['d', 'm']
  : [];
let big = search.has('big');

setInterval(() => {
  const t = new Date();
  const text = `${t.getFullYear()}/${(t.getMonth() + 1).toString().padStart(2 * !ndp.includes('m'), '0')}/${t.getDate().toString().padStart(2 * !ndp.includes('d'), '0')} ${t.getHours().toString().padStart(2 * !ndp.includes('h'), '0')}:${t.getMinutes().toString().padStart(2, '0')}:${t.getSeconds().toString().padStart(2, '0')}${enableMs ? `.${t.getMilliseconds().toString().padStart(3, '0')}` : ""}`
  clock.textContent = text;
})

document.addEventListener('keypress', e => {
  switch (e.code) {
    case "Space": {
      big = !big;
      if (big) {
        search.set('big', '');
      } else {
        search.delete('big')
      }
      clockSize(big)
      history.replaceState(null, '', "?" + search)
      return;
    }
  }
})

function clockSize(bool) {
  clock.style.fontSize = `${7 + 5 * bool}vw`
}

clockSize(big)
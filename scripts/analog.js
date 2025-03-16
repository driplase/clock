const hand = {
  hour: document.querySelector('.hour'),
  minute: document.querySelector('.minute'),
  second: document.querySelector('.second'),
}

let t = new Date();

const currentTime = {
  hour: t.getHours(),
  minute: t.getMinutes(),
  second: t.getSeconds()
}
const turns = {
  hour: 0,
  minute: 0,
  second: 0
}

setInterval(() => {
  t = new Date();
  s = (t.getTime() - t.getTimezoneOffset() * 6e4) % 864e5 / 1e3;
  hand.hour.style.transform = `rotate(${s / 120}deg)`
  hand.minute.style.transform = `rotate(${s % 3600 / 10}deg)`
  hand.second.style.transform = `rotate(${s % 60 * 6}deg)`
  t.hour = t.getHours()
  t.minute = t.getMinutes()
  t.second = t.getSeconds()
})

function rsz() {
  const mins = Math.min(window.innerWidth, window.innerHeight)
  document.querySelector('.content').style.transform = `scale(${mins / 950})`;
}

window.addEventListener('resize', rsz)

rsz()
function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
  this.soruMetni = soruMetni;
  this.cevapSecenekleri = cevapSecenekleri;
  this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function (cevap) {
  return cevap === this.dogruCevap;
};

let sorular = [
  new Soru(
    "1-Hangisi  Javascript paket yönetim uygulamasıdır?",
    {
      a: "Node.js",
      b: "Nuget",
      c: "Npm",
      d: "Typescript",
    },
    "c"
  ),
  new Soru(
    "2-Hangisi  Frontend kapsamında değerlendirilmez?",
    {
      a: "Css",
      b: "HTML",
      c: "javascript",
      d: "SQL",
    },
    "d"
  ),
  new Soru(
    "3-Hangisi  hangisi backend kapmasında değerlendirilir",
    {
      a: "Node.js",
      b: "Nuget",
      c: "Npm",
      d: "React",
    },
    "a"
  ),
  new Soru(
    "4-Hangisi  Javascript programlama dilini kullanmaz",
    {
      a: "React",
      b: "Angular",
      c: "Vue",
      d: "Asp.Net",
    },
    "d"
  ),
];

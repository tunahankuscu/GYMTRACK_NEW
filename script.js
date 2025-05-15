const exercises = [
  {
    "title": "Bench Press",
    "desc": "Bench Press, göğüs kaslarını geliştirmek için en etkili hareketlerden biridir. Barbell ile yapılan bu egzersiz, pektoralis majör kasını hedefler. Ayrıca triceps ve ön omuz kasları da çalışır. Egzersiz sırasında sırtın bench'e tam oturmasına dikkat edilmelidir.",
    "img": "images/bench-press.jpg",
    "category": "gogus"
  },
  {
    "title": "Incline Dumbbell Press",
    "desc": "Incline Dumbbell Press, üst göğüs kaslarını geliştirmek için kullanılır. Eğik bench üzerinde her iki elde dumbbell ile yapılır. Hareket kontrollü yapılmalı, dirsekler çok fazla aşağı inmemelidir. Nefes kontrolü önemlidir.",
    "img": "images/incline-dumbbell.jpg",
    "category": "gogus"
  },
  {
    "title": "Cable Crossover",
    "desc": "Cable crossover, göğüs kaslarını izole bir şekilde çalıştırır. Kablo makinesi ile yapılır. Hareket sırasında ellerin ortada buluşması sağlanır. Dirsekler hafif bükük tutulur ve gövde sabit olmalıdır.",
    "img": "images/cable-crossover.jpg",
    "category": "gogus"
  },
  {
    "title": "Pull-Up",
    "desc": "Pull-up, sırt kaslarını çalıştırmak için vücut ağırlığıyla yapılan en temel egzersizlerden biridir. Barfiks barına tutunarak çene hizasına kadar yükselme hareketidir. Latissimus dorsi kasları başta olmak üzere tüm sırtı çalıştırır.",
    "img": "images/pull-up.jpg",
    "category": "sirt"
  },
  {
    "title": "T-Bar Row",
    "desc": "T-Bar Row hareketi, sırt kalınlığı kazanmak için kullanılır. Ayaklar omuz genişliğinde açılır ve bar göğse doğru çekilir. Hareket boyunca bel düz tutulmalı ve kontrollü yapılmalıdır.",
    "img": "images/t-bar-row.jpg",
    "category": "sirt"
  },
  {
    "title": "Seated Cable Row",
    "desc": "Seated cable row, orta sırt kaslarını hedefler. Makineye oturularak kablo çekilir. Gövde sabit tutulmalı, çekme sırasında kürek kemikleri birbirine yaklaştırılmalıdır. Duruş bozulmadan yapılmalıdır.",
    "img": "images/seated-cable-row.jpg",
    "category": "sirt"
  },
  {
    "title": "Shoulder Press",
    "desc": "Shoulder Press, omuzun ön ve orta kısmını hedefler. Ayakta veya oturarak yapılabilir. Dumbbell veya barbell ile uygulanabilir. Sırt desteği varsa, bel sağlığı için daha güvenlidir.",
    "img": "images/shoulder-press.jpg",
    "category": "omuz"
  },
  {
    "title": "Arnold Press",
    "desc": "Arnold Press, omuz kaslarının tüm kısımlarını çalıştıran kompleks bir harekettir. Dönüşlü hareket yapısı sayesinde ön, orta ve arka deltoidleri aynı anda hedefler. Kontrollü ve dengeli yapılmalıdır.",
    "img": "images/arnold-press.jpg",
    "category": "omuz"
  },
  {
    "title": "Face Pull",
    "desc": "Face Pull, arka omuz kaslarını ve trapezius kaslarını çalıştırır. Kablo makinesinde yapılır. Boy hizasına doğru kablolar çekilir. Özellikle postür düzeltme amacıyla da kullanılır.",
    "img": "images/face-pull.jpg",
    "category": "omuz"
  },
  {
    "title": "Barbell Curl",
    "desc": "Barbell curl, biceps kaslarını çalıştırmak için ideal bir harekettir. Omuz genişliğinde tutulan bar kontrollü şekilde yukarı kaldırılır. Dirseklerin sabit kalmasına dikkat edilmelidir.",
    "img": "images/barbell-curl.jpg",
    "category": "kol"
  },
  {
    "title": "Triceps Dips",
    "desc": "Triceps dips, arka kol kaslarını güçlendiren etkili bir harekettir. Vücut ağırlığı ile yapılır. Bench veya dip istasyonu kullanılabilir. Aşağı inerken dirsekler 90 dereceye kadar kırılmalıdır.",
    "img": "images/triceps-dips.jpg",
    "category": "kol"
  },
  {
    "title": "Concentration Curl",
    "desc": "Concentration curl, biceps kaslarını izole ederek çalıştırır. Oturarak tek kol ile yapılır. Formu bozmadan yapılan kontrollü tekrarlarla kas aktivasyonu maksimize edilir.",
    "img": "images/concentration-curl.jpg",
    "category": "kol"
  },
  {
    "title": "Squat",
    "desc": "Squat, bacak ve kalça kaslarını hedefleyen en temel egzersizdir. Barbell ile veya vücut ağırlığıyla yapılabilir. Dizler ayaklarla hizalı olmalı ve bel düz tutulmalıdır.",
    "img": "images/squat.jpg",
    "category": "bacak"
  },
  {
    "title": "Romanian Deadlift",
    "desc": "Romanian deadlift, arka bacak ve kalça kaslarını çalıştırır. Hareket boyunca dizler hafif bükük tutulur ve sırt düz kalmalıdır. Bel sağlığı için doğru form çok önemlidir.",
    "img": "images/romanian-deadlift.jpg",
    "category": "bacak"
  },
  {
    "title": "Walking Lunge",
    "desc": "Walking lunge, kalça ve quadriceps kaslarını çalıştıran dengeyi de geliştiren etkili bir harekettir. Uzun adımlarla yapılır ve her adımda diz 90 derece bükülmelidir.",
    "img": "images/walking-lunge.jpg",
    "category": "bacak"
  }
];

const container = document.getElementById("exerciseContainer");
const searchInput = document.getElementById("searchInput");

function displayExercises(filter = "all", search = "") {
  container.innerHTML = "";
  exercises
    .filter(ex => (filter === "all" || ex.category === filter))
    .filter(ex => ex.title.toLowerCase().includes(search.toLowerCase()))
    .forEach(ex => {
      const card = document.createElement("div");
      card.className = "exercise-card";
      card.innerHTML = `
        <h3>${ex.title}</h3>
        <img src="${ex.img}" alt="${ex.title}">
        <p>${ex.desc}</p>
      `;
      container.appendChild(card);
    });
}

document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");
    displayExercises(filter, searchInput.value);
  });
});

searchInput.addEventListener("input", () => {
  displayExercises("all", searchInput.value);
});

displayExercises();
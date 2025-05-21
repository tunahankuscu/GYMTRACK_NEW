const exercises = [
  {
    "title": "Bench Press",
    "desc": "Bench Press, göğüs kaslarını geliştirmek için en etkili hareketlerden biridir. Barbell ile yapılan bu egzersiz, pektoralis majör kasını hedefler. Ayrıca triceps ve ön omuz kasları da çalışır. Egzersiz sırasında sırtın bench'e tam oturmasına dikkat edilmelidir.",
    "img": "images/bench-press.jpg",
    "category": "gogus"
  },
  {
  "title": "Decline Bench Press",
  "desc": "Decline bench press, alt göğüs kaslarını hedefler. Bench aşağı eğimlidir. Barbell kontrollü şekilde göğse indirilir ve yukarı itilir. Duruş stabil olmalıdır.",
  "img": "images/decline-bench.jpg",
  "category": "gogus"
},
  {
    "title": "Incline Dumbbell Press",
    "desc": "Incline Dumbbell Press, üst göğüs kaslarını geliştirmek için kullanılır. Eğik bench üzerinde her iki elde dumbbell ile yapılır. Hareket kontrollü yapılmalı, dirsekler çok fazla aşağı inmemelidir. Nefes kontrolü önemlidir.",
    "img": "images/incline-dumbbell.jpg",
    "category": "gogus"
  },
  {
  "title": "Dumbbell Fly",
  "desc": "Dumbbell fly, göğüs kaslarını izole eden bir harekettir. Bench üzerinde yatarak yapılır. Kollar açık pozisyondan yukarı kapanır. Dirsekler hafif bükük tutulmalıdır.",
  "img": "images/dumbbell-fly.jpg",
  "category": "gogus"
},
  {
    "title": "Cable Crossover",
    "desc": "Cable crossover, göğüs kaslarını izole bir şekilde çalıştırır. Kablo makinesi ile yapılır. Hareket sırasında ellerin ortada buluşması sağlanır. Dirsekler hafif bükük tutulur ve gövde sabit olmalıdır.",
    "img": "images/cable-crossover.jpg",
    "category": "gogus"
  },
  {
  "title": "Push-Up",
  "desc": "Push-up, vücut ağırlığıyla yapılan etkili bir göğüs egzersizidir. Kollar omuz genişliğinde açılır, gövde düz tutulur ve kontrollü şekilde inip kalkılır.",
  "img": "images/push-up.jpg",
  "category": "gogus"
},
  {
    "title": "Pull-Up",
    "desc": "Pull-up, sırt kaslarını çalıştırmak için vücut ağırlığıyla yapılan en temel egzersizlerden biridir. Barfiks barına tutunarak çene hizasına kadar yükselme hareketidir. Latissimus dorsi kasları başta olmak üzere tüm sırtı çalıştırır.",
    "img": "images/pull-up.jpg",
    "category": "sirt"
  },
  {
  "title": "Deadlift",
  "desc": "Deadlift, tüm sırt kaslarını ve arka zinciri çalıştıran temel bir kuvvet hareketidir. Bel düz tutulmalı ve kontrollü şekilde yapılmalıdır.",
  "img": "images/deadlift.jpg",
  "category": "sirt"
},
  {
    "title": "T-Bar Row",
    "desc": "T-Bar Row hareketi, sırt kalınlığı kazanmak için kullanılır. Ayaklar omuz genişliğinde açılır ve bar göğse doğru çekilir. Hareket boyunca bel düz tutulmalı ve kontrollü yapılmalıdır.",
    "img": "images/t-bar-row.jpg",
    "category": "sirt"
  },
  {
  "title": "Single Arm Dumbbell Row",
  "desc": "Tek kol dumbbell row, sırt kaslarını izole şekilde çalıştırır. Diz bir bench'e konur, diğer elle dumbbell çekilir. Hareket kontrollü yapılmalıdır.",
  "img": "images/single-arm-row.jpg",
  "category": "sirt"
},
  {
    "title": "Seated Cable Row",
    "desc": "Seated cable row, orta sırt kaslarını hedefler. Makineye oturularak kablo çekilir. Gövde sabit tutulmalı, çekme sırasında kürek kemikleri birbirine yaklaştırılmalıdır. Duruş bozulmadan yapılmalıdır.",
    "img": "images/seated-cable-row.jpg",
    "category": "sirt"
  },
  {
  "title": "Lat Pulldown",
  "desc": "Lat pulldown, üst sırt kaslarını hedefler. Makinede bar göğse doğru çekilir. Sırt düz, omuzlar rahat olmalıdır.",
  "img": "images/lat-pulldown.jpg",
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
  "title": "Lateral Raise",
  "desc": "Lateral raise, omuzun yan kısmını hedefleyen izolasyon egzersizidir. Dumbbell’lar yandan omuz hizasına kadar kaldırılır. Dirsekler hafif bükük tutulur.",
  "img": "images/lateral-raise.jpg",
  "category": "omuz"
},
{
  "title": "Front Raise",
  "desc": "Front raise, omuzun ön kısmını çalıştırır. Dumbbell’lar öne doğru omuz hizasına kadar kaldırılır. Bel sabit tutulmalıdır.",
  "img": "images/front-raise.jpg",
  "category": "omuz"
},
  {
    "title": "Face Pull",
    "desc": "Face Pull, arka omuz kaslarını ve trapezius kaslarını çalıştırır. Kablo makinesinde yapılır. Boy hizasına doğru kablolar çekilir. Özellikle postür düzeltme amacıyla da kullanılır.",
    "img": "images/face-pull.jpg",
    "category": "omuz"
  },
  {
  "title": "Upright Row",
  "desc": "Upright row, trapez ve omuz kaslarını hedefler. Barbell veya dumbbell göğüs hizasına doğru çekilir. Dirsekler yukarıda tutulmalıdır.",
  "img": "images/upright-row.jpg",
  "category": "omuz"
},
  {
    "title": "Barbell Curl",
    "desc": "Barbell curl, biceps kaslarını çalıştırmak için ideal bir harekettir. Omuz genişliğinde tutulan bar kontrollü şekilde yukarı kaldırılır. Dirseklerin sabit kalmasına dikkat edilmelidir.",
    "img": "images/barbell-curl.jpg",
    "category": "kol"
  },
  {
  "title": "Hammer Curl",
  "desc": "Hammer curl, biceps ve ön kol kaslarını çalıştırır. Dumbbell’lar avuç içi vücuda dönük şekilde kaldırılır. Dirsekler sabit kalmalıdır.",
  "img": "images/hammer-curl.jpg",
  "category": "kol"
},
{
  "title": "Skull Crusher",
  "desc": "Skull crusher, triceps kaslarını hedefler. Bench üzerinde yatarak bar ya da dumbbell ile yapılır. Dirsekler sabit tutulur.",
  "img": "images/skull-crusher.jpg",
  "category": "kol"
},
{
  "title": "Preacher Curl",
  "desc": "Preacher curl, biceps kaslarını izole eden etkili bir harekettir. Kol sehpasında yapılır. Kontrollü şekilde kaldırılıp indirilir.",
  "img": "images/preacher-curl.jpg",
  "category": "kol"
},
{
    "title": "Concentration Curl",
    "desc": "Concentration curl, biceps kaslarını izole ederek çalıştırır. Oturarak tek kol ile yapılır. Formu bozmadan yapılan kontrollü tekrarlarla kas aktivasyonu maksimize edilir.",
    "img": "images/concentration-curl.jpg",
    "category": "kol"
  },
  {
    "title": "Triceps Dips",
    "desc": "Triceps dips, arka kol kaslarını güçlendiren etkili bir harekettir. Vücut ağırlığı ile yapılır. Bench veya dip istasyonu kullanılabilir. Aşağı inerken dirsekler 90 dereceye kadar kırılmalıdır.",
    "img": "images/triceps-dips.jpg",
    "category": "kol"
  },
  {
  "title": "Overhead Triceps Extension",
  "desc": "Overhead triceps extension, triceps kaslarını esneterek çalıştıran etkili bir harekettir. Dumbbell başın arkasına indirilip tekrar yukarı kaldırılır. Dirseklerin sabit tutulması önemlidir.",
  "img": "images/overhead-triceps-extension.jpg",
  "category": "kol"
},
{
  "title": "Cable Triceps Pushdown",
  "desc": "Cable triceps pushdown, makineyle yapılan popüler bir triceps hareketidir. Kablo yukarıdan aşağıya doğru bastırılır. Dirsekler vücuda yakın ve sabit olmalıdır.",
  "img": "images/triceps-pushdown.jpg",
  "category": "kol"
},
 
  {
    "title": "Squat",
    "desc": "Squat, bacak ve kalça kaslarını hedefleyen en temel egzersizdir. Barbell ile veya vücut ağırlığıyla yapılabilir. Dizler ayaklarla hizalı olmalı ve bel düz tutulmalıdır.",
    "img": "images/squat.jpg",
    "category": "bacak"
  },
  {
  "title": "Leg Press",
  "desc": "Leg press, quadriceps ve gluteus kaslarını hedefler. Makinede ağırlık ayarlanarak ayaklarla itme yapılır. Dizler kontrollü bükülmelidir.",
  "img": "images/leg-press.jpg",
  "category": "bacak"
},
  {
    "title": "Romanian Deadlift",
    "desc": "Romanian deadlift, arka bacak ve kalça kaslarını çalıştırır. Hareket boyunca dizler hafif bükük tutulur ve sırt düz kalmalıdır. Bel sağlığı için doğru form çok önemlidir.",
    "img": "images/romanian-deadlift.jpg",
    "category": "bacak"
  },
  {
  "title": "Leg Curl",
  "desc": "Leg curl, arka bacak kaslarını çalıştırır. Makinede yapılır. Ayak bileklerine bağlanan ped yardımıyla bacaklar yukarı doğru çekilir.",
  "img": "images/leg-curl.jpg",
  "category": "bacak"
},
{
  "title": "Bulgarian Split Squat",
  "desc": "Bulgarian split squat, tek bacak üzerinde yapılan güçlü bir denge hareketidir. Arka ayak yükseltilir, ön ayakla squat yapılır.",
  "img": "images/bulgarian-split.jpg",
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

// Egzersizleri filtreleyip ekrana yazdır
function displayExercises(filter = "all", search = "") {
  container.innerHTML = "";

  exercises
    .filter(ex => filter === "all" || ex.category === filter)
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

// Filtre butonlarına tıklama işlevi
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");
    displayExercises(filter, searchInput.value);
  });
});

// Arama kutusu işlevi
searchInput.addEventListener("input", () => {
  displayExercises("all", searchInput.value);
});

// Sayfa yüklendiğinde tanıtım ekranı göster ve egzersizleri listele
window.onload = function () {
  document.getElementById("introModal").style.display = "flex";
  displayExercises();
}

// Tanıtım kutusunu kapatma işlevi
function closeIntro() {
  document.getElementById("introModal").style.display = "none";
}

window.onscroll = function () {
  const btn = document.getElementById("topButton");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};
document.getElementById("topButton").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Yorum gönderildiğinde çalışacak
document.getElementById("commentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("username").value.trim();
  const text = document.getElementById("comment").value.trim();

  if (name && text) {
    const commentBox = document.createElement("div");
    commentBox.className = "comment";
    commentBox.innerHTML = `<strong>${name}</strong><p>${text}</p>`;

    document.getElementById("commentList").prepend(commentBox);

    // Formu temizle
    document.getElementById("commentForm").reset();
  }
});


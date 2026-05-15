const projects = {
    hutch: {
        title: "Hutchinson Regional Healthcare System",
        url: "hutchregional.com",
        image: "modals/hutch.jpg",
        description: "The challenge was to unite five websites under one domain and create a unified look and feel. Hutchinson Regional Medical Center is a not-for-profit, 199-licensed bed medical facility serving the health needs of more than 65,000 residents of Hutchinson, Reno County and the surrounding Central Kansas region."
    },
    bt: {
        title: "B&T Industries",
        url: "accu-shot.com",
        image: "modals/bt.jpg",
        description: "B&T Industries L.L.C. was founded by two Kansans, one that had an idea and the other the capital, to bring a novel idea to the shooting sports. Business principles based on taking a novel common sense idea, manufactured from the best materials, assembled by Americans and sold at a fair price."
    },
    viachristi: {
        title: "Via Christi Ascension",
        url: "viachristi.org",
        image: "modals/viachristi.jpg",
        description: "Via Christi Health is the largest provider of health care services throughout Wichita and central Kansas including hospitals, doctors, and specialty clinics."
    },
    austinhealey: {
        title: "Austin Healey Club of America",
        url: "healeyclub.org",
        image: "modals/austinhealey.jpg",
        description: "The world’s largest Healey Club, dedicated to the maintenance, preservation and enjoyment of the cars of Donald M. Healey."
    },
    creditunion: {
        title: "Credit Union of Emporia",
        url: "cuofe.org",
        image: "modals/creditunion.jpg",
        description: "The Credit Union of Emporia was formed in 1953 by seven Santa Fe Railroad employees. It was originally called the “Emporia Santa Fe Credit Union”. In 1985, the members voted to change the name to “Credit Union of Emporia” to better reflect the membership, which represents many of the Lyon County employee groups."
    },
    basketballstars: {
        title: "Basketball Stars of America AAU",
        url: "basketballstarsofamerica.com",
        image: "modals/basketballstars.jpg",
        description: "The Basketball Stars of America AAU Basketball program has brought a true year-round developmental and competitive AAU Boys & Girls Basketball program to Pittsburgh and all of Western Pennsylvania."
    }
};

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalUrl = document.getElementById("modalUrl");
const modalImage = document.getElementById("modalImage");
const modalDescription = document.getElementById("modalDescription");

document.querySelectorAll(".portfolio-item").forEach(item => {
    item.addEventListener("click", () => {
        const projectKey = item.dataset.project;
        const project = projects[projectKey];

        if (!project) return;

        modalTitle.textContent = project.title;
        modalUrl.textContent = project.url;
        modalImage.src = project.image;
        modalImage.alt = project.title;
        modalDescription.textContent = project.description;

        modal.classList.add("active");
        document.body.classList.add("modal-open");
    });
});

function closeModal() {
    modal.classList.remove("active");
    document.body.classList.remove("modal-open");
}

document.getElementById("modalClose").addEventListener("click", closeModal);

document.getElementById("closeProjectBtn").addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
        closeModal();
    }
});

const header = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('mainNav').classList.toggle('open');
});

document.querySelectorAll('#mainNav a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('mainNav').classList.remove('open');
    });
});
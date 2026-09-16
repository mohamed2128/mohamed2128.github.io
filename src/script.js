import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

let projects = [
    {
        language: "Python",
        title: "Stay Alive",
        description: "Een 2D top down shooter game",
        image: "../media/img.png",
        link: "https://github.com/Rac-Software-Development/wp1-2025-pygame-1c3-quatro/tree/v1.0.1",
    },
    {
        language: "HTML, CSS, Python, JS, Docker",
        title: "Progressive Web Apps",
        description: "Een Progressive Web App die een snelle en app-achtige gebruikerservaring biedt, " +
            "direct vanuit de browser en zonder App Store.",
        image: "../media/img_2.png",
        link: "https://github.com/Rac-Software-Development/wp4-2026-pwa-1c1-goat/tree/V1.0.0",
    },
    {
        language: "HTML, CSS, Python, SQL, Ajax, Rest, JS",
        title: "Test Correct Dashboard",
        description: "Proof-of-concept webapplicatie die leerlingresultaten uit Test Correct overzichtelijk visualiseert. " +
            "Leerlingen volgen hun voortgang per vak en leerdoel, terwijl docenten resultaten per student en klas kunnen bekijken.",
        image: "../media/img_1.png",
        link: "https://github.com/Rac-Software-Development/wp3-2026-rest-1c1-goat/tree/v1.0.0",
    },
    {
        language: "C#, Unity",
        title: "TCR Remastered",
        description: "Een 'Baldi's Basics' geïnspireerd spel dat zich afspeelt op mijn vorige school, ontwikkeld als onderdeel van een schoolproject.",
        media: "../media/TCRR.mp4",
        link: "",
    },
];

let currentProject = 0;

let container = document.getElementById("project-container");
let dotsContainer = document.getElementById("slider-dots");

function showProject(index) {
    let project = projects[index];

    let media;

    if (project.media) {
        media = `
            <video 
                src="${project.media}" 
                autoplay 
                muted 
                loop
            >
                Je browser ondersteunt geen MP4-video.
            </video>
        `;
    } else {
        media = `
            <img 
                src="${project.image}" 
                alt="${project.title}"
            >
        `;
    }


    container.innerHTML = `
        <div class="project-card">
            <div class="project-media">
                ${media}
            </div>

            <div class="project-content">
                <span class="language">
                    ${project.language}
                </span>
                
                <h2><a href="${project.link}">${project.title}</a></h2>
                <p>${project.description}</p>
            </div>
        </div>
    `;

    updateDots();
}

function nextProject() {
    currentProject++;

    if (currentProject >= projects.length) {
        currentProject = 0;
    }

    showProject(currentProject);
}

function previousProject() {
    currentProject--;

    if (currentProject < 0) {
        currentProject = projects.length - 1;
    }

    showProject(currentProject);
}

document.getElementById("next-project").addEventListener("click", nextProject);
document.getElementById("previous-project").addEventListener("click", previousProject);

function createDots() {
    projects.forEach((_, index) => {
        const dot = document.createElement("button");

        dot.classList.add("slider-dot");
        dot.addEventListener("click", () => {
            currentProject = index;
            showProject(currentProject);
        });

        dotsContainer.appendChild(dot);
    });
}


function updateDots() {
    const dots = document.querySelectorAll(".slider-dot");

    dots.forEach((dot, index) => {
        dot.classList.toggle(
            "active",
            index === currentProject
        );
    });
}

createDots();
showProject(currentProject);

gsap.registerPlugin(ScrollTrigger, TextPlugin);

let main_tl  = gsap.timeline({});

function animateMain() {
     main_tl
        .add(Box1Animation())
    ;

    return main_tl;
}

let tipElement = document.getElementById('box1');
let tip2Element = document.getElementById('box2');

function Box1Animation() {
    gsap.to(tipElement, {
        onComplete: function () {
            gsap.fromTo(tipElement,
                {opacity: 0, rotate: 0, y: 25},
                {opacity: 1, duration: 2, y: 0, ease: "power2.out", color: "white"}
            );
        }
    });
    gsap.to(tip2Element, {
        onComplete: function () {
            gsap.fromTo(tip2Element,
                {opacity: 0, rotate: 0, y: 25},
                {opacity: 1, duration: 3, y: 0, ease: "power2.out", color: "white"}
            );
        }
    });
}

// gsap.to("#maintitlesection", {
//     duration: 1.5,
//     ease: "ease-in-out",
//     scrollTrigger: {
//        trigger: "#maintitlesection",
//        start: "top 60%",
//        end: "top 40%",
//        toggleActions: "restart none reverse none",
//        onEnter: () => {
//         gsap.to(background, {
//             backgroundImage: 'linear-gradient(to right, #00ff55, #000000, #82fac0)',
//             duration: 1.5,
//             ease: "ease-in-out"
//         });
//     },
//     }
//  });

animateMain()
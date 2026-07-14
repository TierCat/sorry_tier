let knocks = 0;

const door = document.getElementById("door");

door.addEventListener("click", () => {

    door.classList.remove("knock");

    // บังคับรีเซ็ต animation เพื่อเล่นใหม่ทุกครั้ง
    void door.offsetWidth;

    door.classList.add("knock");

    knocks++;

    if (knocks === 2) {

        door.classList.add("open");

        setTimeout(() => {

            document
                .getElementById("doorScene")
                .classList
                .add("hidden");

            document
                .getElementById("mainContent")
                .classList
                .remove("hidden");

            // เอฟเฟกต์หัวใจและดอกไม้ตอนเปิดประตู
            createLoveBurst();

        }, 900);
    }

    setTimeout(() => {
        knocks = 0;
    }, 1500);

});

const noBtn = document.getElementById("noBtn");
noBtn.style.left = "55%";
noBtn.style.top = "72%";


function moveBtn() {

    const padding = 20;

    const x =
        Math.random() *
        (window.innerWidth - noBtn.offsetWidth - padding * 2)
        + padding;

    const y =
        Math.random() *
        (window.innerHeight - noBtn.offsetHeight - padding * 2)
        + padding;

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

document.addEventListener("mousemove", (e) => {

    const rect = noBtn.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distance = Math.sqrt(
        (e.clientX - centerX) ** 2 +
        (e.clientY - centerY) ** 2
    );

    if (distance < 130) {
        moveBtn();
    }
});

noBtn.addEventListener("mouseenter", moveBtn);

noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveBtn();
});

document.getElementById("yesBtn").onclick = () => {

    document.body.innerHTML = `
        <div style="
            height:100vh;
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
            background:#FFF7FA;
            font-family:Mali,cursive;
        ">

            <h1 style="
                color:#D978A4;
                font-size:48px;
                margin-bottom:20px;
            ">
                เย้ เค้าง้อสำเร็จแล้ว
            </h1>

            <p style="
                color:#9B7284;
                font-size:22px;
            ">
                ขอบคุณที่กดปุ่มนี้นะคะ
            </p>

        </div>
    `;
};

function createLoveBurst(){

    const icons = [
        "💖",
        "💕",
        "💗",
        "🌹",
        "🌷",
        "💝"
    ];

    for(let i = 0; i < 40; i++){

        const item = document.createElement("div");

        item.className = "floating-item";

        item.innerHTML =
            icons[
                Math.floor(Math.random() * icons.length)
            ];

        item.style.left = `${window.innerWidth / 2}px`;
        item.style.top = `${window.innerHeight / 2}px`;

        const x =
            (Math.random() - 0.5) * 800;

        const y =
            (Math.random() - 0.5) * 600;

        const rotate =
            `${Math.random() * 720 - 360}deg`;

        item.style.setProperty("--x", `${x}px`);
        item.style.setProperty("--y", `${y}px`);
        item.style.setProperty("--rotate", rotate);

        document.body.appendChild(item);

        setTimeout(() => {
            item.remove();
        }, 2800);
    }
}
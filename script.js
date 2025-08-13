document.getElementById("finalizarQuiz").addEventListener("click", function () {
    let pontuacao = 0;

    const p1 = document.querySelector('input[name="p1"]:checked');
    if (p1 && p1.value.toLowerCase() === "html") pontuacao++;

    const p2 = document.getElementById("p2").value.trim().toLowerCase();
    if (p2 === "domínio" || p2 === "dominio") pontuacao++;

    const p3 = document.getElementById("p3").value;
    if (p3.length >= 8 && /[A-Z]/.test(p3) && /[a-z]/.test(p3) && /\d/.test(p3) && /[\W_]/.test(p3)) pontuacao++;

    const p4 = document.getElementById("p4").value;
    if (p4.includes("1991")) pontuacao++;

    const p5 = Array.from(document.querySelectorAll('input[name="p5"]:checked')).map(cb => cb.value.toLowerCase());
    if (p5.includes("javascript") && !p5.includes("html") && !p5.includes("css")) pontuacao++;

    const p6 = document.getElementById("p6").value.toLowerCase();
    if (p6.endsWith(".html")) pontuacao++;

    const p7 = document.getElementById("p7").value.toLowerCase();
    if (p7 === "text") pontuacao++;

    const p8 = document.getElementById("p8").value.trim().toLowerCase();
    if (p8 === "javascript") pontuacao++;

    alert(`Sua pontuação final foi: ${pontuacao} de 8`);
    location.reload();
});
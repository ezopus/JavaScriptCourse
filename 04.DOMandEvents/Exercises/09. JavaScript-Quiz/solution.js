function solve() {
    const sections = Array.from(document.querySelectorAll("section"));
    const rightAnswers = [
        'onclick',
        'JSON.stringify()',
        'A programming API for HTML and XML documents']
    let score = 0;

    const buttons = Array.from(document.querySelectorAll(".answer-text"));
    buttons.forEach(b => {
        b.addEventListener("click", checkAnswer)
    });

    function checkAnswer(e) {
        const answer = e.target.childNodes[0].textContent;
        if (rightAnswers.find(a => a.includes(answer))) {
            score++;
        }
        sections[0].style.display = "none";
        if (sections.length > 1) {
            sections[1].style.display = "block";
            sections.shift();
        }

        if (!sections.find(s => s.classList.contains("block"))) {
            document.querySelector("#quizzie ul#results").style.display = "block";
            const results = document.querySelector(".results-inner:first-child");
            console.log(score)
            results.textContent = (score === 3)
                ? "You are recognized as top JavaScript fan!"
                : `You have ${score} right answers`;
        }
    }
}

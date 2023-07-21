function checkAnswers() {
const correctAnswers = ["a", "b", "c", "d", "a"];
const userAnswers = [
document.querySelector('input[name="q1"]:checked').value,
document.querySelector('input[name="q2"]:checked').value,
document.querySelector('input[name="q3"]:checked').value,
document.querySelector('input[name="q4"]:checked').value,
document.querySelector('input[name="q5"]:checked').value,
];

let score = 0;

for (let i = 0; i < correctAnswers.length; i++) {
if (userAnswers[i] === correctAnswers[i]) {
score++;
}
}

alert(`Has obtenido ${score} de 5 respuestas correctas.`);
}
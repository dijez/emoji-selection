
//STEPS
//1. SELECT ELEMENTS FROM HTML (EMOJIS AND big-emoji)
//2. LOOP THROUGH THE ARRAY OF EMOJIES
//3. ADD EVENT LISTENERS(CLICK) TO THE ELEMENTS
//4. STORE THE CONTENNT OF EACH EMOJI IN THE BIG ENOJI

const emojiees = document.querySelectorAll(".emojis");
const big = document.getElementById("main-emoji");
console.log(emojiees);

emojiees.forEach((khadija) => {
  khadija.addEventListener("click", () => {
    console.log("hello");
    big.textContent = khadija.textContent;
  });
});
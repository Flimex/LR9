let name1 = prompt("Гравець один \nВведіть ваше ім'я");
document.getElementById('name1').innerHTML = name1;
let totalScore1 = 0;
let totalScore2 = 0;
let count = 0;
const win = document.createElement('img');
const lose = document.createElement('img');
const draw = document.createElement('img');
const photoContainer = document.getElementById('photoContainer');
win.src = 'fin.jpg';
lose.src = 'lose.jpg';
win.style.width = '500px';
win.style.height = '200px';
lose.style.width = '500px';
lose.style.height = '200px';
document.getElementById('generateBut').addEventListener('click', function() {
    let numbers = [2,3,4,6,7,8,9,10,11];
    let numbers1 = [1,2,3,4];
    let card1Value = numbers[Math.floor(Math.random() * numbers.length)];
    let card2Value = numbers[Math.floor(Math.random() * numbers.length)];
    let card1Value1 = numbers1[Math.floor(Math.random() * numbers1.length)];
    let card2Value1 = numbers1[Math.floor(Math.random() * numbers1.length)];
    document.getElementById('card1').innerHTML = `<img src = "${card1Value}-${card1Value1}.png" alt = "">`;
    document.getElementById('card2').innerHTML = `<img src = "${card2Value}-${card2Value1}.png" alt = "">`;
    totalScore1 += card1Value;
    totalScore2 += card2Value;
    document.getElementById('scoreNum1').textContent = totalScore1;
    document.getElementById('scoreNum2').textContent = totalScore2;
    count++;
    if(count === 3){
        document.getElementById('generateBut').disabled = true;
        if(totalScore1 > totalScore2){
            document.getElementById('finish').textContent = `Ви виграли +200₴`;
            photoContainer.appendChild(win);
        }
        if(totalScore1 < totalScore2){
            document.getElementById('finish').textContent = `Ви програли -200₴`;
            photoContainer.appendChild(lose);
        }
        if(totalScore1 === totalScore2){
            document.getElementById('finish').textContent = `Нічия`;
        }
    }
});

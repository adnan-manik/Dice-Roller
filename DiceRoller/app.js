function rollDice() {
    const numOfDices = document.getElementById("numOfDices").value;
    const result = document.getElementById("result");
    const resultImgs = document.getElementById("resultImgs");
    let diceImgs=[];
    let values=[];

    for(let i=0; i < numOfDices;i++){
        let value = Math.floor(Math.random() * 6 )+ 1;
       values.push(value);
       diceImgs.push(`<img src="images/${value}.png" >`)
    }
     
    result.textContent= `Dice Result: ${values.join(", ")}`;
    resultImgs.innerHTML= diceImgs.join('');
}


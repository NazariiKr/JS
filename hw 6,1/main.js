let cards=[];
let suits=['spade', 'diamond','heart', 'clubs'];
let values=['6','7','8','9','10','ace','jack','queen','king']
for (let suit of suits) {
    for (let value of values) {
        if (suit==='diamond'|| suit==='heart'){
            cards.push({cardSuit:suit, value:value,color:'red'})
        }else {
            cards.push({cardSuit:suit, value:value,color:'black'})
        }

    }
}
console.log(cards)
// - всі трефи від 9 та більше
//
console.log(cards.filter(card => card.cardSuit==='clubs' && (card.value !== '6' || card.value !== '7' || card.value !== '8')));

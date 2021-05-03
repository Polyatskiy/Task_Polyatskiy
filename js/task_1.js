// Задание 1
// Функция получает массив карт в виде массива 
// Значения карт 1,2,3,4,5,6,7,8,9,10,’J’,’Q’,’K’,’T’
// Функция удаляет повторяющиеся карты и сортирует их по возрастанию, и возвращает новый массив 
// Необходимо написать эту функцию

let deckOfCard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'T'];
let unSorted = [8, 2, 3, 4, 2, 6, 7, 8, 9, 10, 'K', 'J', 'T', 'Q', 'K', 'J', 'T']
let sortedDeckOfCards = [];

const sortOfCards = (cards) => {
  sortedDeckOfCards = [...new Set(cards)];

  let compare = (a, b) => {
    return a - b;
  };
  sortedDeckOfCards.sort(compare);

  let sort = (a, b) => {
    return deckOfCard.indexOf(a) - deckOfCard.indexOf(b);
  };
  sortedDeckOfCards.sort(sort);
}

sortOfCards(unSorted);

console.log(sortedDeckOfCards);

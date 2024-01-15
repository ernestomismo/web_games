//list all card options
const cardArray = [
    {//1
      name: 'jack_clubs',
      img: 'images/cards/jack_of_clubs2.png'
    },
    {//2
      name: 'jack_diamonds',
      img: 'images/cards/jack_of_diamonds2.png'
    },
    {//3
        name: 'jack_hearts',
        img: 'images/cards/jack_of_hearts2.png'
    },
    {//4
      name: 'jack_spades',
      img: 'images/cards/jack_of_spades2.png'
    },
    {//5
        name: 'king_clubs',
        img: 'images/cards/king_of_clubs2.png'
    },
    {//6
        name: 'king_diamonds',
        img: 'images/cards/king_of_diamonds2.png'
    },
    {
      name: 'jack_clubs',
      img: 'images/cards/jack_of_clubs2.png'
    },
    {
      name: 'jack_diamonds',
      img: 'images/cards/jack_of_diamonds2.png'
    },
    {
      name: 'jack_hearts',
      img: 'images/cards/jack_of_hearts2.png'
    },
    {
      name: 'jack_spades',
      img: 'images/cards/jack_of_spades2.png'
    },
    {
      name: 'king_clubs',
      img: 'images/cards/king_of_clubs2.png'
    },
    {
      name: 'king_diamonds',
      img: 'images/cards/king_of_diamonds2.png'
    }
  ]

cardArray.sort(() => 0.5 - Math.random())

let cardChosen = []
let cardChosenIds = []

const gridDisplay = document.querySelector("#grid")

//create your board
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/cards/red_joker.png')
      card.setAttribute('data-id', i)
      card.setAttribute("height",150)
      card.setAttribute("width",100)
      card.addEventListener("click", flipCard)
      grid.appendChild(card)
    }
  }

  createBoard()

  function checkMatch(){
    console.log("checking match!!!")
    const cards = document.querySelectorAll("img")
    if(cardChosen[0] == cardChosen[1]){
      alert("HIJO PUTA!!!")
      cards[cardChosenIds[0]].removeEventListener("click", flipCard)
      cards[cardChosenIds[1]].removeEventListener("click", flipCard)
    }else{
      cards[cardChosenIds[0]].setAttribute("src", "images/cards/red_joker.png")
      cards[cardChosenIds[1]].setAttribute("src", "images/cards/red_joker.png")
    }
    cardChosen = []
    cardChosenIds = []
  }

  function flipCard(){
    const cardId = this.getAttribute("data-id")
    cardChosen.push(cardArray[cardId].name)
    cardChosenIds.push(cardId)
    this.setAttribute("src", cardArray[cardId].img)
    if(cardChosen.length === 2){
      setTimeout(checkMatch, 500)
    }

  }
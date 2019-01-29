// Definir funciones para http

let lists = require('../../../data')
lists = lists.boards[0].lists
const ERROR = { message: '404. Not Found' }


const controllersCards = {

    index: ({ params }, res) => {
        const card = lists.filter(list => list.id.toString() == params.listId)[0]
        card ? res.json({ cards: card.cards }).status(200) : res.status(404).json(ERROR)

    },

    find: ({ params }, res) => {
        const existId = lists.filter(list => list.id.toString() == params.listId)[0]
        const card = existId ? existId.cards.filter(card => card.id == params.cardId)[0] : null;
        card ? res.json({ cards: card }).status(200) : res.status(404).json(ERROR)

    },

    create: ({ body, params }, res) => {

        const existId = lists.filter(list => list.id.toString() == params.listId)[0]
        const cards = existId.cards.filter(card => card);


        let newList = Object.assign({ id: cards.length + 1 }, body)
        res.status(200).json({ card: [...cards, newList] })
    },

    update: ({ body, params }, res) => {
        const existId = lists.filter(list => list.id.toString() == params.listId)[0]
        const cards = existId.cards.filter(card => card);

        if (cards) {
            const dataUpdated = cards.map(card => {
                return (params.cardId == card.id) ? body : card;
            })

            res.status(200).json({ cards: dataUpdated })
        } else {

            console.log("It doesn't exist ")
        }
    },
    delete: ({ params }, res) => {
        const existId = lists.filter(list => list.id.toString() == params.listId)[0]
        const cards = existId.cards.filter(card => card);

        if (cards) {
            var listDate = cards.filter(card => card.id != params.cardId);

            res.json({ card: listDate });
        } else {
            console.log("The id doesn't exist");
            res.status(200).json({ data: "The id doesn't exist or Has cards " })
        }
    }
}




module.exports = controllersCards

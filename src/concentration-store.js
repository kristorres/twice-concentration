import immutableUpdate from "@axel669/immutable-update";
import {writable} from "svelte/store";

const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};

const images = [
    "nayeon",
    "jeongyeon",
    "momo",
    "sana",
    "jihyo",
    "mina",
    "dahyun",
    "chaeyoung",
    "tzuyu",
    "logo"
];

const cards = [];
for (const image of images) {
    const card = {
        url: `images/cards/${image}.jpg`,
        isFaceUp: false,
        isMatched: false
    };
    cards.push(card);
    cards.push({...card});
}
shuffle(cards);

const createConcentrationStore = () => {
    const {subscribe, update} = writable({
        cards,
        flipCount: 0
    });

    return {
        subscribe,
        flipCard: (index) => update(
            (game) => immutableUpdate(
                game,
                {
                    [`cards.${index}.isFaceUp.$apply`]: (isFaceUp) => {
                        return isFaceUp === false;
                    }
                }
            )
        ),
        markMatch: (url) => update(
            (game) => {
                const indices = game.cards
                    .map(
                        (card, index) => [card.url, index]
                    )
                    .filter(
                        ([cardURL]) => cardURL === url
                    )
                    .map(
                        ([, index]) => index
                    );
                return immutableUpdate(
                    game,
                    {
                        [`cards.${indices[0]}.isMatched.$set`]: true,
                        [`cards.${indices[1]}.isMatched.$set`]: true
                    }
                );
            }
        ),
        incrementFlipCount: () => update(
            (game) => immutableUpdate(
                game,
                {
                    "flipCount.$apply": (flipCount) => flipCount + 1
                }
            )
        )
    };
};

const concentrationStore = createConcentrationStore();

export default concentrationStore;

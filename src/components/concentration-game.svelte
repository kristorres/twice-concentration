<script>
    import Card from "./card.svelte";
    import concentrationStore from "../concentration-store.js";

    let playerCanFlipACard = true;

    const resetFlippedCards = () => {
        const indices = $concentrationStore.cards
            .map(
                (card, index) => [
                    card.isFaceUp && card.isMatched === false,
                    index
                ]
            )
            .filter(
                ([isFlipped]) => isFlipped
            )
            .map(
                ([, index]) => index
            );
        for (const index of indices) {
            concentrationStore.flipCard(index);
        }
        playerCanFlipACard = true;
    };

    const flipCard = (event) => {
        const cardIndex = event.target.dataset.id;
        concentrationStore.flipCard(cardIndex);
        concentrationStore.incrementFlipCount();

        const flippedCards = $concentrationStore.cards.filter(
            (card) => card.isFaceUp && card.isMatched === false
        );
        const flippedCardCount = flippedCards.length;

        if (flippedCardCount === 1) {
            return;
        }
        if (flippedCards[0].url === flippedCards[1].url) {
            concentrationStore.markMatch(flippedCards[0].url);
            return;
        }
        playerCanFlipACard = false;
        setTimeout(resetFlippedCards, 1500);
    };

    const resetGame = () => {
        concentrationStore.reset();
    };
</script>

<style>
    .game-table {
        flex: 1;
        background-color: #309B5D;
        padding: 32px 24px;
    }
    h1 {
        font-family: Bungee, "Helvetica Neue", sans-serif;
        font-size: 8vw;
        font-weight: 400;
        text-align: center;
        color: white;
    }
    h2 {
        font-family: "Squada One", "Helvetica Neue", sans-serif;
        font-size: 60px;
        font-weight: 400;
        text-align: center;
        color: white;
    }
    button {
        display: block;
        background-color: #ED1C27;
        border: none;
        border-radius: 8px;
        font-family: Bungee, "Helvetica Neue", sans-serif;
        font-size: 24px;
        font-weight: 400;
        letter-spacing: 0.5px;
        color: white;
        -webkit-user-select: none;
        user-select: none;
        padding: 8px 16px;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
        margin: 24px auto;
        transition: box-shadow 0.25s ease-in-out;
    }
    button:hover {
        box-shadow: none;
    }
    .card-grid {
        display: grid;
        justify-content: center;
        grid-template-columns: repeat(auto-fit, 62.5px);
        grid-auto-rows: 87.5px;
        grid-gap: 16px;
        background-color: #66CD8B;
        border-radius: 8px;
        padding: 16px;
    }
    @media (min-width: 420px) {
        .game-table {
            padding: 32px;
        }
        .card-grid {
            grid-template-columns: repeat(auto-fit, 125px);
            grid-auto-rows: 175px;
            padding: 32px;
        }
    }

    @media (prefers-color-scheme: dark) {
        .game-table {
            background-color: #123C15;
        }
        .card-grid {
            background-color: #005628;
        }
    }
</style>

<main class="game-table">
    <h1>Concentration</h1>
    <h2># of Flips: {$concentrationStore.flipCount}</h2>
    <button on:click={resetGame}>Reset Game</button>
    <div class="card-grid">
        {#each $concentrationStore.cards as card, index}
            <Card
                {card}
                disabled={card.isFaceUp || playerCanFlipACard === false}
                {index}
                on:click={flipCard}
            />
        {/each}
    </div>
</main>

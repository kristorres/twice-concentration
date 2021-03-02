<script>
    export let card;
    export let disabled;
    export let index;

    $: background = card.isFaceUp
        ? `background-image: url("${card.url}")`
        : "background: radial-gradient(#6691FF, #1A64D7)";
</script>

<style>
    .card {
        background-size: cover;
        border-radius: 8px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }
    .disabled {
        pointer-events: none;
    }
    .matched {
        opacity: 0.5;
        box-shadow: none;
    }
</style>

<div
    data-id={index}
    class="card"
    class:disabled={disabled}
    class:matched={card.isMatched}
    style={background}
    on:click
>
</div>

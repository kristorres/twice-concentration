<script>
    import ConcentrationGame from "./components/concentration-game.svelte";
    import Footer from "./components/footer.svelte";
    import TitleBar from "./components/title-bar.svelte";
</script>

<style>
    .layout {
        display: flex;
        flex-direction: column;
        background-color: #CFD8DC;
        min-height: 100vh;
    }

    @media (prefers-color-scheme: dark) {
        .layout {
            background-color: #263238;
        }
    }
</style>

<root>
    <div class="layout">
        <TitleBar/>
        <ConcentrationGame/>
        <Footer/>
    </div>
</root>

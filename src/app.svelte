<script>
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
    .game-table {
        flex: 1;
        background-color: #309B5D;
    }

    @media (prefers-color-scheme: dark) {
        .layout {
            background-color: #263238;
        }
        .game-table {
            background-color: #123C15;
        }
    }
</style>

<root>
    <div class="layout">
        <TitleBar/>
        <main class="game-table">
        </main>
        <Footer/>
    </div>
</root>

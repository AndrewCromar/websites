function loadAudioPlayer() {
    document.write(`
        <link rel="stylesheet" href="https://cdn.plyr.io/3.7.8/plyr.css" />
        <script src="https://cdn.plyr.io/3.7.8/plyr.polyfilled.js"></script>

        <div class="audio-footer"><audio id="player" controls src=""></audio></div>

        <script>
            const player = new Plyr('#player', {
                controls: ['play', 'progress', 'volume'],
            });

            document.querySelectorAll('.album').forEach(img => {
                img.addEventListener('click', function() {
                    const audioUrl = this.getAttribute('data-url');
                    const audio = document.getElementById('player');
                    audio.src = audioUrl;
                    audio.currentTime = 0;
                    audio.play();
                });
            });
        </script>
    `);
}

loadAudioPlayer();
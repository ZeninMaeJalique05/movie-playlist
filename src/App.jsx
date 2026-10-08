import spiritedAway from "./assets/spiritedAway.webp";
import howlsMovingCastle from "./assets/HowlsMovingCastle.webp";
import graveOfTheFireFlies from "./assets/GraveOfTheFireFlies.webp";
import ponyo from "./assets/Ponyo.jpg";
import "./App.css";

function App() {
  return (
    <div className="app">

      <header>
        <h1>Movie Playlist</h1>
      </header>

      <main>
        <section>
          <h2>Movies</h2>

          <div className="movie-grid">

            {/* Spirited Away */}
            <div className="movie-card">
              <img src={spiritedAway} alt="Spirited Away" />

              <div className="movie-info">
                <h3>Spirited Away</h3>
                <p>Anime • 2019</p>
              </div>
            </div>

            {/* Howl's Moving Castle */}
            <div className="movie-card">
              <img src={howlsMovingCastle} alt="Howl's Moving Castle" />

              <div className="movie-info">
                <h3>Howl's Moving Castle</h3>
                <p>Anime • 2014</p>
              </div>
            </div>

            {/* Grave of the Fireflies */}
            <div className="movie-card">
              <img
                src={graveOfTheFireFlies}
                alt="Grave of the Fireflies"
              />

              <div className="movie-info">
                <h3>Grave of the Fireflies</h3>
                <p>Anime • 2021</p>
              </div>
            </div>

            {/* Ponyo */}
            <div className="movie-card">
              <img src={ponyo} alt="Ponyo" />

              <div className="movie-info">
                <h3>Ponyo</h3>
                <p>Anime • 2022</p>
              </div>
            </div>

          </div>
        </section>
      </main>

    </div>
  );
}

export default App;

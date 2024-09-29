export default function aboutMe() {

    return (
        <div className="portfolio">
            <h1>Portfolio</h1>
            <section className="card-holder">
                <div className="card">
                    <img src="./src/assets/mario-randomizer-card.png" alt="Mario Cosplay Randomizer application screenshot" />
                    <h2>
                        Mario Cosplay Randomizer
                    </h2>
                    <a href="https://github.com/sketchyTK/mario-cosplay-randomizer/" target="_blank">
                        Github Repository
                    </a>
                    <a href="https://sketchytk.github.io/mario-cosplay-randomizer/" target="_blank">
                        Live Depoloyment
                    </a>
                </div>
                <div className="card">
                    <img src="./src/assets/vehicle-builder-gif.gif" alt="Animated gif rotating images of a tow truck, car, and a motorcycle doing a wheelie" />
                    <h2>
                        Vehicle Builder
                    </h2>
                    <a href="https://github.com/sketchyTK/Module-8-Challenge-Vehicle-Builder" target="_blank">
                        Github Repository
                    </a>
                    <a href="https://drive.google.com/file/d/12WuvTO3lUzOwo8BXI0xuBEojr296dbzN/view?usp=sharing" target="_blank">
                        Walkthrough Video
                    </a>
                </div>
                <div className="card">
                    <img src="./src/assets/mario-randomizer-card.png" alt="5-Day Weather Forecast" />
                    <h2>
                        Weather Dashboard
                    </h2>
                    <a href="https://github.com/sketchyTK/Module-9-Challenge-Weather-Dashboard" target="_blank">
                        Github Repository
                    </a>
                    <a href="https://module-9-challenge-weather-dashboard-hufi.onrender.com/" target="_blank">
                        Live Depoloyment
                    </a>
                </div>
            </section>
        </div>
    )
}
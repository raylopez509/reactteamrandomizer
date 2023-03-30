import "./App.css";

function App() {
    const Title = () => {
        return <h1>Team Randomizer</h1>;
    };

    const TextNames = () => {
        return (
            <textarea
                id="textarea"
                name="textarea"
                placeholder="Put list of names here separated by a new line"
                // rows="10"
                // cols="50"
            ></textarea>
        );
    };

    const TeamSelector = () => {
        return (
            <div id="teamSelector">
                <div>Select number of teams</div>
                <select name="teamQuantity" id="teamQuantity">
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
            </div>
        );
    };

    const TeamButton = () => {
        return (
            <button type="button" id="btn" onClick="getRandomTeams()">
                Get Your Teams!
            </button>
        );
    };
    return (
        <>
            <Title />
            <TextNames />
            <TeamSelector />
            <TeamButton />
        </>
    );
}

export default App;

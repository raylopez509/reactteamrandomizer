import "./App.css";
import { useState } from "react";

function App() {
    const [teamQuantity, setTeamQuantity] = useState(2);
    const Title = () => {
        return <h1>Team Randomizer</h1>;
    };

    const TextNames = () => {
        return (
            <textarea
                id="textarea"
                name="textarea"
                placeholder="Put list of names here separated by a new line"
            ></textarea>
        );
    };

    function TeamQuantity({ teamQuantity }) {
        return (
            <div id="teamQuantity">
                <div>Select number of teams</div>
                <select
                    name="teamDropdown"
                    id="teamDropdown"
                    value={teamQuantity}
                    onChange={(e) => setTeamQuantity(e.target.value)}
                >
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
            </div>
        );
    }

    const TeamButton = () => {
        return (
            <button
                type="button"
                id="btn"
                onClick={() => getRandomTeams(teamQuantity)}
            >
                Get Your Teams!
            </button>
        );
    };

    const TeamUI = () => {
        return (
            <div id="teamUI">
                <TeamQuantity teamQuantity={2} />
                <TeamButton />
            </div>
        );
    };

    function getRandomTeams(teamNumber) {
        console.log("teamnumber: " + teamNumber);
        let str = document.getElementById("textarea").value.trim();
        console.log(str);
        let players = str.split("\n");
        let teamarr = [[]];
        for (let i = 0; i < teamNumber; i++) {
            teamarr[i] = [];
        }
        let randNum = Math.floor(Math.random() * players.length);
        let playerLength = players.length;
        let team = 0;
        for (let i = 0; i < playerLength; i++) {
            let removedPlayer = players.splice(randNum, 1);
            teamarr[team].push(removedPlayer);
            team++;
            if (team >= teamNumber) {
                team = 0;
            }
            randNum = Math.floor(Math.random() * players.length);
        }
        let teamstext = "";
        let teamNum = 1;
        for (let i = 0; i < teamNumber; i++) {
            teamstext = teamstext + "Team " + teamNum + ": <br>";
            let playerNum = 1;
            for (let j = 0; j < teamarr[i].length; j++) {
                teamstext =
                    teamstext + playerNum + ". " + teamarr[i][j] + "<br>";
                playerNum++;
            }
            if (i != teamNumber) {
                teamstext = teamstext + "<br>";
            }
            // let teamId = "team" + teamNum;
            // document.getElementById(teamId).innerHTML = teamstext;
            console.log(teamstext);
            teamNum++;
            teamstext = "";
        }
    }

    return (
        <>
            <Title />
            <TextNames />
            <TeamUI />
        </>
    );
}

export default App;

import "./App.css";
import { useState } from "react";

function App() {
    const [teamQuantity, setTeamQuantity] = useState(2);
    const [team1, setTeam1] = useState("");

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

    function TeamQuantity() {
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
                onClick={
                    () => handleClick()
                    // getRandomTeams(teamQuantity)
                }
            >
                Get Your Teams!
            </button>
        );
    };

    function handleClick() {
        setTeam1(getRandomTeams(teamQuantity));
    }

    const TeamUI = () => {
        return (
            <div id="teamUI">
                <TeamQuantity teamQuantity={2} />
                <TeamButton />
            </div>
        );
    };

    const TeamList = (props) => {
        return (
            <div id={props.teamNumber} style={{ whiteSpace: "pre-line" }}>
                {props.teamText}
            </div>
        );
    };

    function getRandomTeams(teamNumber) {
        let str = document.getElementById("textarea").value.trim();
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
        let teamsText = "";
        let teamNum = 1;
        let teamString = "";
        for (let i = 0; i < teamNumber; i++) {
            teamsText = teamsText + "Team " + teamNum + ":\n";
            let playerNum = 1;
            for (let j = 0; j < teamarr[i].length; j++) {
                teamsText = teamsText + playerNum + ". " + teamarr[i][j] + "\n";
                playerNum++;
            }
            if (i != teamNumber) {
                teamsText = teamsText + "\n";
            }
            // let teamId = "team" + teamNum;
            // document.getElementById(teamId).innerHTML = teamsText;

            teamString = teamString + teamsText;
            teamNum++;
            teamsText = "";
            console.log(teamString);
        }
        return teamString;
    }

    return (
        <>
            <Title />
            <TextNames />
            <TeamUI />
            <TeamList teamNumber="1" teamText={team1} />
        </>
    );
}

export default App;

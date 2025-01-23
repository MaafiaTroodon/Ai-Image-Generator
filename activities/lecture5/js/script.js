// Arrays for Magic 8-Ball and Fortune Cookie answers
const magic8BallAnswers = [
	"It is certain", "It is decidedly so", "Without a doubt",
	"Yes definitely", "You may rely on it", "As I see it, yes",
	"Most likely", "Outlook good", "Yes", "Signs point to yes",
	"Reply hazy, try again", "Ask again later", "Better not tell you now",
	"Cannot predict now", "Concentrate and ask again",
	"Don't count on it", "My reply is no", "My sources say no",
	"Outlook not so good", "Very doubtful"
];

const fortuneCookieSayings = [
	"Do not be afraid of competition.",
	"An exciting opportunity lies ahead of you.",
	"You love peace.",
	"Get your mind set…confidence will lead you on.",
	"You will always be surrounded by true friends.",
	"Sell your ideas-they have exceptional merit.",
	"You should be able to undertake and complete anything.",
	"You are wise beyond your years.",
	"Your ability to juggle many tasks will take you far.",
	"Happy news is on its way.",
	"Plan for many pleasures ahead.",
	"The family that plays together stays together.",
	"Once you make a decision, the universe conspires to make it happen.",
	"Nothing great was ever achieved without enthusiasm.",
	"Live this day as if it were your last."
];

// Function to handle the user's question or Fortune Cookie selection
function askQuestion() {
	const userQuestion = document.getElementById("userQuestion").value.trim();
	const mode = document.getElementById("modeSelector").value;
	let answer = "";

	if (mode === "magic8ball") {
		// Magic 8-Ball mode
		if (userQuestion === "") {
			answer = "Please ask a question!";
		} else {
			answer = magic8BallAnswers[Math.floor(Math.random() * magic8BallAnswers.length)];
		}
	} else if (mode === "fortuneCookie") {
		// Fortune Cookie mode
		answer = fortuneCookieSayings[Math.floor(Math.random() * fortuneCookieSayings.length)];
	}

	// Display the answer
	document.getElementById("answer").textContent = answer;

	// Log the result for debugging
	console.log(`Mode: ${mode}, Question: ${userQuestion || "N/A"}, Answer: ${answer}`);
}

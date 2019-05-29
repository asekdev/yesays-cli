const chalk = require("chalk");

const stylizeQuote = quote => {
	let randomNo = getRandomInt(5);
	let rColourQuote;

	switch (randomNo) {
		case 1:
			rColourQuote = chalk.white(quote);
			break;
			break;
		case 2:
			rColourQuote = chalk.yellow(quote);
			break;
		case 3:
			rColourQuote = chalk.blue(quote);
			break;
		case 4:
			rColourQuote = chalk.magenta(quote);
			break;
		case 5:
			rColourQuote = chalk.cyan(quote);
			break;
		default:
			console.log("this should never hit");
			return;
	}
	console.log(rColourQuote);
};

const error = () => {
	return chalk.red.bold("Something went wrong!");
};

const getRandomInt = max => {
	return Math.floor(Math.random() * Math.floor(max) + 1);
};

module.exports = {
	stylizeQuote,
	error
};

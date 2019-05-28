const axios = require("axios");
const chalk = require("chalk");
require("dotenv").config();

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

const getRandomInt = max => {
	return Math.floor(Math.random() * Math.floor(max) + 1);
};

exports.getYeQuote = () => {
	axios
		.get(process.env.YE_ENDPOINT)
		.then(res => {
			let quote = '"' + res.data.quote + '" -Ye';
			stylizeQuote(quote);
		})
		.catch(err => {
			let error = chalk.bold.red;
			console.log(error("Looks like something went wrong. Let's try again."));
		});
};

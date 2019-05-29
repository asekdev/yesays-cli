const axios = require("axios");
const chalk = require("chalk");
const { YE_ENDPOINT } = require("../const");
const { stylizeQuote } = require("../util/helper");

const getYeQuote = () => {
	axios
		.get(YE_ENDPOINT)
		.then(res => {
			let quote = '"' + res.data.quote + '" -Ye';
			stylizeQuote(quote);
		})
		.catch(err => {
			let error = chalk.bold.red;
			console.log(err);
			console.log(error("Looks like something went wrong. Let's try again."));
		});
};

module.exports = {
	getYeQuote
};

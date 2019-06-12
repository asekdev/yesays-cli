const axios = require("axios");
const chalk = require("chalk");
const { YE_ENDPOINT } = require("../util/const");

const getYeQuote = async () => {
	return axios
		.get(YE_ENDPOINT)
		.then(res => {
			let quote = '"' + res.data.quote + '" -Ye';
			return quote;
		})
		.catch(err => {
			let error = chalk.bold.red;
			// console.log(err);
			// console.log(error("Looks like something went wrong. Let's try again."));
			return err;
		});
};

module.exports = {
	getYeQuote
};

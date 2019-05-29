#!/usr/bin/env node
const program = require("commander");
const figlet = require("figlet");
const { getYeQuote } = require("./requests/api");
const { error } = require("./util/helper");

let NO_COMMAND_SPECIFIED;

program.version("1.0.1");

program
	.command("quote")
	.alias("q")
	.description("Get a random Kanye quote")
	.action(() => {
		getYeQuote();
	});

program.parse(process.argv);
NO_COMMAND_SPECIFIED = program.args.length === 0;

if (NO_COMMAND_SPECIFIED) {
	figlet("YeSays", function(err, data) {
		if (err) {
			console.log(error());
			console.dir(err);
			return;
		}
		console.log(data);
	});
}

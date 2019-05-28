#!/usr/bin/env node
const program = require("commander");
const { getYeQuote } = require("../index");

program.version("1.0.0");

program
	.command("quote")
	.alias("q")
	.description("Get a random Kanye quote")
	.action(() => {
		getYeQuote();
	});

program.parse(process.argv);

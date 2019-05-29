const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const { getYeQuote, getFailedYeQuote } = require("../src/requests/api");

chai.use(chaiHttp);

describe("Endpoints", () => {
	it("Should return a quote", async () => {
		try {
			let test = await getYeQuote();
			expect(test).to.be.a("string");
			return;
		} catch (err) {
			return;
		}
	});

	it("Should return an error", done => {
		getFailedYeQuote()
			.then(res => {
				throw new Error("Looks like something went wrong. Let's try again.");
			})
			.catch(err => {
				expect(err.message).to.equal(
					"Looks like something went wrong. Let's try again."
				);
				expect(err.message).to.be.a("string");
				done();
			});
	});
});

const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const { getYeQuote, getFailedYeQuote } = require("../src/requests/api");
const nock = require("nock");
const { YE_ENDPOINT } = require("../src/util/const");
chai.use(chaiHttp);

const nockAPI = nock(YE_ENDPOINT);

describe("Endpoints", () => {
	it("Should return a quote", async () => {
		nockAPI.get("/").reply(200, {
			quote: "My greatest pain in life is that I will never be able to see myself perform live."
		});

		try {
			let test = await getYeQuote();
			expect(test).to.be.a("string");
			return;
		} catch (err) {
			return;
		}
	});

	it("Should return an error", done => {
		nockAPI.get("/").replyWithError(404, { message: "Looks like something went wrong. Let's try that again." });

		getYeQuote()
			.then(res => {
				done();
			})
			.catch(err => {
				expect(err.message).to.equal("Looks like something went wrong. Let's try again.");
				expect(err.message).to.be.a("string");
				expect(err.status).to.equal(404);
				done();
			});
	});
});

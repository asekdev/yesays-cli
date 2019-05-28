const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const { YE_ENDPOINT } = require("../src/const");
chai.use(chaiHttp);

describe("Endpoint", () => {
	it("Should return a quote", done => {
		chai
			.request(YE_ENDPOINT)
			.get("/")
			.end((err, res) => {
				expect(res).to.have.status(200);
				expect(res.body).to.be.instanceOf(Object);
				done();
			});
	});
});

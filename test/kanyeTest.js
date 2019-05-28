require("dotenv").config();
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../index");
const expect = chai.expect;

chai.use(chaiHttp);

describe("Endpoint", () => {
	it("Should return a quote", done => {
		chai
			.request(process.env.YE_ENDPOINT)
			.get("/")
			.end((err, res) => {
				expect(res).to.have.status(200);
				expect(res.body).to.be.instanceOf(Object);
				done();
			});
	});
});

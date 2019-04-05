"use strict";

const abbreviateName = require("./abbreviate-name");

describe("abbreviate a name", () => {
	it("should return S.H", () => {
		expect(abbreviateName("Sam Harris")).toEqual("S.H");
	});
	it("should take a single name and return the first letter", () => {
		expect(abbreviateName("Kira")).toEqual("K");
	});

	it("should tkae two names and return both first letters with a full stop in between", () => {
		expect(abbreviateName("Kira Green")).toEqual("K.G");
	});
	it("should tkae two names and return both first letters with a full stop in between and both letters are in uper case", () => {
		expect(abbreviateName("kira green")).toEqual("K.G");
	});
});

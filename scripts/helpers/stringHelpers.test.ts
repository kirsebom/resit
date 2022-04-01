import { limitLength, makeUppercase, replaceSpaces } from "./stringHelpers";

// makeUppercase function test
test("makeUppercase function works", function () {
	expect(makeUppercase("ole")).toBe("OLE");
});

// replaceSpaces function test
test("replaceSpaces function works", function () {
	expect(replaceSpaces("o l e")).toBe("o_l_e");
});

// limitLength function test
test("limitLength function works", function () {
	expect(limitLength(5, "ole-martin")).toBe("ole-m");
});

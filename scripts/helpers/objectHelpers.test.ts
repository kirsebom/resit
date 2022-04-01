import { createProduct } from "./objectHelpers";
import { limitLength, makeUppercase, replaceSpaces } from "./stringHelpers";

test("createProduct function works", function () {
	expect(
		createProduct({
			id: 1337,
			code: makeUppercase("code"),
			title: limitLength(12, replaceSpaces("hello there")),
		})
	).toEqual({
		id: 1337,
		code: "CODE",
		title: "hello_there",
	});
});

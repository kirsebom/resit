import "../sass/style.scss";
import { createProduct } from "./helpers/objectHelpers";
import {
	limitLength,
	makeUppercase,
	replaceSpaces,
} from "./helpers/stringHelpers";
import { Product } from "./helpers/objectHelpers";

const newProduct: Product = createProduct({
	id: 1337,
	code: makeUppercase("code"),
	title: limitLength(12, replaceSpaces("hello there")),
});
console.log(newProduct);

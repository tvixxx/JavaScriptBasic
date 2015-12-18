/* Create the book1 througth dot-notation and book2 througth normal method and output for in */

var book1 = {};
	book1.title = "Name";
	book1.pubYear = 1873;
	book1.price = "300$";
var book2 = {
	title : "Name2",
	"pub year" : 1943,
	price : "25$"
};
print("First book: ");
for ( i in book1) {
	print( i + ": " + book1[i] );
};
print("\n");
print("Second book: ");
for ( i in book2) {
	print( i + ": " + book2[i] );
};

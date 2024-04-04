function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("You have ordered a ".concat(size.toUpperCase(), " T-shirt with the message: \"").concat(message, "\"."));
}
// Making a large shirt with the default message
make_shirt();
// Making a medium shirt with the default message
make_shirt("medium");
// Making a shirt of any size with a different message
make_shirt("small", "Keep coding!");

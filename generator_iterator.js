function* numberGenerator() {
    yield "Welcome";
    yield "Login";
    yield "Free to use";
}

let gen = numberGenerator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);


function receivesAFunction (callback) {
    callback();
}
receivesAFunction(function () {
    console.log("this works");
});



function returnsANamedFunction () {
    return receivesAFunction;
}
returnsANamedFunction();

function returnsAnAnonymousFunction() {
    return function () {
        console.log("did it work?");
    };
}
returnsAnAnonymousFunction();
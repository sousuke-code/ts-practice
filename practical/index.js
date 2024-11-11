var quill = {
    name: 'Tom',
    role: 'front',
    follower: 1000,
};
function toUpperCase(x) {
    if (typeof x === 'string') {
        return x.toUpperCase();
    }
    return '';
}
function describeProfile(noamadWorker) {
    console.log(noamadWorker.name);
    if ('role' in noamadWorker) {
        console.log(noamadWorker.role);
    }
}
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.speak = function () {
        console.log('bow-woe');
    };
    return Dog;
}());
var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.speak = function () {
        console.log('tweet-tweet');
    };
    Bird.prototype.fly = function () {
        console.log('flutter');
    };
    return Bird;
}());
function havePet(pet) {
    pet.speak();
    if (pet instanceof Bird) {
        pet.fly();
    }
}
havePet(new Bird());

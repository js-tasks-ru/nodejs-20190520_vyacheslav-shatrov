const obj = {};

function handler(req, res) {
    obj[Math.random()] = new Array(10000000).fill("*");

    res.end("Hello world");
}

module.exports = handler;

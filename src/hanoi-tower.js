module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let obj = {};
    let res = Math.pow(2, disksNumber) - 1;
    obj.turns = res;
    obj.seconds = res / (turnsSpeed / 3600);
    return obj;
};
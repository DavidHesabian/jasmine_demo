function Thermostat(temperature) {
    this.temperature = (typeof temperature !== 'undefined' ? temperature : 20);
    this.powerSavingMode = true;
}

Thermostat.prototype.increaseTemperature = function (value) {
    if (this.temperature < this.maxTemp()) {
        this.temperature = this.temperature + value;
    }
    else
        throw new Error('No can do!');
};

Thermostat.prototype.decreaseTemperature = function (value) {
    this.temperature = this.temperature - value;
};

Thermostat.prototype.maxTemp = function () {
    if (this.powerSavingMode === true) {
        return 25;
    } else {
        return 32;
    }
};

Thermostat.prototype.changePowerSavingMode = function (boolean) {
    this.powerSavingMode = boolean;
    if (this.temperature > this.maxTemp()) {
        this.temperature = this.maxTemp();
    }
};

Thermostat.prototype.colorStatus = function () {
    if (this.temperature < 18) {
        return "Green";
    }
    else if (this.temperature <= 25) {
        return "Orange";
    }
    else {
        return "Red";
    }
};









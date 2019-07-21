"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Device = /** @class */ (function () {
    function Device(model, screen, apps, os, manufacturer) {
        this.Model = model;
        this.Screen = screen;
        this.Apps = apps;
        this.Os = os;
        this.Manufacturer = manufacturer;
        if (this.Os.toLowerCase() == 'android') {
            Device.AndroidCounter++;
        }
        else if (this.Os.toLowerCase() == 'ios') {
            Device.IphoneCounter++;
        }
        Device.total = Device.AndroidCounter + Device.IphoneCounter;
    }
    Object.defineProperty(Device.prototype, "Screen", {
        get: function () {
            return this._screen;
        },
        set: function (scr) {
            if (scr < 5 || scr > 20) {
                throw "Screen size error";
            }
            this._screen = scr;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "Os", {
        get: function () {
            return this._os;
        },
        set: function (o) {
            var os = o.toLowerCase();
            if ((os != 'android') && (os != 'ios')) {
                throw "Operation System error";
            }
            this._os = o;
        },
        enumerable: true,
        configurable: true
    });
    Device.prototype.printDevice = function () {
        return "Model: " + this.Model + " Screen: " + this.Screen + " Apps: " + this.Apps + " OS: " + this.Os + "\n        Manufacturer: " + this.Manufacturer.printManufacturer();
    };
    Device.IphoneCounter = 0;
    Device.AndroidCounter = 0;
    Device.total = 0;
    return Device;
}());
var Tablet = /** @class */ (function (_super) {
    __extends(Tablet, _super);
    function Tablet(model, screen, apps, os, manufacturer, isPro) {
        var _this = _super.call(this, model, screen, apps, os, manufacturer) || this;
        _this.IsPro = isPro;
        return _this;
    }
    Tablet.prototype.printTablet = function () {
        return "Device: " + this.printDevice() + " Pro: " + this.IsPro;
    };
    return Tablet;
}(Device));
var Phone = /** @class */ (function (_super) {
    __extends(Phone, _super);
    function Phone(model, screen, apps, os, manufacturer, sim) {
        var _this = _super.call(this, model, screen, apps, os, manufacturer) || this;
        _this.Sim = sim;
        return _this;
    }
    Phone.prototype.printPhone = function () {
        //console.log(this.printDevice(), this.Sim)
        return "Device: " + this.printDevice() + " Sim: " + this.Sim;
    };
    return Phone;
}(Device));
var Manufacturer = /** @class */ (function () {
    function Manufacturer(manCountry, estYear, serCountrys, url, name) {
        this.ManCountry = manCountry;
        this.EstYear = estYear;
        this.ServiceCountrys = serCountrys;
        this.Url = url;
        this.Name = name;
    }
    Object.defineProperty(Manufacturer.prototype, "Name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            var allowedNames = ['Samsung', 'Huwawi', 'Xiamo', 'Apple'];
            var allowedNamessLowerCase = allowedNames.map(function (n) {
                return n.toLowerCase();
            });
            if (allowedNamessLowerCase.indexOf(name.toLowerCase()) > -1) {
                this._name = name;
            }
            else {
                throw "Name error";
            }
        },
        enumerable: true,
        configurable: true
    });
    Manufacturer.prototype.printManufacturer = function () {
        return "Manufcatoring country: " + this.ManCountry + " Established year: " + this.EstYear + " Service Countrys: " + this.ServiceCountrys + " URL: " + this.Url + "  Name: " + this.Name;
    };
    return Manufacturer;
}());
function main() {
    var samsung = new Manufacturer('korea', 1988, ['israel', 'usa'], 'www.samsung.com', 'samsung');
    var apple = new Manufacturer('USA', 1970, ['israel', 'usa', 'france'], 'www.apple.com', 'apple');
    var androidPhone1 = new Phone('galaxy s5', 6, 5, 'Android', samsung, 'cellcom');
    var androidTablet1 = new Tablet('galaxy max', 15, 2, 'Android', samsung, false);
    var applePhone1 = new Phone('Iphone X', 5.5, 25, 'ios', apple, 'partner');
    var appleTablet1 = new Tablet('ipad', 13, 2, 'ios', apple, true);
    console.log(androidPhone1.printPhone());
    console.log(androidTablet1.printTablet());
    console.log(applePhone1.printPhone());
    console.log(appleTablet1.printTablet());
}

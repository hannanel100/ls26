class Device {
    Model: string;
    private _screen!: number;
    Apps: number;
    private _os!: string;
    Manufacturer: Manufacturer;
    static IphoneCounter = 0;
    static AndroidCounter = 0;
    static total = 0;

    get Screen() {
        return this._screen;
    }
    set Screen(scr) {
        if (scr < 5 || scr > 20) {
            throw "Screen size error";
        }

        this._screen = scr;
    }

    get Os(): string {
        return this._os;
    }
    set Os(o) {
        const os = o.toLowerCase();
        if ((os != 'android') && (os != 'ios')) {
            throw "Operation System error";
        }

        this._os = o;
    }
    constructor(model: string, screen: number, apps: number, os: string, manufacturer: Manufacturer) {
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
    printDevice() {
        return `Model: ${this.Model} Screen: ${this.Screen} Apps: ${this.Apps} OS: ${this.Os}
        Manufacturer: ${this.Manufacturer.printManufacturer()}`;
    }
}

class Tablet extends Device {
    IsPro: boolean;

    constructor(model: string, screen: number, apps: number, os: string, manufacturer: Manufacturer, isPro: boolean) {
        super(model, screen, apps, os, manufacturer);
        this.IsPro = isPro;

    }

    printTablet() {
        return `Device: ${this.printDevice()} Pro: ${this.IsPro}`;
    }
}

class Phone extends Device {
    Sim: string;

    constructor(model: string, screen: number, apps: number, os: string, manufacturer: Manufacturer, sim: string) {
        super(model, screen, apps, os, manufacturer);
        this.Sim = sim;

    }

    printPhone() {
        //console.log(this.printDevice(), this.Sim)
        return `Device: ${this.printDevice()} Sim: ${this.Sim}`;
    }
}

class Manufacturer {
    ManCountry: string;
    EstYear: number;
    ServiceCountrys: string[];
    Url: string;
    _name!: string;

    get Name(): string {
        return this._name;
    }
    set Name(name: string) {
        const allowedNames = ['Samsung', 'Huwawi', 'Xiamo', 'Apple'];
        const allowedNamessLowerCase = allowedNames.map(function (n: string) {
            return n.toLowerCase()
        });
        if (allowedNamessLowerCase.indexOf(name.toLowerCase()) > -1) {
            this._name = name;
        }
        else {
            throw "Name error";
        }
    }

    constructor(manCountry: string, estYear: number, serCountrys: string[], url: string, name: string) {
        this.ManCountry = manCountry;
        this.EstYear = estYear;
        this.ServiceCountrys = serCountrys;
        this.Url = url;
        this.Name = name;
    }
    printManufacturer() {
        return `Manufcatoring country: ${this.ManCountry} Established year: ${this.EstYear} Service Countrys: ${this.ServiceCountrys} URL: ${this.Url}  Name: ${this.Name}`;
    }



}
function main() {
    const samsung = new Manufacturer('korea', 1988, ['israel', 'usa'], 'www.samsung.com', 'samsung');
    const apple = new Manufacturer('USA', 1970, ['israel', 'usa', 'france'], 'www.apple.com', 'apple');

    const androidPhone1 = new Phone('galaxy s5', 6, 5, 'Android', samsung, 'cellcom');
    const androidTablet1 = new Tablet('galaxy max', 15, 2, 'Android', samsung, false);
    const applePhone1 = new Phone('Iphone X', 5.5, 25, 'ios', apple, 'partner');
    const appleTablet1 = new Tablet('ipad', 13, 2, 'ios', apple, true);

    console.log(androidPhone1.printPhone());

    console.log(androidTablet1.printTablet());

    console.log(applePhone1.printPhone());

    console.log(appleTablet1.printTablet());
}
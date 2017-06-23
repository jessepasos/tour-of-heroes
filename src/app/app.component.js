"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var HEROES = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
        this.heroes = HEROES;
    }
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n<h1>{{title}}</h1>\n\n<h2>My Heroes</h2>\n<ul class=\"heroes\">\n\t<li *ngFor=\"let hero of heroes\" (click)=\"onSelect(hero)\">\n\t\t<span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n\t</li>\n</ul>\n<div *ngIf=\"selectedHero\">\n\t<h2>{{selectedHero.name}} details!</h2>\n\t<div><label>id: </label>{{selectedHero.id}}</div>\n\t<div>\n\t    <label>name: </label>\n\t    <input [(ngModel)]=\"selectedHero.name\" placeholder=\"name\"/>\n\t</div>\n</div>",
        styles: ["\n.selected {\n\tbackground-color: #CFD8DC !important;\n\tcolor: white;\n}\n.heroes {\n\tmargin: 0 0 2em 0;\n\tlist-style-type: none;\n\tpadding: 0;\n\twidth: 15em;\n}\n.heroes li {\n\tcursor: pointer;\n\tposition: relative;\n\tleft: 0;\n\tbackground-color: #EEE;\n\tmargin: .5em;\n\tpadding: .3em 0;\n\theight: 1.6em;\n\tborder-radius: 4px;\n}\n.heroes li.selected:hover {\n\tbackground-color: #BBD8DC !important;\n\tcolor: white;\n}\n.heroes li:hover {\n\tcolor: #607D8B;\n\tbackground-color: #DDD;\n\tleft: .1em;\n}\n.heroes .text {\n\tposition: relative;\n\ttop: -3px;\n}\n.heroes .badge {\n\tdisplay: inline-block;\n\tfont-size: small;\n\tcolor: white;\n\tpadding: 0.8em 0.7em 0 0.7em;\n\tbackground-color: #607D8B;\n\tline-height: 1em;\n\tposition: relative;\n\tleft: -1px;\n\ttop: -4px;\n\theight: 1.8em;\n\tmargin-right: .8em;\n\tborder-radius: 4px 0 0 4px;\n}\n"]
    })
], AppComponent);
exports.AppComponent = AppComponent;
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
exports.Hero = Hero;
//# sourceMappingURL=app.component.js.map
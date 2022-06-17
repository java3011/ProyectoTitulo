"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NoticiasComponent = void 0;
var core_1 = require("@angular/core");
var noticias_1 = require("../../Interfaces/noticias");
var NoticiasComponent = /** @class */ (function () {
    function NoticiasComponent(ruta) {
        var _this = this;
        this.ruta = ruta;
        this.ListaNoticias = noticias_1.ListaNoticias;
        this.id = 0;
        this.ruta.params.subscribe(function (datos) {
            _this.id = datos["id"];
        });
    }
    NoticiasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Noticia = noticias_1.ListaNoticias.find(function (objeto) { return objeto.id == _this.id; });
    };
    NoticiasComponent = __decorate([
        core_1.Component({
            selector: 'app-noticias',
            templateUrl: './noticias.component.html',
            styleUrls: ['./noticias.component.scss']
        })
    ], NoticiasComponent);
    return NoticiasComponent;
}());
exports.NoticiasComponent = NoticiasComponent;

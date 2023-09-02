"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LookupmasterModule = void 0;
const lookupmaster_controller_1 = require("./lookupmaster.controller");
const lookupmaster_service_1 = require("./lookupmaster.service");
const common_1 = require("@nestjs/common");
let LookupmasterModule = class LookupmasterModule {
};
LookupmasterModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [lookupmaster_controller_1.LookupmasterController],
        providers: [lookupmaster_service_1.LookupmasterService],
    })
], LookupmasterModule);
exports.LookupmasterModule = LookupmasterModule;
//# sourceMappingURL=lookupmaster.module.js.map
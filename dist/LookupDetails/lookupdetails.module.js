"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LookupDetailsModule = void 0;
const common_1 = require("@nestjs/common");
const lookupdetails_controller_1 = require("./lookupdetails.controller");
const lookupdetails_service_1 = require("./lookupdetails.service");
let LookupDetailsModule = class LookupDetailsModule {
};
LookupDetailsModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [lookupdetails_controller_1.LookupDetailsController],
        providers: [lookupdetails_service_1.LookupDetailsService],
    })
], LookupDetailsModule);
exports.LookupDetailsModule = LookupDetailsModule;
//# sourceMappingURL=lookupdetails.module.js.map
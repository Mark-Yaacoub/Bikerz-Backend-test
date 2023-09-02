"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScreenModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const screen_controller_1 = require("./screen.controller");
const screen_service_1 = require("./screen.service");
const screen_repo_1 = require("./screen.repo");
const auth_module_1 = require("../auth/auth.module");
let ScreenModule = class ScreenModule {
};
ScreenModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([screen_repo_1.ScreenRepo]),
            auth_module_1.AuthModule,
        ],
        controllers: [screen_controller_1.ScreenController],
        providers: [screen_service_1.ScreenService],
    })
], ScreenModule);
exports.ScreenModule = ScreenModule;
//# sourceMappingURL=screen.module.js.map
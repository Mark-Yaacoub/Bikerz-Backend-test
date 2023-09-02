"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User_screensModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const user_screens_controller_1 = require("./user_screens.controller");
const user_screens_service_1 = require("./user_screens.service");
const common_1 = require("@nestjs/common");
const user_screens_repo_1 = require("./user_screens.repo");
const auth_module_1 = require("../auth/auth.module");
let User_screensModule = class User_screensModule {
};
User_screensModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_screens_repo_1.userScreensRepo]), auth_module_1.AuthModule],
        controllers: [user_screens_controller_1.User_screensController],
        providers: [user_screens_service_1.User_screensService],
    })
], User_screensModule);
exports.User_screensModule = User_screensModule;
//# sourceMappingURL=user_screens.module.js.map
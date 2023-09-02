"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRuleModule = void 0;
const common_1 = require("@nestjs/common");
const userRule_service_1 = require("./userRule.service");
const userrule_controller_1 = require("./userrule.controller");
const userRule_repo_1 = require("./userRule.repo");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("../auth/auth.module");
let UserRuleModule = class UserRuleModule {
};
UserRuleModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([userRule_repo_1.userRulesRepo]), auth_module_1.AuthModule],
        controllers: [userrule_controller_1.UserRuleController],
        providers: [userRule_service_1.UserRuleService],
    })
], UserRuleModule);
exports.UserRuleModule = UserRuleModule;
//# sourceMappingURL=userRule.module.js.map
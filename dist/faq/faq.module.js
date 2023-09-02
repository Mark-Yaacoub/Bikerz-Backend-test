"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.faqModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const faq_controller_1 = require("./faq.controller");
const faq_service_1 = require("./faq.service");
const common_1 = require("@nestjs/common");
const faq_repository_1 = require("./faq.repository");
const auth_module_1 = require("../auth/auth.module");
let faqModule = class faqModule {
};
faqModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([faq_repository_1.FaqRepository]), auth_module_1.AuthModule],
        controllers: [faq_controller_1.FaqController],
        providers: [faq_service_1.FaqService],
    })
], faqModule);
exports.faqModule = faqModule;
//# sourceMappingURL=faq.module.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrainerInfoModule = void 0;
const common_1 = require("@nestjs/common");
const trainer_info_service_1 = require("./trainer_info.service");
const trainer_info_controller_1 = require("./trainer_info.controller");
let TrainerInfoModule = class TrainerInfoModule {
};
TrainerInfoModule = __decorate([
    (0, common_1.Module)({
        providers: [trainer_info_service_1.TrainerInfoService],
        controllers: [trainer_info_controller_1.TrainerInfoController]
    })
], TrainerInfoModule);
exports.TrainerInfoModule = TrainerInfoModule;
//# sourceMappingURL=trainer_info.module.js.map
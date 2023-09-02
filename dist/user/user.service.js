"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_repo_1 = require("./user.repo");
const typeorm_1 = require("@nestjs/typeorm");
const email_dto_1 = require("../SendEmail/dto/email.dto");
const sendemail_service_1 = require("../SendEmail/sendemail.service");
let UserService = class UserService {
    constructor(UserRepo, SendEmailService) {
        this.UserRepo = UserRepo;
        this.SendEmailService = SendEmailService;
    }
    async reSendOtp(id) {
        try {
            const user = await this.UserRepo.findOne(id);
            const otp = this.generateRandomOTP();
            user.otp = parseInt(otp);
            let newOtp = await this.UserRepo.save(user);
            let emailBody = new email_dto_1.EmailDto();
            emailBody.recipient = user.email;
            emailBody.otp = newOtp.otp;
            let sendEmail = await this.SendEmailService.sendEmailOtp(emailBody);
            return {
                status: 200,
                message: 'A new OTP has been sent to your registered email',
            };
        }
        catch (err) {
            throw err;
        }
    }
    generateRandomOTP() {
        const min = 1000;
        const max = 9999;
        const otp = Math.floor(Math.random() * (max - min + 1)) + min;
        return otp.toString();
    }
    async validateUserPassword(dto) {
        const { email, password } = dto;
        const _user = await this.UserRepo.findOne({
            where: { email },
        });
        if (_user) {
            const valid = await _user.compareUserPassword(password);
            if (valid) {
                return _user;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_repo_1.UserRepo)),
    __metadata("design:paramtypes", [user_repo_1.UserRepo,
        sendemail_service_1.SendEmailService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map
import { Injectable } from '@nestjs/common';
import { UserRepo } from './user.repo';
import { InjectRepository } from '@nestjs/typeorm';
import { EmailDto } from 'src/SendEmail/dto/email.dto';
import { SendEmailService } from 'src/SendEmail/sendemail.service';
import { signinOrgDTO, signinRestDTO, userOrgDto } from './dto/user.dto';
import { getManager } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepo) private UserRepo: UserRepo,
    private SendEmailService: SendEmailService,
  ) {}

  async reSendOtp(id: number): Promise<any> {
    try {
      const user = await this.UserRepo.findOne(id);
      const otp = this.generateRandomOTP();
      user.otp = parseInt(otp);
      let newOtp = await this.UserRepo.save(user);
      // console.log(newOtp);
 
      let emailBody = new EmailDto();
      emailBody.recipient = user.email;
      emailBody.otp = newOtp.otp;

      let sendEmail = await this.SendEmailService.sendEmailOtp(emailBody);
      // console.log(sendEmail);

      return {
        status: 200,
        message: 'A new OTP has been sent to your registered email',
      };
    } catch (err) {
      // console.log(err);
      throw err;
    }
  }

  generateRandomOTP(): string {
    const min = 1000;
    const max = 9999;
    const otp = Math.floor(Math.random() * (max - min + 1)) + min;
    return otp.toString();
  }

  async validateUserPassword(dto: signinOrgDTO): Promise<any> {
    const { email, password } = dto;
    const _user = await this.UserRepo.findOne({
      where: { email },
    });
    // console.log(_user);

    if (_user) {
      const valid = await _user.compareUserPassword(password);
      if (valid) {
        return _user;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

}

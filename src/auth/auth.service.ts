import { Injectable } from '@nestjs/common';
import { EmailDto, SendNewPaasword } from 'src/SendEmail/dto/email.dto';
import { SendEmailService } from 'src/SendEmail/sendemail.service';

@Injectable()
export class AuthService {}

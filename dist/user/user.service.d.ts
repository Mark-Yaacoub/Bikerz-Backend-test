import { UserRepo } from './user.repo';
import { SendEmailService } from 'src/SendEmail/sendemail.service';
import { signinOrgDTO } from './dto/user.dto';
export declare class UserService {
    private UserRepo;
    private SendEmailService;
    constructor(UserRepo: UserRepo, SendEmailService: SendEmailService);
    reSendOtp(id: number): Promise<any>;
    generateRandomOTP(): string;
    validateUserPassword(dto: signinOrgDTO): Promise<any>;
}

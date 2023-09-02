export declare class SendEmailService {
    private transporter;
    constructor();
    sendEmailOtp({ recipient, otp }: {
        recipient: any;
        otp: any;
    }): Promise<any>;
    sendEmailNewPassword({ recipient, password }: {
        recipient: any;
        password: any;
    }): Promise<any>;
    sendSubscriptionExpiredEmail(email: string, Organization_name_en: string): Promise<void>;
    sendEmailForAddRestaurantUser(dto: any): Promise<any>;
}

export declare class userOrgDto {
    status: number;
    email: string;
    password: string;
    salt: string;
    imageUrl: string;
    verified: number;
    login_Befour: number;
    phoneNumber: string;
    user_type: number;
    otp: number;
    userRole: number;
    created_by: number;
    organization_id: number;
}
export declare class forgetPassword {
    email: string;
    organization_id: number;
}
export declare class signinOrgDTO {
    email: string;
    password: string;
}
export declare class signinRestDTO {
    email: string;
    password: string;
    organization_id: number;
}

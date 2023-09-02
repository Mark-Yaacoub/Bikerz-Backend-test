import {
  IsEmail,
  IsNotEmpty,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class userOrgDto {
  status: number;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(20, {
    message:
      'Please Use Strong Password with a maximum length of 20 characters.',
  })
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Please Use Strong Password.',
  })
  password: string;
  salt: string;

  imageUrl: string;
  verified: number;
  login_Befour: number;
  phoneNumber: string;

  user_type: number;
  otp: number;
  userRole: number;

  // @IsNotEmpty()
  created_by: number;

  organization_id: number;
}

export class forgetPassword{
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  organization_id: number;
  

};

export class signinOrgDTO {
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}

export class signinRestDTO {
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  organization_id: number;
}

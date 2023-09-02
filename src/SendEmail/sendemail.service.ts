import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class SendEmailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',

      auth: {
        user: process.env.userEmail,
        pass: process.env.passEmail,
      },
      secure: true,
      disableUrlAccess: true,
      disableFileAccess: true,
    });
  }

  async sendEmailOtp({ recipient, otp }): Promise<any> {
    const recipientName = recipient.split('@')[0]; 
    const htmlContent = `
  
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>OTP Verification</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f3f3f3; padding: 20px; text-align: left; direction: ltr;">
  <div style="background-color: #ffffff; border-radius: 5px; padding: 20px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);">
    <h2 style="color: #333333;">OTP Verification</h2>
    <p style="color: #666666;">Dear ${recipientName}</p>
    <p style="color: #666666;">Your OTP is: ${otp}</p>
    <p style="color: #666666;">Please use this OTP to verify your account.</p>
    <p style="color: #666666;">For security reasons, do not share this OTP with anyone.👌</p>
    <p style="color: #666666;">If you didn't request this OTP, please ignore this message.</p>

   
    <p style="color: #666666;">If you have any questions or need assistance, please don't hesitate to contact our support team at [support@restomanager.com] or call [01281151982].</p>
    <p style="color: #666666;">Thank you for using our services.</p>
    <p style="color: #666666;">Best regards,<br>[RestoManager Team]</p>
  </div>
</body>
</html>

  
  `;

    const mailOptions = {
      from: process.env.userEmail,
      to: recipient,
      subject: 'To Verify Your Account',
      html: htmlContent,
    };

    this.transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        // throw error;
      } else {
        // console.log('Email sent successfully:', info.response);
      }
    });
  }

  async sendEmailNewPassword({ recipient, password }): Promise<any> {
    const recipientName = recipient.split('@')[0]; 
    const htmlContent = `
   
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f3f3f3; padding: 20px; text-align: left; direction: ltr;">
  <div style="background-color: #ffffff; border-radius: 5px; padding: 20px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);">
    <h2 style="color: #333333;">Password Reset</h2>
    <p style="color: #666666;">Dear ${recipientName}</p>
    <p style="color: #666666;">Your New Password is: ${password}</p>
    <p style="color: #666666;">Please use this password to log in to your account. </p>
    <p style="color: #666666;">For security reasons, we recommend that you log in to your account and change the password to something more memorable. 👌</p>
    <p style="color: #666666;">If you didn't request this change, please contact our support team immediately at [support@restomanager.com] or call [01281151982].</p>

   
    <p style="color: #666666;">If you have any questions or need assistance, please don't hesitate to contact our support team at [support@restomanager.com] or call [01281151982].</p>
    <p style="color: #666666;">Thank you for using our services.</p>
    <p style="color: #666666;">Best regards,<br>[RestoManager Team]</p>
  </div>
</body>
</html>

    `;
  
    const mailOptions = {
      from: process.env.userEmail,
      to: recipient,
      subject: 'Password Reset',
      html: htmlContent,
    };
  
    this.transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        // throw error;
      } else {
        // console.log('Email sent successfully:', info.response);
      }
    });
  }

async sendSubscriptionExpiredEmail(email: string, Organization_name_en: string): Promise<void> {
  // const recipientName = email.split('@')[0]; 
  const htmlContent = `
    <
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Subscription Expired</title>
    </head>
    <body style="font-family: Arial, sans-serif; background-color: #f3f3f3; padding: 20px; text-align: left; direction: ltr;">
      <div style="background-color: #ffffff; border-radius: 5px; padding: 20px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);">
        <h2 style="color: #333333;">Subscription Expired!</h2>
        <p style="color: #666666;">Dear ${Organization_name_en}</p>
        <p style="color: #666666;">Unfortunately we would like to tell you that 😣😓☹️☹️</p>
        <p style="color: #666666;">Your subscription has expired. Please renew your subscription to continue enjoying our services.</p>
    
       
        <p style="color: #666666;">If you have any questions or need assistance, please don't hesitate to contact our support team at [support@restomanager.com] or call [01281151982].</p>
        <p style="color: #666666;">Thank you for using our services.</p>
        <p style="color: #666666;">Best regards,<br>[RestoManager Team]</p>
      </div>
    </body>
    </html>
    
  `;

  const mailOptions = {
    from: process.env.userEmail,
    to: email,
    subject: 'Subscription Expired',
    html: htmlContent,
  };

  this.transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      // console.log('Email sent successfully:', info.response);
    }
  });
}


async sendEmailForAddRestaurantUser(dto: any): Promise<any> {
  const recipientName = dto.email.split('@')[0]; 
  const htmlContent = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to RestoManager</title>
  </head>
  <body style="font-family: Arial, sans-serif; background-color: #f3f3f3; padding: 20px; text-align: left; direction: ltr;">
    <div style="background-color: #ffffff; border-radius: 5px; padding: 20px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);">
      <h2 style="color: #333333;">Welcome to RestoManager!</h2>
      <p style="color: #666666;">Dear ${recipientName},</p>
      <p style="color: #666666;">We're excited to let you 😍😁😊 know that you have been added as a manager to a restaurant <span style="color: blue;">${dto.restaurant_name_en}</span> under the <span style="color: blue;">${dto.Organization_name_en}</span> organization.</p>
      <p style="color: #666666;">Here are your account details:</p>
      <ul style="color: #666666;">
        <li>Email: <span style="color: blue;">${dto.email}</span></li>
        <li>Password: <span style="color: blue;">${dto.password}</span></li>
        <li>Organization ID: <span style="color: blue;">${dto.organizationId}</span></li>
        <p style="color: #666666;">Your OTP for account activation is: <span style="color: blue;">${dto.otp}</span></p>

      </ul>
      <p style="color: #666666;">You can now log in using your email and password and Organization ID to manage the restaurant and access our services.</p>
      <p style="color: #666666;">If you have any questions or need assistance, please don't hesitate to contact our support team at [support@restomanager.com] or call [01281151982].</p>
      <p style="color: #666666;">Thank you for joining us!</p>
      <p style="color: #666666;">Best regards,<br>[RestoManager Team]</p>
    </div>
  </body>
  </html>
`;




  const mailOptions = {
    from: process.env.userEmail,
    to: dto.email,
    subject: 'Add To Systam',
    html: htmlContent,
  };

  this.transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      // console.log('Email sent successfully:', info.response);
    }
  });
}




}

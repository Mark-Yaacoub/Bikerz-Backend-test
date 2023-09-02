import { EntityRepository, Repository, getManager } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { LookupEnum } from 'src/shared/lookup.enum';
import { NotAcceptableException } from '@nestjs/common';
import { userOrgDto } from './dto/user.dto';
import { users } from './user.entity';

@EntityRepository(users)
export class UserRepo extends Repository<users> {
  async createUserForOrganization(dto: userOrgDto): Promise<any> {
    const { email, password, phoneNumber, created_by } = dto;

    try {
      const user = new users();

      user.salt = await bcrypt.genSalt();
      user.password = await this.hashPassword(password, user.salt);

      user.email = email;
      user.imageUrl = 'default-user.jpeg';
      user.created_by = created_by;
      user.user_type = LookupEnum.owner_organization;
      user.userRole = LookupEnum.organization_owner;
      user.status = LookupEnum.Enabled;
      user.verified = 0;
      user.phoneNumber = phoneNumber;

      await user.save();

      return user;
    } catch (error) {
      // console.log(error);

      if (error.code === 'ER_DUP_ENTRY') {
        const duplicateField = error.sqlMessage.match(/'([^']+)'/)[1];
        const errorMessageEn = `Duplicate entry for field: ${duplicateField}`;
        const errorMessageAr = `هذه البيانات موجوده بالفعل: ${duplicateField}`;
        return {
          status: 400,
          errorEN: errorMessageEn,
          errorAr: errorMessageAr,
        };
      }
      throw error;
    }
  }

  async createUserForRestaurant(dto: userOrgDto): Promise<any> {
    const { email, password, organization_id, phoneNumber, created_by } = dto;

    try {
      const user = new users();

      user.salt = await bcrypt.genSalt();
      user.password = await this.hashPassword(password, user.salt);

      user.email = email;
      user.imageUrl = 'default-user.jpeg';
      user.created_by = created_by;
      user.user_type = LookupEnum.user_organization;
      user.userRole = LookupEnum.Restaurant_Manager;
      user.status = LookupEnum.Enabled;
      user.verified = 0;
      user.phoneNumber = phoneNumber;

      await user.save();

      return user;
    } catch (error) {
      // console.log(error);

      if (error.code === 'ER_DUP_ENTRY') {
        const duplicateField = error.sqlMessage.match(/'([^']+)'/)[1];
        const errorMessageEn = `Duplicate entry for field: ${duplicateField}`;
        const errorMessageAr = `هذه البيانات موجوده بالفعل: ${duplicateField}`;
        return {
          status: 400,
          errorEN: errorMessageEn,
          errorAr: errorMessageAr,
        };
      }
      throw error;
    }
  }

  async hashPassword(password: string, salt: string): Promise<string> {
    return await bcrypt.hash(password, salt);
  }

  async userData(email: string): Promise<any> {
    let data;
    await getManager().transaction(async (manager) => {
      data = await manager.query(`
        SELECT * FROM "User" WHERE email = $1
      `, [email]);
    });
    return data;
  }





  

  


  








}

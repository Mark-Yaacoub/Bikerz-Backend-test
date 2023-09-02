import { Repository } from 'typeorm';
import { userOrgDto } from './dto/user.dto';
import { users } from './user.entity';
export declare class UserRepo extends Repository<users> {
    createUserForOrganization(dto: userOrgDto): Promise<any>;
    createUserForRestaurant(dto: userOrgDto): Promise<any>;
    hashPassword(password: string, salt: string): Promise<string>;
    userData(email: string): Promise<any>;
}

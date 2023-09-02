import { jwtPayload } from './auth.model';
import { UserRepo } from 'src/user/user.repo';
declare const jwtStrategy_base: new (...args: any[]) => any;
export declare class jwtStrategy extends jwtStrategy_base {
    private _userRepo;
    constructor(_userRepo: UserRepo);
    validate(payload: jwtPayload): Promise<any>;
}
export {};

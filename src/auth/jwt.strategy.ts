import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { jwtPayload } from './auth.model';
import { UserRepo } from 'src/user/user.repo';

@Injectable()
export class jwtStrategy extends PassportStrategy(Strategy) {
  constructor(private _userRepo: UserRepo) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'defaultsecrete',
    });
  }

  async validate(payload: jwtPayload): Promise<any> {
    const { email }: any = payload;
    const _user = await this._userRepo.userData(email);

    if (!_user) {
      throw new UnauthorizedException();
    }
    return _user;
  }
}

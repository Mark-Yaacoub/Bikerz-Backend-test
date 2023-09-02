import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { ScreenRepo } from './screen.repo';
import { InjectRepository } from '@nestjs/typeorm';
import { ScreenDTO } from './dto/screen.dto';
import { LookupEnum } from 'src/shared/lookup.enum';
import { ErrorEnum } from 'src/shared/err.enum';
import { JwtVerification } from 'src/auth/jwt.verification';
import { User_screensService } from 'src/user_screens/user_screens.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class ScreenService {
  constructor(
    @InjectRepository(ScreenRepo) private ScreenRepo: ScreenRepo,
  ) {}

}

import { Repository } from 'typeorm';
import { userScreens } from './user_screens.entity';
import { userScreensDto } from './dto/userScreens.dto';
export declare class userScreensRepo extends Repository<userScreens> {
    status: any;
    createuserScreens(dto: userScreensDto): Promise<any>;
    getAllScreenUser(): Promise<any>;
    getAll(): Promise<userScreens[]>;
    getStatus(status: number): Promise<userScreens[]>;
    getAllByStatus(): Promise<userScreens[]>;
    changeStatus(id: number, status: number): Promise<any>;
    getAllScrrenByUser(user_id: number): Promise<any>;
}

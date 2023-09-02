import { userScreensRepo } from './user_screens.repo';
import { userScreensDto } from './dto/userScreens.dto';
import { userScreens } from './user_screens.entity';
export declare class User_screensService {
    private userScreensRepo;
    constructor(userScreensRepo: userScreensRepo);
    createuserScreens(dto: userScreensDto): Promise<userScreens>;
    getOneuserScreens(id: number): Promise<any>;
    update(id: number, dto: userScreensDto): Promise<any>;
    delete(id: number): Promise<any>;
    getStatus(status: number): Promise<userScreens[]>;
    getAllActiveuserScreens(): Promise<userScreens[]>;
    getAlluserScreens(req: any): Promise<userScreens[]>;
    changeStatus(id: number, updateStatusDto: any): Promise<any>;
    getAllScrrenByUser(user_id: number): Promise<any>;
}

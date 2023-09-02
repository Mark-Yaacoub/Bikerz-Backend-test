import { User_screensService } from './user_screens.service';
import { userScreens } from './user_screens.entity';
import { userScreensDto } from './dto/userScreens.dto';
export declare class User_screensController {
    private User_screensService;
    constructor(User_screensService: User_screensService);
    getStatus(status: number): Promise<userScreens[]>;
    getAllActiveUserScreens(): Promise<userScreens[]>;
    getOne(id: number): Promise<userScreens>;
    getAll(req: any): Promise<userScreens[]>;
    createuserScreens(dto: userScreensDto): Promise<userScreens>;
    updateUsersRule(id: number, dto: userScreensDto): Promise<any>;
    delete(id: number): Promise<void>;
    changeStatus(dto: userScreensDto, req: any, id: number): Promise<any>;
}

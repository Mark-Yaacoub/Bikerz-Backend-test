import { Screen } from 'src/screens/screen.entity';
import { users } from 'src/user/user.entity';
import { BaseEntity } from 'typeorm';
export declare class userScreens extends BaseEntity {
    userScreens_id: number;
    status: number;
    users: users;
    user_id: number;
    screen: Screen;
    screen_id: number;
    insertDates(): void;
    createdDate: Date;
    created_by: number;
    updateDates(): void;
    updatedDate: Date;
    updated_by: number;
}

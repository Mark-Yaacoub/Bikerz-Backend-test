import { Repository } from 'typeorm';
import { Screen } from './screen.entity';
import { ScreenDTO } from './dto/screen.dto';
import { LookupEnum } from 'src/shared/lookup.enum';
export declare class ScreenRepo extends Repository<ScreenRepo> {
    status: LookupEnum;
    createScreen(dto: ScreenDTO): Promise<Screen>;
    getStatus(status: number): Promise<Screen[]>;
    getAllByStatus(): Promise<Screen[]>;
    getAllScreens(): Promise<Screen[]>;
    changeStatus(id: number, status: number): Promise<any>;
}

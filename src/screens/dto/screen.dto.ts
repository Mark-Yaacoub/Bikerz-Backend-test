import { IsNotEmpty } from 'class-validator';

export class ScreenDTO {
  status: number;

  @IsNotEmpty()
  screen_ar_name: string;

  @IsNotEmpty()
  screen_en_name: string;
  @IsNotEmpty()
  screen_category: number;

  @IsNotEmpty()
  created_by: number;

  updated_by: number;

  created_date: Date;

  updated_date: Date;
}

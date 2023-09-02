import { IsNotEmpty } from 'class-validator';

export class RulesDTO {
  status: number;

  @IsNotEmpty()
  rule_en: string;

  @IsNotEmpty()
  rule_ar: string;

  type: number;

  @IsNotEmpty()
  created_by: number;

  updated_by: number;

  created_date: Date;

  updated_date: Date;
}

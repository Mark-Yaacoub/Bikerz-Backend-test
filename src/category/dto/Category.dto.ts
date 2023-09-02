import { IsNotEmpty, Length } from "class-validator";

export class categoryDTO {
    status: number;
  
    @IsNotEmpty()
    @Length(1, 50, { message: 'category name english must be between 1 and 50 characters' })
    category_name_en: string;
  
    @IsNotEmpty()
    @Length(1, 50, { message: 'category name arabic must be between 1 and 50 characters' })
    category_name_ar: string;
  
    @IsNotEmpty()
    @Length(1, 100, { message: 'category description  must be between 1 and 100 characters' })
    description: string;
    
    organization_id: number;
  
  }

  export class UpdatecategoryDTO {
    status: number;
  
    @IsNotEmpty()
    @Length(1, 50, { message: 'category name english must be between 1 and 50 characters' })
    category_name_en: string;
  
    @IsNotEmpty()
    @Length(1, 50, { message: 'category name arabic must be between 1 and 50 characters' })
    category_name_ar: string;
  
    @IsNotEmpty()
    @Length(1, 100, { message: 'category description  must be between 1 and 100 characters' })
    description: string;
      
  }

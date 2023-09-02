import { IsIn, IsNotEmpty, IsOptional } from "class-validator";

export class userScreensDto{


     @IsNotEmpty()
     user_id: number;
     
 
     @IsNotEmpty()
     screen_id: number;
     

     @IsIn([1,59])
     @IsOptional()
     status: number;
     
 
     @IsNotEmpty()
     created_by : number;
     
 
     @IsOptional()
     updated_by : number;
 
  
     createdDate: Date;
 
     updatedDate: Date;
 }
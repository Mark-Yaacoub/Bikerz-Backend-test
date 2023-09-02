import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, MaxLength, MinLength } from "class-validator";


export class faqDto  {

    @ApiProperty({
        description: "question arabic",
        type: String,
      })
      @IsNotEmpty()
      question_ar: string;

      @ApiProperty({
        description: "question english",
        type: String,
      })
      @IsNotEmpty()
      question_en: string;

      @ApiProperty({
        description: "answer arabic",
        type: String,
      })
      @IsNotEmpty()
      answer_ar: string;

      @ApiProperty({
        description: "answer english",
        type: String,
      })
      @IsNotEmpty()
      answer_en: string;

      @ApiPropertyOptional({
        description: "useful question",
        type: Number,
      })
      @IsOptional()
      useful: number;

      @ApiPropertyOptional({
        description: "not useful question",
        type: Number,
      })
      @IsOptional()
      not_useful: number;

      @IsOptional()

      status: number;
      @IsNotEmpty()
      created_by: number;

      
      created_date: Date;
      updated_date: Date;
      updated_by: number;
};

export class updateFaqDto  {

    @ApiProperty({
        description: "question arabic",
        type: String,
      })
      @IsNotEmpty()
      question_ar: string;

      @ApiProperty({
        description: "question english",
        type: String,
      })
      @IsNotEmpty()
      question_en: string;

      @ApiProperty({
        description: "answer arabic",
        type: String,
      })
      @IsNotEmpty()
      answer_ar: string;

      @ApiProperty({
        description: "answer english",
        type: String,
      })
      @IsNotEmpty()
      answer_en: string;

      @ApiPropertyOptional({
        description: "useful question",
        type: Number,
      })
      @IsOptional()
      useful: number;

      @ApiPropertyOptional({
        description: "not useful question",
        type: Number,
      })
      @IsOptional()
      not_useful: number;

      @IsOptional()

      status: number;
      created_by: number;
      created_date: Date;
      updated_date: Date;
      updated_by: number;
};

export class updateQuestionStatusDto{
  @ApiProperty({
      description: 'status ',
      type: Number
  })
  status: number;  
};
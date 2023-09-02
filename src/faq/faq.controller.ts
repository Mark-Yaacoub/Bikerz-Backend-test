import { Body, Controller , Get , Param, ParseIntPipe, Post , Delete , Put, Request, UsePipes, ValidationPipe, UseGuards} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { FaqService } from './faq.service';
import { Faq } from './faq.entity';
import { faqDto, updateFaqDto } from './dto/faq.dto';
import { AuthGuard } from '@nestjs/passport';
import { updateStatusDto } from 'src/shared/shard.dto';

@Controller('faq')
// @UseGuards(AuthGuard())
export class FaqController {

    constructor(private faqServices:FaqService){};

    @Post()
    @UsePipes(new ValidationPipe())
    createNewQuestion(@Body() dto: faqDto, @Request() req): Promise<Faq> {
        return this.faqServices.createNewQuestion(dto, req);
    };
    @Get('/getAllActiveQuestions')
    getAllActiveQuestions(): Promise<Faq[]> {
        return this.faqServices.getAllActiveQuestions();
    };

    @Get()
    getAllQuestions(): Promise<Faq[]> {
        return this.faqServices.getAllQuestions();
    };

    @Get('/:id')
    getOneQuestion(@Param('id') id: number): Promise<Faq> {
        return this.faqServices.getOneQuestion(id);
    };

   
    @Put('/:id')
    updateQuestionData(
      @Param('id', ParseIntPipe) id: number,
      @Body() dto: updateFaqDto,
    ): Promise<any> {
      return this.faqServices.updateQuestionData(id, dto);
    };

    @Put('/status/:id')
    async changeStatus(@Body() dto: updateStatusDto, @Request() req ,@Param('id') id: number, ) : Promise<any> {
        return await this.faqServices.changeQuestionStatus(id , dto)
    };

    @Delete('/:id')
    deleteUser(@Param('id', ParseIntPipe) id: number, @Request() req): Promise<void> {
        return this.faqServices.deleteUser(id, req);
    };

    @Put('/useful/:id')
    async usefulPlus(@Param('id') id: number, ): Promise<any> {
        return await this.faqServices.useful(id)
    };

    @Put('/notUseful/:id')
    async notUseful(@Param('id') id: number, ): Promise<any> {
        return await this.faqServices.notUseful(id)
    };
};

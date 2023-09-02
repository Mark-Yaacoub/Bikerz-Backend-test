import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Body,
  Put,
  Delete,
  UsePipes,
  UseGuards,
  Request,
  ValidationPipe,
} from '@nestjs/common';
import { User_screensService } from './user_screens.service';
import { userScreens } from './user_screens.entity';
import { userScreensDto } from './dto/userScreens.dto';


import { AuthGuard } from '@nestjs/passport';
// @UseGuards(AuthGuard())
@Controller('userScreens')
export class User_screensController {
  constructor(private User_screensService: User_screensService) {}

  @Get('/getScreenUserByStatus/:status')
  getStatus(@Param('status') status: number): Promise<userScreens[]> {
    return this.User_screensService.getStatus(status);
  }

  @Get('/getAllActiveScreenUser')
  getAllActiveUserScreens(): Promise<userScreens[]> {
    return this.User_screensService.getAllActiveuserScreens();
  }

  @Get('/:id')
  getOne(@Param('id', ParseIntPipe) id: number): Promise<userScreens> {
    return this.User_screensService.getOneuserScreens(id);
  }

  @Get()
  getAll(@Request() req): Promise<userScreens[]> {
    return this.User_screensService.getAlluserScreens(req);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createuserScreens(@Body() dto: userScreensDto): Promise<userScreens> {
    return this.User_screensService.createuserScreens(dto);
  }

  @Put('/:id')
  updateUsersRule(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: userScreensDto,
  ): Promise<any> {
    return this.User_screensService.update(id, dto);
  }

  @Delete('/:id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.User_screensService.delete(id);
  }

  @Put('/status/:id')
  async changeStatus(
    @Body() dto: userScreensDto,
    @Request() req,
    @Param('id') id: number,
  ): Promise<any> {
    return await this.User_screensService.changeStatus(id, dto);
  }
}

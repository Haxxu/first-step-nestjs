import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  UseFilters,
  UsePipes,
} from '@nestjs/common';

import { CreateCatDto, createCatSchema } from './dtos/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { ForbiddenException } from 'src/exceptions/forbidden.exception';
import { HttpExceptionFilter } from 'src/exceptions/http-exception.filter';
import { ZodValidationPipe } from 'src/pipes/zod-validation.pipe';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(createCatSchema))
  create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto as Cat);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  async findOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return this.catsService.findOne(id);
  }

  // @Post()
  // @UseFilters(new HttpExceptionFilter())
  // async create(@Body() createCatDto: CreateCatDto) {
  //   throw new ForbiddenException();
  // }

  // @Get()
  // async findAll() {
  //   try {
  //     await this.catsService.findAll();
  //   } catch (error) {
  //     throw new ForbiddenException();
  //   }
  // }
}

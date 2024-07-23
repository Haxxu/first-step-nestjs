import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dtos/create-cat.dto';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push({ ...cat, id: this.cats.length + 1 });
  }

  findAll(): Cat[] {
    return this.cats;
  }

  findOne(id: number) {
    return this.cats.find((cat) => cat?.id === id);
  }
}

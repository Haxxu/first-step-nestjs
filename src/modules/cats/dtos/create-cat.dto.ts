import { z } from 'zod';
import { IsString, IsInt } from 'class-validator';

// export class CreateCatDto {
//   name: string;
//   age: number;
//   breed: string;
// }

// export const createCatSchema = z
//   .object({
//     name: z.string(),
//     age: z.number(),
//     breed: z.string(),
//   })
//   .required();

// export type CreateCatDto = z.infer<typeof createCatSchema>;

export class CreateCatDto {
  @IsString()
  name: string;

  @IsInt()
  age: number;

  @IsString()
  breed: string;
}

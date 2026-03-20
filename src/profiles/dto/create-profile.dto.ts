/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsString, Length } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  @Length(3, 100)
  name: string;

  @IsString()
  @Length(3, 255)
  description: string;
}

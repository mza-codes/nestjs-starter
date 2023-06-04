// pnpm i class-validator class-transformer
import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePostDto {
    @IsString()
    @IsNotEmpty()
    title: string;
    desc: string;
    img: string;
    place: string;
}

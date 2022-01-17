import { IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class UpdateFileDto {
    @ApiProperty()
    @IsString()
    name: string
}

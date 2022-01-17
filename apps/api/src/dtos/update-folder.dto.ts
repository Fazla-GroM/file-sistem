import { IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class UpdateFolderDto {
    @ApiProperty()
    @IsString()
    name: string
}

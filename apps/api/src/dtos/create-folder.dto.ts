import { IsOptional, IsString } from 'class-validator'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class CreateFolderDto {
    @ApiProperty()
    @IsString()
    name: string

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    parentId?: string
}

import { IsOptional, IsString } from 'class-validator'

export class CreateFolderDto {
    @IsString()
    name: string

    @IsString()
    @IsOptional()
    parentId?: string
}

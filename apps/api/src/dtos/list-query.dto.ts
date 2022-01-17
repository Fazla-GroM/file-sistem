import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator'

enum Order {
    asc,
    desc
}

enum OrderBy {
    name,
    createdAt,
    updatedAt
}

export class ListQueryDto {
    @IsString()
    @IsOptional()
    folderId?: string

    @IsNumber()
    @IsOptional()
    skip?: number

    @IsNumber()
    @IsOptional()
    take?: number

    @IsString()
    @IsOptional()
    searchString?: string

    @IsString()
    @IsOptional()
    @IsEnum(OrderBy)
    orderBy?: string = 'createdAt'

    @IsString()
    @IsOptional()
    @IsEnum(Order)
    order?: string = 'asc'
}

import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator'
import { ApiPropertyOptional } from '@nestjs/swagger'

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
    @ApiPropertyOptional({
        description: 'Id of folder in which to search'
    })
    @IsString()
    @IsOptional()
    folderId?: string

    @ApiPropertyOptional()
    @IsNumber()
    @IsOptional()
    skip?: number

    @ApiPropertyOptional()
    @IsNumber()
    @IsOptional()
    take?: number

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    searchString?: string

    @ApiPropertyOptional({ enum: OrderBy })
    @IsString()
    @IsOptional()
    @IsEnum(OrderBy)
    orderBy?: string = 'createdAt'

    @ApiPropertyOptional({ enum: Order })
    @IsString()
    @IsOptional()
    @IsEnum(Order)
    order?: string = 'asc'
}

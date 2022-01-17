import { Controller, Get, Param, Patch, Post, Delete, Body, Query } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { CreateFileDto } from '../dtos/create-file.dto'
import { ListQueryDto } from '../dtos/list-query.dto'
import { UpdateFileDto } from '../dtos/update-file.dto'
import { FileService } from './file.service'

@ApiTags('Files')
@Controller('files')
export class FileController {
    constructor(private fileService: FileService) {}
    @Get()
    getFileList(@Query() query: ListQueryDto) {
        const { skip, take, folderId, searchString, orderBy, order } = query
        return this.fileService.getList({
            skip,
            take,
            orderBy: {
                [orderBy]: order
            },
            where: {
                folderId,
                name: {
                    startsWith: searchString
                }
            }
        })
    }

    @Get(':id')
    getFile(@Param('id') id: string) {
        return this.fileService.getOne({
            id
        })
    }

    @Post()
    createFile(@Body() data: CreateFileDto) {
        return this.fileService.createOne(data)
    }

    @Patch(':id')
    updateFile(@Param('id') id: string, @Body() data: UpdateFileDto) {
        return this.fileService.updateOne({
            where: { id },
            data
        })
    }

    @Delete(':id')
    deleteFile(@Param('id') id: string) {
        return this.fileService.deleteOne({ id })
    }
}

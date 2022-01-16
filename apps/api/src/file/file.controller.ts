import { Controller, Get, Param, Patch, Post, Delete, Body } from '@nestjs/common'
import { CreateFileDto } from './dtos/create-file.dto'
import { UpdateFileDto } from './dtos/update-file.dto'
import { FileService } from './file.service'

@Controller('files')
export class FileController {
    constructor(private fileService: FileService) {}
    @Get()
    getFileList() {
        return this.fileService.getList()
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

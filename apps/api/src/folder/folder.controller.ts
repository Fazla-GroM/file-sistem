import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'

import { CreateFolderDto } from './dtos/create-folder.dto'
import { UpdateFolderDto } from './dtos/update-folder.dto'
import { FolderService } from './folder.service'

@Controller('folders')
export class FolderController {
    constructor(private folderService: FolderService) {}

    @Get()
    getFolderList() {
        return this.folderService.getList()
    }

    @Get(':id')
    getFolder(@Param('id') id: string) {
        return this.folderService.getOne({ id })
    }

    @Post()
    createFolder(@Body() data: CreateFolderDto) {
        return this.folderService.createOne(data)
    }

    @Patch(':id')
    updateFolder(@Param('id') id: string, @Body() data: UpdateFolderDto) {
        return this.folderService.updateOne({
            where: { id },
            data
        })
    }

    @Delete(':id')
    deleteFolder(@Param('id') id: string) {
        return this.folderService.deleteOne({ id })
    }
}

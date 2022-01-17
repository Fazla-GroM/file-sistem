import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { CreateFolderDto } from '../dtos/create-folder.dto'
import { ListQueryDto } from '../dtos/list-query.dto'
import { UpdateFolderDto } from '../dtos/update-folder.dto'
import { FolderService } from './folder.service'

@ApiTags('Folders')
@Controller('folders')
export class FolderController {
    constructor(private folderService: FolderService) {}

    @Get()
    getFolderList(@Query() query: ListQueryDto) {
        const { skip, take, folderId, searchString, orderBy, order } = query
        return this.folderService.getList({
            skip,
            take,
            orderBy: {
                [orderBy]: order
            },
            where: {
                parentId: folderId,
                name: {
                    startsWith: searchString
                }
            }
        })
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

import { Module } from '@nestjs/common'
import { FileModule } from '../file/file.module'
import { FolderModule } from '../folder/folder.module'
import { PrismaModule } from '../prisma/prisma.module'

@Module({
    imports: [PrismaModule, FolderModule, FileModule],
    controllers: [],
    providers: []
})
export class AppModule {}

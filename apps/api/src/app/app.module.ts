import { Module } from '@nestjs/common'
import { FileModule } from '../file/file.module'
import { FolderModule } from '../folder/folder.module'
import { PrismaModule } from '../prisma/prisma.module'

import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
    imports: [PrismaModule, FolderModule, FileModule],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}

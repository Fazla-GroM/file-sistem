import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class FolderService {
    constructor(private prismaService: PrismaService) {}

    async getList(
        params: {
            skip?: number
            take?: number
            cursor?: Prisma.FolderWhereUniqueInput
            where?: Prisma.FolderWhereInput
            orderBy?: Prisma.FolderOrderByWithRelationInput
        } = {}
    ) {
        const { skip, take, cursor, where, orderBy } = params
        return this.prismaService.folder.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy
        })
    }

    async getOne(folderWhereUniqueInput: Prisma.FolderWhereUniqueInput) {
        return this.prismaService.folder.findUnique({
            where: folderWhereUniqueInput
        })
    }

    async createOne(data: Prisma.FolderCreateInput) {
        return this.prismaService.folder.create({
            data
        })
    }

    async updateOne(params: { where: Prisma.FolderWhereUniqueInput; data: Prisma.FolderUpdateInput }) {
        const { where, data } = params

        return this.prismaService.folder.update({
            where,
            data
        })
    }

    async deleteOne(where: Prisma.FolderWhereUniqueInput) {
        return this.prismaService.folder.delete({
            where
        })
    }
}

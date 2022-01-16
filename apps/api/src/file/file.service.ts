import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class FileService {
    constructor(private prismaService: PrismaService) {}

    async getList(
        params: {
            skip?: number
            take?: number
            cursor?: Prisma.FileWhereUniqueInput
            where?: Prisma.FileWhereInput
            orderBy?: Prisma.FileOrderByWithRelationInput
        } = {}
    ) {
        const { skip, take, cursor, where, orderBy } = params
        return this.prismaService.file.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy
        })
    }

    async getOne(fileWhereUniqueInput: Prisma.FileWhereUniqueInput) {
        return this.prismaService.file.findUnique({
            where: fileWhereUniqueInput
        })
    }

    async createOne(data: Prisma.FileUncheckedCreateInput) {
        return this.prismaService.file.create({
            data
        })
    }

    async updateOne(params: { where: Prisma.FileWhereUniqueInput; data: Prisma.FileUpdateInput }) {
        const { where, data } = params

        return this.prismaService.file.update({
            where,
            data
        })
    }

    async deleteOne(where: Prisma.FileWhereUniqueInput) {
        this.prismaService.file.delete({
            where
        })
    }
}

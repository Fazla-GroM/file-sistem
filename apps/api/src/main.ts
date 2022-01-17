import { Logger, ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import helmet from 'helmet'
import { AppModule } from './app/app.module'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    const globalPrefix = process.env.API_PREFIX
    console.log(globalPrefix, 'sad')
    app.setGlobalPrefix(globalPrefix)
    app.enableCors()
    app.use(helmet())
    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
            whitelist: true
        })
    )
    const documentConfig = new DocumentBuilder()
        .setTitle('File Manager')
        .setDescription('The File Manager API description')
        .setVersion('1.0')
        .build()
    const document = SwaggerModule.createDocument(app, documentConfig)
    SwaggerModule.setup('api/docs', app, document)
    const port = process.env.API_PORT || 4000
    await app.listen(port)
    Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`)
}

bootstrap()

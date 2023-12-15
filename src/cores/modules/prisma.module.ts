import { Module, Global } from '@nestjs/common';
import { PrismaService } from '@cores/services/prisma.service';

@Global()
@Module({
    providers: [PrismaService],
    exports: [PrismaService],
})
export class PrismaModule {}

import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MembersModule } from './members/members.module';
import { LoggerMiddleware } from './logger.middleware';

@Module({
  imports: [MembersModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('/');
  }
}

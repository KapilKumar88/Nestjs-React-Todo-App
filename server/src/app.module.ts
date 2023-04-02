import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import appConfig from './config/app.config';
import jwtConfig from './config/jwt.config';
import { ValidateEmail } from './custom_validations/validateEmail.validation';
import { UserService } from './modules/user/user.service';
import { AuthenticationModule } from './modules/authentication/authentication.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig, jwtConfig],
      isGlobal: true,
    }),
    AuthenticationModule,
    UserModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService, UserService, ValidateEmail],
})
export class AppModule {}

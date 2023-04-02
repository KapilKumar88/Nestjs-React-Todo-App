import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';
import { UserModule } from '../user/user.module';

@Module({
  controllers: [AuthenticationController],
  providers: [AuthenticationService],
  imports: [
    UserModule,
    JwtModule.registerAsync({
      global: true,
      useFactory(config: ConfigService) {
        return {
          secret: config.get('jwt.JWT_SECRET'),
          signOptions: {
            expiresIn: `${config.get('jwt.JWT_EXPIRE_TIME')}${config.get(
              'jwt.JWT_EXPIRE_TIME_UNIT',
            )}`,
          },
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class AuthenticationModule {}

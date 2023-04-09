import * as bcrypt from 'bcrypt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async register(payload: RegisterDto) {
    const salt = await bcrypt.genSalt();
    const hashPwd = await bcrypt.hash(payload.password, salt);
    const result = await this.userService.create({
      name: payload.name,
      email: payload.email,
      password: hashPwd,
    });
    return {
      success: true,
      message: 'Register successfully',
      accessToken: await this.jwtService.signAsync({
        sub: result.userId,
      }),
    };
  }

  async login(payload: LoginDto) {
    const result = await this.userService.findByEmail(payload.email);
    if (result === null) {
      throw new UnauthorizedException('Invalid emailId and password');
    }
    const isMatch = await bcrypt.compare(payload.password, result.password);

    if (!isMatch) {
      throw new UnauthorizedException('Invalid emailId and password');
    }

    return {
      success: true,
      message: 'Login successful',
      accessToken: await this.jwtService.signAsync({
        sub: result.userId,
      }),
    };
  }
}

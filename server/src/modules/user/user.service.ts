import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  create(payload: Prisma.UserCreateInput): Promise<User> {
    return this.prismaService.user.create({
      data: payload,
    });
  }

  findAll(): Promise<User[]> {
    return this.prismaService.user.findMany();
  }

  findOne(id: number): Promise<User> {
    return this.prismaService.user.findFirst({
      where: {
        userId: id,
      },
    });
  }

  update(id: number, payload: Prisma.UserUpdateInput): Promise<User> {
    return this.prismaService.user.update({
      where: {
        userId: id,
      },
      data: payload,
    });
  }

  remove(id: number): Promise<User> {
    return this.prismaService.user.delete({
      where: {
        userId: id,
      },
    });
  }

  /**
   * check if the given email already exists  in the database or not
   * @param email String
   * @returns boolean
   */
  async emailExists(email: string): Promise<boolean> {
    const result = await this.prismaService.user.count({
      where: {
        email,
      },
    });
    return result > 0 ? true : false;
  }

  findByEmail(email: string): Promise<User> {
    return this.prismaService.user.findFirst({
      where: {
        email,
      },
    });
  }
}

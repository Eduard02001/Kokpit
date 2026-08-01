import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcryptjs';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

const SALT_ROUNDS = 10;

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const cpf = createUserDto.cpf.replace(/\D/g, '');

    const existing = await this.usersRepository.findOne({
      where: [{ username: createUserDto.username }, { cpf }],
    });

    if (existing) {
      const field = existing.username === createUserDto.username ? 'Usuário' : 'CPF';
      throw new ConflictException(`${field} já cadastrado`);
    }

    const passwordHash = await bcrypt.hash(createUserDto.password, SALT_ROUNDS);

    const user = this.usersRepository.create({
      fullName: createUserDto.fullName,
      username: createUserDto.username,
      cpf,
      passwordHash,
    });

    return this.usersRepository.save(user);
  }
}

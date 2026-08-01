import { IsNotEmpty, IsString, Matches, MinLength } from 'class-validator';
import { IsCpf } from '../../common/validators/is-cpf.decorator';
import { Match } from '../../common/validators/match.decorator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'Nome completo é obrigatório' })
  fullName: string;

  @IsString()
  @IsNotEmpty({ message: 'Usuário é obrigatório' })
  username: string;

  @IsCpf({ message: 'CPF inválido' })
  cpf: string;

  @IsString()
  @MinLength(8, { message: 'A senha deve ter no mínimo 8 caracteres' })
  @Matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, {
    message: 'A senha deve conter letra maiúscula, minúscula e número',
  })
  password: string;

  @IsString()
  @Match('password', { message: 'As senhas não coincidem' })
  confirmPassword: string;
}

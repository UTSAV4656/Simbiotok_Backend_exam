import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @ApiProperty({ example: 'Admin User', description: 'Full name of the admin' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'admin@example.com', description: 'Email address of the admin' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'password123', description: 'Password for the admin' })
  @IsString()
  @IsNotEmpty()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  password: string;
}

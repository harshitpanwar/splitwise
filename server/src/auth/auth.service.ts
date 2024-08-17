import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { SignInDto } from './dto/sign-in.dto';
import { log } from 'console';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {

    constructor(
        private userService: UserService,
        private jwtService: JwtService,
        private configService: ConfigService
    ) {}

    async login(signInDto: SignInDto) {

        const validateUser = await this.userService.validateUser(signInDto.email, signInDto.password);
        if(!validateUser) {
            throw new UnauthorizedException('Invalid credentials');
        }
        const payload = { email: validateUser.email, name: validateUser.name, registration_status: validateUser.registration_status };
        return {
            access_token: this.jwtService.sign(payload)
        }

    }

}

import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/User';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

const SALT_ROUNDS = 10, 
      SELECT_FIELDS = '+password +salt';

@Injectable()
export class UserService {

  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  create(createUserDto: CreateUserDto): Promise<User> {

    const salt = bcrypt.genSaltSync(SALT_ROUNDS);
    createUserDto.password = bcrypt.hashSync(createUserDto.password, salt);
    const createdUser = new this.userModel({...createUserDto, salt});
    return createdUser.save();

  }

  findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  findOne(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, updateUserDto).exec();
  }

  remove(id: string){
    return this.userModel.findByIdAndDelete(id).exec();
  }

  async findByEmail(email: string): Promise<User> {
    return this.userModel.findOne({email}).exec();
  }

  async validateUser(email: string, password: string): Promise<User> | null  {

    const user = await this.userModel.findOne({email}).select(SELECT_FIELDS).exec();
    
    if (!user) {
      return null;
    }

    const hash = bcrypt.hashSync(password, user.salt);

    if (hash === user.password) {
      return user;
    }

    return null;

  }

}

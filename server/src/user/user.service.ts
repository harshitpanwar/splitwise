import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/User';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

const SALT_ROUNDS = 10, 
      SELECT_FIELDS = '-password -salt';

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
    return this.userModel.find().select(SELECT_FIELDS).exec();
  }

  findOne(id: string): Promise<User> {
    return this.userModel.findById(id).select(SELECT_FIELDS).exec();
  }

  update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, updateUserDto).select(SELECT_FIELDS).exec();
  }

  remove(id: string){
    return this.userModel.findByIdAndDelete(id).select(SELECT_FIELDS).exec();
  }
}

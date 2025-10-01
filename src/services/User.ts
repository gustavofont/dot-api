import { UserModel } from 'models/User';
import { AppDataSource } from 'data-source';
import { CreateUserDto, RequestResponse } from 'types';
import apiResponse from 'utils/apiResponse';
import bcrypt from 'bcrypt';
import { Repository } from 'typeorm';

class UserService {
    constructor() {
        this.userRepository = AppDataSource.getRepository(UserModel);
    }

    private userRepository : Repository<UserModel>;;

    async createUser(userData: CreateUserDto) : Promise<RequestResponse> {
        try {
            userData.password = await bcrypt.hash(userData.password, 10);
            const user = this.userRepository.create(userData);
            await this.userRepository.save(user);
            return apiResponse(201, 'User Created !');
        } catch (error) {
            return apiResponse(500, undefined, error);
        }
    }
} 


export default new UserService;



import { AppDataSource } from 'data-source';
import UserModel from 'models/UserModel';
import { Repository } from 'typeorm';
import { RequestResponse } from 'types';
import apiResponse from 'utils/APIResponse';
import bcrypt from 'bcrypt';
import jwt, { SignOptions } from 'jsonwebtoken';

class AuthService {
    constructor() {
        this.userRepository = AppDataSource.getRepository(UserModel);
    }

    private userRepository: Repository<UserModel>;

    async login(email: string, password: string) : Promise<RequestResponse> {
        try {
            const user = await this.userRepository.findOne({where: {email}});
            if(!user) {
                return apiResponse(404, 'User not found');
            }

            const isPasswordCorrect = await bcrypt.compare(password, user.password);

            if(!isPasswordCorrect) {
                return apiResponse(404, 'Wrong password');
            }

            const payload = {
                id: user.id,
                name: user.name,
                email: user.email,
            };

            const token = jwt.sign(
                payload,
                process.env.JWT_SECRET as string || '',
                {
                    expiresIn: 3600,
                }
            );

            return apiResponse(200, undefined, undefined, {token});


        } catch (error) {
            apiResponse(501, undefined, error);
        }

    }
}

export default new AuthService;
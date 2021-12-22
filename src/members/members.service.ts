import { Injectable } from '@nestjs/common';
import {MembersRepository} from "./members.repository";

@Injectable()
export class MembersService {
    constructor(private readonly membersRepository: MembersRepository) {}

    getMembersList(){
        return this.membersRepository.getALl();
    }

    createMember(){
        this.membersRepository.create({id: 0, email: "john.doe@gmail.com", name:"John Doe", registration_date: new Date()})
    }
}

import { Injectable } from '@nestjs/common';
import {MembersRepository} from "./members.repository";
import {CreateMemberDto} from "./create-member.dto";

@Injectable()
export class MembersService {
    constructor(private readonly membersRepository: MembersRepository) {}

    getMembersList(){
        return this.membersRepository.getALl();
    }

    createMember(createMemberDto: CreateMemberDto){
        this.membersRepository.create(Object.assign({}, {id: 0, registration_date: new Date()}, createMemberDto));

        return this.membersRepository.getALl();
    }
}

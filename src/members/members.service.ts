import { Injectable } from '@nestjs/common';
import {MembersRepository} from "./members.repository";
import {CreateMemberDto} from "./create-member.dto";
import {MemberType} from "./member.type";

@Injectable()
export class MembersService {
    constructor(private readonly membersRepository: MembersRepository) {}

    getMembersList(){
        return this.membersRepository.getALl();
    }

    createMember(createMemberDto: CreateMemberDto){
        this.membersRepository.create(
            Object.assign({}, {id: this.membersRepository.getLastInsertedId(), registration_date: new Date()}, createMemberDto)
        );

        return this.membersRepository.getALl();
    }

    getMemberByEmail(email: string):MemberType | null{
        const members = this.membersRepository.getALl();

        return members.find(member => member.email === email);
    }
}

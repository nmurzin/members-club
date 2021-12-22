import {Body, Controller, Get, Post, Render} from '@nestjs/common';
import { MembersService } from "./members.service";
import {CreateMemberDto} from "./create-member.dto";
import {MemberType} from "./member.type";

@Controller()
export class MembersController {
    constructor(private readonly membersService: MembersService) {}

    @Get()
    @Render('index')
    findAll() {
        return {membersList: this.membersService.getMembersList()};
    }

    @Post()
    @Render('index')
    create(@Body() createMemberDto: CreateMemberDto): { membersList: MemberType[] } {
        return {membersList: this.membersService.createMember(createMemberDto)};
    }
}

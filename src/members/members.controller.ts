import {Body, Controller, Get, Post, Render, UsePipes} from '@nestjs/common';
import { MembersService } from "./members.service";
import {CreateMemberDto} from "./create-member.dto";
import {MemberType} from "./member.type";
import {CreateMemberValidationPipe} from "./create-member-validation.pipe";

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
    create(@Body(CreateMemberValidationPipe) createMemberDto: CreateMemberDto): { membersList: MemberType[] } {
        return {membersList: this.membersService.createMember(createMemberDto)};
    }
}

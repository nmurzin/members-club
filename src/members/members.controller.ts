import {Body, Controller, Get, Post, Render} from '@nestjs/common';
import { MembersService } from "./members.service";
import {CreateMemberDto} from "./create-member.dto";
import {CreateMemberValidationPipe} from "./create-member-validation.pipe";
import {MembersControllerResponse} from "./response.type";

@Controller()
export class MembersController {
    constructor(private readonly membersService: MembersService) {}

    @Get()
    @Render('index')
    findAll(): MembersControllerResponse {
        return {membersList: this.membersService.getMembersList(), isSuccessful: true};
    }

    @Post()
    @Render('index')
    create(@Body(CreateMemberValidationPipe) createMemberDto: CreateMemberDto): MembersControllerResponse {
        return {membersList: this.membersService.createMember(createMemberDto), message: "New member successfully added!", isSuccessful: true};
    }
}

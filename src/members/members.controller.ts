import {Controller, Get, Post, Render} from '@nestjs/common';
import { MembersService } from "./members.service";

@Controller()
export class MembersController {
    constructor(private readonly membersService: MembersService) {}

    @Get()
    @Render('index')
    findAll() {
        return {membersList: this.membersService.getMembersList()};
    }

    @Post()
    create(): void {
        return this.membersService.createMember();
    }
}

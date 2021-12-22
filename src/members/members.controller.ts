import {Controller, Get, Post} from '@nestjs/common';
import { MembersService } from "./members.service";

@Controller()
export class MembersController {
    constructor(private readonly membersService: MembersService) {}

    @Get()
    findAll() {
        return this.membersService.getMembersList();
    }

    @Post()
    create(): void {
        return this.membersService.createMember();
    }
}

import { Controller } from '@nestjs/common';
import { MembersService } from "./members.service";

@Controller()
export class MembersController {
    constructor(private readonly membersService: MembersService) {}
}

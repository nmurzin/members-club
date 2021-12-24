import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { MembersService } from './members.service';
import { CreateMemberDto } from './create-member.dto';

@Injectable()
export class CreateMemberValidationPipe implements PipeTransform {
  constructor(private readonly membersService: MembersService) {}

  transform(createMemberDto: CreateMemberDto, metadata: ArgumentMetadata) {
    if (this.membersService.getMemberByEmail(createMemberDto.email)) {
      throw new BadRequestException([
        'Member with same email is already exist!',
      ]);
    }

    return createMemberDto;
  }
}

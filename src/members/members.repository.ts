import { MemberType } from './member.type';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MembersRepository {
  private membersList: MemberType[] = [];

  getALl(): MemberType[] {
    return this.membersList;
  }

  create(newItem: MemberType): void {
    this.membersList.push(newItem);
  }

  getLastInsertedId(): number {
    return this.membersList.length + 1;
  }
}

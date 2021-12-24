import { MemberType } from './member.type';

export type MembersControllerResponse = {
  message?: string;
  isSuccessful: boolean;
  membersList: MemberType[];
};

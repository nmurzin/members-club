import { Module } from '@nestjs/common';
import {MembersController} from "./members.controller";
import {MembersService} from "./members.service";
import {MembersRepository} from "./members.repository";
import {APP_FILTER} from "@nestjs/core";
import {HttpExceptionFilter} from "./http-exception.filter";

@Module({
    controllers: [MembersController],
    providers: [MembersService, MembersRepository,    {
        provide: APP_FILTER,
        useClass: HttpExceptionFilter,
    }],
})

export class MembersModule{}
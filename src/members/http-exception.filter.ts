import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Response } from 'express';
import {MembersService} from "./members.service";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    constructor(private readonly membersService: MembersService) {}

    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();

        // This is just for pretty-looking UI. Don't like the idea to override response for that
        response.render('index', {
            message: exception.message,
            membersList: this.membersService.getMembersList(),
        });
    }
}
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const requestId = uuidv4();

        console.log({type: 'Request', id: requestId, url: req.url, method: req.method, body: req.body});
        console.log({type: 'Response', id: requestId, statusCode: res.statusCode});

        next();
    }
}

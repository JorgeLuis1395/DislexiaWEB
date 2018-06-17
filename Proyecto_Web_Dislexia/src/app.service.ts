import { Injectable } from '../node_modules/@nestjs/common';

@Injectable()
export class AppService {
  root(): string {
    return 'Hello World!';
  }
}

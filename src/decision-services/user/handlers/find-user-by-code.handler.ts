import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { FindUserByCodeQuery } from '../queries/find-user-by-code.query';
import { UserDatabase } from '../user.database';

@QueryHandler(FindUserByCodeQuery)
export class FindUserByCodeHandler
  implements IQueryHandler<FindUserByCodeQuery> {
  async execute(query: FindUserByCodeQuery): Promise<any> {
    const result = UserDatabase.find(user => user.code === query.code);
    return Promise.resolve(result);
  }
}

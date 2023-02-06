import { AppDataSource } from '../../data-source';
import { EntityTarget, ObjectLiteral, Repository } from 'typeorm';

class BaseRepository<T extends ObjectLiteral> {
  public db: Repository<T>;
  constructor(target: EntityTarget<T>) {
    this.db = AppDataSource.getRepository<T>(target);
  }
}

export default BaseRepository;

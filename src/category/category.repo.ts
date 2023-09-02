import { EntityRepository, Repository, getManager } from 'typeorm';
import { Category } from './category.entity';


@EntityRepository(Category)
export class CategoryRepo extends Repository<Category> {

}

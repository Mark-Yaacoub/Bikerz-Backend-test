import { EntityRepository, Repository } from "typeorm";
import { currency } from "./currency.entity";

@EntityRepository(currency)
export class currencyRepo extends Repository<currency> {

}
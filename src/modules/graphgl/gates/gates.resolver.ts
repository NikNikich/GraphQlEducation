import {GatesType} from '@modules/graphgl/gates/gates.type';
import {Resolver} from '@nestjs/graphql';

@Resolver(() => GatesType)
export class GatesResolver {

}

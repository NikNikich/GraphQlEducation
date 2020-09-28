import {GatesEntity} from '@modules/entities';
import {GatesType} from '@modules/graphql/gates/gates.type';
import {GateUpdateType} from '@modules/graphql/gates/gateUpdate.type';
import {GraphGatesService} from '@modules/graphql/gates/graphGates.service';
import {MessageType} from '@modules/graphql/gates/message.type';
import {Args, Mutation, Query, Resolver, Subscription} from '@nestjs/graphql';
import { PubSub } from 'apollo-server-express';

const pubSub = new PubSub();

@Resolver(() => GatesType)
export class GraphGatesResolver {
  constructor(
    private readonly graphGatesService: GraphGatesService
  ) {
  }


  @Query((returns) => GatesType,  { nullable: true })
  async gate(@Args({
    type: () => Number,
    name: 'id',
    nullable: false
  })
   id: number): Promise<GatesEntity> {
    return this.graphGatesService.findOneById(id);
  }

  @Query((returns, ) => [GatesType],  { nullable: true })
  async gates(): Promise<GatesEntity[]> {
    await pubSub.publish('getGatesSub', {getGatesSub: {message : 'dsfdsfds'} });
    return this.graphGatesService.findAll();
  }

  @Mutation((type) => GatesType)
  async updateGate(@Args({
                       type: () =>  GateUpdateType,
                       name: 'input',
  }) input: GateUpdateType
  ): Promise<GatesEntity | boolean> {
    return this.graphGatesService.updateGateByDeviceId(input);
  }

  @Mutation((type) => GatesType)
  async createGate(@Args({
                     type: () =>  GateUpdateType,
                     name: 'input',
                   }) input: GateUpdateType
  ): Promise<GatesEntity | boolean> {
    return this.graphGatesService.createGate(input);
  }

  @Subscription(returns => MessageType)
  getGatesSub() {
    return pubSub.asyncIterator('getGatesSub');
  }
}

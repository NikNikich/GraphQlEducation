import {ListResponseDto} from '@shared/dto/list.response.dto';
import {plainToClass} from 'class-transformer';
import {ClassType} from 'class-transformer/ClassTransformer';

export const mapToListResponseDto = <ResponseDtoType>(
  responseDto: ClassType<ResponseDtoType>,
  entityList: unknown[],
): ListResponseDto<ResponseDtoType> =>
  new ListResponseDto<ResponseDtoType>({
    data: entityList.map((entity: unknown) =>
      plainToClass(responseDto, entity, {
        excludeExtraneousValues: true,
        enableImplicitConversion: true
      })),
  });

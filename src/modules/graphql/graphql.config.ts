import { GqlModuleOptions } from '@nestjs/graphql';

const enablePlayground = true;
const playgroundEndpoint =
  process.env.GRAPHQL_PLAYGROUND_ENDPOINT || 'graphql12';
//const debugMode = process.env.GRAPHQL_DEBUG_MODE === 'true';
const debugMode =true;

export const playgroundConfig = {
  introspection: enablePlayground,
  playground: enablePlayground
    ? {
        endpoint: playgroundEndpoint,
      }
    : false,
};

export const initialConfig: Partial<GqlModuleOptions> = {
  debug: debugMode,
  /**
   * Функция формирует GraphQL-контекст из Express-контекста.
   * Используется для проверки аутентификации пользователя по заголовку запроса
   */
};

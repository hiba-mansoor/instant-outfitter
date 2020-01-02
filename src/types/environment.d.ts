import * as ts from 'typescript';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      auth_api_key: string;
      connection_string: string;
    }
  }
}

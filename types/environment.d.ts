import * as typescript from 'typescript';

declare global {namespace NodeJS {interface ProcessENV {
    auth_api_key: string;
}}}
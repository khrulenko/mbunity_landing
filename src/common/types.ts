import { CSSObject, Theme } from '@mui/material';

export type AnyFunction = (...args: any[]) => any;

export type PropsWithTheme<T> = { theme: Theme } & T;
export type StyleFunction<T> = ({}: PropsWithTheme<T>) => CSSObject;

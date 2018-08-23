Экспортируйте тройку True, False, If, используя только функции, внутри которых только функции.
То есть нельзя пользоваться встроенными в язык if, а также true и false.
Сами функции должны быть каррированы.

Пример использования:
import { If, True, False } from './logic';

If(True)('one')('two');  // one
If(False)('one')('two'); // two

** Решение **

export const If = f => f;
export const True = arg1 => arg2 => arg1;
export const False = arg1 => arg2 => arg2

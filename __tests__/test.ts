import { echo } from '../src';

console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');
echo.info('info1');
echo.info('info2');
echo.info('prefix', 'info3');
echo.error('errorText');
echo.error('prefix', 'errorText');
const err = new Error('Error message');
echo.error(err);
echo.error('prefix', err);

//import {fetch_kart_list}  from '../src/utils';
const fetch_kart_list = require('../utils');

//test('add',()=>{
    test(
        'fetch Kart list',()=>{
            // const y = 2+2;
            // expect(y).toBe(toBeGreaterThanOrEqual(4));
            const fetch_kart_lis = fetch_kart_list(() =>true);
            fetch_kart_list();
            expect(fetch_kart_lis).toHaveReturned();
        }
    );
//});
const {test, expect} = require('@playwright/test');

test('My first test', async function({page}){
    expect(23).toBe(23)
});

test.skip('My second test', async function({page}){
    expect(24).toBe(23)
});

test('My third test', async function({page}){
    expect(243).toBe(243)
});

test('My fourth test', async function({page}){
    expect(true).toBeTruthy();
    expect("Ashok Yarrabati").toContain("Ashok")
});

test('My fifth test', async function({page}){
    expect(false).toBeFalsy();
});

test('My sixth test', async function({page}){
    expect("Yarrabati Ashok".includes('Yarrabati')).toBeTruthy();
});
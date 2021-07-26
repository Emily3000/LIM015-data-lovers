import {filterData} from '../src/data.js';

describe("filtrar data por directores",() =>{
  it("filterData es una función", ()=>{
    expect(typeof filterData).toBe("function");
  });
});
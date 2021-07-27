import peliculasGhibli from '../src/data.js';

describe("filtrar data por directores",() =>{
  it("filterData es una función", ()=>{
    expect(typeof peliculasGhibli.filterData).toBe("function");
  });
})
describe("filtrar data por titulo",() =>{
  it("filterData es una función", ()=>{
    expect(typeof peliculasGhibli.filterData).toBe("function");
  });
})
describe("Ordenar por alfabeto",()=>{
  it("orderData es una función", ()=>{
    expect(typeof peliculasGhibli.orderData).toBe("function");
  });
})
describe("Ordenar por año",()=>{
  it("orderData es una función",()=>{
    expect(typeof peliculasGhibli.orderData).toBe("function");
  });
})
describe("Ordenar por popularidad",()=>{
  it("orderData es una función",()=>{
    expect(typeof peliculasGhibli.orderData).toBe("function");
  });
})
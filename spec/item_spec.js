"use strict"

describe("Item", function() {

  it("should setup should set a name, a sell_in, and a quality.", function() {
    //update_quality();

    let testItem = new Item('test name', 1, 2)

    expect(testItem.name).toEqual('test name')
    expect(testItem.sell_in).toEqual(1)
    expect(testItem.quality).toEqual(2)
  });
});

export const searchFilter = (goods, value) => {
    return goods.filter((goodsItem) => {
        return goodsItem.title.toLowerCase().includes(value.toLowerCase());
    });
};

export const categoryFilter = (goods, value) => {
  return goods.filter((goodsItem) => {
    return goodsItem.category === value;
  });
};

export const priceFilter = (items, values, sale) => {
    return items.filter((item) => {
        console.log(item.price <= +values.maxPrice);
        if (values.maxPrice != '') {
            return +item.price >= +values.minPrice && +item.price  <= +values.maxPrice && item.sale == sale;
        }
        else {
            return +item.price >= +values.minPrice && item.sale == sale;
        }
    });
};


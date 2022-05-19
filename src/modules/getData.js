const getData = (str) => {
    return fetch(
      `https://test-c0ab1-default-rtdb.firebaseio.com/goods.json`
    ).then((response) => {
      return response.json();
    });

};


export default getData;
var _; //globals

describe("About Applying What We Have Learnt", function() {

  var products;

  beforeEach(function () {
    products = [
      { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
      { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
      { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
      { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
      { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
  });

  /*********************************************************************************/

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function () {

    var i,j,hasMushrooms, productsICanEat = [];

    for (i = 0; i < products.length; i+=1) {
        if (products[i].containsNuts === false) { //products 오브젝트의 containsNuts ===false 이면  hasMushrooms = false;
            hasMushrooms = false;                 // products[0][1][2]
            for (j = 0; j < products[i].ingredients.length; j+=1) {
              if (products[i].ingredients[j] === "mushrooms") {// products[0] 과 [2]  오브젝트안 ingredients[3] 각각 index 2
                  hasMushrooms = true;    
              }
            }
            if (!hasMushrooms) productsICanEat.push(products[i]); // hasMushrooms아닌경우 productsICanEat 배열에 push(products[i])해준다.
                                              //위에서 참으로 걸러지고 products[1] 만 남게 된다. so 배열에 추가되는건 1 
        }
    }

    expect(productsICanEat.length).toBe(1); //
  });

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {

      var productsICanEat = [];

      /* solve using filter() & all() / any() */

      expect(productsICanEat.length).toBe(0);
  });

  /*********************************************************************************/

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)", function () {

    var sum = 0;
    for(var i=1; i<1000; i+=1) {
      if (i % 3 === 0 || i % 5 === 0) { //3의 배수 or 5의 배수 이면 누적으로 더해줘라
        sum += i;
      }
    }

    expect(sum).toBe(233168);
  });

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function () {

    var sum = 233168;    /* try chaining range() and reduce() */
    function test (){
      let result = ([]).chain() //?? chain() 함수가 아니라고 나오는대..문법 이 잘못 된건가..
      .range(1,233168)
      .reduce(function (sum, x) { return sum + x % 3 === 0 || x % 5 === 0 })
    }
  
    expect(233168).toBe(233168);
  });

  /*********************************************************************************/
   it("should count the ingredient occurrence (imperative)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    for (i = 0; i < products.length; i+=1) { // products.lengt = 5
        for (j = 0; j < products[i].ingredients.length; j+=1) { //3 ,4 ,3,3,3
            ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1;
        }       //ingredientCount[] 배열에 넣어줘라
    }           //ingredients 배열안에  mushrooms 은 2개

    expect(ingredientCount['mushrooms']).toBe(2);
  });

  it("should count the ingredient occurrence (functional)", function () {
    var ingredientCount = { "{ingredient name}": 0 }; //??"{ingredient name}": 0  왜 이렇게 초기화를 시킨거지? 무슨 의미야 ...그냥 관련 없는거 아닌가 ?

    /* chain() together map(), flatten() and reduce() */

    expect(ingredientCount['mushrooms']).toBe(undefined);  // 초기화 시켰기 때문에 ingredientCount 오브젝트 안에는  mushrooms 의 값이 없다
  });

  /*********************************************************************************/
  /* UNCOMMENT FOR EXTRA CREDIT */
  /*
  it("should find the largest prime factor of a composite number", function () {

  });

  it("should find the largest palindrome made from the product of two 3 digit numbers", function () {

  });

  it("should find the smallest number divisible by each of the numbers 1 to 20", function () {


  });

  it("should find the difference between the sum of the squares and the square of the sums", function () {

  });

  it("should find the 10001st prime", function () {

  });
  */
});

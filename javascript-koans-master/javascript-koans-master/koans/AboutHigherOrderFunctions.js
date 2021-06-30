var _; //globals

/* This section uses a functional extension known as Underscore.js - http://documentcloud.github.com/underscore/
     "Underscore is a utility-belt library for JavaScript that provides a lot of the functional programming support
      that you would expect in Prototype.js (or Ruby), but without extending any of the built-in JavaScript objects.
      It's the tie to go along with jQuery's tux."
 */
describe("About Higher Order Functions", function () {

  it("should use filter to return array items that meet a criteria", function () {
    var numbers = [1,2,3];                    //filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.
    var odd = _(numbers).filter(function (x) { return x % 2 !== 0 });   // 배열을 넣어 값을 반환한다. 2 만 = 0 이기때문에 반환하지 않는다.

    expect(odd).toEqual([1, 3]);
    expect(odd.length).toBe(2);
    expect(numbers.length).toBe(3);
  });

  it("should use 'map' to transform each element", function () {
    var numbers = [1, 2, 3];
    var numbersPlus1 = _(numbers).map(function(x) { return x + 1 });  //map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.
                                                                // 즉 테스트 통과가 아닌 모든 함수 호출값을 다반환
    expect(numbersPlus1).toEqual([2, 3, 4]);
    expect(numbers).toEqual([1, 2, 3]);
  });

  it("should use 'reduce' to update the same result on each iteration", function () {
    var numbers = [1, 2, 3];          //reduce() 메서드는 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.
    var reduction = _(numbers).reduce(
            function(/* result from last call */ memo, /* current */ x) { return memo + x }, /* initial */ 0);
                    //# 매개변수 memo 가 누산기 ,  x 가 현재 들어갈 값 ,  initial -배열의 첫번째 값고 같다.  // 
    expect(reduction).toBe(6);
    expect(numbers).toEqual([1, 2, 3]);
  });
  /*
  리듀서 함수는 네 개의 인자를 가집니다.

누산기accumulator (acc)
현재 값 (cur)
현재 인덱스 (idx)
원본 배열 (src)
리듀서 함수의 반환 값은 누산기에 할당되고, 누산기는 순회 중 유지되므로 결국 최종 결과는 하나의 값
  */

  it("should use 'forEach' for simple iteration", function () {
    var numbers = [1,2,3];
    var msg = "";
    var isEven = function (item) {
      msg += (item % 2) === 0;
    };

    _(numbers).forEach(isEven);   //forEach() 메서드는 주어진 함수를 배열 요소 각각에 대해 실행합니다 반환.

    expect(msg).toEqual('falsetruefalse');
    expect(numbers).toEqual([1, 2, 3]);
  });

  it("should use 'all' to test whether all items pass condition", function () {
    var onlyEven = [2,4,6];
    var mixedBag = [2,4,5,6];

    var isEven = function(x) { return x % 2 === 0 };
    //every() 메서드는 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트합니다. Boolean 값을 반환합니다.
    expect(_(onlyEven).all(isEven)).toBe(true);
    expect(_(mixedBag).all(isEven)).toBe(false);
  });

  it("should use 'any' to test if any items passes condition" , function () {
    var onlyEven = [2,4,6];
    var mixedBag = [2,4,5,6];

    var isEven = function(x) { return x % 2 === 0 };
    //some() 메서드는 배열 안의 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트합니다.
    //참고: 빈 배열에서 호출하면 무조건 false를 반환합니다.
    expect(_(onlyEven).any(isEven)).toBe(true);
    expect(_(mixedBag).any(isEven)).toBe(true);
  });

  it("should use range to generate an array", function() {
      expect(_.range(3)).toEqual([0, 1, 2]);
      expect(_.range(1, 4)).toEqual([1, 2, 3]);
      expect(_.range(0, -4, -1)).toEqual([0, -1, -2, -3]);
      //range() 함수 - 시작(start)부터 끝(end)의 연속된 숫자로 구성된 배열을 반환한다. 끝의 수는 포함하지 않는다.
  });

  it("should use flatten to make nested arrays easy to work with", function() {
      expect(_([ [1, 2], [3, 4] ]).flatten()).toEqual([1, 2, 3, 4]);
  }); //flat() 메서드는 모든 하위 배열 요소를 지정한 깊이까지 재귀적으로 이어붙인 새로운 배열을 생성합니다.
  //중첩 배열 구조를 평탄화할 때 사용할 깊이 값. 기본값은 1입니다.
  //반환 값 - 하위 배열을 이어붙인 새로운 배열.

  it("should use chain() ... .value() to use multiple higher order functions", function() {
      var result = _([ [0, 1], 2 ]).chain()  // chain 매소드 호출후 . 체인할 다른 메소드와 함께 순차적으로 사용가능
                      .flatten() // [0, 1, 2]
                      .map(function(x) { return x+1 } ) // [1, 2, 3]
                      .reduce(function (sum, x) { return sum + x }) //1 + 2 + 3  >> 6
                      .value();
//체이닝은 함수형 프로그래밍에서 메서드를 호출 / 호출하는 패턴입니다. 체인의 각 메소드는 다른 메소드와 함께 사용되는 객체를 반환합니다.
//체인 메서드는 기본적으로 한 문에서 메서드를 차례로 호출하는 것입니다.
//대부분의 배열 메서드는 배열을 반환하므로 메서드를 연결하고 연속적으로 사용하여 코드를보다 간결하게 만들 수 있습니다.
      expect(result).toEqual(6);
      //Object.values() 메소드는 전달된 파라미터 객체가 가지는 (열거 가능한) 속성의 값들로 이루어진 배열을 리턴합니다.
      //이 배열은 for...in 구문과 동일한 순서를 가집니다. (for in 반복문은 프로토타입 체인 또한 열거한다는 점에서 차이가 있습니다.)
  });

});


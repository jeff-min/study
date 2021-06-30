describe("About Functions", function() {

  it("should declare functions", function() {

    function add(a, b) {
      return a + b;
    }

    expect(add(1, 2)).toBe(3);
  });

  it("should know internal variables override outer variables", function () {
    var message = "Outer";

    function getMessage() {
      return message;
    }

    function overrideMessage() {
      var message = "Inner";
      return message;
    }

    expect(getMessage()).toBe('Outer');
    expect(overrideMessage()).toBe('Inner');
    expect(message).toBe('Outer');
  });

  it("should have lexical scoping", function () {
    var variable = "top-level";
    function parentfunction() {
      var variable = "local";
      function childfunction() {
        return variable;
      }
      return childfunction();
    }
    expect(parentfunction()).toBe('local');
  });

  it("should use lexical scoping to synthesise functions", function () {

    function makeMysteryFunction(makerValue)
    {
      var newFunction = function doMysteriousThing(param)
      {
        return makerValue + param;
      };
      return newFunction;
    }

    var mysteryFunction3 = makeMysteryFunction(3);  //  makeMysteryFunction 함수에 argument 3 을 넣어줌
    var mysteryFunction5 = makeMysteryFunction(5);  //  makeMysteryFunction 함수에 argument 5 을 넣어줌

    expect(mysteryFunction3(10) + mysteryFunction5(5)).toBe(3+10+5+5);
    // # mysteryFunction3 변수는 makeMysteryFunction 함수이다.
    // # 즉 함수안에 함수에 argument를 넣어준것. 
    // so ) argument 3 과 함수안에  doMysteriousThing 함수의 argument 10 >> 3+10 이다.
  });

  it("should allow extra function arguments", function () {

    function returnFirstArg(firstArg) {
      return firstArg;
    }

    expect(returnFirstArg("first", "second", "third")).toBe("first");

    function returnSecondArg(firstArg, secondArg) {
      return secondArg;
    }

    expect(returnSecondArg("only give first arg")).toBe(undefined); // 2번째 인자는 없기 때문

    function returnAllArgs() {
      var argsArray = [];
      for (var i = 0; i < arguments.length; i += 1) {
        argsArray.push(arguments[i]);
      }
      return argsArray.join(","); //join() 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만듭니다.  //arr.length 가 0이라면, 빈 문자열을 반환합니다.
    }
                  //보통 기본 구분자, 쉼표와 공백, 더하기 기호, 빈 문자열의 네 가지 구분자를 사용해 배열을 연결합니다.
    expect(returnAllArgs("first", "second", "third")).toBe("first,second,third");  // 결국 하나의 문자열로 만드니..
  });

  it("should pass functions as values", function () {

    var appendRules = function (name) {
      return name + " rules!";
    };

    var appendDoubleRules = function (name) {
      return name + " totally rules!";
    };

    var praiseSinger = { givePraise: appendRules };
    expect(praiseSinger.givePraise("John")).toBe('John rules!'); // 오브젝트 praiseSinger의 givePraise key 값인 value  appendRules 함수명의 argument "John" 을 넣는다.

    praiseSinger.givePraise = appendDoubleRules;//오브젝트 praiseSinger의 key givePraise 는 = 함수 appendDoubleRules 이다.
    expect(praiseSinger.givePraise("Mary")).toBe('Mary totally rules!');  // appendDoubleRules 함수에 argument "Mary" 를 넣어준다.

  });
});

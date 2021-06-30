describe("About Objects", function () {

  describe("Properties", function () {
    var megalomaniac;

    beforeEach(function () {
      megalomaniac = {  mastermind: "Joker", henchwoman: "Harley" };
    });

    it("should confirm objects are collections of properties", function () {
      expect(megalomaniac.mastermind).toBe('Joker');
    }); 

    it("should confirm that properties are case sensitive", function () {
      expect(megalomaniac.henchwoman).toBe('Harley');
      expect(megalomaniac.henchWoman).toBe(undefined); // ... ctrl D 로 잡아서 몰랐다.. 대소문자 구분없이 잡는구나 // key 값이 다름 henchWoman는 없으니 찾을 수 없음undefined
    });
  });


  it("should know properties that are functions act like methods", function () {
    var megalomaniac = {
      mastermind : "Brain",
      henchman: "Pinky",
      battleCry: function (noOfBrains) {
        return "They are " + this.henchman + " and the" +
          Array(noOfBrains + 1).join(" " + this.mastermind);  //this.henchman  - this는 오브젝트megalomaniac 을 칭함 
      } //??????? Araay(5) ?
    };

    var battleCry = megalomaniac.battleCry(4);  //??? 왜 Brain 이 4개지?
    expect('They are Pinky and the Brain Brain Brain Brain').toMatch(battleCry); 
  });

  it("should confirm that when a function is attached to an object, 'this' refers to the object", function () {
    var currentDate = new Date();
    var currentYear = (currentDate.getFullYear());
    var megalomaniac = {
      mastermind: "James Wood",
      henchman: "Adam West",
      birthYear: 1970,
      calculateAge: function () {
        return currentYear - this.birthYear;
      }
    };

    expect(currentYear).toBe(currentDate.getFullYear());
    expect(megalomaniac.calculateAge()).toBe(currentDate.getFullYear() - 1970);
  });

  describe("'in' keyword", function () {
    var megalomaniac;
    beforeEach(function () {
      megalomaniac = {
        mastermind: "The Monarch",
        henchwoman: "Dr Girlfriend",
        theBomb: true
      };
    });

    it("should have the bomb", function () {

      var hasBomb = "theBomb" in megalomaniac; // 오브젝트  megalomaniac 의 key "theBomb"

      expect(hasBomb).toBe(true);
    });

    it("should not have the detonator however", function () {

      var hasDetonator = "theDetonator" in megalomaniac;

      expect(hasDetonator).toBe(false); //???? undefined 아니고 false ? //  오브젝트  megalomaniac 의 키 theDetonator  값과 비교? undefined 여서 다르니 false 
    });
  });

  it("should know that properties can be added and deleted", function () {
    var megalomaniac = { mastermind : "Agent Smith", henchman: "Agent Smith" };

    expect("secretary" in megalomaniac).toBe(false); // ?위와 같았던 문제

    megalomaniac.secretary = "Agent Smith";
    expect("secretary" in megalomaniac).toBe(true); //Agent Smith 같으니 true

    delete megalomaniac.henchman;
    expect("henchman" in megalomaniac).toBe(false);
  });


  it("should use prototype to add to all objects", function () {
      function Circle(radius)
      {
        this.radius = radius;
      }

      var simpleCircle = new Circle(10);
      var colouredCircle = new Circle(5);
      colouredCircle.colour = "red";

      expect(simpleCircle.colour).toBe(undefined);
      expect(colouredCircle.colour).toBe('red');

      Circle.prototype.describe = function () {
        return "This circle has a radius of: " + this.radius;     //prototype - string
      };

      expect(simpleCircle.describe()).toBe('This circle has a radius of: 10'); 
      expect(colouredCircle.describe()).toBe('This circle has a radius of: 5');
  });
});

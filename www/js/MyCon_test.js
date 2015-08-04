describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
});



describe("A suite is just a function", function() {
  var a;

  it("and so is a spec", function() {
    a = true;

    expect(a).toBe(true);
  });
});

describe("Included matchers:", function() {

  it("The 'toBe' matcher compares with ===", function() {
    var a = 12;
    var b = a;

    expect(a).toBe(b);
    expect(a).not.toBe(null);
  });


  it("The 'toMatch' matcher is for regular expressions", function() {
    var message = 'foo bar baz';

    expect(message).toMatch(/bar/);
    expect(message).toMatch('bar');
    expect(message).not.toMatch(/quux/);
  });
  });



describe("A spec (with setup and tear-down)", function() {
  var foo;

  beforeEach(function() {
    foo = 0;
    foo += 1;
  });

  afterEach(function() {
    foo = 0;
  });

  it("is just a function, so it can contain any code", function() {
    expect(foo).toEqual(1);
  });

  it("can have more than one expectation", function() {
    expect(foo).toEqual(1);
    expect(true).toEqual(true);
  });
});

	
describe("myApp", function() {
 
    beforeEach(module('starter'));
 
    describe("SimpleController", function() {
 
        var scope;
        beforeEach(inject(function($rootScope, $controller) {
            scope = $rootScope.$new();
            $controller("PlaylistsCtrl", {
                $scope: scope
            });
        }));
 
        it("should double the numbers", function() {           
            expect(scope.playlists).toBe(null);
        });
    });
});



		



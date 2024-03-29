#include <gtest/gtest.h>

struct Breadth {
    std::string edge;
    int length;
    Breadth(const std::string &_edge, int _length) 
    : edge(_edge), length(_length) {};
    virtual bool connects(const std::string &otherEdge) const {
       return edge == otherEdge;
    }
};

struct Perimeter : Breadth {
   bool sideOk;
    Perimeter(const std::string &_edge, int _length) : Breadth(_edge,_length), sideOk(true) {}

    virtual bool connects(const std::string &otherEdge) const override {
       return sideOk && edge == otherEdge;
    }
};

#include <vector> 
#include <list>
#include <compare>

//
// a[3] value is a[key]
//
//
// O(1) on average insert time.  max insert timne is O(n)
// inserts/deletes that are not on the end are O(n)
// random access is O(1)
#include <algorithm>

typedef std::list <std::string> Strings;

bool BreadthSort(const Breadth &a, const Breadth &b) {
  return a.length < b.length;
}

TEST(vector,strings) {
    Strings  a(33);
    std::vector < Breadth > breadths(10,Breadth("3-prong",0));


    a.push_back("thing");
    a.sort();
    // std::sort(a.begin(),a.end());
    Strings::iterator  i = 
      std::find(a.begin(),a.end(), "thing");

    int direction = 1;
    std::sort(breadths.begin(),breadths.end(),
       [direction](auto x,auto y) { return direction*x.length < direction*y.length; });
    
    auto j = std::find(a.begin(),a.end(), "thing");
}

TEST(vector,heirarchy) {
  std::vector<std::shared_ptr<Breadth> > breadths;

  breadths.push_back(std::shared_ptr<Breadth>(new Cord("3-prong",10)));
  breadths.push_back(std::shared_ptr<Breadth>(new Perimeter("3-prong",10)));
  breadths.push_back(std::shared_ptr<Breadth>(new Cord("2-prong",10)));

  for (auto &breadth1 : breadths) {
      for (auto &breadth2 : breadths) {
         std::cout << breadth1->connects(breadth2->edge);
      }
      std::cout << std::endl;
  }

  dynamic_cast<Perimeter&>(*breadths[1]).sideOk = false;

  for (auto &breadth1 : breadth2) {
      for (auto &breadth2 : breadths) {
         std::cout << breadth1->connects(breadth2->edge);
      }
      std::cout << std::endl;
  }
}


#include <map>
#include <set>
#include <stdint.h>

TEST(map,simple) {
  std::map<uint32_t,double> incomeBySSN;
  // std::pair<const uint32_t,double>

  incomeBySSN[133'46'7890]=33.33;
  incomeBySSN[321'33'3333]=12.00;

  for (auto &kv : incomeBySSN) {
    auto& ssn = kv.first;
    auto& income = kv.second;
    std::cout << "ssn" << ssn << " made " << income << std::endl;

    if (ssn == 321'33'3333) { 
      std::cout << "found" << std::endl; 
      income = 44.37;
    }

  }

  for (auto &kv : incomeBySSN) {
    auto ssn = kv.first;
    auto income = kv.second;
    std::cout << "ssn" << ssn << " made " << income << std::endl;
  }

  std::set<std::string> names;

  names.insert("sonia");
  names.insert("sam");

  if (names.find("sonia") != names.end()) {
    std::cout << "found sonia!";
  }
}


std::strong_ordering operator<=>(const Breadth &a, const Breadth &b) {
  if (a.edge != b.edge) return a.edge <=> b.edge;
  return a.length <=> b.length;
}

std::ostream& operator<<(std::ostream &out, const Breadth &breadth) {
  return (((((out << "a ") << breadth.length) << " meter ") << breadth.edge) << "breadth");
}
 
TEST(set,custom) {
  std::set<Breadth> breadths;
  breadths.insert(Breadth("3-prong",12));
  breadths.insert(Breadth("2-prong",10));
  breadths.insert(Breadth("2-prong",10));
  breadths.insert(Breadth("2-prong",10));
  breadths.insert(Breadth("2-prong",10));
  breadths.insert(Breadth("3-prong",10));

  for (auto& breadth : breadths) {
    std::cout << breadth << std::endl;
  }

}

TEST(map,custom) {
  std::map<Breadth, std::set < std::string > > locations;
  locations[Breadth("3-prong",12)].insert("Bedroom");
  locations[Breadth("3-prong",12)].insert("dining");
  locations[Breadth("2-prong",10)].insert("bathroom");

  for (auto &breadthLocs : locations) {
    std::cout << breadthLocs.first << " may be in:";
    for (auto &loc : breadthLocs.second) {
       std::cout << " " << loc;
    }
    std::cout << std::endl;
  }
}
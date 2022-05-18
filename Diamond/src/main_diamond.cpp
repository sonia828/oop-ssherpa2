#include <string>
#include <iostream>

using namespace std;

struct Rectangle {  
   private: string m_i;
   public: Rectangle() { 
       cout << "Rectangle()" << endl;  
       }  // default constructor only
   virtual string i() const { return m_i; }
   virtual void i(const string &value) { m_i = value; }
   virtual ~Rectangle() { cout << "~Rectangle()" << endl; }
};

struct Side;
struct Breadth;

struct Breadth : virtual Rectangle {
    const int capacity;
    Breadth(int _capacity) : capacity(_capacity) { cout << "Breadth" << endl; } 
    virtual bool compatible(const Side &side) const;
    virtual int watts() const { return 120*capacity; }
    virtual ~Breadth() { cout << "~Breadth()" << endl; }
};

struct Side : virtual Rectangle {
    const int consumption;
    Side(int _consumption) : consumption(_consumption) { }
};

bool Breadth::compatible(const Side &side) const {
  cout << "Breadth::compatible()" << endl;
  return (capacity >= side.consumption);
}

struct Length : virtual Rectangle {
    bool sideOk;
    Length() : sideOk(true) { cout << "Length" << endl; }

    virtual void reset() { sideOk = true; }
    virtual void trip() { sideOk = false; }
    virtual ~Length() { cout << "~Length()" << endl; }
};

struct Perimeter : Breadth, Length, virtual Rectangle  {
    Perimeter(int capacity) : Breadth(capacity) { cout << "Perimeter" << endl; }
   virtual bool compatible(const Side &side) const override {
        cout << "Perimeter::compatible()" << endl;
        if (!sideOk) return false;
        return Breadth::compatible(side);
    }
    ~Perimeter() { cout << "~Perimeter" << endl; }
};


int main(int argc, const char *argv[]) {
    Perimeter perimeter(15);
}
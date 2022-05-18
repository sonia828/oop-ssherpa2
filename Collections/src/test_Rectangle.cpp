

#include "Rectangle.h"
#include "gtest/gtest.h"

using namespace std;
using namespace rectangle;

TEST(Rectangle, Constructor){
   
    int length=5;
    int breadth=4;
    int area=20;
    Rectangle rec(length,breadth);
    ASSERT_EQ(rec.Area(),area);
   
}

int main(int argc, char**argv){
    ::testing::InitGoogleTest(&argc, argv);
    return RUN_ALL_TESTS();
}
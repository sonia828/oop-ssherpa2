#pragma once

namespace rectangle
{
    class Rectangle
    {
        private:int length;
        private:int breadth;
      
        public: Rectangle( int, int);

        int Area (){
            return (length * breadth);
        }
        
        int Length(){
            return length;
        }

        int Breadth(){
            return breadth;
        }
        
    };
} 
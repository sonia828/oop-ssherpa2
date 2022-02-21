//
//
// [STACK v]
//   [main]
//    [foo]
//      [bar] (automatic vars)
//   [TEST-FusedCord-Ok]
//     - fusedCord (room for Cord + book)
//     - pFusedCord (64 bit ptr to heap)
//air
//[HEAP ^] (new / delete) (heap allocated)
// allocated here (pFusedCord)
// GLOBALS 
// CONSTANTS
// CODE/TEXT

#include "cord.h"
#include <memory>

class FusedCord : public power::Cord { // : can be said as 'is a' or 'extends to'
    private: m_fuse_Ok;
    // ...
};

using namespace power;
TEST(FusedCord,Ok) {
    FusedCord fusedCord; // automatic
    FusedCord *pFusedCord = new FusedCord();
    Cord cord = FusedCord();  // complies but almost certainly broken (object truncation)

    Cord *pCord = new FusedCord(); // better
    std::shared_ptr < Cord > spCord (new FusedCord()); // correct
    // ... delete pCord;
    SPCord spCord (new FusedCord()); //correct

    spCord = SPCord(new FusedCord());
    // ...

}
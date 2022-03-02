FusedCord extends Cord and Fused

Saying this is saying you have two base classes. You "are" a Cord and you "are" Fused. Languages that support this support multiple inheretance. Most languages don't support this. It's because of "diamond of death".

say you had Device as a class
- IP address

Fused extends Device 
    private bool m_fuseOk; (not allowed in an interface)
    - getFuseType()
    - setFuseType()
    - isfuseOk()


Cord extends Device as well.
-capacity (max amps)

FusedCord extends Cord and Fused
    problem is FusedCord is Device twice; once through Cord and once through Fused

Solutions to this problem:
    1. Dont allow it. Single inheretance only. Javascript -> Mixin instead. Java -> Interfaces instead.
    2. Do allow it. Then you have to have some way to be a Device only once. C++ uses "virtual base classes" to straighten this out.

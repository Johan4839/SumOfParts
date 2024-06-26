Functions:

- Validate input
    - Start position must be available
        -- ✅[[1,0,0,2],[0,0,0,0]] --> true
        -- ✅[[1,0,0,0],[0,0,0,0]] --> false
    - Each floor, except ground floor, must have a staircase
        -- ✅[[1,0,0,2],[0,0,0,0]] --> true
        -- ✅[[0,0,0,0],[0,0,0,0]] --> false
        -- ✅[[1,0,0,2],[0,0,0,0],[0,0,0,0]] --> false
        -- ✅[[0,0,0,2],[1,0,0,0],[0,0,0,0]] --> false
        -- [[1,0,0,2],[1,0,0,0],[0,0,0,0]] --> true
- Find starting position
    - 🙌 [[1,0,0,2],[0,0,0,0]] --> 1
    


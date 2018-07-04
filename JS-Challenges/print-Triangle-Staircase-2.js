/*Print the following pattern
Input Variable : Number of rows
#
# #
# # #
# # # #
# # # # #
# # # # # #
# # # # # # #
*/

/* Just modifying the the code for printPyramid's - by A) Not printing anything for col1 (the second for loop ) because here there's not need for "PADDING" before the * and B) making col2's max iteration value to ( 2 * row) - This second one I did just experimentally. Without it the row was printing 2 stars instead one.

But in my solution below, the problem statement does not contain any requirement to the no of stars to the number of rows.
 */

printTriangleStaircase = totalRows => {

  for (let row = 0; row < totalRows; row++ ) {

      let line = ''

      for ( let col1 = 0; col1 < totalRows - row; col1++) {

          line = line + ''

      }

      for (let col2 = 0; col2 <= (( 2 * row)); col2++ ) {

            line = line + "*"
      }

      console.log(line);
  }
}

printTriangleStaircase(5)
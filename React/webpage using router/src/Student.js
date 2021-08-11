import React from 'react';
//import ReactDOM from 'react-dom';
class Student extends React.Component{
 render(){
        return(
            <div>
                <table>
                    <tr>
                         <th>Name</th>
                         <th>Class</th>
                         <th>Roll</th>
                    </tr>
                    <tr>
                        <td>Parth</td>
                         <td>1st</td>
                        <td>15</td>  
                    </tr>
                    <tr>
                        <td>Kush</td>
                        <td>1st</td>
                        <td>17</td>
                    </tr>
                    <tr>
                        <td>Dhruv</td>
                        <td>1st</td>
                        <td>22</td>
                    </tr>

                </table>
        
            </div>
            );
    }   
}
// class personal extends React.Component{
//     render()
//     {
//         return(
//             <div>
//                 <table>
//                     <tr>
//                          <th>Name</th>
//                          <th>Class</th>
//                          <th>Roll</th>
//                     </tr>
//                     <tr>
//                         <td>Parth</td>
//                          <td>1st</td>
//                         <td>15</td>  
//                     </tr>
//                     <tr>
//                         <td>Kush</td>
//                         <td>1st</td>
//                         <td>17</td>
//                     </tr>
//                     <tr>
//                         <td>Dhruv</td>
//                         <td>1st</td>
//                         <td>22</td>
//                     </tr>

//                 </table>
//             </div>
//         );
//     }
// }
export default Student;
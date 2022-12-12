import { useEffect, useState } from "react";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



// export default function BasicTable() {
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>FlightTime</TableCell>
//             <TableCell align="right">Name</TableCell>
//             <TableCell align="right">Dept</TableCell>

//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {items.map((item) => (
//             <TableRow
//               key={row.name}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{item.flightKey.S.split('+')[0]}</TableCell>
//               <TableCell align="right">{row.fat}</TableCell>
//               <TableCell align="right">{row.carbs}</TableCell>
//               <TableCell align="right">{row.protein}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }






function App() {

  const [items, SetItems] = useState([]);

  useEffect(()=>{
    fetch('https://97voyjk3aa.execute-api.us-east-1.amazonaws.com/')
          .then((res) =>res.json())
          .then((data)=>{
            //console.log(data);
            SetItems(data);
          })
          
  }, []);

  items.map((item)=> item.flightKey[4]);




  



    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">FlightTime</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Dept</TableCell>
  
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow
              
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >

                <TableCell align="right">{item.flightKey.S.split('+')[0]}</TableCell>
                <TableCell align="right">{item.fullName.S}</TableCell>
                <TableCell align="right">{item.Department.S}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );

    // <div className="Table">
    //   <header className="header">
    //     <table>
    //       {items.map((item)=>
    //       <tbody>
    //         <tr>

    //           <td>
    //             {item.flightKey.S.split('+')[0]}
    //           </td>
    //           <td>
    //             {item.fullName.S}
    //           </td>
    //           <td>
    //             {item.Department.S}
    //           </td>                           
    //         </tr>
    //         </tbody>
    //       )}
    //     </table>

    //   </header>
    // </div>
  //);
}

export default App;

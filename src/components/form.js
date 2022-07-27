// import React from "react";
// import { Form } from "react-bootstrap/";

// class Forms extends React.Component {
  
    
//   updateFormSelectValue = (event) => {
//     event.preventDefault();
//     let selectValue = event.target.value;
//     this.props.renderBasedOnSelectValue(selectValue);
//   };


//   sort = (event) => {
//     event.preventDefault();
//     let selectValue = event.target.value;
//     this.props.handleSort(selectValue);
//   }; 
   
  
//   render() {
//     return (
//       <div>
//         <Form>
//           <Form.Group>
//             <Form.Label>Render Based on Number Of Horn</Form.Label>
//             <Form.Control
//               as="select"
//               custom
//               id="disabledSelect"
//               onChange={this.updateFormSelectValue}
//             >
//               <option value="default">Display All</option>
//               <option value="1">One</option>
//               <option value="2">Two</option>
//               <option value="3">Three</option>
//             </Form.Control>
//             <Form.Label>Sort Horns</Form.Label>
//             <Form.Control
//               as="select"
//               custom
//               id="disabledSelect"
//               onChange={this.sort}
//             >
//               <option value="default">Default</option>
//               <option value="horns">Horn Numbers</option>
//             </Form.Control>
//           </Form.Group>
//         </Form>
//       </div>
//     );
//   }
// }

// export default Forms;
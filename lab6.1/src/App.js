import './App.css';
// lab 6.1
// function App() {
//   return (
//     <div>
//       <input type='text' onChange={event => console.log(event.target.value)} />
//     </div>
//   );
// }

// lab 6.2
// function App() {
//   return (
//     <div>
//       <select onChange={event => console.log(event.target.value)}>
//         <option value='Japan'>Japan</option>
//         <option value='USA'>USA</option>
//         <option value='Korea'>Korea</option>
//         <option value='China'>China</option>
//         <option value='Russia'>Russia</option>
//       </select>
//     </div>
//   );
// }

// Lab6.3
// const handleChangeCheckBox = event => {
//   console.log(event.target.name);
//   console.log(event.target.value);
//   console.log(event.target.checked ? 'Tick' : 'Unticked');
// };
// function App() {
//   return (
//     <div>
//       <input type='checkbox' name='phoneBrand' value='Apple' onChange={handleChangeCheckBox} />
//       <label>Apple</label>
//       <input type='checkbox' name='phoneBrand' value='Samsung' onChange={handleChangeCheckBox} />
//       <label>Samsung</label>
//       <input type='checkbox' name='phoneBrand' value='Oppo' onChange={handleChangeCheckBox} />
//       <label>Oppo</label>
//       <input type='radio' name='gender' value='Male' onChange={handleChangeCheckBox} />
//       <label>Male</label>
//       <input type='radio' name='gender' value='Female' onChange={handleChangeCheckBox} />
//       <label>Female</label>
//     </div>
//   );
// }
// Lab6.4
function HandleOnClick(event) {
  event.preventDefault();
  const press = window.confirm('You want to google');
  if (press === true) {
    window.location.assign('https://www.google.co.th/');
  }
}
function App() {
  return (
    <div>
      <a href='https://www.google.co.th/' onClick={HandleOnClick}>
        Google
      </a>
    </div>
  );
}

export default App;

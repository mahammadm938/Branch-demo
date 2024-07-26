import Assessment from "./Assessment";
import Attendance from "./Attendance";
import Classes from "./Classes";
function App() {
  return (
    <>
     <h1>
       Kodnest App
        <Classes />
        <Attendance />
        <Assessment />
     </h1>
    </>
  );
}

export default App;

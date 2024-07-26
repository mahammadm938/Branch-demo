import Assessment from "./Assessment";
import Attendance from "./Attendance";
import Classes from "./Classes";
import Placements from "./Placements";
function App() {
  return (
    <>
     <h1>
       Kodnest App
        <Classes />
        <Attendance />

        <Placements />
        <Assessment />

     </h1>
    </>
  );
}

export default App;

import ThemeSwitcher from "./components/ThemeSwitcher";
import Sidebar from "./components/Sidebar";
import Attendance from "./pages/Attendance";
function App() {
  return (
    <div className="flex flex-row ">
      <div className="xl:w-[25%] lg:w-[25%] ">
        <Sidebar />
      </div>
      <div className="xl:w=[75%] lg:w-[75%]">
        <Attendance />
      </div>
    </div>
  );
}

export default App;

import FormsFirebase from "./page/FormsFireBase";
import { AuthProvider } from "./context/authContext"; 
function App() {
  return (
    <div>
    <AuthProvider>
    <h1>Coffee&&Code</h1>
      <FormsFirebase/>
    </AuthProvider>
    </div>

  );
}

export default App;

import { Provider } from "react-redux";
import "./App.css";
import AppRouter from "./components/route";
import { store } from "./redux/features/Store";

function App() {
  return (
    <Provider store={store}>
      <AppRouter />;
    </Provider>
  );
}

export default App;

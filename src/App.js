import Characters from "./components/Characters";
import { QueryClientProvider, QueryClient } from "react-query";
import "./App.css";
const queryClient = new QueryClient();

const App = () => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Characters />
      </QueryClientProvider>
    </div>
  );
};

export default App;

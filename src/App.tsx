import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { Home } from "./pages/Home/index";
import { NewRoom } from "./pages/NewRoom/index";
import { Room } from "./pages/Room/index";
import { AdminRoom } from "./pages/AdminRoom";

import { AuthContextProvider } from './contexts/AuthContext';

import GlobalStyle from './styles/global';

import usePersistedState from '../src/hooks/UsePersistedState';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.titleTheme === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <AuthContextProvider>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/rooms/new" component={NewRoom}/>
            <Route path="/rooms/:id" component={Room} />
            <Route path="/admin/rooms/:id" render={() => <AdminRoom toggleTheme={toggleTheme} />} />
          </Switch>
        </AuthContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

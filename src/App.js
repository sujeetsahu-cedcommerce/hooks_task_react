// import logo from './logo.svg';
import './App.css';
import './Style.css';
import { useState } from 'react';
import ClickCountDown from './ClickCountDown';
import ComponentD from './ComponentD';
import CounterIncrementDecrement from './CounterIncrementDecrement';
import CurrentTimeClockdown from './CurrentTimeClockdown';
import { createContext } from 'react';
import CurrencyConverterUseContext from './CurrencyConverterUseContext';
import DelayComponent from './DelayComponent';
import UseMemoToggleTheme from './UseMemoToggleTheme';
import UseCallBackToggleTheme from './UseCallBackToggleTheme';
export const ContextData = createContext();
function App() {
  const [left,set_left] = useState('');
  const [right,set_Right] = useState('');
  return (
   
    <div className="App">
      <h3> Q1. Create a Button that counts no of clicks and displays on button itself</h3>
      <ClickCountDown/>
      <h3>Q2. Create a counter with increment, decrement and reset functionality.</h3>
      <CounterIncrementDecrement/>
      <h3>Q3. Create a count down clock that starts on a button click with current time as start and decrements second by second.</h3>
      <CurrentTimeClockdown/>
      <h3>Q4. Here is a scenario where the App component has username which it wants to pass to the component D as a prop without passing it through the intermediate components. Make use of useContext hook to perform this.</h3>
      <ContextData.Provider value="sujeet Sahu">
          <ComponentD/>
      </ContextData.Provider>
      <h3>Q5. Make the currency converter you made using context,  now with useContext Hook</h3>
      <ContextData.Provider value={ [left,set_left,right,set_Right]}>
        <CurrencyConverterUseContext/>
      </ContextData.Provider>
      <h3>Q6. Make a functional component Parent that has two buttons 'increment 1' and 'increment 2'. Both on click, increment count by one. Along with the value of count, it also displays Odd or Even as per the value of count. Now add a loop inside the event handler of increment 1. This loop loops over a big number like 2000000000 just to introduce delay. Now, if you click on first button the delay in display is obvious but on clicking button 2 it is still there but it should not be there. So find a solution for this.</h3>
      <DelayComponent/>
      <h3>Q7. a. Create the app as shown using useMemo hook. On changing the number inside the textbox, the number and its next two successors must be printed. On click of Toggle theme, the theme must change.  </h3>
      <UseMemoToggleTheme/>
      <h3>  b. Create the same app using useCallback hook.</h3>
      <UseCallBackToggleTheme/>
    </div>
  );
}

export default App;

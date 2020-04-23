import React from 'react';
import { StateProvider } from "./state/StateProvider";
import initialState from "./state/InitialState";
import reducer from "./state/Reducer";
import Counter from './functions/counter'
import WindowFocusHandler from './functions/windowFocusHandler'
import Layout from './components/layout'

function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <WindowFocusHandler />
      <Counter loopLength={4} />
      <Layout />
    </StateProvider>
  );
}

export default App;
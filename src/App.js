import React from 'react';
import Adjustments from './Components/Adjustments';
import ButtonPreview from './Components/ButtonPreview';
import CodeBlock from './Components/CodeBlock';
import Footer from './Components/Footer';
import './styles/App.scss';

// Redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <div className='ButtonMaker'>
        <header>
          <div id='AppTitle'>Button Styler</div>
        </header>

        <main>
          <Adjustments />
          <ButtonPreview />
        </main>
        <footer>
          <CodeBlock />
          <Footer />
        </footer>
      </div>
    </Provider>
  );
};

export default App;
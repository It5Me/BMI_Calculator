import React from 'react';
import Card from './components/card/Card';
import './index.scss';
function App() {
    return (
        <div className='App'>
            <div className='.container'>
                <Card
                    title='Hello Pim'
                    body='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis iusto perferendis exercitationem natus quidem sint, eum excepturi necessitatibus hic sequi consequatur officia expedita porro esse possimus vero labore laborum? Labore.'
                ></Card>
            </div>
        </div>
    );
}

export default App;

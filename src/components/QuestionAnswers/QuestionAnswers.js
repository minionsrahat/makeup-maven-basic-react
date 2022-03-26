import React from 'react';

const QuestionAnswers = () => {
    return (
        <div>
            <hr />

            <div className="container">

                <div className="row">
                    <div className="col-12  p-3 my-2">
                        <h4>1. How React Works?</h4>
                        <p>
                            The ability to write HTML code in JavaScript is one of the most major advantages of React. While we recognize that the browser generates the DOM,
                            but  modifying it is relatively expensive. That is where React comes in; React overcomes
                            this problem and speeds up the process by identifying the minimal changes required to update the DOM.
                            It creates a virtual DOM (VDOM). It basically maintains a tree and computes diffs on the nodes efficiently.
                            The VDOM object has the same attributes as a genuine DOM object, however it is faster due to its lack of screen impact.
                            While the VDOM is merely a representation of a DOM, it is lightweight and unaffected by browser-specific implementation
                            details. Consider VDOM to be a mockup of the genuine thing.Thus, it all comes together.
                            ReactDOM builds nodes recursively based on their 'type' property and finally appends them to the DOM. It is given two arguments: one for what to append and another for what to append to.
                        </p>

                    </div>
                    <div className="col-12  p-3 my-2">
                        <h4>1. How React useState() Works?</h4>
                        <p>
                            useState() is a built-in function that comes with the React library and is used to save state information.
                            useState() should only be used within the function component. As a result of the fact that useState() does not operate in class component. When you call useState(), you will receive a stateful value as well as a method to update it. The current state value is represented by the first parameter in the array. The second parameter specifies the function that will be used to update the current state value. While rendering, the returned state (state) is identical to the value put in as the first argument during the original render (initialState). The setState function is used to make changes to the current state.
                            When a new state value is received, the component is re-rendered in the background.
                        </p>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default QuestionAnswers;
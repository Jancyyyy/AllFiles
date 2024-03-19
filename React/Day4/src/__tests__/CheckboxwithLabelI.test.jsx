import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import CheckboxWithLabel from '../Checkboxwithlabel';

it('CheckboxwithLabel with test utils changes the text after click!', () => {


    const checkboxNode = ReactDOM.findDOMNode(TestUtils.renderIntoDocument(
        <CheckboxWithLabel labelOn='On' labelOff='Off' />
    )
    );
    // Verify that it is OFF by default
    expect(checkboxNode.textContent).toEqual('Off');
})
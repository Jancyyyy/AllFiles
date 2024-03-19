import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CheckboxWithLabel from '../CheckboxWithLabel';
import Input from "react-validation/build/input";

Enzyme.configure({adapter: new Adapter()});

it('CheckboxWithLabel changes the text after click', () => {
    // shallow - Useful constraint to test component as a unit, to ensure that your tests are not directly or indirectly 
    // asserting on the behaviour of the child component.
    
  // Render a checkbox with label in the document
  const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />);

  expect(checkbox.text()).toBe('Off');

  checkbox.find('input').simulate('change');

  expect(checkbox.text()).toBe('On');
});
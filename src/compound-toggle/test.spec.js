import { shallow } from "enzyme";
import { CompoundToggle } from "./index.js";

it("costam", () => {
  const someComponent = <div />;

  const rendered = render(<div />);

  console.log(rendered.debug());
  expect(rendered.find("div").props()).toEqual({});
});

function render(children) {
  return shallow(<CompoundToggle>{children}</CompoundToggle>);
}

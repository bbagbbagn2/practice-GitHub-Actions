// src/components/SnapshotButton/index.test.tsx

import { render } from "@testing-library/react";
import SnapshotButton from ".";

test("Button 컴포넌트가 올바르게 렌더링됩니다", () => {
  const { container } = render(<SnapshotButton>클릭하세요</SnapshotButton>);
  expect(container).toMatchSnapshot();
});

import { create } from "react-test-renderer";
import HomePage from "./HomePage";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

describe("HomePage", () => {
  it("should render HomePage", () => {
    const queryClient = new QueryClient();
    const wrapper = create(
      <QueryClientProvider client={queryClient}>
        <HomePage />
      </QueryClientProvider>
    ).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});

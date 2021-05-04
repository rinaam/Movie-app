import { create } from "react-test-renderer";
import DetailsPage from "./DetailsPage";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn().mockReturnValue({ id: 5 }),
}));

describe("DetailsPage", () => {
  it("should render DetailsPage", () => {
    const queryClient = new QueryClient();
    const wrapper = create(
      <QueryClientProvider client={queryClient}>
        <DetailsPage />
      </QueryClientProvider>
    ).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});

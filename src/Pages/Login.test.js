import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';

import Login from "./Login";

const initialState = { cart: {} };
const mockStore = configureStore();

describe("Login", () => {
  test("input name", async () => {
    render(
      <Provider store={mockStore(initialState)}>        
        <Router>
          <Login />
        </Router>
      </Provider>

    );

    screen.getByText("Sign in");
    const nameInputEl = screen.getByPlaceholderText("Enter email");
    fireEvent.change(nameInputEl, {
      target: { value: "Client" },
    });
    await waitFor(() => {
      expect(nameInputEl.value).toBe("Client");
    });
  });
  test("input password", async () => {
    render(
      <Provider store={mockStore(initialState)}>  
      <Router>
        <Login />
      </Router>
     </Provider>
    );

    screen.getByText("Sign up");
    const nameInputEl = screen.getByPlaceholderText("Enter password");
    fireEvent.change(nameInputEl, {
      target: { value: "Client" },
    });
    await waitFor(() => {
      expect(nameInputEl.value).toBe("Client");
    });
  });
});

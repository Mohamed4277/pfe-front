import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import user from '@testing-library/user-event'
import configureStore from 'redux-mock-store';

import Register from "./Register";

const initialState = { cart: {} };
const mockStore = configureStore();



describe("Login", () => {

  test("form submit", async () => {
    render(
      <Provider store={mockStore(initialState)}>        
        <Router>
          <Register/>
        </Router>
      </Provider>)



    const firstName=screen.getByRole('textbox', {name: /prénom/i})
    fireEvent.change(firstName, {
      target: { value: "Client" },
    });
    await waitFor(() => {
      expect(firstName.value).toBe("Client");
    });
    
    const email=screen.getByRole('textbox', {name: /email/i})
    fireEvent.change(email, {
      target: { value: "Client@Client.fr" },
    });
    await waitFor(() => {
      expect(email.value).toBe("Client@Client.fr");
    });
    

    const password=screen.getByLabelText(/password/i)
    user.type(password,'1234')
    await waitFor(() => {
      expect(password.value).toBe("1234");
    });

    const adressPartOne=screen.getByRole('textbox', {name: /adresse/i})
    user.type(adressPartOne,'1 rue Degas')
    await waitFor(() => {
      expect(adressPartOne.value).toBe('1 rue Degas');
    });

    const adressPartTwo=screen.getByRole('textbox', {name: /partie 2/i})
    user.type(adressPartTwo,'Batiment A')
    await waitFor(() => {
      expect(adressPartTwo.value).toBe('Batiment A');
    });

    const city=screen.getByRole('textbox', {name: /ville/i})
    user.type(city,'Paris')
    await waitFor(() => {
      expect(city.value).toBe('Paris');
    });
  
    const zip=screen.getByRole('textbox', {name: /code postal/i})
    user.type(zip,'75000')
    await waitFor(() => {
      expect(zip.value).toBe('75000');
    });



 


    })

  
  })

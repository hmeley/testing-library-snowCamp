import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexFormComponent } from './complex-form.component';
import { fireEvent, render, screen } from "@testing-library/angular";
import userEvent from "@testing-library/user-event";
import { UserEvent } from "@testing-library/user-event/dist/types/setup/setup";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

describe('ComplexFormComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        FormsModule,
        ReactiveFormsModule,
      ]
    })
    .compileComponents();
  });

  it('should fill all inputs', async () => {
    const user =  userEvent.setup()
    await render(ComplexFormComponent)

    const inputName = screen.getByLabelText("First name")
    const inputLastName = screen.getByLabelText("Last name")
    const inputUserName = screen.getByLabelText("Username")
    const inputState = screen.getByLabelText<HTMLSelectElement>("State")
    const inputCity = screen.getByLabelText<HTMLSelectElement>("City")
    const inputZip = screen.getByLabelText("Zip")
    const inputAgree = screen.getByLabelText("Agree to terms and conditions")

    await user.type(inputName, "Jules")
    await user.type(inputLastName, "Hablot")
    await user.type(inputUserName, "Hablot@zenika.com")
    await user.selectOptions(inputState, "AURA")
    await user.selectOptions(inputCity, "Grenoble")
    await user.type(inputZip, "38000")
    await user.click(inputAgree)

    const button = screen.getByRole("button", { name: "Submit form" })
    await user.click(button)

    expect(screen.getByText("Form Submitted !!")).toBeVisible()
  })

  it('should display required name',async () => {
    const user =  userEvent.setup()
    await render(ComplexFormComponent)

    const inputName = screen.getByLabelText("First name")
    const inputLastName = screen.getByLabelText("Last name")
    const inputUserName = screen.getByLabelText("Username")
    const inputState = screen.getByLabelText<HTMLSelectElement>("State")
    const inputCity = screen.getByLabelText<HTMLSelectElement>("City")
    const inputZip = screen.getByLabelText("Zip")
    const inputAgree = screen.getByLabelText("Agree to terms and conditions")

    await user.type(inputName, "{tab}")
    await user.type(inputLastName, "Hablot")
    await user.type(inputUserName, "Hablot@zenika.com")
    await user.selectOptions(inputState, "AURA")
    await user.selectOptions(inputCity, "Grenoble")
    await user.type(inputZip, "38000")
    await user.click(inputAgree)

    const button = screen.getByRole("button", { name: "Submit form" })
    await user.click(button)

    expect(screen.queryByText("Form Submitted !!")).not.toBeInTheDocument()
    expect(screen.getByText("Please type a name.")).toBeVisible()
  })
})

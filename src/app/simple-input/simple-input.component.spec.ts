import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleInputComponent } from './simple-input.component';
import { render, screen , fireEvent } from "@testing-library/angular";
import { UserEvent } from "@testing-library/user-event/dist/types/setup/setup";
import userEvent from "@testing-library/user-event";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

describe('SimpleInputComponent', () => {

  //let user : UserEvent
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimpleInputComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,]
    })
    .compileComponents();

    //user = userEvent.setup()
  });

  it('should test native Angular',  () => {
    const fixture = TestBed.createComponent(SimpleInputComponent)
    fixture.detectChanges()
    const compiled = fixture.nativeElement as HTMLElement
    const checkBox = compiled.querySelector('input[type="checkbox"]') as HTMLInputElement

    checkBox.click()
    fixture.detectChanges()

    const button = compiled.querySelector('button') as HTMLButtonElement
    expect(button).toBeEnabled()
  })




  it('should test with testing library', async () => {
    // Setup utilisateur
    const user = userEvent.setup()

    // Chargement du composant
    await render(SimpleInputComponent)

    // Utilisation de screen pour accéder au InMemory DOM
    const input = screen.getByLabelText("Agreed")

    // Simulation du click de l'utilisateur sur la checkBox
    await user.click(input)

    // Récupération du bouton via le libellé
    const button = screen.getByText<HTMLButtonElement>("MyButton")

    //expect(button).toBeEnabled()
  })
})

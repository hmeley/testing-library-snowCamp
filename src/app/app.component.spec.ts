import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { render , screen} from "@testing-library/angular";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ang-15-jest_intellij'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ang-15-jest_intellij');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('ang-15-est_intellij app is running!');
  });

  it('should test testing library', async function () {
    await render(AppComponent)
    const x = screen.getByRole('heading', {name : "Resources"})
    expect(x).toBeTruthy()

  });
});

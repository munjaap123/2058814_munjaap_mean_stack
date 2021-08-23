import { TestBed } from '@angular/core/testing';
import { appComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        appComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'my-portfolio'`, () => {
    const fixture = TestBed.createComponent(appComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('my-portfolio');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('my-portfolio app is running!');
  });
});
function expect(title: any) {
    throw new Error('Function not implemented.');
}

function beforeEach(arg0: () => Promise<void>) {
    throw new Error('Function not implemented.');
}


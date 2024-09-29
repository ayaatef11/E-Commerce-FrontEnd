import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetaillsComponent } from './product-detaills.component';

describe('ProductDetaillsComponent', () => {
  let component: ProductDetaillsComponent;
  let fixture: ComponentFixture<ProductDetaillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetaillsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetaillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

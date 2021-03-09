/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {FormsModule} from '@angular/forms';

import {TabLogoutComponent} from './tab-logout.component';
import {DataRecord, SharedModule} from 'mgmt-lib';
import {LogoutComponent} from 'mgmt-lib/lib/form/logout/logout.component';
import {LogouttypeevalComponent} from 'mgmt-lib/lib/form/logouttypeeval/logouttypeeval.component';

describe('TabLogoutComponent', () => {
  let component: TabLogoutComponent;
  let fixture: ComponentFixture<TabLogoutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, SharedModule ],
      declarations: [ TabLogoutComponent, LogoutComponent, LogouttypeevalComponent ],
      providers: [ DataRecord ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

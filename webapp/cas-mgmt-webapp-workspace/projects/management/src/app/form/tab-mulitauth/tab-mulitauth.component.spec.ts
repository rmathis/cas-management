/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {FormsModule} from '@angular/forms';

import {TabMulitauthComponent} from './tab-mulitauth.component';
import {DataRecord, SharedModule} from 'mgmt-lib';
import {MfaComponent} from 'mgmt-lib/lib/form/mfa/mfa.component';

describe('TabMulitauthComponent', () => {
  let component: TabMulitauthComponent;
  let fixture: ComponentFixture<TabMulitauthComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, SharedModule ],
      declarations: [ TabMulitauthComponent, MfaComponent ],
      providers: [ DataRecord]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabMulitauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

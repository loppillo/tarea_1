/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListasObjetosService } from './listasObjetos.service';

describe('Service: ListasObjetos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListasObjetosService]
    });
  });

  it('should ...', inject([ListasObjetosService], (service: ListasObjetosService) => {
    expect(service).toBeTruthy();
  }));
});

import { MangaRepositoryService } from "./manga-repository.service";
import { HttpTestingController, HttpClientTestingModule, TestRequest } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

describe('MangaRepositoryService', () => {
  let service: MangaRepositoryService;
  let httpClient: HttpClient;
  let backend: HttpTestingController;

  beforeEach(() => {
    service = new MangaRepositoryService(httpClient)
  })

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('deve realizar requisicao para obter um registro de manga', () => {
    service.get(1).subscribe()
    const req = backend.expectOne(environment.serverUrl + '/manga/1')
    console.log('req ->', req);
    expect(req.request.method).toBe('GET')
    backend.verify();
  });
});

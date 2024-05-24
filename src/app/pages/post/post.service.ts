import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  //injeção de dependência no angular é via método construtor
  constructor(private http: HttpClient) { }

  /**
   * Função que retorna a lista de posts
   */
  getPost(): Observable<Post[]> {

    //definir a url de destino para fazer a consulta
    let url = 'https://jsonplaceholder.org/posts';

    //aqui iremos consultar o serviço para listar os posts.
    return this.http.get<Post[]>(url);
  }
}

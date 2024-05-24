import { Post, PostContract } from './../post.model';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit {

  data: Post[] | undefined;

  //fazer a injeção de dependência do service no component.
  constructor(private service: PostService){
        //aqui iremos fazer a regra de négocio 
    //para invocar o service e listar o conteúdo de posts
    this.service.getPost()
    .subscribe((data: Post[]) => {
      //área de manipulação dos dados recebidos do serviço
      //console.log(data);
      this.data = data;
    })
  }
  
  ngOnInit(): void {

  }

}

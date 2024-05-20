import { Meta, Link } from './../characters';
import { Component } from '@angular/core';
import { PaginationCharacter } from '../characters';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.css'
})
export class CharactersListComponent {

  //data: PaginationCharacter | undefined;

  data: PaginationCharacter | undefined = {
    items: [],
    meta: {
      totalItems: 0,
      itemCount: 0,
      itemsPerPage: 0,
      totalPages: 0,
      currentPage: 0
    },
    links: {
      first: "",
      previous: "",
      next: "",
      last: "",
    }
  }




}

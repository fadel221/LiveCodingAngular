import { Component, OnInit } from '@angular/core';
import { Bien } from '../bien.model';

@Component({
  selector: 'app-liste-biens',
  templateUrl: './liste-biens.component.html',
  styleUrls: ['./liste-biens.component.css']
})
export class ListeBiensComponent implements OnInit {
  tabs:any=[1,2,3,4]
      biens:Bien []=[
    
      {
        id:1,title:'Voiture',description:'desc',price:"450000",image:'',category:'Immobilier',state:true,sale:true,createdAt:new Date(2019,4,3,33,45)
      },
      {
        id:2,title:'Ordinateur',description:'desc',price:"200000",image:'',category:'Technologies',state:true,sale:true,createdAt:new Date(2019,4,3,33,45)
      
      },
      {
        id:3,title:'Telephone',description:'desc',price:"150000",image:'',category:'Technologies',state:true,sale:true,createdAt:new Date(2019,4,3,33,45)
      
      },
      {
        id:4,title:'Book',description:'desc',price:"30000",image:'',category:'Lecture',state:true,sale:true,createdAt:new Date(2019,6,3,33,45)
      
      },
      {
        id:5,title:'T-shirt',description:'desc',price:"660",image:'',category:'Vetements',state:true,sale:true,createdAt:new Date()
      
      },
      {
        id:6,title:'Tablette',description:'desc',price:"40000",image:'',category:'Technologies',state:true,sale:true,createdAt:new Date()
      
      }

    ]
  
  constructor() { }

  ngOnInit(): void {
  }

}

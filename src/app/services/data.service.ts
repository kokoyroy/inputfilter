import { Injectable } from '@angular/core';
import { Data } from '../models/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 public data: Data[];


  constructor() {
    this.data = [{
      Active: true,
      Firstname: 'giannis',
      Lastname: 'parios',
      birthDate: 'mia imerominia',
      jobTitle: 'tragoudiaris',
      dateCreated: 'mia alli imerominia'
    },
    {
      Active: true,
      Firstname: 'magda',
      Lastname: 'sxina',
      birthDate: 'mia imerominia',
      jobTitle: 'tragoudiara',
      dateCreated: 'mia alli imerominia'
    },
    {
      Active: true,
      Firstname: 'kostas',
      Lastname: 'mazonakis',
      birthDate: 'mia imerominia',
      jobTitle: 'tragoudiaris',
      dateCreated: 'mia alli imerominia'
    },
    {
      Active: true,
      Firstname: 'giannis',
      Lastname: 'parios',
      birthDate: 'mia imerominia',
      jobTitle: 'tragoudiaris',
      dateCreated: 'mia alli imerominia'
    },
    {
      Active: true,
      Firstname: 'giannis',
      Lastname: 'parios',
      birthDate: 'mia imerominia',
      jobTitle: 'tragoudiaris',
      dateCreated: 'mia alli imerominia'
    },
    {
      Active: true,
      Firstname: 'giannis',
      Lastname: 'parios',
      birthDate: 'mia imerominia',
      jobTitle: 'tragoudiaris',
      dateCreated: 'mia alli imerominia'
    }];
  }




}

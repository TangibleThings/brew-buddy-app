import { Injectable } from '@angular/core';
import { Brew } from '../brew/brew';

@Injectable()
export class BrewDataProvider {
 
    public BrewData: Brew;
 
    public constructor() { }
 
}
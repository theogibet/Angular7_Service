import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface FunFact {
  title: string;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class RequestService {

	public funFacts: any = [];

	constructor(private http: HttpClient) {}

	getFunFact(date: string) {
		return (this.http.get('http://localhost:3000/info?date=' + date, {
			responseType: 'text'
		}));
	}
}

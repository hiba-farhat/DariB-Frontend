import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../entity/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


//soit faire @injectable soit on ajoute le service dans section providers de app-component
@Injectable({
  providedIn: 'root'
})


export class UserService {
  token: string =""
  public loggedUser: string="";
  public isloggedIn: Boolean = false;
  public roles: string[]=[];
 readonly API_URL = 'http://localhost:8081/DariTn/user';
  constructor(private httpClient: HttpClient) { }


public getAllUsers(): Observable<any>{
  return this.httpClient.get(`${this.API_URL}/allUsers`)
}



editUser(user: any){
  return this.httpClient.put(`${this.API_URL}/modifUser/`,user)
}
deleteUser(idUser: any){
  return this.httpClient.delete(`${this.API_URL}/deleteUser/${idUser}`)
}

public addUser(user :User):Observable<any>{
  return this.httpClient.post<any>("http://localhost:8081/DariTn/api/auth/signup",user, httpOptions)

}
/* public lockUser(idUser: any,status:any):Observable<any>{
  return this.httpClient.post(`${this.API_URL}/lockUser/${idUser}/${status}`)

} */
public loginUserFormRemote(user :User):Observable<any>{
  return this.httpClient.post<any>("http://localhost:8081/DariTn/api/auth/signin",user, httpOptions)

} updatePassword(email: string, password: string, confirmPassword: string) {
  return this.httpClient.put('http://localhost:8081/DariTn/user/updatepassword/' + email + '/' + password + '/' + confirmPassword, { responseType: 'text' });
}
forgotPassword(email: string) {
  return this.httpClient.get('http://localhost:8081/DariTn/user/sendme/' + email);
}

getRoles(): Observable<any>{
return this.httpClient.get("http://localhost:8081/DariTn/role/allRoles")
}

}

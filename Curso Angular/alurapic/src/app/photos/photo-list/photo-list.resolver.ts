import { Injectable } from "../../../../node_modules/@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "../../../../node_modules/@angular/router";
import { Observable } from "../../../../node_modules/rxjs";
import { Photo } from "../photo/photo";
import { PhotoService } from "../photo/photo.service";

@Injectable()
export class PhotoListResolver implements Resolve<Observable<Photo[]>>{

    constructor(private service: PhotoService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]> {
        const username = route.params.userName;
        return this.service.listFromUserPaginated(username, 1);
    }

}
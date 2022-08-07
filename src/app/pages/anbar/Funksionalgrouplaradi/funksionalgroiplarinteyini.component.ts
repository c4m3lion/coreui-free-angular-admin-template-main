import { Component, OnInit } from '@angular/core';

import { ValidatorFn, ValidationErrors, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { freeSet } from '@coreui/icons';
import { IconSetService } from '@coreui/icons-angular';

@Component({
  selector: 'app-funksionalgroiplarinteyini',
  templateUrl: './funksionalgroiplarinteyini.component.html',
  styleUrls: ['./funksionalgroiplarinteyini.component.scss']
})
export class FunksionalGrouplarinTeyiniComponent implements OnInit {
    
    constructor(
        public iconSet: IconSetService
      ) {
        iconSet.icons = { ...freeSet};
      }

    simpleForm: FormGroup = new FormGroup({
        ad: new FormControl(''),
        faizler: new FormGroup({
          first: new FormControl(''),
          second: new FormControl(''),
        })
      });
    
    public adlarList: funksilar[] = [new funksilar("Lab", 10,15,true,Type.Faiz),
        new funksilar("Pcl", 130,1235,false,Type.Manat),
        new funksilar("Lab2", 1,125,false,Type.Faiz)];

    public currentName: funksilar | undefined;

    ngOnInit(): void {
        console.log(this.adlarList);
        
    }

    public rowPressed(selected: funksilar):void{
        this.currentName = selected;
        this.simpleForm.patchValue({
            ad: selected.ad,
            faizler:{
                first: selected.faiz1,
                second: selected.faiz2,
            }
        })
    }

    public newGroup():void{
        this.currentName = undefined;
        this.simpleForm.patchValue({
            ad: "",
            faizler:{
                first: "",
                second: "",
            }
        })
    }

    public editRow(){
        if(this.currentName === undefined){
            let temp = new funksilar(this.simpleForm.value.ad, this.simpleForm.value.faizler.first, this.simpleForm.value.faizler.second, false, Type.Manat);
            this.adlarList.push(temp);
        }
        else{
            let id = this.adlarList.indexOf(this.currentName!,0);
            console.log(id);
            this.adlarList[id].ad = this.simpleForm.value.ad;
            this.adlarList[id].faiz1 = this.simpleForm.value.faizler.first
            this.adlarList[id].faiz2 = this.simpleForm.value.faizler.second
        }
    }

    public deletRow(){
        let id = this.adlarList.indexOf(this.currentName!,0);
        console.log(id);
        this.adlarList.splice(id,1)
    }
}

class funksilar{
    ad: string;
    faiz1: number;
    faiz2: number;
    status: boolean;
    type: Type;

    constructor(ad: string, faiz1: number, faiz2: number, status: boolean, type: Type) {
        this.ad = ad;
        this.faiz1 = faiz1;
        this.faiz2=faiz2;
        this.status = status;
        this.type = type;
    }
}

enum Type {
    Faiz,
    Manat
}
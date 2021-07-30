import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{

    nombre: string = 'Ironman';
    edad: number = 45;

    //Los get en el html se ponen si los parentesis
    get nombreCapitalizado():string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre():string {
        //Esto es para enviar el string seteado, los ascentos abren una cadena de string
        //y dentro van las variables separadas por un espacio y guion
        return `${ this.nombre } - ${ this.edad }`;
    }

    cambiarNombre():void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad():void {
        this.edad = 25;
    }
}
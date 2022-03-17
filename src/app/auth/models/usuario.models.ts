

export class UsuarioDto{
    private readonly nombre:string;
    private readonly correo:string;
    private readonly password:string;
    constructor(nombre:string, correo:string, password:string){
        this.correo=correo;
        this.nombre=nombre;
        this.password=password;
    }
    
    public get getNombre() : string {
        return this.nombre;
    }
    public get getCorreo() : string {
        return this.correo;
    }
    public get getPassword() : string {
        return this.password;
    }
    
    
    // public set value(v : string) {
    //     this. = v;
    // }
    
}
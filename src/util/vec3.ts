export class Vec3{
  private _x:number;
  private _y:number;
  private _z:number;
  constructor(x:number=0.0,y:number=0.0,z:number=0){
    this._x=x;
    this._y=y;
    this._z=z;
  }

  public x(){return this._x;}
  public y(){return this._y;}
  public z(){return this._z;}

  public set(x:number|number[],y?:number,z?:number){
    
  }
}

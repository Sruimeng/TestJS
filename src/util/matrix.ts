export class Mat4 {

  private _data:Float32Array;
  constructor(){
    this._data=new Float32Array(16);
    this._data[0]=this._data[5]=this._data[10]=this._data[15]=1.0;
  }

  public data(){return this._data;}

  public add2(lhs:Mat4, rhs:Mat4) {
    const a=lhs.data,
    b=rhs.data,data=this.data;
    this.data[0]=a[0]+b[0];
    this.data[1]=a[1]+b[1];
    this.data[2]=a[2]+b[2];
    this.data[3]=a[3]+b[3];
    this.data[4]=a[4]+b[4];
    this.data[5]=a[5]+b[5];
    this.data[6]=a[6]+b[6];
    this.data[7]=a[7]+b[7];
    this.data[8]=a[8]+b[8];
    this.data[9]=a[9]+b[9];
    this.data[10]=a[10]+b[10];
    this.data[11]=a[11]+b[11];
    this.data[12]=a[12]+b[12];
    this.data[13]=a[13]+b[13];
    this.data[14]=a[14]+b[14];
    this.data[15]=a[15]+b[15];
    return this;
  }

  add(lhs:Mat4){
    return this.add2(this,lhs);
  }

  
}

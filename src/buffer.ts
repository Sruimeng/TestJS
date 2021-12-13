export class GLBuffer{
  private _gl:WebGLRenderingContext=null;
  private _postion:number[]=[];
  public buffer:WebGLBuffer=null;
  constructor(gl:WebGLRenderingContext,position:number[]){
    this._gl=gl;
    this._postion=position;
    this._bindBuffer();
  }

  private _bindBuffer(){
    const gl=this._gl;
    this.buffer=gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER,this.buffer);
    gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(this._postion),gl.STATIC_DRAW);
  }
}

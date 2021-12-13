/**
 * 暂时不做缓存
 */
const GL_VERTEX_SHADER = 35633;
const GL_FRAGMENT_SHADER = 35632;

let fragShaders={};
let vertShaders={};
export class Shader{
  private _cache:{};
  private _gl:WebGLRenderingContext;
  private _vertexShader:string;
  private _fragmentShader:string;
  private _vs:WebGLShader = null;
  private _fs:WebGLShader = null;
  private _program:WebGLProgram = null;
  constructor(gl:WebGLRenderingContext,vsSource:string,fsSource:string){
   this._gl=gl;
   this._vertexShader=vsSource;
   this._fragmentShader=fsSource;
   this._compile();
  }
  
  public getVertexShader(){return this._vertexShader;}
  public getFragmentShader(){return this._fragmentShader;}
  public getProgram(){return this._program;}
  private _compile(){
    let gl=this._gl;
    try {
      this._vs = this._compileShader(gl.VERTEX_SHADER,this._vertexShader);
      this._fs = this._compileShader(gl.FRAGMENT_SHADER,this._fragmentShader);
      this._program = this._compileProgram();
    } catch (error) {
      console.error(error);
    }
  }
  private _compileProgram(){
    let gl = this._gl;
    let program = gl.createProgram();
    gl.attachShader(program,this._vs);
    gl.attachShader(program,this._fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
			const error = "Couldn't compile shader program: " + gl.getProgramInfoLog(program);
			gl.deleteProgram(program);
			if (!gl.isContextLost()) console.error(error);
		}
		return program;
  }
  private _compileShader(type:number,source:string){
    let gl = this._gl;
    let shader = gl.createShader(type);
    gl.shaderSource(shader,source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader,gl.COMPILE_STATUS)){
      const error="Couldn't compile shader:" + gl.getShaderInfoLog(shader);
      gl.deleteShader(shader);
      if(!gl.isContextLost()) console.error(error);
    }
    return shader;
  }

  public loadShader(type:number){
    this._gl.createShader(type);

    // this._cache = type === GL_VERTEX_SHADER ? vertShaders : fragShaders;
    // const shader = this._cache[]

  }
}

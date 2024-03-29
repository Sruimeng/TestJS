
const canvas = document.body.appendChild(document.createElement('canvas'));
  // 初始化 GL context
  const gl = canvas.getContext("webgl");
  // 获取到才可以继续运行
  if (gl === null) {
    alert("無法初始化 WebGL，您的瀏覽器不支援。");
  }
  
  // 設定清除色彩為黑色，完全不透明
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // 透過清除色來清除色彩緩衝區
  gl.clear(gl.COLOR_BUFFER_BIT);

  
  const vsSource = `
    attribute vec4 aVertexPosition;

    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;

    void main() {
      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
    }
  `;
  const fsSource = `
    void main() {
      gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
    }
  `;

  const shader =new Shader(gl,vsSource,fsSource);
  console.log(shader);

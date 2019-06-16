//Этот файл - первичная точка входа
import "index.scss";

import React from "react";
import ReactDom from "react-dom";

(async function() {
  //Динамический импорт модуля Main. Webpack, автоматически разобьет бандл, на отдельные чанки, при таком подходе
  const { default: App } = await import("lib/App");
  //Вызываем статический Main.init(), дальнейшие действия, начинаются с него
  ReactDom.render(<App />, document.getElementById("root"));
})();

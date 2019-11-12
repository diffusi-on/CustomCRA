//Содержит вспомогательные функции, не связанные с логикой приложения
import { memoize } from "decko";
import Config from "const/Config";
import makeUuid, { URL as uuidUrl } from "uuid/v5";

export default class Utils {
  static uuidNamespace = makeUuid(window.location.origin, uuidUrl);

  //Возвращает тип устройства
  static getClientType() {
    return Utils.checkIsTouchDevice() ? Config.CLIENT_TYPES.MOBILE : Config.CLIENT_TYPES.DESKTOP;
  }

  //Неглубокое сравнение свойств объектов
  static checkShallowEquality(objA, objB) {
    const objPropsA = Object.keys(objA);
    const objPropsB = Object.keys(objB);
    if (objPropsA.length !== objPropsB.length) return false;
    return !objPropsA.some((prop) => {
      return objA[prop] !== objB[prop];
    });
  }

  //Проверка, является ли это тач устройством
  static checkIsTouchDevice() {
    return "ontouchstart" in window;
  }

  //Возвращает уникальный uuid, одинаковый для одного и того-же текста
  @memoize
  static makeUniqueKey(text) {
    return makeUuid(text, Utils.uuidNamespace);
  }

  //Обертка для ajax запросов (через fetch, либо что-то другое)
  static makeAjaxRequest(request, requestParams = null, noDelay = false) {
    if (noDelay) return fetch(request, requestParams);
    return new Promise((resolve, reject) => {
      setTimeout(
        () => {
          fetch(request, requestParams)
            .then((responseData) => { resolve(responseData); })
            .catch((error) => { reject(error); });
        },
        Config.REQUEST_DELAY
      );
    });
  }

  //Запускает функцию, после текущего потока выполнения
  static deferredRun(func, ...args) {
    setTimeout(func, 0, ...args);
  }

  //Преобразовывает строку url-параметров в объект
  @memoize
  static parseQueryString(query) {
    const envVars = {};
    if (query) {
      query.replace(/^\?/, "").split("&").forEach((keyValuePair) => {
        const [key, value] = keyValuePair.split("=");
        envVars[key] = value ? decodeURIComponent(value) : true;
      });
    }
    return envVars;
  }

  //Преобразует объект в строку url-параметров keyA=valueA&keyB=valueB
  static objectToQueryString(paramObj) {
    let result = "";
    Object.keys(paramObj).forEach((prop) => {
      if (prop && paramObj[prop]) {
        if (result.length) result += "&";
        result += encodeURIComponent(prop) + (paramObj[prop] === true ? "" : `=${encodeURIComponent(paramObj[prop])}`);
      } else result += "";
    });
    return result;
  }

  //Заменяет вставки %varName% в текстах, на значения
  static replaceTextVars(text, replacements) {
    let newText = text;
    Object.keys(replacements).forEach((prop) => {
      newText = newText.replace(new RegExp(`%${prop}%`, "g"), replacements[prop]);
    });
    return newText;
  }

  //Делает первую букву каждого слова, заглавной
  @memoize
  static capitalizeText(text) {
    if (!text) return null;
    return text.split(" ").map((word) => word[0].toUpperCase() + word.substring(1)).join(" ");
  }

  //Читает, сохраняет, удаляет данные в session / local storage
  static storageValue(key, value, useSessionStorage = false) {
    const storage = useSessionStorage ? sessionStorage : localStorage;
    try {
      if (value === null) {
        storage.removeItem(key);
        return null;
      }
      if (value !== undefined) {
        storage.setItem(key, value);
        return value;
      }
      return storage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  //Конвертирует целые числа (центы) в формат xxx.xx
  @memoize
  static toMoneyString(money) {
    const centsPerDollar = 100;
    const fractionDigits = 2;
    return (money / centsPerDollar).toFixed(fractionDigits);
  }
}

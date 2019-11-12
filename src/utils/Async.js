//Асинхронные операции
export default class Async {
  //Запускает асинхронные задачи, в последовательном порядке
  static async runInSequence(tasks) {
    const result = await tasks.reduce(
      (promiseChain, currentTask) => {
        return promiseChain.then((chainResults) => currentTask().then((currentResult) => [...chainResults, currentResult]));
      },
      Promise.resolve([])
    );
    return result;
  }
  
  //Запускает асинхронную задачу циклично, пока выполняется условие
  static async loopWhile(task, condition) {
    if (condition) {
      await task();
      await Async.loopWhile(task, condition);
    }
  }
}

export class TransformService {
  static fbObjectToArray(fbData) {
    return Object.keys(fbData).map((keys) => {
      const item = fbData[keys];
      item.id = keys;
      return item;
    });
  }
}

export class UserInfo {
  constructor({userName, userInfo}){
    this._name = document.querySelector(userName);
    this._info = document.querySelector(userInfo);
  }

  getUserInfo(){
    return { //поправил,спасибо!
      name: this._name.textContent,
      comment: this._info.textContent
    };

  }

  setUserInfo(inputData){
    this._name.textContent = inputData.name;
    this._info.textContent = inputData.comment;
  }
}

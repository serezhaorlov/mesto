export class UserInfo {
  constructor({userName, userInfo}){
    this._name = document.querySelector(userName);
    this._info = document.querySelector(userInfo);
  }

  getUserInfo(){
    const userData = {};
    userData.name = this._name.textContent;
    userData.comment = this._info.textContent;
    return userData;
  }

  setUserInfo(inputData){
    this._name.textContent = inputData.name;
    this._info.textContent = inputData.comment;
  }
}

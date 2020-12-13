export class UserInfo {
  constructor({userName, userInfo, userPic}){
    this._name = document.querySelector(userName);
    this._info = document.querySelector(userInfo);
    this._pic = document.querySelector(userPic);
  }

  getUserInfo(){
    return {
      name: this._name.textContent,
      about: this._info.textContent
    };

  }

  setUserInfo(data){
    this._name.textContent = data.name;
    this._info.textContent = data.about;
  }

  setUserPic(inputData) {
    this._pic.src = inputData.avatar;
  }
}

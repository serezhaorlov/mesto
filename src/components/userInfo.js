export class UserInfo {
  constructor({userName, userInfo, userPic}){
    this._name = document.querySelector(userName);
    this._info = document.querySelector(userInfo);
    this._pic = document.querySelector(userPic);
  }

  getUserInfo(){
    return {
      name: this._name.textContent,
      about: this._info.textContent,
      avatar: this._pic.scr //поправил
    };
  }

  setUserInfo(data){
    if (data.name){
      this._name.textContent = data.name;
    }
    if (data.about) {
      this._info.textContent = data.about;
    }
  }

  setUserPic(inputData) {
    if (inputData.avatar) {
      this._pic.src = inputData.avatar;
    } else {
      console.log('error')
    }
  }
}

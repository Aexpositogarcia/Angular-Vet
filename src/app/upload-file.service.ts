import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import * as firebase from 'firebase';
import { FileUpload } from './models/FileUpload';
 

 
@Injectable()
export class UploadFileService {
 
  constructor(private db: AngularFireDatabase) {}
 
  private basePath = '/animales';
 
  pushFileToStorage(fileUpload: FileUpload, progress: {percentage: number},id) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${fileUpload.file.name}`).put(fileUpload.file);
 
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        // in progress
        const snap = snapshot as firebase.storage.UploadTaskSnapshot
        progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100)
      },
      (error) => {
        // fail
        console.log(error)
      },
      ():any => {
        // success
        fileUpload.url = uploadTask.snapshot.downloadURL
        fileUpload.name = fileUpload.file.name
        if(id){
          this.actualizarFileDATA(fileUpload,id);
          
        }else{
          this.saveFileData(fileUpload)
        }
      }
    );
  }
 
  private saveFileData(fileUpload: FileUpload) {
    this.db.list(`${this.basePath}/`).push(fileUpload);
  }

  private actualizarFileDATA(fileUpload: FileUpload,id) {
    this.db.object(`${this.basePath}/`+id).update(fileUpload);
  }

}
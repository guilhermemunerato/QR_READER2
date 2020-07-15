import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Historico } from '../models/Historico';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {

  constructor(private afs: AngularFirestore) { }

  // Create - Criando um elemento no histórico
  public create(historico: Historico){
    return this.afs.collection('historicos').add({ ...historico });
  }

  // GetAll - Pegando todos os elementos do histórico
  public getAll(){
    return this.afs.collection('historicos').snapshotChanges();
  }

  // Update - Atualiza um elemento do histórico
  public update(key: string, historico: Historico){
    return this.afs.doc(`historicos/${key}`).update(historico);
  }

  // Delete - Deleta um elemento do histórico
  public delete(key: string){
    return this.afs.doc(`historicos/${key}`).delete();
  }
}

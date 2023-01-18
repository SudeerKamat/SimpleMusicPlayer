import { LightningElement } from 'lwc';
import music from '@salesforce/resourceUrl/music';
import poster from '@salesforce/resourceUrl/poster';

export default class SimpleMusicPlayer extends LightningElement {
    musicFile = music;
    musicPoster = poster;
}
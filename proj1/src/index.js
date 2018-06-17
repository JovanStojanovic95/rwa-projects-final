import { MovieService } from "./movie-service";
import { Renderer } from "./renderer";
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operator/map';

let service = new MovieService();
let Rx = require('rxjs/Rx');
let renderer = new Renderer(Rx, service);

renderer.render();
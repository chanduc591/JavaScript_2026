import { PI, add } from '../modules/2-export-all.ts';
import {PI as pi, add as sum} from '../modules/1-named-export.ts';

console.log(`PI: ${PI}`);
console.log(`add(2, 3): ${add(2, 3)}`);
console.log(`pi: ${pi}`);
console.log(`sum(5, 7): ${sum(5, 7)}`);
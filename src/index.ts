import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
// const numbersSorter = new Sorter(numbersCollection);
// numbersSorter.sort();
// console.log(numbersCollection.data);

// const charactersCollection = new CharactersCollection('xPoZnbgaUtcsD');
// const stringSorter = new Sorter(charactersCollection);
// stringSorter.sort();
// console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(142);
linkedList.add(-332);
linkedList.add(41);
linkedList.add(-8);

const linkedListSorter = new Sorter(linkedList);
linkedListSorter.sort();
linkedList.print();

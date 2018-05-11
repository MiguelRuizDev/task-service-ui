import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasks = [
        { id: 1, title: 'Miguelito er meho!' },
        { id: 2, title: 'Narco' },
        { id: 3, title: 'Bombasto' }
    ];
    return {tasks};
  }
}
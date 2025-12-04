import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipes'
})
export class PipesPipe implements PipeTransform {

  
  transform(events: any[], showBest: boolean = false): any[] {
    if (!events) return [];

    // Si showBest = true, retourne les top 3
    if (showBest) {
      return [...events]
        .sort((a, b) => b.nbPlaces - a.nbPlaces || b.nbrLike - a.nbrLike)
        .slice(0, 3);
    }

    // Sinon, retourne la liste entière
    return events;
  }

}

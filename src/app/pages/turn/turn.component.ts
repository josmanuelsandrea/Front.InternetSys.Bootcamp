import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Turn } from '../../interfaces/turn';
import { Observable } from 'rxjs';
import { ClientService } from '../../api/client.service';
import { TurnService } from '../../api/turn.service';

@Component({
  selector: 'app-turn',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './turn.component.html',
  styleUrl: './turn.component.css'
})
export class TurnComponent {
  public turn$!: Observable<Turn>;
  @Input()

  turn:string=''

  constructor(
    private route: ActivatedRoute,
    private turS : TurnService,
    ) { }
 

  ngOnInit() {
    this.route.params.subscribe(params => {
      const attentionType = params['attentionType'];
      const clientId = +params['clientId']; 

      
      this.turS.postTurnClient(attentionType,clientId).subscribe((response:any)=>{
       
          
          this.turn= response.data.description,
          
        
        console.log(response.data)
        
      })
    });
    
  }
}

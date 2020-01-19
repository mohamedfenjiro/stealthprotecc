import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
    public timer: number;
    public timerString: string;
    interval;
    // tslint:disable-next-line:array-type
    pieSource: { Brand: string, Amount: number }[] = [
        { Brand: "M 3/3", Amount: 3 },
        { Brand: "L 5/5", Amount: 5 },
        { Brand: "A 5/5", Amount: 5 },
        { Brand: "B 8/8", Amount: 8 },
        { Brand: "C 3/3", Amount: 3 }
    ];
    times = {
        year: 31557600,
        month: 2629746,
        day: 86400,
        hour: 3600,
        min: 60,
        sec: 1
    };

    constructor() {
        this.timer = 0;
        this.timerString = "0"
        this.interval = setInterval(()=>{this.timer++;this.timerString= this.transform(this.timer)}, 1000); 
    }

    transform(seconds){
        let time_string: string = '';
        let plural: string = '';
        for(var key in this.times){
            if(Math.floor(seconds / this.times[key]) > 0){
                if(Math.floor(seconds / this.times[key]) >1 ){
                    plural = 's';
                }
                else{
                    plural = '';
                }

                time_string += Math.floor(seconds / this.times[key]).toString() + ' ' + key.toString() + plural + ' ';
                seconds = seconds - this.times[key] * Math.floor(seconds / this.times[key]);

            }
        }
        return time_string;
    }

    ngOnInit(): void {
    }
}

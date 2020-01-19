import { Component, OnInit } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";
import { Video } from 'nativescript-videoplayer';
registerElement("VideoPlayer", () => Video);

@Component({
    selector: "Browse",
    templateUrl: "./browse.component.html",
    styleUrls: ["./style.css"]
})
export class BrowseComponent implements OnInit {
    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
    }
}

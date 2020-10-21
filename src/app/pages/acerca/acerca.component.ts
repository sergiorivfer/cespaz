import { Component, OnInit } from "@angular/core";
import { NgbModal, NgbModalConfig } from "@ng-bootstrap/ng-bootstrap";
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: "app-acerca",
  templateUrl: "./acerca.component.html",
  styleUrls: ["./acerca.component.css"],
})

export class AcercaComponent{
  closeResult: string;

  constructor( private wowService: NgwWowService, config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = "static";
    config.keyboard = false;
    this.wowService.init();
  }

  openlg(longcontent) {
    this.modalService.open(longcontent, {
      size: "lg",
      windowClass: "dark-modal",
      centered: true,
      backdropClass: "backdrop",
      scrollable: true,
    });
  }
}

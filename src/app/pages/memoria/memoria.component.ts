import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from "@ng-bootstrap/ng-bootstrap";
import { NgwWowService } from 'ngx-wow';
@Component({
  selector: 'app-memoria',
  templateUrl: './memoria.component.html',
  styleUrls: ['./memoria.component.css'],
  providers: [NgbModalConfig, NgbModal],
  styles: [
    `
      .dark-modal .modal-content {
        background-color: #292b2c;
        color: white;
      }
      .dark-modal .close {
        color: white;
      }
      .light-blue-backdrop {
        background-color: #5cb3fd;
      }
    `,
  ],
})
export class MemoriaComponent implements OnInit {
  closeResult: string;
  

  constructor(private wowService: NgwWowService, config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = "static";
    config.keyboard = false;
    this.wowService.init();
  }

  ngOnInit() {}

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

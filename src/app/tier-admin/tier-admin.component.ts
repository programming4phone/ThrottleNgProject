import { Tier } from '../services/entities/tier.model';
import { TierService } from '../services/tier/tier.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/components/common/api';

@Component({
  selector: 'app-tier-admin',
  templateUrl: './tier-admin.component.html',
  styleUrls: ['./tier-admin.component.css']
})
export class TierAdminComponent implements OnInit {

  public tiers: Tier[];
  public msgs: Message[] = [];

  public inpSpeed: string;
  public inpThreshhold: number;

  private MESSAGE_SEVERITY_SUCCESS = 'success';
  private MESSAGE_SEVERITY_ERROR = 'error';
  private MESSAGE_SUMMARY_ADD_TIER = 'Add Tier';
  private MESSAGE_SUMMARY_DELETE_TIER = 'Delete Tier';
  private MESSAGE_SUMMARY_GETALL_TIER = 'Get All Tiers';

  constructor(private tierService: TierService) { }

  ngOnInit() {
    this.getAllTiers();
  }

  private getAllTiers() {
    this.tiers = [];
    this.tierService.getAllTiers().subscribe(
      data => {
        this.tiers = data;
      },
      (err: HttpErrorResponse) => {
        let errMsg: string;
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          errMsg = `getAllTiers webservice error occurred: ${err.error.message}`;
          this.displayError(this.MESSAGE_SUMMARY_GETALL_TIER, errMsg);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong
          if (err.status === 404) {
            errMsg = `getAllTiers webservice No tiers found`; // This really isn't an error, so no growl is needed only console log
          } else {
            errMsg = `getAllTiers webservice returned code ${err.status}, body was: ${err.error}`;
            this.displayError(this.MESSAGE_SUMMARY_GETALL_TIER, errMsg);
          }
        }
        console.log(errMsg);
      });
  }

  private displayError(summaryMsg: string, errMsg: string) {
    this.msgs = [];
    this.msgs.push({severity: this.MESSAGE_SEVERITY_ERROR,
          summary: summaryMsg, detail: errMsg });
  }

  private displaySuccess(summaryMsg: string, successMsg: string) {
    this.msgs = [];
    this.msgs.push({severity: this.MESSAGE_SEVERITY_SUCCESS,
          summary: summaryMsg, detail: successMsg });
  }

  private addTier() {
    this.tierService.addTier(this.inpSpeed, this.inpThreshhold).subscribe(
      data => {
        const successMsg = `Successfully added tier<br/>Speed: ${this.inpSpeed}<br/>Threshold: ${this.inpThreshhold}`;
        this.displaySuccess(this.MESSAGE_SUMMARY_ADD_TIER, successMsg);
        this.inpSpeed = '';
        this.inpThreshhold = 0;
      },
      (err: HttpErrorResponse) => {
        let errMsg: string;
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          errMsg = `addTier webservice error occurred: ${err.error.message}`;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong
          if (err.status === 400) {
            errMsg = `Invalid Tier information`;
          } else {
            errMsg = `addTier webservice returned code ${err.status}, body was: ${err.error}`;
          }
        }
        console.log(errMsg);
        this.displayError(this.MESSAGE_SUMMARY_ADD_TIER, errMsg);
      },
      () => {
          this.getAllTiers();
      });
  }

  private deleteTier(speed: string) {
    this.tierService.deleteTier(speed).subscribe(
      data => {
        const successMsg = `Successfully deleted tier`;
        this.displaySuccess(this.MESSAGE_SUMMARY_DELETE_TIER, successMsg);
      },
      (err: HttpErrorResponse) => {
        let errMsg: string;
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          errMsg = `deleteTier webservice error occurred: ${err.error.message}`;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong
          if (err.status === 400) {
            errMsg = `Invalid Tier information`;
          } else {
            errMsg = `deleteTier webservice returned code ${err.status}, body was: ${err.error}`;
          }
        }
        console.log(errMsg);
        this.displayError(this.MESSAGE_SUMMARY_DELETE_TIER, errMsg);
      },
      () => {
        this.getAllTiers();
      });
  }
}
